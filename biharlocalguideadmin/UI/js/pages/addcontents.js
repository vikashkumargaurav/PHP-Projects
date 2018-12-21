$('document').ready(function () {
    makeAjax(MAIN_API_IRL + 'Cities', 'GET', getCities);
    makeAjax(MAIN_API_IRL + 'interest', 'GET', GetinterestsforVideo);
    // makeAjax(API_IRL + 'Contents/GetContentByProfileId/' + aid, 'GET', GetContentByProfileId);

})
function getCities(data) {
    getInputCities(data)
    $.each(data, function (i, data) {
        $('#cityinput').append($("<option style='color: black;'></option>")
            .attr("value", data.CityId)
            .text(data.CityName));
    })
    makeAjax(MAIN_API_IRL + 'GetSubcategoryByCityId/' + data[0].CityId, 'GET', GetSubcategoryByCityIdforvideos);
}


$('#cityinput').on('change', function() {
    // alert( this.value );
    var cityId = this.value;
    makeAjax(MAIN_API_IRL + 'GetSubcategoryByCityId/' + cityId, 'GET', GetSubcategoryByCityIdforvideos);
});

function splitYoutubeVideoUniqueId(data) {
    var i, r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    r = data.match(rx);
    console.log(r[1]);
    return r[1];

}

var videocontentImage = [];
var videoImageUploadStatus = 0;
var videoTagArrayList = [];
var videoTagsArrayObj;
var videoZingoInterestId;
// jQuery.inArray('nishant', TagArrayList)
// to check value in array

function GetinterestsforVideo(data) {
    console.log(data);
    videoTagsArrayObj = data;
    $.each(data, function (i, data) {
        videoTagArrayList.push('#' + data.InterestName)
    })
}

function GetSubcategoryByCityIdforvideos(data) {
    // console.log(data);
    if(data.length == 0){
        makeAlert('warning','Subcategory not avilable')
    }
    $('#videoSubCategoriesinput').empty();
    $.each(data, function (i, data) {

        $('#videoSubCategoriesinput').append($("<option style='color: black;'></option>")
            .attr("value", data.SubCategoriesId)
            .text(data.SubCategoriesName));
    })
}


function addvideopostbtn() {
    // console.log('dkwdjewio');
    if ($('#videoTitle').val().trim().length == '') {
        $('#videoTitle').focus();
        makeAlert('warning', 'Title Required');
        return false;
    }
    if ($('#videoDescription').val().trim().length == '') {
        $('#videoDescription').focus();
        makeAlert('warning', 'Write a sort description about Post');
        return false;
    }
    if (!$('#videoSubCategoriesinput').val()) {
        $('#videoSubCategoriesinput').focus();
        makeAlert('warning', 'SubCategories Required');
        return false;
    }

    if ($('#videoContentURL').val().trim().length == '') {
        $('#videoContentURL').focus();
        makeAlert('warning', 'Video url Required');
        return false;
    }
    if ($('#videotags').val() != '') {
        if(!(($('#videotags').val()).startsWith("#"))){
            $('#videotags').focus();
            alert('please add #');
            // makeAlert('warning', 'please add #');
            return false
        }
        var tagVal = $('#videotags').val();
        tagVal = tagVal.split('#');
        var tagexist = searchObjectByKey(videoTagsArrayObj, 'InterestName', tagVal[1], 'ZingoInterestId')
        if (!tagexist) {
            // add new interest i.e tags saperately
            videoZingoInterestId = 0;
            addVideoPost();
        } else {
            // existing tage and get the id of the tag
            videoZingoInterestId = tagexist;
            console.log('tagexist');
            console.log(tagexist);
            addVideoPost();
        }
    } else {
        // post without tags
        addVideoPost();
    }
}


function getContentsCompleteaddStatus(data) {
    console.log(data);
    if ($('#videotags').val() != '') {
        console.log('mapping c and i');
        var mapdata = {}
        mapdata.ContentId = data.ContentId;
        mapdata.ZingoInterestId = videoZingoInterestId;
        console.log(mapdata);
        makeAjax(MAIN_API_IRL + "InterestContentMappings", 'POST', InterestContentMappingsSuccess, mapdata);
    } else {
        console.log(data);
        alert('Content Added Successfully');
        window.location.reload();
    }

}

function InterestContentMappingsSuccess(data) {
    console.log(data);
    // if tag exist InterestContentMappingsSuccess
    alert('Content Added Successfully');
    window.location.reload();

}

var countUpload = 0;

function getfilesUpload() {
    // $('#uploadFile').get(0).files
    for (i = 0; i < $('#uploadFile').get(0).files.length; ++i) {
        countUpload++;
        var data = new FormData();
        var files = $("#uploadFile").get(0).files[i];
        // Add the uploaded image content to the form data collection
        if ($('#uploadFile').get(0).files.length > 0) {
            data.append("ActivityImage", files);
        }
        makeFileUploadAjax(API_IRL + "Upload/user/PostActivityImage", 'POST', getuploadImageUrlArray, data);
    }
    console.log(data);
}

function getuploadImageUrlArray(data) {
    console.log(data);
    var obj = {};
    obj.Images = IMAGE_URL + '' + data;
    contentImage.push(obj);
    if (contentImage.length == $('#uploadFile').get(0).files.length) {
        console.log(contentImage);
        addVideoPost(contentImage);
    }
}


function addVideoPost() {
    var data = {};
    data.Title = $('#videoTitle').val();
    data.Description = $('#videoDescription').val();
    data.CreatedDate = getCurrentDate();
    data.UpdatedDate = getCurrentDate();
    data.CreatedBy = authData.FullName;
    data.ContentType = 'Video';
    data.ContentURL = splitYoutubeVideoUniqueId($('#videoContentURL ').val());
    data.ProfileId = aid;
    data.contentImage = '';
    data.SubCategoriesId = $('#videoSubCategoriesinput ').val();
    console.log(data);

    if (videoZingoInterestId != 0) {
        // post without tags
        makeAjax(MAIN_API_IRL + 'Contents', 'POST', getContentsCompleteaddStatus, data);
    } else {
        // new interest has to be add
        addVideoPostWithInterest(data);
    }
}

function addVideoPostWithInterest(content) {
    var zingoInterst = [];
    var data = {};
    var obj = {};
    var tagVal = $('#videotags').val();
    tagVal = tagVal.split('#');
    obj.InterestName = tagVal[1];
    zingoInterst.push(obj);
    data.interestList = zingoInterst;
    data.content = content;
    console.log(content);
    console.log(data);
    makeAjax(MAIN_API_IRL + 'InterestContentMapping/AddMultipleInterestWithContentAndMapping', 'POST', AddMultipleInterestWithContentAndMapping, data);


}

function AddMultipleInterestWithContentAndMapping(data) {
    console.log(data);
    alert('Content Added Successfully');
    window.location.reload();
}

$(function () {
    $("#videotags").autocomplete({
        source: videoTagArrayList
    });
});

function searchObjectByKey(a, key, value, returnkey) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][key] === value) {
            return a[i][returnkey];
        }
    }
    return 0;
}


function GetContentByProfileId(data) {
    console.log(data)
}

// var urls = [
//     '//www.youtube-nocookie.com/embed/up_lNV-yoK4?rel=0',
//     'http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo',
//     'http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel',
//     'http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub',
//     'http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I',
//     'http://www.youtube.com/user/SilkRoadTheatre#p/a/u/2/6dwqZw0j_jY',
//     'http://youtu.be/6dwqZw0j_jY',
//     'http://www.youtube.com/watch?v=6dwqZw0j_jY&feature=youtu.be',
//     'http://youtu.be/afa-5HQHiAs',
//     'http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo?rel=0',
//     'http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel',
//     'http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub',
//     'http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I',
//     'http://www.youtube.com/embed/nas1rJpm7wY?rel=0',
//     'http://www.youtube.com/watch?v=peFZbP64dsU',
//     'http://youtube.com/v/dQw4w9WgXcQ?feature=youtube_gdata_player',
//     'http://youtube.com/vi/dQw4w9WgXcQ?feature=youtube_gdata_player',
//     'http://youtube.com/?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
//     'http://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
//     'http://youtube.com/?vi=dQw4w9WgXcQ&feature=youtube_gdata_player',
//     'http://youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
//     'http://youtube.com/watch?vi=dQw4w9WgXcQ&feature=youtube_gdata_player',
//     'http://youtu.be/dQw4w9WgXcQ?feature=youtube_gdata_player'
// ];

