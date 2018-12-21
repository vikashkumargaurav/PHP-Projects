// $(document).ready(function () {
//     makeAjax(API_IRL + 'GetCategoriesByCityId/' + BiharCityId, 'GET', GetCategoriesByCityId);
//
//     //----------------------------------------------------------------
//     // makeAjax(API_IRL + 'Contents/GetContentByCategoryId/'+13, 'GET', GetTopContentByCategoryId);
//     // makeAjax(API_IRL + 'Categories/'+13, 'GET', GetTopCategoriesByCategoryId);
// })


function GetTopContentByCategoryId(data) {
    console.log(data);
    data.reverse();
    var topContent = '';

    for (i = 0; i < data.length; i++) {
        if (i < 2) {
            topContent += '<div class="hovereffect1" style="margin-top: 13px;cursor: pointer;" onclick="getContentsId(' + data[i].BlogId + ')">';
            if (data[i].ContentURL != null) {
                topContent += '<img style="filter:brightness(50%);width: 100%;min-height: 200px;max-height: 201px;" class="img-responsive" src="' + data[i].ContentURL + '" alt="">';
            }
            topContent += '<div class="overlay1">';
            topContent += '<h2>' + data[i].Title + '</h2>';
            // topContent += '<p class="text-white">' + data[i].ShortDesc + '</p>';
            // topContent += '<p class="text-white">By ' + data[i].CreatedUser + '</p>';
            // subCatRow += '<a class="info">view</a>';
            topContent += ' </div>';
            topContent += '</div>';
        }else{
            topContent += '<div class="hovereffect1" style="margin-top: 13px;cursor: pointer;" onclick="getProfileId(' + data[i].ProfileId + ')">';
            if (data[i].ContentURL != null) {
                topContent += '<img style="filter:brightness(50%);width: 100%;min-height: 200px;max-height: 201px;" class="img-responsive" src="https://www.teknateam.com/wp-content/uploads/2016/03/See-More-Icons.png" alt="">';
            }
            topContent += '<div class="overlay1">';
            topContent += '<h2>View More</h2>';
            // topContent += '<p class="text-white">By ' + data[i].CreatedUser + '</p>';
            // subCatRow += '<a class="info">view</a>';
            topContent += ' </div>';
            topContent += '</div>';
            break;
        }
    }

    $('#contentsByPopularcatDiv').append(topContent);
}