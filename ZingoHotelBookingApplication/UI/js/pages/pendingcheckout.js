/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HotelName;
var HotelAddress;
var HotelObj = {};
$(document).ready(function () {
    $('#CheckOutDate').datepicker({
        autoclose: true,
        todayHighlight: getCurrentDate(),
        keepOpen: false,
    }).on('change', function () {
        $('.datepicker').hide();
    });
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
    // makeAjax(MAIN_API_IRL + 'RoomBooking/GetActiveBookingByHotelIdAndBookingStatus/' + hotelId + '/Active', 'GET', GetActiveBookingByHotelIdAndBookingStatus, auth);
    makeAjax(MAIN_API_IRL + 'RoomBooking/GetBookingByBookingStatusCustomAPI/' + hotelId + '/Active', 'GET', GetBookingByBookingStatusCustomAPI, auth);
})

function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName + ' Hotel Pending Checkout ');

}

// function GetBookingByBookingStatusCustomAPI(data) {
//     console.log(data);
// }
function GetBookingByBookingStatusCustomAPI(data) {
    data.reverse();
    var countPendingCheckout = 0;
    var PendingBookingsRow = '';
    // console.log(data);
    var CurrentDate = new Date();
    for (i = 0; i < data.length; i++) {

        CheckOutDate = new Date(data[i].roomBooking.CheckOutDate);
        if (CheckOutDate < CurrentDate) {
            countPendingCheckout++;
            PendingBookingsRow += '<div class="alert alert-secondary">';
            PendingBookingsRow += '<div class="row">';
            PendingBookingsRow += '<div class="col-md-12">';
            PendingBookingsRow += '<h5>' + data[i].travellers.FirstName + '</h5>';
            PendingBookingsRow += ' </div>';
            PendingBookingsRow += '<div class="col-md-2">';
            PendingBookingsRow += '<h6>#' + data[i].roomBooking.BookingId + '</h6>';
            PendingBookingsRow += ' </div>';
            PendingBookingsRow += '<div class="col-md-4">';
            PendingBookingsRow += ' <p><span>' + data[i].roomBooking.CheckInDate + '</span><br><span>Check In</span></p>';
            PendingBookingsRow += ' </div>';
            PendingBookingsRow += '<div class="col-md-4">';
            PendingBookingsRow += '<p><span>' + data[i].roomBooking.CheckOutDate + '</span><br><span>Check Out</span></p>';
            PendingBookingsRow += '</div>';
            PendingBookingsRow += '<div class="col-md-2">';
            PendingBookingsRow += '<span class="float-right badge badge-secondary">' + data[i].roomBooking.BookingStatus + '</span>';
            PendingBookingsRow += '</div>';
            PendingBookingsRow += '<hr>';
            PendingBookingsRow += '<div class="col-md-12">';
            PendingBookingsRow += '<button  class="float-right btn btn-outline-primary" onclick="getBookingId(' + data[i].roomBooking.BookingId + ')">Check Out Now</button> <button style="margin-right: 10px;" onclick="getBookingIdforUpdate(' + data[i].roomBooking.BookingId + ')" class="float-right btn btn-danger" type="button" data-toggle="modal" data-target="#exampleModalCenter">Check Out Later</button>';
            PendingBookingsRow += ' </div>';
            PendingBookingsRow += '</div>';
            PendingBookingsRow += '</div>';
        }
    }
    if (countPendingCheckout == 0) {
        PendingBookingsRow += ' No Pending Checkouts';
    }

    $('#NotificationsDiv').append(PendingBookingsRow);
}

var BookingObjFroCheckOut;

function getBookingIdforUpdate(data) {
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'RoomBookings/' + data, 'GET', getRoomBookingByBookingIdForUpdateCheckOut, auth);
}

function getRoomBookingByBookingIdForUpdateCheckOut(data) {
    // console.log(data);
    BookingObjFroCheckOut = data;
}

function getBookingId(data) {
    var r = confirm("Please confirm checkout");
    if(r == true){
        makeAjax(MAIN_API_IRL + 'RoomBookings/' + data, 'GET', getRoomBookingByBookingId, auth);
    }
}

function getRoomBookingByBookingId(data) {
    // console.log(data);
    data.BookingStatus = 'Completed';
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'RoomBookings/' + data.BookingId, 'PUT', getBookingUpdateResponse, auth, data);
}

function getBookingUpdateResponse(data) {
    // console.log(data);
    alert('CheckOut Done ');
    location.reload();
}


$('#UpdateCheckOutBtn').click(function () {
    if($('#CheckOutDate').val().length == ''){
        $('#CheckOutDate').focus();
        return false;
    }
    BookingObjFroCheckOut.CheckOutDate = $('#CheckOutDate').val();
    makeAjax(MAIN_API_IRL + 'RoomBookings/' + BookingObjFroCheckOut.BookingId, 'PUT', getBookingCheckOutDateUpdateResponse, auth, BookingObjFroCheckOut);
})

function getBookingCheckOutDateUpdateResponse(data) {
    alert('CheckOut date Updated ');
    location.reload();
}