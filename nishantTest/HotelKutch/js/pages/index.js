/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var initialRoomCatId;
var sellRateForSingleRoom;
var sellRateForDoubleRoom;
var SellRateForExtraAdult;
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
    makeAjax(ROOM_CAT_URL, 'GET', getonLoadRoomCat);

//    var roomAvilableCheckAPI = MAIN_API_IRL + 'Agent/GetAvailabilityOfCategoryBetweenDatesOfParticularHotel';
//    var data = JSON.stringify({
//        "FromDate": getCurrentDate(),
//        "ToDate": getCurrentDateplusone(),
//        "HotelId": HOTEL_ID
//    });
//    makeAjax(roomAvilableCheckAPI, 'POST', roomStatus, data);

})
function roomStatus(data) {
    console.log(data);
//    alert('inside');
}
function getCheckInDate(cindate) {
    var cinDate = cindate.target.value
    $('#checkoutdate').datepicker({
        minDate: getNextDayDate(cinDate),
        todayHighlight: getCurrentDate(),
        autoclose: true

    });
    $('#checkoutdate').datepicker('update', getNextDayDate(cinDate));
}
var row = 0;
function getonLoadRoomCat(data) {
    console.log(data);
    initialRoomCatId = data[0].RoomCategoryId;
    $('#roomcatname').text(data[0].CategoryName);

    $.each(data, function (i, data) {
        $('#categoryNameInput').append($("<option style='color: black;'></option>")
                .attr("value", data.RoomCategoryId)
                .text(data.CategoryName));
    })
    var hotelRoomRow = '';
    for (i = 0; i < data.length; i++) {

        hotelRoomRow += '<div class="feature-full-1col">';
        if (data[i].CategoryName == "Suite Room") {
            hotelRoomRow += '<div class="image" style="background-image: url(' + room_pictures.suite + ');">';
        } else if (data[i].CategoryName == "AC Standard") {
            hotelRoomRow += '<div class="image" style="background-image: url(' + room_pictures.normal + ');">';
        } else {
            hotelRoomRow += '<div class="image" style="background-image: url(hotelimg/banner1.jpg);">';
        }

        hotelRoomRow += '<div id="priceDiv_' + row + '" class="descrip text-center">';

        getPriceByCatonLoad(data[i].RoomCategoryId, getPriceByCatId, row);

        hotelRoomRow += '</div>';
        hotelRoomRow += '</div>';
        hotelRoomRow += '<div class="desc">';
        hotelRoomRow += '<h3>' + data[i].CategoryName + '</h3>';
        hotelRoomRow += '<p>' + data[i].Description + '</p>';
        hotelRoomRow += '<p><a href="#" onclick="getCatId(\'' + (btoa(JSON.stringify(data[i]))) + '\')" class="btn btn-primary btn-luxe-primary">Book Now <i class="ti-angle-right"></i></a></p>';
        hotelRoomRow += ' </div>';
        hotelRoomRow += ' </div>';
        row++;
    }
    $('#hotelRoomDiv').append(hotelRoomRow);
    getPriceByCatonLoad(initialRoomCatId, funname);

}
function getCatId(data) {
    data = JSON.parse(atob(data));
    console.log(data);
    var roomcatId = data.RoomCategoryId;
    console.log(roomcatId);
    window.location.href = 'showRoom.php?roomcatId=' + roomcatId;
}

function getPriceByCatId(data) {
    console.log(data[0].SellRateForSingle);
}
//initially setting the data on page load 
function funname(data) {
    if ((data[0].DeclaredRateForSingle) == (data[0].SellRateForSingle)) {
        $('#showPrice').show();
        $('#showPrice').text('   ₹ ' + data[0].SellRateForSingle);
    } else {
        var savings = (data[0].DeclaredRateForSingle) - (data[0].SellRateForSingle);
        $('#showPrice').show();
        $('#DeclaredRateForSingle').show();
        $('#DeclaredRateForSingle').text('₹ ' + data[0].DeclaredRateForSingle);
        $('#showPrice').text('   ₹ ' + data[0].SellRateForSingle);
        $('#saving').text('Save ₹ ' + savings);
    }


}
function getPriceByCatonLoad(cat, funname, row = null) {
    $('#mainLoader').show();
    var checkInDate = getCurrentDate();
    var checkOutDate = getCurrentDateplusone();
    return $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/Rates/GetRatesBetweenTheDatesByHotelIdAndRoomCategoryId',
        type: 'POST',
        headers: {Authorization: Authorization},
        data: JSON.stringify({
            "HotelId": HOTEL_ID,
            "RoomCategoryId": cat,
            "FromDate": checkInDate,
            "ToDate": checkOutDate}),
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            console.log(data);
            if (row == null) {
                funname(data);
            } else {
                $('#priceDiv_' + row).append('<p><small>For as low as</small><span>' + data[0].SellRateForSingle + '/night</span></p>');
            }

            $('#mainLoader').hide();
//            console.log(data);

        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
        //console.log(data);
    })
}


function onchangeCheckOut() {
    checkAvilable();
}

function onchangeRoomCategory(categoryId) {
    var categoryId = categoryId.target.value;
    getCategoryNameByCategoryId(categoryId);
    checkAvilable();
}

function getCategoryNameByCategoryId(categoryId) {
//    $('#mainLoader').show();
    var temp_url = 'http://zingoapi.azurewebsites.net/api/RoomCategories/' + categoryId;
    makeAjax(temp_url, 'GET', printCategoryName);

}

function printCategoryName(data) {
//    console.log(data);
    $('#roomcatname').text(data.CategoryName);
}
function checkAvilable() {
    var roomCatId;
    if ($('#categoryNameInput').val() == null) {
        roomCatId = initialRoomCatId;
    } else {
        roomCatId = $('#categoryNameInput').val();
    }

    $('#mainLoader').show();
    var checkInDate = $('#checkindate').val().trim();
    var checkOutDate = $('#checkoutdate').val().trim();

    var data = JSON.stringify({
        "HotelId": HOTEL_ID,
        "RoomCategoryId": roomCatId,
        "FromDate": checkInDate,
        "ToDate": checkOutDate});
    var temp_url = 'http://zingoapi.azurewebsites.net/api/Rates/GetRatesBetweenTheDatesByHotelIdAndRoomCategoryId';
    makeAjax(temp_url, 'POST', getRooomAvilabilityPrice, data);

}


function getRooomAvilabilityPrice(data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
//        console.data[i].SellRateForSingle;
        if ((data[0].DeclaredRateForSingle) == (data[0].SellRateForSingle)) {
            $('#showPrice').show();
            $('#showPrice').text('   ₹ ' + data[0].SellRateForSingle);
        } else {
            var savings = (data[0].DeclaredRateForSingle) - (data[0].SellRateForSingle);
            $('#showPrice').show();
            $('#DeclaredRateForSingle').show();
            $('#DeclaredRateForSingle').text('₹ ' + data[0].DeclaredRateForSingle);
            $('#showPrice').text('   ₹ ' + data[0].SellRateForSingle);
            $('#saving').text('Save ₹ ' + savings);
        }
    }
}


$('#getDate').click(function () {

    var roomCatId = $('#categoryNameInput').val();
    var checkindate = $('#checkindate').val();
    var checkoutdate = $('#checkoutdate').val();
    var data = {};
    data.CheckInDate = checkindate;
    data.CheckoutDate = checkoutdate;
    data.hotelId = HOTEL_ID;
    saveData(data, 'checkdate');

    window.open(BOOKING_URL+'/booking.php?roomcatId=' + roomCatId, '_blank');
})