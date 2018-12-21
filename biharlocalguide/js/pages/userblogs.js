$('document').ready(function () {
    // makeAjax(API_IRL + 'Blogs/GetBlogsByProfileId/' + ProfileId, 'GET', GetBlogsByProfileId);
    makeAjax(API_IRL+'Pagination/GetBlogsByProfileIdAndStatus/'+ProfileId+'/Approved?pageNumber=1&_pageSize=8&pageSize=8','GET',GetBlogsByProfileId)

    makeAjax(API_IRL + 'Pagination/GetBlogsByCityId/' + BiharCityId + '?pageNumber=0&_pageSize=8&pageSize=8', 'GET', getRecentBlogs);

})


function GetByProfileId(data) {
    if(data.Gender == "Male"){
        $('#No').html('Please Welcome '+data.FullName+'. He is a new member and he will start sharing the best stories with you soon.    ');
        $('#No').show();
    }else if(data.Gender == "Female"){
        $('#No').html('Please Welcome '+data.FullName+'. She is a new member and she will start sharing the best stories with you soon.    ');
        $('#No').show();
    }else{
        $('#No').html('Please Welcome '+data.FullName+'. He/She is a new member and he/she will start sharing the best stories with you soon.    ');
        $('#No').show();
    }
}
function getUserProfile() {
    makeAjax(API_IRL + 'Profiles/' + ProfileId, 'GET', GetByProfileId);
}
function GetBlogsByProfileId(data) {
    // data.reverse();
    if(data.length == 0){
        getUserProfile();


    }
    var activeBlogData = getActiveBlogs(data);
    // console.log(activeBlogData);
    var blogRow = '';
    for (i = 0; i < activeBlogData.length; i++) {

        console.log(data);
        var activeBlogData = getActiveBlogs(data);
        console.log(activeBlogData);
        var blogRow = '';
        for (i = 0; i < activeBlogData.length; i++) {
            blogRow += '<div class="card" style="cursor: pointer;" onclick="getBlogsId(' + activeBlogData[i].BlogId + ')">';
            if( activeBlogData[i].blogImages.length != 0){
                blogRow += '<img class="card-img-top " src="' + activeBlogData[i].blogImages[0].Image + '" alt="Card image cap">';
            }
            // blogRow += '<img class="card-img-top lazyload" data-src="' + activeBlogData[i].blogImages[0].Image + '" alt="Card image cap">';
            blogRow += '<div class="card-body">';
            blogRow += '<span style="text-transform: uppercase">'+activeBlogData[i].Title+'</span>';
            blogRow += '<h5 class="card-title" style="cursor: pointer" >'+activeBlogData[i].ShortDesc+'</h5>';
            var min = activeBlogData[i].LongDesc.split(" ").length;
            console.log(min);
            if((parseInt(min)/120)<1){
                blogRow += '<p style="font-weight:700;color: gray">1 min read</p>';

            }else{
                blogRow += '<p style="font-weight:700;color: gray">'+parseInt(parseInt(min)/120)+' min read</p>';
            }
            blogRow += '<p style="font-size: 13px;" class="card-text"><span><i class="fas fa-clock-o"></i> '+convertDateNumDateToMonthNameFormate(activeBlogData[i].CreateDate)+'</span> | <span> <i class="fas fa-user-circle"></i> '+activeBlogData[i].CreatedUser+'</span></p>';
            blogRow += ' </div>';
            blogRow += ' </div>';
        }
    }

    $('#RemainingBlogCardsDiv').append(blogRow);
}

function getRecentBlogs(data) {
    // data.reverse();
    var activeBlogData = getActiveBlogs(data);
    console.log(activeBlogData);
    var blogRow = '';

    for (i = 0; i < activeBlogData.length; i++) {
        if (i < 5) {


            blogRow += '<div class="hovereffect" style="height: auto;margin-top: 13px;cursor: pointer;" onclick="getBlogsId(' + activeBlogData[i].BlogId + ')">';
            if (activeBlogData[i].blogImages.length != 0) {
                blogRow += '<img style="filter:brightness(50%);width: 100%;min-height: 200px;max-height: 201px;" class="img-responsive" src="' + activeBlogData[i].blogImages[0].Image + '" alt="">';
            }
            blogRow += '<div class="overlay" style="height: auto;">';
            blogRow += '<h2>' + activeBlogData[i].Title + '</h2>';
            blogRow += '<p class="text-white">' + activeBlogData[i].ShortDesc + '</p>';
            blogRow += '<p class="text-white">By ' + activeBlogData[i].CreatedUser + '</p>';
            // subCatRow += '<a class="info">view</a>';
            blogRow += ' </div>';
            blogRow += '</div>';
        }else{
            blogRow += '<div class="hovereffect" style="height: auto;margin-top: 13px;cursor: pointer;" onclick="blogPage()">';
            if (activeBlogData[i].blogImages.length != 0) {
                blogRow += '<img style="filter:brightness(50%);width: 100%;min-height: 200px;max-height: 201px;" class="img-responsive" src="https://www.teknateam.com/wp-content/uploads/2016/03/See-More-Icons.png" alt="">';
            }
            blogRow += '<div class="overlay" style="height: auto;">';
            blogRow += '<h2>View More</h2>';
            // blogRow += '<p class="text-white">By ' + activeBlogData[i].CreatedUser + '</p>';
            // subCatRow += '<a class="info">view</a>';
            blogRow += ' </div>';
            blogRow += '</div>';
            break;
        }
    }
    $('#recentBlogDIv').append(blogRow)
}