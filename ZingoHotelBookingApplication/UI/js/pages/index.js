/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var hotels = [];
var OccupancyPercentage = [];
var TodayBookingCount = [];
var ProfileObj;
var row = 0;
var getHotels_url1 = MAIN_API_IRL + '' + GET_HOTELS_DETAILS_1_API + '' + aid; // mappingprofileurl

$('document').ready(function () {
// make side navbar small
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    // make side navbar small

    // var profleApi = MAIN_API_IRL + 'Profiles/' + aid;
    makeAjax(MAIN_API_IRL + 'Profiles/' + aid, 'GET', getUserProfile, auth);
    makeAjax(getHotels_url1, 'GET', getHotelsDetailByFirstAPI, auth);
})

function getUserProfile(data) {
    // console.log(data);

    saveUserPositionData(data.UserRoles.UserRoleUniqueId); // save user position data
    ProfileObj = data;
    $('#username').text('Welcome : ' + data.FirstName);

    /*    if(data.Plans == 'Premium'){
        showNavigation(Premium);
    }*/

    if(data.UserRoles.UserRoleUniqueId == 'Luci-FrontOffice'){
        showNavigation(luci_office);
    }else {
        showNavigation(Premium);
    }

}

function showNavigation(data) {
    // console.log(data);
    var ProfileRightsnavRow = '';
    for (i=0;i<data.length;i++){

        if(i === data.length-1){
            ProfileRightsnavRow += '<li class="nav-item" style="margin-left: 5px;margin-top: 5px;" >';
            ProfileRightsnavRow += '<a title="'+data[i].PageDisplayName+'" class="nav-link active text-white " style="cursor: pointer" data-toggle="modal" data-target="#quickSearchModal"   >'+data[i].PageDisplayName+'</a>';
            ProfileRightsnavRow += '</li>';

        }else if(i === data.length-3){
            ProfileRightsnavRow += '<li class="nav-item" style="margin-left: 5px;margin-top: 5px;" >';
            ProfileRightsnavRow += '<a title="'+data[i].PageDisplayName+'" class="nav-link active text-white " style="cursor: pointer" data-toggle="modal" data-target="#quickGstPopModal"   >'+data[i].PageDisplayName+'</a>';
            ProfileRightsnavRow += '</li>';
        }
        else {
            ProfileRightsnavRow += '<li class="nav-item" style="margin-left: 5px;margin-top: 5px;" >';
            ProfileRightsnavRow += '<a title="'+data[i].PageDisplayName+'" class="nav-link active" href="index.php?page_name='+data[i].PageName+'&hotelId='+hotelId+'">'+data[i].PageDisplayName+'</a>';
            ProfileRightsnavRow += '</li>';
        }
    }

// $('#userrightsNav').append(ProfileRightsnavRow);
    $('#ProfileRightsnavDiv').append(ProfileRightsnavRow);

}





// this is for accounting screeen
function showNavigationreportDiv(data) {
    // console.log(data);
    var NavigationreportRow = '';

    for (i=0;i<data.length;i++){

        if(i === data.length-1){
            NavigationreportRow += '<li class="nav-item " style="margin-left: 15px;margin-top: 5px;list-style-type: none;">';
            //nishant
            // NavigationreportRow += '<a title="'+data[i].PageDisplayName+'" class="nav-link btn-danger"> '+data[i].PageDisplayName+' </a>';

            //vikash
            NavigationreportRow += '<a title="'+data[i].PageDisplayName+'" class="nav-link btn-danger" href="index.php?page_name='+data[i].PageName+'&hotelId='+hotelId+'">'+data[i].PageDisplayName+'</a>';
            NavigationreportRow += '</li>';

        }
        else {
            NavigationreportRow += '<li class="nav-item " style="margin-left: 15px;margin-top: 5px;list-style-type: none;">';
            NavigationreportRow += '<a title="'+data[i].PageDisplayName+'" class="nav-link btn-danger" href="index.php?page_name='+data[i].PageName+'&hotelId='+hotelId+'">'+data[i].PageDisplayName+'</a>';
            NavigationreportRow += '</li>';
        }

    }

    $('#reportDiv').append(NavigationreportRow);
}

function getHotelsDetailByFirstAPI(data) {
    // console.log(data);
    if (data == '') {
        var getHotels_url2 = MAIN_API_IRL + '' + GET_HOTELS_DETAILS_2_API + '' + aid; // hotelbyprofileidurl
        makeAjaxWithoutLoader(getHotels_url2, 'GET', getHotelsDetailBySecondAPI, auth);
    } else {
//        console.log(data);

        var hotelRow = '';
        var hotelcount = 0;

        var hotelModalList = '<div class="row justify-content-around ">';



        for (i = 0; i < data.length; i++) {

            hotelRow += '<li class="nav-item" onclick="getHotelIdForNextPage(\'' + (btoa(JSON.stringify(data[i]))) + '\')">';
            hotelRow += '<a class="nav-link" href="#">';
            hotelRow += '<i class="fa fa-bed"></i> ';
            hotelRow += '<span>' + data[i].hotels.HotelName + '</span></a>';
            hotelRow += '</li>';

            // This is for hotel modal list

            hotelModalList += '<div  class="col-md-3 col-sm-5 rounded bg-danger " onclick="getHotelIdForNextPage(\'' + (btoa(JSON.stringify(data[i]))) + '\')">';
            hotelModalList += '<a class="nav-link" href="#">';
            hotelModalList += '<i class="fa fa-bed text-white text-sm-center"></i> ';
            hotelModalList += '<br/><span style="font-size: x-small" class="text-white lead">' + data[i].hotels.HotelName + '</span></a>';
            hotelModalList += '</div>';

            if( ( (i+1) % 3) === 0 && i!== data.length-1  )   {
                hotelModalList += '</div>';
                hotelModalList += '<div  class="row justify-content-around mt-2">';
            }
            if( i === data.length-1){
                hotelModalList += '</div>';
            }


            hotelcount++;
            hotels[i] = data[i].hotels.HotelName;
        }

        $('#showHotelsOnNavBar').append(hotelRow);
        $('#hotelcount').text(hotelcount);
        $('#hotelListsModal').append(hotelModalList);





        //        console.log(hotelcount);

//        alert('yes getting data from 1 st api');
    }
}


var secondApiDataLength;

function getHotelsDetailBySecondAPI(data) {
    // console.log(data);
    secondApiDataLength = data.length;
    var hotelRow = '';
    var hotelcount = 0;
    var hotelModalList = '<div class="row justify-content-around">';


    for (i = 0; i < data.length; i++) {

        var getHotelsDetailUrl = MAIN_API_IRL + 'Dashboard/GetDashboardDataForCurrentDate/' + data[i].HotelId;
//        console.log(data[i].HotelId);
        makeAjaxWithoutLoader(getHotelsDetailUrl, 'GET', getHotelProp, auth);
        hotels[i] = data[i].HotelName;

        hotelRow += '<li class="nav-item" onclick="getHotelIdForNextPage(\'' + (btoa(JSON.stringify(data[i]))) + '\')">';
        hotelRow += '<a class="nav-link" href="#">';
        hotelRow += '<i class="fa fa-bed"></i> ';
        hotelRow += '<span>' + data[i].HotelName + '</span></a>';
        hotelRow += '</li>';

        // This is for hotel modal list


        hotelModalList += '<div  class="col-md-3 col-sm-5  rounded bg-danger " onclick="getHotelIdForNextPage(\'' + (btoa(JSON.stringify(data[i]))) + '\')">';
        hotelModalList += '<a class="nav-link" href="#">';
        hotelModalList += '<i class="fa fa-bed text-white text-sm-center"></i> ';
        hotelModalList += '<br/><span style="font-size: x-small" class="text-white lead">' + data[i].HotelName + '</span></a>';
        hotelModalList += '</div>';

        if( ( (i+1) % 3) === 0 && i!== data.length-1  )   {
            hotelModalList += '</div>';
            hotelModalList += '<div  class="row  justify-content-around mt-2" >';
        }
        if( i === data.length-1){
            hotelModalList += '</div>';
        }




        hotelcount++;

    }
    $('#showHotelsOnNavBar').append(hotelRow);
    $('#hotelcount').text(hotelcount);
    $('#hotelListsModal').append(hotelModalList);




//    console.log(hotelcount);

}

function getHotelProp(data) {
    // console.log(data);
    TodayBookingCount[row] = data.TodayBookingCount;
    if (data.OccupancyPercentage == "NaN") {
        OccupancyPercentage[row++] = 0;
    } else {
        OccupancyPercentage[row++] = data.OccupancyPercentage;
    }
    if (row == secondApiDataLength) {
        // generateGraph();
    }

}


function getHotelIdForNextPage(data) {
    data = JSON.parse(atob(data));
//    console.log(data);
    var hotelId = data.HotelId;
//    console.log(hotelId);
    window.location.href = 'index.php?page_name=hotel&hotelId=' + hotelId;
}


$('#changenewpasswordbtn').click(function () {
    // alert('hii');
})

function changePassword() {
    if ($('#OldPassword').val().trim().length == '') {
        $('#OldPassword').focus();
        alert('Old Password Required');
        return false;
    }
    if ($('#Password').val().trim().length == '') {
        $('#Password').focus();
        alert('New Password Required');
        return false;
    }
    if ($('#confirmPassword').val().trim().length == '') {
        $('#confirmPassword').focus();
        alert('Confirm New Password Required');
        return false;
    }
    var Password = $('#Password').val();
    var confirmPassword = $('#confirmPassword').val();
    if ((Password) != (confirmPassword)) {
        $('#confirmPassword').focus();
        alert('Password does not match with  Confirm Password');
        return false;
    }
    if (($('#OldPassword').val()) != (ProfileObj.Password)) {
        $('#OldPassword').focus();
        alert('Please Enter correct Old Password');
        return false;
    }
    ProfileObj.Password = $('#Password').val()

    // console.log(ProfileObj)
    makeAjax(MAIN_API_IRL + 'Profiles/' + aid, 'PUT', getProfilePasswordUpdateResponse, auth, ProfileObj);
}

function getProfilePasswordUpdateResponse(data) {
    // console.log(data);
    alert('Password Updated Successfully');
    location.reload();
}

function getBookingIdForViewDetails(data) {
    // console.log(data);
    window.location.href = 'index.php?page_name=viewbooking&BookingId=' + data+'&hotelId='+ hotelId;
}


// ---------------------------------------Inventory calender ---------------------------------------------------


