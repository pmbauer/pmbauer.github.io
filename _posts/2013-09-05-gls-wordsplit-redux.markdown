---
layout: post
title:  "Guy Lewis Steele's Wordsplit, Redux"
date:   2013-09-05 07:00:00
tags:   algorithms clojure parallelism fork/join
---

#### previously on 24 ...

[Guy Lewis Steele's Wordsplit and the Reducers][1] -
in which we applied GLS' algorithm on `clojure.core.reducers/fold` and learned some limitations.
We then used some trickery to batch-reduce text sections on fork/join and successfully split text in parallel.

But the final concatenation of segments was lazy. Realizing that laziness was costly, so costly as to nearly negate all parallel performance gains.

#### the turn
Realizing that laziness in the fork/join pool caused a lot of memory thrashing when combining segments.
To fix, we slightly modify the shape of our Segment and the approach to combine.

The key is for Segment to hold a vector of vector of words rather than a vector of words,
thus avoiding a new temporary vector the size of the sum of the number of words in the two segments for every combine.

#### the diff

{% highlight diff %}
 (defn maybe-word [s]
   (if (str/blank? s)
     []
-    [s]))
+    [[s]]))
 
 (defn wordstate->words [{:keys [s l m r] :as word-state}]
-  (condp = (type word-state)
-    Chunk (maybe-word s)
-    Segment (concat (maybe-word l) m (maybe-word r))))
+  (reduce into []
+          (condp = (type word-state)
+            Chunk (maybe-word s)
+            Segment (reduce into [] [(maybe-word l)
+                                     m
+                                     (maybe-word r)]))))
 
 (defmethod plus [Segment Segment] [^Segment a ^Segment b]
   (segment (.-l a)
-           (vec (concat (.-m a)
-                          (maybe-word (str (.-r a) (.-l b)))
-                          (.-m b)))
+           (reduce into [] [(.-m a)
+                            (maybe-word (str (.-r a) (.-l b)))
+                            (.-m b)])
            (.-r b)))
 
 (defn string->wordstate [^Pattern re ^String s]
   (let [splits (str/split s re)
         splitcount (count splits)]
     (if (= 0 splitcount)
       S-ZERO
       (let [last-split (nth splits (dec splitcount))
             end-match? (not= (.lastIndexOf s ^String last-split)
                              (- (count s) (count last-split)))]
         (if (and (= 1 splitcount) (not end-match?))
           (chunk last-split)
           (segment (first splits)
                    (->> (subvec splits 1 (- splitcount (if end-match? 0 1)))
-                        (remove str/blank?))
+                        (remove str/blank?)
+                        vec
+                        vector)
                    (if end-match? "" last-split)))))))
{% endhighlight %}

There was also a change to foldstr of marginal performance value.
Here is the [full diff][2].

####results

{% highlight clojure %}
;; Test Setup:
;; amd64 Linux 3.2.0-52-generic, 6-cores
;; Java HotSpot(TM) 64-Bit Server VM 23.21-b01
;; Runtime arguments: -XX:-UseConcMarkSweepGC -Xmx8G
;; note: caution when testing on leiningen,
;;       use :jvm-opts ^:replace [...]

(require '[criterium.core :refer :all])
(require '[pmbauer.text.generator :refer [corpus]])

;; avg word length = (1 + 16) / 2 = 8.5
;; avg space length = (1 + 2) / 2 = 1.5
;; avg length of text = (avg word length + avg space length) * nr of words
;; at 16 bits per word 1 million words is 16 * ~10 * 1 million = ~19MB
(def text (corpus 1000000))

(bench (def splits (into [] (split #"\s" text))))
;; =>                 Evaluation count : 300 in 60 samples of 5 calls.
;;          Execution time sample mean : 250.586529 ms
;;                 Execution time mean : 250.600045 ms
;; Execution time sample std-deviation : 1.919389 ms
;;        Execution time std-deviation : 1.949451 ms
;;       Execution time lower quantile : 246.714536 ms ( 2.5%)
;;       Execution time upper quantile : 254.311638 ms (97.5%)

(bench (def splits (psplit #"\s" text)))
;; =>                 Evaluation count : 600 in 60 samples of 10 calls.
;;          Execution time sample mean : 101.433418 ms
;;                 Execution time mean : 101.436171 ms
;; Execution time sample std-deviation : 1.211702 ms
;;        Execution time std-deviation : 1.224329 ms
;;       Execution time lower quantile : 99.093977 ms ( 2.5%)
;;       Execution time upper quantile : 103.628691 ms (97.5%)

;; note: psplit returns a vector, split returns a lazy seq
{% endhighlight %}

####conclusion
Previously, we lost almost all speedup due to serially realizing lazy seqs.  
There are certainly gains yet to make with regard to efficient use of memory, but the concept seems sound.

[1]: http://pmbauer.github.io/2013/09/03/gls-wordsplit-and-the-reducers
[2]: https://github.com/pmbauer/blogcode.text/commit/5798a79e5ba092fe00f067938cdb71883903217d
