$(document).ready(function () {
    makeAjax(API_IRL + 'ProfileInterestMappings/GetInterestByProfileId/'+aid, 'GET', GetFollowingInterestByProfileId);
    makeAjax(API_IRL + 'interest', 'GET', GetAllInterest);


})
var profileInterestfollowingObj ;
function GetFollowingInterestByProfileId(data) {
    console.log(data);
    profileInterestfollowingObj = data;
}
function GetAllInterest(data) {
    console.log(data);
    var InterestRow = '';
    for (i = 0; i < data.length; i++) {
        var MappingId = searchObjectByKey(profileInterestfollowingObj,'ZingoInterestId',data[i].ZingoInterestId,'MappingId')
        if(MappingId != 0){
            InterestRow += '<div class="card" id="followingInterestDiv_' + MappingId + '" style="padding: 10px">';
            InterestRow += ' <div class="row">';
            InterestRow += '<div class="col-7 " style="padding: 10px;">';
            InterestRow += ' <h3 onclick="getInterestId(' + data[i].ZingoInterestId + ')" style="cursor:pointer;font-weight: 300;padding-left: 20px;" class="h5"><span>' + data[i].InterestName + '</span></h3>';
            InterestRow += ' </div>';
            InterestRow += ' <div class="col-5 " style="padding: 10px;">';
            InterestRow += '<button class=" btn btn-outline-primary " onclick="deleteInterestFollows(' + MappingId + ')">Following</button>';
            InterestRow += '</div>';
            InterestRow += ' </div>';
            InterestRow += '</div>';
        }else{
            InterestRow += '<div class="card" style="padding: 10px">';
            InterestRow += ' <div class="row">';
            InterestRow += '<div class="col-7 " style="padding: 10px;">';
            InterestRow += ' <h3 onclick="getInterestId(' + data[i].ZingoInterestId + ')" style="cursor:pointer;font-weight: 300;padding-left: 20px;" class="h5"><span>' + data[i].InterestName + '</span></h3>';
            InterestRow += ' </div>';
            InterestRow += ' <div class="col-5 " style="padding: 10px;">';
            InterestRow += '<a id="FollowInterest_' + data[i].ZingoInterestId + '"  onclick="getFollowInterestId(' + data[i].ZingoInterestId + ')" class=" btn btn-primary ">Follow</a>';
            InterestRow += '</div>';
            InterestRow += ' </div>';
            InterestRow += '</div>';
        }

    }
    $('#interestDiv').append(InterestRow);
}



function getFollowInterestId(ZingoInterestId) {
    console.log(ZingoInterestId);
    $('#FollowInterest_' + ZingoInterestId).text("following").removeClass('btn-primary').addClass('btn-outline-primary');

    var data = {};
    data.ProfileId = aid;
    data.ZingoInterestId = ZingoInterestId;
    makeAjax(API_IRL + 'ProfileInterestMappings', 'POST', ProfileInterestMappings, data);

}
function ProfileInterestMappings(data) {
    console.log(data);
    makeAlert('success', 'Following');
}
function deleteInterestFollows(data) {
    // user want to unfollow whom he/she is following
    var r = confirm("Are you sure you want to unfollow");
    if (r == true) {
        console.log(data);
        makeAjax(API_IRL + 'ProfileInterestMappings/' + data, 'DELETE', deleteInterestFollowResponse);
    }

}
function deleteInterestFollowResponse(data) {
    console.log(data);
    $('#followingInterestDiv_' + data.MappingId + '').hide();
    makeAlert('success', 'user unfollowed');
}
function searchObjectByKey(a, key, value ,returnkey) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][key] === value) {
            return a[i][returnkey];
        }
    }
    return 0;
}