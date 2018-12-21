$('document').ready(function () {
    makeAjax(MAIN_API_IRL + 'Profiles/' + aid, 'GET', getUserProfile);
    // makeAjax(MAIN_API_IRL + 'Cities', 'GET', getCitiesForNav);

})
var UserRoleId;
function getUserProfile(data) {
    // console.log(data);
    var aname = data.FullName;

    UserRoleId = data.UserRoleId;

    $('#Email').val(data.Email);
    $('#FullName').val(data.FullName);
    $('#PhoneNumber').val(data.PhoneNumber);
    $('#UserRoleId').val(data.UserRoleId);
    $('#Password').val(data.Password);
    $('#Gender').val(data.Gender);
    $('#ProfilePhoto').val(data.ProfilePhoto);

    $('#Prefix').val(data.Prefix);
    $('#AuthType').val(data.AuthType);
    $('#AuthId').val(data.AuthId);
    $('#SignUpDate').val(data.SignUpDate);
    $('#Status').val(data.Status);
    if (data.ProfilePhoto != '') {
        $('#ProfilePhotoDiv').prepend('<img class="card-img-top" src="' + data.ProfilePhoto + '" alt="Card image cap">');
    } else {
        $('#ProfilePhotoDiv').prepend('<img class="card-img-top" src="img/profile.png" alt="Card image cap">');
    }
    $.each(UserRoles, function (i, Roles) {
        console.log(Roles);
        if (Roles.UserRoleId == UserRoleId) {
            $('#UserRoleIdshow').text(Roles.UserRoleName);
            console.log(Roles.UserRoleName)
        }
    })

}


$('#profileupdateBtn').click(function () {
    if(!($('#FullName').val().match(VALID_NAME))){
        $('#FullName').focus();
        alert('FullName Required');
        return false;
    }
    if(!($('#Email').val().match(VALID_EMAIL))){
        $('#Email').focus();
        alert('Email Required');
        return false;
    }
    if($('#PhoneNumber').val().trim().length == ''){
        $('#PhoneNumber').focus();
        alert('PhoneNumber Required');
        return false;
    }
    if( document.getElementById("fileUpload").files.length == 0 ){
        console.log("no files selected");

        var data ={};
        var ProfileId = aid;
        data.ProfileId =aid;
        data.FullName = $('#FullName').val();
        data.Email = $('#Email').val();
        data.PhoneNumber = $('#PhoneNumber').val();
        data.Password = $('#Password').val();
        data.Gender = $('#Gender').val();
        data.ProfilePhoto = $('#ProfilePhoto').val();
        data.UserRoleId = $('#UserRoleId').val();

        data.Prefix = $('#Prefix').val();
        data.AuthType = $('#AuthType').val();
        data.AuthId = $('#AuthId').val();
        data.SignUpDate = $('#SignUpDate').val();
        data.Status = $('#Status').val();

        console.log(data);

        makeAjax(MAIN_API_IRL+'Profiles/'+ProfileId,'PUT',getUpdateProfileStatus,data);

    }else{
        console.log(" files selected");
        var data = new FormData();
        var files = $("#fileUpload").get(0).files;
        // Add the uploaded image content to the form data collection
        if (files.length > 0) {
            data.append("ProfileImage", files[0]);

        }
        makeFileUploadAjax(MAIN_API_IRL + "Upload/user/PostProfileImage", 'POST', getImgUpdateStatus, data);
    }


})

function getImgUpdateStatus(data) {
    // console.log(data);
    var ProfilePhoto = data;
    if (ProfilePhoto != null) {
        var data ={};
        var ProfileId = aid;
        data.ProfileId =aid;
        data.FullName = $('#FullName').val()
        data.Email = $('#Email').val();
        data.PhoneNumber = $('#PhoneNumber').val();
        data.Password = $('#Password').val();
        data.Gender = $('#Gender').val();
        data.ProfilePhoto = IMAGE_URL+''+ProfilePhoto;
        data.UserRoleId = $('#UserRoleId').val();

        data.Prefix = $('#Prefix').val();
        data.AuthType = $('#AuthType').val();
        data.AuthId = $('#AuthId').val();
        data.SignUpDate = $('#SignUpDate').val();
        data.Status = $('#Status').val();
        console.log(data);
        makeAjax(MAIN_API_IRL+'Profiles/'+ProfileId,'PUT',getUpdateProfileStatus,data);
    } else {
        console.log('fail');
    }
}

function getUpdateProfileStatus(data) {
    console.log(data);
    alert('Profile Updated Successfully');
    window.location.reload();
}