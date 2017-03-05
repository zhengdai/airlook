/*
 * @fileoverview 页面功能
 * @author somebody
 * @date 2016/5/10
 */
$(function(){

    var aboutusBanner = $(".aboutus_banner");
    var aboutusBannerBg = $(".aboutus_banner_bg");

    setBanner();
    function setBanner(){
        var windowHeight = $(window).height();
        var aboutusBannerHeight = windowHeight * 0.6;
        if( windowHeight <= 500 ){
            aboutusBannerHeight = 500 * 0.6;
        }

        if( aboutusBanner.length > 0 ){
            aboutusBanner.css({"height": aboutusBannerHeight });
            aboutusBannerBg.css({"height": aboutusBannerHeight });
        }
    }

    var pageHeight = Math.max( document.body.offsetHeight , document.body.scrollHeight );
    var windowHeight = document.body.offsetHeight;
    var topBanner = $(".top_banner");
    topBanner.css( { "height" : windowHeight } );

    var homeBanner = $('.home-banner');
    homeBanner.height(windowHeight);
    window.addEventListener( "resize" , function(){
        var windowHeight = document.body.offsetHeight;
        topBanner.css( { "height" : windowHeight } );
        setBanner();
        homeBanner.height(windowHeight);
    } , false );

    var productIntroduce = $(".product_introduce");
    var redLine = $(".red_line");
    var whiteLine = $(".white_line");
    var dottedLine = $(".dotted_line");

    var topBannerHeight = topBanner.height();
    var productIntroduceHeight = productIntroduce.height();
    var scrollHeight1 = topBannerHeight + productIntroduceHeight ;

    var gotop = $("#gotop");
    var btn = true;
    window.addEventListener( "scroll" , function(){
        var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if( _scrollTop > scrollHeight1 && btn ){
            btn = false;
            redLine.animate({"opacity":1} , 800 , 'linear' , function(){
                whiteLine.animate({"width":237.5},1000,function(){
                    dottedLine.animate({"opacity":1},1000,function(){

                    });
                });
            });
        }


        if( gotop.length>0 ){
            pageHeight = Math.max( document.body.offsetHeight , document.body.scrollHeight );
            windowHeight = document.body.offsetHeight;
            var footerHeight = $(".footer").height();
            var deltaY = pageHeight - windowHeight;
            if( _scrollTop>600 && _scrollTop<= deltaY ){
                gotop.css({"visibility":"hidden"});
                gotop.show();
                gotop.css({"bottom":"30px"});
                gotop.css({"visibility":"visible"});
            } else if(_scrollTop==deltaY){
                gotop.css({"visibility":"hidden"});
                gotop.show();
                gotop.css({"bottom":"300px"});
                gotop.css({"visibility":"visible"});
            }else{
                gotop.hide();
            }
        }
    } , false );

    if( gotop.length>0 ){
        gotop.click(function(){
            $("html,body").animate({scrollTop:0},800);
        });
    }


    var headerMenus = $('.header-menu').find('a');
    var showBtn = false;
    var downMenu = $('.down-menu');
    headerMenus.mouseenter(function(){
        if( $(this).hasClass('first-menu') ){
            downMenu.hide();
            var id = $(this).attr('id');
            $('#' + id + 'Menu').show();
            showBtn = true;
        }else{
            downMenu.hide();
            showBtn = false;
        }
    }).mouseleave(function(){
        showBtn = false;
    });

    downMenu.mouseenter(function(){
        $(this).show();
    }).mouseleave(function(){
        var _this = this;
        if( !showBtn ){
            $(_this).hide();
        }
    });

    $('.tabscontent').tabbedContent({
        history: false
    });

    var swiper = new Swiper('#picContainer', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: '6.7%',
        loop: true,
        nextButton: '.pic-swiper-button-next',
        prevButton: '.pic-swiper-button-prev'
    });

    var navs = ['首页', '规划航线', '飞控设置'];

    var softwareSwiper = new Swiper('#softwareContainer', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        pagination: '.software-nav',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
            return '<li class="' + className + '"><span>' + navs[index] + '</span></li>';
        },
        onSlideChangeStart: function (swiper) {
            if (swiper.previousIndex % 3 === 0) {
                $('.arrow-wrap').removeClass('active');
            }
        },
        onSlideChangeEnd: function (swiper) {
            if (swiper.realIndex === 0) {
                $('.arrow-wrap').addClass('active');
            }
        }
    });


});