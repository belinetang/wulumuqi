webpackJsonp([18],{0:function(a,t,e){a.exports=e(214)},5:function(a,t,e){"use strict";e(7),e(6);var i=e(2),l=e(1),n=e(3),s=e(12),o=(i.pages.travelStrategyList,{loadList:function(a,t){$(a).daqCreateModule({url:n.newsListRecursion+"?channelCode="+l.getUrlParam("channelCode"),template:s,pagination:!0,columnWidth:590,padding:25,params:t,limits:3,curr:1,size:6,loading:!0,callback:function(a){console.log(a);for(var t=0;t<a.length;t++)a[t].channelCode=l.getUrlParam("channelCode"),a[t].titles=a[t].title,a[t].cover?(a[t].height=163,a[t].title=l.ellipsisContent(a[t].title,15)):a[t].title=l.ellipsisContent(a[t].title,25),a[t].summary=l.ellipsisContent(a[t].summary,82);return a}})}});a.exports=o},6:function(a,t,e){var i=e(1),l=e(2);!function(a){function t(t,e){this.ele=t,this.config={template:"",url:"",columnWidth:0,padding:0,params:{},size:10,curr:1},e&&a.isPlainObject(e)&&a.extend(this.config,e)}t.prototype={init:function(){var t=this,e=t.config,i=t.ele.outerWidth(!0);e.params.page=1,e.params.pageSize=e.size,t.flag=!1,a(window).off("scroll"),t.ele.removeAttr("data-flag"),t.ele.html("").css("height","auto"),a(".loading,.no-more").remove(),t.arrHeight=[],t.num=Math.floor(i/e.columnWidth),t.margin=Math.floor((i-t.num*e.columnWidth)/(t.num-1)),e.columnWidth=e.columnWidth-2*e.padding,t.loadList(e.params)},getMinHeight:function(a){var t=Math.min.apply(null,a);for(var e in a)if(a[e]===t)return e},loadLoading:function(){var a=this;a.ele.append('<div class="loading"><i class="loading-ic"></i>'+l.loading()+"</div>")},loadList:function(t){var e=this,n=e.config;i.request({url:n.url,data:t,beforeSend:function(){e.ele.find(".loading")&&e.loadLoading()},success:function(t){e.ele.attr("data-flag","true"),e.ele.find(".loading").remove(),e.flag=!0,t.page&&(e.pages=t.page.totalPage,n.params.page=t.page.currPage),e.pages<=n.params.page&&e.ele.after('<div class="no-more">对不起，没有更多了</div>');var s=t.datas;if("function"==typeof n.callback&&(s=n.callback(s)),s.length){var o=a(i.renderHtml(n.template,{list:s}));e.ele.append(o)}else e.ele.html('<li class="no-data">'+l.noData+"</li>");var r=e.ele.find(".waterfall-item").fadeIn(500);r.each(function(t,i){if(t<e.num)e.arrHeight[t]=a(i).outerHeight(!0),a(i).css({width:n.columnWidth,left:n.columnWidth*t+e.margin*(t%e.num)+2*n.padding*(t%e.num),top:0});else{var l=e.getMinHeight(e.arrHeight);a(i).css({width:n.columnWidth,left:n.columnWidth*l+e.margin*(l%e.num)+2*n.padding*(l%e.num),top:e.arrHeight[l]}),e.arrHeight[l]+=a(i).outerHeight(!0)}}),e.ele.height(Math.max.apply(null,e.arrHeight)),e.scroll()}})},scroll:function(){var t=this,e=t.config;a(window).on("scroll",function(){var i=parseFloat(a(window).height())+parseFloat(a(window).scrollTop());a(document).height()<=i+100&&t.flag&&e.params.page<t.pages&&(t.flag=!1,e.params.page++,t.loadList(e.params))})}},window.Waterfall=t,a.fn.daqWaterfall=function(a){var e=new t(this,a);e.init()}}(window.jQuery||$)},7:function(a,t){},8:function(a,t){},9:function(a,t){a.exports='{{#list}} <li class="item {{#active}}on{{/active}}" data-field="region" data-value="{{region}}">{{name}} </li> {{/list}}'},10:function(a,t){a.exports='{{#list}} <li class="item {{#active}}on{{/active}}" data-field="tag" data-value="{{id}}">{{title}} </li> {{/list}}'},11:function(a,t){a.exports='{{#list}} <li class="item {{#active}}on{{/active}}" data-field="tag" data-value="{{skey}}">{{name}} </li> {{/list}}'},12:function(a,t){a.exports='{{#list}} <li class="item" data-id="{{id}}"> <a href="./news-details.html?id={{id}}&channelCode={{channelCode}}"> <div class="item-hd p-scale {{^cover}}no-photo{{/cover}}"> {{#cover}} <img src="{{cover}}" alt=""/> {{/cover}} </div> <div class="item-bd"> <h2 class="title" title="{{title}}"><i></i>{{title}}</h2> <p class="content" title="{{summary}}">{{#summary}}{{summaryText}}{{/summary}}{{^summary}}未知{{/summary}}</p> </div> </a> </li> {{/list}}'},13:function(a,t,e){e(8);var i=e(3),l=(e(1),e(2)),n=e(9),s=e(10),o=e(11),r=e(5),c={loadClass:function(a){"pic"===a?$(".js_filter_class").daqCreateModule({url:i.picType,template:s,params:{},callback:function(a){var t=a.datas;return t.unshift({name:"全部",code:"",active:"on"}),t},complete:function(){var a=$(".js_filter_class li").length;a<2&&($(".filter-choose-class").hide(),$(".filter-wrap2").hide())}}):"scenery"===a&&$(".js_filter_class").daqCreateModule({url:i.sceneryType,template:o,params:{},callback:function(a){var t=a;return t.unshift({name:"全部",code:"",active:"on"}),t},complete:function(){var a=$(".js_filter_class li").length;a<2&&($(".filter-choose-class").hide(),$(".filter-wrap2").hide())}})},loadTravelList:function(){$(".js_travel_list").daqCreateModule({url:i.newsList,template:r,callback:function(a){return a}})},loadArea:function(){this.eventBind(),$(".js_filter_area").daqCreateModule({url:i.area,template:n,callback:function(a){return a.unshift({name:"全部",active:"on",region:l.region}),a}})},eventBind:function(a){$(".filter-wrap .filter-list:last-child").css("border","none")}};a.exports=c},131:function(a,t){a.exports='{{#list}} <li class="item {{#active}}on{{/active}}" data-code="code" data-value="{{channelCode}}"> <a href="travel-strategy-list.html?channelCode={{channelCode}}">{{name}}</a> </li> {{/list}}'},214:function(a,t,e){"use strict";var i=e(2),l=i.pages.travelStrategyList;e(4);var n=e(5),s=e(13),o=e(1),r=e(3),c=e(131),d={init:function(){this.tagList(),$(".nav > li").eq(4).addClass("active4")},loadFilter:function(){var a=o.getUrlParam("channelCode");"ztly"===a?$(".nav > li").eq(4).addClass("active4"):"tsfqy"!==a&&"lxyj"!==a&&""!==a||$(".nav > li").eq(5).addClass("active5");var t=l;s.loadArea(),s.loadTravelList(l.code),$(".js_filter_tag").on("click","li",function(a){$(this).addClass("on").siblings().removeClass("on");var e=($(this).data("code"),$(this));t[e.attr("data-code")]=e.attr("data-value"),n.loadList(".js_travel_list",t)})},tagList:function(){var a=$(".js_filter_tag"),t=this;a.daqCreateModule({url:r.trafficList,template:c,loading:!0,size:3,params:{channelCode:"lygl"},callback:function(a){return a.unshift({name:"全部",channelCode:"lygl"}),a},complete:function(){var a=o.getUrlParam("channelCode");"lygl"===a?($(".js_filter_tag > li").eq(0).addClass("on").siblings().removeClass("on"),t.loadList({typeCode:"lygl"})):"zthd"===a?($(".js_filter_tag > li").eq(1).addClass("on").siblings().removeClass("on"),t.loadList({typeCode:"zthd"})):"tjlx"===a?($(".js_filter_tag > li").eq(2).addClass("on").siblings().removeClass("on"),t.loadList({typeCode:"tjlx"})):"ztly"===a&&($(".js_filter_tag > li").eq(3).addClass("on").siblings().removeClass("on"),t.loadList({typeCode:"ztly"}))}})},loadList:function(a){n.loadList(".js_travel_list",a)}};$(function(){d.init()})}});