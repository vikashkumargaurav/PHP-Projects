$(document).ready(function () {
    makeAjax(API_IRL + 'Pagination/GetContentByCityIdAndContentType/'+BiharCityId+'/Video?pageNumber=1&_pageSize=6&pageSize=6'+BiharCityId, 'GET', GetContentByCategoryId);
})
var paginationCount = 1;
$('#readBtn').click(function () {
    paginationCount++;
    loadMoreData(paginationCount);
})
function loadMoreData(last_id){
    // console.log(last_id);
    makeAjax(API_IRL + 'Pagination/GetContentByCityIdAndContentType/'+BiharCityId+'/Video?pageNumber='+last_id+'&_pageSize=6&pageSize=6'+BiharCityId, 'GET', GetContentByCategoryId);
    // makeAjax(API_IRL+'Pagination/GetBlogsByCityIdAndStatus/'+BiharCityId+'/Approved?pageNumber='+last_id+'&_pageSize=8&pageSize=8','GET',getPaginationData)
}



function GetContentByCategoryId(data) {
    $('#postscount').html(data.length + ' posts');
    console.log(data);
    var CategoriesRow  = '';
    if(data.length != 0){
        for (i=0;i<data.length;i++){

                CategoriesRow += '<div class=" " style="cursor: pointer;" onclick="getContentsId('+data[i].ContentId+')">';
                CategoriesRow += '<div class="card mb-2">';
                if(data[i].ContentURL != null){
                    CategoriesRow += '<iframe width="100%" height="250" src="https://www.youtube.com/embed/'+data[i].ContentURL+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                }else{
                    CategoriesRow += '<img style="min-height: 200px;" class="card-img-top" src="https://www.freeiconspng.com/uploads/no-image-icon-6.png" alt="Card image cap">';
                }
                CategoriesRow += '</div>';
                CategoriesRow += '</div>';


        }
    }else{
        // CategoriesRow += '<div class="row">'
        // CategoriesRow += '<div class="col-md text-center">'
        // CategoriesRow +='<h3 style="font-weight: 300" class="text-center">no post found </h3>'
        // CategoriesRow +='</div>';
        // CategoriesRow +='</div>';
        $('#readBtn').hide();
    }
    $('#catPosts').append(CategoriesRow);
}