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

    $subBtn.click(function () {
        $(this).toggleClass('open');
        $(this).next().toggleClass('show');
        return false;
    });
});