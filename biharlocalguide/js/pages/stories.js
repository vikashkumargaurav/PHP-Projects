$('document').ready(function () {
    makeAjax(API_IRL + 'Blogs/GetBlogsByProfileId/' + aid, 'GET', getAllBlogs);
})
var blogTempObject;

function getAllBlogs(data) {
    console.log(data);
    data.reverse();
    var row = 0;
    var LatestBlogRow = '';
    for (i = 0; i < data.length; i++) {
        // if (data[i].IsApproved == true || ) {
        row++;
        LatestBlogRow += '<div class="card" style="margin-top: 10px;">';
        LatestBlogRow += ' <div class="card-header" id="heading_' + data[i].BlogId + '">';
        LatestBlogRow += '<span class="mb-0">';
        LatestBlogRow += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse_' + data[i].BlogId + '" aria-expanded="true" aria-controls="collapseOne">' + data[i].Title + ' /</button></span>';
        if(data[i].Status == 'Approved'){
            LatestBlogRow += ' <i  class="fa fa-clock"></i>  ' + convertDateNumDateToMonthNameFormate(data[i].CreateDate)
                + '</span> / <span class="badge btn-success border float-right">' + data[i].Status + '</span>';
        }else if(data[i].Status == 'Pending'){
            LatestBlogRow += ' <i  class="fa fa-clock"></i>  ' + convertDateNumDateToMonthNameFormate(data[i].CreateDate)
                + '</span> / <span class="badge btn-warning border float-right">' + data[i].Status + '</span>';
        }else{
            LatestBlogRow += ' <i  class="fa fa-clock"></i>  ' + convertDateNumDateToMonthNameFormate(data[i].CreateDate)
                + '</span> / <span class="badge btn-danger border float-right">' + data[i].Status + '</span>';
        }

        // LatestBlogRow += '<span style="float: right;"><button onclick="getBlogId(\'' + data[i].BlogId + '\')" class="btn btn-danger">Approve</button></span>';
        LatestBlogRow += ' </div>';

        LatestBlogRow += '<div id="collapse_' + data[i].BlogId + '" class="collapse " aria-labelledby="heading_' + data[i].BlogId + '" data-parent="#accordionExample">';
        LatestBlogRow += '<div class="card-body">';
        LatestBlogRow += '<div class="container">';

        LatestBlogRow += ' <div class="row">';
        LatestBlogRow += '<div class="col-lg">';
        LatestBlogRow += '<h3>' + data[i].ShortDesc + '</h3>';
        LatestBlogRow += '<p >' + data[i].LongDesc + '</p>';
        LatestBlogRow += '</div>';

        LatestBlogRow += '<div class="col-lg">';
        if(data[i].blogImages == ''){
            LatestBlogRow += '<p><img src="img/noimg.png" width="100%"> </p>';
        }else{
            LatestBlogRow += '<p><img src="' + data[i].blogImages[0].Image + '" width="100%"> </p>';
        }

        LatestBlogRow += '</div>';
        LatestBlogRow += '</div>';

        LatestBlogRow += '<div class="row">';
        LatestBlogRow += '<div class="col-lg">';

        LatestBlogRow += '<button onclick="getBlogIdForDelete(' + data[i].BlogId + ')" style="margin-left: 10px;" class="btn btn-outline-danger float-right">Delete</button>';
        // LatestBlogRow += '<button class="btn btn-outline-warning float-right">Edit</button>';

        LatestBlogRow += '</div>';
        LatestBlogRow += '</div>';


        LatestBlogRow += '</div>';
        LatestBlogRow += '</div>';
        LatestBlogRow += '</div>';
        LatestBlogRow += '</div>';

        // }
    }
    if (row == 0) {
        LatestBlogRow += '<span> No pending Blogs</span>';
    }
    $('#latestBlogShowDiv').append(LatestBlogRow);
}


function getBlogIdForDelete(data) {
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
        makeAjax(API_IRL + 'Blogs/' + data, 'DELETE', getBlogDeleteConfirm);
    }
}

function getBlogDeleteConfirm(data) {
    console.log(data);
    alert('Blog  ' + data.Title + ' deleted successfully ');
    window.location.reload();
}