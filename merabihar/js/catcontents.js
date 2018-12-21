$(document).ready(function () {
    makeAjax(API_IRL + 'Contents/GetContentByCategoryId/'+CategoryId, 'GET', GetContentByCategoryId);
    makeAjax(API_IRL + 'Categories/'+CategoryId, 'GET', GetCategoriesByCategoryId);
})

function GetCategoriesByCategoryId(data) {
    console.log(data);
    var CategoryRow = '';
    CategoryRow += '<div class=""  style="padding: 10px">';
    CategoryRow += ' <div class="row">';
    CategoryRow += '<div class="col-md-3 ">';
    if (data.CategoriesImage == null) {
        CategoryRow += ' <img style="border-radius: 8.25rem !important;min-height: 150px;max-height: 151px;min-width: 150px;max-width: 151px" src="img/noprofileimage.png" alt="..." class="img-fluid">';
    } else {
        CategoryRow += ' <img style="border-radius: 8.25rem !important;min-height: 150px;max-height: 151px;min-width: 150px;max-width: 151px" src="' + data.CategoriesImage + '" alt="..." class="img-fluid">';
    }
    CategoryRow += ' </div>';
    CategoryRow += '<div class="col-md-9 " style="padding: 10px;">';
    CategoryRow += ' <h3 style="font-weight: 300;cursor:pointer;" class=""><span>' + data.CategoriesName + '</span><br><small style="font-size: medium">'+data.Description+'</small></h3>';
    CategoryRow += ' <p id="postscount"></p>';
    CategoryRow += ' </div>';
    // CategoryRow += ' <div class="col-3 " style="padding: 10px;">';
    // CategoryRow += '<button class=" btn btn-outline-primary " onclick="deleteFollows(' + data[i].followMapping.FollowId + ')">Following</button>';
    // CategoryRow += '</div>';
    CategoryRow += ' </div>';
    CategoryRow += '</div>';

    $('#categoryDiv').append(CategoryRow)
}
function GetContentByCategoryId(data) {
    $('#postscount').html(data.length + ' posts');
    console.log(data);

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