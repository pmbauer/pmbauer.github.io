---
layout: post
title:  "Guy Lewis Steele's Wordsplit and the Reducers"
date:   2013-09-03 08:00:00
tags:   algorithms clojure parallelism fork/join
---

At the [2009 ICFP][1], Guy L. Steel gave the talk
[*Organizing Functional Code for Parallel Execution: or, foldl and foldr Considered Slightly Harmful*][2] ([slides][3])
where he described algebraic properties necessary for parallel
execution. One example was a wordsplit algorithm composed of
associative operations, thus parallelizable.

This talk and Haskell's Iteratee library [inspired Rich Hickey][4]
to add reducers to the [core Clojure library][5].

So can we port GLS's wordsplit from Fortress to Clojure and run it on
[`clojure.core.reducers/fold`][6]?  

*Yes, but you won't like the results!*

That's the bad news. The good news is we can run it
on a [variation](#foldstr-9) of [`fold`][6] for a parallel speed boost.

###setup
All code snippets here are REPL-friendly.  
You can also find the project here:
[https://github.com/pmbauer/blogcode.text][12]

###the port
On [Slide 58][3] GLS shows an iterative word-split. The fastest such split near-to-hand is [`java.util.regex.Pattern::split`][7]. You might try besting it, but chances of success are sad. So ...

{% highlight clojure %}
(require '[clojure.string :as str])
(import '[java.util.regex Pattern])

(set! *warn-on-reflection* true)

(defn split [^Pattern re s]
  (remove str/blank? (str/split s re)))

(split #"\s" "The\n quick   brown fox  ")
;; => ("The" "quick" "brown" "fox")
{% endhighlight %}

The heart of GLS' parallel word-split is an associatively composable abstraction for text segments.

We achieve parallelism by arbitrarily partitioning the larger text into smaller pieces for splitting.  As these smaller pieces are represented by the abstraction, we combine after splitting those pieces.

{% highlight clojure %}
(defrecord Chunk [s])
(defrecord Segment [l m r])

(defn chunk
  ([a1] (->Chunk (str a1)))
  ([] (chunk ""))
  ([a1 a2] (chunk (str a1 a2))))

(defn segment
  ([l m r] (->Segment l m r))
  ([] (segment "" [] "")))

(def ^:const C-ZERO (chunk))
(def ^:const S-ZERO (segment))
{% endhighlight %}

Chunks have a string with no word boundaries.

Segments have three ordered parts:

* l - string with no word boundary, implied word boundary with `(first m)`
* m - list of known words between `l` and `r`
* r - string with no word boundary, implied word boundary with `(last m)`

Chunks and Segments also have zero or identity values (i.e combining the respective zero value with another Chunk or Segment produces the same Chunk or Segment).

### how to combine?

The Fortress example uses a double-dispatch method, &oplus;.  Clojure doesn't have double-dispatch *per-se*, but it has something more powerful - [multimethods][8].

{% highlight clojure %}
(defn maybe-word [s]
  (if (str/blank? s)
    []
    [s]))

(defmulti plus #(map type %&))

(defmethod plus '() []
  C-ZERO)

(defmethod plus [Chunk Chunk] [^Chunk a ^Chunk b]
  (chunk (.-s a) (.-s b)))

(defmethod plus [Chunk Segment] [^Chunk a ^Segment b]
  (segment (str (.-s a) (.-l b))
           (.-m b)
           (.-r b)))

(defmethod plus [Segment Chunk] [^Segment a ^Chunk b]
  (segment (.-l a)
           (.-m a)
           (str (.-r a) (.-s b))))

(defmethod plus [Segment Segment] [^Segment a ^Segment b]
  (segment (.-l a)
           (concat (.-m a)
                   (maybe-word (str (.-r a) (.-l b)))
                   (.-m b))
           (.-r b)))
{% endhighlight %}

Note that `plus` invoked with no arguments returns the `Chunk` zero value.  This is an important property of combine functions for use with [`clojure.core.reducers/fold`][6].

To recap, we have an abstraction for text sections that has:

1. an associative, binary combine operation between sections - order doesn't matter
2. zero values

*Sniff,* *sniff*. I smell a [monoid][9].

###core.reducers

This is fantastic because [`fold`][6] needs exactly that - a [`monoid`][10].

Out-of-the-box, [`fold`][6] doesn't work on strings, but that is easily fixed.

First, we create a helper `foldstr` based on [`foldvec`][11].  There is one key difference beyond replacing `subvec` with `.substring`; we will discuss this later.

{% highlight clojure lineanchors=foldstr %}
(require '[clojure.core.reducers :as r])

;; In clojure, "private" isn't.
(def ^:const fjinvoke @#'r/fjinvoke)
(def ^:const fjfork @#'r/fjfork)
(def ^:const fjjoin @#'r/fjjoin)
(def ^:const fjtask @#'r/fjtask)

(defn foldstr [^String s n combinef sequential-reducef]
  (cond
   (empty? s) (combinef)
   (<= (count s) n) (sequential-reducef s)
   :else
   (let [split (quot (count s) 2)
         v1 (.substring s 0 split)
         v2 (.substring s split (count s))
         fc (fn [child] #(foldstr child n combinef sequential-reducef))]
     (fjinvoke #(let [f1 (fc v1)
                      t2 (fjtask (fc v2))]
                  (fjfork t2)
                  (combinef (f1) (fjjoin t2)))))))
{% endhighlight %}

Finally, some protocol magic and strings are foldable!

{% highlight clojure %}
(extend-protocol r/CollFold
  String
  (coll-fold [s n combinef reducef]
    (foldstr s n combinef #(reduce reducef (combinef) %))))
{% endhighlight %}

###the agony

And we've arrived.  GLS word split on Clojure reducers!

{% highlight clojure %}
(defn reducer [result ch]
  (plus result (if (= ch \space)
                 S-ZERO
                 (chunk ch))))

(defn wordstate->words [{:keys [s l m r] :as word-state}]
  (condp = (type word-state)
    Chunk (maybe-word s)
    Segment (concat (maybe-word l) m (maybe-word r))))

(defn split-reducers
  ([s] (split-reducers 8192 s))
  ([chunk-size s]
     (wordstate->words (r/fold chunk-size plus reducer s))))
{% endhighlight %}

Does it work?

{% highlight clojure %}
(split-reducers " The quick   brown fox  ")
;; => ("The" "quick" "brown" "fox")
(split-reducers 2 " The quick   brown fox  ")
;; => ("The" "quick" "brown" "fox")
{% endhighlight %}

Yay!

{% highlight clojure %}
(split-reducers a-moderate-amount-of-text)
;; => weeping and wailing and gc thrashing of teeth
{% endhighlight %}

Great multi-order-of-magnitude-worse-than-iterative-split Batman!

*Sigh*

So what gives?

Clojure reducers/fold [diverge][4] from GLS talk in one key way.  
It uses the combine function (`plus`) at the partition boundaries **and** at the leaves.

**Update to clarify:** *You can specify a reducing function separate from the combine function, but each intermediate reduction must be consumable by combine.*

It is an elegant simplification that works well for some domains, especially when the accumulator is a primitive.  
But the simplification is poorly suited if the reduce function allocates new objects for each reduction step. Welcome to garbage-collection purgatory.

![bad time]({{ BASE_PATH }}/assets/img/heapsbadtime2.jpg)

###batch it in place
Plusing each char onto the accumulated result is a non-starter.

What we need is a function that jumps straight from a string to a wordstate object without all the intermediate Chunks and Segments.

{% highlight clojure %}
(defn string->wordstate [^Pattern re ^String s]
  (let [splits (.split re s)
        splitcount (count splits)]
    (if (= 0 splitcount)
      S-ZERO
      (let [last-split (nth splits (dec splitcount))
            end-match? (not= (.lastIndexOf s ^String last-split)
                             (- (count s) (count last-split)))]
        (if (and (= 1 splitcount) (not end-match?))
          (chunk last-split)
          (segment (first splits)
                   (->> (drop 1 splits)
                        (take (- splitcount (if end-match? 1 2)))
                        (remove str/blank?))
                   (if end-match? "" last-split)))))))
{% endhighlight %}

That should make your eyes bleed a bit.

`Pattern::split` inconsistently represents word boundary matches in the `splits` array, so we must resort to some deviousness.  But the payoff? `string->wordstate` minimizes intermediate throwaway objects.

###i wanna fold
Now that we have our fancy "batch-reduce", can we go back to fold?

Nope.  Fold still takes a combine function and forces an element-wise reduce at the leaves.

So [`fold`][6] is out.

But we can still use [`foldstr`](#foldstr-9).  Remember our [key deviation](#foldstr-12) from `foldvec`?

{% highlight clojure %}
;; foldvec ...
(<= (count v) n) (reduce reducef (combinef) v)

;; vs. foldstr ...
(<= (count s) n) (sequential-reducef s)
{% endhighlight %}

###the ecstasy

{% highlight clojure %}
(defn guess-chunk-size [s]
  (/ (count s)
     (* 2 (.availableProcessors (Runtime/getRuntime)))))

(defn psplit
  ([^Pattern re s]
     (psplit re (guess-chunk-size s) s))
  ([^Pattern re chunk-size s]
     (wordstate->words (foldstr s chunk-size plus #(string->wordstate re %)))))
{% endhighlight %}

And now we have parallel split.

To test this, we'll leverage [criterium](https://github.com/hugoduncan/criterium) and [data.generators](https://github.com/clojure/data.generators) to [generate random input][13].

{% highlight clojure %}
;; Test Setup:
;; amd64 Linux 3.2.0-52-generic, 6-cores
;; Java HotSpot(TM) 64-Bit Server VM 23.21-b01
;; Runtime arguments: -XX:-UseConcMarkSweepGC
;; note: caution when testing on leiningen,
;;       use :jvm-opts ^:replace [...]

(require '[criterium.core :refer :all])
(require '[pmbauer.text.generator :refer [corpus]])

;; avg word length = (1 + 16) / 2 = 8.5
;; avg space length = (1 + 2) / 2 = 1.5
;; avg length of text = (avg word length + avg space length) * nr of words
;; at 16 bits per word 1 million words is 16 * ~10 * 1 million = ~19MB
(def text (corpus 1000000))

(bench (def splits (split #"\s" text)))
;; => Execution time mean : 207.185921 ms

(bench (def splits (psplit #"\s" text)))
;; => Execution time mean : 61.237389 ms
{% endhighlight %}
<sub>[criterium report][14]</sub>

[1]: http://www.cs.nott.ac.uk/~gmh/icfp09.html
[2]: http://vimeo.com/6624203
[3]: {{ BASE_URL }}/assets/slides/ICFPAugust2009Steele.pdf
[4]: http://clojure.com/blog/2012/05/15/anatomy-of-reducer.html
[5]: https://github.com/clojure/clojure/blob/master/src/clj/clojure/core/reducers.clj
[6]: http://clojure.github.io/clojure/clojure.core-api.html#clojure.core.reducers/fold
[7]: http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html#split%28java.lang.CharSequence%29
[8]: http://clojure.org/multimethods
[9]: http://en.wikipedia.org/wiki/Monoid
[10]: http://clojure.github.io/clojure/clojure.core-api.html#clojure.core.reducers/monoid
[11]: https://github.com/clojure/clojure/blob/f3259f4f34a68eae7db7efc0be9d19fa5dafbd3c/src/clj/clojure/core/reducers.clj#L331
[12]: https://github.com/pmbauer/blogcode.text
[13]: https://github.com/pmbauer/blogcode.text/blob/master/src/pmbauer/text/generator.clj#L22
[14]: https://gist.github.com/pmbauer/6422365/raw/83967e80169f998ee0a8f5f36b7e86f0c2daf384/metrics
