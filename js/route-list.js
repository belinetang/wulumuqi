webpackJsonp([9],{0:function(a,e,t){a.exports=t(198)},5:function(a,e,t){"use strict";t(7),t(6);var i=t(2),l=t(1),n=t(3),s=t(12),o=(i.pages.travelStrategyList,{loadList:function(a,e){$(a).daqCreateModule({url:n.newsListRecursion+"?channelCode="+l.getUrlParam("channelCode"),template:s,pagination:!0,columnWidth:590,padding:25,params:e,limits:3,curr:1,size:6,loading:!0,callback:function(a){console.log(a);for(var e=0;e<a.length;e++)a[e].channelCode=l.getUrlParam("channelCode"),a[e].titles=a[e].title,a[e].cover?(a[e].height=163,a[e].title=l.ellipsisContent(a[e].title,15)):a[e].title=l.ellipsisContent(a[e].title,25),a[e].summary=l.ellipsisContent(a[e].summary,82);return a}})}});a.exports=o},6:function(a,e,t){var i=t(1),l=t(2);!function(a){function e(e,t){this.ele=e,this.config={template:"",url:"",columnWidth:0,padding:0,params:{},size:10,curr:1},t&&a.isPlainObject(t)&&a.extend(this.config,t)}e.prototype={init:function(){var e=this,t=e.config,i=e.ele.outerWidth(!0);t.params.page=1,t.params.pageSize=t.size,e.flag=!1,a(window).off("scroll"),e.ele.removeAttr("data-flag"),e.ele.html("").css("height","auto"),a(".loading,.no-more").remove(),e.arrHeight=[],e.num=Math.floor(i/t.columnWidth),e.margin=Math.floor((i-e.num*t.columnWidth)/(e.num-1)),t.columnWidth=t.columnWidth-2*t.padding,e.loadList(t.params)},getMinHeight:function(a){var e=Math.min.apply(null,a);for(var t in a)if(a[t]===e)return t},loadLoading:function(){var a=this;a.ele.append('<div class="loading"><i class="loading-ic"></i>'+l.loading()+"</div>")},loadList:function(e){var t=this,n=t.config;i.request({url:n.url,data:e,beforeSend:function(){t.ele.find(".loading")&&t.loadLoading()},success:function(e){t.ele.attr("data-flag","true"),t.ele.find(".loading").remove(),t.flag=!0,e.page&&(t.pages=e.page.totalPage,n.params.page=e.page.currPage),t.pages<=n.params.page&&t.ele.after('<div class="no-more">对不起，没有更多了</div>');var s=e.datas;if("function"==typeof n.callback&&(s=n.callback(s)),s.length){var o=a(i.renderHtml(n.template,{list:s}));t.ele.append(o)}else t.ele.html('<li class="no-data">'+l.noData+"</li>");var r=t.ele.find(".waterfall-item").fadeIn(500);r.each(function(e,i){if(e<t.num)t.arrHeight[e]=a(i).outerHeight(!0),a(i).css({width:n.columnWidth,left:n.columnWidth*e+t.margin*(e%t.num)+2*n.padding*(e%t.num),top:0});else{var l=t.getMinHeight(t.arrHeight);a(i).css({width:n.columnWidth,left:n.columnWidth*l+t.margin*(l%t.num)+2*n.padding*(l%t.num),top:t.arrHeight[l]}),t.arrHeight[l]+=a(i).outerHeight(!0)}}),t.ele.height(Math.max.apply(null,t.arrHeight)),t.scroll()}})},scroll:function(){var e=this,t=e.config;a(window).on("scroll",function(){var i=parseFloat(a(window).height())+parseFloat(a(window).scrollTop());a(document).height()<=i+100&&e.flag&&t.params.page<e.pages&&(e.flag=!1,t.params.page++,e.loadList(t.params))})}},window.Waterfall=e,a.fn.daqWaterfall=function(a){var t=new e(this,a);t.init()}}(window.jQuery||$)},7:function(a,e){},8:function(a,e){},9:function(a,e){a.exports='{{#list}} <li class="item {{#active}}on{{/active}}" data-field="region" data-value="{{region}}">{{name}} </li> {{/list}}'},10:function(a,e){a.exports='{{#list}} <li class="item {{#active}}on{{/active}}" data-field="tag" data-value="{{id}}">{{title}} </li> {{/list}}'},11:function(a,e){a.exports='{{#list}} <li class="item {{#active}}on{{/active}}" data-field="tag" data-value="{{skey}}">{{name}} </li> {{/list}}'},12:function(a,e){a.exports='{{#list}} <li class="item" data-id="{{id}}"> <a href="./news-details.html?id={{id}}&channelCode={{channelCode}}"> <div class="item-hd p-scale {{^cover}}no-photo{{/cover}}"> {{#cover}} <img src="{{cover}}" alt=""/> {{/cover}} </div> <div class="item-bd"> <h2 class="title" title="{{title}}"><i></i>{{title}}</h2> <p class="content" title="{{summary}}">{{#summary}}{{summaryText}}{{/summary}}{{^summary}}未知{{/summary}}</p> </div> </a> </li> {{/list}}'},13:function(a,e,t){t(8);var i=t(3),l=(t(1),t(2)),n=t(9),s=t(10),o=t(11),r=t(5),c={loadClass:function(a){"pic"===a?$(".js_filter_class").daqCreateModule({url:i.picType,template:s,params:{},callback:function(a){var e=a.datas;return e.unshift({name:"全部",code:"",active:"on"}),e},complete:function(){var a=$(".js_filter_class li").length;a<2&&($(".filter-choose-class").hide(),$(".filter-wrap2").hide())}}):"scenery"===a&&$(".js_filter_class").daqCreateModule({url:i.sceneryType,template:o,params:{},callback:function(a){var e=a;return e.unshift({name:"全部",code:"",active:"on"}),e},complete:function(){var a=$(".js_filter_class li").length;a<2&&($(".filter-choose-class").hide(),$(".filter-wrap2").hide())}})},loadTravelList:function(){$(".js_travel_list").daqCreateModule({url:i.newsList,template:r,callback:function(a){return a}})},loadArea:function(){this.eventBind(),$(".js_filter_area").daqCreateModule({url:i.area,template:n,callback:function(a){return a.unshift({name:"全部",active:"on",region:l.region}),a}})},eventBind:function(a){$(".filter-wrap .filter-list:last-child").css("border","none")}};a.exports=c},44:function(a,e){},84:function(a,e){a.exports='{{#list}} <li class="item" data-id="{{id}}"> <div class="item-hd {{^cover}}no-photo{{/cover}}"> <a href="./news-details.html?id={{id}}&channelCode={{channelCode}}"> {{#cover}} <img src="{{cover}}" alt=""/> {{/cover}} </a> </div> <div class="item-bd"> <div class="post-hd"> <a title="{{title}}" href="./news-details.html?id={{id}}&channelCode={{channelCode}}" class="hotel-title"><h2 class="title">{{title}}</h2></a> <div class="post-time-source"> <span>文章来源：{{#src}}{{src}}{{/src}}{{^src}}未知{{/src}}</span><span>作者：{{#author}}{{author}}{{/author}}{{^author}}未知{{/author}}</span><span>发布时间：{{createTime}}</span> </div> </div> <div class="post-bd"> {{#summary}} {{{summarys}}} {{/summary}} {{^summary}} 未知 {{/summary}} </div> <div class="post-ft"> <span><i class="daq-icon">&#xe68a;</i>{{viewCount}}</span> <span class="js_like like"><i class="daq-icon">&#xe680;</i><span class="num">{{praiseCount}}</span></span> </div> </div> </li> {{/list}}'},156:function(a,e,t){"use strict";t(44);var i=t(3),l=t(1),n=t(84),s={loadList:function(a,e){$(a).daqCreateModule({url:i.newsList+"?channelCode="+l.getUrlParam("channelCode"),template:n,pagination:!0,size:6,curr:1,limits:3,params:e,loading:!0,callback:function(a){for(var e=0;e<a.length;e++)a[e].summarys=l.ellipsisContent(a[e].summary,160),a[e].channelCode=l.getUrlParam("channelCode");return a}})}};a.exports=s},198:function(a,e,t){"use strict";var i=t(2),l=(t(1),i.pages.routeList);t(4);var n=t(13),s=t(156),o={init:function(){this.loadFilter(),this.loadList(),this.eventBind()},eventBind:function(){var a=l;$(".js_filter").on("click","li",function(){var e=$(this);e.addClass("on").siblings().removeClass("on"),a[e.attr("data-field")]=e.attr("data-value"),s.loadList(".js_list",a)}),$(".js_list").on("click",".js_like",function(){var a=$(this);a.daqInteraction({resourceId:a.parents(".item").data("id"),type:"praise",resourceType:"news"})})},loadFilter:function(){n.loadArea(),n.loadClass(l.typeCode)},loadList:function(){s.loadList(".js_list",l)}};$(function(){o.init()})}});