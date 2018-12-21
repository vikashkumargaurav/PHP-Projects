
$('#addServiceBtn').click(function () {
    $('#ServiceDiv').toggle();
    $('#PaymentDiv').hide();
    $('#editServiceDiv').hide();
});
$('#addPaymentBtn').click(function () {
    $('#PaymentDiv').toggle();
    $('#ServiceDiv').hide();
    $('#editServiceDiv').hide();

});

$('#editServiceBtn').click(function () {
   $('#editServiceDiv').toggle();
    $('#ServiceDiv').hide();
    $('#PaymentDiv').hide();
});


// update booking services list






$('#AddServiceApiPostBtn').click(function () {
    var data = {};
    if ($('#Description').val().length == '') {
        $('#Description').focus();
        alert('Service Name Required');
        return false;

    }
    if ($('#Amount').val().length == '') {
        $('#Amount').focus();
        alert('Service Price Required');
        return false;

    }
    data.Description = $('#Description').val();
    data.Amount = $('#Amount').val();
    data.PaidStatus = $('#PaidStatus').val();
    data.PaymentMode = $('#PaymentMode').val();
    data.BookingId = $('#BookingId').val();
    data.BookingNumber = $('#BookingNumber').val();
    data.PaymentDate = getCurrentDate();
    // data.ServiceStatus   = 'Completed';
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Services', 'POST', GetAddServicesReponse, auth, data);
})

function GetAddServicesReponse(data) {
    // console.log(data);
    alert('Service Added ');
    location.reload();

}

$('#AddPaymentApiPostBtn').click(function () {
    var data = {};
    if ($('#PaymentAmount').val().length == '') {
        $('#PaymentAmount').focus();
        alert('Service Price Required');
        return false;

    }
    data.PaymentName = $('#PaymentName').val();
    data.Amount = $('#PaymentAmount').val();
    data.PaymentType = $('#PaymentType').val();
    data.Remarks = $('#Remarks').val();
    data.BookingId = $('#BookingId').val();
    data.BookingNumber = $('#BookingNumber').val();
    data.PaymentDate = getCurrentDate();
    // data.ServiceStatus   = 'Completed';
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Payments', 'POST', GetAddPaymentsReponse, auth, data);
})

function GetAddPaymentsReponse(data) {
    // console.log(data);
    alert('Payment Added ');
    location.reload();
}

//  payment and service end

$('#checkinBtn').click(function () {
    // console.log(BookingTravellerData)
    getBookingIdForCheckIn(BookingTravellerData.BookingObj);
})
$('#checkoutBtn').click(function () {
    // console.log(BookingTravellerData)
    getBookingIdForCheckOut(BookingTravellerData.BookingObj);
})

$('#cancelBtn').click(function () {
    // console.log(BookingTravellerData.BookingObj)
    getBookingIdForextendCheckOut(BookingTravellerData.BookingObj);
});



$('#normalInvoice').click(function () {
    // console.log(BookingTravellerData)
    $('button[data-dismiss=modal]').click();
    window.open('invoice/travellerinvoice.php?bookingDetails=' + btoa(JSON.stringify(BookingTravellerData)));
    // getBookingIdForCheckOut(BookingTravellerData);

});

$('#serviceInvoice').click(function () {
    console.log(BookingTravellerData);
    $('button[data-dismiss=modal]').click();
    if(BookingTravellerData.BookingObj.servicesList.length>0) {
        window.open('invoice/serviceinvoice.php?bookingDetails=' + btoa(JSON.stringify(BookingTravellerData)));
    }else {
        alert('No services found !');
    }

});



$('#allocateRoomBtn').click(function () {
    getBookingByBookingIdForRoomAllocation(BookingTravellerData.BookingObj)

})
var ChangeRoom = 0;
$('#changeRoomBtn').click(function () {
    ChangeRoom = 1;
    getBookingByBookingIdForRoomAllocation(BookingTravellerData.BookingObj)

})
function getBookingIdForCheckIn(data) {
    if(data.RoomId == 0){
        makeAlert('warning ','please select room to check in');
        return false;
    }
    var r = confirm("Please confirm check in");
    if(r == true){
        data.BookingStatus = 'Active';
        // console.log(data);
        makeAjax(MAIN_API_IRL + 'RoomBookings/' + data.BookingId, 'PUT', getBookingUpdateCheckInResponse, auth, data);
    }
}
function getBookingIdForCheckOut(data) {
    var r = confirm("Please confirm checkout");
    if(r == true){
        data.BookingStatus = 'Completed';
        // console.log(data);
        makeAjax(MAIN_API_IRL + 'RoomBookings/' + data.BookingId, 'PUT', getBookingUpdateCheckOutResponse, auth, data);
    }
}
function getBookingUpdateCheckInResponse(data) {
    // console.log(data);
    alert('CheckIn Done ');
    location.reload();
}
function getBookingUpdateCheckOutResponse(data) {
    // console.log(data);
    alert('CheckOut Done ');
    location.reload();
}

function getBookingIdForextendCheckOut(data) {
    var r = confirm("Please confirm Cancel");
    if(r == true){
        data.BookingStatus = 'Cancel';
        // console.log(data);
        makeAjax(MAIN_API_IRL + 'RoomBookings/' + data.BookingId, 'PUT', getBookingCancelResponse, auth, data);
    }
}

function getBookingCancelResponse(data) {
    // console.log(data);
    alert('Cancel Done ');
    location.reload();
}

//  allocate room  -----------------------------------------------------------------



function getBookingByBookingIdForRoomAllocation(BookingObj) {
    // QuickBookingObj = BookingObj;
    // console.log(BookingObj)
    var data = {};
    data.HotelId = BookingObj.HotelId;
    data.FromDate = BookingObj.CheckInDate;
    // data.FromDate = '10/25/2018';
    data.ToDate = BookingObj.CheckOutDate;
    // data.ToDate = "10/27/2018";
    // console.log(data);
    // makeAjax(MAIN_API_IRL + 'Agent/GetAvailabilityOfCategoryBetweenDatesOfParticularHotel', 'POST', getHotelAvilabilityDetails, auth,data);
    makeAjax(MAIN_API_IRL + 'Agent/GetCategoryAvailabilityByDateAndHotelIdAndFromDate', 'POST', getHotelAvilabilityDetails, auth, data);

}

function getHotelAvilabilityDetails(data) {
    $('#selectRoomModelBtn').click();
    $('#RoomDiv').empty();
    // console.log(data);
    var roomNumberRow = '';
    for (i = 0; i < data.length; i++) {
        roomNumberRow += '<div class="col-xs-4 col-sm-3 col-md-2 nopad text-center">';
        roomNumberRow += '<label class="room-checkbox" id="room-checkbox">';
        roomNumberRow += '<img width="100%" class="img-responsive" src="https://cdn.iconscout.com/icon/free/png-256/dnd-door-hotel-room-travel-door-card-30136.png" />';
        roomNumberRow += '<input type="radio" name="RoomNo" value="' + data[i].RoomId + '" />';
        roomNumberRow += '<i class="fa fa-check" style="display: none"></i>';
        roomNumberRow += '</label>';
        roomNumberRow += '<p>' + data[i].RoomNo + '</p>';
        roomNumberRow += '</div>';
    }
    $('#RoomDiv').append(roomNumberRow);
    if(ChangeRoom == 1){
        $('#selectRoomBtn').hide();
        $('#updateRoomBtn').show();
    }
}

$('#selectRoomBtn , #updateRoomBtn ').click(function () {
    // alert($("input[name='RoomNo']:checked").val());
    var requestedRoomId = $("input[name='RoomNo']:checked").val();
    if ($("input[name='RoomNo']:checked").val() == undefined) {
        alert('Please select the room');
        return false;
    }
    BookingObj.RoomId = $("input[name='RoomNo']:checked").val();
    BookingObj.BookingStatus = 'Active';
    // console.log(BookingObj)
    makeAjax('http://zingoapi.azurewebsites.net/api/RoomBookings/' + BookingObj.BookingId, 'PUT', getBookNowRoomAddResponse, auth, BookingObj);
})

function getBookNowRoomAddResponse(data) {
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Rooms/' + BookingObj.RoomId, 'GET', GetRoomByRoomId, auth);


}

function GetRoomByRoomId(data) {
    data.Status = 'Booked';
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Rooms/UpdateRooms/' + BookingObj.RoomId, 'PUT', getUpdateRoomsStatusResponse, auth, data);
}

function getUpdateRoomsStatusResponse(data) {
    // console.log(data);
    if(ChangeRoom == 1){
        getRoomForupdateOlderRoomStatus();
    }
    alert('Booking Done Thank You');
    location.reload();
}

function getRoomForupdateOlderRoomStatus(){
    // console.log('getRoomForupdateOlderRoomStatus');
    var RoomId = $('#RoomId').val();
    makeAjax(MAIN_API_IRL + 'Rooms/' + RoomId, 'GET', updateOlderRoomStatus, auth);
}

function updateOlderRoomStatus(data) {
    // console.log(data);
    data.Status = 'Avilable';
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Rooms/UpdateRooms/' + data.RoomId, 'PUT', getUpdateOlderRoomsStatusResponse, auth, data);
}

function getUpdateOlderRoomsStatusResponse(data){
    alert('Room Changed Thank You');
    location.reload();
}

$('#CloseselectRoomBtn').click(function () {

    alert('Booking Done Room not allocated ')
    location.reload();

});







