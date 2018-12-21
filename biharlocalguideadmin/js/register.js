$('document').ready(function () {
    $('#emailValidateDiv').hide();
})
var Verificationcode;

$('#registerBtn').click(function () {
    if (!($('#firstName').val()).match(VALID_NAME)) {
        $('#firstName').focus();
        makeAlert('warning', 'Valid Name Required');
        return false;
    }
    if (!($('#Email').val()).match(VALID_EMAIL)) {
        $('#Email').focus();
        makeAlert('warning', 'Valid Email Required');
        return false;
    }

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
    var data = {};
    data.Email = $('#Email').val();
    makeAjax(MAIN_API_IRL+'Profiles/GetProfileByEmail', 'POST', getProfileByEmailToCheckEmailExist, data);



})
function getProfileByEmailToCheckEmailExist(data) {
    console.log(data);
    if(data != ''){
        makeAlert('warning','Email alreay exist');
        $('#Email').focus();
        return false;
    }else {
        Verificationcode = generateBookingNo().substring(0, 6);
        var data = {};
        data.FullName = $('#firstName').val() + ' ' + $('#lastName').val();
        data.Email = $('#Email').val();
        data.Gender = $("input[name='Gender']:checked").val();
        data.PhoneNumber = $('#PhoneNumber').val();
        data.Password = $('#Password').val();
        data.UserRoleId = 2;
        data.Prefix = "";
        data.AuthType = "Normal";
        data.AuthId = "Normal";
        data.SignUpDate = getCurrentDate();
        data.Status = 'Active'

        console.log(data);
        makeAjax(MAIN_API_IRL+'Profiles', 'POST', getRegistrationResponse, data);

    }
}
function getRegistrationResponse(data) {
    console.log(data);
    alert('Registeration Done Successfully');
    window.location.reload();
}