/**
 * Created by zhengdai on 16/7/30.
 */
$(function () {
    var $banner = $('.banner');
    var $window = $(window);
    var $part2 = $('#part2');
    var $redRect = $('#redRect');
    var $whiteLine = $('#whiteLine');
    var $airLine = $('#airLine');
    var headerHeight = $('header').height();
    $window.on('resize', function () {
        $banner.height($window.height());
    });
    $window.trigger('resize');
    
    $('.air-icon').click(function () {
        $.scrollTo({
            endY: $banner.height() - headerHeight,
            duration: 800
        });
    });
    
    $window.on('scroll', function () {
        var window_height = $window.height(),
            part2_start = $part2.offset().top - window_height,
            part2_end = part2_start + 2 * window_height;
        var scroll_top = $window.scrollTop();

        if(scroll_top > part2_start && scroll_top < part2_end) {
            $redRect.animate({opacity: 1}, 800, 'linear', function () {
                $whiteLine.animate({width: '42.5%'}, 1000, function () {
                   $airLine.animate({opacity: 1}, 1000, function () {

                   });
                });
            });
        } else {
            $redRect.css({opacity: ''});
            $whiteLine.css({width: ''});
            $airLine.css({opacity: ''});
        }
    });
});