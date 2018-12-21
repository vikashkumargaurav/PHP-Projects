var LOGIN_API_URL = API_IRL + 'Profiles/GetProfileByEmailAndPassword';
$('#loginbtn').click(function () {

    if ($('#username').val().trim().length == '') {
        $('#username').focus();
        makeAlert('warning','Enter the username');
        return false;
    }
    if ($('#password').val().trim().length == '') {
        $('#password').focus();
        makeAlert('warning','Enter the password');
        return false;
    }
    var username = $('#username').val();
    var password = $('#password').val();

    var data = {
        "Email": username,
        "Password": password
    };
    makeAjax(LOGIN_API_URL, 'POST', validateLogin, data);
})

function validateLogin(data) {
    console.log(data);
    var authData = {};
    if (data == '') {
        // alert('Sorry! Wrong username and password');
        makeAlert('warning','Sorry! Wrong username and password');
    } else {
        authData = {
            "ProfileId": data[0].ProfileId,
            "FullName": data[0].FullName,
            "PhoneNumber" : data[0].PhoneNumber
        };
        saveData(authData,'authData');
        window.location.href = 'profiles/auth.php?authData=' + btoa(JSON.stringify(authData));


    }
}