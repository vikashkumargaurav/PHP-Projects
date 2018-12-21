$(document).ready(function () {
    console.log(BookingId);
    makeAjax(API_URL + 'RoomBookings/' + BookingId, 'GET', getBookingByBookingId, AUTH_KEY);

})
var BookingObj;

function getBookingByBookingId(data) {
    console.log(data);
    BookingObj = data;
    makeAjax(API_URL + 'Hotels/GetPaidAmenitiesByHotelId/' + BookingObj.HotelId, 'GET', GetPaidAmenities, AUTH_KEY);
}

function GetPaidAmenities(data) {
    $('#PaidAmenitiesDiv').empty();
    console.log(data);
    countPaidAmenitiesRow = 0;
    var PaidAmenitiesRow = '';
    if (data.length == 0) {
        PaidAmenitiesRow += '<p>No service Avilable</p>';
    } else {
        for (i = 0; i < data.length; i++) {
            if (data[i].Category == "BreakFast" || data[i].Category == "Dinner" || data[i].Category == "Lunch") {
                countPaidAmenitiesRow++;
                PaidAmenitiesRow += '<div class="project">';
                PaidAmenitiesRow += '<div class="row bg-white has-shadow">';
                PaidAmenitiesRow += '<div class="left-col col-lg-8 d-flex align-items-center justify-content-between">';
                PaidAmenitiesRow += '<div class="project-title d-flex align-items-center">';
                PaidAmenitiesRow += '<div class="image has-shadow"><img style="width: 100%" src="img/myimg/no-image.jpg" alt="..." class="img-fluid"></div>';
                PaidAmenitiesRow += '<div class="text">';
                PaidAmenitiesRow += '<h3 class="h5" id="PaidAmenitiesName_' + countPaidAmenitiesRow + '">' + data[i].PaidAmenitiesName + '</h3>';
                PaidAmenitiesRow += '</div>';
                PaidAmenitiesRow += '</div>';
                PaidAmenitiesRow += '<div class="project-date align-items-center">';

                PaidAmenitiesRow += '<div class="time"><i class="fa fa-rupee"></i><span id="Price_' + countPaidAmenitiesRow + '">' + data[i].Price + '</span></div>';

                PaidAmenitiesRow += '</div>';
                PaidAmenitiesRow += '</div>';
                PaidAmenitiesRow += '<div class="right-col col-lg-4 d-flex align-items-center">';

                PaidAmenitiesRow += '<div class="number-input " id="amenitiesInputDiv_' + data[i].PaidAmenitiesId + '">';
                PaidAmenitiesRow += '  <button onclick="this.parentNode.querySelector(\'input[type=number]\').stepDown()" ></button>';
                PaidAmenitiesRow += '  <input id="PaidAmenitiesId_' + countPaidAmenitiesRow + '"  class="quantity" min="0" name="quantity" value="0" type="number">';
                PaidAmenitiesRow += '  <button onclick="this.parentNode.querySelector(\'input[type=number]\').stepUp()" class="plus"></button>';
                PaidAmenitiesRow += '</div>';
                PaidAmenitiesRow += '</div>';
                PaidAmenitiesRow += '</div>';
                PaidAmenitiesRow += '</div>';
            } else {
                continue;
            }
        }
    }

    $('#PaidAmenitiesDiv').append(PaidAmenitiesRow);


}


$('#RequestAmenitiesBtn').click(function () {
    isServiceAvilable = 0;
    BookingArray = [];
    for (i = 1; i <= countPaidAmenitiesRow; i++) {
        var serviceObj = {};
        if ($('#PaidAmenitiesId_' + i).val() != 0) {
            serviceObj.Description = $('#PaidAmenitiesName_' + i).text();
            serviceObj.Amount = (parseInt($('#PaidAmenitiesId_' + i).val()) * parseInt($('#Price_' + i).text()));
            serviceObj.BookingNumber = BookingObj.BookingNumber;
            serviceObj.BookingId = BookingObj.BookingId;
            serviceObj.PaidStatus = "Unpaid";
            serviceObj.PaymentMode = "None";
            serviceObj.PaymentDate = getCurrentDate();
            serviceObj.Quantity = $('#PaidAmenitiesId_' + i).val();
            serviceObj.ServiceStatus = "Pending";
            serviceObj.StatusReason = "";
            console.log(serviceObj);
            makeAjax(API_URL + 'Services', 'POST', getBookingServiceUpdateConfirm, AUTH_KEY, serviceObj);
        }
    }

    makeRoomServiceAlertToHotelier();
})


function makeRoomServiceAlertToHotelier() {
    var data = {};
    data.HotelId = BookingObj.HotelId;
    data.Title = "Room Service Request";
    data.Message = BookingObj.BookingId;
    data.SenderId = "415720091200";
    data.ServerId = "AIzaSyBFdghUu7AgQVnu27xkKKLHJ6oSz9AnQ8M";
    makeAjax(API_URL + 'Calculation/SendNotificationForMultipleDeviceByHotelId', 'POST', getRoomservicetResponse, AUTH_KEY, data);
}

function getRoomservicetResponse(data) {
    console.log(data);
    alert('Thank You we got your Request');
    window.location.reload();

}

function getBookingServiceUpdateConfirm(data) {
    console.log(data);
}