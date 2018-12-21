/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var roomData = {};
$(document).ready(function () {
    $('#mainLoader').show();
    $('#DeclaredRateForSingle').hide();
    $('#save').hide();
    $('#checkindate').val(getCurrentDate());
    $('#checkoutdate').val(getCurrentDateplusone());
    $('#checkindate').datepicker({
        startDate: getCurrentDate(),
        todayHighlight: getCurrentDate(),
        autoclose: true

    });
    $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/RoomCategories/' + RoomCatId,
        type: 'GET',
        headers: {Authorization: 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg=='},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            showRoomInfo(data);
            $('#mainLoader').hide();
        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
    })
})

function getCheckInDate(cindate) {
    var cinDate = cindate.target.value
    $('#checkoutdate').datepicker({
        minDate: getNextDayDate(cinDate),
        todayHighlight: getCurrentDate(),
        autoclose: true

    });
    $('#checkoutdate').datepicker('update', getNextDayDate(cinDate));
}
function onchangeCheckOut() {
    checkAvilable();
}

function getPriceByCatId(data) {
    console.log(data);
    $('#CategoryPrice').text('₹ ' + data[0].SellRateForSingle + ' / NIGHT');
}

function showRoomInfo(data) {
    console.log(data);
    $('#CategoryName').text(data.CategoryName);
    $('#roomcatname').text(data.CategoryName);
    $('#Description').text(data.Description);
    if (data.CategoryName == "Suite Room") {
        $('#roomImgDiv').append('<img id="roomImg" width="100%" src="'+room_pictures.suite+'">');
    } else if (data.CategoryName == "AC Standard") {
        $('#roomImgDiv').append('<img id="roomImg" width="100%" src="'+room_pictures.normal+'">');
    } else {
         $('#roomImgDiv').append('<img id="roomImg" width="100%" src="'+room_pictures.normal+'">');
    }


}

//-----------------------------------------------------------------------------

$('#bookroomBtn').click(function () {
    var roomCatId = $('#categoryNameInput').val();
    var checkindate = $('#checkindate').val();
    var checkoutdate = $('#checkoutdate').val();
    var data = {};
    data.CheckInDate = checkindate;
    data.CheckoutDate = checkoutdate;
    data.hotelId = HOTEL_ID;
    saveData(data, 'checkdate');
    window.open(BOOKING_URL+'/booking.php?roomcatId=' + RoomCatId, '_blank');
})


function checkAvilable() {
    roomCatId = RoomCatId;

    $('#mainLoader').show();
    var checkInDate = $('#checkindate').val().trim();
    var checkOutDate = $('#checkoutdate').val().trim();

    console.log(checkInDate);
    console.log(checkOutDate);
    console.log(roomCatId);
    $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/Rates/GetRatesBetweenTheDatesByHotelIdAndRoomCategoryId',
        type: 'POST',
        headers: {Authorization: Authorization},
        data: JSON.stringify({
            "HotelId": HOTEL_ID,
            "RoomCategoryId": roomCatId,
            "FromDate": checkInDate,
            "ToDate": checkOutDate}),
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            console.log(data);
            getRooomAvilabilityPrice(data);
            $('#mainLoader').hide();
        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
        //console.log(data);
    })
}

function getRooomAvilabilityPrice(data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
//        console.data[i].SellRateForSingle;
        if ((data[0].DeclaredRateForSingle) == (data[0].SellRateForSingle)) {
            $('#showPrice').show();
            $('#showPrice').text('   ₹ ' + data[0].SellRateForSingle + '/ NIGHT');
        } else {
            var savings = (data[0].DeclaredRateForSingle) - (data[0].SellRateForSingle);
            $('#showPrice').show();
            $('#DeclaredRateForSingle').show();
            $('#DeclaredRateForSingle').text('₹ ' + data[0].DeclaredRateForSingle);
            $('#showPrice').text('   ₹ ' + data[0].SellRateForSingle + '/ NIGHT');
            $('#saving').text('Save ₹ ' + savings);
        }
    }
}
