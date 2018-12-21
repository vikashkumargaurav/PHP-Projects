$('document').ready(function () {
    // $('#activity-section').hide();
    if(blogId == null){
        console.log('activityId Undefined');
        window.location.href = "blogs.php";
    }
    makeAjax(API_IRL + 'Blogs/' + blogId, 'GET', getBlogsdetails);
    // makeAjax(API_IRL + 'Blogs/GetBlogsByCityId/'+BiharCityId, 'GET', getTopBlogs);
    makeAjax(API_IRL + 'Pagination/GetBlogsByCityIdAndStatus/'+BiharCityId+'/Approved?pageNumber=1&_pageSize=8&pageSize=8', 'GET', getTopBlogs);
    myShare();

})


function myShare() {
    var x = document.URL;
    // var x = 'http://bihartourism.org/index.php?page_name=blogdetails&blogId=55';
    document.getElementById("jinu").src = 'https://www.facebook.com/plugins/share_button.php?href='+x+'&layout=button_count&size=large&mobile_iframe=true&width=83&height=28&appId';
}
$('#shareUrlBtn').click(function () {
    var pageURL = $(location).attr("href");
    FB.ui({
        method: 'share',
        display: 'popup',
        href: 'https://developers.facebook.com/docs/',
    }, function(response){});
})
var words_count ;
function getBlogsdetails(data) {
    $(document).attr("title", data[0].ShortDesc);
    var min = data[0].LongDesc.split(" ").length;
    console.log(min);
    if((parseInt(min)/120)<1){
       $('#ReadTime').text('1 min read');

    }else{
        $('#ReadTime').text(parseInt(parseInt(min)/120)+' min read');
    }
    var ActivityId = data[0].ActivitiesId;
    var SubCategoriesId = data[0].activities.SubCategoriesId;
    makeAjax(API_IRL + 'Blogs/GetBlogsByActivityId//' + ActivityId, 'GET', getBlogsdetailsByActivityId);
    makeAjax(API_IRL + 'GetActivitiesBySubCategoryId/'+SubCategoriesId, 'GET', getActivitiesBySubCategoryId);

    $('#ActivityName').text(data[0].activities.ActivityName);
    $('#BlogName').html(data[0].Title);

    $('#BlogNameMain').html(data[0].ShortDesc);
    $('#CreatedUser').html(' <span style="color: blue;padding:5px"> '+data[0].CreatedUser+'</span>');

    $('#LongDesc').html(data[0].LongDesc);
    var CreateDate = data[0].CreateDate.split("T");
    var UpdateDate = data[0].UpdateDate.split("T");
    $('#CreateDate').text(convertDateNumDateToMonthNameFormate(data[0].CreateDate));
    $('#UpdateDate').text(UpdateDate[0]);
    if(data[0].blogImages.length != 0){
        $('#blogImage').html('<img width="100%" src="'+data[0].blogImages[0].Image+'" alt="..." class="img-fluid">');

    }else{
        $('#blogImage').html('<img width="100%" src="img/noimg.png" alt="..." class="img-fluid">');
    }

    if(data[0].profile.ProfilePhoto != null){
        $('#ProfilePhoto').html('<img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="'+data[0].profile.ProfilePhoto+'" alt="..." class="img-fluid">  ');
    }else{
        $('#ProfilePhoto').html('<img style="border-radius: 8.25rem !important;min-height: 64px;max-height: 65px;min-width: 64px;max-width: 65px" src="https://datacenterresources.com/wp-content/uploads/2017/06/missing-profile-photo.png" alt="..." class="img-fluid">  ');
    }

}

function getBlogsdetailsByActivityId(data) {
    console.log(data);
    var relatedBlogRow = '';
     for (i=0;i<data.length;i++){
         if(data[i].BlogId == blogId){
             continue;
         }else{
             if(i<6){

                 relatedBlogRow += '<div style="cursor: pointer;" class="item d-flex align-items-center" onclick="getBlogsId(' + data[i].BlogId + ')">';
                 if(data[i].blogImages.length !=0){
                     relatedBlogRow += '<div class="image" ><img src="'+data[i].blogImages[0].Image+'" alt="..." class="img-fluid"></div>';
                 }else{
                     relatedBlogRow += '<div class="image" ><img src="img/noimg.png" alt="..." class="img-fluid"></div>';
                 }

                 relatedBlogRow += '<div class="title"><strong>'+data[i].ShortDesc+'</strong>';
                 relatedBlogRow += '<div class="d-flex align-items-center">';
                 relatedBlogRow += '<div class="views"><i class="fas fa-user-circle"></i>'+data[i].CreatedUser+'</div>';
                 // relatedBlogRow += ' <div class="comments"><i class="icon-eye"></i></div>';
                 relatedBlogRow += '</div>';
                 relatedBlogRow += '</div>';
                 relatedBlogRow += '</div>';
             }

         }


     }
     $('#relatedBlogsDiv').append(relatedBlogRow);
}

function getTopBlogs(data1) {
    console.log(data1);
    var topBlogRow = '';
    // var sortedBlogDataById = data1.reverse(SortByBlogID);
    var data = data1;
    for (i=0;i<data.length;i++){
        if(data[i].BlogId == blogId){
            continue;
        }else{

            if(i<6){

                topBlogRow += '<div class="blog-posts" style="margin-top: 0px;min-height: 200px;">';
                topBlogRow += '<div class="card bg-dark text-white">';
                if(data[i].blogImages.length !=0){
                    topBlogRow += ' <img style="min-height: 230px;max-height: 232px;" class="card-img" src="' + data[i].blogImages[0].Image + '" alt="Card image">';
                }else{
                    topBlogRow += ' <img style="min-height: 230px;max-height: 232px;" class="card-img" src="img/noimg.png" alt="Card image">';
                }

                topBlogRow += '<div onclick="getBlogsId(' + data[i].BlogId + ')" class="card-img-overlay" style="background: #00000061;cursor: pointer">';
                topBlogRow += '<h5 class="card-title">' + data [i].Title + '</h5>';
                topBlogRow += '<p class="card-text">' + data[i].ShortDesc + '</p>';
                topBlogRow += '<p class="card-text"><span> <i class="fas fa-clock-o"></i> '+convertDateNumDateToMonthNameFormate(data[i].CreateDate)+'</span></p>';
                topBlogRow += '</div>';
                topBlogRow += '</div>';
                topBlogRow += '</div>';
            }
        }


    }
    $('#topBlogsDiv').append(topBlogRow);
}

function getActivitiesBySubCategoryId(data) {
    console.log(data);
    var activityRow = '';
    var row = 0;
    if(row < 6)
        for(i=0;i<data.length;i++){
            if(i < 5){
                activityRow += '<div style="cursor: pointer;" class="col-md-4" onclick="getActivityId(' + data[i].ActivitiesId + ')">';
                activityRow += '<div class="card bg-dark black-white " style="border: none; box-shadow: 11px 7px 81px #9e9e9ea1;">';
                activityRow += '<img style="min-height: 280px;max-height: 281px" class="card-img" src="'+data[i].activityImages[0].Images+'" alt=" image">';
                activityRow += '<div class="card-img-overlay">';
                activityRow += '<h5 class="card-title" style=" margin-left: -20px;padding: 10px;background: white;">'+data[i].ActivityName +'</h5>';
                // activityRow += '<p class="card-text" style="overflow: hidden;max-height: 61px;background: white;padding: 10px;">'+data[i].AboutTheActivity+'</p>';
                activityRow += ' </div>';
                activityRow += ' </div>';
                activityRow += ' </div>';

            }

        }
    $('#relatedActivitysByBlogSubcategoryDIv').append(activityRow);
}