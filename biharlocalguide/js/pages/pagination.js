var paginationCount = 1;
// $(window).scroll(function() {
//     if($(window).scrollTop() + $(window).height() >= $(document).height()) {
//         // var last_id = $(".post-id:last").attr("id");
//         paginationCount++;
//         loadMoreData(paginationCount);
//     }
// });

$('#readBtn').click(function () {
    paginationCount++;
    loadMoreData(paginationCount);
})
function loadMoreData(last_id){
    // console.log(last_id);
    makeAjax(API_IRL+'Pagination/GetBlogsByCityIdAndStatus/'+BiharCityId+'/Approved?pageNumber='+last_id+'&_pageSize=8&pageSize=8','GET',getPaginationData)
}

function getPaginationData(data) {
    console.log(data);
    if(data.length == 0){
        $('#readBtn').hide();
    }
    // console.log(data);
    var blogRow = '';
    for (i = 0; i < data.length; i++) {
        blogRow += '<div class="card" style="cursor: pointer;" onclick="getBlogsId(' + data[i].BlogId + ')">';
        // if( data[i].blogImages.length != 0){
            blogRow += '<img style="max-height: 250px;min-height: 249px;" class="card-img-top " src="' + data[i].blogImages[0].Image + '" alt="Card image cap">';
        // }
        // blogRow += '<img class="card-img-top lazyload" data-src="' + activeBlogData[i].blogImages[0].Image + '" alt="Card image cap">';
        blogRow += '<div class="card-body">';
        blogRow += '<span style="text-transform: uppercase">'+data[i].Title+'</span>';
        blogRow += '<h5 class="card-title" style="cursor: pointer" >'+data[i].ShortDesc+'</h5>';
        var min = data[i].LongDesc.split(" ").length;
        console.log(min);
        if((parseInt(min)/120)<1){
            blogRow += '<p style="font-weight:700;color: gray">1 min read</p>';

        }else{
            blogRow += '<p style="font-weight:700;color: gray">'+parseInt(parseInt(min)/120)+' min read</p>';
        }
        blogRow += '<p style="font-size: 13px;" class="card-text"><span><i class="fas fa-clock-o"></i> '+convertDateNumDateToMonthNameFormate(data[i].CreateDate)+'</span> | <span> <i class="fas fa-user-circle"></i> '+data[i].CreatedUser+'</span></p>';
        blogRow += ' </div>';
        blogRow += ' </div>';
    }

    $('#RemainingBlogCardsDiv').append(blogRow);
}