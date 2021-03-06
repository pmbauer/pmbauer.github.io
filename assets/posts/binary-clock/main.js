/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
var f, aa = this;
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function ea(a) {
  for (var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
}
;function fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ga(a, b) {
  null != a && this.append.apply(this, arguments);
}
ga.prototype.Ba = "";
ga.prototype.append = function(a, b, c) {
  this.Ba += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ba += arguments[d];
    }
  }
  return this;
};
ga.prototype.toString = function() {
  return this.Ba;
};
var ha, ia = null;
function ja() {
  return new ka(null, 5, [la, !0, ma, !0, oa, !1, pa, !1, qa, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function ra(a) {
  return q(a) ? !1 : !0;
}
function r(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : s ? !1 : null;
}
function sa(a) {
  return null == a ? null : a.constructor;
}
function t(a, b) {
  var c = sa(b), c = q(q(c) ? c.Qb : c) ? c.Ob : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ua(a) {
  var b = a.Ob;
  return q(b) ? b : "" + v(a);
}
function va(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var wa = {}, xa = {};
function ya(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = ya[m(null == a ? null : a)];
  if (!b && (b = ya._, !b)) {
    throw t("ICounted.-count", a);
  }
  return b.call(null, a);
}
function za(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = za[m(null == a ? null : a)];
  if (!b && (b = za._, !b)) {
    throw t("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var Aa = {};
function Ba(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = Ba[m(null == a ? null : a)];
  if (!c && (c = Ba._, !c)) {
    throw t("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ca = {}, w = function() {
  function a(a, b, c) {
    if (a ? a.X : a) {
      return a.X(a, b, c);
    }
    var h;
    h = w[m(null == a ? null : a)];
    if (!h && (h = w._, !h)) {
      throw t("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.o : a) {
      return a.o(a, b);
    }
    var c;
    c = w[m(null == a ? null : a)];
    if (!c && (c = w._, !c)) {
      throw t("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Da = {};
function Ea(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = Ea[m(null == a ? null : a)];
  if (!b && (b = Ea._, !b)) {
    throw t("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Fa(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = Fa[m(null == a ? null : a)];
  if (!b && (b = Fa._, !b)) {
    throw t("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ga = {}, Ha = {}, Ia = function() {
  function a(a, b, c) {
    if (a ? a.v : a) {
      return a.v(a, b, c);
    }
    var h;
    h = Ia[m(null == a ? null : a)];
    if (!h && (h = Ia._, !h)) {
      throw t("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.u : a) {
      return a.u(a, b);
    }
    var c;
    c = Ia[m(null == a ? null : a)];
    if (!c && (c = Ia._, !c)) {
      throw t("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Ja(a, b) {
  if (a ? a.Fa : a) {
    return a.Fa(a, b);
  }
  var c;
  c = Ja[m(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw t("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Ka(a, b, c) {
  if (a ? a.ka : a) {
    return a.ka(a, b, c);
  }
  var d;
  d = Ka[m(null == a ? null : a)];
  if (!d && (d = Ka._, !d)) {
    throw t("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ma = {};
function Na(a, b) {
  if (a ? a.Ha : a) {
    return a.Ha(a, b);
  }
  var c;
  c = Na[m(null == a ? null : a)];
  if (!c && (c = Na._, !c)) {
    throw t("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Oa = {};
function Pa(a) {
  if (a ? a.Ia : a) {
    return a.Ia(a);
  }
  var b;
  b = Pa[m(null == a ? null : a)];
  if (!b && (b = Pa._, !b)) {
    throw t("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Qa(a) {
  if (a ? a.Ya : a) {
    return a.Ya(a);
  }
  var b;
  b = Qa[m(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw t("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ra = {};
function Sa(a, b) {
  if (a ? a.Lb : a) {
    return a.Lb(0, b);
  }
  var c;
  c = Sa[m(null == a ? null : a)];
  if (!c && (c = Sa._, !c)) {
    throw t("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Ta(a) {
  if (a ? a.ma : a) {
    return a.ma(a);
  }
  var b;
  b = Ta[m(null == a ? null : a)];
  if (!b && (b = Ta._, !b)) {
    throw t("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Ua(a) {
  if (a ? a.na : a) {
    return a.na(a);
  }
  var b;
  b = Ua[m(null == a ? null : a)];
  if (!b && (b = Ua._, !b)) {
    throw t("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Va = {};
function Wa(a, b, c) {
  if (a ? a.ya : a) {
    return a.ya(a, b, c);
  }
  var d;
  d = Wa[m(null == a ? null : a)];
  if (!d && (d = Wa._, !d)) {
    throw t("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function y(a) {
  if (a ? a.Gb : a) {
    return a.state;
  }
  var b;
  b = y[m(null == a ? null : a)];
  if (!b && (b = y._, !b)) {
    throw t("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Xa = {};
function Ya(a) {
  if (a ? a.A : a) {
    return a.A(a);
  }
  var b;
  b = Ya[m(null == a ? null : a)];
  if (!b && (b = Ya._, !b)) {
    throw t("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Za = {};
function $a(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = $a[m(null == a ? null : a)];
  if (!c && (c = $a._, !c)) {
    throw t("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var ab = {}, bb = function() {
  function a(a, b, c) {
    if (a ? a.N : a) {
      return a.N(a, b, c);
    }
    var h;
    h = bb[m(null == a ? null : a)];
    if (!h && (h = bb._, !h)) {
      throw t("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.M : a) {
      return a.M(a, b);
    }
    var c;
    c = bb[m(null == a ? null : a)];
    if (!c && (c = bb._, !c)) {
      throw t("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function db(a, b) {
  if (a ? a.s : a) {
    return a.s(a, b);
  }
  var c;
  c = db[m(null == a ? null : a)];
  if (!c && (c = db._, !c)) {
    throw t("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function eb(a) {
  if (a ? a.t : a) {
    return a.t(a);
  }
  var b;
  b = eb[m(null == a ? null : a)];
  if (!b && (b = eb._, !b)) {
    throw t("IHash.-hash", a);
  }
  return b.call(null, a);
}
var fb = {};
function gb(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = gb[m(null == a ? null : a)];
  if (!b && (b = gb._, !b)) {
    throw t("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var hb = {}, ib = {};
function jb(a) {
  if (a ? a.Ja : a) {
    return a.Ja(a);
  }
  var b;
  b = jb[m(null == a ? null : a)];
  if (!b && (b = jb._, !b)) {
    throw t("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function kb(a, b) {
  if (a ? a.vb : a) {
    return a.vb(a, b);
  }
  var c;
  c = kb[m(null == a ? null : a)];
  if (!c && (c = kb._, !c)) {
    throw t("ISorted.-sorted-seq", a);
  }
  return c.call(null, a, b);
}
function lb(a, b, c) {
  if (a ? a.wb : a) {
    return a.wb(a, b, c);
  }
  var d;
  d = lb[m(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw t("ISorted.-sorted-seq-from", a);
  }
  return d.call(null, a, b, c);
}
function mb(a, b) {
  if (a ? a.ub : a) {
    return a.ub(a, b);
  }
  var c;
  c = mb[m(null == a ? null : a)];
  if (!c && (c = mb._, !c)) {
    throw t("ISorted.-entry-key", a);
  }
  return c.call(null, a, b);
}
function nb(a) {
  if (a ? a.tb : a) {
    return a.tb(a);
  }
  var b;
  b = nb[m(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw t("ISorted.-comparator", a);
  }
  return b.call(null, a);
}
function z(a, b) {
  if (a ? a.Nb : a) {
    return a.Nb(0, b);
  }
  var c;
  c = z[m(null == a ? null : a)];
  if (!c && (c = z._, !c)) {
    throw t("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var ob = {};
function qb(a, b, c) {
  if (a ? a.q : a) {
    return a.q(a, b, c);
  }
  var d;
  d = qb[m(null == a ? null : a)];
  if (!d && (d = qb._, !d)) {
    throw t("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function rb(a, b, c) {
  if (a ? a.yb : a) {
    return a.yb(a, b, c);
  }
  var d;
  d = rb[m(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw t("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function sb(a, b, c) {
  if (a ? a.xb : a) {
    return a.xb(a, b, c);
  }
  var d;
  d = sb[m(null == a ? null : a)];
  if (!d && (d = sb._, !d)) {
    throw t("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function tb(a) {
  if (a ? a.Ga : a) {
    return a.Ga(a);
  }
  var b;
  b = tb[m(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw t("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function ub(a, b) {
  if (a ? a.Ma : a) {
    return a.Ma(a, b);
  }
  var c;
  c = ub[m(null == a ? null : a)];
  if (!c && (c = ub._, !c)) {
    throw t("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function vb(a) {
  if (a ? a.Na : a) {
    return a.Na(a);
  }
  var b;
  b = vb[m(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw t("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function wb(a, b, c) {
  if (a ? a.La : a) {
    return a.La(a, b, c);
  }
  var d;
  d = wb[m(null == a ? null : a)];
  if (!d && (d = wb._, !d)) {
    throw t("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function xb(a, b, c) {
  if (a ? a.Mb : a) {
    return a.Mb(0, b, c);
  }
  var d;
  d = xb[m(null == a ? null : a)];
  if (!d && (d = xb._, !d)) {
    throw t("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function yb(a) {
  if (a ? a.Fb : a) {
    return a.Fb();
  }
  var b;
  b = yb[m(null == a ? null : a)];
  if (!b && (b = yb._, !b)) {
    throw t("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function A(a) {
  if (a ? a.eb : a) {
    return a.eb(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw t("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.fb : a) {
    return a.fb(a);
  }
  var b;
  b = B[m(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw t("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function zb(a) {
  if (a ? a.cb : a) {
    return a.cb(a);
  }
  var b;
  b = zb[m(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw t("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Ab(a) {
  this.gc = a;
  this.n = 0;
  this.i = 1073741824;
}
Ab.prototype.Nb = function(a, b) {
  return this.gc.append(b);
};
function Bb(a) {
  var b = new ga;
  a.q(null, new Ab(b), ja());
  return "" + v(b);
}
function Cb(a, b) {
  if (q(C.a ? C.a(a, b) : C.call(null, a, b))) {
    return 0;
  }
  var c = ra(a.U);
  if (q(c ? b.U : c)) {
    return-1;
  }
  if (q(a.U)) {
    if (ra(b.U)) {
      return 1;
    }
    c = Db.a ? Db.a(a.U, b.U) : Db.call(null, a.U, b.U);
    return 0 === c ? Db.a ? Db.a(a.name, b.name) : Db.call(null, a.name, b.name) : c;
  }
  return Eb ? Db.a ? Db.a(a.name, b.name) : Db.call(null, a.name, b.name) : null;
}
function Fb(a, b, c, d, e) {
  this.U = a;
  this.name = b;
  this.wa = c;
  this.xa = d;
  this.ba = e;
  this.i = 2154168321;
  this.n = 4096;
}
f = Fb.prototype;
f.q = function(a, b) {
  return z(b, this.wa);
};
f.t = function() {
  var a = this.xa;
  return null != a ? a : this.xa = a = Gb.a ? Gb.a(D.c ? D.c(this.U) : D.call(null, this.U), D.c ? D.c(this.name) : D.call(null, this.name)) : Gb.call(null, D.c ? D.c(this.U) : D.call(null, this.U), D.c ? D.c(this.name) : D.call(null, this.name));
};
f.F = function(a, b) {
  return new Fb(this.U, this.name, this.wa, this.xa, b);
};
f.A = function() {
  return this.ba;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ia.b(c, this, null);
      case 3:
        return Ia.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return Ia.b(a, this, null);
};
f.a = function(a, b) {
  return Ia.b(a, this, b);
};
f.s = function(a, b) {
  return b instanceof Fb ? this.wa === b.wa : !1;
};
f.toString = function() {
  return this.wa;
};
var Hb = function() {
  function a(a, b) {
    var c = null != a ? [v(a), v("/"), v(b)].join("") : b;
    return new Fb(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof Fb ? a : c.a(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function E(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.pc)) {
    return a.D(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Ib(a, 0);
  }
  if (r(fb, a)) {
    return gb(a);
  }
  if (s) {
    throw Error([v(a), v("is not ISeqable")].join(""));
  }
  return null;
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.Ka)) {
    return a.O(null);
  }
  a = E(a);
  return null == a ? null : Ea(a);
}
function G(a) {
  return null != a ? a && (a.i & 64 || a.Ka) ? a.S(null) : (a = E(a)) ? Fa(a) : H : H;
}
function I(a) {
  return null == a ? null : a && (a.i & 128 || a.Kb) ? a.$(null) : E(G(a));
}
var C = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || db(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (I(e)) {
            a = d, d = F(e), e = I(e);
          } else {
            return b.a(d, F(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.g = c.g;
  b.c = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
xa["null"] = !0;
ya["null"] = function() {
  return 0;
};
Date.prototype.s = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
db.number = function(a, b) {
  return a === b;
};
Xa["function"] = !0;
Ya["function"] = function() {
  return null;
};
wa["function"] = !0;
eb._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
function Jb(a) {
  return a + 1;
}
var Kb = function() {
  function a(a, b, c, d) {
    for (var l = ya(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, w.a(a, d)) : b.call(null, c, w.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = ya(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, w.a(a, l)) : b.call(null, c, w.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = ya(a);
    if (0 === c) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = w.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, w.a(a, l)) : b.call(null, d, w.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}(), Lb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
function Mb(a) {
  return a ? a.i & 2 || a.Tb ? !0 : a.i ? !1 : r(xa, a) : r(xa, a);
}
function Nb(a) {
  return a ? a.i & 16 || a.Hb ? !0 : a.i ? !1 : r(Ca, a) : r(Ca, a);
}
function Ib(a, b) {
  this.d = a;
  this.m = b;
  this.n = 0;
  this.i = 166199550;
}
f = Ib.prototype;
f.t = function() {
  return Ob.c ? Ob.c(this) : Ob.call(null, this);
};
f.$ = function() {
  return this.m + 1 < this.d.length ? new Ib(this.d, this.m + 1) : null;
};
f.C = function(a, b) {
  return L.a ? L.a(b, this) : L.call(null, b, this);
};
f.Ja = function() {
  var a = ya(this);
  return 0 < a ? new Pb(this, a - 1, null) : null;
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return Lb.l(this.d, b, this.d[this.m], this.m + 1);
};
f.N = function(a, b, c) {
  return Lb.l(this.d, b, c, this.m);
};
f.D = function() {
  return this;
};
f.I = function() {
  return this.d.length - this.m;
};
f.O = function() {
  return this.d[this.m];
};
f.S = function() {
  return this.m + 1 < this.d.length ? new Ib(this.d, this.m + 1) : H;
};
f.s = function(a, b) {
  return Qb.a ? Qb.a(this, b) : Qb.call(null, this, b);
};
f.o = function(a, b) {
  var c = b + this.m;
  return c < this.d.length ? this.d[c] : null;
};
f.X = function(a, b, c) {
  a = b + this.m;
  return a < this.d.length ? this.d[a] : c;
};
f.G = function() {
  return H;
};
var Rb = function() {
  function a(a, b) {
    return b < a.length ? new Ib(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), J = function() {
  function a(a, b) {
    return Rb.a(a, b);
  }
  function b(a) {
    return Rb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function Pb(a, b, c) {
  this.bb = a;
  this.m = b;
  this.h = c;
  this.n = 0;
  this.i = 32374862;
}
f = Pb.prototype;
f.t = function() {
  return Ob.c ? Ob.c(this) : Ob.call(null, this);
};
f.C = function(a, b) {
  return L.a ? L.a(b, this) : L.call(null, b, this);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
f.N = function(a, b, c) {
  return N.b ? N.b(b, c, this) : N.call(null, b, c, this);
};
f.D = function() {
  return this;
};
f.I = function() {
  return this.m + 1;
};
f.O = function() {
  return w.a(this.bb, this.m);
};
f.S = function() {
  return 0 < this.m ? new Pb(this.bb, this.m - 1, null) : null;
};
f.s = function(a, b) {
  return Qb.a ? Qb.a(this, b) : Qb.call(null, this, b);
};
f.F = function(a, b) {
  return new Pb(this.bb, this.m, b);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb.a ? Sb.a(H, this.h) : Sb.call(null, H, this.h);
};
db._ = function(a, b) {
  return a === b;
};
var Tb = function() {
  function a(a, b) {
    return null != a ? Ba(a, b) : Ba(H, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.a(a, d), d = F(e), e = I(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b;
}();
function O(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.Tb)) {
      a = a.I(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (r(xa, a)) {
            a = ya(a);
          } else {
            if (s) {
              a: {
                a = E(a);
                for (var b = 0;;) {
                  if (Mb(a)) {
                    a = b + ya(a);
                    break a;
                  }
                  a = I(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var Ub = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return E(a) ? F(a) : c;
      }
      if (Nb(a)) {
        return w.b(a, b, c);
      }
      if (E(a)) {
        a = I(a), b -= 1;
      } else {
        return s ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (E(a)) {
          return F(a);
        }
        throw Error("Index out of bounds");
      }
      if (Nb(a)) {
        return w.a(a, b);
      }
      if (E(a)) {
        var c = I(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (s) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.i & 16 || a.Hb)) {
        return a.X(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (r(Ca, a)) {
        return w.a(a, b);
      }
      if (s) {
        if (a ? a.i & 64 || a.Ka || (a.i ? 0 : r(Da, a)) : r(Da, a)) {
          return Ub.b(a, b, c);
        }
        throw Error([v("nth not supported on this type "), v(ua(sa(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.i & 16 || a.Hb)) {
      return a.o(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(Ca, a)) {
      return w.a(a, b);
    }
    if (s) {
      if (a ? a.i & 64 || a.Ka || (a.i ? 0 : r(Da, a)) : r(Da, a)) {
        return Ub.a(a, b);
      }
      throw Error([v("nth not supported on this type "), v(ua(sa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Q = function() {
  function a(a, b, c) {
    return null != a ? a && (a.i & 256 || a.Wb) ? a.v(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r(Ha, a) ? Ia.b(a, b, c) : s ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.i & 256 || a.Wb) ? a.u(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : r(Ha, a) ? Ia.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Wb = function() {
  function a(a, b, c) {
    return null != a ? Ka(a, b, c) : Vb.a ? Vb.a([b], [c]) : Vb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = J(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), q(l)) {
          d = F(l), e = F(I(l)), l = I(I(l));
        } else {
          return a;
        }
      }
    }
    a.j = 3;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var l = F(a);
      a = G(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, J(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 3;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b;
}(), Xb = function() {
  function a(a, b) {
    return null == a ? null : Na(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (q(e)) {
          d = F(e), e = I(e);
        } else {
          return a;
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.g = c.g;
  b.c = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Yb(a) {
  var b = "function" == m(a);
  return b ? b : a ? q(q(null) ? null : a.Sb) ? !0 : a.Pb ? !1 : r(wa, a) : r(wa, a);
}
var Sb = function Zb(b, c) {
  return Yb(b) && !(b ? b.i & 262144 || b.tc || (b.i ? 0 : r(Za, b)) : r(Za, b)) ? Zb(function() {
    "undefined" === typeof ha && (ha = function(b, c, g, h) {
      this.h = b;
      this.Ra = c;
      this.ic = g;
      this.ec = h;
      this.n = 0;
      this.i = 393217;
    }, ha.Qb = !0, ha.Ob = "cljs.core/t10989", ha.ac = function(b) {
      return z(b, "cljs.core/t10989");
    }, ha.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return R.a ? R.a(b.Ra, d) : R.call(null, b.Ra, d);
      }
      b.j = 1;
      b.g = function(b) {
        var d = F(b);
        b = G(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)));
    }, ha.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = J(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return R.a ? R.a(self__.Ra, b) : R.call(null, self__.Ra, b);
      }
      b.j = 0;
      b.g = function(b) {
        b = E(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.Sb = !0, ha.prototype.A = function() {
      return this.ec;
    }, ha.prototype.F = function(b, c) {
      return new ha(this.h, this.Ra, this.ic, c);
    });
    return new ha(c, b, Zb, null);
  }(), c) : null == b ? null : $a(b, c);
};
function $b(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Yb || (a.i ? 0 : r(Xa, a)) : r(Xa, a) : b) ? Ya(a) : null;
}
function ac(a) {
  return null == a ? null : Ta(a);
}
var bc = function() {
  function a(a, b) {
    return null == a ? null : Sa(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (q(e)) {
          d = F(e), e = I(e);
        } else {
          return a;
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.g = c.g;
  b.c = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}(), cc = {}, dc = 0;
function D(a) {
  if (a && (a.i & 4194304 || a.mc)) {
    a = a.t(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < dc && (cc = {}, dc = 0);
            var b = cc[a];
            "number" !== typeof b && (b = ea(a), cc[a] = b, dc += 1);
            a = b;
          } else {
            a = null == a ? 0 : s ? eb(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function ec(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.nc ? !0 : a.i ? !1 : r(Ma, a) : r(Ma, a);
}
function fc(a) {
  return a ? a.i & 16384 || a.sc ? !0 : a.i ? !1 : r(Va, a) : r(Va, a);
}
function S(a) {
  return a ? a.n & 512 || a.jc ? !0 : !1 : !1;
}
function gc(a) {
  var b = [];
  fa(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function hc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var ic = {};
function jc(a) {
  return null == a ? !1 : a ? a.i & 64 || a.Ka ? !0 : a.i ? !1 : r(Da, a) : r(Da, a);
}
function kc(a) {
  return q(a) ? !0 : !1;
}
function lc(a, b) {
  return Q.b(a, b, ic) === ic ? !1 : !0;
}
function Db(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (sa(a) === sa(b)) {
    return a && (a.n & 2048 || a.Wa) ? a.Xa(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (s) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var mc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Db(P.a(a, h), P.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var g = O(a), h = O(b);
    return g < h ? -1 : g > h ? 1 : s ? c.l(a, b, g, 0) : null;
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c;
}(), N = function() {
  function a(a, b, c) {
    for (c = E(c);;) {
      if (c) {
        b = a.a ? a.a(b, F(c)) : a.call(null, b, F(c)), c = I(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = E(b);
    return c ? nc.b ? nc.b(a, F(c), I(c)) : nc.call(null, a, F(c), I(c)) : a.p ? a.p() : a.call(null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), nc = function() {
  function a(a, b, c) {
    return c && (c.i & 524288 || c.$b) ? c.N(null, a, b) : c instanceof Array ? Lb.b(c, a, b) : "string" === typeof c ? Lb.b(c, a, b) : r(ab, c) ? bb.b(c, a, b) : s ? N.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.i & 524288 || b.$b) ? b.M(null, a) : b instanceof Array ? Lb.a(b, a) : "string" === typeof b ? Lb.a(b, a) : r(ab, b) ? bb.a(b, a) : s ? N.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), oc = function() {
  var a = null, b = function() {
    function a(c, g, h) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, g, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a < c) {
          if (I(d)) {
            a = c, c = F(d), d = I(d);
          } else {
            return c < F(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var h = F(a);
      a = G(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a < d;
      default:
        return b.e(a, d, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.j = 2;
  a.g = b.g;
  a.c = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a < b;
  };
  a.e = b.e;
  return a;
}(), pc = function() {
  var a = null, b = function() {
    function a(c, g, h) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, g, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a <= c) {
          if (I(d)) {
            a = c, c = F(d), d = I(d);
          } else {
            return c <= F(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var h = F(a);
      a = G(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a <= d;
      default:
        return b.e(a, d, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.j = 2;
  a.g = b.g;
  a.c = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a <= b;
  };
  a.e = b.e;
  return a;
}(), qc = function() {
  var a = null, b = function() {
    function a(c, g, h) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, g, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a > c) {
          if (I(d)) {
            a = c, c = F(d), d = I(d);
          } else {
            return c > F(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var h = F(a);
      a = G(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a > d;
      default:
        return b.e(a, d, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.j = 2;
  a.g = b.g;
  a.c = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a > b;
  };
  a.e = b.e;
  return a;
}(), rc = function() {
  var a = null, b = function() {
    function a(c, g, h) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, g, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a >= c) {
          if (I(d)) {
            a = c, c = F(d), d = I(d);
          } else {
            return c >= F(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var h = F(a);
      a = G(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a >= d;
      default:
        return b.e(a, d, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.j = 2;
  a.g = b.g;
  a.c = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a >= b;
  };
  a.e = b.e;
  return a;
}();
function sc(a, b) {
  return(a % b + b) % b;
}
function tc(a, b) {
  return 0 <= (a - a % b) / b ? Math.floor.c ? Math.floor.c((a - a % b) / b) : Math.floor.call(null, (a - a % b) / b) : Math.ceil.c ? Math.ceil.c((a - a % b) / b) : Math.ceil.call(null, (a - a % b) / b);
}
function uc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function vc(a) {
  var b = 1;
  for (a = E(a);;) {
    if (a && 0 < b) {
      b -= 1, a = I(a);
    } else {
      return a;
    }
  }
}
var v = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ga(b.c(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.c(F(l))), l = I(l);
        } else {
          return e.toString();
        }
      }
    }
    a.j = 1;
    a.g = function(a) {
      var b = F(a);
      a = G(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 1;
  b.g = c.g;
  b.p = function() {
    return "";
  };
  b.c = a;
  b.e = c.e;
  return b;
}(), wc = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return a.substring(c);
  };
  a.b = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function Qb(a, b) {
  return kc((b ? b.i & 16777216 || b.qc || (b.i ? 0 : r(hb, b)) : r(hb, b)) ? function() {
    for (var c = E(a), d = E(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (C.a(F(c), F(d))) {
        c = I(c), d = I(d);
      } else {
        return s ? !1 : null;
      }
    }
  }() : null);
}
function Gb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Ob(a) {
  if (E(a)) {
    var b = D(F(a));
    for (a = I(a);;) {
      if (null == a) {
        return b;
      }
      b = Gb(b, D(F(a)));
      a = I(a);
    }
  } else {
    return 0;
  }
}
function xc(a) {
  var b = 0;
  for (a = E(a);;) {
    if (a) {
      var c = F(a), b = (b + (D(yc.c ? yc.c(c) : yc.call(null, c)) ^ D(zc.c ? zc.c(c) : zc.call(null, c)))) % 4503599627370496;
      a = I(a);
    } else {
      return b;
    }
  }
}
function Ac(a, b, c, d, e) {
  this.h = a;
  this.first = b;
  this.pa = c;
  this.count = d;
  this.k = e;
  this.n = 0;
  this.i = 65937646;
}
f = Ac.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.$ = function() {
  return 1 === this.count ? null : this.pa;
};
f.C = function(a, b) {
  return new Ac(this.h, b, this, this.count + 1, null);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return N.a(b, this);
};
f.N = function(a, b, c) {
  return N.b(b, c, this);
};
f.D = function() {
  return this;
};
f.I = function() {
  return this.count;
};
f.ma = function() {
  return this.first;
};
f.na = function() {
  return Fa(this);
};
f.O = function() {
  return this.first;
};
f.S = function() {
  return 1 === this.count ? H : this.pa;
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new Ac(b, this.first, this.pa, this.count, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return H;
};
function Bc(a) {
  this.h = a;
  this.n = 0;
  this.i = 65937614;
}
f = Bc.prototype;
f.t = function() {
  return 0;
};
f.$ = function() {
  return null;
};
f.C = function(a, b) {
  return new Ac(this.h, b, null, 1, null);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return N.a(b, this);
};
f.N = function(a, b, c) {
  return N.b(b, c, this);
};
f.D = function() {
  return null;
};
f.I = function() {
  return 0;
};
f.ma = function() {
  return null;
};
f.na = function() {
  throw Error("Can't pop empty list");
};
f.O = function() {
  return null;
};
f.S = function() {
  return H;
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new Bc(b);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return this;
};
var H = new Bc(null);
function Cc(a) {
  return jb(a);
}
function Dc(a) {
  return(a ? a.i & 134217728 || a.oc || (a.i ? 0 : r(ib, a)) : r(ib, a)) ? jb(a) : nc.b(Tb, H, a);
}
var Ec = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Ib && 0 === a.m) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.O(null)), a = a.$(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = H;;) {
      if (0 < a) {
        var g = a - 1, e = e.C(null, b[a - 1]);
        a = g;
      } else {
        return e;
      }
    }
  }
  a.j = 0;
  a.g = function(a) {
    a = E(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Fc(a, b, c, d) {
  this.h = a;
  this.first = b;
  this.pa = c;
  this.k = d;
  this.n = 0;
  this.i = 65929452;
}
f = Fc.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.$ = function() {
  return null == this.pa ? null : E(this.pa);
};
f.C = function(a, b) {
  return new Fc(null, b, this, this.k);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return N.a(b, this);
};
f.N = function(a, b, c) {
  return N.b(b, c, this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return this.first;
};
f.S = function() {
  return null == this.pa ? H : this.pa;
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new Fc(b, this.first, this.pa, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb(H, this.h);
};
function L(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.Ka)) ? new Fc(null, a, b, null) : new Fc(null, a, E(b), null);
}
function T(a, b, c, d) {
  this.U = a;
  this.name = b;
  this.ta = c;
  this.xa = d;
  this.i = 2153775105;
  this.n = 4096;
}
f = T.prototype;
f.q = function(a, b) {
  return z(b, [v(":"), v(this.ta)].join(""));
};
f.t = function() {
  null == this.xa && (this.xa = Gb(D(this.U), D(this.name)) + 2654435769);
  return this.xa;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Q.a(c, this);
      case 3:
        return Q.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return Q.a(a, this);
};
f.a = function(a, b) {
  return Q.b(a, this, b);
};
f.s = function(a, b) {
  return b instanceof T ? this.ta === b.ta : !1;
};
f.toString = function() {
  return[v(":"), v(this.ta)].join("");
};
function Gc(a) {
  return a instanceof T;
}
var Ic = function() {
  function a(a, b) {
    return new T(a, b, [v(q(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof T) {
      return a;
    }
    if (a instanceof Fb) {
      var b;
      if (a && (a.n & 4096 || a.Zb)) {
        b = a.U;
      } else {
        throw Error([v("Doesn't support namespace: "), v(a)].join(""));
      }
      return new T(b, Hc.c ? Hc.c(a) : Hc.call(null, a), a.wa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new T(b[0], b[1], a, null) : new T(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function U(a, b, c, d) {
  this.h = a;
  this.fn = b;
  this.H = c;
  this.k = d;
  this.n = 0;
  this.i = 32374988;
}
f = U.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.$ = function() {
  gb(this);
  return null == this.H ? null : I(this.H);
};
f.C = function(a, b) {
  return L(b, this);
};
f.toString = function() {
  return Bb(this);
};
function Jc(a) {
  null != a.fn && (a.H = a.fn.p ? a.fn.p() : a.fn.call(null), a.fn = null);
  return a.H;
}
f.M = function(a, b) {
  return N.a(b, this);
};
f.N = function(a, b, c) {
  return N.b(b, c, this);
};
f.D = function() {
  Jc(this);
  if (null == this.H) {
    return null;
  }
  for (var a = this.H;;) {
    if (a instanceof U) {
      a = Jc(a);
    } else {
      return this.H = a, E(this.H);
    }
  }
};
f.O = function() {
  gb(this);
  return null == this.H ? null : F(this.H);
};
f.S = function() {
  gb(this);
  return null != this.H ? G(this.H) : H;
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new U(b, this.fn, this.H, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb(H, this.h);
};
function Kc(a, b) {
  this.ab = a;
  this.end = b;
  this.n = 0;
  this.i = 2;
}
Kc.prototype.I = function() {
  return this.end;
};
Kc.prototype.add = function(a) {
  this.ab[this.end] = a;
  return this.end += 1;
};
Kc.prototype.R = function() {
  var a = new Lc(this.ab, 0, this.end);
  this.ab = null;
  return a;
};
function Mc(a) {
  return new Kc(Array(a), 0);
}
function Lc(a, b, c) {
  this.d = a;
  this.off = b;
  this.end = c;
  this.n = 0;
  this.i = 524306;
}
f = Lc.prototype;
f.M = function(a, b) {
  return Lb.l(this.d, b, this.d[this.off], this.off + 1);
};
f.N = function(a, b, c) {
  return Lb.l(this.d, b, c, this.off);
};
f.Fb = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Lc(this.d, this.off + 1, this.end);
};
f.o = function(a, b) {
  return this.d[this.off + b];
};
f.X = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.d[this.off + b] : c;
};
f.I = function() {
  return this.end - this.off;
};
var Nc = function() {
  function a(a, b, c) {
    return new Lc(a, b, c);
  }
  function b(a, b) {
    return new Lc(a, b, a.length);
  }
  function c(a) {
    return new Lc(a, 0, a.length);
  }
  var d = null, d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.b = a;
  return d;
}();
function Oc(a, b, c, d) {
  this.R = a;
  this.ga = b;
  this.h = c;
  this.k = d;
  this.i = 31850732;
  this.n = 1536;
}
f = Oc.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.$ = function() {
  if (1 < ya(this.R)) {
    return new Oc(yb(this.R), this.ga, this.h, null);
  }
  var a = gb(this.ga);
  return null == a ? null : a;
};
f.C = function(a, b) {
  return L(b, this);
};
f.toString = function() {
  return Bb(this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return w.a(this.R, 0);
};
f.S = function() {
  return 1 < ya(this.R) ? new Oc(yb(this.R), this.ga, this.h, null) : null == this.ga ? H : this.ga;
};
f.cb = function() {
  return null == this.ga ? null : this.ga;
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new Oc(this.R, this.ga, b, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb(H, this.h);
};
f.eb = function() {
  return this.R;
};
f.fb = function() {
  return null == this.ga ? H : this.ga;
};
function Pc(a, b) {
  return 0 === ya(a) ? b : new Oc(a, b, null, null);
}
function Qc(a) {
  for (var b = [];;) {
    if (E(a)) {
      b.push(F(a)), a = I(a);
    } else {
      return b;
    }
  }
}
function Rc(a, b) {
  if (Mb(a)) {
    return O(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && E(c)) {
      c = I(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Tc = function Sc(b) {
  return null == b ? null : null == I(b) ? E(F(b)) : s ? L(F(b), Sc(I(b))) : null;
}, Uc = function() {
  function a(a, b) {
    return new U(null, function() {
      var c = E(a);
      return c ? S(c) ? Pc(A(c), d.a(B(c), b)) : L(F(c), d.a(G(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new U(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new U(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var g = null;
      2 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g);
    }
    function b(a, c, e) {
      return function u(a, b) {
        return new U(null, function() {
          var c = E(a);
          return c ? S(c) ? Pc(A(c), u(B(c), b)) : L(F(c), u(G(c), b)) : q(b) ? u(F(b), I(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.j = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 2;
  d.g = e.g;
  d.p = c;
  d.c = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), Vc = function() {
  function a(a, b, c, d) {
    return L(a, L(b, L(c, d)));
  }
  function b(a, b, c) {
    return L(a, L(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, p) {
      var u = null;
      4 < arguments.length && (u = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, u);
    }
    function b(a, c, d, e, g) {
      return L(a, L(c, L(d, L(e, Tc(g)))));
    }
    a.j = 4;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var p = F(a);
      a = G(a);
      return b(c, d, e, p, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return E(c);
      case 2:
        return L(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.e(c, g, h, k, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = 4;
  c.g = d.g;
  c.c = function(a) {
    return E(a);
  };
  c.a = function(a, b) {
    return L(a, b);
  };
  c.b = b;
  c.l = a;
  c.e = d.e;
  return c;
}();
function Wc(a) {
  return vb(a);
}
function Xc(a, b, c) {
  var d = E(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
  }
  c = Ea(d);
  var e = Fa(d);
  if (1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c);
  }
  var d = Ea(e), g = Fa(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Ea(g), h = Fa(g);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var g = Ea(h), k = Fa(h);
  if (4 === b) {
    return a.l ? a.l(c, d, e, g) : a.l ? a.l(c, d, e, g) : a.call(null, c, d, e, g);
  }
  h = Ea(k);
  k = Fa(k);
  if (5 === b) {
    return a.w ? a.w(c, d, e, g, h) : a.w ? a.w(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  a = Ea(k);
  var l = Fa(k);
  if (6 === b) {
    return a.la ? a.la(c, d, e, g, h, a) : a.la ? a.la(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a);
  }
  var k = Ea(l), n = Fa(l);
  if (7 === b) {
    return a.Ca ? a.Ca(c, d, e, g, h, a, k) : a.Ca ? a.Ca(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k);
  }
  var l = Ea(n), p = Fa(n);
  if (8 === b) {
    return a.rb ? a.rb(c, d, e, g, h, a, k, l) : a.rb ? a.rb(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l);
  }
  var n = Ea(p), u = Fa(p);
  if (9 === b) {
    return a.sb ? a.sb(c, d, e, g, h, a, k, l, n) : a.sb ? a.sb(c, d, e, g, h, a, k, l, n) : a.call(null, c, d, e, g, h, a, k, l, n);
  }
  var p = Ea(u), x = Fa(u);
  if (10 === b) {
    return a.gb ? a.gb(c, d, e, g, h, a, k, l, n, p) : a.gb ? a.gb(c, d, e, g, h, a, k, l, n, p) : a.call(null, c, d, e, g, h, a, k, l, n, p);
  }
  var u = Ea(x), M = Fa(x);
  if (11 === b) {
    return a.hb ? a.hb(c, d, e, g, h, a, k, l, n, p, u) : a.hb ? a.hb(c, d, e, g, h, a, k, l, n, p, u) : a.call(null, c, d, e, g, h, a, k, l, n, p, u);
  }
  var x = Ea(M), K = Fa(M);
  if (12 === b) {
    return a.ib ? a.ib(c, d, e, g, h, a, k, l, n, p, u, x) : a.ib ? a.ib(c, d, e, g, h, a, k, l, n, p, u, x) : a.call(null, c, d, e, g, h, a, k, l, n, p, u, x);
  }
  var M = Ea(K), da = Fa(K);
  if (13 === b) {
    return a.jb ? a.jb(c, d, e, g, h, a, k, l, n, p, u, x, M) : a.jb ? a.jb(c, d, e, g, h, a, k, l, n, p, u, x, M) : a.call(null, c, d, e, g, h, a, k, l, n, p, u, x, M);
  }
  var K = Ea(da), ta = Fa(da);
  if (14 === b) {
    return a.kb ? a.kb(c, d, e, g, h, a, k, l, n, p, u, x, M, K) : a.kb ? a.kb(c, d, e, g, h, a, k, l, n, p, u, x, M, K) : a.call(null, c, d, e, g, h, a, k, l, n, p, u, x, M, K);
  }
  var da = Ea(ta), na = Fa(ta);
  if (15 === b) {
    return a.lb ? a.lb(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da) : a.lb ? a.lb(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da) : a.call(null, c, d, e, g, h, a, k, l, n, p, u, x, M, K, da);
  }
  var ta = Ea(na), La = Fa(na);
  if (16 === b) {
    return a.mb ? a.mb(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta) : a.mb ? a.mb(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta) : a.call(null, c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta);
  }
  var na = Ea(La), cb = Fa(La);
  if (17 === b) {
    return a.nb ? a.nb(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na) : a.nb ? a.nb(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na) : a.call(null, c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na);
  }
  var La = Ea(cb), pb = Fa(cb);
  if (18 === b) {
    return a.ob ? a.ob(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na, La) : a.ob ? a.ob(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na, La) : a.call(null, c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na, La);
  }
  cb = Ea(pb);
  pb = Fa(pb);
  if (19 === b) {
    return a.pb ? a.pb(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na, La, cb) : a.pb ? a.pb(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na, La, cb) : a.call(null, c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na, La, cb);
  }
  var Ud = Ea(pb);
  Fa(pb);
  if (20 === b) {
    return a.qb ? a.qb(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na, La, cb, Ud) : a.qb ? a.qb(c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na, La, cb, Ud) : a.call(null, c, d, e, g, h, a, k, l, n, p, u, x, M, K, da, ta, na, La, cb, Ud);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var R = function() {
  function a(a, b, c, d, e) {
    b = Vc.l(b, c, d, e);
    c = a.j;
    return a.g ? (d = Rc(b, c + 1), d <= c ? Xc(a, d, b) : a.g(b)) : a.apply(a, Qc(b));
  }
  function b(a, b, c, d) {
    b = Vc.b(b, c, d);
    c = a.j;
    return a.g ? (d = Rc(b, c + 1), d <= c ? Xc(a, d, b) : a.g(b)) : a.apply(a, Qc(b));
  }
  function c(a, b, c) {
    b = Vc.a(b, c);
    c = a.j;
    if (a.g) {
      var d = Rc(b, c + 1);
      return d <= c ? Xc(a, d, b) : a.g(b);
    }
    return a.apply(a, Qc(b));
  }
  function d(a, b) {
    var c = a.j;
    if (a.g) {
      var d = Rc(b, c + 1);
      return d <= c ? Xc(a, d, b) : a.g(b);
    }
    return a.apply(a, Qc(b));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, M) {
      var K = null;
      5 < arguments.length && (K = J(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, K);
    }
    function b(a, c, d, e, g, h) {
      c = L(c, L(d, L(e, L(g, Tc(h)))));
      d = a.j;
      return a.g ? (e = Rc(c, d + 1), e <= d ? Xc(a, e, c) : a.g(c)) : a.apply(a, Qc(c));
    }
    a.j = 5;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var g = F(a);
      a = I(a);
      var h = F(a);
      a = G(a);
      return b(c, d, e, g, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, p, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, p);
      default:
        return g.e(e, k, l, n, p, J(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = 5;
  e.g = g.g;
  e.a = d;
  e.b = c;
  e.l = b;
  e.w = a;
  e.e = g.e;
  return e;
}(), Yc = function() {
  function a(a, b) {
    return!C.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return ra(R.l(C, a, c, d));
    }
    a.j = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.g = c.g;
  b.c = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Zc(a, b) {
  for (;;) {
    if (null == E(b)) {
      return!0;
    }
    if (q(a.c ? a.c(F(b)) : a.call(null, F(b)))) {
      var c = a, d = I(b);
      a = c;
      b = d;
    } else {
      return s ? !1 : null;
    }
  }
}
function $c(a) {
  return a;
}
var ad = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var g = null;
          3 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, g);
        }
        function k(d, l, n, p) {
          return a.c ? a.c(b.c ? b.c(R.w(c, d, l, n, p)) : b.call(null, R.w(c, d, l, n, p))) : a.call(null, b.c ? b.c(R.w(c, d, l, n, p)) : b.call(null, R.w(c, d, l, n, p)));
        }
        d.j = 3;
        d.g = function(a) {
          var b = F(a);
          a = I(a);
          var c = F(a);
          a = I(a);
          var d = F(a);
          a = G(a);
          return k(b, c, d, a);
        };
        d.e = k;
        return d;
      }(), d = function(d, k, u, x) {
        switch(arguments.length) {
          case 0:
            return a.c ? a.c(b.c ? b.c(c.p ? c.p() : c.call(null)) : b.call(null, c.p ? c.p() : c.call(null))) : a.call(null, b.c ? b.c(c.p ? c.p() : c.call(null)) : b.call(null, c.p ? c.p() : c.call(null)));
          case 1:
            return a.c ? a.c(b.c ? b.c(c.c ? c.c(d) : c.call(null, d)) : b.call(null, c.c ? c.c(d) : c.call(null, d))) : a.call(null, b.c ? b.c(c.c ? c.c(d) : c.call(null, d)) : b.call(null, c.c ? c.c(d) : c.call(null, d)));
          case 2:
            return a.c ? a.c(b.c ? b.c(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k))) : a.call(null, b.c ? b.c(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k)));
          case 3:
            return a.c ? a.c(b.c ? b.c(c.b ? c.b(d, k, u) : c.call(null, d, k, u)) : b.call(null, c.b ? c.b(d, k, u) : c.call(null, d, k, u))) : a.call(null, b.c ? b.c(c.b ? c.b(d, k, u) : c.call(null, d, k, u)) : b.call(null, c.b ? c.b(d, k, u) : c.call(null, d, k, u)));
          default:
            return l.e(d, k, u, J(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.j = 3;
      d.g = l.g;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, g) {
          var h = null;
          3 < arguments.length && (h = J(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h);
        }
        function d(c, h, k, l) {
          return a.c ? a.c(R.w(b, c, h, k, l)) : a.call(null, R.w(b, c, h, k, l));
        }
        c.j = 3;
        c.g = function(a) {
          var b = F(a);
          a = I(a);
          var c = F(a);
          a = I(a);
          var e = F(a);
          a = G(a);
          return d(b, c, e, a);
        };
        c.e = d;
        return c;
      }(), c = function(c, h, p, u) {
        switch(arguments.length) {
          case 0:
            return a.c ? a.c(b.p ? b.p() : b.call(null)) : a.call(null, b.p ? b.p() : b.call(null));
          case 1:
            return a.c ? a.c(b.c ? b.c(c) : b.call(null, c)) : a.call(null, b.c ? b.c(c) : b.call(null, c));
          case 2:
            return a.c ? a.c(b.a ? b.a(c, h) : b.call(null, c, h)) : a.call(null, b.a ? b.a(c, h) : b.call(null, c, h));
          case 3:
            return a.c ? a.c(b.b ? b.b(c, h, p) : b.call(null, c, h, p)) : a.call(null, b.b ? b.b(c, h, p) : b.call(null, c, h, p));
          default:
            return d.e(c, h, p, J(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.j = 3;
      c.g = d.g;
      return c;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, n) {
      var p = null;
      3 < arguments.length && (p = J(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, p);
    }
    function b(a, c, d, e) {
      var g = Dc(Vc.l(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d);
        }
        function b(a) {
          a = R.a(F(g), a);
          for (var c = I(g);;) {
            if (c) {
              a = F(c).call(null, a), c = I(c);
            } else {
              return a;
            }
          }
        }
        a.j = 0;
        a.g = function(a) {
          a = E(a);
          return b(a);
        };
        a.e = b;
        return a;
      }();
    }
    a.j = 3;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = G(a);
      return b(c, d, e, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, g, h, k) {
    switch(arguments.length) {
      case 0:
        return $c;
      case 1:
        return c;
      case 2:
        return b.call(this, c, g);
      case 3:
        return a.call(this, c, g, h);
      default:
        return d.e(c, g, h, J(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = 3;
  c.g = d.g;
  c.p = function() {
    return $c;
  };
  c.c = function(a) {
    return a;
  };
  c.a = b;
  c.b = a;
  c.e = d.e;
  return c;
}(), bd = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return p.call(this, b);
      }
      function p(e) {
        return R.w(a, b, c, d, e);
      }
      e.j = 0;
      e.g = function(a) {
        a = E(a);
        return p(a);
      };
      e.e = p;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return R.l(a, b, c, d);
      }
      d.j = 0;
      d.g = function(a) {
        a = E(a);
        return e(a);
      };
      d.e = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return R.b(a, b, c);
      }
      c.j = 0;
      c.g = function(a) {
        a = E(a);
        return d(a);
      };
      c.e = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, g, u) {
      var x = null;
      4 < arguments.length && (x = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, x);
    }
    function b(a, c, d, e, g) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = J(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return R.w(a, c, d, e, Uc.a(g, b));
        }
        b.j = 0;
        b.g = function(a) {
          a = E(a);
          return h(a);
        };
        b.e = h;
        return b;
      }();
    }
    a.j = 4;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 4;
  d.g = e.g;
  d.c = function(a) {
    return a;
  };
  d.a = c;
  d.b = b;
  d.l = a;
  d.e = e.e;
  return d;
}(), dd = function cd(b, c) {
  return new U(null, function() {
    var d = E(c);
    if (d) {
      if (S(d)) {
        for (var e = A(d), g = O(e), h = Mc(g), k = 0;;) {
          if (k < g) {
            var l = b.c ? b.c(w.a(e, k)) : b.call(null, w.a(e, k));
            null != l && h.add(l);
            k += 1;
          } else {
            break;
          }
        }
        return Pc(h.R(), cd(b, B(d)));
      }
      e = b.c ? b.c(F(d)) : b.call(null, F(d));
      return null == e ? cd(b, G(d)) : L(e, cd(b, G(d)));
    }
    return null;
  }, null, null);
}, ed = function() {
  function a(a, b, c, e) {
    return new U(null, function() {
      var n = E(b), p = E(c), u = E(e);
      return n && p && u ? L(a.b ? a.b(F(n), F(p), F(u)) : a.call(null, F(n), F(p), F(u)), d.l(a, G(n), G(p), G(u))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new U(null, function() {
      var e = E(b), n = E(c);
      return e && n ? L(a.a ? a.a(F(e), F(n)) : a.call(null, F(e), F(n)), d.b(a, G(e), G(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new U(null, function() {
      var c = E(b);
      if (c) {
        if (S(c)) {
          for (var e = A(c), n = O(e), p = Mc(n), u = 0;;) {
            if (u < n) {
              var x = a.c ? a.c(w.a(e, u)) : a.call(null, w.a(e, u));
              p.add(x);
              u += 1;
            } else {
              break;
            }
          }
          return Pc(p.R(), d.a(a, B(c)));
        }
        return L(a.c ? a.c(F(c)) : a.call(null, F(c)), d.a(a, G(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, g, u) {
      var x = null;
      4 < arguments.length && (x = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, x);
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return R.a(a, b);
      }, function M(a) {
        return new U(null, function() {
          var b = d.a(E, a);
          return Zc($c, b) ? L(d.a(F, b), M(d.a(G, b))) : null;
        }, null, null);
      }(Tb.e(h, g, J([e, c], 0))));
    }
    a.j = 4;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 4;
  d.g = e.g;
  d.a = c;
  d.b = b;
  d.l = a;
  d.e = e.e;
  return d;
}(), gd = function fd(b, c) {
  return new U(null, function() {
    if (0 < b) {
      var d = E(c);
      return d ? L(F(d), fd(b - 1, G(d))) : null;
    }
    return null;
  }, null, null);
};
function hd(a, b) {
  return new U(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (d = E(d), 0 < c && d) {
          c -= 1, d = G(d);
        } else {
          c = d;
          break a;
        }
      }
      c = void 0;
    }
    return c;
  }, null, null);
}
function id(a, b) {
  return new U(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        var d = E(d), e;
        e = (e = d) ? c.c ? c.c(F(d)) : c.call(null, F(d)) : e;
        if (q(e)) {
          d = G(d);
        } else {
          c = d;
          break a;
        }
      }
      c = void 0;
    }
    return c;
  }, null, null);
}
function jd(a) {
  return function c(a, e) {
    return new U(null, function() {
      var g = E(a);
      return g ? L(F(g), c(G(g), e)) : E(e) ? c(F(e), G(e)) : null;
    }, null, null);
  }(null, a);
}
var kd = function() {
  function a(a, b) {
    return jd(ed.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return jd(R.l(ed, a, c, d));
    }
    a.j = 2;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b;
}(), md = function ld(b, c) {
  return new U(null, function() {
    var d = E(c);
    if (d) {
      if (S(d)) {
        for (var e = A(d), g = O(e), h = Mc(g), k = 0;;) {
          if (k < g) {
            if (q(b.c ? b.c(w.a(e, k)) : b.call(null, w.a(e, k)))) {
              var l = w.a(e, k);
              h.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Pc(h.R(), ld(b, B(d)));
      }
      e = F(d);
      d = G(d);
      return q(b.c ? b.c(e) : b.call(null, e)) ? L(e, ld(b, d)) : ld(b, d);
    }
    return null;
  }, null, null);
};
function nd(a, b) {
  return null != a ? a && (a.n & 4 || a.lc) ? Wc(nc.b(ub, tb(a), b)) : nc.b(Ba, a, b) : nc.b(Tb, H, b);
}
var pd = function() {
  function a(a, b, c, d) {
    return nd(od, ed.l(a, b, c, d));
  }
  function b(a, b, c) {
    return nd(od, ed.b(a, b, c));
  }
  function c(a, b) {
    return Wc(nc.b(function(b, c) {
      var d = a.c ? a.c(c) : a.call(null, c);
      return ub(b, d);
    }, tb(od), b));
  }
  var d = null, e = function() {
    function a(c, d, e, g, u) {
      var x = null;
      4 < arguments.length && (x = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, x);
    }
    function b(a, c, d, e, g) {
      return nd(od, R.e(ed, a, c, d, e, J([g], 0)));
    }
    a.j = 4;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 4;
  d.g = e.g;
  d.a = c;
  d.b = b;
  d.l = a;
  d.e = e.e;
  return d;
}(), qd = function() {
  function a(a, b, c, k) {
    return new U(null, function() {
      var l = E(k);
      if (l) {
        var n = gd(a, l);
        return a === O(n) ? L(n, d.l(a, b, c, hd(b, l))) : Ba(H, gd(a, Uc.a(n, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new U(null, function() {
      var k = E(c);
      if (k) {
        var l = gd(a, k);
        return a === O(l) ? L(l, d.b(a, b, hd(b, k))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.b(a, a, b);
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
function rd(a, b) {
  this.r = a;
  this.d = b;
}
function sd(a) {
  return new rd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function td(a) {
  return new rd(a.r, va(a.d));
}
function ud(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function vd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = sd(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var xd = function wd(b, c, d, e) {
  var g = td(d), h = b.f - 1 >>> c & 31;
  5 === c ? g.d[h] = e : (d = d.d[h], b = null != d ? wd(b, c - 5, d, e) : vd(null, c - 5, e), g.d[h] = b);
  return g;
};
function yd(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function zd(a, b) {
  if (0 <= b && b < a.f) {
    if (b >= ud(a)) {
      return a.Q;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      } else {
        return c.d;
      }
    }
  } else {
    return yd(b, a.f);
  }
}
var Bd = function Ad(b, c, d, e, g) {
  var h = td(d);
  if (0 === c) {
    h.d[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = Ad(b, c - 5, d.d[k], e, g);
    h.d[k] = b;
  }
  return h;
}, Dd = function Cd(b, c, d) {
  var e = b.f - 2 >>> c & 31;
  if (5 < c) {
    b = Cd(b, c - 5, d.d[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = td(d);
    d.d[e] = b;
    return d;
  }
  return 0 === e ? null : s ? (d = td(d), d.d[e] = null, d) : null;
};
function V(a, b, c, d, e, g) {
  this.h = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.Q = e;
  this.k = g;
  this.n = 4;
  this.i = 167668511;
}
f = V.prototype;
f.Ga = function() {
  return new Ed(this.f, this.shift, Fd.c ? Fd.c(this.root) : Fd.call(null, this.root), Gd.c ? Gd.c(this.Q) : Gd.call(null, this.Q));
};
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.u = function(a, b) {
  return w.b(this, b, null);
};
f.v = function(a, b, c) {
  return w.b(this, b, c);
};
f.ka = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return ud(this) <= b ? (a = va(this.Q), a[b & 31] = c, new V(this.h, this.f, this.shift, this.root, a, null)) : new V(this.h, this.f, this.shift, Bd(this, this.shift, this.root, b, c), this.Q, null);
  }
  if (b === this.f) {
    return Ba(this, c);
  }
  if (s) {
    throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.f), v("]")].join(""));
  }
  return null;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.o(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return this.o(null, a);
};
f.a = function(a, b) {
  return this.X(null, a, b);
};
f.C = function(a, b) {
  if (32 > this.f - ud(this)) {
    for (var c = this.Q.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.Q[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new V(this.h, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = sd(null), d.d[0] = this.root, e = vd(null, this.shift, new rd(null, this.Q)), d.d[1] = e) : d = xd(this, this.shift, this.root, new rd(null, this.Q));
  return new V(this.h, this.f + 1, c, d, [b], null);
};
f.Ja = function() {
  return 0 < this.f ? new Pb(this, this.f - 1, null) : null;
};
f.Ia = function() {
  return w.a(this, 0);
};
f.Ya = function() {
  return w.a(this, 1);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return Kb.a(this, b);
};
f.N = function(a, b, c) {
  return Kb.b(this, b, c);
};
f.D = function() {
  return 0 === this.f ? null : 32 > this.f ? J.c(this.Q) : s ? Hd.b ? Hd.b(this, 0, 0) : Hd.call(null, this, 0, 0) : null;
};
f.I = function() {
  return this.f;
};
f.ma = function() {
  return 0 < this.f ? w.a(this, this.f - 1) : null;
};
f.na = function() {
  if (0 === this.f) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.f) {
    return $a(od, this.h);
  }
  if (1 < this.f - ud(this)) {
    return new V(this.h, this.f - 1, this.shift, this.root, this.Q.slice(0, -1), null);
  }
  if (s) {
    var a = zd(this, this.f - 2), b = Dd(this, this.shift, this.root), b = null == b ? W : b, c = this.f - 1;
    return 5 < this.shift && null == b.d[1] ? new V(this.h, c, this.shift - 5, b.d[0], a, null) : new V(this.h, c, this.shift, b, a, null);
  }
  return null;
};
f.ya = function(a, b, c) {
  return Ka(this, b, c);
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new V(b, this.f, this.shift, this.root, this.Q, this.k);
};
f.A = function() {
  return this.h;
};
f.o = function(a, b) {
  return zd(this, b)[b & 31];
};
f.X = function(a, b, c) {
  return 0 <= b && b < this.f ? w.a(this, b) : c;
};
f.G = function() {
  return Sb(od, this.h);
};
var W = new rd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), od = new V(null, 0, 5, W, [], 0);
function Id(a) {
  return vb(nc.b(ub, tb(od), a));
}
function Jd(a, b, c, d, e, g) {
  this.L = a;
  this.aa = b;
  this.m = c;
  this.off = d;
  this.h = e;
  this.k = g;
  this.i = 32243948;
  this.n = 1536;
}
f = Jd.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.$ = function() {
  if (this.off + 1 < this.aa.length) {
    var a = Hd.l ? Hd.l(this.L, this.aa, this.m, this.off + 1) : Hd.call(null, this.L, this.aa, this.m, this.off + 1);
    return null == a ? null : a;
  }
  return zb(this);
};
f.C = function(a, b) {
  return L(b, this);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return Kb.a(Kd.b ? Kd.b(this.L, this.m + this.off, O(this.L)) : Kd.call(null, this.L, this.m + this.off, O(this.L)), b);
};
f.N = function(a, b, c) {
  return Kb.b(Kd.b ? Kd.b(this.L, this.m + this.off, O(this.L)) : Kd.call(null, this.L, this.m + this.off, O(this.L)), b, c);
};
f.D = function() {
  return this;
};
f.O = function() {
  return this.aa[this.off];
};
f.S = function() {
  if (this.off + 1 < this.aa.length) {
    var a = Hd.l ? Hd.l(this.L, this.aa, this.m, this.off + 1) : Hd.call(null, this.L, this.aa, this.m, this.off + 1);
    return null == a ? H : a;
  }
  return B(this);
};
f.cb = function() {
  var a = this.aa.length, a = this.m + a < ya(this.L) ? Hd.b ? Hd.b(this.L, this.m + a, 0) : Hd.call(null, this.L, this.m + a, 0) : null;
  return null == a ? null : a;
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return Hd.w ? Hd.w(this.L, this.aa, this.m, this.off, b) : Hd.call(null, this.L, this.aa, this.m, this.off, b);
};
f.G = function() {
  return Sb(od, this.h);
};
f.eb = function() {
  return Nc.a(this.aa, this.off);
};
f.fb = function() {
  var a = this.aa.length, a = this.m + a < ya(this.L) ? Hd.b ? Hd.b(this.L, this.m + a, 0) : Hd.call(null, this.L, this.m + a, 0) : null;
  return null == a ? H : a;
};
var Hd = function() {
  function a(a, b, c, d, l) {
    return new Jd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Jd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Jd(a, zd(a, b), b, c, null, null);
  }
  var d = null, d = function(d, g, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, h);
      case 4:
        return b.call(this, d, g, h, k);
      case 5:
        return a.call(this, d, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.l = b;
  d.w = a;
  return d;
}();
function Ld(a, b, c, d, e) {
  this.h = a;
  this.Z = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.n = 0;
  this.i = 32400159;
}
f = Ld.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.u = function(a, b) {
  return w.b(this, b, null);
};
f.v = function(a, b, c) {
  return w.b(this, b, c);
};
f.ka = function(a, b, c) {
  var d = this, e = d.start + b;
  return Md.w ? Md.w(d.h, Wb.b(d.Z, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Md.call(null, d.h, Wb.b(d.Z, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.o(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return this.o(null, a);
};
f.a = function(a, b) {
  return this.X(null, a, b);
};
f.C = function(a, b) {
  return Md.w ? Md.w(this.h, Wa(this.Z, this.end, b), this.start, this.end + 1, null) : Md.call(null, this.h, Wa(this.Z, this.end, b), this.start, this.end + 1, null);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return Kb.a(this, b);
};
f.N = function(a, b, c) {
  return Kb.b(this, b, c);
};
f.D = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : L(w.a(a.Z, d), new U(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
f.I = function() {
  return this.end - this.start;
};
f.ma = function() {
  return w.a(this.Z, this.end - 1);
};
f.na = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return Md.w ? Md.w(this.h, this.Z, this.start, this.end - 1, null) : Md.call(null, this.h, this.Z, this.start, this.end - 1, null);
};
f.ya = function(a, b, c) {
  return Ka(this, b, c);
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return Md.w ? Md.w(b, this.Z, this.start, this.end, this.k) : Md.call(null, b, this.Z, this.start, this.end, this.k);
};
f.A = function() {
  return this.h;
};
f.o = function(a, b) {
  return 0 > b || this.end <= this.start + b ? yd(b, this.end - this.start) : w.a(this.Z, this.start + b);
};
f.X = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : w.b(this.Z, this.start + b, c);
};
f.G = function() {
  return Sb(od, this.h);
};
function Md(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Ld) {
      c = b.start + c, d = b.start + d, b = b.Z;
    } else {
      var g = O(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Ld(a, b, c, d, e);
    }
  }
}
var Kd = function() {
  function a(a, b, c) {
    return Md(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, O(a));
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Fd(a) {
  return new rd({}, va(a.d));
}
function Gd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  hc(a, 0, b, 0, a.length);
  return b;
}
var Od = function Nd(b, c, d, e) {
  d = b.root.r === d.r ? d : new rd(b.root.r, va(d.d));
  var g = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.d[g];
    b = null != h ? Nd(b, c - 5, h, e) : vd(b.root.r, c - 5, e);
  }
  d.d[g] = b;
  return d;
};
function Ed(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.Q = d;
  this.i = 275;
  this.n = 88;
}
f = Ed.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.u = function(a, b) {
  return w.b(this, b, null);
};
f.v = function(a, b, c) {
  return w.b(this, b, c);
};
f.o = function(a, b) {
  if (this.root.r) {
    return zd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.X = function(a, b, c) {
  return 0 <= b && b < this.f ? w.a(this, b) : c;
};
f.I = function() {
  if (this.root.r) {
    return this.f;
  }
  throw Error("count after persistent!");
};
f.Mb = function(a, b, c) {
  var d = this;
  if (d.root.r) {
    if (0 <= b && b < d.f) {
      return ud(this) <= b ? d.Q[b & 31] = c : (a = function g(a, k) {
        var l = d.root.r === k.r ? k : new rd(d.root.r, va(k.d));
        if (0 === a) {
          l.d[b & 31] = c;
        } else {
          var n = b >>> a & 31, p = g(a - 5, l.d[n]);
          l.d[n] = p;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return ub(this, c);
    }
    if (s) {
      throw Error([v("Index "), v(b), v(" out of bounds for TransientVector of length"), v(d.f)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
f.La = function(a, b, c) {
  return xb(this, b, c);
};
f.Ma = function(a, b) {
  if (this.root.r) {
    if (32 > this.f - ud(this)) {
      this.Q[this.f & 31] = b;
    } else {
      var c = new rd(this.root.r, this.Q), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.Q = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = vd(this.root.r, this.shift, c);
        this.root = new rd(this.root.r, d);
        this.shift = e;
      } else {
        this.root = Od(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.Na = function() {
  if (this.root.r) {
    this.root.r = null;
    var a = this.f - ud(this), b = Array(a);
    hc(this.Q, 0, b, 0, a);
    return new V(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Pd(a, b, c, d) {
  this.h = a;
  this.W = b;
  this.ia = c;
  this.k = d;
  this.n = 0;
  this.i = 31850572;
}
f = Pd.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.C = function(a, b) {
  return L(b, this);
};
f.toString = function() {
  return Bb(this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return F(this.W);
};
f.S = function() {
  var a = I(this.W);
  return a ? new Pd(this.h, a, this.ia, null) : null == this.ia ? za(this) : new Pd(this.h, this.ia, null, null);
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new Pd(b, this.W, this.ia, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb(H, this.h);
};
function Qd(a, b, c, d, e) {
  this.h = a;
  this.count = b;
  this.W = c;
  this.ia = d;
  this.k = e;
  this.n = 0;
  this.i = 31858766;
}
f = Qd.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.C = function(a, b) {
  var c;
  q(this.W) ? (c = this.ia, c = new Qd(this.h, this.count + 1, this.W, Tb.a(q(c) ? c : od, b), null)) : c = new Qd(this.h, this.count + 1, Tb.a(this.W, b), od, null);
  return c;
};
f.toString = function() {
  return Bb(this);
};
f.D = function() {
  var a = E(this.ia), b = this.W;
  return q(q(b) ? b : a) ? new Pd(null, this.W, E(a), null) : null;
};
f.I = function() {
  return this.count;
};
f.ma = function() {
  return F(this.W);
};
f.na = function() {
  if (q(this.W)) {
    var a = I(this.W);
    return a ? new Qd(this.h, this.count - 1, a, this.ia, null) : new Qd(this.h, this.count - 1, E(this.ia), od, null);
  }
  return this;
};
f.O = function() {
  return F(this.W);
};
f.S = function() {
  return G(E(this));
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new Qd(b, this.count, this.W, this.ia, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Rd;
};
var Rd = new Qd(null, 0, null, od, 0);
function Sd() {
  this.n = 0;
  this.i = 2097152;
}
Sd.prototype.s = function() {
  return!1;
};
var Td = new Sd;
function Vd(a, b) {
  return kc(ec(b) ? O(a) === O(b) ? Zc($c, ed.a(function(a) {
    return C.a(Q.b(b, F(a), Td), F(I(a)));
  }, a)) : null : null);
}
function Wd(a, b) {
  var c = a.d;
  if (b instanceof T) {
    a: {
      for (var d = c.length, e = b.ta, g = 0;;) {
        if (d <= g) {
          c = -1;
          break a;
        }
        var h = c[g];
        if (h instanceof T && e === h.ta) {
          c = g;
          break a;
        }
        if (s) {
          g += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (s) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof Fb) {
        a: {
          d = c.length;
          e = b.wa;
          for (g = 0;;) {
            if (d <= g) {
              c = -1;
              break a;
            }
            h = c[g];
            if (h instanceof Fb && e === h.wa) {
              c = g;
              break a;
            }
            if (s) {
              g += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (s) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (s) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (C.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (s) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function Xd(a, b, c) {
  this.d = a;
  this.m = b;
  this.ba = c;
  this.n = 0;
  this.i = 32374990;
}
f = Xd.prototype;
f.t = function() {
  return Ob(this);
};
f.$ = function() {
  return this.m < this.d.length - 2 ? new Xd(this.d, this.m + 2, this.ba) : null;
};
f.C = function(a, b) {
  return L(b, this);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return N.a(b, this);
};
f.N = function(a, b, c) {
  return N.b(b, c, this);
};
f.D = function() {
  return this;
};
f.I = function() {
  return(this.d.length - this.m) / 2;
};
f.O = function() {
  return new V(null, 2, 5, W, [this.d[this.m], this.d[this.m + 1]], null);
};
f.S = function() {
  return this.m < this.d.length - 2 ? new Xd(this.d, this.m + 2, this.ba) : H;
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new Xd(this.d, this.m, b);
};
f.A = function() {
  return this.ba;
};
f.G = function() {
  return Sb(H, this.ba);
};
function ka(a, b, c, d) {
  this.h = a;
  this.f = b;
  this.d = c;
  this.k = d;
  this.n = 4;
  this.i = 16123663;
}
f = ka.prototype;
f.Ga = function() {
  return new Yd({}, this.d.length, va(this.d));
};
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = xc(this);
};
f.u = function(a, b) {
  return Ia.b(this, b, null);
};
f.v = function(a, b, c) {
  a = Wd(this, b);
  return-1 === a ? c : this.d[a + 1];
};
f.ka = function(a, b, c) {
  a = Wd(this, b);
  if (-1 === a) {
    if (this.f < Zd) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new ka(this.h, this.f + 1, e, null);
    }
    return $a(Ka(nd($d, this), b, c), this.h);
  }
  return c === this.d[a + 1] ? this : s ? (b = va(this.d), b[a + 1] = c, new ka(this.h, this.f, b, null)) : null;
};
f.Fa = function(a, b) {
  return-1 !== Wd(this, b);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.C = function(a, b) {
  return fc(b) ? Ka(this, w.a(b, 0), w.a(b, 1)) : nc.b(Ba, this, b);
};
f.toString = function() {
  return Bb(this);
};
f.D = function() {
  return 0 <= this.d.length - 2 ? new Xd(this.d, 0, null) : null;
};
f.I = function() {
  return this.f;
};
f.s = function(a, b) {
  return Vd(this, b);
};
f.F = function(a, b) {
  return new ka(b, this.f, this.d, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return $a(ae, this.h);
};
f.Ha = function(a, b) {
  if (0 <= Wd(this, b)) {
    var c = this.d.length, d = c - 2;
    if (0 === d) {
      return za(this);
    }
    for (var d = Array(d), e = 0, g = 0;;) {
      if (e >= c) {
        return new ka(this.h, this.f - 1, d, null);
      }
      if (C.a(b, this.d[e])) {
        e += 2;
      } else {
        if (s) {
          d[g] = this.d[e], d[g + 1] = this.d[e + 1], g += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var ae = new ka(null, 0, [], null), Zd = 8;
function Yd(a, b, c) {
  this.Da = a;
  this.Aa = b;
  this.d = c;
  this.n = 56;
  this.i = 258;
}
f = Yd.prototype;
f.La = function(a, b, c) {
  if (q(this.Da)) {
    a = Wd(this, b);
    if (-1 === a) {
      if (this.Aa + 2 <= 2 * Zd) {
        return this.Aa += 2, this.d.push(b), this.d.push(c), this;
      }
      a = be.a ? be.a(this.Aa, this.d) : be.call(null, this.Aa, this.d);
      return wb(a, b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.Ma = function(a, b) {
  if (q(this.Da)) {
    if (b ? b.i & 2048 || b.Xb || (b.i ? 0 : r(Oa, b)) : r(Oa, b)) {
      return wb(this, yc.c ? yc.c(b) : yc.call(null, b), zc.c ? zc.c(b) : zc.call(null, b));
    }
    for (var c = E(b), d = this;;) {
      var e = F(c);
      if (q(e)) {
        c = I(c), d = wb(d, yc.c ? yc.c(e) : yc.call(null, e), zc.c ? zc.c(e) : zc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
f.Na = function() {
  if (q(this.Da)) {
    return this.Da = !1, new ka(null, tc(this.Aa, 2), this.d, null);
  }
  throw Error("persistent! called twice");
};
f.u = function(a, b) {
  return Ia.b(this, b, null);
};
f.v = function(a, b, c) {
  if (q(this.Da)) {
    return a = Wd(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.I = function() {
  if (q(this.Da)) {
    return tc(this.Aa, 2);
  }
  throw Error("count after persistent!");
};
function be(a, b) {
  for (var c = tb($d), d = 0;;) {
    if (d < a) {
      c = wb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function ce() {
  this.val = !1;
}
function de(a, b) {
  return a === b ? !0 : a === b || a instanceof T && b instanceof T && a.ta === b.ta ? !0 : s ? C.a(a, b) : null;
}
var ee = function() {
  function a(a, b, c, h, k) {
    a = va(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = va(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.w = a;
  return c;
}();
function fe(a, b) {
  var c = Array(a.length - 2);
  hc(a, 0, c, 0, 2 * b);
  hc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var ge = function() {
  function a(a, b, c, h, k, l) {
    a = a.Ea(b);
    a.d[c] = h;
    a.d[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Ea(b);
    a.d[c] = h;
    return a;
  }
  var c = null, c = function(c, e, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 6:
        return a.call(this, c, e, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.la = a;
  return c;
}();
function he(a, b, c) {
  this.r = a;
  this.B = b;
  this.d = c;
}
f = he.prototype;
f.da = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = uc(this.B & h - 1);
  if (0 === (this.B & h)) {
    var l = uc(this.B);
    if (2 * l < this.d.length) {
      a = this.Ea(a);
      b = a.d;
      g.val = !0;
      a: {
        for (c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.B |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = ie.da(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.B >>> d & 1) && (k[d] = null != this.d[e] ? ie.da(a, b + 5, D(this.d[e]), this.d[e], this.d[e + 1], g) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new je(a, l + 1, k);
    }
    return s ? (b = Array(2 * (l + 4)), hc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, hc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.val = !0, a = this.Ea(a), a.d = b, a.B |= h, a) : null;
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.da(a, b + 5, c, d, e, g), l === h ? this : ge.l(this, a, 2 * k + 1, l)) : de(d, l) ? e === h ? this : ge.l(this, a, 2 * k + 1, e) : s ? (g.val = !0, ge.la(this, a, 2 * k, null, 2 * k + 1, ke.Ca ? ke.Ca(a, b + 5, l, h, c, d, e) : ke.call(null, a, b + 5, l, h, c, d, e))) : null;
};
f.Oa = function() {
  return le.c ? le.c(this.d) : le.call(null, this.d);
};
f.Ea = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = uc(this.B), c = Array(0 > b ? 4 : 2 * (b + 1));
  hc(this.d, 0, c, 0, 2 * b);
  return new he(a, this.B, c);
};
f.Pa = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.B & d)) {
    return this;
  }
  var e = uc(this.B & d - 1), g = this.d[2 * e], h = this.d[2 * e + 1];
  return null == g ? (a = h.Pa(a + 5, b, c), a === h ? this : null != a ? new he(null, this.B, ee.b(this.d, 2 * e + 1, a)) : this.B === d ? null : s ? new he(null, this.B ^ d, fe(this.d, e)) : null) : de(c, g) ? new he(null, this.B ^ d, fe(this.d, e)) : s ? this : null;
};
f.ca = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = uc(this.B & g - 1);
  if (0 === (this.B & g)) {
    var k = uc(this.B);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = ie.ca(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.B >>> c & 1) && (h[c] = null != this.d[d] ? ie.ca(a + 5, D(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new je(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    hc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    hc(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.val = !0;
    return new he(null, this.B | g, a);
  }
  k = this.d[2 * h];
  g = this.d[2 * h + 1];
  return null == k ? (k = g.ca(a + 5, b, c, d, e), k === g ? this : new he(null, this.B, ee.b(this.d, 2 * h + 1, k))) : de(c, k) ? d === g ? this : new he(null, this.B, ee.b(this.d, 2 * h + 1, d)) : s ? (e.val = !0, new he(null, this.B, ee.w(this.d, 2 * h, null, 2 * h + 1, ke.la ? ke.la(a + 5, k, g, b, c, d) : ke.call(null, a + 5, k, g, b, c, d)))) : null;
};
f.ua = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.B & e)) {
    return d;
  }
  var g = uc(this.B & e - 1), e = this.d[2 * g], g = this.d[2 * g + 1];
  return null == e ? g.ua(a + 5, b, c, d) : de(c, e) ? g : s ? d : null;
};
var ie = new he(null, 0, []);
function je(a, b, c) {
  this.r = a;
  this.f = b;
  this.d = c;
}
f = je.prototype;
f.da = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.d[h];
  if (null == k) {
    return a = ge.l(this, a, h, ie.da(a, b + 5, c, d, e, g)), a.f += 1, a;
  }
  b = k.da(a, b + 5, c, d, e, g);
  return b === k ? this : ge.l(this, a, h, b);
};
f.Oa = function() {
  return me.c ? me.c(this.d) : me.call(null, this.d);
};
f.Ea = function(a) {
  return a === this.r ? this : new je(a, this.f, va(this.d));
};
f.Pa = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if (null != e) {
    a = e.Pa(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.f) {
          a: {
            e = this.d;
            a = 2 * (this.f - 1);
            b = Array(a);
            c = 0;
            for (var g = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[g] = e[c], g += 2, h |= 1 << c), c += 1;
              } else {
                d = new he(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new je(null, this.f - 1, ee.b(this.d, d, a));
        }
      } else {
        d = s ? new je(null, this.f, ee.b(this.d, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
f.ca = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.d[g];
  if (null == h) {
    return new je(null, this.f + 1, ee.b(this.d, g, ie.ca(a + 5, b, c, d, e)));
  }
  a = h.ca(a + 5, b, c, d, e);
  return a === h ? this : new je(null, this.f, ee.b(this.d, g, a));
};
f.ua = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.ua(a + 5, b, c, d) : d;
};
function ne(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (de(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function oe(a, b, c, d) {
  this.r = a;
  this.oa = b;
  this.f = c;
  this.d = d;
}
f = oe.prototype;
f.da = function(a, b, c, d, e, g) {
  if (c === this.oa) {
    b = ne(this.d, this.f, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.f) {
        return a = ge.la(this, a, 2 * this.f, d, 2 * this.f + 1, e), g.val = !0, a.f += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      hc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.val = !0;
      g = this.f + 1;
      a === this.r ? (this.d = b, this.f = g, a = this) : a = new oe(this.r, this.oa, g, b);
      return a;
    }
    return this.d[b + 1] === e ? this : ge.l(this, a, b + 1, e);
  }
  return(new he(a, 1 << (this.oa >>> b & 31), [null, this, null, null])).da(a, b, c, d, e, g);
};
f.Oa = function() {
  return le.c ? le.c(this.d) : le.call(null, this.d);
};
f.Ea = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  hc(this.d, 0, b, 0, 2 * this.f);
  return new oe(a, this.oa, this.f, b);
};
f.Pa = function(a, b, c) {
  a = ne(this.d, this.f, c);
  return-1 === a ? this : 1 === this.f ? null : s ? new oe(null, this.oa, this.f - 1, fe(this.d, tc(a, 2))) : null;
};
f.ca = function(a, b, c, d, e) {
  return b === this.oa ? (a = ne(this.d, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), hc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.val = !0, new oe(null, this.oa, this.f + 1, b)) : C.a(this.d[a], d) ? this : new oe(null, this.oa, this.f, ee.b(this.d, a + 1, d))) : (new he(null, 1 << (this.oa >>> a & 31), [null, this])).ca(a, b, c, d, e);
};
f.ua = function(a, b, c, d) {
  a = ne(this.d, this.f, c);
  return 0 > a ? d : de(c, this.d[a]) ? this.d[a + 1] : s ? d : null;
};
var ke = function() {
  function a(a, b, c, h, k, l, n) {
    var p = D(c);
    if (p === k) {
      return new oe(null, p, 2, [c, h, l, n]);
    }
    var u = new ce;
    return ie.da(a, b, p, c, h, u).da(a, b, k, l, n, u);
  }
  function b(a, b, c, h, k, l) {
    var n = D(b);
    if (n === h) {
      return new oe(null, n, 2, [b, c, k, l]);
    }
    var p = new ce;
    return ie.ca(a, n, b, c, p).ca(a, h, k, l, p);
  }
  var c = null, c = function(c, e, g, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.la = b;
  c.Ca = a;
  return c;
}();
function pe(a, b, c, d, e) {
  this.h = a;
  this.ea = b;
  this.m = c;
  this.H = d;
  this.k = e;
  this.n = 0;
  this.i = 32374860;
}
f = pe.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.C = function(a, b) {
  return L(b, this);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return N.a(b, this);
};
f.N = function(a, b, c) {
  return N.b(b, c, this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return null == this.H ? new V(null, 2, 5, W, [this.ea[this.m], this.ea[this.m + 1]], null) : F(this.H);
};
f.S = function() {
  return null == this.H ? le.b ? le.b(this.ea, this.m + 2, null) : le.call(null, this.ea, this.m + 2, null) : le.b ? le.b(this.ea, this.m, I(this.H)) : le.call(null, this.ea, this.m, I(this.H));
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new pe(b, this.ea, this.m, this.H, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb(H, this.h);
};
var le = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new pe(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (q(h) && (h = h.Oa(), q(h))) {
            return new pe(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new pe(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.b = a;
  return c;
}();
function qe(a, b, c, d, e) {
  this.h = a;
  this.ea = b;
  this.m = c;
  this.H = d;
  this.k = e;
  this.n = 0;
  this.i = 32374860;
}
f = qe.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.C = function(a, b) {
  return L(b, this);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return N.a(b, this);
};
f.N = function(a, b, c) {
  return N.b(b, c, this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return F(this.H);
};
f.S = function() {
  return me.l ? me.l(null, this.ea, this.m, I(this.H)) : me.call(null, null, this.ea, this.m, I(this.H));
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new qe(b, this.ea, this.m, this.H, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb(H, this.h);
};
var me = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (q(k) && (k = k.Oa(), q(k))) {
            return new qe(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new qe(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.l(null, a, 0, null);
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.l = a;
  return c;
}();
function re(a, b, c, d, e, g) {
  this.h = a;
  this.f = b;
  this.root = c;
  this.T = d;
  this.Y = e;
  this.k = g;
  this.n = 4;
  this.i = 16123663;
}
f = re.prototype;
f.Ga = function() {
  return new se({}, this.root, this.f, this.T, this.Y);
};
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = xc(this);
};
f.u = function(a, b) {
  return Ia.b(this, b, null);
};
f.v = function(a, b, c) {
  return null == b ? this.T ? this.Y : c : null == this.root ? c : s ? this.root.ua(0, D(b), b, c) : null;
};
f.ka = function(a, b, c) {
  if (null == b) {
    return this.T && c === this.Y ? this : new re(this.h, this.T ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new ce;
  b = (null == this.root ? ie : this.root).ca(0, D(b), b, c, a);
  return b === this.root ? this : new re(this.h, a.val ? this.f + 1 : this.f, b, this.T, this.Y, null);
};
f.Fa = function(a, b) {
  return null == b ? this.T : null == this.root ? !1 : s ? this.root.ua(0, D(b), b, ic) !== ic : null;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.C = function(a, b) {
  return fc(b) ? Ka(this, w.a(b, 0), w.a(b, 1)) : nc.b(Ba, this, b);
};
f.toString = function() {
  return Bb(this);
};
f.D = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.Oa() : null;
    return this.T ? L(new V(null, 2, 5, W, [null, this.Y], null), a) : a;
  }
  return null;
};
f.I = function() {
  return this.f;
};
f.s = function(a, b) {
  return Vd(this, b);
};
f.F = function(a, b) {
  return new re(b, this.f, this.root, this.T, this.Y, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return $a($d, this.h);
};
f.Ha = function(a, b) {
  if (null == b) {
    return this.T ? new re(this.h, this.f - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (s) {
    var c = this.root.Pa(0, D(b), b);
    return c === this.root ? this : new re(this.h, this.f - 1, c, this.T, this.Y, null);
  }
  return null;
};
var $d = new re(null, 0, null, !1, null, 0);
function Vb(a, b) {
  for (var c = a.length, d = 0, e = tb($d);;) {
    if (d < c) {
      var g = d + 1, e = e.La(null, a[d], b[d]), d = g
    } else {
      return vb(e);
    }
  }
}
function se(a, b, c, d, e) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.T = d;
  this.Y = e;
  this.n = 56;
  this.i = 258;
}
f = se.prototype;
f.La = function(a, b, c) {
  return te(this, b, c);
};
f.Ma = function(a, b) {
  var c;
  a: {
    if (this.r) {
      if (b ? b.i & 2048 || b.Xb || (b.i ? 0 : r(Oa, b)) : r(Oa, b)) {
        c = te(this, yc.c ? yc.c(b) : yc.call(null, b), zc.c ? zc.c(b) : zc.call(null, b));
        break a;
      }
      c = E(b);
      for (var d = this;;) {
        var e = F(c);
        if (q(e)) {
          c = I(c), d = te(d, yc.c ? yc.c(e) : yc.call(null, e), zc.c ? zc.c(e) : zc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
f.Na = function() {
  var a;
  if (this.r) {
    this.r = null, a = new re(null, this.count, this.root, this.T, this.Y, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.u = function(a, b) {
  return null == b ? this.T ? this.Y : null : null == this.root ? null : this.root.ua(0, D(b), b);
};
f.v = function(a, b, c) {
  return null == b ? this.T ? this.Y : c : null == this.root ? c : this.root.ua(0, D(b), b, c);
};
f.I = function() {
  if (this.r) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function te(a, b, c) {
  if (a.r) {
    if (null == b) {
      a.Y !== c && (a.Y = c), a.T || (a.count += 1, a.T = !0);
    } else {
      var d = new ce;
      b = (null == a.root ? ie : a.root).da(a.r, 0, D(b), b, c, d);
      b !== a.root && (a.root = b);
      d.val && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function ue(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = Tb.a(d, a), a = b;
    } else {
      return d;
    }
  }
}
function ve(a, b, c, d, e) {
  this.h = a;
  this.stack = b;
  this.Ua = c;
  this.f = d;
  this.k = e;
  this.n = 0;
  this.i = 32374862;
}
f = ve.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.C = function(a, b) {
  return L(b, this);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return N.a(b, this);
};
f.N = function(a, b, c) {
  return N.b(b, c, this);
};
f.D = function() {
  return this;
};
f.I = function() {
  return 0 > this.f ? O(I(this)) + 1 : this.f;
};
f.O = function() {
  return ac(this.stack);
};
f.S = function() {
  var a = F(this.stack), a = ue(this.Ua ? a.right : a.left, I(this.stack), this.Ua);
  return null != a ? new ve(null, a, this.Ua, this.f - 1, null) : H;
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new ve(b, this.stack, this.Ua, this.f, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb(H, this.h);
};
function we(a, b, c, d) {
  return c instanceof X ? c.left instanceof X ? new X(c.key, c.val, c.left.ja(), new Y(a, b, c.right, d, null), null) : c.right instanceof X ? new X(c.right.key, c.right.val, new Y(c.key, c.val, c.left, c.right.left, null), new Y(a, b, c.right.right, d, null), null) : s ? new Y(a, b, c, d, null) : null : new Y(a, b, c, d, null);
}
function xe(a, b, c, d) {
  return d instanceof X ? d.right instanceof X ? new X(d.key, d.val, new Y(a, b, c, d.left, null), d.right.ja(), null) : d.left instanceof X ? new X(d.left.key, d.left.val, new Y(a, b, c, d.left.left, null), new Y(d.key, d.val, d.left.right, d.right, null), null) : s ? new Y(a, b, c, d, null) : null : new Y(a, b, c, d, null);
}
function ye(a, b, c, d) {
  if (c instanceof X) {
    return new X(a, b, c.ja(), d, null);
  }
  if (d instanceof Y) {
    return xe(a, b, c, d.Sa());
  }
  if (d instanceof X && d.left instanceof Y) {
    return new X(d.left.key, d.left.val, new Y(a, b, c, d.left.left, null), xe(d.key, d.val, d.left.right, d.right.Sa()), null);
  }
  if (s) {
    throw Error("red-black tree invariant violation");
  }
  return null;
}
function Y(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.k = e;
  this.n = 0;
  this.i = 32402207;
}
f = Y.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.u = function(a, b) {
  return w.b(this, b, null);
};
f.v = function(a, b, c) {
  return w.b(this, b, c);
};
f.ka = function(a, b, c) {
  return Wb.b(new V(null, 2, 5, W, [this.key, this.val], null), b, c);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.C = function(a, b) {
  return new V(null, 3, 5, W, [this.key, this.val, b], null);
};
f.Ia = function() {
  return this.key;
};
f.Ya = function() {
  return this.val;
};
f.Cb = function(a) {
  return a.Eb(this);
};
f.Sa = function() {
  return new X(this.key, this.val, this.left, this.right, null);
};
f.replace = function(a, b, c, d) {
  return new Y(a, b, c, d, null);
};
f.Bb = function(a) {
  return a.Db(this);
};
f.Db = function(a) {
  return new Y(a.key, a.val, this, a.right, null);
};
f.Eb = function(a) {
  return new Y(a.key, a.val, a.left, this, null);
};
f.ja = function() {
  return this;
};
f.M = function(a, b) {
  return Kb.a(this, b);
};
f.N = function(a, b, c) {
  return Kb.b(this, b, c);
};
f.D = function() {
  return Ba(Ba(H, this.val), this.key);
};
f.I = function() {
  return 2;
};
f.ma = function() {
  return this.val;
};
f.na = function() {
  return new V(null, 1, 5, W, [this.key], null);
};
f.ya = function(a, b, c) {
  return(new V(null, 2, 5, W, [this.key, this.val], null)).ya(null, b, c);
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return Sb(new V(null, 2, 5, W, [this.key, this.val], null), b);
};
f.A = function() {
  return null;
};
f.o = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : null;
};
f.X = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : s ? c : null;
};
f.G = function() {
  return od;
};
function X(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.k = e;
  this.n = 0;
  this.i = 32402207;
}
f = X.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Ob(this);
};
f.u = function(a, b) {
  return w.b(this, b, null);
};
f.v = function(a, b, c) {
  return w.b(this, b, c);
};
f.ka = function(a, b, c) {
  return Wb.b(new V(null, 2, 5, W, [this.key, this.val], null), b, c);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.C = function(a, b) {
  return new V(null, 3, 5, W, [this.key, this.val, b], null);
};
f.Ia = function() {
  return this.key;
};
f.Ya = function() {
  return this.val;
};
f.Cb = function(a) {
  return new X(this.key, this.val, this.left, a, null);
};
f.Sa = function() {
  throw Error("red-black tree invariant violation");
};
f.replace = function(a, b, c, d) {
  return new X(a, b, c, d, null);
};
f.Bb = function(a) {
  return new X(this.key, this.val, a, this.right, null);
};
f.Db = function(a) {
  return this.left instanceof X ? new X(this.key, this.val, this.left.ja(), new Y(a.key, a.val, this.right, a.right, null), null) : this.right instanceof X ? new X(this.right.key, this.right.val, new Y(this.key, this.val, this.left, this.right.left, null), new Y(a.key, a.val, this.right.right, a.right, null), null) : s ? new Y(a.key, a.val, this, a.right, null) : null;
};
f.Eb = function(a) {
  return this.right instanceof X ? new X(this.key, this.val, new Y(a.key, a.val, a.left, this.left, null), this.right.ja(), null) : this.left instanceof X ? new X(this.left.key, this.left.val, new Y(a.key, a.val, a.left, this.left.left, null), new Y(this.key, this.val, this.left.right, this.right, null), null) : s ? new Y(a.key, a.val, a.left, this, null) : null;
};
f.ja = function() {
  return new Y(this.key, this.val, this.left, this.right, null);
};
f.M = function(a, b) {
  return Kb.a(this, b);
};
f.N = function(a, b, c) {
  return Kb.b(this, b, c);
};
f.D = function() {
  return Ba(Ba(H, this.val), this.key);
};
f.I = function() {
  return 2;
};
f.ma = function() {
  return this.val;
};
f.na = function() {
  return new V(null, 1, 5, W, [this.key], null);
};
f.ya = function(a, b, c) {
  return(new V(null, 2, 5, W, [this.key, this.val], null)).ya(null, b, c);
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return Sb(new V(null, 2, 5, W, [this.key, this.val], null), b);
};
f.A = function() {
  return null;
};
f.o = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : null;
};
f.X = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : s ? c : null;
};
f.G = function() {
  return od;
};
var Ae = function ze(b, c, d, e, g) {
  if (null == c) {
    return new X(d, e, null, null, null);
  }
  var h = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
  return 0 === h ? (g[0] = c, null) : 0 > h ? (b = ze(b, c.left, d, e, g), null != b ? c.Bb(b) : null) : s ? (b = ze(b, c.right, d, e, g), null != b ? c.Cb(b) : null) : null;
}, Ce = function Be(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof X) {
    if (c instanceof X) {
      var d = Be(b.right, c.left);
      return d instanceof X ? new X(d.key, d.val, new X(b.key, b.val, b.left, d.left, null), new X(c.key, c.val, d.right, c.right, null), null) : new X(b.key, b.val, b.left, new X(c.key, c.val, d, c.right, null), null);
    }
    return new X(b.key, b.val, b.left, Be(b.right, c), null);
  }
  return c instanceof X ? new X(c.key, c.val, Be(b, c.left), c.right, null) : s ? (d = Be(b.right, c.left), d instanceof X ? new X(d.key, d.val, new Y(b.key, b.val, b.left, d.left, null), new Y(c.key, c.val, d.right, c.right, null), null) : ye(b.key, b.val, b.left, new Y(c.key, c.val, d, c.right, null))) : null;
}, Ee = function De(b, c, d, e) {
  if (null != c) {
    var g = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
    if (0 === g) {
      return e[0] = c, Ce(c.left, c.right);
    }
    if (0 > g) {
      return b = De(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Y ? ye(c.key, c.val, b, c.right) : new X(c.key, c.val, b, c.right, null) : null;
    }
    if (s) {
      b = De(b, c.right, d, e);
      if (null != b || null != e[0]) {
        if (c.right instanceof Y) {
          if (e = c.key, d = c.val, c = c.left, b instanceof X) {
            c = new X(e, d, c, b.ja(), null);
          } else {
            if (c instanceof Y) {
              c = we(e, d, c.Sa(), b);
            } else {
              if (c instanceof X && c.right instanceof Y) {
                c = new X(c.right.key, c.right.val, we(c.key, c.val, c.left.Sa(), c.right.left), new Y(e, d, c.right.right, b, null), null);
              } else {
                if (s) {
                  throw Error("red-black tree invariant violation");
                }
                c = null;
              }
            }
          }
        } else {
          c = new X(c.key, c.val, c.left, b, null);
        }
      } else {
        c = null;
      }
      return c;
    }
  }
  return null;
}, Ge = function Fe(b, c, d, e) {
  var g = c.key, h = b.a ? b.a(d, g) : b.call(null, d, g);
  return 0 === h ? c.replace(g, e, c.left, c.right) : 0 > h ? c.replace(g, c.val, Fe(b, c.left, d, e), c.right) : s ? c.replace(g, c.val, c.left, Fe(b, c.right, d, e)) : null;
};
function He(a, b, c, d, e) {
  this.V = a;
  this.ra = b;
  this.f = c;
  this.h = d;
  this.k = e;
  this.n = 0;
  this.i = 418776847;
}
f = He.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = xc(this);
};
f.u = function(a, b) {
  return Ia.b(this, b, null);
};
f.v = function(a, b, c) {
  a = Ie(this, b);
  return null != a ? a.val : c;
};
f.ka = function(a, b, c) {
  a = [null];
  var d = Ae(this.V, this.ra, b, c, a);
  return null == d ? (a = P.a(a, 0), C.a(c, a.val) ? this : new He(this.V, Ge(this.V, this.ra, b, c), this.f, this.h, null)) : new He(this.V, d.ja(), this.f + 1, this.h, null);
};
f.Fa = function(a, b) {
  return null != Ie(this, b);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.C = function(a, b) {
  return fc(b) ? Ka(this, w.a(b, 0), w.a(b, 1)) : nc.b(Ba, this, b);
};
f.Ja = function() {
  return 0 < this.f ? new ve(null, ue(this.ra, null, !1), !1, this.f, null) : null;
};
f.toString = function() {
  return Bb(this);
};
function Ie(a, b) {
  for (var c = a.ra;;) {
    if (null != c) {
      var d = a.V.a ? a.V.a(b, c.key) : a.V.call(null, b, c.key);
      if (0 === d) {
        return c;
      }
      if (0 > d) {
        c = c.left;
      } else {
        if (s) {
          c = c.right;
        } else {
          return null;
        }
      }
    } else {
      return null;
    }
  }
}
f.vb = function(a, b) {
  return 0 < this.f ? new ve(null, ue(this.ra, null, b), b, this.f, null) : null;
};
f.wb = function(a, b, c) {
  if (0 < this.f) {
    a = null;
    for (var d = this.ra;;) {
      if (null != d) {
        var e = this.V.a ? this.V.a(b, d.key) : this.V.call(null, b, d.key);
        if (0 === e) {
          return new ve(null, Tb.a(a, d), c, -1, null);
        }
        if (q(c)) {
          0 > e ? (a = Tb.a(a, d), d = d.left) : d = d.right;
        } else {
          if (s) {
            0 < e ? (a = Tb.a(a, d), d = d.right) : d = d.left;
          } else {
            return null;
          }
        }
      } else {
        return null == a ? null : new ve(null, a, c, -1, null);
      }
    }
  } else {
    return null;
  }
};
f.ub = function(a, b) {
  return yc.c ? yc.c(b) : yc.call(null, b);
};
f.tb = function() {
  return this.V;
};
f.D = function() {
  return 0 < this.f ? new ve(null, ue(this.ra, null, !0), !0, this.f, null) : null;
};
f.I = function() {
  return this.f;
};
f.s = function(a, b) {
  return Vd(this, b);
};
f.F = function(a, b) {
  return new He(this.V, this.ra, this.f, b, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb(Je, this.h);
};
f.Ha = function(a, b) {
  var c = [null], d = Ee(this.V, this.ra, b, c);
  return null == d ? null == P.a(c, 0) ? this : new He(this.V, null, 0, this.h, null) : new He(this.V, d.ja(), this.f - 1, this.h, null);
};
var Je = new He(Db, null, 0, null, 0), Ke = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    for (var b = E(a), e = tb($d);;) {
      if (b) {
        a = I(I(b));
        var g = F(b), b = F(I(b)), e = wb(e, g, b), b = a;
      } else {
        return vb(e);
      }
    }
  }
  a.j = 0;
  a.g = function(a) {
    a = E(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Le = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = E(a);
    for (var b = Je;;) {
      if (a) {
        var e = I(I(a)), b = Wb.b(b, F(a), F(I(a)));
        a = e;
      } else {
        return b;
      }
    }
  }
  a.j = 0;
  a.g = function(a) {
    a = E(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Me(a, b) {
  this.va = a;
  this.ba = b;
  this.n = 0;
  this.i = 32374988;
}
f = Me.prototype;
f.t = function() {
  return Ob(this);
};
f.$ = function() {
  var a = this.va, a = (a ? a.i & 128 || a.Kb || (a.i ? 0 : r(Ga, a)) : r(Ga, a)) ? this.va.$(null) : I(this.va);
  return null == a ? null : new Me(a, this.ba);
};
f.C = function(a, b) {
  return L(b, this);
};
f.toString = function() {
  return Bb(this);
};
f.M = function(a, b) {
  return N.a(b, this);
};
f.N = function(a, b, c) {
  return N.b(b, c, this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return this.va.O(null).Ia(null);
};
f.S = function() {
  var a = this.va, a = (a ? a.i & 128 || a.Kb || (a.i ? 0 : r(Ga, a)) : r(Ga, a)) ? this.va.$(null) : I(this.va);
  return null != a ? new Me(a, this.ba) : H;
};
f.s = function(a, b) {
  return Qb(this, b);
};
f.F = function(a, b) {
  return new Me(this.va, b);
};
f.A = function() {
  return this.ba;
};
f.G = function() {
  return Sb(H, this.ba);
};
function yc(a) {
  return Pa(a);
}
function zc(a) {
  return Qa(a);
}
function Ne(a, b, c) {
  this.h = a;
  this.za = b;
  this.k = c;
  this.n = 4;
  this.i = 15077647;
}
f = Ne.prototype;
f.Ga = function() {
  return new Oe(tb(this.za));
};
f.t = function() {
  var a = this.k;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = E(this);;) {
      if (b) {
        var c = F(b), a = (a + D(c)) % 4503599627370496, b = I(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.k = a;
};
f.u = function(a, b) {
  return Ia.b(this, b, null);
};
f.v = function(a, b, c) {
  return Ja(this.za, b) ? b : c;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.C = function(a, b) {
  return new Ne(this.h, Wb.b(this.za, b, null), null);
};
f.toString = function() {
  return Bb(this);
};
f.D = function() {
  var a = E(this.za);
  return a ? new Me(a, null) : null;
};
f.Lb = function(a, b) {
  return new Ne(this.h, Na(this.za, b), null);
};
f.I = function() {
  return ya(this.za);
};
f.s = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.i & 4096 || b.rc ? !0 : b.i ? !1 : r(Ra, b) : r(Ra, b)) && O(c) === O(b) && Zc(function(a) {
    return lc(c, a);
  }, b);
};
f.F = function(a, b) {
  return new Ne(b, this.za, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb(Pe, this.h);
};
var Pe = new Ne(null, ae, 0);
function Qe(a) {
  var b = a.length;
  if (b <= Zd) {
    for (var c = 0, d = tb(ae);;) {
      if (c < b) {
        var e = c + 1, d = wb(d, a[c], null), c = e
      } else {
        return new Ne(null, vb(d), null);
      }
    }
  } else {
    for (c = 0, d = tb(Pe);;) {
      if (c < b) {
        e = c + 1, d = ub(d, a[c]), c = e;
      } else {
        return vb(d);
      }
    }
  }
}
function Oe(a) {
  this.qa = a;
  this.i = 259;
  this.n = 136;
}
f = Oe.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ia.b(this.qa, c, ic) === ic ? null : c;
      case 3:
        return Ia.b(this.qa, c, ic) === ic ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return Ia.b(this.qa, a, ic) === ic ? null : a;
};
f.a = function(a, b) {
  return Ia.b(this.qa, a, ic) === ic ? b : a;
};
f.u = function(a, b) {
  return Ia.b(this, b, null);
};
f.v = function(a, b, c) {
  return Ia.b(this.qa, b, ic) === ic ? c : b;
};
f.I = function() {
  return O(this.qa);
};
f.Ma = function(a, b) {
  this.qa = wb(this.qa, b, null);
  return this;
};
f.Na = function() {
  return new Ne(null, vb(this.qa), null);
};
function Hc(a) {
  if (a && (a.n & 4096 || a.Zb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
var Se = function Re(b, c) {
  return new U(null, function() {
    var d = E(c);
    return d ? q(b.c ? b.c(F(d)) : b.call(null, F(d))) ? L(F(d), Re(b, G(d))) : null : null;
  }, null, null);
};
function Te(a, b, c) {
  return function(d) {
    var e = nb(a);
    return b.a ? b.a(e.a ? e.a(mb(a, d), c) : e.call(null, mb(a, d), c), 0) : b.call(null, e.a ? e.a(mb(a, d), c) : e.call(null, mb(a, d), c), 0);
  };
}
var Ue = function() {
  function a(a, b, c, h, k) {
    var l = lb(a, c, !0);
    if (q(l)) {
      var n = P.b(l, 0, null);
      return Se(Te(a, h, k), q(Te(a, b, c).call(null, n)) ? l : I(l));
    }
    return null;
  }
  function b(a, b, c) {
    var h = Te(a, b, c);
    return q(Qe([qc, rc]).call(null, b)) ? (a = lb(a, c, !0), q(a) ? (b = P.b(a, 0, null), q(h.c ? h.c(b) : h.call(null, b)) ? a : I(a)) : null) : Se(h, kb(a, !0));
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.w = a;
  return c;
}(), Ve = function() {
  function a(a, b, c, h, k) {
    var l = lb(a, k, !1);
    if (q(l)) {
      var n = P.b(l, 0, null);
      return Se(Te(a, b, c), q(Te(a, h, k).call(null, n)) ? l : I(l));
    }
    return null;
  }
  function b(a, b, c) {
    var h = Te(a, b, c);
    return q(Qe([oc, pc]).call(null, b)) ? (a = lb(a, c, !1), q(a) ? (b = P.b(a, 0, null), q(h.c ? h.c(b) : h.call(null, b)) ? a : I(a)) : null) : Se(h, kb(a, !1));
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.w = a;
  return c;
}();
function We(a) {
  var b = Xe.exec(a);
  return C.a(F(b), a) ? 1 === O(b) ? F(b) : Id(b) : null;
}
function Ye(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === O(c) ? F(c) : Id(c);
}
function Ze(a) {
  a = Ye(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  P.b(a, 0, null);
  P.b(a, 1, null);
  P.b(a, 2, null);
}
function $e(a, b, c, d, e, g, h) {
  var k = ia;
  try {
    ia = null == ia ? null : ia - 1;
    if (null != ia && 0 > ia) {
      return z(a, "#");
    }
    z(a, c);
    E(h) && (b.b ? b.b(F(h), a, g) : b.call(null, F(h), a, g));
    for (var l = I(h), n = qa.c(g);l && (null == n || 0 !== n);) {
      z(a, d);
      b.b ? b.b(F(l), a, g) : b.call(null, F(l), a, g);
      var p = I(l);
      c = n - 1;
      l = p;
      n = c;
    }
    q(qa.c(g)) && (z(a, d), b.b ? b.b("...", a, g) : b.call(null, "...", a, g));
    return z(a, e);
  } finally {
    ia = k;
  }
}
var af = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = E(b), g = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = g.o(null, k);
        z(a, l);
        k += 1;
      } else {
        if (e = E(e)) {
          g = e, S(g) ? (e = A(g), h = B(g), g = e, l = O(e), e = h, h = l) : (l = F(g), z(a, l), e = I(g), g = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.j = 1;
  a.g = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), bf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function cf(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return bf[a];
  })), v('"')].join("");
}
var ff = function df(b, c, d) {
  if (null == b) {
    return z(c, "nil");
  }
  if (void 0 === b) {
    return z(c, "#\x3cundefined\x3e");
  }
  if (s) {
    q(function() {
      var c = Q.a(d, oa);
      return q(c) ? (c = b ? b.i & 131072 || b.Yb ? !0 : b.i ? !1 : r(Xa, b) : r(Xa, b)) ? $b(b) : c : c;
    }()) && (z(c, "^"), df($b(b), c, d), z(c, " "));
    if (null == b) {
      return z(c, "nil");
    }
    if (b.Qb) {
      return b.ac(c);
    }
    if (b && (b.i & 2147483648 || b.J)) {
      return b.q(null, c, d);
    }
    if (sa(b) === Boolean || "number" === typeof b) {
      return z(c, "" + v(b));
    }
    if (null != b && b.constructor === Object) {
      return z(c, "#js "), ef.l ? ef.l(ed.a(function(c) {
        return new V(null, 2, 5, W, [Ic.c(c), b[c]], null);
      }, gc(b)), df, c, d) : ef.call(null, ed.a(function(c) {
        return new V(null, 2, 5, W, [Ic.c(c), b[c]], null);
      }, gc(b)), df, c, d);
    }
    if (b instanceof Array) {
      return $e(c, df, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return q(ma.c(d)) ? z(c, cf(b)) : z(c, b);
    }
    if (Yb(b)) {
      return af.e(c, J(["#\x3c", "" + v(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + v(b);;) {
          if (O(d) < c) {
            d = [v("0"), v(d)].join("");
          } else {
            return d;
          }
        }
      };
      return af.e(c, J(['#inst "', "" + v(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? af.e(c, J(['#"', b.source, '"'], 0)) : (b ? b.i & 2147483648 || b.J || (b.i ? 0 : r(ob, b)) : r(ob, b)) ? qb(b, c, d) : s ? af.e(c, J(["#\x3c", "" + v(b), "\x3e"], 0)) : null;
  }
  return null;
}, gf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || ra(E(a))) {
      b = "";
    } else {
      b = v;
      var e = ja(), g = new ga;
      a: {
        var h = new Ab(g);
        ff(F(a), h, e);
        a = E(I(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var p = k.o(null, n);
            z(h, " ");
            ff(p, h, e);
            n += 1;
          } else {
            if (a = E(a)) {
              k = a, S(k) ? (a = A(k), l = B(k), k = a, p = O(a), a = l, l = p) : (p = F(k), z(h, " "), ff(p, h, e), a = I(k), k = null, l = 0), n = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(g);
    }
    return b;
  }
  a.j = 0;
  a.g = function(a) {
    a = E(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ef(a, b, c, d) {
  return $e(c, function(a, c, d) {
    b.b ? b.b(Pa(a), c, d) : b.call(null, Pa(a), c, d);
    z(c, " ");
    return b.b ? b.b(Qa(a), c, d) : b.call(null, Qa(a), c, d);
  }, "{", ", ", "}", d, E(a));
}
Me.prototype.J = !0;
Me.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Ib.prototype.J = !0;
Ib.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Ld.prototype.J = !0;
Ld.prototype.q = function(a, b, c) {
  return $e(b, ff, "[", " ", "]", c, this);
};
Oc.prototype.J = !0;
Oc.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
He.prototype.J = !0;
He.prototype.q = function(a, b, c) {
  return ef(this, ff, b, c);
};
ka.prototype.J = !0;
ka.prototype.q = function(a, b, c) {
  return ef(this, ff, b, c);
};
Qd.prototype.J = !0;
Qd.prototype.q = function(a, b, c) {
  return $e(b, ff, "#queue [", " ", "]", c, E(this));
};
U.prototype.J = !0;
U.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Pb.prototype.J = !0;
Pb.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
pe.prototype.J = !0;
pe.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
X.prototype.J = !0;
X.prototype.q = function(a, b, c) {
  return $e(b, ff, "[", " ", "]", c, this);
};
Jd.prototype.J = !0;
Jd.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
re.prototype.J = !0;
re.prototype.q = function(a, b, c) {
  return ef(this, ff, b, c);
};
Ne.prototype.J = !0;
Ne.prototype.q = function(a, b, c) {
  return $e(b, ff, "#{", " ", "}", c, this);
};
V.prototype.J = !0;
V.prototype.q = function(a, b, c) {
  return $e(b, ff, "[", " ", "]", c, this);
};
Ac.prototype.J = !0;
Ac.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Xd.prototype.J = !0;
Xd.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Bc.prototype.J = !0;
Bc.prototype.q = function(a, b) {
  return z(b, "()");
};
Y.prototype.J = !0;
Y.prototype.q = function(a, b, c) {
  return $e(b, ff, "[", " ", "]", c, this);
};
Fc.prototype.J = !0;
Fc.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
qe.prototype.J = !0;
qe.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
ve.prototype.J = !0;
ve.prototype.q = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
V.prototype.Wa = !0;
V.prototype.Xa = function(a, b) {
  return mc.a(this, b);
};
Ld.prototype.Wa = !0;
Ld.prototype.Xa = function(a, b) {
  return mc.a(this, b);
};
T.prototype.Wa = !0;
T.prototype.Xa = function(a, b) {
  return Cb(this, b);
};
Fb.prototype.Wa = !0;
Fb.prototype.Xa = function(a, b) {
  return Cb(this, b);
};
function hf(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.hc = c;
  this.sa = d;
  this.i = 2153938944;
  this.n = 2;
}
f = hf.prototype;
f.t = function() {
  return this[ba] || (this[ba] = ++ca);
};
f.yb = function(a, b, c) {
  a = E(this.sa);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.o(null, g), k = P.b(h, 0, null), h = P.b(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      g += 1;
    } else {
      if (a = E(a)) {
        S(a) ? (d = A(a), a = B(a), k = d, e = O(d), d = k) : (d = F(a), k = P.b(d, 0, null), h = P.b(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = I(a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
f.xb = function(a, b, c) {
  return this.sa = Wb.b(this.sa, b, c);
};
f.q = function(a, b, c) {
  z(b, "#\x3cAtom: ");
  ff(this.state, b, c);
  return z(b, "\x3e");
};
f.A = function() {
  return this.h;
};
f.Gb = function() {
  return this.state;
};
f.s = function(a, b) {
  return this === b;
};
var kf = function() {
  function a(a) {
    return new hf(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = jc(c) ? R.a(Ke, c) : c, e = Q.a(d, jf), d = Q.a(d, oa);
      return new hf(a, d, e, null);
    }
    a.j = 1;
    a.g = function(a) {
      var c = F(a);
      a = G(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 1;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b;
}();
function lf(a, b) {
  var c = a.hc;
  if (null != c && !q(c.c ? c.c(b) : c.call(null, b))) {
    throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(gf.e(J([Ec(new Fb(null, "validate", "validate", 1233162959, null), new Fb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.sa && rb(a, c, b);
  return b;
}
var mf = function() {
  function a(a, b, c, d, e) {
    return lf(a, b.l ? b.l(a.state, c, d, e) : b.call(null, a.state, c, d, e));
  }
  function b(a, b, c, d) {
    return lf(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d));
  }
  function c(a, b, c) {
    return lf(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c));
  }
  function d(a, b) {
    return lf(a, b.c ? b.c(a.state) : b.call(null, a.state));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, M) {
      var K = null;
      5 < arguments.length && (K = J(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, K);
    }
    function b(a, c, d, e, g, h) {
      return lf(a, R.e(c, a.state, d, e, g, J([h], 0)));
    }
    a.j = 5;
    a.g = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var g = F(a);
      a = I(a);
      var h = F(a);
      a = G(a);
      return b(c, d, e, g, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, p, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, p);
      default:
        return g.e(e, k, l, n, p, J(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = 5;
  e.g = g.g;
  e.a = d;
  e.b = c;
  e.l = b;
  e.w = a;
  e.e = g.e;
  return e;
}();
function nf() {
  var a = of();
  return y(a);
}
function pf(a, b, c) {
  sb(a, b, c);
}
var qf = null, rf = function() {
  function a(a) {
    null == qf && (qf = kf.c(0));
    return Hb.c([v(a), v(mf.a(qf, Jb))].join(""));
  }
  function b() {
    return c.c("G__");
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.c = a;
  return c;
}(), sf = {};
function tf(a) {
  if (a ? a.Vb : a) {
    return a.Vb(a);
  }
  var b;
  b = tf[m(null == a ? null : a)];
  if (!b && (b = tf._, !b)) {
    throw t("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function uf(a) {
  return(a ? q(q(null) ? null : a.Ub) || (a.Pb ? 0 : r(sf, a)) : r(sf, a)) ? tf(a) : "string" === typeof a || "number" === typeof a || a instanceof T || a instanceof Fb ? vf.c ? vf.c(a) : vf.call(null, a) : gf.e(J([a], 0));
}
var vf = function wf(b) {
  if (null == b) {
    return null;
  }
  if (b ? q(q(null) ? null : b.Ub) || (b.Pb ? 0 : r(sf, b)) : r(sf, b)) {
    return tf(b);
  }
  if (b instanceof T) {
    return Hc(b);
  }
  if (b instanceof Fb) {
    return "" + v(b);
  }
  if (ec(b)) {
    var c = {};
    b = E(b);
    for (var d = null, e = 0, g = 0;;) {
      if (g < e) {
        var h = d.o(null, g), k = P.b(h, 0, null), h = P.b(h, 1, null);
        c[uf(k)] = wf(h);
        g += 1;
      } else {
        if (b = E(b)) {
          S(b) ? (e = A(b), b = B(b), d = e, e = O(e)) : (e = F(b), d = P.b(e, 0, null), e = P.b(e, 1, null), c[uf(d)] = wf(e), b = I(b), d = null, e = 0), g = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.i & 8 || b.kc || (b.i ? 0 : r(Aa, b)) : r(Aa, b)) {
    c = [];
    b = E(ed.a(wf, b));
    d = null;
    for (g = e = 0;;) {
      if (g < e) {
        k = d.o(null, g), c.push(k), g += 1;
      } else {
        if (b = E(b)) {
          d = b, S(d) ? (b = A(d), g = B(d), d = b, e = O(b), b = g) : (b = F(d), c.push(b), b = I(d), d = null, e = 0), g = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return s ? b : null;
}, xf = null;
function of() {
  null == xf && (xf = kf.c(new ka(null, 3, [yf, ae, zf, ae, Af, ae], null)));
  return xf;
}
var Bf = function() {
  function a(a, b, g) {
    var h = C.a(b, g);
    if (!h && !(h = lc(Af.c(a).call(null, b), g)) && (h = fc(g)) && (h = fc(b))) {
      if (h = O(g) === O(b)) {
        for (var h = !0, k = 0;;) {
          if (h && k !== O(g)) {
            h = c.b(a, b.c ? b.c(k) : b.call(null, k), g.c ? g.c(k) : g.call(null, k)), k += 1;
          } else {
            return h;
          }
        }
      } else {
        return h;
      }
    } else {
      return h;
    }
  }
  function b(a, b) {
    return c.b(nf(), a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Cf = function() {
  function a(a, b) {
    var c = Q.a(yf.c(a), b);
    return E(c) ? c : null;
  }
  function b(a) {
    return c.a(nf(), a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function Df(a, b, c, d) {
  mf.a(a, function() {
    return y(b);
  });
  mf.a(c, function() {
    return y(d);
  });
}
var Ff = function Ef(b, c, d) {
  var e = y(d).call(null, b), e = q(q(e) ? e.c ? e.c(c) : e.call(null, c) : e) ? !0 : null;
  if (q(e)) {
    return e;
  }
  e = function() {
    for (var e = Cf.c(c);;) {
      if (0 < O(e)) {
        Ef(b, F(e), d), e = G(e);
      } else {
        return null;
      }
    }
  }();
  if (q(e)) {
    return e;
  }
  e = function() {
    for (var e = Cf.c(b);;) {
      if (0 < O(e)) {
        Ef(F(e), c, d), e = G(e);
      } else {
        return null;
      }
    }
  }();
  return q(e) ? e : !1;
};
function Gf(a, b, c) {
  c = Ff(a, b, c);
  return q(c) ? c : Bf.a(a, b);
}
var If = function Hf(b, c, d, e, g, h, k) {
  var l = nc.b(function(e, h) {
    var k = P.b(h, 0, null);
    P.b(h, 1, null);
    if (Bf.b(y(d), c, k)) {
      var l;
      l = (l = null == e) ? l : Gf(k, F(e), g);
      l = q(l) ? h : e;
      if (!q(Gf(F(l), k, g))) {
        throw Error([v("Multiple methods in multimethod '"), v(b), v("' match dispatch value: "), v(c), v(" -\x3e "), v(k), v(" and "), v(F(l)), v(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, y(e));
  if (q(l)) {
    if (C.a(y(k), y(d))) {
      return mf.l(h, Wb, c, F(I(l))), F(I(l));
    }
    Df(h, e, k, d);
    return Hf(b, c, d, e, g, h, k);
  }
  return null;
};
function Jf(a, b) {
  if (a ? a.Jb : a) {
    return a.Jb(0, b);
  }
  var c;
  c = Jf[m(null == a ? null : a)];
  if (!c && (c = Jf._, !c)) {
    throw t("IMultiFn.-get-method", a);
  }
  return c.call(null, a, b);
}
function Kf(a, b) {
  if (a ? a.Ib : a) {
    return a.Ib(0, b);
  }
  var c;
  c = Kf[m(null == a ? null : a)];
  if (!c && (c = Kf._, !c)) {
    throw t("IMultiFn.-dispatch", a);
  }
  return c.call(null, a, b);
}
function Lf(a, b, c, d, e, g, h, k) {
  this.name = a;
  this.cc = b;
  this.bc = c;
  this.Za = d;
  this.Qa = e;
  this.fc = g;
  this.$a = h;
  this.Va = k;
  this.i = 4194304;
  this.n = 256;
}
f = Lf.prototype;
f.t = function() {
  return this[ba] || (this[ba] = ++ca);
};
function Mf(a, b) {
  var c = Nf;
  mf.l(c.Qa, Wb, a, b);
  Df(c.$a, c.Qa, c.Va, c.Za);
}
f.Jb = function(a, b) {
  C.a(y(this.Va), y(this.Za)) || Df(this.$a, this.Qa, this.Va, this.Za);
  var c = y(this.$a).call(null, b);
  if (q(c)) {
    return c;
  }
  c = If(this.name, b, this.Za, this.Qa, this.fc, this.$a, this.Va);
  return q(c) ? c : y(this.Qa).call(null, this.bc);
};
f.Ib = function(a, b) {
  var c = this.name, d = R.a(this.cc, b), e = Jf(this, d);
  if (!q(e)) {
    throw Error([v("No method in multimethod '"), v(c), v("' for dispatch value: "), v(d)].join(""));
  }
  return R.a(e, b);
};
f.call = function() {
  function a(a, b) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return Kf(this, e);
  }
  function b(a, b) {
    return Kf(this, b);
  }
  a.j = 1;
  a.g = function(a) {
    F(a);
    a = G(a);
    return b(0, a);
  };
  a.e = b;
  return a;
}();
f.apply = function(a, b) {
  return Kf(this, b);
};
function Of(a) {
  this.Ab = a;
  this.n = 0;
  this.i = 2153775104;
}
Of.prototype.t = function() {
  return ea(gf.e(J([this], 0)));
};
Of.prototype.q = function(a, b) {
  return z(b, [v('#uuid "'), v(this.Ab), v('"')].join(""));
};
Of.prototype.s = function(a, b) {
  return b instanceof Of && this.Ab === b.Ab;
};
var Pf = new T(null, "seconds", "seconds"), pa = new T(null, "dup", "dup"), Qf = new T(null, "href", "href"), zf = new T(null, "descendants", "descendants"), Eb = new T(null, "default", "default"), Rf = new T(null, "text", "text"), Sf = new T(null, "state", "state"), Tf = new T(null, "focus-select", "focus-select"), Uf = new T(null, "scroll-to", "scroll-to"), Vf = new T("tailrecursion.javelin", "none", "tailrecursion.javelin/none"), Wf = new T(null, "class", "class"), Xf = new T(null, "minutes", 
"minutes"), Yf = new T(null, "on", "on"), Zf = new T(null, "fade-toggle", "fade-toggle"), $f = new T(null, "do-class", "do-class"), ag = new T(null, "legend", "legend"), yf = new T(null, "parents", "parents"), la = new T(null, "flush-on-newline", "flush-on-newline"), bg = new T(null, "hours", "hours"), cg = new T(null, "hierarchy", "hierarchy"), dg = new T(null, "focus", "focus"), Af = new T(null, "ancestors", "ancestors"), eg = new T(null, "toggle", "toggle"), fg = new T(null, "css", "css"), gg = 
new T(null, "off", "off"), qa = new T(null, "print-length", "print-length"), s = new T(null, "else", "else"), ma = new T(null, "readably", "readably"), hg = new T(null, "unit", "unit"), jf = new T(null, "validator", "validator"), oa = new T(null, "meta", "meta"), ig = new T(null, "time", "time"), jg = new T("tailrecursion.javelin", "cell", "tailrecursion.javelin/cell"), kg = new T("tailrecursion.priority-map", "not-found", "tailrecursion.priority-map/not-found"), lg = new T(null, "scrollTop", "scrollTop"), 
mg = new T(null, "value", "value"), ng = new T(null, "select", "select"), og = new T(null, "attr", "attr"), pg = new T(null, "slide-toggle", "slide-toggle");
var qg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(R.a(v, b));
  }
  a.j = 1;
  a.g = function(a) {
    F(a);
    a = G(a);
    return b(0, a);
  };
  a.e = b;
  return a;
}();
Ze("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
Ze("([-+]?[0-9]+)/([0-9]+)");
Ze("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
Ze("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
Ze("[0-9A-Fa-f]{2}");
Ze("[0-9A-Fa-f]{4}");
function rg(a) {
  if (C.a(3, O(a))) {
    return a;
  }
  if (3 < O(a)) {
    return wc.b(a, 0, 3);
  }
  if (s) {
    for (a = new ga(a);;) {
      if (3 > a.Ba.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var sg = function() {
  var a = new V(null, 13, 5, W, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new V(null, 13, 5, W, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return Q.a(q(d) ? b : a, c);
  };
}(), Xe = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function tg(a) {
  a = parseInt(a);
  return ra(isNaN(a)) ? a : null;
}
function ug(a, b, c, d) {
  a <= b && b <= c || qg.e(null, J([[v(d), v(" Failed:  "), v(a), v("\x3c\x3d"), v(b), v("\x3c\x3d"), v(c)].join("")], 0));
  return b;
}
function vg(a) {
  var b = We(a);
  P.b(b, 0, null);
  var c = P.b(b, 1, null), d = P.b(b, 2, null), e = P.b(b, 3, null), g = P.b(b, 4, null), h = P.b(b, 5, null), k = P.b(b, 6, null), l = P.b(b, 7, null), n = P.b(b, 8, null), p = P.b(b, 9, null), u = P.b(b, 10, null);
  if (ra(b)) {
    return qg.e(null, J([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
  }
  a = tg(c);
  var b = function() {
    var a = tg(d);
    return q(a) ? a : 1;
  }(), c = function() {
    var a = tg(e);
    return q(a) ? a : 1;
  }(), x = function() {
    var a = tg(g);
    return q(a) ? a : 0;
  }(), M = function() {
    var a = tg(h);
    return q(a) ? a : 0;
  }(), K = function() {
    var a = tg(k);
    return q(a) ? a : 0;
  }(), da = function() {
    var a = tg(rg(l));
    return q(a) ? a : 0;
  }(), n = (C.a(n, "-") ? -1 : 1) * (60 * function() {
    var a = tg(p);
    return q(a) ? a : 0;
  }() + function() {
    var a = tg(u);
    return q(a) ? a : 0;
  }());
  return new V(null, 8, 5, W, [a, ug(1, b, 12, "timestamp month field must be in range 1..12"), ug(1, c, sg.a ? sg.a(b, 0 === sc(a, 4) && (0 !== sc(a, 100) || 0 === sc(a, 400))) : sg.call(null, b, 0 === sc(a, 4) && (0 !== sc(a, 100) || 0 === sc(a, 400))), "timestamp day field must be in range 1..last day in month"), ug(0, x, 23, "timestamp hour field must be in range 0..23"), ug(0, M, 59, "timestamp minute field must be in range 0..59"), ug(0, K, C.a(M, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), 
  ug(0, da, 999, "timestamp millisecond field must be in range 0..999"), n], null);
}
var wg = kf.c(new ka(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = vg(a), q(b)) {
      a = P.b(b, 0, null);
      var c = P.b(b, 1, null), d = P.b(b, 2, null), e = P.b(b, 3, null), g = P.b(b, 4, null), h = P.b(b, 5, null), k = P.b(b, 6, null);
      b = P.b(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, g, h, k) - 6E4 * b);
    } else {
      b = qg.e(null, J([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
    }
  } else {
    b = qg.e(null, J(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Of(a) : qg.e(null, J(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return fc(a) ? nd(Rd, a) : qg.e(null, J(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (fc(a)) {
    var b = [];
    a = E(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var g = c.o(null, e);
        b.push(g);
        e += 1;
      } else {
        if (a = E(a)) {
          c = a, S(c) ? (a = A(c), e = B(c), c = a, d = O(a), a = e) : (a = F(c), b.push(a), a = I(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (ec(a)) {
    b = {};
    a = E(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var h = c.o(null, e), g = P.b(h, 0, null), h = P.b(h, 1, null);
        b[Hc(g)] = h;
        e += 1;
      } else {
        if (a = E(a)) {
          S(a) ? (d = A(a), a = B(a), c = d, d = O(d)) : (d = F(a), c = P.b(d, 0, null), d = P.b(d, 1, null), b[Hc(c)] = d, a = I(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return s ? qg.e(null, J([[v("JS literal expects a vector or map containing "), v("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null));
kf.c(null);
function xg(a, b, c, d) {
  this.K = a;
  this.P = b;
  this.h = c;
  this.k = d;
  this.n = 0;
  this.i = 2565220111;
}
f = xg.prototype;
f.t = function() {
  var a = this.k;
  return null != a ? a : this.k = a = xc(this);
};
f.u = function(a, b) {
  return Q.a(this.P, b);
};
f.v = function(a, b, c) {
  return Q.b(this.P, b, c);
};
f.ka = function(a, b, c) {
  a = Q.b(this.P, b, null);
  if (q(a)) {
    if (C.a(a, c)) {
      return this;
    }
    var d = Q.a(this.K, a);
    return C.a(O(d), 1) ? new xg(Wb.b(Xb.a(this.K, a), c, Tb.a(Q.b(this.K, c, Pe), b)), Wb.b(this.P, b, c), this.h, null) : new xg(Wb.e(this.K, a, bc.a(Q.a(this.K, a), b), J([c, Tb.a(Q.b(this.K, c, Pe), b)], 0)), Wb.b(this.P, b, c), this.h, null);
  }
  return new xg(Wb.b(this.K, c, Tb.a(Q.b(this.K, c, Pe), b)), Wb.b(this.P, b, c), this.h, null);
};
f.Fa = function(a, b) {
  return lc(this.P, b);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.q = function(a, b, c) {
  return $e(b, function(a) {
    return $e(b, ff, "", " ", "", c, a);
  }, "#tailrecursion.priority-map {", ", ", "}", c, this);
};
f.C = function(a, b) {
  return fc(b) ? Ka(this, w.a(b, 0), w.a(b, 1)) : nc.b(Ba, this, b);
};
f.Ja = function() {
  var a = this;
  return E(function() {
    return function c(a) {
      return new U(null, function() {
        for (var e = a;;) {
          var g = E(e);
          if (g) {
            var h = g, k = F(h), l = P.b(k, 0, null), n = P.b(k, 1, null);
            if (g = E(function(a, c, d, e, g, h) {
              return function na(k) {
                return new U(null, function(a, c, d) {
                  return function() {
                    for (;;) {
                      var a = E(k);
                      if (a) {
                        if (S(a)) {
                          var c = A(a), e = O(c), g = Mc(e);
                          a: {
                            for (var h = 0;;) {
                              if (h < e) {
                                var l = w.a(c, h);
                                g.add(new V(null, 2, 5, W, [l, d], null));
                                h += 1;
                              } else {
                                c = !0;
                                break a;
                              }
                            }
                            c = void 0;
                          }
                          return c ? Pc(g.R(), na(B(a))) : Pc(g.R(), null);
                        }
                        g = F(a);
                        return L(new V(null, 2, 5, W, [g, d], null), na(G(a)));
                      }
                      return null;
                    }
                  };
                }(a, c, d, e, g, h), null, null);
              };
            }(e, k, l, n, h, g)(n))) {
              return Uc.a(g, c(G(e)));
            }
            e = G(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(jb(a.K));
  }());
};
f.vb = function(a, b) {
  return(q(b) ? E : Cc).call(null, this);
};
f.wb = function(a, b, c) {
  var d = q(c) ? Ue.b(this.K, rc, b) : Ve.b(this.K, pc, b);
  return E(function() {
    return function g(a) {
      return new U(null, function() {
        for (var b = a;;) {
          var c = E(b);
          if (c) {
            var d = c, p = F(d), u = P.b(p, 0, null), x = P.b(p, 1, null);
            if (c = E(function(a, b, c, d, g, h) {
              return function pb(k) {
                return new U(null, function(a, b, c) {
                  return function() {
                    for (;;) {
                      var a = E(k);
                      if (a) {
                        if (S(a)) {
                          var b = A(a), d = O(b), g = Mc(d);
                          a: {
                            for (var h = 0;;) {
                              if (h < d) {
                                var l = w.a(b, h);
                                g.add(new V(null, 2, 5, W, [l, c], null));
                                h += 1;
                              } else {
                                b = !0;
                                break a;
                              }
                            }
                            b = void 0;
                          }
                          return b ? Pc(g.R(), pb(B(a))) : Pc(g.R(), null);
                        }
                        g = F(a);
                        return L(new V(null, 2, 5, W, [g, c], null), pb(G(a)));
                      }
                      return null;
                    }
                  };
                }(a, b, c, d, g, h), null, null);
              };
            }(b, p, u, x, d, c)(x))) {
              return Uc.a(c, g(G(b)));
            }
            b = G(b);
          } else {
            return null;
          }
        }
      }, null, null);
    }(d);
  }());
};
f.ub = function(a, b) {
  return Qa(b);
};
f.tb = function() {
  return Db;
};
f.D = function() {
  var a = this;
  return E(function() {
    return function c(a) {
      return new U(null, function() {
        for (var e = a;;) {
          var g = E(e);
          if (g) {
            var h = g, k = F(h), l = P.b(k, 0, null), n = P.b(k, 1, null);
            if (g = E(function(a, c, d, e, g, h) {
              return function na(k) {
                return new U(null, function(a, c, d) {
                  return function() {
                    for (;;) {
                      var a = E(k);
                      if (a) {
                        if (S(a)) {
                          var c = A(a), e = O(c), g = Mc(e);
                          a: {
                            for (var h = 0;;) {
                              if (h < e) {
                                var l = w.a(c, h);
                                g.add(new V(null, 2, 5, W, [l, d], null));
                                h += 1;
                              } else {
                                c = !0;
                                break a;
                              }
                            }
                            c = void 0;
                          }
                          return c ? Pc(g.R(), na(B(a))) : Pc(g.R(), null);
                        }
                        g = F(a);
                        return L(new V(null, 2, 5, W, [g, d], null), na(G(a)));
                      }
                      return null;
                    }
                  };
                }(a, c, d, e, g, h), null, null);
              };
            }(e, k, l, n, h, g)(n))) {
              return Uc.a(g, c(G(e)));
            }
            e = G(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(a.K);
  }());
};
f.I = function() {
  return O(this.P);
};
f.ma = function() {
  if (0 === O(this.P)) {
    return null;
  }
  var a = F(this.K);
  return new V(null, 2, 5, W, [F(Qa(a)), Pa(a)], null);
};
f.na = function() {
  if (0 === O(this.P)) {
    throw Error("Can't pop empty priority map");
  }
  var a = F(this.K), b = Qa(a), c = F(b), a = Pa(a);
  return C.a(O(b), 1) ? new xg(Xb.a(this.K, a), Xb.a(this.P, c), this.h, null) : new xg(Wb.b(this.K, a, bc.a(b, c)), Xb.a(this.P, c), this.h, null);
};
f.s = function(a, b) {
  return db(this.P, b);
};
f.F = function(a, b) {
  return new xg(this.K, this.P, b, this.k);
};
f.A = function() {
  return this.h;
};
f.G = function() {
  return Sb(yg, this.h);
};
f.Ha = function(a, b) {
  var c = this.P.a ? this.P.a(b, kg) : this.P.call(null, b, kg);
  if (C.a(c, kg)) {
    return this;
  }
  var d = this.K.c ? this.K.c(c) : this.K.call(null, c);
  return C.a(O(d), 1) ? new xg(Xb.a(this.K, c), Xb.a(this.P, b), this.h, null) : new xg(Wb.b(this.K, c, bc.a(d, b)), Xb.a(this.P, b), this.h, null);
};
var yg = new xg(Le(), ae, ae, null), zg = "" + v("tailrecursion.priority-map");
Q.a(y(wg), zg);
mf.l(wg, Wb, zg, function(a) {
  return ec(a) ? nd(yg, a) : qg.e(null, J(["Priority map literal expects a map for its elements."], 0));
});
var Ag = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = E(a);
    for (var b = yg;;) {
      if (a) {
        var e = I(I(a)), b = Wb.b(b, F(a), F(I(a)));
        a = e;
      } else {
        return b;
      }
    }
  }
  a.j = 0;
  a.g = function(a) {
    a = E(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Bg(a, b) {
  return function d(b) {
    var g = ac(b);
    return q(g) ? new U(null, function() {
      return L(g, d(nd(null == b ? null : Ua(b), q($c.c ? $c.c(g) : $c.call(null, g)) ? a.c ? a.c(g) : a.call(null, g) : null)));
    }, null, null) : null;
  }(Tb.a(Rd, b));
}
var Cg = kf.c(0);
function Dg() {
  return mf.a(Cg, Jb);
}
function Eg(a) {
  return q(Fg.c ? Fg.c(a) : Fg.call(null, a)) ? y(a) : a;
}
function Gg(a) {
  for (var b = Ag.e(J([a, a.ha], 0));;) {
    if (E(b)) {
      a = yc(ac(b));
      var c = a.Rb.call(null), d = Yc.a(c, a.prev), e = function() {
        return function(a, b) {
          return Wb.b(a, b, b.ha);
        };
      }(b, a, c, d), b = null == b ? null : Ua(b), g = a.fa;
      d && (a.prev = c);
      b = d ? nc.b(e, b, g) : b;
    } else {
      return null;
    }
  }
}
function Hg(a) {
  var b = a.Ta;
  a.Ta = od;
  for (var b = E(md(Fg, b)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var g = c.o(null, e);
      g.fa = bc.a(g.fa, a);
      e += 1;
    } else {
      if (b = E(b)) {
        c = b, S(c) ? (b = A(c), d = B(c), c = b, g = O(b), b = d, d = g) : (g = F(c), g.fa = bc.a(g.fa, a), b = I(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
}
var Ig = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P.b(b, 0, null), g = P.b(b, 1, null);
    Hg(a);
    a.Ta = q(e) ? Tb.a(Id(g), e) : Id(g);
    for (var g = E(md(Fg, a.Ta)), h = null, k = 0, l = 0;;) {
      if (l < k) {
        var n = h.o(null, l);
        n.fa = Tb.a(n.fa, a);
        if (n.ha > a.ha) {
          for (var n = E(Bg(function() {
            return function(a) {
              return a.fa;
            };
          }(g, h, k, l, n), n)), p = null, u = 0, x = 0;;) {
            if (x < u) {
              p.o(null, x).ha = Dg(), x += 1;
            } else {
              if (n = E(n)) {
                p = n, S(p) ? (n = A(p), x = B(p), p = n, u = O(n), n = x) : (F(p).ha = Dg(), n = I(p), p = null, u = 0), x = 0;
              } else {
                break;
              }
            }
          }
        }
        l += 1;
      } else {
        if (p = E(g)) {
          n = p;
          if (S(n)) {
            g = A(n), l = B(n), h = g, k = O(g), g = l;
          } else {
            u = F(n);
            u.fa = Tb.a(u.fa, a);
            if (u.ha > a.ha) {
              for (g = E(Bg(function() {
                return function(a) {
                  return a.fa;
                };
              }(g, h, k, l, u, n, p), u)), h = null, l = k = 0;;) {
                if (l < k) {
                  h.o(null, l).ha = Dg(), l += 1;
                } else {
                  if (g = E(g)) {
                    h = g, S(h) ? (g = A(h), l = B(h), h = g, k = O(g), g = l) : (F(h).ha = Dg(), g = I(h), h = null, k = 0), l = 0;
                  } else {
                    break;
                  }
                }
              }
            }
            g = I(n);
            h = null;
            k = 0;
          }
          l = 0;
        } else {
          break;
        }
      }
    }
    g = function(b) {
      return function() {
        for (var d = a.state, e = b(a.Ta), g = E(Xb.a(a.sa, jg)), h = null, k = 0, l = 0;;) {
          if (l < k) {
            var n = h.o(null, l), p = P.b(n, 0, null), n = P.b(n, 1, null);
            n.l ? n.l(p, a, d, e) : n.call(null, p, a, d, e);
            l += 1;
          } else {
            if (g = E(g)) {
              S(g) ? (k = A(g), g = B(g), h = k, k = O(k)) : (k = F(g), h = P.b(k, 0, null), k = P.b(k, 1, null), k.l ? k.l(h, a, d, e) : k.call(null, h, a, d, e), g = I(g), h = null, k = 0), l = 0;
            } else {
              break;
            }
          }
        }
        return a.state = e;
      };
    }(function(a) {
      return R.a(Eg(ac(a)), ed.a(Eg, null == a ? null : Ua(a)));
    });
    sb(a, jg, q(e) ? function() {
      throw Error("formula cell can't be updated via swap! or reset!");
    } : function(a, b) {
      return Gg(b);
    });
    a.dc = q(e) ? !1 : !0;
    a.Rb = q(e) ? g : function() {
      return y(a);
    };
    Gg(a);
    return a;
  }
  a.j = 1;
  a.g = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}();
function Jg(a, b, c, d, e, g, h, k, l) {
  this.h = a;
  this.state = b;
  this.ha = c;
  this.prev = d;
  this.Ta = e;
  this.fa = g;
  this.Rb = h;
  this.sa = k;
  this.dc = l;
  this.n = 2;
  this.i = 2147647488;
}
f = Jg.prototype;
f.yb = function(a, b, c) {
  a = E(this.sa);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.o(null, g), k = P.b(h, 0, null), h = P.b(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      g += 1;
    } else {
      if (a = E(a)) {
        S(a) ? (d = A(a), a = B(a), k = d, e = O(d), d = k) : (d = F(a), k = P.b(d, 0, null), h = P.b(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = I(a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
f.xb = function(a, b, c) {
  return this.sa = Wb.b(this.sa, b, c);
};
f.Gb = function() {
  return this.state;
};
f.A = function() {
  return this.h;
};
f.q = function(a, b) {
  return af.e(b, J(["#\x3cCell: ", gf.e(J([this.state], 0)), "\x3e"], 0));
};
function Kg(a) {
  return function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return Ig.e(Lg.c ? Lg.c(Vf) : Lg.call(null, Vf), J([a, b], 0));
    }
    b.j = 0;
    b.g = function(a) {
      a = E(a);
      return c(a);
    };
    b.e = c;
    return b;
  }();
}
function Lg(a) {
  return Ig(new Jg(ae, a, Dg(), a, od, Pe, null, ae, null));
}
function Fg(a) {
  return C.a(sa(a), Jg) ? a : null;
}
;var Mg, Ng, Og, Pg;
function Qg() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
Pg = Og = Ng = Mg = !1;
var Rg;
if (Rg = Qg()) {
  var Sg = aa.navigator;
  Mg = 0 == Rg.indexOf("Opera");
  Ng = !Mg && -1 != Rg.indexOf("MSIE");
  Og = !Mg && -1 != Rg.indexOf("WebKit");
  Pg = !Mg && !Og && "Gecko" == Sg.product;
}
var Tg = Ng, Ug = Pg, Vg = Og;
function Wg() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Xg;
a: {
  var Yg = "", Zg;
  if (Mg && aa.opera) {
    var $g = aa.opera.version, Yg = "function" == typeof $g ? $g() : $g
  } else {
    if (Ug ? Zg = /rv\:([^\);]+)(\)|;)/ : Tg ? Zg = /MSIE\s+([^\);]+)(\)|;)/ : Vg && (Zg = /WebKit\/(\S+)/), Zg) {
      var ah = Zg.exec(Qg()), Yg = ah ? ah[1] : ""
    }
  }
  if (Tg) {
    var bh = Wg();
    if (bh > parseFloat(Yg)) {
      Xg = String(bh);
      break a;
    }
  }
  Xg = Yg;
}
var ch = {};
function dh(a) {
  if (!ch[a]) {
    for (var b = 0, c = String(Xg).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], u = n.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == u[0].length) {
          break;
        }
        b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == u[2].length) ? -1 : (0 == p[2].length) > (0 == u[2].length) ? 1 : 0) || (p[2] < u[2] ? -1 : p[2] > u[2] ? 1 : 0);
      } while (0 == b);
    }
    ch[a] = 0 <= b;
  }
}
var eh = aa.document, fh = eh && Tg ? Wg() || ("CSS1Compat" == eh.compatMode ? parseInt(Xg, 10) : 5) : void 0;
if (Ug || Tg) {
  var gh;
  if (gh = Tg) {
    gh = Tg && 9 <= fh;
  }
  gh || Ug && dh("1.9.1");
}
Tg && dh("9");
function hh(a, b) {
  if (0 >= b || b >= 2 + O(a)) {
    return Tb.a(Id(L("", ed.a(v, E(a)))), "");
  }
  if (q(C.a ? C.a(1, b) : C.call(null, 1, b))) {
    return new V(null, 1, 5, W, [a], null);
  }
  if (q(C.a ? C.a(2, b) : C.call(null, 2, b))) {
    return new V(null, 2, 5, W, ["", a], null);
  }
  var c = b - 2;
  return Tb.a(Id(L("", Kd.b(Id(ed.a(v, E(a))), 0, c))), wc.a(a, c));
}
var ih = function() {
  function a(a, b, c) {
    if (C.a("" + v(b), "/(?:)/")) {
      b = hh(a, c);
    } else {
      if (1 > c) {
        b = Id(("" + v(a)).split(b));
      } else {
        a: {
          for (var h = c, k = od;;) {
            if (C.a(h, 1)) {
              b = Tb.a(k, a);
              break a;
            }
            var l = Ye(b, a);
            if (q(l)) {
              var n = l, l = a.indexOf(n), n = a.substring(l + O(n)), h = h - 1, k = Tb.a(k, a.substring(0, l));
              a = n;
            } else {
              b = Tb.a(k, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (C.a(0, c)) {
      a: {
        for (c = b;;) {
          if (C.a("", ac(c))) {
            c = null == c ? null : Ua(c);
          } else {
            break a;
          }
        }
        c = void 0;
      }
    } else {
      c = b;
    }
    return c;
  }
  function b(a, b) {
    return c.b(a, b, 0);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
var jh = ra(window.Node), kh = ra(jh) ? function(a) {
  return a instanceof Node;
} : function(a) {
  try {
    return a.nodeType;
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}, lh = ra(jh) ? fc : function(a) {
  try {
    return fc(a);
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}, mh = ra(jh) ? jc : function(a) {
  try {
    return jc(a);
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}, nh = function() {
  function a(a, b) {
    return window.setTimeout(a, b);
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), ph = function oh(b) {
  return kd.a(function(b) {
    var d;
    d = mh.c ? mh.c(b) : mh.call(null, b);
    d = q(d) ? d : lh.c ? lh.c(b) : lh.call(null, b);
    return q(d) ? oh(b) : new V(null, 1, 5, W, [b], null);
  }, b);
};
function qh(a, b) {
  return nh.c(function d() {
    return q(document.documentElement.contains(a)) ? b.p ? b.p() : b.call(null) : nh.a(d, 20);
  });
}
function rh(a) {
  var b = P.b(a, 0, null), c = vc(a), d = ad.a(Gc, F), e = function(a) {
    return function(b) {
      return ed.a(Id, Se(a, qd.a(2, b)));
    };
  }(d), d = function(a) {
    return function(b) {
      return kd.a($c, id(a, qd.l(2, 2, od, b)));
    };
  }(d, e);
  return ec(b) ? new V(null, 2, 5, W, [b, c], null) : b instanceof T ? new V(null, 2, 5, W, [nd(ae, e(a)), d(a)], null) : s ? new V(null, 2, 5, W, [ae, a], null) : null;
}
function sh(a, b) {
  function c(a) {
    return a.substr(0, 3);
  }
  for (var d = function() {
    return function(a) {
      return Ic.c(a.substr(3));
    };
  }(c), e = kf.c(ae), g = kf.c(ae), h = E(b), k = null, l = 0, n = 0;;) {
    if (n < l) {
      var p = k.o(null, n), u = P.b(p, 0, null), p = P.b(p, 1, null), x = Hc(u), u = jQuery(a);
      if (C.a(x, "class")) {
        for (var p = E(ih.a(p, / /)), x = null, M = 0, K = 0;;) {
          if (K < M) {
            var da = x.o(null, K);
            u.addClass(da);
            K += 1;
          } else {
            if (p = E(p)) {
              x = p, S(x) ? (p = A(x), K = B(x), x = p, M = O(p), p = K) : (p = F(x), u.addClass(p), p = I(x), x = null, M = 0), K = 0;
            } else {
              break;
            }
          }
        }
      } else {
        C.a(x, "css") ? u.css(vf(p)) : C.a("do-", c(x)) ? mf.l(e, Wb, d(x), p) : C.a("on-", c(x)) ? mf.l(g, Wb, d(x), p) : s && (C.a(!1, p) ? u.removeAttr(x) : C.a(!0, p) ? u.attr(x, x) : s && u.attr(x, "" + v(p)));
      }
      n += 1;
    } else {
      if (h = E(h)) {
        if (S(h)) {
          l = A(h), h = B(h), k = l, l = O(l);
        } else {
          l = F(h);
          k = P.b(l, 0, null);
          l = P.b(l, 1, null);
          n = Hc(k);
          k = jQuery(a);
          if (C.a(n, "class")) {
            for (l = E(ih.a(l, / /)), n = null, p = u = 0;;) {
              if (p < u) {
                x = n.o(null, p), k.addClass(x), p += 1;
              } else {
                if (l = E(l)) {
                  n = l, S(n) ? (l = A(n), p = B(n), n = l, u = O(l), l = p) : (l = F(n), k.addClass(l), l = I(n), n = null, u = 0), p = 0;
                } else {
                  break;
                }
              }
            }
          } else {
            C.a(n, "css") ? k.css(vf(l)) : C.a("do-", c(n)) ? mf.l(e, Wb, d(n), l) : C.a("on-", c(n)) ? mf.l(g, Wb, d(n), l) : s && (C.a(!1, l) ? k.removeAttr(n) : C.a(!0, l) ? k.attr(n, n) : s && k.attr(n, "" + v(l)));
          }
          h = I(h);
          k = null;
          l = 0;
        }
        n = 0;
      } else {
        break;
      }
    }
  }
  E(y(g)) && nh.c(function() {
    for (var b = E(y(g)), c = null, d = 0, e = 0;;) {
      if (e < d) {
        var h = c.o(null, e), k = P.b(h, 0, null), h = P.b(h, 1, null);
        th.b ? th.b(a, k, h) : th.call(null, a, k, h);
        e += 1;
      } else {
        if (b = E(b)) {
          S(b) ? (c = A(b), b = B(b), k = c, d = O(c), c = k) : (c = F(b), k = P.b(c, 0, null), h = P.b(c, 1, null), th.b ? th.b(a, k, h) : th.call(null, a, k, h), b = I(b), c = null, d = 0), e = 0;
        } else {
          return null;
        }
      }
    }
  });
  E(y(e)) && nh.c(function() {
    for (var b = E(y(e)), c = null, d = 0, g = 0;;) {
      if (g < d) {
        var h = c.o(null, g), k = P.b(h, 0, null), l = P.b(h, 1, null);
        Nf.b ? Nf.b(a, k, y(l)) : Nf.call(null, a, k, y(l));
        pf(l, rf.p(), function(b, c, d, e, g, h) {
          return function(b, c, d, e) {
            return Nf.b ? Nf.b(a, h, e) : Nf.call(null, a, h, e);
          };
        }(b, c, d, g, h, k, l));
        g += 1;
      } else {
        var n = E(b);
        if (n) {
          h = n;
          if (S(h)) {
            b = A(h), g = B(h), c = b, d = O(b), b = g;
          } else {
            var p = F(h), k = P.b(p, 0, null), l = P.b(p, 1, null);
            Nf.b ? Nf.b(a, k, y(l)) : Nf.call(null, a, k, y(l));
            pf(l, rf.p(), function(b, c, d, e, g, h) {
              return function(b, c, d, e) {
                return Nf.b ? Nf.b(a, h, e) : Nf.call(null, a, h, e);
              };
            }(b, c, d, g, p, k, l, h, n));
            b = I(h);
            c = null;
            d = 0;
          }
          g = 0;
        } else {
          return null;
        }
      }
    }
  });
}
var uh = ra(jh) ? function(a, b) {
  return a.appendChild(b);
} : function(a, b) {
  try {
    return a.appendChild(b);
  } catch (c) {
    if (c instanceof Error) {
      return null;
    }
    if (s) {
      throw c;
    }
    return null;
  }
};
function vh(a, b) {
  for (var c = E(dd(function(a) {
    return "string" === typeof a ? wh.c ? wh.c(a) : wh.call(null, a) : q(kh.c ? kh.c(a) : kh.call(null, a)) ? a : null;
  }, ph(b))), d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.o(null, g);
      uh.a ? uh.a(a, h) : uh.call(null, a, h);
      g += 1;
    } else {
      if (c = E(c)) {
        d = c, S(d) ? (c = A(d), g = B(d), d = c, e = O(c), c = g) : (c = F(d), uh.a ? uh.a(a, c) : uh.call(null, a, c), c = I(d), d = null, e = 0), g = 0;
      } else {
        break;
      }
    }
  }
}
f = Element.prototype;
f.call = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    var e = rh(b), g = P.b(e, 0, null), e = P.b(e, 1, null);
    q(this.zb) ? this.zb(g, e) : (sh(this, g), vh(this, e));
    return this;
  }
  a.j = 1;
  a.g = function(a) {
    F(a);
    a = G(a);
    return b(0, a);
  };
  a.e = b;
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
f.a = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = rh(a);
    a = P.b(b, 0, null);
    b = P.b(b, 1, null);
    q(this.zb) ? this.zb(a, b) : (sh(this, a), vh(this, b));
    return this;
  }
  a.j = 0;
  a.g = function(a) {
    a = E(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
f.J = !0;
f.q = function(a, b) {
  return af.e(b, J(["#\x3cElement: ", this.tagName, "\x3e"], 0));
};
function xh(a) {
  return function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return R.a(document.createElement(a), b);
    }
    b.j = 0;
    b.g = function(a) {
      a = E(a);
      return c(a);
    };
    b.e = c;
    return b;
  }();
}
var yh = xh("a"), Z = xh("div");
function wh(a) {
  return document.createTextNode(a);
}
var zh = kf.c(!1), Ah = kf.c(od);
function Bh(a) {
  return nh.c(function() {
    var b = jQuery("body");
    b.empty();
    for (var c = E(a), d = null, e = 0, g = 0;;) {
      if (g < e) {
        var h = d.o(null, g);
        b.append(h);
        g += 1;
      } else {
        if (c = E(c)) {
          d = c, S(d) ? (c = A(d), g = B(d), d = c, e = O(c), c = g) : (c = F(d), b.append(c), c = I(d), d = null, e = 0), g = 0;
        } else {
          break;
        }
      }
    }
    b.on("submit", function(a) {
      return a.preventDefault();
    });
    lf(zh, !0);
    b = E(y(Ah));
    c = null;
    for (g = e = 0;;) {
      if (g < e) {
        d = c.o(null, g), d.p ? d.p() : d.call(null), g += 1;
      } else {
        if (b = E(b)) {
          c = b, S(c) ? (b = A(c), e = B(c), c = b, d = O(b), b = e, e = d) : (d = F(c), d.p ? d.p() : d.call(null), b = I(c), c = null, e = 0), g = 0;
        } else {
          return null;
        }
      }
    }
  });
}
var Ch = function() {
  function a(a, b) {
    return a.val("" + v(b)).trigger("change");
  }
  function b(a) {
    return a.val();
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), Dh = function() {
  function a(a, b) {
    return a.prop("checked", kc(b)).trigger("change");
  }
  function b(a) {
    return a.is(":checked");
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), Nf = function() {
  var a = kf.c(ae), b = kf.c(ae), c = kf.c(ae), d = kf.c(ae), e = Q.b(ae, cg, of());
  return new Lf("do!", function() {
    function a(b, c, d) {
      2 < arguments.length && J(Array.prototype.slice.call(arguments, 2), 0);
      return c;
    }
    a.j = 2;
    a.g = function(a) {
      F(a);
      a = I(a);
      var b = F(a);
      G(a);
      return b;
    };
    a.e = function(a, b) {
      return b;
    };
    return a;
  }(), Eb, e, a, b, c, d);
}();
Mf(mg, function() {
  function a(a, d, e) {
    var g = null;
    2 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, 0, g);
  }
  function b(a, b, e) {
    a = jQuery(a);
    return R.b(C.a("checkbox", a.attr("type")) ? Dh : Ch, a, e);
  }
  a.j = 2;
  a.g = function(a) {
    var d = F(a);
    a = I(a);
    F(a);
    a = G(a);
    return b(d, 0, a);
  };
  a.e = b;
  return a;
}());
Mf(og, function(a, b, c) {
  return a.c ? a.c(c) : a.call(null, c);
});
Mf(Wf, function(a, b, c) {
  a = jQuery(a);
  c = E(c);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.o(null, g);
      b = P.b(h, 0, null);
      h = P.b(h, 1, null);
      a.toggleClass(Hc(b), kc(h));
      g += 1;
    } else {
      if (c = E(c)) {
        S(c) ? (d = A(c), c = B(c), b = d, e = O(d), d = b) : (d = F(c), b = P.b(d, 0, null), h = P.b(d, 1, null), a.toggleClass(Hc(b), kc(h)), c = I(c), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
});
Mf(fg, function(a, b, c) {
  a = jQuery(a);
  c = E(c);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.o(null, g);
      b = P.b(h, 0, null);
      h = P.b(h, 1, null);
      a.css(Hc(b), "" + v(h));
      g += 1;
    } else {
      if (c = E(c)) {
        S(c) ? (d = A(c), c = B(c), b = d, e = O(d), d = b) : (d = F(c), b = P.b(d, 0, null), h = P.b(d, 1, null), a.css(Hc(b), "" + v(h)), c = I(c), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
});
Mf(eg, function(a, b, c) {
  return jQuery(a).toggle(kc(c));
});
Mf(pg, function(a, b, c) {
  return q(c) ? jQuery(a).hide().slideDown("fast") : jQuery(a).slideUp("fast");
});
Mf(Zf, function(a, b, c) {
  return q(c) ? jQuery(a).hide().fadeIn("fast") : jQuery(a).fadeOut("fast");
});
Mf(dg, function(a, b, c) {
  return q(c) ? nh.c(function() {
    return jQuery(a).focus();
  }) : nh.c(function() {
    return jQuery(a).focusout();
  });
});
Mf(ng, function(a) {
  return jQuery(a).select();
});
Mf(Tf, function(a, b, c) {
  return q(c) ? (Nf.b ? Nf.b(a, dg, c) : Nf.call(null, a, dg, c), Nf.b ? Nf.b(a, ng, c) : Nf.call(null, a, ng, c)) : null;
});
Mf(Rf, function(a, b, c) {
  return jQuery(a).text("" + v(c));
});
Mf(Uf, function(a, b, c) {
  return q(c) ? (b = jQuery("body"), a = jQuery(a), b.animate(vf(new ka(null, 1, [lg, a.offset().top], null)))) : null;
});
function th(a, b, c) {
  return qh(a, function() {
    return jQuery(a).on(Hc(b), c);
  });
}
;var Eh, Fh, Gh, Hh, Ih, Jh;
function Kh() {
  Eh = function(a) {
    return pd.a(function(a) {
      return new V(null, 2, 5, W, [a, pd.a(function(c) {
        return Kg(function(a, b) {
          return 0 != (b & 1 << a);
        }).call(null, c, a);
      }, new V(null, 4, 5, W, [3, 2, 1, 0], null))], null);
    }, new V(null, 2, 5, W, [Kg(function(a, c) {
      return a.a ? a.a(c, 10) : a.call(null, c, 10);
    }).call(null, tc, a), Kg(function(a, c) {
      return c.a ? c.a(a, 10) : c.call(null, a, 10);
    }).call(null, a, sc)], null));
  };
  Fh = function(a) {
    return new ka(null, 3, [bg, Eh(Kg(function(a) {
      return a.getHours();
    }).call(null, a)), Xf, Eh(Kg(function(a) {
      return a.getMinutes();
    }).call(null, a)), Pf, Eh(Kg(function(a) {
      return a.getSeconds();
    }).call(null, a))], null);
  };
  Gh = function() {
    function a(a) {
      var d = null;
      0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, d);
    }
    function b(a) {
      a = rh(a);
      var b = P.b(a, 0, null), b = jc(b) ? R.a(Ke, b) : b, b = Q.a(b, Yf);
      P.b(a, 1, null);
      return Z.a ? Z.a($f, Kg(function(a, b) {
        return new ka(null, 3, [hg, !0, Yf, a, gg, b.c ? b.c(a) : b.call(null, a)], null);
      }).call(null, b, ra)) : Z.call(null, $f, Kg(function(a, b) {
        return new ka(null, 3, [hg, !0, Yf, a, gg, b.c ? b.c(a) : b.call(null, a)], null);
      }).call(null, b, ra));
    }
    a.j = 0;
    a.g = function(a) {
      a = E(a);
      return b(a);
    };
    a.e = b;
    return a;
  }();
  Hh = function() {
    function a(a) {
      var d = null;
      0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, d);
    }
    function b(a) {
      a = rh(a);
      var b = P.b(a, 0, null), b = jc(b) ? R.a(Ke, b) : b, b = Q.a(b, Sf), e = P.b(b, 0, null), b = P.b(b, 1, null);
      P.b(a, 1, null);
      return Z.b ? Z.b(Wf, "col", Tb.a(pd.a(bd.a(Gh, Yf), b), Z.b ? Z.b(Wf, "unit", function() {
        var a = document.createTextNode("");
        Kg(function(a, b) {
          return b.nodeValue = "" + v(a);
        }).call(null, e, a);
        return a;
      }()) : Z.call(null, Wf, "unit", function() {
        var a = document.createTextNode("");
        Kg(function(a, b) {
          return b.nodeValue = "" + v(a);
        }).call(null, e, a);
        return a;
      }()))) : Z.call(null, Wf, "col", Tb.a(pd.a(bd.a(Gh, Yf), b), Z.b ? Z.b(Wf, "unit", function() {
        var a = document.createTextNode("");
        Kg(function(a, b) {
          return b.nodeValue = "" + v(a);
        }).call(null, e, a);
        return a;
      }()) : Z.call(null, Wf, "unit", function() {
        var a = document.createTextNode("");
        Kg(function(a, b) {
          return b.nodeValue = "" + v(a);
        }).call(null, e, a);
        return a;
      }())));
    }
    a.j = 0;
    a.g = function(a) {
      a = E(a);
      return b(a);
    };
    a.e = b;
    return a;
  }();
  Ih = function() {
    function a(a) {
      var d = null;
      0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, d);
    }
    function b(a) {
      a = rh(a);
      var b = P.b(a, 0, null), b = jc(b) ? R.a(Ke, b) : b, e = Q.a(b, Sf), b = P.b(e, 0, null), e = P.b(e, 1, null);
      P.b(a, 1, null);
      return Z.l ? Z.l(Wf, "colpair", Hh.e(J([Sf, b], 0)), Hh.e(J([Sf, e], 0))) : Z.call(null, Wf, "colpair", Hh.e(J([Sf, b], 0)), Hh.e(J([Sf, e], 0)));
    }
    a.j = 0;
    a.g = function(a) {
      a = E(a);
      return b(a);
    };
    a.e = b;
    return a;
  }();
  Jh = function() {
    function a(a) {
      var d = null;
      0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, d);
    }
    function b(a) {
      a = rh(a);
      var b = P.b(a, 0, null), b = jc(b) ? R.a(Ke, b) : b, e = Q.a(b, ig), g = jc(e) ? R.a(Ke, e) : e, e = Q.a(g, Pf), h = Q.a(g, Xf), g = Q.a(g, bg), b = Q.a(b, ag);
      P.b(a, 1, null);
      return Z.l ? Z.l(Z.b ? Z.b(Wf, "col legend", ed.a(function(a) {
        return Z.b ? Z.b(Wf, "unit", "" + v(a)) : Z.call(null, Wf, "unit", "" + v(a));
      }, b)) : Z.call(null, Wf, "col legend", ed.a(function(a) {
        return Z.b ? Z.b(Wf, "unit", "" + v(a)) : Z.call(null, Wf, "unit", "" + v(a));
      }, b)), Ih.e(J([Sf, g], 0)), Ih.e(J([Sf, h], 0)), Ih.e(J([Sf, e], 0))) : Z.call(null, Z.b ? Z.b(Wf, "col legend", ed.a(function(a) {
        return Z.b ? Z.b(Wf, "unit", "" + v(a)) : Z.call(null, Wf, "unit", "" + v(a));
      }, b)) : Z.call(null, Wf, "col legend", ed.a(function(a) {
        return Z.b ? Z.b(Wf, "unit", "" + v(a)) : Z.call(null, Wf, "unit", "" + v(a));
      }, b)), Ih.e(J([Sf, g], 0)), Ih.e(J([Sf, h], 0)), Ih.e(J([Sf, e], 0)));
    }
    a.j = 0;
    a.g = function(a) {
      a = E(a);
      return b(a);
    };
    a.e = b;
    return a;
  }();
  return Bh(new V(null, 2, 5, W, [function() {
    return function() {
      var a = Lg(new Date);
      setInterval(function(a) {
        return function() {
          return lf(a, new Date);
        };
      }(a), 1E3);
      return Jh.e(J([ig, Fh(a), ag, new V(null, 4, 5, W, [8, 4, 2, 1], null)], 0));
    }();
  }(), function() {
    var a = yh.b ? yh.b(Qf, "http://pmbauer.github.io/2014/01/27/hoplon-binary-clock", "Article") : yh.call(null, Qf, "http://pmbauer.github.io/2014/01/27/hoplon-binary-clock", "Article"), b = yh.b ? yh.b(Qf, "https://github.com/pmbauer/binary-clock/blob/master/src/index.cljs.hl", "Source Code") : yh.call(null, Qf, "https://github.com/pmbauer/binary-clock/blob/master/src/index.cljs.hl", "Source Code");
    return Z.w ? Z.w(Wf, "note", a, " \u2022 ", b) : Z.call(null, Wf, "note", a, " \u2022 ", b);
  }()], null));
}
var Lh = ["tailrecursion", "hoplon", "app_pages", "G__7558", "hoploninit"], Mh = aa;
Lh[0] in Mh || !Mh.execScript || Mh.execScript("var " + Lh[0]);
for (var Nh;Lh.length && (Nh = Lh.shift());) {
  Lh.length || void 0 === Kh ? Mh = Mh[Nh] ? Mh[Nh] : Mh[Nh] = {} : Mh[Nh] = Kh;
}
;