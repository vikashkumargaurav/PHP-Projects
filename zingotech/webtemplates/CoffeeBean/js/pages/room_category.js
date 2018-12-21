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
            //console.log(data);
            showRoomCat(data);
            $('#mainLoader').hide();
        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
    })
})

function showRoomCat(data) {
    console.log(data);
    var roomcat = '';
    var roomRatePrice;
    $.each(data, function (i, value) {
        console.log(value.RoomCategoryId);
        roomcat += '<div class="row align-items-center no-gutters mb-4 mb-lg-5">';
        roomcat += '<div class="col-xl-6 col-lg-6">';
        roomcat += '<img class="img-fluid mb-3 mb-lg-0" src="img/room6.jpg" alt="">';
        roomcat += '</div>';
        roomcat += '<div class="col-xl-6 col-lg-6">';
        roomcat += '<div class="featured-text text-center text-lg-left">';
        roomcat += '<span class="badge badge-danger" style="float:right" id="discount">  </span>'
        roomcat += '<h4 style="font-family:serif;">' + value.CategoryName + '</h4>';
        roomcat += '<p class="std-p-tag mb-0">' + value.Description + '</p>';

        roomcat += '<br>';


        getPriceByCat(value.RoomCategoryId,funname);
        function funname(data){
            console.log(data[0]);
            $('#DeclaredRateForSingle').text('₹ '+data[0].DeclaredRateForSingle);
             $('#save').text('   ₹ '+data[0].SellRateForSingle);
             $('#discount').text('✔ save ₹'+((data[0].DeclaredRateForSingle)- (data[0].SellRateForSingle)));
            
        }
        roomcat += '<p><span style="text-decoration: line-through;" id="DeclaredRateForSingle">  </span>';
        roomcat += '<span class="badge badge-success" id="save" style="font-size: 22px;font-weight: 700;margin-left: 15px"></span></p>'
        roomcat += '<button style="float:left" class="btn btn-light border border-primary" onclick="getRoomCatId(\'' + (btoa(JSON.stringify(value))) + '\')">More Info</button>';
        roomcat += '<button style="float:right" class="btn btn-danger text-white" onclick="getRoomCatIdforBooking(\'' + (btoa(JSON.stringify(value))) + '\')">Book Now</button>'

        roomcat += '<br> ';
//        roomcat += '<button class="btn btn-outline-primary" onclick="getRoomCatId(\'' + (btoa(JSON.stringify(value))) + '\')">More Info</button>';
//        roomcat += '<br><br><button style="float:right" class="btn btn-danger text-white" onclick="getRoomCatIdforBooking(\'' + (btoa(JSON.stringify(value))) + '\')">Book Now</button>'
        roomcat += '</div>';
        roomcat += '</div>';
        roomcat += '</div>';
    });
    $('#room_cat').append(roomcat);
}



function getRoomCatId(data) {
    data = JSON.parse(atob(data));
    console.log(data);
    var roomcatId = data.RoomCategoryId;
    console.log(roomcatId);
    window.location.href = 'showRooms.php?roomcatId=' + roomcatId;
}

function getRoomCatIdforBooking(data) {
    data = JSON.parse(atob(data));
    console.log(data);
    var roomcatId = data.RoomCategoryId;
    console.log(roomcatId);
    window.location.href = 'booking.php?roomcatId=' + roomcatId;
}


function getPriceByCat(cat,funname) {
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