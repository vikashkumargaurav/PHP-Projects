$('document').ready(function () {
    makeAjax(API_IRL + 'Profiles/' + aid, 'GET', getProfile);

    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#ProfilePhoto').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#fileUpload").change(function () {
        readURL(this);
    });

})
var profileFullName;
var ProfilePhoto;
var Prefix; // description
var profileData;

function getProfile(data) {
    profileData = data;
    console.log(data);
    profileFullName = data.FullName;
    ProfilePhoto = data.ProfilePhoto;
    Prefix = data.Prefix;
    $('#profileFullName').text("Welcome " + data.FullName);
    $("#ShowProfilePhoto").attr("src", data.ProfilePhoto);
    $("#ShowBio").text(data.Prefix);   // bio show

}

$('#profleeditBtn').click(function () {
    $('#showProfileDiv').hide();
    $('#editProfileDiv').show();
    $("#ProfilePhoto").attr("src", ProfilePhoto);
    $('#FullName').val(profileFullName);
    $('#Prefix').val(Prefix); // bio edit
    $('#FullName').focus();
})

$('#profileupdateBtn').click(function () {
    if(!($('#FullName').val().match(VALID_NAME))){
        $('#FullName').focus();
        alert('FullName Required');
        return false;
    }
    if( document.getElementById("fileUpload").files.length == 0 ){
        console.log("no files selected");
        var data ={};
        var ProfileId = aid;
        data.ProfileId =aid;
        data.FullName = $('#FullName').val();
        data.Prefix = $('#Prefix').val();
        data.Email = profileData.Email;
        data.AuthType = profileData.AuthType;
        data.AuthId = profileData.AuthId;
        data.SignUpDate = profileData.SignUpDate;
        data.Status = profileData.Status;
        data.PhoneNumber = profileData.PhoneNumber;
        data.Password = profileData.Password;
        data.Gender = profileData.Gender;
        data.ProfilePhoto = profileData.ProfilePhoto;
        data.UserRoleId = profileData.UserRoleId;
        console.log(data);
        makeAjax(API_IRL+'Profiles/'+ProfileId,'PUT',getUpdateProfileStatus,data);

    }else{
        console.log(" files selected");
        var data = new FormData();
        var files = $("#fileUpload").get(0).files;
        // Add the uploaded image content to the form data collection
        if (files.length > 0) {
            data.append("ProfileImage", files[0]);

        }
        makeFileUploadAjax(API_IRL + "Upload/user/PostProfileImage", 'POST', getImgUpdateStatus, data);
    }


})

function getImgUpdateStatus(data) {
    console.log(data);
    var ProfilePhoto = data;
    if (ProfilePhoto != null) {
        var data ={};
        var ProfileId = aid;
        data.ProfileId =aid;
        data.FullName = $('#FullName').val();
        data.Prefix = $('#Prefix').val();
        data.AuthType = profileData.AuthType;
        data.AuthId = profileData.AuthId;
        data.Email = profileData.Email;
        data.PhoneNumber = profileData.PhoneNumber;
        data.SignUpDate = profileData.SignUpDate;
        data.Status = profileData.Status;
        data.Password = profileData.Password;
        data.Gender = profileData.Gender;
        data.ProfilePhoto = profileData.ProfilePhoto;
        data.UserRoleId = profileData.UserRoleId;
        data.ProfilePhoto = IMAGE_URL+''+ProfilePhoto;
        console.log(data);
        makeAjax(API_IRL+'Profiles/'+ProfileId,'PUT',getUpdateProfileStatus,data);
    } else {
        console.log('fail');
    }
}

function getUpdateProfileStatus(data) {
    console.log(data);
    alert('Profile Updated Successfully');
    window.location.reload();
}