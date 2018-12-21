$('document').ready(function () {
    makeAjax(API_IRL + 'Pagination/GetBlogsByCityIdAndStatus/'+BiharCityId+'/Approved?pageNumber=1&_pageSize=8&pageSize=8', 'GET', getBlogs);
    makeAjax(API_IRL + 'Pagination/GetBlogsByProfileIdAndStatus/'+78+'/Approved?pageNumber=1&_pageSize=8&pageSize=8', 'GET', GetBlogsByProfileId);
    // 78 admin profle id
    makeAjax(API_IRL + 'GetSubcategoryByCityId/' + BiharCityId, 'GET', getSubCategoryByCityId);
    //  Bihar Admin ProfileId = 78

    // famous Blogger
    makeAjax(API_IRL + 'Blogs/GetBlogsOfTopBlogger', 'GET', GetFamousBloggerBlogsByProfileId);
    // makeAjax(API_IRL + 'GetActivitiesByCityId/'+BiharCityId, 'GET', getActvities);
    makeAjax(API_IRL + 'Profiles', 'GET', getBlogsByUsers);

    makeAjax(API_IRL + 'Pagination/GetActivitiesByCityId/' + BiharCityId + '?pageNumber=1&_pageSize=8&pageSize=8', 'GET', getActvities);
})


function getActvities(data) {
    // console.log(data);
    // data.reverse();
    var activityRow = '';
    var row = 0;
    if (row < 6)
        for (i = 0; i < data.length; i++) {
            if (i < 6) {
                activityRow += '<div class="card" style="cursor: pointer;" onclick="getActivityId(' + data[i].ActivitiesId + ')">';
                if (data[i].activityImages.length != 0) {
                    activityRow += '<img class="card-img-top" style="min-height: 198px;max-height: 200px;" src="' + data[i].activityImages[0].Images + '" alt="Activity Img">';
                } else {
                    activityRow += '<img class="card-img-top" style="min-height: 198px;max-height: 200px;" src="img/noimg.png" alt="">';
                }
                activityRow += '<div class="card-body">';

                activityRow += '<h5 class="card-title"  >' + data[i].ActivityName + '</h5>';
                activityRow += '<p><span style="font-weight: 700;font-family: -webkit-pictograph;">' + convertDateNumDateToMonthNameFormate(data[i].ValidFrom) + '</span> <i class="fas fa-arrow-right"></i> <span style="font-weight: 700;font-family: -webkit-pictograph;">' + convertDateNumDateToMonthNameFormate(data[i].ValidTo) + '</span></p>';
                activityRow += ' <p class="card-text" style="overflow: hidden;min-height:71px;max-height: 73px;">' + data[i].AboutTheActivity + '</p>';
                activityRow += ' </div>';
                activityRow += '</div>';

            }

        }
    $('#topActivitys').append(activityRow);
}

function getSubCategoryByCityId(data) {
    /// top experience showing all sub cat div
    console.log(data);
    var destinationRow = '';
    for (i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            destinationRow += '<div class="card" onclick="getSubCategoriesId(' + data[i].SubCategoriesId + ')" style="cursor: pointer;">';
            destinationRow += '<img class="card-img-top" style="min-height: 198px;max-height: 200px;" src="' + data[i].SubCategoriesImage + '" alt="Card image cap">';
            destinationRow += '<div class="card-body">';
            destinationRow += '<h5 class="card-title" style="cursor: pointer;" >' + data[i].SubCategoriesName + '</h5>';
            destinationRow += ' <p class="card-text" style="overflow: hidden;max-height: 73px;">' + data[i].Description + '</p>';
            destinationRow += ' </div>';
            destinationRow += '</div>';
        } else {
            destinationRow += '<div class="card bg-dark text-white" style="cursor: pointer;" onclick="getSubCategoriesId(' + data[i].SubCategoriesId + ')">';
            destinationRow += '<img style="min-height: 198px;max-height: 200px;" class="card-img" src="' + data[i].SubCategoriesImage + '" alt="Card image">';
            destinationRow += '<div class="card-img-overlay" style="background: #0000006b;">';
            destinationRow += '<h5 class="card-title">' + data[i].SubCategoriesName + '</h5>';
            destinationRow += '<p class="card-text" style="overflow: hidden;max-height: 73px;">' + data[i].Description + '</p>';
            destinationRow += ' </div>';
            destinationRow += '</div>';

        }
    }
    $('#topDestinations').append(destinationRow);
}

function getBlogs(data) {
    // console.log(data);
    var blogRow = '';
    var row = 1;
    for (i = 0; i < data.length; i++) {
        // if (i < 7) {
            blogRow += '<div style="cursor: pointer;margin-top: 10px;" class="row" onclick="getBlogsId(' + data[i].BlogId + ')" >';
            blogRow += '<div class="col-md-6">';
            if (data[i].blogImages.length != 0) {
                blogRow += '<img width="100%;" style="min-height: 199px;    border-radius: .5rem 0 0 .5rem" src="' + data[i].blogImages[0].Image + '">';
            } else {
                blogRow += '<img width="100%;" style="min-height: 199px;" src="img/noimg.png">';
            }

            blogRow += ' </div>';
            blogRow += '<div class="col-md-6">';
            blogRow += '<h2  >' + data[i].Title + '</h2>';
            blogRow += '<h3 style="font-weight:300;max-height: 90px;overflow: hidden;">' + data[i].ShortDesc + '</h3>';
            if (parseInt((data[i].LongDesc.split(" ").length) / 120) < 1) {
                blogRow += '<p style="font-weight:700;">1 min read</p>';

            } else {
                blogRow += '<p style="font-weight:700;">' + parseInt((data[i].LongDesc.split(" ").length) / 120) + ' min read</p>';
            }
            blogRow += '<p><i class="fas fa-clock-o"></i> <span>' + convertDateNumDateToMonthNameFormate(data[i].CreateDate) + '</span> | <i class="fas fa-user-circle"></i> <span>' + data[i].CreatedUser + '</span></p>';

            blogRow += '</div>';
            blogRow += '</div>';

        // }
    }
    $('#topBlogDIv').append(blogRow)

}
function getBlogsByUsers(data) {
    // data.reverse();
    var activeBlogData = data.reverse();
    // console.log(data);
    var blogRow = '';

    for (i = 0; i < activeBlogData.length; i++) {
        if (i < 3) {
            blogRow += '<div class="hovereffect1" style="margin-top: 13px;cursor: pointer;" onclick="getProfileId(' + activeBlogData[i].ProfileId + ')">';
            if (activeBlogData[i].ProfilePhoto != null) {
                blogRow += '<img style="filter:brightness(50%);width: 100%;min-height: 200px;max-height: 201px;" class="img-responsive" src="' + activeBlogData[i].ProfilePhoto + '" alt="">';
            }else{
                blogRow += '<img style="filter:brightness(50%);width: 100%;min-height: 200px;max-height: 201px;" class="img-responsive" src="http://www.rhythmskateshop.com/wp-content/uploads/2014/09/No-Profile-Img.jpg" alt="">';
            }
            blogRow += '<div class="overlay1">';
            blogRow += '<h2>' + activeBlogData[i].FullName + '</h2>';
            blogRow += ' </div>';
            blogRow += '</div>';
        }
    }

    $('#blogsByUserProfileIdDiv').append(blogRow);
}

function GetBlogsByProfileId(data) {
    // data.reverse();
    var activeBlogData = data;
    // console.log(activeBlogData);
    var blogRow = '';

    for (i = 0; i < activeBlogData.length; i++) {
        if (i < 5) {


            blogRow += '<div class="hovereffect1" style="margin-top: 13px;cursor: pointer;" onclick="getBlogsId(' + activeBlogData[i].BlogId + ')">';
            if (activeBlogData[i].blogImages.length != 0) {
                blogRow += '<img style="filter:brightness(50%);width: 100%;min-height: 200px;max-height: 201px;" class="img-responsive" src="' + activeBlogData[i].blogImages[0].Image + '" alt="">';
            }
            blogRow += '<div class="overlay1">';
            blogRow += '<h2>' + activeBlogData[i].Title + '</h2>';
            blogRow += '<p class="text-white">' + activeBlogData[i].ShortDesc + '</p>';
            blogRow += '<p class="text-white">By ' + activeBlogData[i].CreatedUser + '</p>';
            // subCatRow += '<a class="info">view</a>';
            blogRow += ' </div>';
            blogRow += '</div>';
        }else{
            blogRow += '<div class="hovereffect1" style="margin-top: 13px;cursor: pointer;" onclick="getProfileId(' + activeBlogData[i].ProfileId + ')">';
            if (activeBlogData[i].blogImages.length != 0) {
                blogRow += '<img style="filter:brightness(50%);width: 100%;min-height: 200px;max-height: 201px;" class="img-responsive" src="https://www.teknateam.com/wp-content/uploads/2016/03/See-More-Icons.png" alt="">';
            }
            blogRow += '<div class="overlay1">';
            blogRow += '<h2>View More</h2>';
            blogRow += '<p class="text-white">By ' + activeBlogData[i].CreatedUser + '</p>';
            // subCatRow += '<a class="info">view</a>';
            blogRow += ' </div>';
            blogRow += '</div>';
            break;
        }
    }

    $('#blogsByProfileIdDiv').append(blogRow);
}

function GetFamousBloggerBlogsByProfileId(data) {
    // data.reverse();
    var activeBlogData = getActiveBlogs(data);
    // console.log(activeBlogData);
    var blogRow = '';

    for (i = 0; i < activeBlogData.length; i++) {
        if (i < 2) {


            blogRow += '<div class="hovereffect1" style="margin-top: 13px;cursor: pointer;" onclick="getBlogsId(' + activeBlogData[i].BlogId + ')">';
            if (activeBlogData[i].blogImages.length != 0) {
                blogRow += '<img style="filter:brightness(50%);width: 100%;min-height: 250px;max-height: 251px;" class="img-responsive" src="' + activeBlogData[i].blogImages[0].Image + '" alt="">';
            }
            blogRow += '<div class="overlay1">';
            blogRow += '<h2>' + activeBlogData[i].Title + '</h2>';
            blogRow += '<p class="text-white">' + activeBlogData[i].ShortDesc + '</p>';
            blogRow += '<p class="text-white">By ' + activeBlogData[i].CreatedUser + '</p>';
            // subCatRow += '<a class="info">view</a>';
            blogRow += ' </div>';
            blogRow += '</div>';
        }else{
            blogRow += '<div class="hovereffect1" style="margin-top: 13px;cursor: pointer;" onclick="getProfileId(' + activeBlogData[i].ProfileId + ')">';
            if (activeBlogData[i].blogImages.length != 0) {
                blogRow += '<img style="width: 100%;min-height: 250px;max-height: 251px;" class="img-responsive" src="https://www.teknateam.com/wp-content/uploads/2016/03/See-More-Icons.png" alt="">';
            }
            blogRow += '<div class="overlay1">';
            blogRow += '<h2>View More</h2>';
            blogRow += '<p class="text-white">By ' + activeBlogData[i].CreatedUser + '</p>';
            // subCatRow += '<a class="info">view</a>';
            blogRow += ' </div>';
            blogRow += '</div>';
            break;
        }
    }

    $('#blogsByFamousProfileIdDiv').append(blogRow);
}