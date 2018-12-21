$(document).ready(function () {
    makeAjax(API_IRL + 'Profiles/' + ProfileId, 'GET', GetProfileByProfileId);
    makeAjax(API_IRL + 'Follow/GetFollowersAndNonFollowersByProfileId/' + ProfileId, 'GET', GetFollowersAndNonFollowersByProfileId);
    makeAjax(API_IRL + 'Contents/GetContentByProfileId/' + ProfileId, 'GET', GetContentByProfileId);
})

function GetProfileByProfileId(data) {
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

function GetFollowersAndNonFollowersByProfileId(data) {
    console.log(data);
    $('#Mefollowing').html(data.Followers.length);
    $('#MeFollowers').html(data.Following.length);
}


function GetContentByProfileId(data) {
    $('#ProfilePosts').empty();
    console.log(data);
    $('#posts').html(data.length);
    data.reverse();
    var contentRow  = '';
    for (i=0;i<data.length;i++){
        if(data[i].ContentType != 'Image'){
            contentRow += '<div class=" " style="cursor: pointer;" onclick="getContentsId('+data[i].ContentId+')">';
            contentRow += '<div class="card mb-2">';
            if(data[i].ContentURL != null){
                contentRow += '<iframe width="100%" height="250" src="https://www.youtube.com/embed/'+data[i].ContentURL+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            }else{
                contentRow += '<img style="min-height: 200px;" class="card-img-top" src="https://www.freeiconspng.com/uploads/no-image-icon-6.png" alt="Card image cap">';
            }
            // CategoriesRow +='<small></small>'
            contentRow += '</div>';
            contentRow += '</div>';
        }else{
            contentRow += '<div class=" " style="cursor: pointer;" onclick="getContentsId('+data[i].ContentId+')">';
            contentRow += '<div class="card mb-2">';
            if(data[i].contentImage.length != 0){
                contentRow += '<img style="min-height: 200px;" class="card-img-top" src="'+data[i].contentImage[0].Images+'" alt="Card image cap">';
            }else{
                contentRow += '<img style="min-height: 200px;" class="card-img-top" src="https://www.freeiconspng.com/uploads/no-image-icon-6.png" alt="Card image cap">';
            }
            contentRow += '</div>';
            contentRow += '</div>';
        }


    }
    $('#ProfilePosts').append(contentRow);
}