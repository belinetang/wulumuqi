webpackJsonp([42],{0:function(s,n,o){s.exports=o(187)},57:function(s,n){},187:function(s,n,o){"use strict";o(57),$(function(){i.init()});var i={init:function(){this.getHtmlDomNum()},getHtmlDomNum:function(){for(var s=$(".ddom").length,n=[],o=["丝绸之路国际滑雪场","水西沟白云滑雪场","蓝天滑雪场","南山阳光滑雪场","水磨沟灯光滑雪场","五棵松滑雪场"],i=0;i<s;i++)$(".menulistbox").append("<li class='menuli' name='.box"+(i+1)+"'>"+(i+1)+"<div class='menuli-titlebox'>"+o[i]+"</div></li>");$(".menuli").click(function(){var s=$(this).attr("name"),n=$(s).offset();$("body,html").animate({scrollTop:n.top})}),setTimeout(function(){for(var o=0;o<s;o++)n[o]=$(".ddom").eq(o).offset().top},0),$(window).scroll(function(o){for(var i=0;i<s;i++)$(window).scrollTop()>=n[i]+50&&$(window).scrollTop()<n[i+1]+50&&$(".menuli").eq(i).addClass("curr").siblings().removeClass("curr"),$(window).scrollTop()>n[s-1]&&$(".menuli").eq(s-1).addClass("curr").siblings().removeClass("curr"),$(window).scrollTop()>n[10]?($(".menulistbox").css("top","-500px").css("transition","300ms"),$(this).css("display","none"),$(".menuper").css("display","block")):($(".menulistbox").css("top","0px").css("transition","300ms"),$(this).css("display","none"),$(".menunext").css("display","block"))}),setTimeout(function(){s<11?($(".menunext").css("display","none"),$(".menuper").css("display","none")):$(".menuper").css("display","none")},0),$(".menunext").click(function(){$(".menulistbox").css("top","-500px").css("transition","300ms"),$(this).css("display","none"),$(".menuper").css("display","block")}),$(".menuper").click(function(){$(".menulistbox").css("top","0px").css("transition","300ms"),$(this).css("display","none"),$(".menunext").css("display","block")});var t,e=$(".gotopbox"),l=100;window.onscroll=function(){clearTimeout(t),t=setTimeout(function(){var s=l,n=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;s<=n?$(".floatmenubox").fadeIn(100):$(".floatmenubox").fadeOut(100)},100)},e.on("click",function(){$("html, body").animate({scrollTop:0},"slow")})}}}});