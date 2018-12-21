$('document').ready(function () {
    makeAjax(API_IRL + 'GetCategoriesByCityId/' + BiharCityId, 'GET', getCategories);


})

function getCategories(data) {
    // console.log(data);
    FIRSTCATID = data[0].CategoriesId;
    var catrow = '';
    var catDivRow = '';
    var slideShowRow = '';
    for (i = 0; i < data.length; i++) {
        if (data[i].subCategoriesList != '') {
            catrow += '<li class="nav-item dropdown" style="padding: 0rem 0.1rem;">';
            catrow += '<a style="text-transform: uppercase;color: #001B43;cursor: pointer"  class="nav-link " id="' + data[i].CategoriesName + '" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + data[i].CategoriesName + '</a>';
            catrow += '<div class="dropdown-menu" aria-labelledby="' + data[i].CategoriesName + '">';

            catrow += '<div class="container">';
            catrow += '<div class="row">';
            catrow += '<div class="col-md-12">';
            catrow += '<span style="cursor: pointer;font-weight: 700;text-decoration: underline" onclick="getCategoriesId(' + data[i].CategoriesId + ')" class="text-uppercase  text-black-50 active">' + data[i].CategoriesName + ' </span>';
            catrow += '</div>';
            catrow += '<div class="col-md-8">';
            catrow += '<div class="row">';

            // console.log(data[i].subCategoriesList)
            for (j = 0; j < data[i].subCategoriesList.length; j++) {
                if (j % 2 == 0) {
                    catrow += '<div class="col-md-4">';
                    catrow += '<ul class="nav flex-column" >';
                    catrow += '<li class="nav-item">';
                    catrow += '<a style="cursor: pointer;" class="nav-link " onclick="getSubCategoriesId(' + data[i].subCategoriesList[j].SubCategoriesId + ')">' + data[i].subCategoriesList[j].SubCategoriesName + '</a>';
                    catrow += '</li>';
                    catrow += '</ul>';
                    catrow += '</div>';
                } else {
                    catrow += '<div class="col-md-4">';
                    catrow += '<ul class="nav flex-column" >';
                    catrow += '<li class="nav-item">';
                    catrow += '<a style="cursor: pointer;" class="nav-link " onclick="getSubCategoriesId(' + data[i].subCategoriesList[j].SubCategoriesId + ')">' + data[i].subCategoriesList[j].SubCategoriesName + '</a>';
                    catrow += '</li>';
                    catrow += '</ul>';
                    catrow += '</div>';
                }
            }
            catrow += '</div>';
            catrow += '</div>';
            // image md4 3rd div
            catrow += '<div class="col-md-4">';
            catrow += '<div id="carouselExampleControls' + i + '" class="carousel slide" data-ride="carousel">';
            catrow += '<div class="carousel-inner">';
            for (j = 0; j < data[i].subCategoriesList.length; j++) {
                if (j == 0) {
                    // console.log(j);
                    catrow += '<div class="carousel-item active" >';
                    catrow += '<img  class="d-block w-100" style="filter: brightness(70%);min-height:249px;min-width:100%;max-height: 250px;max-width: 100%;" src="' + data[i].subCategoriesList[j].SubCategoriesImage + '" alt="Second slide">';
                    catrow += '<div class="carousel-caption d-none d-md-block">';
                    catrow += '<h1 style="">'+data[i].subCategoriesList[j].SubCategoriesName+'</h1>';
                    catrow += '</div>';
                    catrow += '</div>';
                } else {
                    catrow += '<div class="carousel-item ">';
                    catrow += '<img class="d-block w-100" style="filter: brightness(70%);min-height:249px;min-width:100%;max-height: 250px;max-width: 100%;" src="' + data[i].subCategoriesList[j].SubCategoriesImage + '" alt="Second slide">';
                    catrow += '<div class="carousel-caption d-none d-md-block">';
                    catrow += '<h3 style="">'+data[i].subCategoriesList[j].SubCategoriesName+'</h3>';
                    catrow += '</div>';
                    catrow += '</div>';
                }

            }
            catrow += '</div>';
            catrow += '<a class="carousel-control-prev" href="#carouselExampleControls' + i + '" role="button" data-slide="prev">';
            catrow += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
            catrow += '<span class="sr-only">Previous</span>';
            catrow += '</a>';
            catrow += '<a class="carousel-control-next" href="#carouselExampleControls' + i + '" role="button" data-slide="next">';
            catrow += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
            catrow += '<span class="sr-only">Next</span>';
            catrow += '</a>';


            catrow += '</div>';

            catrow += '</div>';
            catrow += '</div>';


        } else {
            catrow += '<li style="cursor: pointer" class="nav-item"><a style="text-transform: uppercase;color: #001B43;cursor: pointer" onclick="getCategoriesId(' + data[i].CategoriesId + ')" class="nav-link active ">' + data[i].CategoriesName + '</a></li>';
        }
        // all collection div---------------------------


        catDivRow += '<div class="card bg-dark text-white">';
        catDivRow += '<img style="min-height: 198px;max-height: 200px;" class="card-img" src="' + data[i].CategoriesImage + '" alt="Card image">';
        catDivRow += '<div onclick="getCategoriesId(' + data[i].CategoriesId + ')" class="card-img-overlay" style="    background: #0000006b;cursor: pointer;">';
        catDivRow += '<h5 class="card-title">' + data[i].CategoriesName + '</h5>';
        catDivRow += ' </div>';
        catDivRow += '</div>';
        // all collection div---------------------------
        // all slide show Div on home page---------------
        if (i < 5) {
            if (i == 0) {
                slideShowRow += '<div class="carousel-item active">';
                slideShowRow += '<img style="max-height: 580px;min-height: 575px;filter: brightness(60%);" class="d-block w-100" src="' + data[i].CategoriesImage + '" alt="First slide">';
                slideShowRow += '<div class="carousel-caption d-none d-md-block">';
                slideShowRow += '<h1 style="">WELCOME TO BIHAR</h1>';
                slideShowRow += '<h4 style="font-weight: 400;padding: 10px;">BIHAR ' + data[i].CategoriesName + '</h4>';
                slideShowRow += '</div>';
                slideShowRow += ' </div>';
            } else {
                slideShowRow += '<div class="carousel-item ">';
                slideShowRow += '<img style="max-height: 580px;min-height: 575px;    filter: brightness(50%);" class="d-block w-100" src="' + data[i].CategoriesImage + '" alt="First slide">';
                slideShowRow += '<div class="carousel-caption d-none d-md-block">';
                slideShowRow += '<h1 style="">WELCOME TO BIHAR</h1>';
                slideShowRow += '<h4 style="font-weight: 400;padding: 10px;">BIHAR ' + data[i].CategoriesName + '</h4>';
                slideShowRow += '</div>';
                slideShowRow += ' </div>';
            }

        }

        // all slide show Div on home page---------------
    }
    $('#catDiv').append(catDivRow);

    $('#navcategory').prepend(catrow);
    $('#HomeSlideShowDiv').append(slideShowRow);
}


function appendSubCattoNavbar(data) {
    // console.log(data);
}

function getCategoriesId(data) {
    // console.log(data);
    window.location.href = "catdetails.php?catId=" + data;
}

function getSubCategoriesId(data) {
    // console.log(data);
    window.location.href = "subcatdetails.php?subcatId=" + data;
}

function getActivityId(data) {
    // console.log(data);
    window.location.href = "activitydetails.php?activityId=" + data;
}

function getBlogsId(data) {
    // console.log(data);
    window.location.href = "blogdetails.php?blogId=" + data;
}

function blogPage() {
    window.location.href = "blogs.php";
}
function getProfileId(data) {
    // console.log(data);
    window.location.href = "userblogs.php?u=" + data;
}

function SortByBlogID(x, y) {
    return y.BlogId - x.BlogId;
}

function getActiveBlogs(data) {
    var activeBlogArray = [];
    var row = 0;
    for (i = 0; i < data.length; i++) {
        if (data[i].IsApproved == true) {
            activeBlogArray[row] = data[i];
            row++;
        }
    }
    return activeBlogArray;

}