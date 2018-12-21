var Verificationcode;
$('#registerBtn').click(function () {

    if (!($('#FullName').val()).match(VALID_NAME)) {
        $('#FullName').focus();
        makeAlert('warning', 'Valid Name Required');
        return false;
    }

    if (!($('#Email').val()).match(VALID_EMAIL)) {
        $('#Email').focus();
        makeAlert('warning', 'Valid Email Required');
        return false;
    }
    if ($('#PhoneNumber').val().length == "") {
        $('#PhoneNumber').focus();
        makeAlert('warning', 'Valid PhoneNumber Required');
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
    makeAjax(API_IRL+'Profiles/GetProfileByEmail', 'POST', getProfileByEmailToCheckEmailExist, data);



})



function getProfileByEmailToCheckEmailExist(data) {
    // console.log(data);
    if(data != ''){
        makeAlert('warning','Email alreay exist');
        $('#Email').focus();
        return false;
    }else{
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
      var data = {};
      data.FullName = $('#FullName').val() ;
      data.Email = $('#Email').val();
      data.Gender = $("input[name='Gender']:checked").val();
      data.PhoneNumber = $('#PhoneNumber').val();
      data.Password = $('#Password').val();
      data.AuthType = 'Normal';
      data.AuthId = 'Normal';
      data.Status = 'Active';
      data.SignUpDate = getCurrentDate();
      data.UserRoleId = 1;

      // console.log(data);
      makeAjax(API_IRL+'Profiles', 'POST', getRegistrationResponse, data);
  }else{
      alert('Wrong code Entered');
  }
})


function getRegistrationResponse(data) {
    // console.log(data);
    var mailData = {};
    mailData.EmailAddress = "abhinav@zingohotels.com,sheetal12kamble@gmail.com";//notify email id
    mailData.Body = 'Hello,<br> Admin new user signin on BiharTourism Website. <br>Name : '+$('#FullName').val()+'<br><strong>Email :'+$('#Email').val()+'</strong><br><br> Thank You <br>BiharTourism';
    mailData.Subject = 'New user Sign on Bihar Tourism website';
    mailData.UserName = 'nishant@zingohotels.com';
    mailData.Password = 'zingo@123';
    mailData.FromName = 'BiharTourism';
    mailData.FromEmail = 'nishant@zingohotels.com';
    makeAjax(API_IRL+'Operation/SendInvoice', 'POST', newusersigninnotificationtoadmin, mailData);


}


function newusersigninnotificationtoadmin(data) {
    // console.log(data);
    alert('Registeration Done Successfully');
    window.location.href = "signup.php";
}
