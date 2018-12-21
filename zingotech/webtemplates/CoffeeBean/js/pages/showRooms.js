/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var roomData = {};
$(document).ready(function () {
    $('#mainLoader').show();
    $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/RoomCategories/' + RoomCatId,
        type: 'GET',
        headers: {Authorization: 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg=='},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            showRoomInfo(data);
            roomData = data;
            $('#mainLoader').hide();
        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
    })
})

//$(document).ready(function () {
//
//    $('#checkindate').val(getCurrentDate());
//    $('#checkoutdate').val(getCurrentDateplusone());
//    $('#mainLoader').show();
//    $.ajax({
//        url: 'http://zingoapi.azurewebsites.net/api/Hotels/42',
//        type: 'GET',
//        headers: {Authorization: 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg=='},
//        dataType: 'json',
//        success: function (data) {
//            console.log(data);
//            StdCheckInTime = data.CheckInTime;
//            StdCheckOutTime = data.CheckOutTime;
//
////            RoomCategoryName = data[0].CategoryName;
////            console.log(RoomCategoryName);
//            getAllRooms(data.room);
//            $('#checkAvilable').click();
//            $('#mainLoader').hide();
//            $('#mainLoader').show();
//        }
//    }).fail(function () {
//        console.log('fail');
//        $('#mainLoader').hide();
//    })
//
//
//})

function showRoomInfo(data) {
    console.log(data);
    var showRoom = '';

    getPriceByCat(data.RoomCategoryId, funname);
    function funname(data) {
        console.log(data[0]);
        $('#DeclaredRateForSingle').text('₹ ' + data[0].DeclaredRateForSingle);
        $('#save').text('   ₹ ' + data[0].SellRateForSingle);
        $('#showratepriceforSingle').text('   ₹ ' + data[0].SellRateForSingle);
        $('#showratepriceforDouble').text('   ₹ ' + data[0].SellRateForDouble);
        
        $('#discount').text('save ₹' + ((data[0].DeclaredRateForSingle) - (data[0].SellRateForSingle)));

    }
    $('#singlecatName').text(data.CategoryName + ' (Single Occupancy) ');
    $('#doublecatName').text(data.CategoryName + ' (Double Occupancy) ');
    showRoom += '<div class="row align-items-center no-gutters mb-4 mb-lg-5">';
    showRoom += '<div class="col-xl-8 col-lg-7 ">';
    showRoom += '<img class="img-fluid mb-3 mb-lg-0" src="img/room6.jpg" alt="">';
    showRoom += '</div>';
    showRoom += '<div class="col-xl-4 col-lg-5">';
    showRoom += '<div class="featured-text text-center text-lg-left">';
    showRoom += '<span class="badge badge-danger" style="float:right" id="discount">  </span>'
    showRoom += '<h4>' + data.CategoryName + '</h4>';
    showRoom += '<p class="std-p-tag mb-0">' + data.Description + '</p>';
    showRoom += '<p><span class="badge badge-success" id="save" style="font-size: 22px;font-weight: 700;"></span>';
    showRoom += '<span style="text-decoration: line-through;margin-left: 15px" id="DeclaredRateForSingle">  </span></p>'
    showRoom += '<br><button class="btn btn-danger text-white" onclick="getRoomCatIdforBooking(\'' + (btoa(JSON.stringify(data))) + '\')">Book Now</button>'
    showRoom += '</div>';
    showRoom += '</div>';

    $('#room_info').append(showRoom);



}
$('#bookroomBtn').click(function () {
    console.log(roomData);
    var roomcatId = roomData.RoomCategoryId;
    console.log(roomcatId);
    window.location.href = 'booking.php?roomcatId=' + roomcatId;
})

function getRoomCatIdforBooking(data) {
    data = JSON.parse(atob(data));
    console.log(data);
    var roomcatId = data.RoomCategoryId;
    console.log(roomcatId);
    window.location.href = 'booking.php?roomcatId=' + roomcatId;
}

function getPriceByCat(cat, funname) {
    var checkInDate = getCurrentDate();
    var checkOutDate = getCurrentDateplusone();
    console.log(checkInDate);
    console.log(checkOutDate);
    return $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/Rates/GetRatesBetweenTheDatesByHotelIdAndRoomCategoryId',
        type: 'POST',
        headers: {Authorization: Authorization},
        data: JSON.stringify({
            "HotelId": 42,
            "RoomCategoryId": cat,
            "FromDate": checkInDate,
            "ToDate": checkOutDate}),
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            funname(data);
//            $('#mainLoader').hide();
//            console.log(data);

        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
        //console.log(data);
    })

}