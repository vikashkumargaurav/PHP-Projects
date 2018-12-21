$('document').ready(function () {
    makeAjax(API_IRL + 'interest', 'GET', GetinterestsforSearch);
    makeAjax(API_IRL + 'Profiles', 'GET', GetProfilesforSearch);
    makeAjax(API_IRL + 'Contents/GetContentByCityId/'+BiharCityId, 'GET', GetContentsforSearch);

})

var SearchTagsArrayObj  ;
var SearchTagArrayList = [] ;

var SearchProfileArrayObj  ;
var SearchProfileArrayList = [] ;

var SearchSubCategoriesArrayObj  ;
var SearchSubCategoriesArrayList = [] ;
function GetinterestsforSearch(data) {
    // console.log(data);
    SearchTagsArrayObj = data;
    $.each(data, function (i, data) {
        SearchTagArrayList.push('#' + data.InterestName)
    })
}

function GetProfilesforSearch(data){
    // console.log(data);
    SearchProfileArrayObj = data;
    $.each(data, function (i, data) {
        SearchProfileArrayList.push( data.FullName);
    })
}

function GetContentsforSearch(data){
     console.log(data);
    SearchSubCategoriesArrayObj = data;
    $.each(data, function (i, data) {
        SearchSubCategoriesArrayList.push( data.Title);
    })
}
$(function () {
    $("#searchtags").autocomplete({
        source: SearchTagArrayList
    });
});
$(function () {
    $("#searchprofiles").autocomplete({
        source: SearchProfileArrayList
    });
});

$(function () {
    $("#searchSubCategories").autocomplete({
        source: SearchSubCategoriesArrayList
    });
});

$('#searchtagsBtn').click(function () {
    console.log('inside');

})

function searchtagsbutton() {
    var tagVal = $('#searchtags').val();
    tagVal = tagVal.split('#');
    var tagexist = searchObjectByKey(SearchTagsArrayObj,'InterestName',tagVal[1],'ZingoInterestId')
    if(!tagexist){
        // add new interest i.e tags saperately
        makeAlert('info','No result found');
    }else{
        // existing tage and get the id of the tag
        console.log('tagexist');
        console.log(tagexist);
        getInterestId(tagexist)
    }
}


function searchprofilesbutton() {
    var tagVal = $('#searchprofiles').val();
    // tagVal = tagVal.split('#');
    var tagexist = searchObjectByKey(SearchProfileArrayObj,'FullName',tagVal,'ProfileId')
    if(!tagexist){
        // add new interest i.e tags saperately
        makeAlert('info','No result found');
    }else{
        // existing tage and get the id of the tag
        console.log('tagexist');
        console.log(tagexist);
        getProfileId(tagexist)
        // getfilesUpload();
    }
}

function searchSubCategoriesbutton() {
    var tagVal = $('#searchSubCategories').val();
    // tagVal = tagVal.split('#');
    var tagexist = searchObjectByKey(SearchSubCategoriesArrayObj,'Title',tagVal,'ContentId')
    if(!tagexist){
        // add new interest i.e tags saperately
        makeAlert('info','No result found');
    }else{
        // existing tage and get the id of the tag
        console.log('tagexist');
        console.log(tagexist);
        getContentsId(tagexist);
        // getfilesUpload();
    }
}

function searchObjectByKey(a, key, value ,returnkey) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][key] === value) {
            return a[i][returnkey];
        }
    }
    return 0;
}