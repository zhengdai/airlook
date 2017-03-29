/**
 * Created by zhengdai on 16/7/30.
 */
$(function() {
    FastClick.attach(document.body);
    var $menu = $('#topMenu');
    var $header = $('header');
    var $subMenu = $('.sub-menu');
    var $menuBtn = $('#menuBtn');
    var $subBtn = $('.sub-btn');
    $menuBtn.click(function () {
        $menu.addClass('show');
        $menuBtn.hide();
        return false;
    });

    $('#closeBtn').click(function () {
        $menu.removeClass('show');
        //$menuBtn.show();
        return false;
    });

    $('body').click(function () {
        $menu.removeClass('show');
    });

    $menu.on('transitionend', function () {
        if(!$menu.hasClass('show')){
            $menuBtn.show();
            $subBtn.removeClass('open');
            $subMenu.removeClass('show');
        }
    });
    $menu.on('webkitTransitionEnd', function () {
        if(!$menu.hasClass('show')){
            $menuBtn.show();
            $subBtn.removeClass('open');
            $subMenu.removeClass('show');
        }
    });

    $subMenu.on('transitionend', function () {
        console.log(this);
        console.log((new Date()).getTime());
    });

    $subBtn.click(function () {
        var $this = $(this);
        if ($this.hasClass('open')) {
            $this.removeClass('open');
        } else {
            $subBtn.removeClass('open');
            $this.parent().siblings().find('.sub-menu').removeClass('show');
            $this.addClass('open');
        }
        $this.next().toggleClass('show');
        return false;
    });

    if ( $('.tabscontent')[0]) {
        $('.tabscontent').tabbedContent({
            history: false
        });
    }

    if ($('#picContainer')[0]) {
        var swiper = new Swiper('#picContainer', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: '8%',
            loop: true,
            nextButton: '.pic-swiper-button-next',
            prevButton: '.pic-swiper-button-prev'
        });
    }

    if ($('#softwareContainer')[0]) {
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
    }
});