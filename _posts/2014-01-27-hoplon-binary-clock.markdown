---
layout: post
title:  "Reactive Binary Clock, Hoplon Edition"
date:   2014-01-27 08:00:00
tags:   clojure clojurescript lisp ui dataflow reactive
---

[Demo](/assets/posts/binary-clock) • [Source Code](https://github.com/pmbauer/binary-clock/blob/master/src/index.cljs.hl)  
_This post was inspired by Fredrik Dyrkell's [Binary clock with Om, Clojurescript and React][9], Om [code here](https://github.com/fredyr/binclock/blob/master/src/binclock/core.cljs)_

---

<a href="/assets/posts/binary-clock"><img src="/assets/posts/binary-clock/ss.png" style="float:right;"/></a>

[Reactive programming][1] is taking a ride on the Computer Science [pop culture][2] carousel, and attracts an impressive list of corporate sponsors:
[React][3] (Facebook),
[Rx][4] (Microsoft),
[RxJava][5] (Netflix),
[Elm][6] (Prezi).


In the Clojure world, two libraries getting buzz with reactive cores are [Om][7] (built on React) and [Hoplon][8].  

Om and a [post by Fredrik Dyrkell][9] inspired this binary clock demo in Hoplon.

###Hoplon

Hoplon is ambitious, seeking to unify HTML page markup and the JavaScript environment.

* HTML tags have all the compositional advantages of first-class functions
* the UI reacts to model changes
* the model is a spreadsheet-like dataflow.

For details, check out [Hoplon.io - Getting Started][10] and Alan Dipert's [design summary][15].

So what does it buy us?

###the payoff
{% highlight clojure %}
(html
  (body
    (let [current-time (cell (js/Date.))]
      (js/setInterval #(reset! current-time (js/Date.)) 1000)
      (clock :time (time->model current-time) :legend [8 4 2 1]))))
{% endhighlight %}

That's it.  That's the heart of [our demo](/assets/posts/binary-clock) code; thank you all for coming. :)

These all compose.

* HTML elements - `html`, `body`
* custom UI elements - `clock`
* ClojureScript forms - `let`, function literal
* JavaScript runtime - `js/setInterval`, `js/Date`
* reactive model - `cell`

With ClojureScript and Hoplon, HTML is lifted into first class functions.  HTML is Lisp.

###stem cells
[Javeline][11] is Hoplon's reactive core.

> ...a spreadsheet-like dataflow library for managing client state. Hoplon tightly integrates with Javelin to reactively bind DOM elements to the underlying Javelin cell graph.

As with spreadsheet input cells, data flow models start with stem cells.

Our stem cell holds a JavaScript date to represent the current time. Later, we build a graph of formula cells and UI elements that react when input cell values change.

{% highlight clojure %}
(let [current-time (cell (js/Date.))]
  ...)
{% endhighlight %}

###controller
Once per second, update the value in our stem cell.
{% highlight clojure %}
(js/setInterval #(reset! current-time (js/Date.)) 1000)
{% endhighlight %}

###model
The leaves of the graph returned by `time-model` are all formula cells that react to changes from their parents and drive the binary clock UI.
{% highlight clojure %}
(defn n->bits
  "number => [[base-10-digit bit-list]+]
  e.g 53 => [[5 [false true false false]] [3 [true false false false]]]"
  [n]
  (mapv (fn [digit]
          [digit (mapv #(cell= (bit-test digit %)) [3 2 1 0])])
        [(cell= (quot n 10)) (cell= (mod n 10))]))

(defn time->model
  "binary clock dataflow, takes a stem cell holding a js/Date"
  [time]
  {:hours   (n->bits (cell= (.getHours time)))
   :minutes (n->bits (cell= (.getMinutes time)))
   :seconds (n->bits (cell= (.getSeconds time)))})
{% endhighlight %}

Formula cells are created with `cell=` and react to changes from any lexically-referenced input cell.

###view
To build up our UI, we create four custom elements: *led*, *column*, *column-pair*, *clock*.

{% highlight clojure linenos=table %}
(defelem led
  [{:keys [on]} _]
  (div :do-class (cell= {:unit true :on on :off (not on)})))

(defelem column
  [{[digit bits] :state} _]
  (div :class "col"
    (conj (mapv (partial led :on) bits)
          (div :class "unit" (text "~{digit}")))))
{% endhighlight %}

The Hoplon [Getting Started][10] guide covers elements, so a few highlights:

1. Elements are just functions, see `(partial led :on)` (line 8)
2. The first element argument is a map of attributes (line 2, 6, 8)
3. The last element argument is a list of child elements. Lines 8-9 use ClojureScript HOFs and persistent manipulation to build a mixed vector of `led`'s and div tag children. (line 8)
4. `text` is a macro that does some string interpolation and wires the input cell to the value of a text node. (line 10)
5. The model leaf nodes - `on`, `digit` - can be simple values or cells.  This polymorphism helps separate UI and model development.

Finally, the clock element.

{% highlight clojure %}
(defelem column-pair
  [{[msd lsd] :state} _]
  (div :class "colpair"
    (column :state msd)
    (column :state lsd)))

(defelem clock
  [{legend :legend {:keys [hours minutes seconds]} :time} _]
  (div
    (div :class "col legend" (map #(div :class "unit" (str %)) legend))
    (column-pair :state hours)
    (column-pair :state minutes)
    (column-pair :state seconds)))
{% endhighlight %}

###observations

####abstraction
Hoplon's goals remind me of [Elm][6]'s - unify HTML and program logic with a functional reactive core.  Hoplon doesn't go as far as Elm in that layout and styling are still CSS.  But wholesale hiding the underlying runtime is also an expressiveness drawback - it limits what is possible.

Hoplon seems to have found a sweet spot, lifting HTML into Lisp while embracing its host runtime.

####consistency
With composable UI abstractions comes a challenge to maintain consistent state between components.

One approach is that taken by Om - all state in a ClojureScript atom with components sharing it via cursors.

Dataflow is Hoplon's story for state consistency.  Cells are simples; cell graphs and custom elements compose seamlessly with ClojureScript and Hoplon's HTML abstractions.  There are no protocols to implement or bespoke scoping and access rules, just functions all the way down.

####fad?
<img src="http://i.imgur.com/SDmzvKN.jpg"/>

Tim Bray [recently lamented][12] the state-of-the-art for building client-side software, and the competing solutions seem more numerous than the problems.

So is this just another over-hyped silver bullet?

Reactive programming [is trendy][13].  But like most good ideas in Computer Science, this one [is old][14]. The spreadsheet model is declarative, proven, and arguably the most successful UI model in extant.

###acknowledgments

Thanks to [Micha Niskin](https://github.com/micha) and my co-worker [Alan Dipert](https://github.com/alandipert) for authoring Hoplon and giving feedback on this article.
Thanks to [Fredrik Dyrkell](https://github.com/fredyr) for writing the ClojureScript/React/Om binary clock.

###references
[INRIA Reactive Programming][1]  
[Alan Kay on CS pop culture][2]  
[Facebook React][3]  
[Microsoft Rx][4]  
[Netflix RxJava][5]  
[Elm Language][6]  
[Om source][7]  
[ClojureScript/React/Om Binary Clock][9]  
[Hoplon.io][8]  
[Hoplon.io: Getting Started][10]  
[Hoplon design summary][15]  
[Javelin][11]  
[Software in 2014 - Tim Bray][12]  
[Reactive Manifesto][13]  
[LANPAR Spreadsheet][14]  

[1]: http://www-sop.inria.fr/mimosa/rp/generalPresentation/index.html
[2]: http://queue.acm.org/detail.cfm?id=1039523
[3]: http://facebook.github.io/react
[4]: https://rx.codeplex.com
[5]: https://github.com/Netflix/RxJava
[6]: http://elm-lang.org
[7]: https://github.com/swannodette/om
[8]: http://hoplon.io
[9]: http://www.lexicallyscoped.com/2014/01/23/clojurescript-react-om-binary-clock.html
[10]: http://hoplon.io/#/getting-started
[11]: https://github.com/tailrecursion/javelin
[12]: https://www.tbray.org/ongoing/When/201x/2014/01/01/Software-in-2014
[13]: http://www.reactivemanifesto.org
[14]: http://www.renepardo.com/articles/spreadsheet.pdf
[15]: https://groups.google.com/d/msg/clojure/gRFyzvRfPa8/QY_HvjaVfvUJ
