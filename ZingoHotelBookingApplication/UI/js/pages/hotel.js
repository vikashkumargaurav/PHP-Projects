/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HotelName;
var HotelAddress;
var HotelNoOfRooms = 0;
var HotelObj ={};


// 1st trigger hotel.js
$(document).ready(function () {

    // alert('1st trigger hotel.js');

    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
    // makeAjax(MAIN_API_IRL + 'Profiles/'+authData.ProfileId, 'GET', getProfileByProfileId, auth);
    makeAjax(MAIN_API_IRL + 'BookingsNotificationManagers/GetBookingNMByHotelId/'+hotelId, 'GET', getBookingsNotificationManagers, auth);

    if(getUserPositionData() == 'Luci-FrontOffice'){
        $('#sevenDayRevDiv').hide();
        $('#tillDateDiv').hide();
        $('#revenueGraphDiv').hide();
        $('#weeklyPieDiv').hide();
        $('#monthlyPieDiv').hide();

    }

    //  Pop up on Cards Functionality (Vikash)

    var modalTitle = $('#showBookingModalCenterTitle');
    modalBody = $('#showBookingRelatedDataBody');

    $('#arrivalPop').click(function () {
        // $('#myModalContainer').hide();
        modalTitle.empty();
        modalBody.empty();
        modalTitle.append('<i class="fa fa-plane-arrival"></i>&nbsp; Arrival');
        makeAjax(MAIN_API_IRL + 'RoomBookings/GetCustomExpectedCheckInByHotelId/'+hotelId, 'GET', getExpectedArrival, auth);

    });

    $('#departurePop').click(function () {
        // $('#myModalContainer').hide();
        modalTitle.empty();
        modalBody.empty();
        modalTitle.append('<i class="fa fa-plane-departure"></i>&nbsp; Departure');
        makeAjax(MAIN_API_IRL + 'RoomBookings/GetExpectedCheckOutByHotelId/'+hotelId, 'GET', getExpectedDeparture, auth);

    });

    $('#bookingPop').click(function () {
        // $('#myModalContainer').hide();
        modalTitle.empty();
        modalBody.empty();
        modalTitle.append('<i class="fa fa-cart-plus"></i>&nbsp; Booking');
        makeAjax(MAIN_API_IRL + 'RoomBookings/GetTodaysBookingsByHotelId/'+hotelId, 'GET', getStayResult, auth);

    });

    $('#stayPop').click(function () {
        // $('#myModalContainer').hide();
        modalTitle.empty();
        modalBody.empty();
        modalTitle.append('<i class="fa fa-bed"></i>&nbsp; Stay');
        makeAjax(MAIN_API_IRL + 'RoomBooking/GetBookingByBookingStatusCustomAPI/' + hotelId + '/Active', 'GET', getStayResult, auth);

    });

});

//  for Stay Data

function getStayResult(data) {

    if(data){

        if(data.length>0){
            mainObj = data;
            for (var p=0; p<data.length; p++){
                var travellerName =  data[p].travellers.FirstName;
                var bookingId = mainObj[p].roomBooking.BookingId;
                var localDate = new Date(mainObj[p].roomBooking.BookingDate).toDateString().split(" ");
                var bookingDate = localDate[1] + " "   + localDate[2] +  " "  + localDate[3];
                var checkin =  mainObj[p].roomBooking.CheckInDate;
                var checkOut =  mainObj[p].roomBooking.CheckOutDate;
                var dayBetweeen = giveDateFormat(checkin, checkOut);
                var totalNight = mainObj[p].roomBooking.DurationOfStay;
                var totalAmount = ' ₹ ' +  mainObj[p].roomBooking.TotalAmount;
                var otaType = mainObj[p].roomBooking.BookingSourceType;
                var isRoomOccupied = mainObj[p].roomBooking.RoomId;
                var arrivalRow = createTable2(bookingId, bookingDate, travellerName, dayBetweeen, totalNight, totalAmount, otaType, isRoomOccupied);

                modalBody.append(arrivalRow)

            }
        }else{
            alert('No data found !');
        }
    }else {
        console.log('error occured during fetching stay')
    }

}



//  for Expected Departure

function getExpectedDeparture(data) {

    if(data){
        if(data.length>0){

            mainObj = data;

            for (var p=0; p<data.length; p++){
                var travellerId  =  data[p].TravellerId;
                makeAjax(MAIN_API_IRL + 'Travellers/'+travellerId, 'GET', getTravellerDetail2, auth);
            }
        }else{
            makeAlert('warning', 'No data found !')
        }
    }else {
        console.log('error occured during fetching the expected arrival')
    }
}

function getTravellerDetail2(data) {
    if(data){
        var travellerName =  data.FirstName;
        var bookingId = mainObj[count].BookingId;
        var localDate = new Date(mainObj[count].BookingDate).toDateString().split(" ");
        var bookingDate = localDate[1] + " "   + localDate[2] +  " "  + localDate[3];
        var checkin =  mainObj[count].CheckInDate;
        var checkOut =  mainObj[count].CheckOutDate;
        var dayBetweeen = giveDateFormat(checkin, checkOut);
        var totalNight = mainObj[count].DurationOfStay;
        var totalAmount = ' ₹ ' +  mainObj[count].TotalAmount;
        var otaType = mainObj[count].BookingSourceType;
        var isRoomOccupied = mainObj[count].RoomId;

        var arrivalRow = createTable2(bookingId, bookingDate, travellerName, dayBetweeen, totalNight, totalAmount, otaType, isRoomOccupied);

        modalBody.append(arrivalRow)

    }else {
        console.log('error occured during fetching the travellers')
    }
    count++;

    if(mainObj.length === count){
        count=0;
    }
}

function createTable2(bookingId, bookingDate, travellerName, dayBetweeen, totalNight, totalAmount, otaType, isRoomOccupied) {

    var arrivalRow = '';

    arrivalRow += '<div class="alert alert-dark" >';
    arrivalRow += '<div class="row">';
    arrivalRow +=  '<div class="col-md-8 col-sm-12">';

    // row1
    arrivalRow += '<div class="row">';
    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  'Booking Id : <span >' + bookingId  +  '</span>';
    arrivalRow += '</div>'; // col2

    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  '<span >  Booked On : '  +bookingDate +  '</span>';
    arrivalRow += '</div>'; // col1

    arrivalRow += '</div>'; // row 1

    // row2
    arrivalRow += '<div class="row">';

    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  '<span class="font-weight-bold" >' +travellerName +  '</span>';
    arrivalRow += '</div>'; // col1

    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  '<span >' + dayBetweeen  +  '</span>';
    arrivalRow += '</div>'; // col2

    arrivalRow += '</div>'; // row 2

    // row3
    arrivalRow += '<div class="row">';

    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  '<span class="font-weight-bold" >' + totalNight +  ' Night(s)</span>';
    arrivalRow += '</div>'; // col1

    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  'Gross Amount :  <span >' + totalAmount  +  '</span>';
    arrivalRow += '</div>'; // col2

    arrivalRow += '</div>'; // row 3


    arrivalRow += '</div>'; // col8


    arrivalRow +=  '<div class="col-md-4 col-sm-12">';
    arrivalRow +=  '<span class="float-right badge badge-secondary">' +  otaType    +  '</span>';

    arrivalRow += '</div>'; // col4

    arrivalRow += '</div>';// row main
    arrivalRow += '</div>'; // alert
    return arrivalRow;
}

var modalBody='';
var count = 0;

function getExpectedArrival(data) {
    if(data){
            if(data.length>0){
                for (var p=0; p<data.length; p++) {
                    var travellerName = data[p].travellers.FirstName;
                    var bookingId = data[p].roomBooking.BookingId;
                    var localDate = new Date(data[p].roomBooking.BookingDate).toDateString().split(" ");
                    var bookingDate = localDate[1] + " " + localDate[2] + " " + localDate[3];
                    var checkin = data[p].roomBooking.CheckInDate;
                    var checkOut = data[p].roomBooking.CheckOutDate;
                    var dayBetweeen = giveDateFormat(checkin, checkOut);
                    var totalNight = data[p].roomBooking.DurationOfStay;
                    var totalAmount = ' ₹ ' + data[p].roomBooking.TotalAmount;
                    var otaType = data[p].roomBooking.BookingSourceType;
                    var isRoomOccupied = data[p].roomBooking.RoomId;
                    var arrivalRow = createTable(bookingId, bookingDate, travellerName, dayBetweeen, totalNight, totalAmount, otaType, isRoomOccupied);
                    modalBody.append(arrivalRow)
                }
            }
    }else {
        console.log('error occured during fetching the expected arrival')
    }
}
// for creating dynamic Arrival data
function createTable(bookingId, bookingDate, travellerName, dayBetweeen, totalNight, totalAmount, otaType, isRoomOccupied) {

    var arrivalRow = '';

    arrivalRow += '<div class="alert alert-dark" >';
    arrivalRow += '<div class="row">';
    arrivalRow +=  '<div class="col-md-8 col-sm-12">';

    // row1
    arrivalRow += '<div class="row">';
    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  'Booking Id : <span >' + bookingId  +  '</span>';
    arrivalRow += '</div>'; // col2

    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  '<span >  Booked On : '  +bookingDate +  '</span>';
    arrivalRow += '</div>'; // col1

    arrivalRow += '</div>'; // row 1

    // row2
    arrivalRow += '<div class="row">';

    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  '<span class="font-weight-bold" >' +travellerName +  '</span>';
    arrivalRow += '</div>'; // col1

    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  '<span >' + dayBetweeen  +  '</span>';
    arrivalRow += '</div>'; // col2

    arrivalRow += '</div>'; // row 2

    // row3
    arrivalRow += '<div class="row">';

    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  '<span class="font-weight-bold" >' + totalNight +  ' Night(s)</span>';
    arrivalRow += '</div>'; // col1

    arrivalRow +=  '<div class="col-lg-6 col-sm-12">';
    arrivalRow +=  'Gross Amount :  <span >' + totalAmount  +  '</span>';
    arrivalRow += '</div>'; // col2

    arrivalRow += '</div>'; // row 3


    arrivalRow += '</div>'; // col8


    arrivalRow +=  '<div class="col-md-4 col-sm-12">';
    arrivalRow +=  '<span class="float-right badge badge-secondary">' +  otaType    +  '</span>';

    if(isRoomOccupied == 0){
        arrivalRow += '<br/><button class="btn btn-danger btn-sm float-right " onclick="getBookingIdforQuickBookingRoomAllocation(' + bookingId + ')">Allocate Room</button>';
    }else {
        isRoomOccupied = '';
    }

    arrivalRow += '</div>'; // col4

    arrivalRow += '</div>';// row main
    arrivalRow += '</div>'; // alert

    return arrivalRow;

}











// function getProfileByProfileId(data) {
//     console.log(data);
//     if(data.Plans == 'Premium'){
//         showNavigation(Premium);
//     }
//
// }
// function showNavigation(data) {
// console.log(data);
// var ProfileRightsnavRow = '';
// for (i=0;i<data.length;i++){
//     ProfileRightsnavRow += '<li class="nav-item" style="margin-left: 5px;margin-top: 5px;">';
//     ProfileRightsnavRow += '<a title="'+data[i].PageDisplayName+'" class="nav-link active" href="index.php?page_name='+data[i].PageName+'&hotelId='+hotelId+'">'+data[i].PageDisplayName+'</a>';
//     ProfileRightsnavRow += '</li>';
//
// }
// // $('#userrightsNav').append(ProfileRightsnavRow);
// $('#ProfileRightsnavDiv').append(ProfileRightsnavRow);
// }




function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelNoOfRooms = data.NoOfRooms;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName +' Hotel Statistics');
    makeAjaxWithoutLoader(MAIN_API_IRL + 'Dashboard/GetDashboardDataForCurrentDate/' + hotelId, 'GET', getHotelStat, auth);

}
var DashboardDataForCurrentDateGraphData =[];
var DashboardDataForCurrentRevemueDateGraphData =[];
function getHotelStat(data) {

    // 2nd stay view
    triggerStayView();

    // console.log(data);
    var OccupancyPercentage = Math.round(data.OccupancyPercentage);
    if(OccupancyPercentage > 100){
        OccupancyPercentage = 100;
        // console.log(OccupancyPercentage)
        $('#OccupancyPercentvalue').text(OccupancyPercentage+ '%');
        $('#OccupancyPercentage').addClass('p'+OccupancyPercentage);
    }else {
        // console.log(OccupancyPercentage)
        $('#OccupancyPercentvalue').text(OccupancyPercentage+ '%');
        $('#OccupancyPercentage').addClass('p'+OccupancyPercentage);

    }
    var HotelRating = data.HotelRating;
    var HotelRatingto100percent = (data.HotelRating) * 20;
    $('#HotelRatingPercentvalue').text(data.HotelRating.toFixed(1)+ '*');
    $('#HotelRating').addClass('p'+HotelRatingto100percent);

    var TodayBookingCount = data.TodayBookingCount;
    var TodayBookingCountto100percent = Math.round(((TodayBookingCount)/HotelNoOfRooms) * 100);
    $('#TodayBookingCountPercentvalue').text(TodayBookingCountto100percent+ '%');
    $('#TodayBookingCountDiv').addClass('p'+TodayBookingCountto100percent);




    // console.log(HotelRatingto100percent);
    // Math.floor(1.6);
    // Math.abs(-7.25);
    // console.log(data);
    DashboardDataForCurrentDateGraphData[0] = data.ExpectedCheckIn;
    DashboardDataForCurrentDateGraphData[1] = data.ExpectedCheckOut;
    DashboardDataForCurrentDateGraphData[2] = data.TodayBookingCount;
    DashboardDataForCurrentDateGraphData[3] = data.totalOccupiedRoomByActiveStatus;

    DashboardDataForCurrentRevemueDateGraphData[0] = data.DailyRevenueTotalCost;
    DashboardDataForCurrentRevemueDateGraphData[1] = data.DailyARR;
    DashboardDataForCurrentRevemueDateGraphData[2] = data.SevenDayRevenueTotalCost;
    // DashboardDataForCurrentRevemueDateGraphData[3] = data.TotalAmount;

    $('#ExpectedCheckIn').text(data.ExpectedCheckIn);
    $('#ExpectedCheckOut').text(data.ExpectedCheckOut);
    $('#TodayBookingCount').text(data.TodayBookingCount);
    $('#totalOccupiedRoomByActiveStatus').text(data.totalOccupiedRoomByActiveStatus);

    $('#DailyARR').text(data.DailyARR);
    $('#DailyRevenueTotalCost').text(data.DailyRevenueTotalCost);
    $('#TotalAmount').text(data.TotalAmount);
    $('#SevenDayRevenueTotalCost').text(data.SevenDayRevenueTotalCost);
    makeDashboardStaysChart(DashboardDataForCurrentDateGraphData);
    makeDashboardRevenueChart(DashboardDataForCurrentRevemueDateGraphData);
}

function getBookingsNotificationManagers(data) {
    data.reverse()
    // console.log(data);
    var NotificationsRow = '';
    for(i=0;i<data.length;i++){
        if(i<5){

            // conditions for booking status

            var bookingStatus = "";

            if(data[i].Booking.toUpperCase() === "ACTIVE"){

                bookingStatus = '<span class="float-right badge text-white" style="background-color: #4CAF50">' + data[i].Booking + '</span>' ;

            }else if(data[i].Booking.toUpperCase() === "QUICK"){

                bookingStatus = '<span class="float-right badge text-white" style="background-color: #fbc02d">' + data[i].Booking + '</span>' ;

            }else if(data[i].Booking.toUpperCase() === "COMPLETED"){

                bookingStatus = '<span class="float-right badge text-white" style="background-color: #FF69B4">' + data[i].Booking + '</span>' ;


            }else if(data[i].Booking.toUpperCase() === "CANCELLED"){

                bookingStatus = '<span class="float-right badge text-white" style="background-color: #F44336">' + data[i].Booking + '</span>' ;


            }else {

                bookingStatus = '<span class="float-right badge text-white" style="background-color: #F44336">' + data[i].Booking + '</span>' ;

            }

            NotificationsRow +='<div class="alert alert-secondary">';
            NotificationsRow +='<div class="row">';
            NotificationsRow +='<div class="col-md-12">';
            NotificationsRow +='<h5>'+data[i].Title+'</h5>';
            NotificationsRow +=' </div>';
            NotificationsRow +='<div class="col-md-2">';
            NotificationsRow +='<h6>'+data[i].TravellerName+'</h6>';
            NotificationsRow +=' </div>';
            NotificationsRow +='<div class="col-md-4">';
            NotificationsRow +=' <p><span>'+data[i].CheckInDate+'</span><br><span>Check In</span></p>';
            NotificationsRow +=' </div>';
            NotificationsRow +='<div class="col-md-4">';
            NotificationsRow +='<p><span>'+data[i].CheckOutDate+'</span><br><span>Check Out</span></p>';
            NotificationsRow +='</div>';
            NotificationsRow +='<div class="col-md-2">';
            NotificationsRow += bookingStatus/*'<span class="float-right badge badge-secondary">'+data[i].Booking+'</span>'*/;
            NotificationsRow +='</div>';
            NotificationsRow +='<hr>';
            NotificationsRow +='</div>';
            NotificationsRow +='</div>';
        }else{
            break;
        }

    }
    $('#NotificationsDiv').append(NotificationsRow);
}


// 1 Jan to 5 Jan
function giveDateFormat(cin, cout) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] ;

    var cinArr =  cin.split('/');
    var coutArr =  cout.split('/');

    return cinArr[1] + ' ' + months[cinArr[0]-1] + ' To  ' + coutArr[1] + ' ' + months[coutArr[0]-1];
}




