$('document').ready(function () {
    $('#resetPasswordDiv').hide();
})

$('#getProfileByPhoneBtn').click(function () {
    if ($('#PhoneNumber').val().length == "") {
        $('#PhoneNumber').focus();
        makeAlert('warning', 'Valid Password Required');
        return false;
    }

    var data = {};

    data.PhoneNumber = $('#PhoneNumber').val();

    console.log(data);
    makeAjax(MAIN_API_IRL+'Profiles/GetProfileByPhone', 'POST', getProfileByPhoneResponse, data);
})

function getProfileByPhoneResponse(data) {
    console.log(data);
}

$('#resetPasswordBtn').click(function () {
    if ($('#Password').val().length == "") {
        $('#Password').focus();
        makeAlert('warning', 'Valid Password Required');
        return false;
    }
    if ($('#confirmPassword').val().length == "") {
        $('#confirmPassword').focus();
        makeAlert('warning', 'Please confirm your password');
        return false;
    }

    var Password = $('#Password').val();
    var confirmPassword = $('#confirmPassword').val();
    if ((Password) != (confirmPassword)) {
        $('#confirmPassword').focus();
        makeAlert('warning', 'Password does not match with  Confirm Password');
        return false;
    }
    Verificationcode = generateBookingNo().substring(0, 6);
    var data = {};

    data.Password = $('#Password').val();

    console.log(data);
    makeAjax(MAIN_API_IRL+'GetProfileByPhone', 'POST', getProfileByPhoneResponse, data);
})
