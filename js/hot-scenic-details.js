webpackJsonp([21],{0:function(e,t,a){e.exports=a(183)},14:function(e,t){function a(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(e){if(d===setTimeout)return setTimeout(e,0);if((d===a||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function s(e){if(u===clearTimeout)return clearTimeout(e);if((u===n||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(e);try{return u(e)}catch(t){try{return u.call(null,e)}catch(t){return u.call(this,e)}}}function r(){f&&p&&(f=!1,p.length?m=p.concat(m):h=-1,m.length&&o())}function o(){if(!f){var e=i(r);f=!0;for(var t=m.length;t;){for(p=m,m=[];++h<t;)p&&p[h].run();h=-1,t=m.length}p=null,f=!1,s(e)}}function l(e,t){this.fun=e,this.array=t}function c(){}var d,u,v=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:a}catch(e){d=a}try{u="function"==typeof clearTimeout?clearTimeout:n}catch(e){u=n}}();var p,m=[],f=!1,h=-1;v.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];m.push(new l(e,t)),1!==m.length||f||i(o)},l.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=c,v.addListener=c,v.once=c,v.off=c,v.removeListener=c,v.removeAllListeners=c,v.emit=c,v.prependListener=c,v.prependOnceListener=c,v.listeners=function(e){return[]},v.binding=function(e){throw new Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw new Error("process.chdir is not supported")},v.umask=function(){return 0}},15:function(e,t,a){(function(e,t){!function(e,a){"use strict";function n(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var n={callback:e,args:t};return f[m]=n,p(m),m++}function i(e){delete f[e]}function s(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(a,n)}}function r(e){if(h)setTimeout(r,0,e);else{var t=f[e];if(t){h=!0;try{s(t)}finally{i(e),h=!1}}}}function o(){p=function(e){t.nextTick(function(){r(e)})}}function l(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}function c(){var t="setImmediate$"+Math.random()+"$",a=function(a){a.source===e&&"string"==typeof a.data&&0===a.data.indexOf(t)&&r(+a.data.slice(t.length))};e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),p=function(a){e.postMessage(t+a,"*")}}function d(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;r(t)},p=function(t){e.port2.postMessage(t)}}function u(){var e=g.documentElement;p=function(t){var a=g.createElement("script");a.onreadystatechange=function(){r(t),a.onreadystatechange=null,e.removeChild(a),a=null},e.appendChild(a)}}function v(){p=function(e){setTimeout(r,0,e)}}if(!e.setImmediate){var p,m=1,f={},h=!1,g=e.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(e);b=b&&b.setTimeout?b:e,"[object process]"==={}.toString.call(e.process)?o():l()?c():e.MessageChannel?d():g&&"onreadystatechange"in g.createElement("script")?u():v(),b.setImmediate=n,b.clearImmediate=i}}("undefined"==typeof self?"undefined"==typeof e?this:e:self)}).call(t,function(){return this}(),a(14))},16:function(e,t,a){(function(e){function n(e,t){this._id=e,this._clearFn=t}var i="undefined"!=typeof e&&e||"undefined"!=typeof self&&self||window,s=Function.prototype.apply;t.setTimeout=function(){return new n(s.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new n(s.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},a(15),t.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(t,function(){return this}())},17:function(e,t,a){(function(e){!function(t){var a=!0;t.flexslider=function(n,i){var s=t(n);s.vars=t.extend({},t.flexslider.defaults,i);var r,o=s.vars.namespace,l=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,c=("ontouchstart"in window||l||window.DocumentTouch&&document instanceof DocumentTouch)&&s.vars.touch,d="click touchend MSPointerUp keyup",u="",v="vertical"===s.vars.direction,p=s.vars.reverse,m=s.vars.itemWidth>0,f="fade"===s.vars.animation,h=""!==s.vars.asNavFor,g={};t.data(n,"flexslider",s),g={init:function(){s.animating=!1,s.currentSlide=parseInt(s.vars.startAt?s.vars.startAt:0,10),isNaN(s.currentSlide)&&(s.currentSlide=0),s.animatingTo=s.currentSlide,s.atEnd=0===s.currentSlide||s.currentSlide===s.last,s.containerSelector=s.vars.selector.substr(0,s.vars.selector.search(" ")),s.slides=t(s.vars.selector,s),s.container=t(s.containerSelector,s),s.count=s.slides.length,s.syncExists=t(s.vars.sync).length>0,"slide"===s.vars.animation&&(s.vars.animation="swing"),s.prop=v?"top":"marginLeft",s.args={},s.manualPause=!1,s.stopped=!1,s.started=!1,s.startTimeout=null,s.transitions=!s.vars.video&&!f&&s.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return s.pfx=t[a].replace("Perspective","").toLowerCase(),s.prop="-"+s.pfx+"-transform",!0;return!1}(),s.ensureAnimationEnd="",""!==s.vars.controlsContainer&&(s.controlsContainer=t(s.vars.controlsContainer).length>0&&t(s.vars.controlsContainer)),""!==s.vars.manualControls&&(s.manualControls=t(s.vars.manualControls).length>0&&t(s.vars.manualControls)),""!==s.vars.customDirectionNav&&(s.customDirectionNav=2===t(s.vars.customDirectionNav).length&&t(s.vars.customDirectionNav)),s.vars.randomize&&(s.slides.sort(function(){return Math.round(Math.random())-.5}),s.container.empty().append(s.slides)),s.doMath(),s.setup("init"),s.vars.controlNav&&g.controlNav.setup(),s.vars.directionNav&&g.directionNav.setup(),s.vars.keyboard&&(1===t(s.containerSelector).length||s.vars.multipleKeyboard)&&t(document).bind("keyup",function(e){var t=e.keyCode;if(!s.animating&&(39===t||37===t)){var a=39===t?s.getTarget("next"):37===t&&s.getTarget("prev");s.flexAnimate(a,s.vars.pauseOnAction)}}),s.vars.mousewheel&&s.bind("mousewheel",function(e,t,a,n){e.preventDefault();var i=0>t?s.getTarget("next"):s.getTarget("prev");s.flexAnimate(i,s.vars.pauseOnAction)}),s.vars.pausePlay&&g.pausePlay.setup(),s.vars.slideshow&&s.vars.pauseInvisible&&g.pauseInvisible.init(),s.vars.slideshow&&(s.vars.pauseOnHover&&s.hover(function(){s.manualPlay||s.manualPause||s.pause()},function(){s.manualPause||s.manualPlay||s.stopped||s.play()}),s.vars.pauseInvisible&&g.pauseInvisible.isHidden()||(s.vars.initDelay>0?s.startTimeout=setTimeout(s.play,s.vars.initDelay):s.play())),h&&g.asNav.setup(),c&&s.vars.touch&&g.touch(),(!f||f&&s.vars.smoothHeight)&&t(window).bind("resize orientationchange focus",g.resize),s.find("img").attr("draggable","false"),setTimeout(function(){s.vars.start(s)},200)},asNav:{setup:function(){s.asNav=!0,s.animatingTo=Math.floor(s.currentSlide/s.move),s.currentItem=s.currentSlide,s.slides.removeClass(o+"active-slide").eq(s.currentItem).addClass(o+"active-slide"),l?(n._slider=s,s.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var a=t(this),n=a.index();t(s.vars.asNavFor).data("flexslider").animating||a.hasClass("active")||(s.direction=s.currentItem<n?"next":"prev",s.flexAnimate(n,s.vars.pauseOnAction,!1,!0,!0))})})):s.slides.on(d,function(e){e.preventDefault();var a=t(this),n=a.index(),i=a.offset().left-t(s).scrollLeft();0>=i&&a.hasClass(o+"active-slide")?s.flexAnimate(s.getTarget("prev"),!0):t(s.vars.asNavFor).data("flexslider").animating||a.hasClass(o+"active-slide")||(s.direction=s.currentItem<n?"next":"prev",s.flexAnimate(n,s.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){s.manualControls?g.controlNav.setupManual():g.controlNav.setupPaging()},setupPaging:function(){var e,a,n="thumbnails"===s.vars.controlNav?"control-thumbs":"control-paging",i=1;if(s.controlNavScaffold=t('<ol class="'+o+"control-nav "+o+n+'"></ol>'),s.pagingCount>1)for(var r=0;r<s.pagingCount;r++){a=s.slides.eq(r),void 0===a.attr("data-thumb-alt")&&a.attr("data-thumb-alt","");var l=""!==a.attr("data-thumb-alt")?l=' alt="'+a.attr("data-thumb-alt")+'"':"";if(e="thumbnails"===s.vars.controlNav?'<img src="'+a.attr("data-thumb")+'"'+l+"/>":'<a href="#">'+i+"</a>","thumbnails"===s.vars.controlNav&&!0===s.vars.thumbCaptions){var c=a.attr("data-thumbcaption");""!==c&&void 0!==c&&(e+='<span class="'+o+'caption">'+c+"</span>")}s.controlNavScaffold.append("<li>"+e+"</li>"),i++}s.controlsContainer?t(s.controlsContainer).append(s.controlNavScaffold):s.append(s.controlNavScaffold),g.controlNav.set(),g.controlNav.active(),s.controlNavScaffold.delegate("a, img",d,function(e){if(e.preventDefault(),""===u||u===e.type){var a=t(this),n=s.controlNav.index(a);a.hasClass(o+"active")||(s.direction=n>s.currentSlide?"next":"prev",s.flexAnimate(n,s.vars.pauseOnAction))}""===u&&(u=e.type),g.setToClearWatchedEvent()})},setupManual:function(){s.controlNav=s.manualControls,g.controlNav.active(),s.controlNav.bind(d,function(e){if(e.preventDefault(),""===u||u===e.type){var a=t(this),n=s.controlNav.index(a);a.hasClass(o+"active")||(n>s.currentSlide?s.direction="next":s.direction="prev",s.flexAnimate(n,s.vars.pauseOnAction))}""===u&&(u=e.type),g.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===s.vars.controlNav?"img":"a";s.controlNav=t("."+o+"control-nav li "+e,s.controlsContainer?s.controlsContainer:s)},active:function(){s.controlNav.removeClass(o+"active").eq(s.animatingTo).addClass(o+"active")},update:function(e,a){s.pagingCount>1&&"add"===e?s.controlNavScaffold.append(t('<li><a href="#">'+s.count+"</a></li>")):1===s.pagingCount?s.controlNavScaffold.find("li").remove():s.controlNav.eq(a).closest("li").remove(),g.controlNav.set(),s.pagingCount>1&&s.pagingCount!==s.controlNav.length?s.update(a,e):g.controlNav.active()}},directionNav:{setup:function(){var e=t('<ul class="'+o+'direction-nav"><li class="'+o+'nav-prev"><a class="'+o+'prev" href="#">'+s.vars.prevText+'</a></li><li class="'+o+'nav-next"><a class="'+o+'next" href="#">'+s.vars.nextText+"</a></li></ul>");s.customDirectionNav?s.directionNav=s.customDirectionNav:s.controlsContainer?(t(s.controlsContainer).append(e),s.directionNav=t("."+o+"direction-nav li a",s.controlsContainer)):(s.append(e),s.directionNav=t("."+o+"direction-nav li a",s)),g.directionNav.update(),s.directionNav.bind(d,function(e){e.preventDefault();var a;(""===u||u===e.type)&&(a=t(this).hasClass(o+"next")?s.getTarget("next"):s.getTarget("prev"),s.flexAnimate(a,s.vars.pauseOnAction)),""===u&&(u=e.type),g.setToClearWatchedEvent()})},update:function(){var e=o+"disabled";1===s.pagingCount?s.directionNav.addClass(e).attr("tabindex","-1"):s.vars.animationLoop?s.directionNav.removeClass(e).removeAttr("tabindex"):0===s.animatingTo?s.directionNav.removeClass(e).filter("."+o+"prev").addClass(e).attr("tabindex","-1"):s.animatingTo===s.last?s.directionNav.removeClass(e).filter("."+o+"next").addClass(e).attr("tabindex","-1"):s.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=t('<div class="'+o+'pauseplay"><a href="#"></a></div>');s.controlsContainer?(s.controlsContainer.append(e),s.pausePlay=t("."+o+"pauseplay a",s.controlsContainer)):(s.append(e),s.pausePlay=t("."+o+"pauseplay a",s)),g.pausePlay.update(s.vars.slideshow?o+"pause":o+"play"),s.pausePlay.bind(d,function(e){e.preventDefault(),(""===u||u===e.type)&&(t(this).hasClass(o+"pause")?(s.manualPause=!0,s.manualPlay=!1,s.pause()):(s.manualPause=!1,s.manualPlay=!0,s.play())),""===u&&(u=e.type),g.setToClearWatchedEvent()})},update:function(e){"play"===e?s.pausePlay.removeClass(o+"pause").addClass(o+"play").html(s.vars.playText):s.pausePlay.removeClass(o+"play").addClass(o+"pause").html(s.vars.pauseText)}},touch:function(){function t(e){e.stopPropagation(),s.animating?e.preventDefault():(s.pause(),n._gesture.addPointer(e.pointerId),S=0,d=v?s.h:s.w,h=Number(new Date),c=m&&p&&s.animatingTo===s.last?0:m&&p?s.limit-(s.itemW+s.vars.itemMargin)*s.move*s.animatingTo:m&&s.currentSlide===s.last?s.limit:m?(s.itemW+s.vars.itemMargin)*s.move*s.currentSlide:p?(s.last-s.currentSlide+s.cloneOffset)*d:(s.currentSlide+s.cloneOffset)*d)}function a(t){t.stopPropagation();var a=t.target._slider;if(a){var i=-t.translationX,s=-t.translationY;return S+=v?s:i,u=S,T=v?Math.abs(S)<Math.abs(-i):Math.abs(S)<Math.abs(-s),t.detail===t.MSGESTURE_FLAG_INERTIA?void e(function(){n._gesture.stop()}):void((!T||Number(new Date)-h>500)&&(t.preventDefault(),!f&&a.transitions&&(a.vars.animationLoop||(u=S/(0===a.currentSlide&&0>S||a.currentSlide===a.last&&S>0?Math.abs(S)/d+2:1)),a.setProps(c+u,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!T&&null!==u){var a=p?-u:u,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-h<550&&Math.abs(a)>50||Math.abs(a)>d/2)?t.flexAnimate(n,t.vars.pauseOnAction):f||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,u=null,c=null,S=0}}var r,o,c,d,u,h,g,b,y,T=!1,x=0,w=0,S=0;l?(n.style.msTouchAction="none",n._gesture=new MSGesture,n._gesture.target=n,n.addEventListener("MSPointerDown",t,!1),n._slider=s,n.addEventListener("MSGestureChange",a,!1),n.addEventListener("MSGestureEnd",i,!1)):(g=function(e){s.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(s.pause(),d=v?s.h:s.w,h=Number(new Date),x=e.touches[0].pageX,w=e.touches[0].pageY,c=m&&p&&s.animatingTo===s.last?0:m&&p?s.limit-(s.itemW+s.vars.itemMargin)*s.move*s.animatingTo:m&&s.currentSlide===s.last?s.limit:m?(s.itemW+s.vars.itemMargin)*s.move*s.currentSlide:p?(s.last-s.currentSlide+s.cloneOffset)*d:(s.currentSlide+s.cloneOffset)*d,r=v?w:x,o=v?x:w,n.addEventListener("touchmove",b,!1),n.addEventListener("touchend",y,!1))},b=function(e){x=e.touches[0].pageX,w=e.touches[0].pageY,u=v?r-w:r-x,T=v?Math.abs(u)<Math.abs(x-o):Math.abs(u)<Math.abs(w-o);var t=500;(!T||Number(new Date)-h>t)&&(e.preventDefault(),!f&&s.transitions&&(s.vars.animationLoop||(u/=0===s.currentSlide&&0>u||s.currentSlide===s.last&&u>0?Math.abs(u)/d+2:1),s.setProps(c+u,"setTouch")))},y=function(e){if(n.removeEventListener("touchmove",b,!1),s.animatingTo===s.currentSlide&&!T&&null!==u){var t=p?-u:u,a=t>0?s.getTarget("next"):s.getTarget("prev");s.canAdvance(a)&&(Number(new Date)-h<550&&Math.abs(t)>50||Math.abs(t)>d/2)?s.flexAnimate(a,s.vars.pauseOnAction):f||s.flexAnimate(s.currentSlide,s.vars.pauseOnAction,!0)}n.removeEventListener("touchend",y,!1),r=null,o=null,u=null,c=null},n.addEventListener("touchstart",g,!1))},resize:function(){!s.animating&&s.is(":visible")&&(m||s.doMath(),f?g.smoothHeight():m?(s.slides.width(s.computedW),s.update(s.pagingCount),s.setProps()):v?(s.viewport.height(s.h),s.setProps(s.h,"setTotal")):(s.vars.smoothHeight&&g.smoothHeight(),s.newSlides.width(s.computedW),s.setProps(s.computedW,"setTotal")))},smoothHeight:function(e){if(!v||f){var t=f?s:s.viewport;e?t.animate({height:s.slides.eq(s.animatingTo).innerHeight()},e):t.innerHeight(s.slides.eq(s.animatingTo).innerHeight())}},sync:function(e){var a=t(s.vars.sync).data("flexslider"),n=s.animatingTo;switch(e){case"animate":a.flexAnimate(n,s.vars.pauseOnAction,!1,!0);break;case"play":a.playing||a.asNav||a.play();break;case"pause":a.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=t(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=g.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){g.pauseInvisible.isHidden()?s.startTimeout?clearTimeout(s.startTimeout):s.pause():s.started?s.play():s.vars.initDelay>0?setTimeout(s.play,s.vars.initDelay):s.play()})}},isHidden:function(){var e=g.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(r),r=setTimeout(function(){u=""},3e3)}},s.flexAnimate=function(e,a,n,i,r){if(s.vars.animationLoop||e===s.currentSlide||(s.direction=e>s.currentSlide?"next":"prev"),h&&1===s.pagingCount&&(s.direction=s.currentItem<e?"next":"prev"),!s.animating&&(s.canAdvance(e,r)||n)&&s.is(":visible")){if(h&&i){var l=t(s.vars.asNavFor).data("flexslider");if(s.atEnd=0===e||e===s.count-1,l.flexAnimate(e,!0,!1,!0,r),s.direction=s.currentItem<e?"next":"prev",l.direction=s.direction,Math.ceil((e+1)/s.visible)-1===s.currentSlide||0===e)return s.currentItem=e,s.slides.removeClass(o+"active-slide").eq(e).addClass(o+"active-slide"),!1;s.currentItem=e,s.slides.removeClass(o+"active-slide").eq(e).addClass(o+"active-slide"),e=Math.floor(e/s.visible)}if(s.animating=!0,s.animatingTo=e,a&&s.pause(),s.vars.before(s),s.syncExists&&!r&&g.sync("animate"),s.vars.controlNav&&g.controlNav.active(),m||s.slides.removeClass(o+"active-slide").eq(e).addClass(o+"active-slide"),s.atEnd=0===e||e===s.last,s.vars.directionNav&&g.directionNav.update(),e===s.last&&(s.vars.end(s),s.vars.animationLoop||s.pause()),f)c?(s.slides.eq(s.currentSlide).css({opacity:0,zIndex:1}),s.slides.eq(e).css({opacity:1,zIndex:2}),s.wrapup(y)):(s.slides.eq(s.currentSlide).css({zIndex:1}).animate({opacity:0},s.vars.animationSpeed,s.vars.easing),s.slides.eq(e).css({zIndex:2}).animate({opacity:1},s.vars.animationSpeed,s.vars.easing,s.wrapup));else{var d,u,b,y=v?s.slides.filter(":first").height():s.computedW;m?(d=s.vars.itemMargin,b=(s.itemW+d)*s.move*s.animatingTo,u=b>s.limit&&1!==s.visible?s.limit:b):u=0===s.currentSlide&&e===s.count-1&&s.vars.animationLoop&&"next"!==s.direction?p?(s.count+s.cloneOffset)*y:0:s.currentSlide===s.last&&0===e&&s.vars.animationLoop&&"prev"!==s.direction?p?0:(s.count+1)*y:p?(s.count-1-e+s.cloneOffset)*y:(e+s.cloneOffset)*y,s.setProps(u,"",s.vars.animationSpeed),s.transitions?(s.vars.animationLoop&&s.atEnd||(s.animating=!1,s.currentSlide=s.animatingTo),s.container.unbind("webkitTransitionEnd transitionend"),s.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(s.ensureAnimationEnd),s.wrapup(y)}),clearTimeout(s.ensureAnimationEnd),s.ensureAnimationEnd=setTimeout(function(){s.wrapup(y)},s.vars.animationSpeed+100)):s.container.animate(s.args,s.vars.animationSpeed,s.vars.easing,function(){s.wrapup(y)})}s.vars.smoothHeight&&g.smoothHeight(s.vars.animationSpeed)}},s.wrapup=function(e){f||m||(0===s.currentSlide&&s.animatingTo===s.last&&s.vars.animationLoop?s.setProps(e,"jumpEnd"):s.currentSlide===s.last&&0===s.animatingTo&&s.vars.animationLoop&&s.setProps(e,"jumpStart")),s.animating=!1,s.currentSlide=s.animatingTo,s.vars.after(s)},s.animateSlides=function(){!s.animating&&a&&s.flexAnimate(s.getTarget("next"))},s.pause=function(){clearInterval(s.animatedSlides),s.animatedSlides=null,s.playing=!1,s.vars.pausePlay&&g.pausePlay.update("play"),s.syncExists&&g.sync("pause")},s.play=function(){s.playing&&clearInterval(s.animatedSlides),s.animatedSlides=s.animatedSlides||setInterval(s.animateSlides,s.vars.slideshowSpeed),s.started=s.playing=!0,s.vars.pausePlay&&g.pausePlay.update("pause"),s.syncExists&&g.sync("play")},s.stop=function(){s.pause(),s.stopped=!0},s.canAdvance=function(e,t){var a=h?s.pagingCount-1:s.last;return!!t||(!(!h||s.currentItem!==s.count-1||0!==e||"prev"!==s.direction)||(!h||0!==s.currentItem||e!==s.pagingCount-1||"next"===s.direction)&&(!(e===s.currentSlide&&!h)&&(!!s.vars.animationLoop||(!s.atEnd||0!==s.currentSlide||e!==a||"next"===s.direction)&&(!s.atEnd||s.currentSlide!==a||0!==e||"next"!==s.direction))))},s.getTarget=function(e){return s.direction=e,"next"===e?s.currentSlide===s.last?0:s.currentSlide+1:0===s.currentSlide?s.last:s.currentSlide-1},s.setProps=function(e,t,a){var n=function(){var a=e?e:(s.itemW+s.vars.itemMargin)*s.move*s.animatingTo,n=function(){if(m)return"setTouch"===t?e:p&&s.animatingTo===s.last?0:p?s.limit-(s.itemW+s.vars.itemMargin)*s.move*s.animatingTo:s.animatingTo===s.last?s.limit:a;switch(t){case"setTotal":return p?(s.count-1-s.currentSlide+s.cloneOffset)*e:(s.currentSlide+s.cloneOffset)*e;case"setTouch":return p?e:e;case"jumpEnd":return p?e:s.count*e;case"jumpStart":return p?s.count*e:e;default:return e}}();return-1*n+"px"}();s.transitions&&(n=v?"translate3d(0,"+n+",0)":"translate3d("+n+",0,0)",a=void 0!==a?a/1e3+"s":"0s",s.container.css("-"+s.pfx+"-transition-duration",a),s.container.css("transition-duration",a)),s.args[s.prop]=n,(s.transitions||void 0===a)&&s.container.css(s.args),s.container.css("transform",n)},s.setup=function(e){if(f)s.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(c?s.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+s.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(s.currentSlide).css({opacity:1,zIndex:2}):0==s.vars.fadeFirstSlide?s.slides.css({opacity:0,display:"block",zIndex:1}).eq(s.currentSlide).css({zIndex:2}).css({opacity:1}):s.slides.css({opacity:0,display:"block",zIndex:1}).eq(s.currentSlide).css({zIndex:2}).animate({opacity:1},s.vars.animationSpeed,s.vars.easing)),s.vars.smoothHeight&&g.smoothHeight();else{var a,n;"init"===e&&(s.viewport=t('<div class="'+o+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(s).append(s.container),s.cloneCount=0,s.cloneOffset=0,p&&(n=t.makeArray(s.slides).reverse(),s.slides=t(n),s.container.empty().append(s.slides))),s.vars.animationLoop&&!m&&(s.cloneCount=2,s.cloneOffset=1,"init"!==e&&s.container.find(".clone").remove(),s.container.append(g.uniqueID(s.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(g.uniqueID(s.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),s.newSlides=t(s.vars.selector,s),a=p?s.count-1-s.currentSlide+s.cloneOffset:s.currentSlide+s.cloneOffset,v&&!m?(s.container.height(200*(s.count+s.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){s.newSlides.css({display:"block"}),s.doMath(),s.viewport.height(s.h),s.setProps(a*s.h,"init")},"init"===e?100:0)):(s.container.width(200*(s.count+s.cloneCount)+"%"),s.setProps(a*s.computedW,"init"),setTimeout(function(){s.doMath(),s.newSlides.css({width:s.computedW,marginRight:s.computedM,float:"left",display:"block"}),s.vars.smoothHeight&&g.smoothHeight()},"init"===e?100:0))}m||s.slides.removeClass(o+"active-slide").eq(s.currentSlide).addClass(o+"active-slide"),s.vars.init(s)},s.doMath=function(){var e=s.slides.first(),t=s.vars.itemMargin,a=s.vars.minItems,n=s.vars.maxItems;s.w=void 0===s.viewport?s.width():s.viewport.width(),s.h=e.height(),s.boxPadding=e.outerWidth()-e.width(),m?(s.itemT=s.vars.itemWidth+t,s.itemM=t,s.minW=a?a*s.itemT:s.w,s.maxW=n?n*s.itemT-t:s.w,s.itemW=s.minW>s.w?(s.w-t*(a-1))/a:s.maxW<s.w?(s.w-t*(n-1))/n:s.vars.itemWidth>s.w?s.w:s.vars.itemWidth,s.visible=Math.floor(s.w/s.itemW),s.move=s.vars.move>0&&s.vars.move<s.visible?s.vars.move:s.visible,s.pagingCount=Math.ceil((s.count-s.visible)/s.move+1),s.last=s.pagingCount-1,s.limit=1===s.pagingCount?0:s.vars.itemWidth>s.w?s.itemW*(s.count-1)+t*(s.count-1):(s.itemW+t)*s.count-s.w-t):(s.itemW=s.w,s.itemM=t,s.pagingCount=s.count,s.last=s.count-1),s.computedW=s.itemW-s.boxPadding,s.computedM=s.itemM},s.update=function(e,t){s.doMath(),m||(e<s.currentSlide?s.currentSlide+=1:e<=s.currentSlide&&0!==e&&(s.currentSlide-=1),s.animatingTo=s.currentSlide),s.vars.controlNav&&!s.manualControls&&("add"===t&&!m||s.pagingCount>s.controlNav.length?g.controlNav.update("add"):("remove"===t&&!m||s.pagingCount<s.controlNav.length)&&(m&&s.currentSlide>s.last&&(s.currentSlide-=1,s.animatingTo-=1),g.controlNav.update("remove",s.last))),s.vars.directionNav&&g.directionNav.update()},s.addSlide=function(e,a){var n=t(e);s.count+=1,s.last=s.count-1,v&&p?void 0!==a?s.slides.eq(s.count-a).after(n):s.container.prepend(n):void 0!==a?s.slides.eq(a).before(n):s.container.append(n),s.update(a,"add"),s.slides=t(s.vars.selector+":not(.clone)",s),s.setup(),s.vars.added(s)},s.removeSlide=function(e){var a=isNaN(e)?s.slides.index(t(e)):e;s.count-=1,s.last=s.count-1,isNaN(e)?t(e,s.slides).remove():v&&p?s.slides.eq(s.last).remove():s.slides.eq(e).remove(),s.doMath(),s.update(a,"remove"),s.slides=t(s.vars.selector+":not(.clone)",s),s.setup(),s.vars.removed(s)},g.init()},t(window).blur(function(e){a=!1}).focus(function(e){a=!0}),t.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},t.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var a=t(this),n=e.selector?e.selector:".slides > li",i=a.find(n);1===i.length&&e.allowOneSlide===!1||0===i.length?(i.fadeIn(400),e.start&&e.start(a)):void 0===a.data("flexslider")&&new t.flexslider(this,e)});var a=t(this).data("flexslider");switch(e){case"play":a.play();break;case"pause":a.pause();break;case"stop":a.stop();break;case"next":a.flexAnimate(a.getTarget("next"),!0);break;case"prev":case"previous":a.flexAnimate(a.getTarget("prev"),!0);break;default:"number"==typeof e&&a.flexAnimate(e,!0)}}}(jQuery)}).call(t,a(16).setImmediate)},24:function(e,t){},99:function(e,t){e.exports='<div class="hotel-details-hd"> <h1 class="title" title="{{name}}">{{names}}</h1> <div class="oper"><span class="share" style="position:relative"><i class="daq-icon">&#xe684;</i>分享<label id="bdshare" class="bdsharebuttonbox bdshare_t bds_tools_32 bdshare-button-style2-16" style="position:absolute;top:0;display:block;left:0;width:100%;height:100%" data-bd-bind="1505371279979"><a class="bds_more" title="" data-img="" data-cmd="more" style="position:absolute;z-index:10;margin:0;padding:0;background:0 0;left:0;top:0;width:100%;height:100%;display:inline-block;border:0"></a></label></span>{{#hotel720}}<a href="{{hotel720}}" class="virtual-tourism"><i class="daq-icon">&#xe694;</i>虚拟旅游</a>{{/hotel720}}</div> </div> <div class="hotel-details-bd"> <div class="hotel-bunner-wrap js_flexslider"> <ul class="slides"> {{#picture}} <li><img src="{{picture}}" alt="{{imgName}}"></li> {{/picture}} {{^picture}} <li class="no-photo"></li> {{/picture}} </ul> </div> <div class="hotel-info"> <h2 class="title">基本信息</h2> <ul class="hotel-import"> <li class="star-hotel no-bor"> <p class="label">景区星级</p> <p class="data">{{{levelName}}}</p> </li> <li class="consume"> <p class="label">门票价格</p> <p class="data" title="{{priceZXW}}">{{#priceZXW}}{{newPrices}}{{/priceZXW}}{{^priceZXW}}未知{{/priceZXW}}</p> </li> <li class="hotel-phone"> <p class="label">景区电话</p> <p class="data">{{#phone}}{{phone}}{{/phone}}{{^phone}}未知{{/phone}}</p> </li> </ul> {{#bookAddressWithUrl}} <dl class="group-buying"> <dt>在线团购</dt> {{#bookAddressWithUrl}} <dd><a href="{{url}}"><span class="daq-icon">{{{icon}}}</span>{{name}}</a></dd> {{/bookAddressWithUrl}} </dl> {{/bookAddressWithUrl}} <ul class="base-info"> <li><label>营业时间：</label>{{#opentime}}{{opentime}}{{/opentime}}{{^opentime}}未知{{/opentime}}</li> <li><label>景区官网：</label><a href="{{#site}}{{site}}{{/site}}" target="_blank">{{#site}}{{site}}{{/site}}</a>{{^site}}未知{{/site}}</li> <li><label>景区地址：</label>{{#address}}{{address}}{{/address}}{{^address}}未知{{/address}}</li> </ul> </div> </div> <div class="about-hotel"> <div class="about-hotel-hd"> <h2>景区简介</h2> </div> <div class="about-hotel-bd"> {{#introduce}}{{{introduce}}}{{/introduce}}<p>{{^introduce}}暂无{{/introduce}}</p> </div> </div>'},100:function(e,t){e.exports='{{#list}} <li class="{{^logo}}no-photo{{/logo}}"> <a href="hotel-details.html?id={{id}}&channelCode=jdzs"> {{#logo}} <img src="{{logo}}" alt="{{name}}"> {{/logo}} <p class="mask" title="{{name}}">{{name}}</p> </a> </li> {{/list}} {{^list}} <p class="error">很抱歉，实在找不到您要的商品。</p> {{/list}}'},101:function(e,t){e.exports='{{#list}} <li class="{{^picture}}no-photo{{/picture}}"> <a href="hot-scenic-details.html?id={{id}}&channelCode=jqjd"> {{#logo}} <img src="{{logo}}" alt="{{name}}"> {{/logo}} <p class="mask" title="{{name}}">{{name}}</p> </a> </li> {{/list}} {{^list}} <p class="error">很抱歉，实在找不到您要的商品。</p> {{/list}}'},183:function(e,t,a){a(24),a(4);var n=a(3),i=a(1),s=a(99),r=a(100),o=a(101);a(17);var l="",c="",d={data:{longitude:0,latitude:0},init:function(){$(".nav > li").eq(2).addClass("active3"),this.flag=!1,this.loadHotelDetails()},eventBind:function(e){var t=this;t.flag&&$(".js_tab li").on("click",function(){var a=$(this);return index=a.index(),!a.hasClass("on")&&(a.addClass("on").siblings().removeClass("on"),void(0===index?t.loadRimScenery(e.longitude,e.latitude):t.loadRimHotel(e.longitude,e.latitude)))}).eq(0).trigger("click"),$(".js_hotel_details").on("click",".js_like",function(){var e=$(this);e.daqInteraction({resourceId:i.getUrlParam("id"),type:"praise",resourceType:"scenery"})}),$(".js_hotel_details").on("click",".js_go",function(){var e=$(this);e.daqInteraction({resourceId:i.getUrlParam("id"),type:"gone",resourceType:"scenery"})}),$(".js_hotel_details").on("click",".js_want",function(){var e=$(this);e.daqInteraction({resourceId:i.getUrlParam("id"),type:"want",resourceType:"scenery"})})},loadHotelDetails:function(){var e=this;$(".js_hotel_details").daqCreateModule({url:n.sceneryDetails,template:s,params:{sceneryId:i.getUrlParam("id")},callback:function(t){return console.log(t),t.newPrices=i.ellipsisContent(t.priceZXW,11),t.names=i.ellipsisContent(t.name,30),l=t.latitude,c=t.longitude,e.data.longitude=t.longitude,e.data.latitude=t.latitude,e.flag=!0,e.eventBind(e.data),t},complete:function(){e.loadFlexslider(),i.share()}})},loadRimScenery:function(e,t){$(".js_peripheral").daqCreateModule({url:n.scenicAround,template:o,params:{latitude:t,longitude:e,sourceType:1,distance:20},size:4,loading:!0,callback:function(e){return e}})},loadRimHotel:function(e,t){$(".js_peripheral").daqCreateModule({url:n.scenicAround,template:r,params:{latitude:t,longitude:e,sourceType:2,distance:20},size:4,loading:!0,callback:function(e){return e}})},loadFlexslider:function(){$(".js_flexslider").flexslider({animationLoop:!0,pauseOnHover:!0})}};$(function(){d.init()})}});