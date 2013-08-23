---
title: About
tagline: "(:author site)"
layout: page
group: navigation
---
{% include JB/setup %}
{% highlight clojure %}
{:name "{{ site.author.name }}"
 :social {:github "{{ site.author.github }}"
          :twitter "{{ site.author.twitter }}"
          :google+ "{{ site.author.gplus }}"}}
{% endhighlight %}

&nbsp;  

[![github]({{ BASE_PATH }}/assets/img/octocat.png)](https://github.com/{{ site.author.github }}) &nbsp;&nbsp;&nbsp;
[![google+]({{ BASE_PATH }}/assets/img/googleplus.gif)](https://plus.google.com/{{ site.author.gplus }}/about) &nbsp;&nbsp;&nbsp;
[![twitter]({{ BASE_PATH }}/assets/img/twitter.gif)](https://twitter.com/{{ site.author.twitter }})