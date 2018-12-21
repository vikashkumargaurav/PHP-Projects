$('document').ready(function () {
    makeAjax(API_URL + 'RoomBookings/GetAllRoomBookingsByTravellerIdAndBookingStatus/' + aid + '/Active', 'GET', getActiveBookings, AUTH_KEY);
// image gallery
// init the state from the input

})
var ActiveBookingObj;
var ActiveBookingHotelObj;
var ActiveBookingRoomObj;
var Booking = {};
function getActiveBookings(data) {
    // if we dont have active booking from that traveller id then hit on same api with Quick Status to get quick booking
    ActiveBookingObj = data[0];
    console.log(data);
    if (data.length == 0) {
        makeAjax(API_URL + 'RoomBookings/GetAllRoomBookingsByTravellerIdAndBookingStatus/' + aid + '/Quick', 'GET', getQuickBookings, AUTH_KEY);
    } else {
        makeAjax(API_URL + 'Hotels/' + data[0].HotelId, 'GET', getHotelDetailsByHotelId, AUTH_KEY);
    }


}


function getHotelDetailsByHotelId(data) {
    console.log(data);
    ActiveBookingHotelObj = data;
    if (ActiveBookingObj.RoomId != 0) {
        makeAjax(API_URL + 'Rooms/' + ActiveBookingObj.RoomId, 'GET', getRoomByRoomId, AUTH_KEY);
    } else {
        ActiveBookingRoomObj = data;
        Booking.BookingObj = ActiveBookingObj;
        Booking.HotelObj = ActiveBookingHotelObj;
        showActiveBooking(Booking)
    }

}

function getRoomByRoomId(data) {
    ActiveBookingRoomObj = data;
    Booking.BookingObj = ActiveBookingObj;
    Booking.HotelObj = ActiveBookingHotelObj;
    Booking.RoomObj = ActiveBookingRoomObj;
    showActiveBooking(Booking)
}
function showActiveBooking(data) {
    console.log(data);
    var roomServicesDivShowRow = '';
    roomServicesDivShowRow += '<div class="chart col-lg-8 col-12">';
    roomServicesDivShowRow += '<div class="client card">';
    roomServicesDivShowRow += '<div class="card-close">';
    roomServicesDivShowRow += '<div class="dropdown">';
    roomServicesDivShowRow += '<button type="button" id="closeCard2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-ellipsis-v"></i></button>';
    roomServicesDivShowRow += '<div aria-labelledby="closeCard2" class="dropdown-menu dropdown-menu-right has-shadow"><a href="#" class="dropdown-item remove"> <i class="fa fa-times"></i>Close</a><a href="#" class="dropdown-item edit"> <i class="fa fa-gear"></i>Edit</a></div>';
    roomServicesDivShowRow += '</div>';
    roomServicesDivShowRow += '</div>';
    roomServicesDivShowRow += '<div class="card-body text-center">';
    roomServicesDivShowRow += '<div class="row ">';
    roomServicesDivShowRow += '<div class="left-col col-lg-7  d-flex align-items-center justify-content-between">';
    if (data.HotelObj.hotelImage.length == 0) {
        roomServicesDivShowRow += '<img  style="max-width:  100%;max-height: 300px;" src="img/myimg/no-image.jpg"  alt="..." class="img-fluid">';
    } else {
        roomServicesDivShowRow += '<img  style="max-width:  100%;max-height: 300px;" src="img/myimg/hotel.jpg" alt="..." class="img-fluid">';
    }

    roomServicesDivShowRow += '</div>';
    roomServicesDivShowRow += '<div class="right-col col-lg-5 text-left" style="margin-top: 20px;padding-top: 8%">';
    if (data.BookingObj.RoomId == 0) {
        roomServicesDivShowRow += '<h4>' + data.HotelObj.DisplayName + ' <span style="font-size : 38px;" class="badge badge-success float-right"></span></h4>';
    } else {
        roomServicesDivShowRow += '<h4>' + data.HotelObj.DisplayName + ' <span style="font-size : 38px;" class="badge badge-success float-right">' + data.RoomObj.RoomNo + '</span></h4>';
    }

    roomServicesDivShowRow += '<h4>' + data.HotelObj.Localty + '</h4>';
    roomServicesDivShowRow += '<h4>' + data.HotelObj.City + '</h4>';
    roomServicesDivShowRow += '<p>(' + data.BookingObj.RoomCategory + ' Room)</p>';
    roomServicesDivShowRow += '<h4><span class="badge badge-success" >' + data.BookingObj.BookingStatus + '</span></h4>';
    roomServicesDivShowRow += '</div>';
    roomServicesDivShowRow += '</div><hr>';
    roomServicesDivShowRow += '<div class="client-info">';
    roomServicesDivShowRow += '<div class="row">';
    roomServicesDivShowRow += '<div class="col-4"><small>Booking Id</small><br><strong><span >' + data.BookingObj.BookingId + '</span></strong></div>';
    roomServicesDivShowRow += '<div class="col-4"><small>Check-In</small><br><small><strong >' + data.BookingObj.CheckInDate + '</strong></small></div>';
    roomServicesDivShowRow += '<div class="col-4"><small>Check-Out</small><br><small><strong >' + data.BookingObj.CheckOutDate + '</strong></small></div>';
    roomServicesDivShowRow += ' </div>';
    roomServicesDivShowRow += '</div><hr>';
    roomServicesDivShowRow += '<div class="client-social  justify-content-between"><a href="#">View Details</a> </div>';
    roomServicesDivShowRow += '</div>';
    roomServicesDivShowRow += '</div>';
    roomServicesDivShowRow += '</div>';

    if (data.BookingObj.RoomId == 0) {
        roomServicesDivShowRow += '<div class="statistics col-lg-4 col-12" >';
        roomServicesDivShowRow += '<div onclick="getupgradeRoomByHotelId(\'' + btoa(JSON.stringify(data.BookingObj)) + '\')"  class="statistic d-flex align-items-center bg-white has-shadow" data-toggle="modal" data-target="#RoomUpgradeModal">';
        roomServicesDivShowRow += '<div class="icon bg-red"><i class="fa fa-level-up"></i></div>';
        roomServicesDivShowRow += '<div class="text" ><strong>Select</strong><br><small>Room</small></div>';
        roomServicesDivShowRow += '</div>';
    } else {
        roomServicesDivShowRow += '<div class="statistics col-lg-4 col-12" >';
        roomServicesDivShowRow += '<div onclick="getupgradeRoomByHotelId(\'' + btoa(JSON.stringify(data.BookingObj)) + '\')"  class="statistic d-flex align-items-center bg-white has-shadow" data-toggle="modal" data-target="#RoomUpgradeModal">';
        roomServicesDivShowRow += '<div class="icon bg-red"><i class="fa fa-level-up"></i></div>';
        roomServicesDivShowRow += '<div class="text" ><strong>Upgrade</strong><br><small>Room</small></div>';
        roomServicesDivShowRow += '</div>';
    }
    roomServicesDivShowRow += '<div class="statistic d-flex align-items-center bg-white has-shadow" onclick="getRoomServices(' + data.BookingObj.BookingId + ')" >';
    roomServicesDivShowRow += '<div class="icon bg-green"><i class="fa fa-user"></i></div>';
    roomServicesDivShowRow += '<div class="text" ><strong>Room</strong><br><small>Service</small></div>';
    roomServicesDivShowRow += ' </div>';

    roomServicesDivShowRow += '<div onclick="getPaidAmenities(' + data.BookingObj.BookingId + ')"  class="statistic d-flex align-items-center bg-white has-shadow">';
    roomServicesDivShowRow += '<div class="icon bg-orange"><i class="fa fa-paper-plane-o"></i></div>';
    roomServicesDivShowRow += '<div class="text"><strong>Paid</strong><br><small>Amenities</small></div>';
    roomServicesDivShowRow += '</div>';
    if (data.BookingObj.RoomId != 0) {
        roomServicesDivShowRow += '<div onclick="getBookingObjForViewBill(\'' + btoa(JSON.stringify(data.BookingObj)) + '\')" data-toggle="modal" data-target="#BillModel" class="statistic d-flex align-items-center bg-white has-shadow">';
        roomServicesDivShowRow += ' <div class="icon bg-orange"><i class="fa fa-money"></i></div>';
        roomServicesDivShowRow += ' <div class="text"><strong>View</strong><br><small>Bill</small></div>';
        roomServicesDivShowRow += '</div>';
        roomServicesDivShowRow += '</div>';

        roomServicesDivShowRow += '<div onclick="getCustomerFeedBacks(' + data.BookingObj.BookingId + ')" data-toggle="modal" data-target="#FeedBackModel" class="statistic d-flex align-items-center bg-white has-shadow">';
        roomServicesDivShowRow += ' <div class="icon bg-orange"><i class="fa fa-money"></i></div>';
        roomServicesDivShowRow += ' <div class="text"><strong>FeedBack</strong><br><small></small></div>';
        roomServicesDivShowRow += '</div>';
        roomServicesDivShowRow += '</div>';
    }

    $('#LatestActiveBookingDiv').append(roomServicesDivShowRow);
}
function getQuickBookings(data) {
    console.log(data);
    ActiveBookingObj = data[0];
    makeAjax(API_URL + 'Hotels/' + data[0].HotelId, 'GET', getHotelDetailsByHotelId, AUTH_KEY);
}


function getupgradeRoomByHotelId(data1) {
    var data1 = JSON.parse(atob(data1));
    console.log(data1);
    var data = {};
    data.HotelId = data1.HotelId;
    data.ToDate = data1.CheckOutDate;
    data.FromDate = data1.CheckInDate;
    console.log(data);
    makeAjax(API_URL + 'Agent/GetCategoryAvailabilityByDateAndHotelIdAndFromDate', 'POST', getRoomAvilableByRoomIdandInAndOutDate, AUTH_KEY, data);


}


function getRoomAvilableByRoomIdandInAndOutDate(data) {
    $('#UpgradeRoomDiv').empty();
    console.log(data);
    var roomNumberRow = '';
    for (i = 0; i < data.length; i++) {
        roomNumberRow += '<div class="col-xs-4 col-sm-3 col-md-2 nopad text-center">';
        roomNumberRow += '<label class="room-checkbox" id="room-checkbox">';
        roomNumberRow += '<img width="100%" class="img-responsive" src="img/myimg/room.png" />';
        roomNumberRow += '<input type="radio" name="RoomNo" value="' + data[i].RoomId + '" />';
        roomNumberRow += '<i class="fa fa-check" style="display: none"></i>';
        roomNumberRow += '</label>';
        roomNumberRow += '<p>' + data[i].RoomNo + '</p>';
        roomNumberRow += '</div>';
    }
    $('#UpgradeRoomDiv').append(roomNumberRow);

}

// sync the state to the input
$("#room-checkbox").on("click", function (e) {
    $(this).toggleClass('room-checkbox-checked');
    var $radio = $(this).find('input[type="radio"]');
    $radio.prop("checked", !$radio.prop("checked"))

    e.preventDefault();
});

$('#roomupgradeBtn').click(function () {
    if (Booking.BookingObj.RoomId == 0) {
        var requestedRoomId = $("input[name='RoomNo']:checked").val();
        console.log(requestedRoomId);
        var data = {};
        data.HotelId = Booking.HotelObj.HotelId;
        data.Title = "Room Request";
        data.Message = requestedRoomId + " " + Booking.BookingObj.BookingNumber;
        data.SenderId = "415720091200";
        data.ServerId = "AIzaSyBFdghUu7AgQVnu27xkKKLHJ6oSz9AnQ8M";
        makeAjax(API_URL + 'Calculation/SendNotificationForMultipleDeviceByHotelId', 'POST', getRoomUpgradeRequestResponse, AUTH_KEY, data);
    } else {
        var requestedRoomId = $("input[name='RoomNo']:checked").val();
        console.log(requestedRoomId);
        var data = {};
        data.HotelId = Booking.HotelObj.HotelId;
        data.Title = "Select Room Upgrade Request";
        data.Message = requestedRoomId + " " + Booking.BookingObj.BookingNumber + " " + Booking.BookingObj.BookingId;
        data.SenderId = "415720091200";
        data.ServerId = "AIzaSyBFdghUu7AgQVnu27xkKKLHJ6oSz9AnQ8M";
        makeAjax(API_URL + 'Calculation/SendNotificationForMultipleDeviceByHotelId', 'POST', getRoomUpgradeRequestResponse, AUTH_KEY, data);
    }

})

function getRoomUpgradeRequestResponse(data) {
    console.log(data);
    alert('Thank You we got your Request');
    location.reload();
}

function GetPaidAmenitiesByHotelId(data) {

    console.log(data);
    makeAjax(API_URL + 'Hotels/GetPaidAmenitiesByHotelId/' + data, 'GET', GetPaidAmenities, AUTH_KEY);
}



$('#PaidAmenitiesBtn').click(function () {
    var PaidAmenitiesId = $("input[name='PaidAmenitiesId']:checked").val();
    console.log(PaidAmenitiesId);
    var data = {};
    data.HotelId = Booking.HotelObj.HotelId;
    data.Title = "Select Room Upgrade Request";
    data.Message = PaidAmenitiesId + " " + Booking.BookingObj.BookingNumber + " " + Booking.BookingObj.BookingId;
    data.SenderId = "415720091200";
    data.ServerId = "AIzaSyBFdghUu7AgQVnu27xkKKLHJ6oSz9AnQ8M";
    makeAjax(API_URL + 'Calculation/SendNotificationForMultipleDeviceByHotelId', 'POST', getRoomUpgradeRequestResponse, AUTH_KEY, data);
})

function getBookingObjForViewBill(data) {
    $('#ViewBillDiv').empty();
    var data = JSON.parse(atob(data));
    makeAjax(API_URL + 'Travellers/' + data.TravellerId, 'GET', getTravellerById, AUTH_KEY);

}

function getTravellerById(data) {
    console.log(data);
    var billRow = '';

    billRow += '<div class="col-lg-12">';
    billRow += ' <div class="client card">';
    billRow += '<div class="card-body text-center">';
    billRow += '<div class="row">';
    billRow += '<div class="col-6 text-black-50 text-left"><strong>' + Booking.HotelObj.DisplayName + '</strong><br><small>' + Booking.HotelObj.Localty + '</small></div>';
    billRow += '<div class="col-6 text-right"><img style="width: 38%" src="img/zingologo.png"></div>';
    billRow += '</div>';
    billRow += '<hr>';
    billRow += '<div class="client-title">';
    billRow += '<h3>' + data.FirstName + '</h3><span style="color:#0b0a0a"  class="text-center"><small>' + Booking.BookingObj.NoOfAdults + ' Adults, ' + Booking.BookingObj.NoOfChild + ' Child </small></span>';
    billRow += '</div>';
    billRow += '<div class="row">';
    billRow += '<div class="col-6 text-black-50 text-center"><strong>' + convertDateNumDateToMonthNameFormate(Booking.BookingObj.CheckInDate) + '</strong><br><small>CheckInDate</small></div>';
    billRow += '<div class="col-6 text-black-50 text-center"><strong>' + convertDateNumDateToMonthNameFormate(Booking.BookingObj.CheckOutDate) + '</strong><br><small>CheckOutDate</small></div>';
    billRow += '</div><br>';

    billRow += '<div class="row">';
    billRow += '<div class="col-6 text-black-50 text-center"><strong>' + Booking.BookingObj.CheckInTime + '</strong><br><small>CheckInTime</small></div>';
    billRow += '<div class="col-6 text-black-50 text-center"><strong>' + Booking.BookingObj.CheckOutTime + '</strong><br><small>CheckOutTime</small></div>';
    billRow += '</div>';
    billRow += '<div class="client-title">';
    billRow += '<h3 style="color:green">'+DurationofStay(Booking.BookingObj.CheckOutDate)+'</h3><span>Duration of Stay</span>';
    billRow += '<h3 style="color:red">1 Day 5 hours</h3><span>Duration Left</span>';
    billRow += '</div>';
    billRow += '<div class="row">';
    billRow += '<div class="col-6 text-left" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><strong>Total Amount</strong><br><small >See Details</small></div>';
    billRow += '<div class="col-6 text-right"><strong>' + Booking.BookingObj.TotalAmount + '</strong><br><small>INR</small></div>';
    billRow += '</div>';


    billRow += '<div class="row">';
    billRow += '<div class="col">';
    billRow += '<div class="collapse multi-collapse" id="multiCollapseExample1">';
    billRow += '<div class="card card-body" style="padding: 0.25rem;">';
    billRow += '<span style="color:#0b0a0a" class="text-left"><small>' + Booking.BookingObj.SellRate + ' INR Per/Night</small></span>';
    billRow += '<span style="color:#0b0a0a" class="text-left"><small>(' + Booking.BookingObj.NoOfRooms + ' Rooms X ' + Booking.BookingObj.DurationOfStay + ' Days )</small></span>';
    billRow += '<span style="color:#0b0a0a"  class="text-left"><small>(' + Booking.BookingObj.NoOfAdults + ' Adults, ' + Booking.BookingObj.NoOfChild + ' Child )</small></span>';
    billRow += '</div>';
    billRow += '</div>';
    billRow += '</div>';
    billRow += '</div>';


    billRow += '<div class="row">';
    billRow += '<div class="col-6 text-left"><strong>Total Balance</strong><br><small></small></div>';
    billRow += '<div class="col-6 text-right"><strong>' + Booking.BookingObj.BalanceAmount + '</strong><br><small>INR</small></div>';
    billRow += '</div>';

    billRow += ' </div>';
    billRow += ' </div>';
    billRow += ' </div>';

    $('#ViewBillDiv').append(billRow);

}
function duration() {
    var d = new Date("09 / 20 / 2018");
    var CheckOutTime = 18;
    var c = new Date();
    var diff = CheckOutTime - c
    
    //console.log(current_date);
    return ;
}


function getCustomerFeedBacks(data) {
    console.log(data);
    $('#FBookingId').val(data);
}

$('#submitFeedbackBtn').click(function () {
   var rate= $('input[name=rating]:checked').val();
   console.log(rate);
   var data = {};
   data.StarRating = String(rate);
   data.Comment = $('#Comment').val();
   data.FeedbackDate = getCurrentDate();
   data.BookingId = $('#FBookingId').val();
   console.log(data);
    makeAjax(API_URL + 'CustomerFeedBacks', 'POST', getCustomerFeedBackAddResponse, AUTH_KEY, data);

})

function getCustomerFeedBackAddResponse(data) {
    console.log(data);
    alert('Thank you for your FeedBack');
    window.location.reload();


}