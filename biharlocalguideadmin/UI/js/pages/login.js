/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var LOGIN_API_URL = MAIN_API_IRL + 'Profiles/GetProfileByEmailAndPassword';
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
        "Email": username,
        "Password": password
    });
    makeAjaxForLogin(LOGIN_API_URL, 'POST', validateLogin, data);
})

function validateLogin(data) {
    console.log(data);
    if (data == "") {
        alert('Sorry! Wrong username and password');
    } else {
        if (data[0].UserRoleId == 1) {
            alert('Sorry ' + data[0].FullName + ' your are not authorised to logged in to this Panel ');
        } else {
            var authData = {};
            if (data == '') {
                alert('Sorry! Wrong username and password');
            } else {
                authData = {
                    "ProfileId": data[0].ProfileId,
                    "FullName": data[0].FullName,
                    "PhoneNumber": data[0].PhoneNumber,
                    "UserRoleId": data[0].UserRoleId
                };
                saveData(authData, 'authData');
                window.location.href = 'auth.php?authData=' + btoa(JSON.stringify(authData));


            }
        }

    }
}