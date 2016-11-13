/*
 * @fileoverview 页面功能
 * @author somebody
 * @date 2016/5/10
 */
$(function(){
    var $underline = $('.underline'),
        $active = $('.active-link');
    var indicate = function indicate ($e) {
        var o = $e.offset(),
            w = $e.innerWidth(),
            l = o.left.toFixed(2);
        $underline.css({
            "left": l + "px",
            "width": w + "px"
        });
    };
    indicate($active);
    $underline.show();
    
    $('.lang').find('a').hover(function () {
        indicate($(this));
        $underline.addClass('on');
    }, function () {
        indicate($active);
        $underline.removeClass('on');
    });


    var surfaceStationsTabs = $("#surface_stations_tab1 li");
    var surfaceStationsPics = $("#surface_stations_pics1 li");
    var surfaceStationsTabContents = $("#surface_stations_tab_content1 li");
    var aboutusBanner = $(".aboutus_banner");
    var aboutusBannerBg = $(".aboutus_banner_bg");
    //var aboutusTitle = $(".aboutus_title");
    var productType = $(".product_type");
    var productTypeBg = $(".product_type_bg");
    //var productTypeTitle = $(".product_type_title");
    //var productTypeTitleWidth = productTypeTitle.width();
    //var productTypeTitleHeight = productTypeTitle.height();
    //var aboutusTitleWidth = aboutusTitle.width();
    //var aboutusTitleHeight = aboutusTitle.height();

    setBanner();
    function setBanner(){
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var aboutusBannerHeight = windowHeight * 0.6;
        //var aboutusTitleTop =400 / 1120 * aboutusBannerHeight;
        //var aboutusTitleLeft =780 / 3840 * windowWidth;
        //var screenRate = windowWidth / 1920;
        if( windowHeight <= 500 ){
            aboutusBannerHeight = 500 * 0.6;
            //aboutusTitleTop =400 / 1120 * aboutusBannerHeight;
            //aboutusTitleLeft =780 / 3840 * windowWidth;
        }
        
        if( aboutusBanner.length > 0 ){
            aboutusBanner.css({"height": aboutusBannerHeight });
            //aboutusTitle.css({ "left": aboutusTitleLeft , "top": aboutusTitleTop, "width": aboutusTitleWidth * screenRate,"height":aboutusTitleHeight * screenRate });
            // if( windowWidth<1170 ){
            //     aboutusBannerBg.css({"height": aboutusBannerHeight,"background-size":"cover" });
            // }else{
                aboutusBannerBg.css({"height": aboutusBannerHeight });
            // }
        }

        if( productType.length>0 ){
            productType.css({"height": aboutusBannerHeight });
            //productTypeTitle.css({ "left":aboutusTitleLeft , "top":aboutusTitleTop, "width": productTypeTitleWidth * screenRate , "height":productTypeTitleHeight * screenRate });
            // if( windowWidth<1170 ){
            //     productTypeBg.css({"height": aboutusBannerHeight,"background-size":"cover" });
            // }else{
                productTypeBg.css({"height": aboutusBannerHeight });
            // }
        }
    }

    // console.info( "surfaceStationsTabs: " , surfaceStationsTabs );
    if( surfaceStationsTabs.length>0 ){
        surfaceStationsTabs.mouseover(function(){
            var _index = $(this).index();
            surfaceStationsPics.eq(_index).addClass("current").siblings().removeClass("current");
            surfaceStationsTabs.eq(_index).addClass("current").siblings().removeClass("current");
            surfaceStationsTabContents.eq(_index).addClass("current").siblings().removeClass("current");
        });
    }

    var pageHeight = Math.max( document.body.offsetHeight , document.body.scrollHeight );
    var windowHeight = document.body.offsetHeight;
    // alert("windowHeight:" + windowHeight );
    // console.info( "windowHeight:" , windowHeight );
    $(".top_banner").css( { "height" : windowHeight } );

    window.addEventListener( "resize" , function(){
        var windowHeight = document.body.offsetHeight;
        $(".top_banner").css( { "height" : windowHeight } );
        setBanner();
        indicate($('.active-link'));
    } , false );


    var topBanner = $(".top_banner");
    var productIntroduce = $(".product_introduce");
    var redLine = $(".red_line");
    var whiteLine = $(".white_line");
    var dottedLine = $(".dotted_line");

    var topBannerHeight = topBanner.height();
    var productIntroduceHeight = productIntroduce.height();
    var scrollHeight1 = topBannerHeight + productIntroduceHeight ;
    // console.info("topBanner-height: " , topBannerHeight , typeof(topBannerHeight) , "productIntroduce-height: " , productIntroduceHeight , typeof(productIntroduceHeight) );

    var gotop = $("#gotop");
    var btn = true;
    window.addEventListener( "scroll" , function(){
        var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        if( _scrollTop > scrollHeight1 && btn ){
            console.info("滚动到指定位置！");
            btn = false;
            redLine.animate({"opacity":1} , 800 , 'linear' , function(){
                // var w=0;
                // var timer = setInterval(function(){
                //     if( w >= 237.5 ){
                //         clearInterval( timer );
                //         return;
                //     }else{   
                //         w +=1.9;
                //         whiteLine.css({"width":w});
                //     }
                // },20);
                whiteLine.animate({"width":237.5},1000,function(){
                    dottedLine.animate({"opacity":1},1000,function(){

                    });
                });
            });
        }


        if( gotop.length>0 ){

            pageHeight = Math.max( document.body.offsetHeight , document.body.scrollHeight );
            windowHeight = document.body.offsetHeight;
            // console.info( "_scrollTop:" , _scrollTop );
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
        }
    } , false );

    if( gotop.length>0 ){
        gotop.click(function(){
            // window.scrollTo(0,0);
            $("html,body").animate({scrollTop:0},800);
        });
    }

    // var openBtn = true;
    // $(".header_home").click(function(){
    //     if( openBtn ){ //显示菜单
    //         $(".header-menu").show();
    //         $(".header_home .open").hide();
    //         $(".header_home .close").show();
    //         openBtn = false;
    //     }else{
    //         $(".header-menu").hide();
    //         $(".header_home .close").hide();
    //         $(".header_home .open").show();
    //         openBtn = true;
    //     }
    // });
    var headerMenus = $(".header-menu a");
    var ak = $("#ak");
    var akMenu = $(".down-menu");
    var showBtn = false;
    headerMenus.mouseenter(function(){

        if( $(this).attr("id")=="ak" ){
            akMenu.show();
            showBtn = true;
        }else{
            akMenu.hide();
            showBtn = false;
        }
    }).mouseleave(function(){
        showBtn = false;
        // var timer = setTimeout(function(){
        //     clearTimeout( timer );
        //     akMenu.hide();
        // },200);
        // if( !showBtn ){
        //     $(this).hide();
        // }
    });

    akMenu.mouseenter(function(){
        $(this).show();
    }).mouseleave(function(){
        var _this = this;
        // $(_this).hide();
        if( !showBtn ){
            // var timer = setTimeout(function(){
                // clearTimeout( timer );
                $(_this).hide();
            // },200);
        }
    });
      
});