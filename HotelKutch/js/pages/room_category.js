/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $('#mainLoader').show();
    $.ajax({
        url: ROOM_CAT_URL,
        type: 'GET',
        headers: {Authorization: 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg=='},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            getonLoadRoomCat(data);
            $('#mainLoader').hide();
        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
    })
})
var row = 0;
function getonLoadRoomCat(data) {


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
function getPriceByCatId(data) {
    console.log(data[0].SellRateForSingle);
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

function getCatId(data) {
    data = JSON.parse(atob(data));
    console.log(data);
    var roomcatId = data.RoomCategoryId;
    console.log(roomcatId);
    window.location.href = 'showRoom.php?roomcatId=' + roomcatId;
}
