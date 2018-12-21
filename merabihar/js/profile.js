$('document').ready(function () {
    makeAjax(API_IRL + 'Profiles/' + aid, 'GET', getProfile);
    makeAjax(API_IRL + 'Contents/GetContentByProfileId/' + aid, 'GET', GetContentByProfileIdForAdmin);

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
$("#uploadFile").change(function () {
    $('#image_preview').html("");
    var total_file = document.getElementById("uploadFile").files.length;


    for (var i = 0; i < total_file; i++) {
        $('#image_preview').append("<img src='" + URL.createObjectURL(event.target.files[i]) + "'>");
    }


});
var profileFullName;
var ProfilePhoto;
var Prefix; // description
var profileData;

function getProfile(data) {
    profileData = data;
    console.log(data);
    profileFullName = data.FullName;

    Prefix = data.Prefix;
    if(data.ProfilePhoto == null){
        ProfilePhoto = 'img/noprofileimage.png';
    }else{
        ProfilePhoto = data.ProfilePhoto;
    }
    $('#profileFullName').text( data.FullName);
    $("#ShowProfilePhoto").attr("src", ProfilePhoto);
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


function GetContentByProfileIdForAdmin(data) {
    console.log(data);
    $('#ProfilePostsforProfile').empty();
    data.reverse();
    $('#posts').html(data.length +' Posts');
    var contentRow  = '';
    for (i=0;i<data.length;i++){
        if(data[i].ContentType != 'Image'){
            contentRow += '<div id="ContentCard_'+data[i].ContentId+'" class=" " style="cursor: pointer;">';
            contentRow += '<div class="card" style="width: 18rem;">';
            contentRow += '<div class="card-body">';
            contentRow += ' <span  style="margin-top: -10px;"  onclick="getContentDeleteId('+data[i].ContentId+')" class="card-text float-right"><i class="fas fa-trash-alt"></i></span>';
            contentRow += '</div>';
            if(data[i].ContentURL != null){
                contentRow += '<iframe width="100%" height="250" src="https://www.youtube.com/embed/'+data[i].ContentURL+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            }else{
                contentRow += '<img style="min-height: 200px;" class="card-img-top" src="https://www.freeiconspng.com/uploads/no-image-icon-6.png" alt="Card image cap">';
            }
            // CategoriesRow +='<small></small>'

            contentRow += '</div>';
            contentRow += '</div>';
        }else{
            contentRow += '<div id="ContentCard_'+data[i].ContentId+'" class=" " style="cursor: pointer;" >';
            contentRow += '<div class="card" style="width: 18rem;">';
            contentRow += '<div class="card-body">';
            contentRow += ' <span style="cursor: pointer;margin-top: -10px;" onclick="getContentDeleteId('+data[i].ContentId+')" class="card-text float-right"><i class="fas fa-trash-alt"></i></span>';
            contentRow += '</div>';
            if(data[i].contentImage.length != 0){
                contentRow += '<img onclick="getContentsId('+data[i].ContentId+')" style="cursor: pointer;min-height: 200px;" class="card-img-top" src="'+data[i].contentImage[0].Images+'" alt="Card image cap">';
            }else{
                contentRow += '<img onclick="getContentsId('+data[i].ContentId+')" style="cursor: pointer;min-height: 200px;" class="card-img-top" src="https://www.freeiconspng.com/uploads/no-image-icon-6.png" alt="Card image cap">';
            }
            contentRow += '</div>';
            contentRow += '</div>';
        }


    }
    $('#ProfilePostsforProfile').append(contentRow);
}


function getContentDeleteId(data) {
    var r = confirm("Are you sure you want to Delete ");
    if (r == true) {
        console.log(data);
        makeAjax(API_IRL + 'Contents/' + data, 'DELETE', deleteContentResponse);
    }
}

function deleteContentResponse(data) {
    $('#ContentCard_'+data.ContentId).remove();
    // console.log(data);
}