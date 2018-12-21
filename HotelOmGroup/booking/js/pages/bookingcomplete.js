/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var bookingData = loadData('bookingData');
var roomPriceData = loadData('roomPrice');
var travellerData = loadData('travellerData');
var HotelId;
$(document).ready(function () {

    HotelId = bookingData.HotelId;
//    console.log(HotelId);
//    alert(HotelId);
    $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/Hotels/' + HotelId,
        type: 'GET',
        headers: {Authorization: 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg=='},
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            StdCheckInTime = data.CheckInTime;
            StdCheckOutTime = data.CheckOutTime;
            HOTEL_NAME = data.DisplayName;
            $('#HOTEL_NAME').text(HOTEL_NAME);
            LOCATION = data.maps[0].Location;
            $('#LOCATION').text(LOCATION);
//            console.log(LOCATION);
            $('#mainLoader').hide();

        }
    }).fail(function () {
        // console.log('fail');
        $('#mainLoader').hide();
    })

})


/*console.log(bookingData);
console.log(roomPriceData);
console.log(travellerData);*/

$('#FirstName').text(travellerData.FirstName);
$('#Email').text(travellerData.Email);
$('#PhoneNumber').text(travellerData.PhoneNumber);

$('#bookingid').text(bookingData.BookingId);
$('#bookingdate').text(bookingData.BookingDate);
$('#CheckInDate').text(bookingData.CheckInDate);
$('#CheckOutDate').text(bookingData.CheckOutDate);

$('#RoomCategory').text(bookingData.RoomCategory);

$('#NoOfRooms').text(bookingData.NoOfRooms + 'Rooms' + bookingData.DurationOfStay + ' Nights');

//var dummyArray = [2000, 3000, 4000];

$('#SellRate').text(bookingData.SellRate);
$('#GSTAmount').text(bookingData.GSTAmount);
$('#TotalAmount').text(bookingData.TotalAmount);
$('#BalanceAmount').text(bookingData.BalanceAmount);
$('#GSTAmount').text(bookingData.GSTAmount);


var roomDetailsRow = '';
var row = 0;
var room = 1;
while (row < roomPriceData.length) {
    roomDetailsRow += '<tr>';
    roomDetailsRow += '<td>' + bookingData.RoomCategory + '(Room ' + room + ')</td>';
    roomDetailsRow += '<td>' + roomPriceData[row] + '</td>'
    roomDetailsRow += '<td>1 x (' + bookingData.DurationOfStay + ' nights)</td>';
    roomDetailsRow += '<td>' + roomPriceData[row] * bookingData.DurationOfStay + '</td>';

    row++;
    room++;
}
$('#roomDetailsDiv').append(roomDetailsRow);

$('#getPrint').click(function () {
    $('#getPrint').hide();
    setTimeout(function () {
        $('#getPrint').show();
    }, 2000);
    window.print();
})

