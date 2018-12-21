$('document').ready(function () {
    $('#activity-section').hide();
    if(subcatId == null){
        console.log('subcatId Undefined');
        subcatId = 45;
    }
    makeAjax(API_IRL + 'SubCategories/' + subcatId, 'GET', getSubCategoriesdetails);
    makeAjax(API_IRL + 'GetActivitiesBySubCategoryId/' + subcatId, 'GET', getActivities);
    makeAjax(API_IRL + 'Pagination/GetBlogsBySubCategoryIdAndStatus/'+subcatId+'/Approved?pageNumber=1&_pageSize=8&pageSize=8', 'GET', getBlogs);

})

function getSubCategoriesdetails(data) {
    var catId = data.CategoriesId;
    console.log(data);

    $("meta[property='og:title']").attr("content", data.SubCategoriesName);
    if(data.SubCategoriesImage != null){
        $("meta[property='og:image']").attr("content", data.CategoriesImage);
    }

    $('meta[name=description]').attr('content',data.Description);
    $('#subCategoryNameNav').text('ABOUT '+data.SubCategoriesName);
    $('#SubCatNameMain').text(data.SubCategoriesName);
    $('#Description').html(data.Description);
    makeAjax(API_IRL + 'GetSubcategoryByCategoryId/' + data.CategoriesId, 'GET', getSubcategory);

    var categoryRow = "";

    categoryRow += '<div class="container-fluid" style="background-image: url(' + data.SubCategoriesImage + ');height: 250px;background-position: cover;" >';
    categoryRow += '<h1 style="color: white;margin: auto;padding-top: 87px;padding-left: 50px;font-weight: 900">' + data.SubCategoriesName + '</h1>';
    categoryRow += '</div>';


    $('#catheader').append(categoryRow);

}

function getSubcategory(data) {
    // console.log(data);
    var subcategoryRow = '';
    var row = 0;
    for (i = 0; i < data.length; i++) {
        if (data[i].SubCategoriesId == subcatId) {
            continue;
        } else {
            subcategoryRow += '<div class="card bg-dark text-white">';
            subcategoryRow += '<img style="min-height: 198px;max-height: 200px;" class="card-img" src="' + data[i].SubCategoriesImage + '" alt="Card image">';
            subcategoryRow += '<div onclick="getSubCategoriesId(' + data[i].SubCategoriesId + ')" class="card-img-overlay" style="    background: #0000006b;cursor: pointer;">';
            subcategoryRow += '<h5 class="card-title">' + data[i].SubCategoriesName + '</h5>';
            subcategoryRow += ' </div>';
            subcategoryRow += '</div>';
        }


    }
    $('#subCategoryDiv').append(subcategoryRow);
}

function getBlogs(data) {
    // console.log(data);

    var blogRow = "";
    var row = 0 ;
    for(i=0;i<data.length;i++){
        if(i<6){
            blogRow += '<div onclick="getBlogsId(' + data[i].BlogId + ')" class="row" style="margin-top: 10px;cursor: pointer;">';
            blogRow += '<div class="col-md-6">';
            if(data[i].blogImages.length != 0){
                blogRow += '<img width="100%;" style="min-height: 199px;" src="'+data[i].blogImages[0].Image+'">';
            }else{
                blogRow += '<img width="100%;" style="min-height: 199px;" src="img/noimg.png">';
            }
            blogRow += ' </div>';
            blogRow += '<div class="col-md-6">';
            blogRow += '<h2 style="" >'+data[i].Title+'</h2>';
            blogRow += '<h3 style="font-weight:300;max-height: 90px;overflow: hidden;">'+data[i].ShortDesc+'</h3>';
            blogRow += '<p><i class="fas fa-clock-o"></i> <span>'+convertDateNumDateToMonthNameFormate(data[i].CreateDate)+'</span> | <i class="fas fa-user-circle"></i> <span>'+data[i].CreatedUser+'</span></p>';
            blogRow += '</div>';
            blogRow += '</div>';

        }

    }
    $('#blogDiv').append(blogRow);
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

}

