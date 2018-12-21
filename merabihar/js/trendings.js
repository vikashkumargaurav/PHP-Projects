$(document).ready(function () {
    makeAjax(API_IRL + 'Contents/GetContentByCityId/'+BiharCityId, 'GET', GetContentByCategoryId);
    // makeAjax(API_IRL + 'Pagination/GetContents?pageNumber=1&_pageSize=8&pageSize=8', 'GET', GetContentByCategoryId);
})


function GetContentByCategoryId(data) {
    $('#postscount').html(data.length + ' posts');
    console.log(data);
    // data.reverse();
    var CategoriesRow  = '';
    if(data.length != 0){
        for (i=0;i<data.length;i++){
            if(data[i].ContentType != 'Image'){
                CategoriesRow += '<div class=" " style="cursor: pointer;" onclick="getContentsId('+data[i].ContentId+')">';
                CategoriesRow += '<div class="card mb-2">';
                if(data[i].ContentURL != null){
                    CategoriesRow += '<iframe width="100%" height="250" src="https://www.youtube.com/embed/'+data[i].ContentURL+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                }else{
                    CategoriesRow += '<img style="min-height: 200px;" class="card-img-top" src="https://www.freeiconspng.com/uploads/no-image-icon-6.png" alt="Card image cap">';
                }
                CategoriesRow += '</div>';
                CategoriesRow += '</div>';
            }else{
                CategoriesRow += '<div class=" " style="cursor: pointer;" onclick="getContentsId('+data[i].ContentId+')">';
                CategoriesRow += '<div class="card mb-2">';
                if(data[i].contentImage.length != 0){
                    CategoriesRow += '<img style="min-height: 200px;" class="card-img-top" src="'+data[i].contentImage[0].Images+'" alt="Card image cap">';
                }else{
                    CategoriesRow += '<img style="min-height: 200px;" class="card-img-top" src="https://www.freeiconspng.com/uploads/no-image-icon-6.png" alt="Card image cap">';
                }
                CategoriesRow += '</div>';
                CategoriesRow += '</div>';
            }



        }
    }else{
        CategoriesRow += '<div class="row">'
        CategoriesRow += '<div class="col-md text-center">'
        CategoriesRow +='<h3 style="font-weight: 300" class="text-center">no post found </h3>'
        CategoriesRow +='</div>';
        CategoriesRow +='</div>';
    }
    $('#catPosts').append(CategoriesRow);
}