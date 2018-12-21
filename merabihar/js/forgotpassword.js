$(document).ready(function () {
    $('#ForgotPasswordforms').hide();
    $('#ChangePasswordforms').hide();
})

$('#forgotPasswordBtn').click(function () {
    $('#forms').hide();
    $('#ForgotPasswordforms').show();
})

var Verificationcode;
var forgetpasswordUserData;
$('#forgotpasswordbtn').click(function () {
    if (!($('#Email').val()).match(VALID_EMAIL)) {
        $('#Email').focus();
        makeAlert('warning', 'Valid Email Required');
        return false;
    }


    var data = {};
    data.Email = $('#Email').val();
    makeAjax(API_IRL+'Profiles/GetProfileByEmail', 'POST', getProfileByEmailToCheckEmailExist, data);



})

function getProfileByEmailToCheckEmailExist(data) {
    console.log(data);
    forgetpasswordUserData = data;
    if(data != ''){
        Verificationcode = generateVerificationCode(6);
        var mailData = {};
        mailData.EmailAddress = $('#Email').val();
        mailData.Body = 'Please Verify Your Email code : '+Verificationcode;
        mailData.Subject = 'User SignIn verify';
        mailData.UserName = 'nishant@zingohotels.com';
        mailData.Password = 'zingo@123';
        mailData.FromName = 'BiharTourism';
        mailData.FromEmail = 'nishant@zingohotels.com';

        makeAjax(API_IRL+'Operation/SendInvoice', 'POST', sendVerifyCode, mailData);
    }else{
        makeAlert('warning','Email not exist');
        $('#Email').focus();
        return false;
    }
}
$('#resentCodeBtn').click(function () {
    if (!($('#Email').val()).match(VALID_EMAIL)) {
        $('#Email').focus();
        alert( 'Valid Email Required');
        return false;
    }
    Verificationcode = generateVerificationCode(6);
    var mailData = {};
    mailData.EmailAddress = $('#Email').val();
    mailData.Body = 'Please Verify Your Email code : '+Verificationcode;
    mailData.Subject = 'User SignIn verify';
    mailData.UserName = 'nishant@zingohotels.com';
    mailData.Password = 'zingo@123';
    mailData.FromName = 'BiharTourism';
    mailData.FromEmail = 'nishant@zingohotels.com';

    makeAjax(API_IRL+'Operation/SendInvoice', 'POST', sendVerifyCode, mailData);
})


function sendVerifyCode(data) {
    // console.log(data);
    makeAlert('success','Code Send ');
    $("#verifyCodeModel").modal('show');
}

$('#verifyEmailBtn').click(function () {
    if(($('#code').val())==Verificationcode){
        $('#ForgotPasswordforms').hide();
        $('#ChangePasswordforms').show();
        $('#closemodelbtn').click();
    }else{
        alert('Wrong code Entered');
    }
})


function getRegistrationResponse(data) {
    // console.log(data);
    var mailData = {};
    mailData.EmailAddress = "abhinav@zingohotels.com,sheetal12kamble@gmail.com";//notify email id
    mailData.Body = 'Hello,<br> Admin new user signin on Mera Bihar Website. <br>Name : '+$('#FullName').val()+'<br><strong>Email :'+$('#Email').val()+'</strong><br><br> Thank You <br>MeraBihar';
    mailData.Subject = 'New user Sign on Mera Bihar website';
    mailData.UserName = 'nishant@zingohotels.com';
    mailData.Password = 'zingo@123';
    mailData.FromName = 'BiharTourism';
    mailData.FromEmail = 'nishant@zingohotels.com';
    makeAjax(API_IRL+'Operation/SendInvoice', 'POST', newusersigninnotificationtoadmin, mailData);


}


$('#changenewpasswordbtn').click(function () {
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
    data.ProfileId = forgetpasswordUserData[0].ProfileId;
    data.AuthId = forgetpasswordUserData[0].AuthId;
    data.AuthType = forgetpasswordUserData[0].AuthType;
    data.Email = forgetpasswordUserData[0].Email;
    data.FullName = forgetpasswordUserData[0].FullName;
    data.Gender = forgetpasswordUserData[0].Gender;
    data.Password = $('#Password').val();
    data.PhoneNumber = forgetpasswordUserData[0].PhoneNumber;
    data.Prefix = forgetpasswordUserData[0].Prefix;
    data.SignUpDate = forgetpasswordUserData[0].SignUpDate;
    data.Status = forgetpasswordUserData[0].Status;
    data.UserRoleId = forgetpasswordUserData[0].UserRoleId;

    console.log(data);
    makeAjax(API_IRL+'Profiles/'+forgetpasswordUserData[0].ProfileId,'PUT',getUpdateProfileStatus,data);


})

function getUpdateProfileStatus(data) {
    console.log(data);
    alert('Password Updated Successfully');
    window.location.href = "login.php";
}

