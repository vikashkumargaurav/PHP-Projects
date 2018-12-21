$(document).ready(function () {
    makeAjax(API_IRL+'Pagination/GetBlogsByCityIdAndStatus/'+BiharCityId+'/Approved?pageNumber=1&_pageSize=8&pageSize=8','GET',getAllBlogsForBlogPage)
})

var firstActiveBlogId;
var paginationCount = 0;
function getAllBlogsForBlogPage(data) {
// console.log(data);
    var TopBlogHeaderRow = '';
    var TopBlogOnHeaderAsideRow = '';
    var sortedBlogDataById = data;
    showRemainingRecentBlogs(sortedBlogDataById);
    // console.log(sortedBlogDataById);
    for (i = 0; i < sortedBlogDataById.length; i++) {
        if (sortedBlogDataById[i].IsApproved == true) {
            firstActiveBlogId = sortedBlogDataById[i].BlogId;
            TopBlogHeaderRow += '<div class="card bg-dark text-white">';
            if(sortedBlogDataById[i].blogImages.length !=0){
                TopBlogHeaderRow += '<img style="min-height: auto;"  class="card-img lazyload" data-src="' + sortedBlogDataById[i].blogImages[0].Image + '" alt="Card image">';
            }else{
                TopBlogHeaderRow += '<img  class="card-img" src="img/noimg.png" alt="Card image">';
            }

            TopBlogHeaderRow += '<div onclick="getBlogsId(' + sortedBlogDataById[i].BlogId + ')"  class="card-img-overlay" style="background: #00000061;cursor: pointer;">';
            TopBlogHeaderRow += '<h5 class="card-title">' + sortedBlogDataById[i].Title + '</h5>';
            TopBlogHeaderRow += '<h3 class="card-text text-white">' + sortedBlogDataById[i].ShortDesc + '</h3>';
            var min = sortedBlogDataById[i].LongDesc.split(" ").length;
            // console.log(min);
            if((parseInt(min)/120)<1){
                TopBlogHeaderRow += '<p style="font-weight:700;color: whitesmoke">1 min read</p>';

            }else{
                TopBlogHeaderRow += '<p style="font-weight:700;color: whitesmoke">'+parseInt(parseInt(min)/120)+' min read</p>';
            }
            TopBlogHeaderRow += '<p class="card-text text-white"> <i class="fas fa-clock-o"></i> '+convertDateNumDateToMonthNameFormate(sortedBlogDataById[i].CreateDate)+'</p>';
            // TopBlogHeaderRow += '<p class="card-text text-white"> <i class="fas fa-user"></i> By '+sortedBlogDataById[i].CreatedUser+'</p>';
            TopBlogHeaderRow += '</div>';
            TopBlogHeaderRow += '</div>';

            break;
        }

    }
    $('#TopFirstBlogOnHeaderDiv').append(TopBlogHeaderRow);
    var asideDivcount = 0;
    for (j = 0; j < sortedBlogDataById.length; j++) {
        if ((sortedBlogDataById[j].IsApproved == true) && ((sortedBlogDataById[j].BlogId != firstActiveBlogId) && (asideDivcount != 2))) {
            TopBlogOnHeaderAsideRow += '<div class="blog-posts" style="margin-top: 10px;min-height: 200px;cursor: pointer">';
            TopBlogOnHeaderAsideRow += '<div class="card bg-dark text-white">';
            if(sortedBlogDataById[i].blogImages.length !=0) {
                TopBlogOnHeaderAsideRow += ' <img style="min-height: 230px;max-height: 232px;" class="card-img lazyload" data-src="' + sortedBlogDataById[j].blogImages[0].Image + '" alt=" image">';
            }else{
                TopBlogOnHeaderAsideRow += ' <img style="min-height: 230px;max-height: 232px;" class="card-img" src="img/noimg.png" alt=" image">';
            }
            TopBlogOnHeaderAsideRow += '<div onclick="getBlogsId(' + sortedBlogDataById[j].BlogId + ')" class="card-img-overlay" style="background: #00000061;cursor: pointer">';
            TopBlogOnHeaderAsideRow += '<h5 class="card-title">' + sortedBlogDataById [j].Title + '</h5>';
            TopBlogOnHeaderAsideRow += '<p class="card-text">' + sortedBlogDataById[j].ShortDesc + '</p>';
            var min = sortedBlogDataById[j].LongDesc.split(" ").length;
            // console.log(min);
            if((parseInt(min)/120)<1){
                TopBlogOnHeaderAsideRow += '<p style="font-weight:700;color: whitesmoke">1 min read</p>';
            }else{
                TopBlogOnHeaderAsideRow += '<p style="font-weight:700;color: whitesmoke">'+parseInt(parseInt(min)/120)+' min read</p>';
            }
            TopBlogOnHeaderAsideRow += '<p class="card-text"><span> <i class="fas fa-clock-o"></i> '+convertDateNumDateToMonthNameFormate(sortedBlogDataById[j].CreateDate)+'</span></p>';
            // TopBlogOnHeaderAsideRow +='<p class="card-text text-white"> <i class="fas fa-user"></i> By '+sortedBlogDataById[i].CreatedUser+'</p>';
            TopBlogOnHeaderAsideRow += '</div>';
            TopBlogOnHeaderAsideRow += '</div>';
            TopBlogOnHeaderAsideRow += '</div>';
            asideDivcount++;
        }
    }
    $('#TopBlogOnHeaderAsideDiv').append(TopBlogOnHeaderAsideRow);
}

function showRemainingRecentBlogs(data) {
    // console.log(data);
    var activeBlogData = data;
    // console.log(activeBlogData);
    var blogRow = '';
    for (i = 2; i < activeBlogData.length; i++) {
        blogRow += '<div class="card" style="cursor: pointer;" onclick="getBlogsId(' + activeBlogData[i].BlogId + ')">';
        if( activeBlogData[i].blogImages.length != 0){
            blogRow += '<img style="max-height: 250px;min-height: 249px;" class="card-img-top " src="' + activeBlogData[i].blogImages[0].Image + '" alt="Card image cap">';
        }
        // blogRow += '<img class="card-img-top lazyload" data-src="' + activeBlogData[i].blogImages[0].Image + '" alt="Card image cap">';
        blogRow += '<div class="card-body">';
        blogRow += '<span style="text-transform: uppercase">'+activeBlogData[i].Title+'</span>';
        blogRow += '<h5 class="card-title" style="cursor: pointer" >'+activeBlogData[i].ShortDesc+'</h5>';
        var min = activeBlogData[i].LongDesc.split(" ").length;
        // console.log(min);
        if((parseInt(min)/120)<1){
            blogRow += '<p style="font-weight:700;color: gray">1 min read</p>';

        }else{
            blogRow += '<p style="font-weight:700;color: gray">'+parseInt(parseInt(min)/120)+' min read</p>';
        }
        blogRow += '<p style="font-size: 13px;" class="card-text"><span><i class="fas fa-clock-o"></i> '+convertDateNumDateToMonthNameFormate(activeBlogData[i].CreateDate)+'</span> | <span> <i class="fas fa-user-circle"></i> '+activeBlogData[i].CreatedUser+'</span></p>';
        blogRow += ' </div>';
        blogRow += ' </div>';
    }

    $('#RemainingBlogCardsDiv').append(blogRow);


}






