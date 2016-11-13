/**
 * Created by zhengdai on 16/7/30.
 */
(function($){
    "use strict";
    $.fn.tab = function(opt){
        var o = $.extend({
                tabTopWrap: '.tab-top',
                tabTop: 'li',
                tabHeaderWrap: ".tab-nav",
                tabHeader: "li",
                tabBodyWrap: ".tab-body",
                tabBody: "li",
                curClass: "cur",
                speed: 500,
                startIndex: 0,
                touchAnimation: false
            }, opt),
            curIndex = o.startIndex,
            $this = $(this),
            $tab = $this,
            $tabTopWrap = $(o.tabTopWrap, $tab),
            $tabTops = $(o.tabTop, $tabTopWrap),
            $tabHeaderWrap = $(o.tabHeaderWrap, $tab),
            $tabHeaders = $(o.tabHeader, $tabHeaderWrap),
            $tabBodyWrap = $(o.tabBodyWrap, $this),
            $tabBodys = $(o.tabBody, $tabBodyWrap),
            len = $tabHeaders.length,
            width = $tabBodyWrap.width();

        function init() {
            function change(index) {
                var
                    transition = 0,
                    startX = 0;

                if (index < 0) {
                    index = 0;
                }

                if (index >= len) {
                    index = len - 1;
                }

                curIndex = index;
                transition = -(index * width) + "px";
                $tabHeaders.removeClass(o.curClass).eq(index).addClass(o.curClass);
                var css = {
                    '-webkit-transform':'translate('+ transition +')',
                    'transform':'translate('+ transition +')',
                    '-webkit-transition': o.speed + 'ms linear',
                    'transition': o.speed + 'ms linear'
                };
                var noTransitionCss = {
                    '-webkit-transform':'translate('+ transition +')',
                    'transform':'translate('+ transition +')'
                };
                $tabTopWrap.css(noTransitionCss);
                $tabBodyWrap.css(noTransitionCss);
            }
            $tab.addClass("tab");
            $tabTopWrap.addClass("tab-top");
            $tabTops.addClass("tab-top-li");
            $tabHeaderWrap.addClass("tab-header");
            $tabHeaders.addClass("tab-header-li");
            $tabBodyWrap.addClass("tab-body");
            $tabBodys.addClass("tab-body-li");

            $tabTopWrap.width(width * len);
            $tabTops.width(width);
            $tabBodyWrap.width(width * len);
            $tabBodys.width(width);

            $tabHeaders.click(function(){
                change($(this).index());
            });

            $(window).on("resize", function (e) {
                $tabBodyWrap.css("display", "none");
                width = $tab.width();
                $tabBodyWrap.width(width * len);
                $tabBodys.width(width);
                $tabBodyWrap.css("display", "block");
                change(curIndex);
            });

            change(curIndex);
        }

        init();
        return this;
    };
})(Zepto);