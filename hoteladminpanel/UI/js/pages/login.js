/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var LOGIN_API_URL = MAIN_API_IRL + 'Profiles/GetProfileByUserNameAndPassword';
$('#loginbtn').click(function () {

    if ($('#username').val().trim().length == '') {
        $('#username').focus();
        alert('Enter the username');
        return false;
    }
    if ($('#password').val().trim().length == '') {
        $('#password').focus();
        alert('Enter the password');
        return false;
    }
    var username = $('#username').val();
    var password = $('#password').val();

    var data = JSON.stringify({
        "UserName": username,
        "Password": password
    });
    makeAjax(LOGIN_API_URL, 'POST', validateLogin, LOGIN_AUTH_TEST_KEY, data);
})

function validateLogin(data) {
    console.log(data);
    var authData = {};
    if (data == '') {
        alert('Sorry! Wrong username and password');
    } else {
        if (data[0].Status == 'Enabled') {
            authData = {
                "ProfileId": data[0].ProfileId,
                "UserName": data[0].UserName,
                "PhoneNumber" : data[0].PhoneNumber
            };
            saveData(authData,'authData');
            window.location.href = 'auth.php?authData=' + btoa(JSON.stringify(authData));
        } else {
            alert('Sorry your account is disabled!');
        }

    }
}