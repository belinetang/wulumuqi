webpackJsonp([3],{0:function(i,t,a){i.exports=a(194)},5:function(i,t,a){"use strict";a(7),a(6);var e=a(2),n=a(1),l=a(3),o=a(12),s=(e.pages.travelStrategyList,{loadList:function(i,t){$(i).daqCreateModule({url:l.newsListRecursion+"?channelCode="+n.getUrlParam("channelCode"),template:o,pagination:!0,columnWidth:590,padding:25,params:t,limits:3,curr:1,size:6,loading:!0,callback:function(i){console.log(i);for(var t=0;t<i.length;t++)i[t].channelCode=n.getUrlParam("channelCode"),i[t].titles=i[t].title,i[t].cover?(i[t].height=163,i[t].title=n.ellipsisContent(i[t].title,15)):i[t].title=n.ellipsisContent(i[t].title,25),i[t].summary=n.ellipsisContent(i[t].summary,82);return i}})}});i.exports=s},6:function(i,t,a){var e=a(1),n=a(2);!function(i){function t(t,a){this.ele=t,this.config={template:"",url:"",columnWidth:0,padding:0,params:{},size:10,curr:1},a&&i.isPlainObject(a)&&i.extend(this.config,a)}t.prototype={init:function(){var t=this,a=t.config,e=t.ele.outerWidth(!0);a.params.page=1,a.params.pageSize=a.size,t.flag=!1,i(window).off("scroll"),t.ele.removeAttr("data-flag"),t.ele.html("").css("height","auto"),i(".loading,.no-more").remove(),t.arrHeight=[],t.num=Math.floor(e/a.columnWidth),t.margin=Math.floor((e-t.num*a.columnWidth)/(t.num-1)),a.columnWidth=a.columnWidth-2*a.padding,t.loadList(a.params)},getMinHeight:function(i){var t=Math.min.apply(null,i);for(var a in i)if(i[a]===t)return a},loadLoading:function(){var i=this;i.ele.append('<div class="loading"><i class="loading-ic"></i>'+n.loading()+"</div>")},loadList:function(t){var a=this,l=a.config;e.request({url:l.url,data:t,beforeSend:function(){a.ele.find(".loading")&&a.loadLoading()},success:function(t){a.ele.attr("data-flag","true"),a.ele.find(".loading").remove(),a.flag=!0,t.page&&(a.pages=t.page.totalPage,l.params.page=t.page.currPage),a.pages<=l.params.page&&a.ele.after('<div class="no-more">对不起，没有更多了</div>');var o=t.datas;if("function"==typeof l.callback&&(o=l.callback(o)),o.length){var s=i(e.renderHtml(l.template,{list:o}));a.ele.append(s)}else a.ele.html('<li class="no-data">'+n.noData+"</li>");var r=a.ele.find(".waterfall-item").fadeIn(500);r.each(function(t,e){if(t<a.num)a.arrHeight[t]=i(e).outerHeight(!0),i(e).css({width:l.columnWidth,left:l.columnWidth*t+a.margin*(t%a.num)+2*l.padding*(t%a.num),top:0});else{var n=a.getMinHeight(a.arrHeight);i(e).css({width:l.columnWidth,left:l.columnWidth*n+a.margin*(n%a.num)+2*l.padding*(n%a.num),top:a.arrHeight[n]}),a.arrHeight[n]+=i(e).outerHeight(!0)}}),a.ele.height(Math.max.apply(null,a.arrHeight)),a.scroll()}})},scroll:function(){var t=this,a=t.config;i(window).on("scroll",function(){var e=parseFloat(i(window).height())+parseFloat(i(window).scrollTop());i(document).height()<=e+100&&t.flag&&a.params.page<t.pages&&(t.flag=!1,a.params.page++,t.loadList(a.params))})}},window.Waterfall=t,i.fn.daqWaterfall=function(i){var a=new t(this,i);a.init()}}(window.jQuery||$)},7:function(i,t){},8:function(i,t){},9:function(i,t){i.exports='{{#list}} <li class="item {{#active}}on{{/active}}" data-field="region" data-value="{{region}}">{{name}} </li> {{/list}}'},10:function(i,t){i.exports='{{#list}} <li class="item {{#active}}on{{/active}}" data-field="tag" data-value="{{id}}">{{title}} </li> {{/list}}'},11:function(i,t){i.exports='{{#list}} <li class="item {{#active}}on{{/active}}" data-field="tag" data-value="{{skey}}">{{name}} </li> {{/list}}'},12:function(i,t){i.exports='{{#list}} <li class="item" data-id="{{id}}"> <a href="./news-details.html?id={{id}}&channelCode={{channelCode}}"> <div class="item-hd p-scale {{^cover}}no-photo{{/cover}}"> {{#cover}} <img src="{{cover}}" alt=""/> {{/cover}} </div> <div class="item-bd"> <h2 class="title" title="{{title}}"><i></i>{{title}}</h2> <p class="content" title="{{summary}}">{{#summary}}{{summaryText}}{{/summary}}{{^summary}}未知{{/summary}}</p> </div> </a> </li> {{/list}}'},13:function(i,t,a){a(8);var e=a(3),n=(a(1),a(2)),l=a(9),o=a(10),s=a(11),r=a(5),c={loadClass:function(i){"pic"===i?$(".js_filter_class").daqCreateModule({url:e.picType,template:o,params:{},callback:function(i){var t=i.datas;return t.unshift({name:"全部",code:"",active:"on"}),t},complete:function(){var i=$(".js_filter_class li").length;i<2&&($(".filter-choose-class").hide(),$(".filter-wrap2").hide())}}):"scenery"===i&&$(".js_filter_class").daqCreateModule({url:e.sceneryType,template:s,params:{},callback:function(i){var t=i;return t.unshift({name:"全部",code:"",active:"on"}),t},complete:function(){var i=$(".js_filter_class li").length;i<2&&($(".filter-choose-class").hide(),$(".filter-wrap2").hide())}})},loadTravelList:function(){$(".js_travel_list").daqCreateModule({url:e.newsList,template:r,callback:function(i){return i}})},loadArea:function(){this.eventBind(),$(".js_filter_area").daqCreateModule({url:e.area,template:l,callback:function(i){return i.unshift({name:"全部",active:"on",region:n.region}),i}})},eventBind:function(i){$(".filter-wrap .filter-list:last-child").css("border","none")}};i.exports=c},25:function(i,t){},27:function(i,t,a){a(25),a(28)},28:function(i,t){!function(i){function t(t,a){this.ele=t,this.config={child:".waterfall-item",prevText:"上一页",nextText:"下一页",callback:function(){}},a&&i.isPlainObject(a)&&i.extend(this.config,a)}t.prototype={init:function(){this.eventBind()},eventBind:function(){var t=this,a=t.config;t.ele.on("click",a.child,function(){var e=i(this);t.index=e.index(),t.len=t.ele.find(a.child).length,t.render(),t.getparams(t.index)}),i("body").on("click",".dialog .prev",function(){t.prev()}),i("body").on("click",".dialog .next",function(){t.next()}),i("body").on("click",".dialog .mask,.dialog .dialog-hd",function(){t.hide()})},render:function(){var t='<div class="dialog"><div class="dialog-hd"><a href="javascript:;" class="daq-icon">&#xe6b8;</a></div><div class="dialog-bd"><img src="" /><p class="title mask"></p></div><div class="dialog-ft"><a href="javascript:;" class="prev daq-icon opacity">&#xe6b9;</a><a href="javascript:;" class="next daq-icon opacity">&#xe6ba;</a></div><div class="mask"></div></div>';i("body").append(t)},getparams:function(t){var a=this,e=a.config,n=a.ele.find(e.child).eq(t),l=n.find("img").attr("src"),o=n.find(".title").text(),s=i(".dialog").find("img"),r=i(".dialog").find(".title");s.attr("src",l),r.html(o),a.computeImgPosition(s),"function"==typeof e.callback&&e.callback(n)},computeImgPosition:function(t){i(".dialog .dialog-bd").css("width","auto");var a=i(window).height(),e=i(window).width(),n=t.width(),l=t.height(),o=n/l;l>=a&&(l=a-300,n=parseInt(l*o)),n>=e&&(n=e-300,l=parseInt(n/o)),i(".dialog .dialog-bd").animate({width:n,height:l,marginLeft:-(n+20)/2,marginTop:-(l+20)/2},200)},hide:function(){i(".dialog").hide(500,function(){i(this).remove()})},next:function(){var i=this;return!(i.index>=i.len-1)&&(i.index++,void i.getparams(i.index))},prev:function(){var i=this;return!(i.index<=0)&&(i.index--,void i.getparams(i.index))}},window.LightBox=t,i.fn.daqLightBox=function(i){var a=new t(this,i);a.init()}}(window.jQuery||$)},45:function(i,t){},82:function(i,t){i.exports='{{#list}} <div class="waterfall-item" style="display:none" data-id="{{id}}"> <div class="waterfall-hd p-scale1"> <a href="javascript:;"> <img class="waterfall-img" src="{{url}}" alt="" width="{{width}}" height="{{height}}"/> </a> </div> <div class="waterfall-bd"> <h2 class="title" title="{{title}}">{{title}}</h2> <p class="operate"><span class="eyes"><i class="daq-icon">&#xe68a;</i><span class="num">{{viewCount}}</span> </span> </p> </div> </div> {{/list}}'},154:function(i,t,a){"use strict";a(45),a(6);var e=a(3),n=(a(1),a(82)),l={loadList:function(i,t){$(i).daqWaterfall({url:e.picList,template:n,columnWidth:285,padding:0,params:t,size:10,callback:function(i){for(var t=this.padding,a=this.columnWidth-2*t,e=0;e<i.length;e++)i[e].index=e,i[e].height=parseInt(i[e].height*(a/i[e].width)),i[e].width=a;return i}})}};i.exports=l},194:function(i,t,a){"use strict";var e=a(2),n=e.pages.picList;a(4);var l=a(1),o=a(13),s=a(3),r=a(154);a(27);var c={init:function(){this.loadFilter(),this.loadList(),this.eventBind()},loadFilter:function(){$(".nav > li").eq(1).addClass("active2"),o.loadArea()},eventBind:function(){var i=n;$(".js_filter").on("click","li",function(){var t=$(this);return!t.hasClass("on")&&(!!$(".js_pic").attr("data-flag")&&(t.addClass("on").siblings().removeClass("on"),i[t.attr("data-field")]=t.attr("data-value"),void r.loadList(".js_pic",i)))}),$(".js_pic").on("click",".js_like",function(i){i.stopPropagation();$(this)}),$(".js_pic").daqLightBox({child:".waterfall-item",title:".title",src:".waterfall-img",callback:function(i){var t=i.data("id"),a=i.find(".eyes .num");$("").daqCreateModule({url:s.vadeoPlay(),params:{reId:t,sourceType:"picture"},callback:function(i){return a.text(parseInt(a.text())+1),i}})}})},loadList:function(){r.loadList(".js_pic",n)}};$(function(){c.init()}),window.onload=function(){var i=l.getUrlParam("id");$(".js_pic .waterfall-item").each(function(){var t=$(this),a=t.attr("data-id");i===a&&t.click()})}}});