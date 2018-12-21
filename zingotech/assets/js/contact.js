$('#contactBtn').click(function () {
    if ($('#name').val().trim().length == '') {
        $('#name').focus();
        alert('Please enter valid name');
        return false;
    }
    if ($('#email').val().trim().length == '') {
        $('#email').focus();
        alert('Please enter valid email');
        return false;
    }
    if ($('#phone').val().trim().length == '') {
        $('#phone').focus();
        alert('Please enter valid phone no');
        return false;
    }
    if ($('#message').val().trim().length == '') {
        $('#message').focus();
        alert('Please enter valid message');
        return false;
    }
    var data = {};
    data.name = $('#name').val();
    data.email = $('#email').val();
    data.phone = $('#phone').val();
    data.message = $('#message').val();
    console.log(data);
    $('#loader').show();
    if (!($('#contactBtn').hasOwnProperty('disabled'))) {
        $('#contactBtn').prop('disabled', true);
    }
    $.ajax({
        url: 'mail/contact_me.php',
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function (data) {
            $('#loader').hide();
            console.log(data);
            if (data.status == 1)
                alert(data.message);
            else
                alert(data.message);
            $('#contactBtn').prop('disabled', false);
            location.reload();
        }
    }).fail(function () {
        console.log('fail');
        $('#loader').hide();
        $('#contactBtn').prop('disabled', false);
    }).done(function () {
        console.log('done');
        $('#loader').hide();
        $('#contactBtn').prop('disabled', false);
    })
})