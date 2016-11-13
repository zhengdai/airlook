/*
 * @fileoverview 页面功能
 * @author somebody
 * @date 2016/5/10
 */
$(function(){
    var surfaceStationsTabs = $("#surface_stations_tab1 li");
    var surfaceStationsPics = $("#surface_stations_pics1 li");
    var surfaceStationsTabContents = $("#surface_stations_tab_content1 li");

    surfaceStationsTabs.mouseover(function(){
        var _index = $(this).index();
        surfaceStationsPics.eq(_index).addClass("current").siblings().removeClass("current");
        surfaceStationsTabs.eq(_index).addClass("current").siblings().removeClass("current");
        surfaceStationsTabContents.eq(_index).addClass("current").siblings().removeClass("current");
    });

    var gotop = $("#gotop");
    window.onscroll = function(){
        var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.info( "_scrollTop:" , _scrollTop );
        var pageHeight = Math.max( document.body.offsetHeight , document.body.scrollHeight );
        var windowHeight = document.body.offsetHeight;
        // console.info( "pageHeight:" , pageHeight );
        // console.info( "windowHeight:" , windowHeight );
        var footerHeight = $(".footer").height();
        var deltaY = pageHeight - windowHeight;
        // console.info( "deltaY:" , deltaY );
        if( _scrollTop>600 && _scrollTop< deltaY ){
            gotop.css({"visibility":"hidden"});
            gotop.show();
            gotop.css({"bottom":"30px"});
            gotop.css({"visibility":"visible"});
            // console.info("aaa");
        }else if(_scrollTop==deltaY){
            gotop.css({"visibility":"hidden"});
            gotop.show();
            gotop.css({"bottom":"300px"});
            gotop.css({"visibility":"visible"});
            // console.info("bbb");
        }else{
            gotop.hide();
            // console.info("ccc");
        }
    };
    gotop.click(function(){
        // window.scrollTo(0,0);
        $("html,body").animate({scrollTop:0},800);
    });

    var openBtn = true;
    $(".header_home").click(function(){
        if( openBtn ){ //显示菜单
            $(".header-menu").show();
            $(".header_home .open").hide();
            $(".header_home .close").show();
            openBtn = false;
        }else{
            $(".header-menu").hide();
            $(".header_home .close").hide();
            $(".header_home .open").show();
            openBtn = true;
        }
    });
      
});