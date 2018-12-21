$('document').ready(function () {
    makeAjax(API_IRL + 'GetActivitiesByCityId/' + BiharCityId, 'GET', getActivitiesByCItyIdForBlogTags);
    makeAjax(API_IRL + 'interest', 'GET', Getinterests);
    if ($('#fileUpload').val() == '') {
        $('#blogImages').hide();
    }

    function readURL(input) {
        $('#blogImages').show();
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blogImages').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#fileUpload").change(function () {
        readURL(this);
    });

})
var blogTempObject;
var TagsArrayObj;
var TagArrayList = [];
var ZingoInterestId;
var blogImages = [];

function Getinterests(data) {
    console.log(data);
    TagsArrayObj = data;
    $.each(data, function (i, data) {
        TagArrayList.push('#' + data.InterestName)
    })
}

$(function () {
    $("#tags").autocomplete({
        source: TagArrayList
    });
});

$('.checkActivebtn').on('click', function () {
    $(input, this).removeAttr('checked');
    $(this).removeClass('active');
});

function getActivitiesByCItyIdForBlogTags(data) {
    // console.log(data);
    var activityRow = '';
    for (i = 0; i < data.length; i++) {
        activityRow += '<label style="margin-right: 10px;" class="checkActivebtn btn btn-outline-primary">';
        activityRow += '<input style="display: none" type="radio" name="Activities" value="' + data[i].ActivitiesId + '" id="' + data[i].ActivitiesId + '" autocomplete="off">#' + data[i].ActivityName + ' ';
        activityRow += '</label>';
    }
    $('#activityDiv').append(activityRow);
}

$('#addblogBtn').click(function () {
    if (aid === undefined) {
        alert('Please Loggedin to write your blog');
        return false;
    } else {

        if ($('#Title').val().trim().length == '') {
            $('#Title').focus();
            alert('Title  Required');
            return false;
        }
        if ($('#ShortDesc').val().trim().length == '') {
            $('#ShortDesc').focus();
            alert('Short Description Required');
            return false;
        }
        if ($('#LongDesc').val().trim().length == '') {
            $('#LongDesc').focus();
            alert('Long Description Required');
            return false;
        }
        if ($('#fileUpload').val().trim().length == '') {
            $('#fileUpload').focus();
            alert('Image Required');
            return false;
        }
        if ($('input[name=Activities]:checked').val() == undefined) {
            alert('tag');
            return false;
        }
        if ($('#tags').val() != '') {
            var tagVal = $('#tags').val();
            tagVal = tagVal.split('#');
            var tagexist = searchObjectByKey(TagsArrayObj, 'InterestName', tagVal[1], 'ZingoInterestId')
            if (!tagexist) {
                // add new tags i.e with new tags saperately
                console.log('not tagexist');
                ZingoInterestId = 0;
                uploadBlogImage();
            } else {
                // existing tage and get the id of the tag
                ZingoInterestId = tagexist;
                console.log('tagexist');
                console.log(tagexist);
                 uploadBlogImage();
            }
        } else {
            // blog without tags
            var data = {};
            data.ProfileId = aid;
            data.IsApproved = false;
            data.ActivitiesId = $('input[name=Activities]:checked').val();
            data.Title = $('#Title').val().trim();
            data.ShortDesc = $('#ShortDesc').val().trim();
            // data.LongDesc = $('#LongDesc').val().trim();
            data.LongDesc = CKEDITOR.instances.LongDesc.getData();
            data.CreateDate = getCurrentDate();
            data.CreatedUser = authData.FullName;
            data.UpdatedUser = "";
            data.UpdateDate = getCurrentDate();
            data.Status = "Pending";
            console.log(data);
            makeAjax(API_IRL + "Blogs", 'POST', getBlogaddStatus, data);
        }

    }
})

function getBlogaddStatus(data) {
    console.log(data);
    blogTempObject = data;
    $('#BlogId').val(data.BlogId);
    var BlogId = data.BlogId;
    var data = new FormData();
    var files = $("#fileUpload").get(0).files;
    // Add the uploaded image content to the form data collection
    if (files.length > 0) {
        data.append("blogImages", files[0]);

    }
    makeFileUploadAjax(API_IRL + "Upload/user/PostBlogsImage", 'POST', getblogImgUploadUrl, data);
}

function getblogImgUploadUrl(data) {
    console.log(data);
    var ImageUrl = data;
    var data = {};
    data.BlogId = $('#BlogId').val();
    data.Image = IMAGE_URL + '' + ImageUrl;
    console.log(data);
    makeAjax(API_IRL + 'BlogImages', 'POST', getBlogCompleteaddStatus, data);
}

//  thsi is  ------------------------------------------------------------------------------------
function uploadBlogImage() {
    var data = new FormData();
    var files = $("#fileUpload").get(0).files;
    // Add the uploaded image content to the form data collection
    if (files.length > 0) {
        data.append("blogImages", files[0]);
    }
    makeFileUploadAjax(API_IRL + "Upload/user/PostBlogsImage", 'POST', getBlogImageUploadUrl, data);
}

function getBlogImageUploadUrl(data) {
    console.log(data);
    var obj = {};
    obj.Image = IMAGE_URL + '' + data;
    blogImages.push(obj);
    // console.log(blogImages);
    addBlog(blogImages);
}

function addBlog(blogImages) {
    console.log(blogImages);
    // blog without tags
    var data = {};
    data.ProfileId = aid;
    data.IsApproved = false;
    data.ActivitiesId = $('input[name=Activities]:checked').val();
    data.Title = $('#Title').val().trim();
    data.ShortDesc = $('#ShortDesc').val().trim();
    // data.LongDesc = $('#LongDesc').val().trim();
    data.LongDesc = CKEDITOR.instances.LongDesc.getData();
    data.CreateDate = getCurrentDate();
    data.CreatedUser = authData.FullName;
    data.UpdatedUser = "";
    data.UpdateDate = getCurrentDate();
    data.blogImages = blogImages;
    data.Status = "Pending";
    console.log(data);
    if (ZingoInterestId != 0) {
        //  for existing interset with interest id
        makeAjax(API_IRL + "Blogs", 'POST', getBlogCompleteaddStatusAndMapWithInterest, data);
    } else {
        // add blog with new tag
        addPostWithNewInterest(data);
    }

}
function getBlogCompleteaddStatusAndMapWithInterest(data) {
    console.log(data);
    if($('#tags').val() != ''){
        // console.log('mapping c and b');
        var mapdata = {}
        mapdata.BlogId = data.BlogId;
        mapdata.ZingoInterestId = ZingoInterestId;
        console.log(mapdata);
        makeAjax(API_IRL + "InterestBlogMappings", 'POST', InterestBlogMappingsSuccess, mapdata);
    }else{
        // console.log(data);
        alert('Content Added Successfully');
        window.location.reload();
    }

}
function InterestBlogMappingsSuccess(data) {
    // console.log(data);
    // if tag exist InterestContentMappingsSuccess
    alert('Blog Added Successfully');
    window.location.reload();

}
function addPostWithNewInterest(blog) {
    // console.log(data);
    var zingoInterst = [];
    var data = {};
    var obj = {};
    var tagVal = $('#tags').val();
    tagVal = tagVal.split('#');
    obj.InterestName = tagVal[1];
    zingoInterst.push(obj);
    data.interestList = zingoInterst;
    data.Blog = blog;
    console.log(blog);
    console.log(data);
    makeAjax(API_IRL + 'InterestBlogMappings/AddMultipleInterestWithBlogAndMapping', 'POST', AddMultipleInterestWithBlogAndMapping, data);
    // for new interest

}
function AddMultipleInterestWithBlogAndMapping(data){
    // console.log(data);
    // data[0].blog  // mailer
    getBlogCompleteaddStatus(data[0].blog)
}
//  thsi is  ------------------------------------------------------------------------------------
function getBlogCompleteaddStatus(data) {
    // console.log(data);
    var mailData = {};
    mailData.EmailAddress = "abhinav@zingohotels.com,sheetal12kamble@gmail.com";//notify email id
    mailData.Body = 'Hello,<br> Admin new Blog Added on BiharTourism Website please review the blogs. <br>Title : ' + $('#Title').val() + '<br><strong>Headline :' + $('#ShortDesc').val() + '</strong><br><img src="' + data.Image + '"> <br>Added By : ' + authData.FullName + '<br><br> Thank You <br>BiharTourism';
    mailData.Subject = 'New Blog Added on Bihar Tourism';
    mailData.UserName = 'nishant@zingohotels.com';
    mailData.Password = 'zingo@123';
    mailData.FromName = 'BiharTourism';
    mailData.FromEmail = 'nishant@zingohotels.com';

    makeAjax(API_IRL + 'Operation/SendInvoice', 'POST', newblognotificationtoadmin, mailData);
}


function newblognotificationtoadmin(data) {
    // console.log(data);
    alert('Blog Added Successfully');
    window.location.reload();
}


function searchObjectByKey(a, key, value, returnkey) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][key] === value) {
            return a[i][returnkey];
        }
    }
    return 0;
}