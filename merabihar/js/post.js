$(document).ready(function () {
    makeAjax(API_IRL + 'Contents/'+ContentsId, 'GET', GetContentByContentsId);

})

function GetContentByContentsId(data) {
    console.log(data);
    makeAjax(API_IRL + 'Profiles/'+data.ProfileId, 'GET', GetProfleByProfileId);

    var contentRow = '';
    contentRow += '<div class="col-md ">';
    if(data.ContentType != 'Image'){
        contentRow += '<iframe width="100%" height="400" src="https://www.youtube.com/embed/'+data.ContentURL+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        contentRow += '<h3 style="font-weight: 300;margin-top: 20px;">'+data.Title+'</h3>';
        contentRow += '<p style="">'+data.Description+'</p>';
        contentRow += '<p style="">'+convertDateNumDateToMonthNameFormate(data.CreatedDate)+'</p>';
        contentRow += ' </div>';
    }else{
        contentRow += '<img style="width: 100%;max-height: 600px;" src="'+data.ContentURL+'">';
        contentRow += '<h3 style="font-weight: 300;margin-top: 20px;">'+data.Title+'</h3>';
        contentRow += '<p style="">'+data.Description+'</p>';
        contentRow += '<p style="">'+convertDateNumDateToMonthNameFormate(data.CreatedDate)+'</p>';
        contentRow += ' </div>';
    }


    $('#contentDiv').append(contentRow);
    viewstarttimer();

}

function GetProfleByProfileId(data) {
    console.log(data);

    var profileRow = '';
      // profileRow +='<h5>'+data.FullName+'</h5>'
    profileRow += '<div class="" style="padding: 10px">';
    profileRow += ' <div class="row">';
    profileRow += '<div class="col-3 ">';
    if (data.ProfilePhoto == null) {
        profileRow += ' <img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="img/noprofileimage.png" alt="..." class="img-fluid">';
    } else {
        profileRow += ' <img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="' + data.ProfilePhoto + '" alt="..." class="img-fluid">';
    }
    profileRow += ' </div>';
    profileRow += '<div class="col-9 " style="padding: 0px;">';
    profileRow += ' <h3 onclick="getProfileId(' + data.ProfileId + ')" style="cursor:pointer;font-weight: 300" class="h5"><span>' + data.FullName + '</span><br><small>'+data.Email+'</small></h3>';
    profileRow += ' </div>';
    // profileRow += ' <div class="col-3 " style="padding: 10px;">';
    // profileRow += '<a id="PeopleFollow_' + data.ProfileId + '"  onclick="getFollowProfileId(' + data.ProfileId + ')" class=" btn btn-primary ">Follow</a>';
    // profileRow += '</div>';
    profileRow += ' </div>';
    profileRow += '</div>';
    profileRow += '<hr>';

    $('#profileDiv').append(profileRow);
}

function viewstarttimer()
{
    setTimeout ( "contentviewedApiHit()", 10000 );
}
function contentviewedApiHit() {
    var data = {};
    data.ContentId = ContentsId;
    data.ProfileId = aid;
    data.Views = '1';
    makeAjax(API_IRL + 'WatchLists', 'POST', GetcontentviewedApiHitResponse,data,0);
}

function GetcontentviewedApiHitResponse(data) {
    console.log(data);
// view api hit done
}