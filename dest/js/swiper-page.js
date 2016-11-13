/*
 * @fileoverview 页面功能
 * @author somebody
 * @date 2016/5/10
 */
$(function(){var e=$("#surface_stations_tab1 li"),t=$("#surface_stations_tab_content1 li");if(Swiper){var n=new Swiper(".swiper-container",{speed:500,initialSlide:1,onSlideChangeStart:function(){e.removeClass("current").eq(n.activeIndex).addClass("current"),t.eq(n.activeIndex).addClass("current").siblings().removeClass("current")}});e.on("touchstart mousedown",function(t){t.preventDefault(),e.removeClass("current"),$(this).addClass("current"),n.swipeTo($(this).index())}),e.click(function(e){e.preventDefault()})}});