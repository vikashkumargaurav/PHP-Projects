$('document').ready(function () {
    $('#activity-section').hide();
    if(activityId == null){
        console.log('activityId Undefined');
        activityId = 67;
    }
    makeAjax(API_IRL + 'Activities/' + activityId, 'GET', getActivitydetails);
})

var lon;
var lat;
var sellRate = [];

function getActivitydetails(data) {
    console.log(data);
    $(document).attr("title", "BiharTourism Top Activities: " +data.ActivityName);
    $('meta[name=description]').attr('content',data.Description);
    var SubCategoriesId = data.SubCategoriesId;
    makeAjax(API_IRL + 'GetActivitiesBySubCategoryId/' + SubCategoriesId, 'GET', getActivitiesBySubCategoryId);
    var activityheaderRow = "";

    activityheaderRow += '<div class="container-fluid" style="background-image: url(' + data.subCategories.SubCategoriesImage + ');height: 250px;background-position: cover;" >';
    activityheaderRow += '<h1 style="color: white;margin: auto;padding-top: 87px;padding-left: 50px;font-weight: 900">' + data.subCategories.SubCategoriesName + '</h1>';
    activityheaderRow += '</div>';
    $('#activityheader').append(activityheaderRow);
    ///--------------------------------------------------------------------------
    if (data.packageDetails != '') {
        $('#activity-section').show();
        var packageRow = '';

        for (i = 0; i < data.packageDetails.length; i++) {
            packageRow += '<div class="card bg-dark text-white" style="box-shadow: 11px 7px 81px #9e9e9ea1;">';
            packageRow += '<img class="card-img" src="img/back.jpg" alt="Card image">';
            packageRow += '<div class="card-img-overlay">';
            packageRow += '<h5 class="card-title">' + data.packageDetails[i].Name + '</h5>';
            packageRow += '<h5 class="card-title"><span style="font-size: 24px"> ₹  ' + data.packageDetails[i].SellRate + '</span> <span style="font-size: 18px;text-decoration: line-through;"> ₹ ' + data.packageDetails[i].DeclaredRate + '</span></h5>';
            packageRow += '<p class="card-text">' + data.packageDetails[i].Description + '</p>';
            packageRow += '<button class="btn btn-danger">Book Now</button>';
            packageRow += '</div>';
            packageRow += '</div>';
            packageRow += '<br>';

        }
        $('#packageDiv').append(packageRow);


    }
    var activitiesRow = '';
    var carouselindicatorRow = '';
    var carouselitemRow = '';

    activitiesRow += '<div class="post-details">';
    activitiesRow += '<div class="post-meta d-flex justify-content-between">';
    activitiesRow += ' <div class="category"><a style="color: blue;cursor: pointer;"  onclick="getSubCategoriesId(' + data.SubCategoriesId + ')">'+data.subCategories.SubCategoriesName+'</a> / <span  style="font-weight: 700">'+data.ActivityName+'</span> /';
    activitiesRow += '</div>';
    activitiesRow += '</div>';



    activitiesRow += '<div class="post-body">';


    if (data.activityImages.length != 0) {
        // console.log(data.activityImages.length);
        activitiesRow += '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">';
        activitiesRow += '<div class="carousel-inner" id="carouselitemDiv">'; //image div start
        for (m = 0; m< data.activityImages.length; m++) {
            // console.log(data.activityImages.length);
            if (m == 0) {
                activitiesRow +='<div class="carousel-item active">';
                activitiesRow +='<img class="d-block w-100" src="'+data.activityImages[m].Images+'" alt="First slide">';
                activitiesRow +='</div>';
            } else {
                activitiesRow +='<div class="carousel-item ">';
                activitiesRow +='<img class="d-block w-100" src="'+data.activityImages[m].Images+'" alt="First slide">';
                activitiesRow +='</div>';
            }
        }
        activitiesRow += '</div>'; // image div end

        activitiesRow += '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">';
        activitiesRow += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
        activitiesRow += '<span class="sr-only">Previous</span>';
        activitiesRow += '</a>';
        activitiesRow += '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">';
        activitiesRow += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
        activitiesRow += '<span class="sr-only">Next</span>';
        activitiesRow += '</a>';
        activitiesRow += '</div>'; // carasoul end i.e image div
    }
    activitiesRow += '<h3 style="margin-top: 15px;">'+data.ActivityName+'</h3>';
    activitiesRow += '<div style="    padding-left: 1.6em;border-left: 4px solid #bababa;margin: 4em 0 2em;">';
    activitiesRow +=  '<p style="font-size: larger">' +data.Description+'</p></div>';
    activitiesRow +='<h5>Highlights</h5>';
    activitiesRow +='<p style="font-size: larger">'+data.HighlightsOfTheActivity+'</p>';
    activitiesRow +='<h5>Location</h5>';
    activitiesRow +='<p style="font-size: larger">'+data.Location+'</p>';
    activitiesRow +='<h5>Notes</h5>';
    activitiesRow +='<p style=" font-size: larger;   padding-left: 1.6em;border-left: 4px solid #007bff;">'+data.Notes+'</p>';
    activitiesRow += '</div>';
    activitiesRow += '</div>';// div ends

    $('#ActivityDiv').append(activitiesRow);



    // package details from activity

    if (data.packageDetails != '') {
        var sortPackage = data.packageDetails.sort(GetSortOrder("SellRate"));
        // console.log(sortPackage);
        if ((sortPackage[0].SellRate) == (sortPackage[0].DeclaredRate)) {
            $('#initialSellRate').text(' ₹ ' + sortPackage[0].SellRate);
            $('#initialDeclaredRate').hide()
            $('#Discount').hide()
            $('#initialPackageName').text(sortPackage[0].Name);
        } else {
            $('#initialSellRate').text(' ₹ ' + sortPackage[0].SellRate);
            $('#initialDeclaredRate').text(' ₹ ' + sortPackage[0].DeclaredRate);
            $('#Discount').text('up to  ₹ ' + sortPackage[0].Discount + '% OFF ');
            $('#initialPackageName').text(sortPackage[0].Name);
        }
    }else{
        $('#InitialPackageDiv').hide();
        $('#PackagesDiv').hide();
    }


}

function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}


function getActivitiesBySubCategoryId(data) {
    // console.log(data);
    var activityRow = '';
    var row = 0;
    if (row < 6)
        for (i = 0; i < data.length; i++) {
            if (i < 5) {
                activityRow += '<div style="cursor: pointer;" class="col-md-3" onclick="getActivityId(' + data[i].ActivitiesId + ')">';
                activityRow += '<div class="card bg-dark black-white " style="border: none; box-shadow: 11px 7px 81px #9e9e9ea1;">';
                if (data[i].activityImages.length != 0) {
                    activityRow += '<img style="min-height: 250px;max-height: 251px" class="card-img" src="' + data[i].activityImages[0].Images + '" alt=" image">';
                } else {
                    activityRow += '<img style="min-height: 250px;max-height: 251px" class="card-img" src="img/noimg.png" alt=" image">';
                }
                activityRow += '<div class="card-img-overlay">';
                activityRow += '<h5 class="card-title" style=" margin-left: -20px;padding: 10px;background: white;">' + data[i].ActivityName + '</h5>';
                // activityRow += '<p class="card-text" style="overflow: hidden;max-height: 61px;background: white;padding: 10px;">'+data[i].AboutTheActivity+'</p>';
                activityRow += ' </div>';
                activityRow += ' </div>';
                activityRow += ' </div>';

            }

        }
    $('#relatedActivitysByBlogSubcategoryDIv').append(activityRow);
}