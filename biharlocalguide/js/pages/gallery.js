$('document').ready(function () {
    makeAjax(API_IRL + 'Blogs/GetBlogsByCityId/'+BiharCityId, 'GET', GetBlogsByCityId);
    makeAjax(API_IRL + 'GetSubcategoryByCityId//'+BiharCityId, 'GET', GetSubcategoryByCityId);
    makeAjax(API_IRL + 'GetCategoriesByCityId//'+BiharCityId, 'GET', GetCategoriesByCityId);
})

function GetBlogsByCityId(data) {
    // data.reverse();
    console.log(data)
    var activeBlogData = getActiveBlogs(data);
    console.log(activeBlogData);
    var blogRow = '';
    for (i = 0; i < activeBlogData.length; i++) {

        blogRow += '<div class="hovereffect" style="margin-top: 13px;cursor: pointer;" onclick="getBlogsId(' + activeBlogData[i].BlogId + ')">';
        if(activeBlogData[i].blogImages.length != 0) {
            blogRow += '<img style="width: 100%;min-height: 200px;" class="img-responsive" src="'+activeBlogData[i].blogImages[0].Image +'" alt="">';
        }
        blogRow += '<div class="overlay">';
        blogRow += '<h2>'+activeBlogData[i].Title+'</h2>';
        blogRow += '<p class="text-white">By '+activeBlogData[i].CreatedUser+'</p>';
        // subCatRow += '<a class="info">view</a>';
        blogRow += ' </div>';
        blogRow += '</div>';
    }

    $('#RemainingBlogCardsDiv').append(blogRow);
}


function GetSubcategoryByCityId(data) {
    console.log(data);
    var subCatRow = '';
    for (i = 0; i < data.length; i++) {

        subCatRow += '<div class="hovereffect" style="margin-top: 13px;cursor: pointer;" onclick="getSubCategoriesId(' + data[i].SubCategoriesId + ')">';
        if( data[i].SubCategoriesImage != '') {
            subCatRow += '<img style="width: 100%;min-height: 200px;" class="img-responsive" src="'+data[i].SubCategoriesImage +'" alt="">';
        }
        subCatRow += '<div class="overlay">';
        subCatRow += '<h2>'+data[i].SubCategoriesName+'</h2>';
        // subCatRow += '<a class="info">view</a>';
        subCatRow += ' </div>';
        subCatRow += '</div>';
    }

    $('#subCategoryGalleryDiv').append(subCatRow);
}

function GetCategoriesByCityId(data) {
    console.log(data);
    var CatRow = '';
    for (i = 0; i < data.length; i++) {
        CatRow += '<div class="card" style="cursor: pointer;" onclick="getCategoriesId(' + data[i].CategoriesId + ')">';
        // blogRow += '<img class="card-img-top " src="' + activeBlogData[i].blogImages[0].Image + '" alt="Card image cap">';
        if( data[i].CategoriesImage != ''){
            CatRow += '<img class="card-img-top lazyload " data-src="' + data[i].CategoriesImage + '" alt="'+data[i].CategoriesName+'">';
        }else{
            // alert(activeBlogData[i].BlogId);
        }
        CatRow += ' </div>';
    }

    $('#CategoryGalleryDiv').append(CatRow);
}