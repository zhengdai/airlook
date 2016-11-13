/*
 * @fileoverview 页面功能
 * @author somebody
 * @date 2016/5/10
 */
$(function(){var e=$("#surface_stations_tab1 li"),s=$("#surface_stations_pics1 li"),o=$("#surface_stations_tab_content1 li");e.mouseover(function(){var i=$(this).index();s.eq(i).addClass("current").siblings().removeClass("current"),e.eq(i).addClass("current").siblings().removeClass("current"),o.eq(i).addClass("current").siblings().removeClass("current")});var i=$("#gotop");window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop,s=Math.max(document.body.offsetHeight,document.body.scrollHeight),o=document.body.offsetHeight,t=($(".footer").height(),s-o);
// console.info( "deltaY:" , deltaY );
e>600&&t>e?(i.css({visibility:"hidden"}),i.show(),i.css({bottom:"30px"}),i.css({visibility:"visible"})):e==t?(i.css({visibility:"hidden"}),i.show(),i.css({bottom:"300px"}),i.css({visibility:"visible"})):i.hide()},i.click(function(){
// window.scrollTo(0,0);
$("html,body").animate({scrollTop:0},800)});var t=!0;$(".header_home").click(function(){t?(//显示菜单
$(".header-menu").show(),$(".header_home .open").hide(),$(".header_home .close").show(),t=!1):($(".header-menu").hide(),$(".header_home .close").hide(),$(".header_home .open").show(),t=!0)})});