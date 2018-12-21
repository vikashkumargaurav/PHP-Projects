$('document').ready(function () {
    makeAjax(MAIN_API_IRL + 'Blogs', 'GET', getAllBlogs);
})
var blogTempObject;

function getAllBlogs(data) {
    console.log(data);
    var row = 0;
    var LatestBlogRow = '';
    for (i = 0; i < data.length; i++) {
        if (data[i].IsApproved == false) {
            row ++;
            LatestBlogRow += '<div class="card">';
            LatestBlogRow += ' <div class="card-header" id="heading_' + data[i].BlogId + '">';
            LatestBlogRow += '<span class="mb-0">';
            LatestBlogRow += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse_' + data[i].BlogId + '" aria-expanded="true" aria-controls="collapseOne">' + data[i].Title + ' /</button></span>';

            LatestBlogRow += '<i  class="fa fa-user"></i> <span>' + data[i].CreatedUser + ' /  <i  class="fa fa-clock"></i>  ' + convertDateNumDateToMonthNameFormate(data[i].CreateDate);
            +'</span> / <span class="badge btn-outline-warning">'+data[i].Status+'</span>';
            LatestBlogRow += '<span style="float: right;"><button onclick="getBlogId(\'' + data[i].BlogId + '\')" class="btn btn-danger">Approve</button></span>';
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
            if (data[i].blogImages != "") {
                LatestBlogRow += '<p><img src="' + data[i].blogImages[0].Image + '" width="100%"> </p>';
            }
            LatestBlogRow += '</div>';

            LatestBlogRow += '</div>';
            LatestBlogRow += '</div>';
            LatestBlogRow += '</div>';
            LatestBlogRow += '</div>';
            LatestBlogRow += '</div>';

        }
    }
    if(row == 0){
        LatestBlogRow += '<span> No pending Blogs</span>';
    }
    $('#latestBlogShowDiv').append(LatestBlogRow);
}

function getBlogId(data) {
    var r = confirm("Are you sure your want to Approve this Blog");
    if (r == true) {
        makeAjax(MAIN_API_IRL + 'Blogs/' + data, 'GET', getBlogsById);
    }

    // data = JSON.parse(atob(data));
    // console.log(data);

}

function getBlogsById(data) {
    blogTempObject = data;
    var data = {};
    data.ActivitiesId = blogTempObject[0].ActivitiesId;
    var BlogId = blogTempObject[0].BlogId;
    data.BlogId = blogTempObject[0].BlogId;
    data.Title = blogTempObject[0].Title;
    data.ShortDesc = blogTempObject[0].ShortDesc;
    data.LongDesc = blogTempObject[0].LongDesc;
    data.CreateDate = blogTempObject[0].CreateDate;
    data.CreatedUser = blogTempObject[0].CreatedUser;
    data.IsApproved = true;
    data.UpdatedUser = blogTempObject[0].UpdatedUser;
    data.UpdateDate = blogTempObject[0].UpdateDate;
    data.ProfileId = blogTempObject[0].ProfileId;
    data.Status = 'Approved';
    console.log(data);

    makeAjax(MAIN_API_IRL + "Blogs/" + BlogId, 'PUT', getBlogStatusUpdate, data);

}

function getBlogStatusUpdate(data) {
    console.log(data);
    alert('Blog status update Successfully');
    window.location.reload();
}