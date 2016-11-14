/**
 * Created by zhengdai on 2016/11/14.
 */
$(function () {
    $(window).on('resize', function () {
        $('#banner1').height($(this).height());
    });
    $(window).trigger('resize');
});