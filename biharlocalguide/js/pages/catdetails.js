$('document').ready(function () {
    $('#subCatDiv').hide();
    $('#activity-section').hide();
    if(catId == null){
        console.log('CategoryId Undefined');
        catId = 13;
    }
    makeAjax(API_IRL + 'Categories/' + catId, 'GET', getCategoriesdetails)
    makeAjax(API_IRL + 'GetActivitiesByCategoryId/' + catId, 'GET', getActivities)
    // makeAjax(API_IRL + 'Blogs/GetBlogsByCategoryId/' + catId, 'GET', getBlogs)
    makeAjax(API_IRL + 'Pagination/GetBlogsByCategoryIdAndStatus/'+catId+'/Approved?pageNumber=1&_pageSize=8&pageSize=8' + catId, 'GET', getBlogs)
})

function getBlogs(data) {
    // console.log(data);
    if(data.length !=0){

    }
    var sortedBlogDataById = data.sort(SortByBlogID);
    var data = getActiveBlogs(data);
    var blogRow = "";
    var row = 0 ;
    for(i=0;i<data.length;i++){
        if(i<6){
            blogRow += '<div style="cursor: pointer;margin-top: 10px;" class="row" onclick="getBlogsId(' + data[i].BlogId + ')" >';
            blogRow += '<div class="col-md-6">';
            if(data[i].blogImages.length != 0){
                blogRow += '<img width="100%;" style="min-height: 199px;" src="'+data[i].blogImages[0].Image+'">';
            }else{
                blogRow += '<img width="100%;" style="min-height: 199px;" src="img/noimg.png">';
            }
            blogRow += ' </div>';
            blogRow += '<div class="col-md-6">';
            blogRow += '<h2  >'+data[i].Title+'</h2>';
            blogRow += '<h3 style="font-weight:300;max-height: 90px;overflow: hidden;">'+data[i].ShortDesc+'</h3>';
            blogRow += '<p><i class="fas fa-clock-o"></i> <span>'+convertDateNumDateToMonthNameFormate(data[i].CreateDate)+'</span> | <i class="fas fa-user-circle"></i> <span>'+data[i].CreatedUser+'</span></p>';
            blogRow += '</div>';
            blogRow += '</div>';
        }

    }
    $('#blogDiv').append(blogRow);
}
function getSubcategory(data) {
    // console.log(data);
    var subcategoryRow = '';
    var row = 0;
        for(i=0;i<data.length;i++){

            subcategoryRow += '<div class="card bg-dark text-white">';
            subcategoryRow += '<img style="min-height: 198px;max-height: 200px;" class="card-img" src="' + data[i].SubCategoriesImage + '" alt="Card image">';
            subcategoryRow += '<div onclick="getSubCategoriesId(' + data[i].SubCategoriesId + ')" class="card-img-overlay" style="    background: #0000006b;cursor: pointer;">';
            subcategoryRow += '<h5 class="card-title">' + data[i].SubCategoriesName + '</h5>';
            subcategoryRow += ' </div>';
            subcategoryRow += '</div>';



        }
    $('#subCategoryDiv').append(subcategoryRow);
}

function getCategoriesdetails(data) {
    // console.log(data);
    getSubcategory(data.subCategoriesList)
    $(document).attr("title", "BiharTourism Top : " +data.CategoriesName);

    // $("meta[property='og:title']").attr("content", data.CategoriesName);
    $("meta[property='og\\:title']").attr("content", data.CategoriesName);
    if(data.CategoriesImage != null){
        $("meta[property='og:image']").attr("content", data.CategoriesImage);
    }



    $('meta[name=description]').attr('content',data.Description);
    $('#catName').text('ABOUT BIHAR '+data.CategoriesName);
    $('#catNameOnNav').text(data.CategoriesName);
    $('#catNameNav').text('ABOUT BIHAR '+data.CategoriesName);
    $('#catNameAlert').text(data.CategoriesName);
    $('#Description').html(data.Description);

    var categoryRow = "";

    categoryRow += '<div class="container-fluid" style="background-image: url(' + data.CategoriesImage + ');height: 250px;background-position: center;" >';
    categoryRow += '<h1 style="color: white;margin: auto;padding-top: 87px;padding-left: 50px;font-weight: 900">'+data.CategoriesName+'</h1>';
    categoryRow += '</div>';


    $('#catheader').append(categoryRow);


}
function getActivities(data) {
    // console.log(data);
    data.reverse();
    if (data != "") {
        $('#activity-section').show();
        var activityRow = '';
        for (i = 0; i < data.length; i++) {
            activityRow +='<div class="card" style="cursor: pointer;" onclick="getActivityId(' + data[i].ActivitiesId + ')">';
            if(data[i].activityImages.length != 0){
                activityRow +='<img class="card-img-top" style="min-height: 198px;max-height: 200px;" src="'+data[i].activityImages[0].Images+'" alt="Activity Img">';
            }else{
                activityRow +='<img class="card-img-top" style="min-height: 198px;max-height: 200px;" src="img/noimg.png" alt="">';
            }
            activityRow +='<div class="card-body">';
            activityRow +='<h5 class="card-title" >'+data[i].ActivityName+'</h5>';
            activityRow +='<p><span style="font-weight: 700;font-family: -webkit-pictograph;">'+convertDateNumDateToMonthNameFormate(data[i].ValidFrom)+'</span> <i class="fas fa-arrow-right"></i> <span style="font-weight: 700;font-family: -webkit-pictograph;">'+convertDateNumDateToMonthNameFormate(data[i].ValidTo)+'</span></p>';
            activityRow +=' <p class="card-text" style="overflow: hidden;min-height:71px;max-height: 73px;">'+data[i].AboutTheActivity+'</p>';
            activityRow +=' </div>';
            activityRow +='</div>';


        }
        $('#activityDiv').append(activityRow);
    }
    // console.log(data);
}

function getActivityId(data) {
    // console.log(data);
    window.location.href = "index.php?page_name=activitydetails&activityId=" + data;
}