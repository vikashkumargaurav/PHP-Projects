/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var initialRoomCatId;
$(document).ready(function () {
    $('#DeclaredRateForSingle').hide();
    $('#save').hide();
    $('#checkindate').val(getCurrentDate());
    $('#checkoutdate').val(getCurrentDateplusone());
    $('#checkindate').datepicker({
        startDate: getCurrentDate(),
        todayHighlight: getCurrentDate(),
        autoclose: true

    });
})

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
    initialRoomCatId = data[0].RoomCategoryId;
    $('#roomcatname').text(data[0].CategoryName);
    getPriceByCat(initialRoomCatId, funname);
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
console.log(initialRoomCatId);

function funname(data) {
    if ((data[0].DeclaredRateForSingle) == (data[0].SellRateForSingle)) {
        $('#save').show();
        $('#save').text('   ₹ ' + data[0].SellRateForSingle);
    } else {
        var savings = (data[0].DeclaredRateForSingle) - (data[0].SellRateForSingle);
        $('#save').show();
        $('#DeclaredRateForSingle').show();
        $('#DeclaredRateForSingle').text('₹ ' + data[0].DeclaredRateForSingle);
        $('#save').text('   ₹ ' + data[0].SellRateForSingle);
        $('#saving').text('Save ₹ ' + savings);
    }


}

function getPriceByCat(cat, funname) {
    $('#mainLoader').show();
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
            console.log(data);
            funname(data);
            $('#mainLoader').hide();
//            console.log(data);

        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
        //console.log(data);
    })

}

$('#getDate').click(function () {
//    if ($('#checkindate').val().trim().length == '') {
//        $('#checkindate').focus();
//        alert('Please Specify CheckInDate');
//        return false;
//    }
//    if ($('#checkoutdate').val().trim().length == '') {
//        $('#checkoutdate').focus();
//        alert('Please Specify checkoutdate');
//        return false;
//    }

    var checkindate = $('#checkindate').val();
    var checkoutdate = $('#checkoutdate').val();
    var data = {};
    data.CheckInDate = checkindate;
    data.CheckoutDate = checkoutdate;
    saveData(data, 'checkdate');
    window.location.href = 'booking.php?roomcatId=' + initialRoomCatId;
})


function checkAvilable() {
    $('#mainLoader').show();
    var checkInDate = $('#checkindate').val().trim();
    var checkOutDate = $('#checkoutdate').val().trim();
    console.log(checkInDate);
    console.log(checkOutDate);
    $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/Rates/GetRatesBetweenTheDatesByHotelIdAndRoomCategoryId',
        type: 'POST',
        headers: {Authorization: Authorization},
        data: JSON.stringify({
            "HotelId": 42,
            "RoomCategoryId": initialRoomCatId,
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
function onchangeCheckOut() {
//    alert('hiiii');
    checkAvilable();
}
var sellRateForSingleRoom;
var sellRateForDoubleRoom;
var SellRateForExtraAdult;
function getRooomAvilabilityPrice(data) {
    $('#rateDiv').show();
    console.log(data);
    for (i = 0; i < data.length; i++) {
//        console.data[i].SellRateForSingle;
        if ((data[0].DeclaredRateForSingle) == (data[0].SellRateForSingle)) {
            $('#save').show();
            $('#save').text('   ₹ ' + data[0].SellRateForSingle);
        } else {
            var savings = (data[0].DeclaredRateForSingle) - (data[0].SellRateForSingle);
            $('#save').show();
            $('#DeclaredRateForSingle').show();
            $('#saving').text('Save ₹ ' + savings);
            $('#DeclaredRateForSingle').text('₹ ' + data[0].DeclaredRateForSingle);
            $('#save').text('   ₹ ' + data[0].SellRateForSingle);
        }
    }
//    $.each(data,function(i,data){
////        console.log(data.SellRateForSingle);
//    })


}