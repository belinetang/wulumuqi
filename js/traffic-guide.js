webpackJsonp([23],{0:function(a,t,i){a.exports=i(210)},21:function(a,t,i){a.exports=i.p+"resource/dd_cli0.jpg"},22:function(a,t,i){a.exports=i.p+"resource/dd_cli1.jpg"},23:function(a,t,i){a.exports=i.p+"resource/dd_cli2.jpg"},37:function(a,t){},87:function(a,t){a.exports='{{#children}} <li class="item {{titleColor}}"> <a href="traffic-details.html?channelCode={{channelCode}}&anchor={{titleColor}}" title="{{name}}" class="traffic-list {{classNames}}"> {{#navImage}} <img src="{{.}}"/> {{/navImage}} {{^navImage}} <p class="no-photo"></p> {{/navImage}} <span></span> </a> <div class="traffic-content"> <a class="traffic-title"> <span class="daq-icon icon-plan">{{{ icon }}}</span> <span class="tit-name">{{name}}</span> </a> {{#summary}} <p class="traffic-text"> {{summary}} </p> {{/summary}} {{^summary}} <p class="traffic-text"> 暂无简介 </p> {{/summary}} <p class="ticket">{{ticketName}}</p> <p class="clearfix fw"> {{#ticketService}} {{#img}} <a href="{{url}}" class="fl" target="view_window"><img src="{{{ img }}}" alt="{{alt}}"/></a> {{/img}} {{/ticketService}} </p> <a href="traffic-details.html?channelCode={{channelCode}}&anchor={{titleColor}}" class="see-details">查看详情</a> </div> </li> {{/children}} {{^children}} <p class="error">很抱歉，暂时没有相关数据。</p> {{/children}}'},159:function(a,t,i){i(37);var c=i(87),e=i(3),l=i(1),r={trafficList:function(a,t){$(a).daqCreateModule({url:e.trafficList,template:c,params:t,callback:function(a){for(var t=["&#xe6aa;","&#xe6b4;","&#xe6b1;","&#xe6b5;","&#xe6ab;"],c=["机票预订","火车票预定及查询","公路与汽车服务","出租与汽车服务","市区公交服务"],e=[[{url:"http://www.ctrip.com/?utm_source=baidu&utm_medium=cpc&utm_campaign=baidu81&campaign=CHNbaidu81&adid=index&gclid=&isctrip=T",img:i(21),alt:""},{url:"http://www.qunar.com/?tab=hotel&ex_track=auto_4e0d874a",img:i(22),alt:""},{url:"http://www.elong.com/?semid=ppzqbaidu",img:i(23),alt:""}],[{url:"http://www.ctrip.com/?utm_source=baidu&utm_medium=cpc&utm_campaign=baidu81&campaign=CHNbaidu81&adid=index&gclid=&isctrip=T",img:i(21),alt:""},{url:"http://www.qunar.com/?tab=hotel&ex_track=auto_4e0d874a",img:i(22),alt:""},{url:"http://www.elong.com/?semid=ppzqbaidu",img:i(23),alt:""}],[{url:"http://www.ctrip.com/?utm_source=baidu&utm_medium=cpc&utm_campaign=baidu81&campaign=CHNbaidu81&adid=index&gclid=&isctrip=T",img:i(21),alt:""},{url:"http://www.qunar.com/?tab=hotel&ex_track=auto_4e0d874a",img:i(22),alt:""},{url:"http://www.elong.com/?semid=ppzqbaidu",img:i(23),alt:""}],[{url:"http://www.ctrip.com/?utm_source=baidu&utm_medium=cpc&utm_campaign=baidu81&campaign=CHNbaidu81&adid=index&gclid=&isctrip=T",img:i(21),alt:""},{url:"http://www.qunar.com/?tab=hotel&ex_track=auto_4e0d874a",img:i(22),alt:""},{url:"http://www.elong.com/?semid=ppzqbaidu",img:i(23),alt:""}],[]],r=0;r<a.children.length;r++)a.children[r].titleColor="color"+(r+1),a.children[r].channelCode=l.getUrlParam("channelCode"),a.children[r].icon=t[r],r%2===0?a.children[r].classNames="tg-fl":a.children[r].classNames="tg-fr",a.children[r].ticketName=c[r],a.children[r].ticketService=e[r],a.children[r].summary=l.ellipsisContent(a.children[r].summary,120);return a}})}};a.exports=r},210:function(a,t,i){"use strict";var c=i(2);i(4);var e=i(159),l=c.pages.trafficGuideList,r={_init:function(){this.loadList()},loadList:function(){e.trafficList(".js_traffic",l)}};$(function(){r._init()})}});