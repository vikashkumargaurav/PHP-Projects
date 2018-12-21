$(document).ready(function () {
    // makeAjax(API_IRL + 'GetCategoriesByCityId/' + BiharCityId, 'GET', GetCategoriesByCityId);
    makeAjax(API_IRL + 'Categories/GetContentAndCategoriesByCityId/' + BiharCityId, 'GET', GetContentAndCategoriesByCityId);
})

var CategoriesDataObj;
var countCategories = 0;

var CategoryContentArrayList = [];

function GetContentAndCategoriesByCityId(data) {
    console.log(data);
    CategoriesDataObj = data;
    var CategoriesRow = '';
    for (i = 0; i < data.length; i++) {
        if(data[i].contentList.length != 0){
            GetLatestContentByCategoryId(data[i]);
        }
        if (i == 0) {
            CategoriesRow += '<div class="col-sm" style="cursor: pointer;" onclick="getCategoriesId(' + data[i].categories.CategoriesId + ')">';
            CategoriesRow += '<div class="card bg-dark text-white">';
            if (data[i].categories.CategoriesImage != null) {
                CategoriesRow += '<img style="filter: brightness(60%);min-height: 200px;brigh" class="card-img" src="' + data[i].categories.CategoriesImage + '" alt="Card image cap">';
            }

            CategoriesRow += '<div class="card-img-overlay">';
            CategoriesRow += '<h5 class="card-title">'+data[i].categories.CategoriesName+'</h5>';
            CategoriesRow += '</div>';
            CategoriesRow += '</div>';
            CategoriesRow += '</div>';
        } else {
            CategoriesRow += '<div class="col-sm" style="cursor: pointer;" onclick="getCategoriesId(' + data[i].categories.CategoriesId + ')">';
            CategoriesRow += '<div class="card bg-dark text-white">';
            if (data[i].categories.CategoriesImage != null) {
                CategoriesRow += '<img style="filter: brightness(60%);min-height: 200px;" class="card-img" src="' + data[i].categories.CategoriesImage + '" alt="Card image cap">';
            }

            CategoriesRow += '<div class="card-img-overlay">';
            CategoriesRow += '<h5 class="card-title">'+data[i].categories.CategoriesName+'</h5>';
            CategoriesRow += '</div>';
            CategoriesRow += '</div>';
            CategoriesRow += '</div>';
        }

    }
    $('#CategorySlideNavbar').append(CategoriesRow);
}


//----------------------------------------------------------------------------------------------------------------------------------------


function GetLatestContentByCategoryId(data) {
    console.log(data);
    categoryContentsRow = '<section style="padding:50px 0;">';
    categoryContentsRow += '<div class="container">';
    categoryContentsRow += '<header>';
    categoryContentsRow += '<h1 class="h4"><span class="text-uppercase"> POPULAR IN ' + data.categories.CategoriesName + '</span><span style="cursor: pointer;font-weight: 500" onclick="getCategoriesId(' + data.categories.CategoriesId + ')" class="float-right h6">View More</span></h1><br>';
    categoryContentsRow += '</header>';
    categoryContentsRow += '<div class="card-columns4">';
    for (j = 0; j < data.contentList.length; j++) {
        if (j < 4) {
            if(data.contentList[j].ContentType != 'Image'){
                categoryContentsRow += '<div class="hovereffect1" style="margin-top: 13px;cursor: pointer;" onclick="getContentsId(' + data.contentList[j].ContentId + ')">';
                if (data.contentList[j].ContentURL != null) {
                    categoryContentsRow += '<iframe width="100%" height="200" src="https://www.youtube.com/embed/'+data.contentList[j].ContentURL+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                }
                categoryContentsRow += '<div class="overlay1">';
                categoryContentsRow += '<h2>' + data.contentList[j].Title + '</h2>';
                categoryContentsRow += ' </div>';
                categoryContentsRow += '</div>';
            }else{
                categoryContentsRow += '<div class="hovereffect1" style="margin-top: 13px;cursor: pointer;" onclick="getContentsId(' + data.contentList[j].ContentId + ')">';
                if (data.contentList[j].ContentURL != null) {
                    categoryContentsRow += '<img style="filter:brightness(50%);width: 100%;min-height: 200px;max-height: 201px;" class="img-responsive" src="' + data.contentList[j].ContentURL + '" alt="">';
                }
                categoryContentsRow += '<div class="overlay1">';
                categoryContentsRow += '<h2>' + data.contentList[j].Title + '</h2>';
                categoryContentsRow += ' </div>';
                categoryContentsRow += '</div>';
            }

        }
        // else{
        //     categoryContentsRow += '<div class="hovereffect1" style="margin-top: 13px;cursor: pointer;" onclick="getProfileId(' + data[i].ProfileId + ')">';
        //     if (data[i].ContentURL != null) {
        //         categoryContentsRow += '<img style="filter:brightness(50%);width: 100%;min-height: 200px;max-height: 201px;" class="img-responsive" src="https://www.teknateam.com/wp-content/uploads/2016/03/See-More-Icons.png" alt="">';
        //     }
        //     categoryContentsRow += '<div class="overlay1">';
        //     categoryContentsRow += '<h2>View More</h2>';
        //     categoryContentsRow += ' </div>';
        //     categoryContentsRow += '</div>';
        //     break;
        // }
    }
    categoryContentsRow += '</div>';
    categoryContentsRow += '</div>';
    categoryContentsRow += '</section>';
    categoryContentsRow += '<hr>';
    countCategories++;
    $('#categoriesContentsDiv').append(categoryContentsRow);
}

// function searchObjectByKey(a, key, value, returnkey) {
//     console.log(key);
//     console.log(value);
//     console.log(returnkey);
//     for (var i = 0; i < a.length; i++) {
//         console.log(a[i]);
//         if (a[i][key] === value) {
//             return a[i][returnkey];
//         }
//     }
//     return 0;
// }
