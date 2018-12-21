/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var config = {
    apiKey: "AIzaSyAbHmhQnkUD3UcXq0ztbbc_e_DDjpF0R-8",
    authDomain: "hotel-management-1509781727224.firebaseapp.com",
    databaseURL: "https://hotel-management-1509781727224.firebaseio.com",
    projectId: "hotel-management-1509781727224",
    storageBucket: "hotel-management-1509781727224.appspot.com",
    messagingSenderId: "415720091200"
};
firebase.initializeApp(config);

$(document).ready(function () {
    $('#verifyDiv').hide();
})

$('#getotp').click(function () {
    if (isPhoneNumberValid()) {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        $('#verifyDiv').show();
        var number = getPhoneNumberWithCountryCode();
        console.log(number);
        firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier)
                .then(function (confirmationResult) {
                    $('#recaptcha-container').hide();
                    makeAlert('success', 'OTP Sent');
                    $('#getotp').attr('disabled', true);
                    $("#phone").attr("disabled", true);
                    $("#countryCode").attr("disabled", true);
                    window.confirmationResult = confirmationResult;
                    a(confirmationResult);
                });

    } else {
        $('#phone').focus();
        makeAlert('info', 'Please Enter Valid International format number');
        return false;
    }
})


var myFunction = function () {
    if (($('#verificationcode').val().trim().length) == 6) {
        $('#mainLoader').show();
        window.confirmationResult.confirm(document.getElementById("verificationcode").value)
                .then(function (result) {
//                alert('Auth Done');
                    makeAlert('success', 'Mobile Number Verified Successfully');
                    authStatus = 'true';
                    $('#getotp').hide();
                    $('#verifyDiv').hide();
                    
                    $('#mainLoader').hide();

                }, function (error) {
                    $('#mainLoader').hide();
                    $('#verificationcode').focus();
                    makeAlert('warning', 'Sorry you have entered wrong otp');
//                alert();
                    console.log(error);
                    authStatus = 'false';
                });
    } else {
        $('#verificationcode').focus();
        makeAlert('info', 'OTP must be in 6 digits');
    }

};