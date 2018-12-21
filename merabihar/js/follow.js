$(document).ready(function () {
    makeAjax(API_IRL + 'Follow/GetFollowersWithMappingByProfileId/' + aid, 'GET', GetFollowingWithMappingByProfileId);
    makeAjax(API_IRL + 'Follow/GetFollowingWithMappingByProfileId/' + aid, 'GET', GetFollowersWithMappingByProfileId);
    makeAjax(API_IRL + 'Follow/GetFollowersAndNonFollowersByProfileId/' + aid, 'GET', GetFollowersAndNonFollowersByProfileId);

    // makeAjax(API_IRL + 'GetSubcategoryByCityId/' + 2, 'GET', GetSubcategory);
    makeAjax(API_IRL + 'ProfileSubCategoryMappings/GetSubCategoryWithMappingByProfileId/' + aid, 'GET', GetSubCategoryWithMappingByProfileId);
    makeAjax(API_IRL + 'GetCategoriesByCityId/' + BiharCityId, 'GET', GetCategoriesByCityId);
    /// static city id for bihar need to change for merabihar

})
var GetProfileByUserRoleIdArray;
var GetFollowingByProfileIdArray;
var ProfileFollowingProfileId = [];
// id of profiles which is followed by this logger Profile


function GetFollowersWithMappingByProfileId(data) {
    // this is the follower with is following this profile
    console.log(data);
    Followers = data.length;
    $('#MeFollowers').html(Followers);
    var PeopleRow = '';
    for (i = 0; i < data.length; i++) {

        PeopleRow += '<div class="card" style="padding: 10px">';
        PeopleRow += ' <div class="row">';
        PeopleRow += '<div class="col-3 ">';
        if (data[i].Follows.ProfilePhoto == null) {
            PeopleRow += ' <img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="img/noprofileimage.png" alt="..." class="img-fluid">';
        } else {
            PeopleRow += ' <img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="' + data[i].Follows.ProfilePhoto + '" alt="..." class="img-fluid">';
        }

        PeopleRow += ' </div>';
        PeopleRow += '<div class="col-6 " style="padding: 10px;">';
        PeopleRow += ' <h3 onclick="getProfileId(' + data[i].Follows.ProfileId + ')" style="cursor: pointer;font-weight: 300" class="h5"><span>' + data[i].Follows.FullName + '</span></h3>';
        PeopleRow += ' </div>';
        PeopleRow += ' <div class="col-3 " style="padding: 10px;">';
        PeopleRow += '<a id="PeopleFollowing_' + data[i].ProfileId + '" onclick="getFollowingProfileId(' + data[i].Followers.ProfileId + ')" class=" btn btn-outline-primary ">Following</a>';
        PeopleRow += '</div>';
        PeopleRow += ' </div>';
        PeopleRow += '</div>';
    }

    $('#followersDiv').append(PeopleRow);
}

function GetFollowingWithMappingByProfileId(data) {
    console.log(data);
    following = data.length;
    $('#Mefollowing').html(following);
    // console.log(data);
    var FollowingRow = '';
    for (i = 0; i < data.length; i++) {
        if(data[i].Followers != null ){
            FollowingRow += '<div class="card" id="followingDiv_' + data[i].followMapping.FollowId + '" style="padding: 10px">';
            FollowingRow += ' <div class="row">';
            FollowingRow += '<div class="col-3 ">';
            if (data[i].Followers.ProfilePhoto == null) {
                FollowingRow += ' <img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="img/noprofileimage.png" alt="..." class="img-fluid">';
            } else {
                FollowingRow += ' <img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="' + data[i].Followers.ProfilePhoto + '" alt="..." class="img-fluid">';
            }
            FollowingRow += ' </div>';
            FollowingRow += '<div class="col-6 " style="padding: 10px;">';
            FollowingRow += ' <h3 onclick="getProfileId(' + data[i].Followers.ProfileId + ')" style="font-weight: 300;cursor:pointer;" class="h5"><span>' + data[i].Followers.FullName + '</span></h3>';
            FollowingRow += ' </div>';
            FollowingRow += ' <div class="col-3 " style="padding: 10px;">';
            FollowingRow += '<button class=" btn btn-outline-primary " onclick="deleteFollows(' + data[i].followMapping.FollowId + ')">Following</button>';
            FollowingRow += '</div>';
            FollowingRow += ' </div>';
            FollowingRow += '</div>';
        }

    }

    $('#followingDiv').append(FollowingRow);
}

function GetFollowersAndNonFollowersByProfileId(data) {
    console.log(data);
    var PeopleRow = '';
    for (i = 0; i < data.NonFollowers.length; i++) {
        if ((data.NonFollowers[i].ProfileId == aid) || (data.NonFollowers[i].UserRoleId != 1)) {
            continue;
        } else {
            PeopleRow += '<div class="card" style="padding: 10px">';
            PeopleRow += ' <div class="row">';
            PeopleRow += '<div class="col-3 ">';
            if (data.NonFollowers[i].ProfilePhoto == null) {
                PeopleRow += ' <img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="img/noprofileimage.png" alt="..." class="img-fluid">';
            } else {
                PeopleRow += ' <img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="' + data.NonFollowers[i].ProfilePhoto + '" alt="..." class="img-fluid">';
            }
            PeopleRow += ' </div>';
            PeopleRow += '<div class="col-6 " style="padding: 10px;">';
            PeopleRow += ' <h3 onclick="getProfileId(' + data.NonFollowers[i].ProfileId + ')" style="cursor:pointer;font-weight: 300" class="h5"><span>' + data.NonFollowers[i].FullName + '</span></h3>';
            PeopleRow += ' </div>';
            PeopleRow += ' <div class="col-3 " style="padding: 10px;">';
            PeopleRow += '<a id="PeopleFollow_' + data.NonFollowers[i].ProfileId + '"  onclick="getFollowProfileId(' + data.NonFollowers[i].ProfileId + ')" class=" btn btn-primary ">Follow</a>';
            PeopleRow += '</div>';
            PeopleRow += ' </div>';
            PeopleRow += '</div>';
        }
    }

    $('#peoplesDiv').append(PeopleRow);
}




function GetSubCategoryWithMappingByProfileId(data) {
    console.log(data);
    console.log(data);
    var ExperiencesRow = '';
    for (i = 0; i < data.length; i++) {
        ExperiencesRow += '<div class="card" id="subCategoriesFollowDiv_' + data[i].profilesubCatMapping.MappingId + '" style="padding: 10px">';
        ExperiencesRow += ' <div class="row">';
        ExperiencesRow += '<div class="col-3 ">';
        if (data[i].subCategory.SubCategoriesImage == null) {
            ExperiencesRow += ' <img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="img/noprofileimage.png" alt="..." class="img-fluid">';
        } else {
            ExperiencesRow += ' <img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="' + data[i].subCategory.SubCategoriesImage + '" alt="..." class="img-fluid">';
        }

        ExperiencesRow += ' </div>';
        ExperiencesRow += '<div class="col-6 " style="padding: 10px;">';
        ExperiencesRow += ' <h3 style="cursor: pointer;font-weight: 300" class="h5"><span>' + data[i].subCategory.SubCategoriesName + '</span></h3>';
        ExperiencesRow += ' </div>';
        ExperiencesRow += ' <div class="col-3 " style="padding: 10px;">';
        ExperiencesRow += '<button class=" btn btn-outline-primary " onclick="deleteSubCategoriesFollows(' + data[i].profilesubCatMapping.MappingId + ')">Following</button>';
        ExperiencesRow += '</div>';
        ExperiencesRow += ' </div>';
        ExperiencesRow += '</div>';
    }

    $('#experiencesDiv').append(ExperiencesRow);
}


function GetCategoriesByCityId(data) {
    // console.log(data);
    var CategoryRow = '';
    for (i = 0; i < data.length; i++) {
        CategoryRow += '<div class="card jumbotron jumbotron-fluid" style="background-position: center;background-image: url(' + data[i].CategoriesImage + ')">';
        CategoryRow += '<div class="container">';
        CategoryRow += '<h3 class="text-white display-4">' + data[i].CategoriesName + '</h3>';
        CategoryRow += '<button onclick="getCategoryId(' + data[i].CategoriesId + ')" data-toggle="modal" data-target="#exampleModalCenter" class="btn btn-outline-light">' + data[i].subCategoriesList.length + ' Collection</button>';
        CategoryRow += '</div>';
        CategoryRow += '</div>';
    }
    $('#categoriesDiv').append(CategoryRow);
}

$('#followBtn').click(function () {
    // $(this).toggleClass("btn-primary");
    $(this).css("background-color", "#540CFA");
    $(this).css("color", "white");
    $('#txtflo').text("following");

});

function findObjectByKey(a, key, value) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][key] === value) {
            return 1;
        }
    }
    return 0;
}

function getFollowProfileId(ProfileId) {
    console.log(ProfileId);
    $('#PeopleFollow_' + ProfileId).text("following").removeClass('btn-primary').addClass('btn-outline-primary');

    var data = {};
    data.ProfileId = aid;
    data.FollowerId = ProfileId;
    makeAjax(API_IRL + 'Follows', 'POST', getFollowResponse, data);

}

function getFollowSubcategoriesforProfileId(ProfileId) {
    console.log(ProfileId);
    $('#SubcategoriesFollow_' + ProfileId).text("following").removeClass('btn-primary').addClass('btn-outline-primary');

    var data = {};
    data.ProfileId = aid;
    data.SubCategoryId = ProfileId;
    makeAjax(API_IRL + 'ProfileSubCategoryMappings', 'POST', ProfileSubCategoryMappings, data);

}

function ProfileSubCategoryMappings(data) {
    console.log(data);
}

function getFollowingProfileId(ProfileId) {
    console.log(ProfileId);
    makeAlert('info', 'sorry this service not avilable');
}

function getFollowResponse(data) {
    console.log(data);
    makeAlert('success', 'Following');
}

function getCategoryId(CategoriesId) {
    console.log(CategoriesId);
    makeAjax(API_IRL + 'Categories/' + CategoriesId, 'GET', GetCategoriesById);
}

function GetCategoriesById(data) {
    console.log(data);
    $('#CategoryModelBody').empty();
    var categoryRow = '';
    categoryRow += '<div class="jumbotron jumbotron-fluid" style="background-position: center;background-image: url(' + data.CategoriesImage + ');">';
    categoryRow += '<div class="container">';
    categoryRow += '<h3 class="text-white">' + data.CategoriesName + '</h3>';
    categoryRow += '</div>';
    categoryRow += '</div>';
    categoryRow += '<div class="card-columns2">'
    for (i = 0; i < data.subCategoriesList.length; i++) {
        categoryRow += '<div class="card jumbotron jumbotron-fluid" style="background-position: center;background-image: url(' + data.subCategoriesList[i].SubCategoriesImage + ');filter: brightness(70%);">';
        categoryRow += '<div class="container">';
        categoryRow += '<h3 class="text-white display-4">' + data.subCategoriesList[i].SubCategoriesName + '</h3>';
        categoryRow += '<button id="SubcategoriesFollow_' + data.subCategoriesList[i].SubCategoriesId + '"  onclick="getFollowSubcategoriesforProfileId(' + data.subCategoriesList[i].SubCategoriesId + ')" class="btn btn-outline-light">Follow</button>';
        categoryRow += '</div>';
        categoryRow += '</div>';
    }

    categoryRow += '</div>';


    $('#CategoryModelBody').append(categoryRow);
}


function deleteFollows(data) {
    // user want to unfollow whom he/she is following
    var r = confirm("Are you sure you want to unfollow");
    if (r == true) {
        console.log(data);
        makeAjax(API_IRL + 'Follows/' + data, 'DELETE', deleteFollowResponse);
    }

}

function deleteSubCategoriesFollows(data) {
    // user want to unfollow whom he/she is following
    var r = confirm("Are you sure you want to unfollow");
    if (r == true) {
        console.log(data);
        makeAjax(API_IRL + 'ProfileSubCategoryMappings/' + data, 'DELETE', deleteSubcatFollowResponse);
    }

}

function deleteFollowResponse(data) {
    console.log(data);
    $('#followingDiv_' + data.FollowId + '').hide();
    makeAlert('success', 'user unfollowed');
}

function deleteSubcatFollowResponse(data) {
    console.log(data);
    $('#subCategoriesFollowDiv_' + data.MappingId + '').hide();
    makeAlert('success', 'unfollowed');
}