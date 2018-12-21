$('document').ready(function () {
    $('#blogupdateBtn').hide();
    makeAjax(MAIN_API_IRL + 'Blogs', 'GET', getBlogs);

    if(authData.UserRoleId == 3){
        makeAjax(MAIN_API_IRL + 'Activities', 'GET', getActivities);
    }else{
        makeAjax(MAIN_API_IRL + 'GetActivitiesByCityId/'+BiharCityId, 'GET', getActivities);

    }
})
var blogTempObject;
function getActivities(data) {
    console.log(data);
    $.each(data, function (i, data) {
        $('#activityinput').append($("<option style='color: black;'></option>")
            .attr("value", data.ActivitiesId)
            .text(data.ActivityName));
    })
}

function getBlogs(data) {
    console.log(data);
    data.reverse();
    var blogRow = '';
    row = 0;
    for (i = 0; i < data.length; i++) {
        blogRow += '<tr>';
        blogRow += '<td>' + ++row + '</td>';
        blogRow += '<td>' + data[i].BlogId + '</td>';
        blogRow += '<td>' + data[i].Title + '</td>';
        blogRow += '<td>' + data[i].activities.ActivityName + '</td>';
        blogRow += '<td>' + data[i].CreatedUser + '</td>';
        var CreateDate = data[i].CreateDate.split("T");
        var UpdateDate = data[i].UpdateDate.split("T");
        blogRow += '<td>' + CreateDate[0] + '</td>';

        if(data[i].IsApproved == true){
            blogRow += '<td><span class="badge badge-success">Active</span></td>';
        }else {
            blogRow += '<td><span class="badge badge-warning">Pending</span></td>';
        }

        blogRow += '<td>' + data[i].ShortDesc + '</td>';
        blogRow += '<td style="width: 100px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">' + data[i].LongDesc + '</td>';


        if (data[i].UpdatedUser != "") {
            blogRow += '<td>' + data[i].UpdatedUser + '</td>';
        } else {
            blogRow += '<td> -- </td>';
        }


        blogRow += '<td>' + UpdateDate[0] + '</td>';
        if (data[i].blogImages != "") {
            blogRow += '<td><a target="_blank" href="' + data[i].blogImages[0].Image + '"><img src="' + data[i].blogImages[0].Image + '" height="42" width="42"> </a> </td>';
        } else {
            blogRow += '<td> -  Null - </td>';
        }

        blogRow += '<td><div class="btn-group">';
        blogRow += '<button type="button" class="btn btn-danger">Action</button>';
        blogRow += '<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        blogRow += '<span class="sr-only">Toggle Dropdown</span></button>';

        blogRow += '  <div class="dropdown-menu">';
        blogRow += '    <a class="dropdown-item" onclick="getBlogIdForView(\'' + data[i].BlogId + '\')">View</a>';
        blogRow += '    <a class="dropdown-item" onclick="getBlogId(\'' + data[i].BlogId + '\')">Edit</a>';
        if(authData.UserRoleId ==3) {
            blogRow += '    <a class="dropdown-item" onclick="getBlogIdForDelete(' + data[i].BlogId + ')">Delete</a>';
        }
        blogRow += '  </div>';
        blogRow += '</div></td>';
        blogRow += '</tr>';

    }
    $('#blogDiv').append(blogRow);
    $('#blogDiv').dataTable({
        responsive: true
    })
}

$('#addblogBtn').click(function () {
    if ($('#Title').val().trim().length == '') {
        $('#Title').focus();
        makeAlert('warning','Title  Required');
        return false;
    }
    if ($('#ShortDesc').val().trim().length == '') {
        $('#ShortDesc').focus();
        makeAlert('warning','Short Description Required');
        return false;
    }
    if ($('#LongDesc').val().trim().length == '') {
        $('#LongDesc').focus();
        makeAlert('warning','Long Description Required');
        return false;
    }
    if ($('#fileUpload').val().trim().length == '') {
        $('#fileUpload').focus();
        makeAlert('warning','Image Required');
        return false;
    }
    var data = {};
    data.ProfileId = aid;
    data.IsApproved = true;
    data.ActivitiesId = $('#activityinput').val();
    data.Title = $('#Title').val().trim();
    data.ShortDesc = $('#ShortDesc').val().trim();
    data.LongDesc = CKEDITOR.instances.LongDesc.getData();
    // data.LongDesc = $('#LongDesc').val().trim();
    data.CreateDate = getCurrentDate();
    data.CreatedUser = authData.FullName;
    data.UpdatedUser = "";
    data.UpdateDate = getCurrentDate();
    data.Status = "Approved";
    console.log(data);
    makeAjax(MAIN_API_IRL + "Blogs", 'POST', getBlogaddStatus, data);
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
    makeFileUploadAjax(MAIN_API_IRL + "Upload/user/PostBlogsImage", 'POST', getblogImgUploadUrl, data);
}

function getblogImgUploadUrl(data) {
    console.log(data);
    var ImageUrl = data;
    var data = {};
    data.BlogId = $('#BlogId').val();
    data.Image = IMAGE_URL + '' + ImageUrl;
    console.log(data);
    makeAjax(MAIN_API_IRL + 'BlogImages', 'POST', getBlogCompleteaddStatus, data);
}

function getBlogCompleteaddStatus(data) {
    console.log(data);
    var notifyData = {};
    notifyData.Title = blogTempObject.Title;
    notifyData.Message = blogTempObject.ShortDesc;
    notifyData.ServerId = "AIzaSyCQBP9KZpaRnLNWaXwDjub8F6OYlXFEfbw";
    notifyData.SenderId = "390758748724";
    notifyData.ProfileId = aid;
    notifyData.CreatedBy = authData.FullName;
    notifyData.BlogId = blogTempObject.BlogId;
    notifyData.PictureUrl = data.Image;
    console.log(notifyData)
    makeAjax(MAIN_API_IRL + "BlogNotifications/SendBlogNotificationsToAllProfile", 'POST', SendBlogNotificationsToAllProfile, notifyData);

}
function SendBlogNotificationsToAllProfile(data) {
    alert('Blog Added Successfully');
    window.location.reload();
}
function getBlogIdForDelete(data) {
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
        makeAjax(MAIN_API_IRL + 'Blogs/' + data, 'DELETE', getBlogDeleteConfirm);
    }
}

function getBlogDeleteConfirm(data) {
    console.log(data);
    alert('Blog  ' + data.Title + ' deleted successfully ');
    window.location.reload();
}

function getBlogId(data) {
    makeAjax(MAIN_API_IRL + 'Blogs/' + data, 'GET', getBlogsById);
    // data = JSON.parse(atob(data));
    // console.log(data);

}

function getBlogIdForView(data) {
    makeAjax(MAIN_API_IRL + 'Blogs/' + data, 'GET', showBlogDetailsInModel);

}

function showBlogDetailsInModel(data) {
    blogTempObject = data;
    $('#BlogImgDiv').empty();
    if(data[0].IsApproved == false){
        $('#blogStatus').text('Pending');
        $('#blogStatus').addClass('badge-warning');
        // $('#blogRejectModelBtn').prop('disabled','disabled');

    }else{
        $('#blogStatus').text('Approved');
        $('#blogStatus').addClass('badge-success');
        // $('#blogApproveModelBtn').prop('disabled','disabled');
    }


    
    console.log(data);
    var CreateDate = data[0].CreateDate.split("T");
    $('#blogViewBtn').click();
    $('#showTitle').text(data[0].Title);
    $('#showCreatedDate').text(CreateDate[0]);
    $('#showShortDesc').text(data[0].ShortDesc);
    $('#showLongDesc').html(data[0].LongDesc);
    $('#showCreatedUser').text( data[0].CreatedUser);
    $('#BlogImgDiv').append(' <img style="min-height: 200px;max-height: 400px;" src="'+data[0].blogImages[0].Image+'" alt="Smiley face"  width="100%"> ');
}

function getBlogsById(data) {
    console.log(data);
    $('#addblogBtn').hide();
    $('#blogupdateBtn').show();
    $('#BlogId').val(data[0].BlogId);
    $('#CreatedUser').val(data[0].CreatedUser);
    $('#CreateDate').val(data[0].CreateDate);
    $('#IsApproved').val(data[0].IsApproved);
    $('#ProfileId').val(data[0].ProfileId);
    $('#Status').val(data[0].Status);

    // $('#blogImages').val(data.blogImages[0].Image);
    $('#blogImages').val(data[0].blogImages[0].Image);
    $('#BlogImagesId').val(data[0].blogImages[0].BlogImagesId);
    $('#activityinput').val(data[0].ActivitiesId);


    $('#Title').val(data[0].Title);
    $('#ShortDesc').val(data[0].ShortDesc);
    // $('#LongDesc').val(data[0].LongDesc);
    handleLongDesc(data[0].LongDesc)

    $('#Title').focus();
}
function handleLongDesc(response) {
    var desc = '';
    if (response != null)
        desc = response;

    CKEDITOR.instances.LongDesc.setData(desc);
}
$('#blogupdateBtn').click(function () {
    if ($('#Title').val().trim().length == '') {
        $('#Title').focus();
        makeAlert('warning','Title  Required');
        return false;
    }
    if ($('#ShortDesc').val().trim().length == '') {
        $('#ShortDesc').focus();
        makeAlert('warning','Short Description Required');
        return false;
    }
    if ($('#LongDesc').val().trim().length == '') {
        $('#LongDesc').focus();
        makeAlert('warning','Long Description Required');
        return false;
    }

    if (document.getElementById("fileUpload").files.length == 0) {
        console.log("no files selected");

        var data = {};
        data.ActivitiesId = $('#activityinput').val();
        var BlogId = $('#BlogId').val();
        data.BlogId = $('#BlogId').val();
        data.Title = $('#Title').val();
        data.ShortDesc = $('#ShortDesc').val();
        data.LongDesc =CKEDITOR.instances.LongDesc.getData();
        // data.LongDesc = $('#LongDesc').val();
        data.CreateDate = $('#CreateDate').val();
        data.CreatedUser = $('#CreatedUser').val();
        data.Status = $('#Status').val();
        data.IsApproved = true;
        data.ProfileId = $('#ProfileId').val();
        data.UpdatedUser = authData.FullName;
        data.UpdateDate = getCurrentDate();
        console.log(data);
        makeAjax(MAIN_API_IRL + "Blogs/" + BlogId, 'PUT', getBlogUpdatewithoutImageStatus, data);

    } else {
        console.log(" files selected");
        var data = {};
        data.ActivitiesId = $('#activityinput').val();
        var BlogId = $('#BlogId').val();
        data.BlogId = $('#BlogId').val();
        data.Title = $('#Title').val();
        data.ShortDesc = $('#ShortDesc').val();
        data.LongDesc = CKEDITOR.instances.LongDesc.getData();
        // data.LongDesc = $('#LongDesc').val();
        data.CreateDate = $('#CreateDate').val();
        data.Status = $('#Status').val();
        data.IsApproved = true;
        data.ProfileId = $('#ProfileId').val();
        data.CreatedUser = $('#CreatedUser').val();
        data.UpdatedUser = authData.FullName;
        data.UpdateDate = getCurrentDate();
        console.log(data);
        makeAjax(MAIN_API_IRL + "Blogs/" + BlogId, 'PUT', getBlogUpdatewithImageStatus, data);
    }

})

function getBlogUpdatewithoutImageStatus(data) {
    // console.log(data);
    alert('Blog Updated successfully ');
    window.location.reload();
}

function getBlogUpdatewithImageStatus(data) {
    console.log(data);
    // $('#BlogId').val(data.BlogId);
    // var BlogId = data.BlogId;
    var data = new FormData();
    var files = $("#fileUpload").get(0).files;
    // Add the uploaded image content to the form data collection
    if (files.length > 0) {
        data.append("blogImages", files[0]);

    }
    makeFileUploadAjax(MAIN_API_IRL + "Upload/user/PostBlogsImage", 'POST', getUpdateblogImgUploadUrl, data);
}

function getUpdateblogImgUploadUrl(data) {
    console.log(data);
    var ImageUrl = data;
    var data = {};
    data.BlogId = $('#BlogId').val();
    data.BlogImagesId = $('#BlogImagesId').val();
    data.Image = IMAGE_URL + '' + ImageUrl;
    console.log(data);
    var BlogImagesId = $('#BlogImagesId').val();
    makeAjax(MAIN_API_IRL + 'BlogImages/' + BlogImagesId, 'PUT', getUpdateBlogCompleteaddStatus, data);
}

function getUpdateBlogCompleteaddStatus(data) {
    console.log(data);
    alert('Blog Update Successfully');
    window.location.reload();
}

$('#blogApproveModelBtn').click(function () {
    console.log(blogTempObject);

    var data = {};
    data.ActivitiesId = blogTempObject[0].ActivitiesId;
    var BlogId = blogTempObject[0].BlogId;
    data.BlogId = blogTempObject[0].BlogId;
    data.Title = blogTempObject[0].Title;
    data.ShortDesc = blogTempObject[0].ShortDesc;
    data.LongDesc = blogTempObject[0].LongDesc;
    data.CreateDate = blogTempObject[0].CreateDate;
    data.CreatedUser =blogTempObject[0].CreatedUser;
    data.IsApproved = true;
    data.UpdatedUser = blogTempObject[0].UpdatedUser;
    data.UpdateDate = blogTempObject[0].UpdateDate;
    data.ProfileId = blogTempObject[0].ProfileId;
    data.Status = "Approved";
    console.log(data);
    var r = confirm("Are you sure your want to Approve this Blog");
    if (r == true) {
        makeAjax(MAIN_API_IRL + "Blogs/" + BlogId, 'PUT', getBlogStatusUpdate, data);
    }

})
$('#blogRejectModelBtn').click(function () {
    console.log(blogTempObject);
    var data = {};
    data.ActivitiesId = blogTempObject[0].ActivitiesId;
    var BlogId = blogTempObject[0].BlogId;
    data.BlogId = blogTempObject[0].BlogId;
    data.Title = blogTempObject[0].Title;
    data.ShortDesc = blogTempObject[0].ShortDesc;
    data.LongDesc = blogTempObject[0].LongDesc;
    data.CreateDate = blogTempObject[0].CreateDate;
    data.CreatedUser =blogTempObject[0].CreatedUser;
    data.IsApproved = false;
    data.UpdatedUser = blogTempObject[0].UpdatedUser;
    data.UpdateDate = blogTempObject[0].UpdateDate;
    data.ProfileId = blogTempObject[0].ProfileId;
    data.Status = "Rejected";
    console.log(data);
    var r = confirm("Are you sure your want to Reject this Blog");
    if (r == true) {
        makeAjax(MAIN_API_IRL + "Blogs/" + BlogId, 'PUT', getBlogStatusUpdate, data);
    }
})

function getBlogStatusUpdate(data) {
    console.log(data);
    alert('Blog status update Successfully');
    window.location.reload();
}