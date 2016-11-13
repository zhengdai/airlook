/*
 * @fileoverview 页面功能
 * @author somebody
 * @date 2016/5/10
 */
$(function(){
    var surfaceStationsTabs = $("#surface_stations_tab1 li");
    var surfaceStationsTabContents = $("#surface_stations_tab_content1 li");

    if( !!Swiper ){
      var tabsSwiper = new Swiper('.swiper-container',{
            speed:500,
            initialSlide :1,
            onSlideChangeStart: function(){
                surfaceStationsTabs.removeClass('current').eq(tabsSwiper.activeIndex).addClass('current')  
                surfaceStationsTabContents.eq(tabsSwiper.activeIndex).addClass("current").siblings().removeClass("current");
            }
        });
        surfaceStationsTabs.on('touchstart mousedown',function(e){
            e.preventDefault();
            surfaceStationsTabs.removeClass('current');
            $(this).addClass('current');
            tabsSwiper.swipeTo( $(this).index() );
        })
        surfaceStationsTabs.click(function(e){
            e.preventDefault();
        });
    }
      
});