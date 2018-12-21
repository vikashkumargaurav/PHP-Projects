$('document').ready(function () {
    makeAjax(API_IRL + 'GetSubcategoryByCityId/' + BiharCityId, 'GET', GetSubcategoryByCityId);
    makeAjax(API_IRL + 'interest', 'GET', Getinterests);
    makeAjax(API_IRL + 'Contents/GetContentByProfileId/'+aid, 'GET', GetContentByProfileId);

})
var contentImage = [];
var ImageUploadStatus = 0;
var TagArrayList = [];
var TagsArrayObj ;
var ZingoInterestId ;
// jQuery.inArray('nishant', TagArrayList)
// to check value in array

function Getinterests(data) {
    console.log(data);
    TagsArrayObj = data;
    $.each(data, function (i, data) {
        TagArrayList.push('#' + data.InterestName)
    })
}

function GetSubcategoryByCityId(data) {
    console.log(data);
    $.each(data, function (i, data) {

        $('#SubCategoriesinput').append($("<option style='color: black;'></option>")
            .attr("value", data.SubCategoriesId)
            .text(data.SubCategoriesName));
    })
}


$('#addpostBtn').click(function () {
    // console.log(data);
    if ($('#Title').val().trim().length == '') {
        $('#Title').focus();
        makeAlert('warning', 'Title Required');
        return false;
    }
    if ($('#Description').val().trim().length == '') {
        $('#Description').focus();
        makeAlert('warning', 'Write a sort description about Post');
        return false;
    }
    if (!$('#SubCategoriesinput').val()) {
        $('#SubCategoriesinput').focus();
        makeAlert('warning', 'SubCategories Required');
        return false;
    }

    if ($('#uploadFile').val().trim().length == '') {
        $('#uploadFile').focus();
        makeAlert('warning','Image Required');
        // makeAlert('warning', 'Image Required');
        return false;
    }
    // for(m=0;m<$('#uploadFile').get(0).files.length;m++){
    //   if($('#uploadFile').get(0).files[m].size > 5000){
    //       $('#uploadFile').focus();
    //       makeAlert('warning','Image Size Limit 5Mb '+m+' Image');
    //       // makeAlert('warning', 'Image Required');
    //       return false;
    //   }
    // }

    if($('#tags').val() != ''){
        if(!(($('#tags').val()).startsWith("#"))){
            alert('please add #');
            $('#tags').focus();
            // makeAlert('warning', 'please add #');
            return false
        }
        var tagVal = $('#tags').val();
        tagVal = tagVal.split('#');
        var tagexist = searchObjectByKey(TagsArrayObj,'InterestName',tagVal[1],'ZingoInterestId')
        if(!tagexist){
            // add new interest i.e tags saperately
            ZingoInterestId = 0;
            getfilesUpload();
        }else{
            // existing tage and get the id of the tag
            ZingoInterestId = tagexist;
            console.log('tagexist');
            console.log(tagexist);
            getfilesUpload();
        }
    }else{
        getfilesUpload();
    }



});




function getContentsCompleteaddStatus(data) {
    console.log(data);
    if($('#tags').val() != ''){
        console.log('mapping c and i');
        var mapdata = {}
        mapdata.ContentId = data.ContentId;
        mapdata.ZingoInterestId = ZingoInterestId;
        console.log(mapdata);
        makeAjax(API_IRL + "InterestContentMappings", 'POST', InterestContentMappingsSuccess, mapdata);
    }else{
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
            addPost(contentImage);
    }
}


function addPost(contentImage) {
    var data = {};
    data.Title = $('#Title').val();
    data.Description = $('#Description').val();
    data.CreatedDate = getCurrentDate();
    data.UpdatedDate = getCurrentDate();
    data.CreatedBy = authData.FullName;
    data.ContentType = 'Image';
    data.ContentURL = contentImage[0].Images;
    data.ProfileId = aid;
    data.contentImage = contentImage;
    data.SubCategoriesId = $('#SubCategoriesinput ').val();
    console.log(data);

    if(ZingoInterestId != 0){
        makeAjax(API_IRL + 'Contents', 'POST', getContentsCompleteaddStatus, data);
    }else{
        // new interest has to be add
        addPostWithInterest(data);
    }
}
function addPostWithInterest(content){
    var zingoInterst = [];
    var data = {};
    var obj = {};
    var tagVal = $('#tags').val();
    tagVal = tagVal.split('#');
    obj.InterestName = tagVal[1];
    zingoInterst.push(obj);
    data.interestList = zingoInterst;
    data.content = content;
    console.log(content);
    console.log(data);
    makeAjax(API_IRL + 'InterestContentMapping/AddMultipleInterestWithContentAndMapping', 'POST', AddMultipleInterestWithContentAndMapping, data);


}

function AddMultipleInterestWithContentAndMapping(data){
    console.log(data);
    alert('Content Added Successfully');
    window.location.reload();
}
$(function () {
    $("#tags").autocomplete({
        source: TagArrayList
    });
});

function searchObjectByKey(a, key, value ,returnkey) {
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