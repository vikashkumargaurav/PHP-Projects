// $(document).ready(function () {
//     var $el = $('.hotels').fadeIn(450);
//     $('#parent > div').not($el).hide();
//
// })
var $btns = $('.pbtn').click(function() {
    if (this.id == 'all') {
        $('#parent > div').fadeIn(450);
    } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('#parent > div').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
})