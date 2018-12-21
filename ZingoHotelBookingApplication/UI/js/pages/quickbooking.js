$(document).ready(function () {
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
    makeAjax(MAIN_API_IRL + 'RoomCategories/GetRoomCategoriesByHotelId/' + hotelId, 'GET', GetRoomCategoryByHotelId, auth);
    makeAjax(MAIN_API_IRL + 'Travellers', 'GET', GetTravellers, auth);
    $("#from").val(getCurrentDate())
    $("#to").val(getNextDayDate(getCurrentDate()));

    for (i = 1; i <= 10; i++) {// for count no of rooms show in select
        $('#NoOfRooms').append($("<option style='color: black;'></option>")
            .attr("value", i)
            .text(i));
    }
})

function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName + ' Hotel Quick Booking');
    getHotelRoomAvilabilityOnDateChangeDetails();
}
var BookingResponseObj ;
var IsquickBooking = 0;
var HotelName;
var HotelAddress;
var HotelObj = {};
var TravellerObj;
var TravellerPhoneNumberArrayList = [];
var TravellerFullNameArrayList = [];
$(function () {
    var dateFormat = "mm/dd/yy",
        from = $("#from")
            .datepicker({
                // defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2,
                autoclose:true
            })
            .on("change", function () {
                $('#to').val(getNextDayDate($('#from').val()))
                to.datepicker("option", "minDate", getDate(this));
                getHotelRoomAvilabilityOnDateChangeDetails()
            }),

        to = $("#to").datepicker({
            // defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2,
        })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
                getHotelRoomAvilabilityOnDateChangeDetails();
            });


    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
});

function GetRoomCategoryByHotelId(data) {
    $.each(data, function (i, data) {
        $('#RoomType').append($("<option style='color: black;'></option>")
            .attr("value", data.CategoryName)
            .text(data.CategoryName));
    })
}


function GetTravellers(data) {
    // console.log(data);
    TravellerObj = data;
    $.each(data, function (i, data) {
        if (data.PhoneNumber != null)
            TravellerPhoneNumberArrayList.push(data.PhoneNumber);

        // if (data.FirstName != null)
        //     TravellerFullNameArrayList.push(data.FirstName);
    })
    $(function () {
        $("#GuestMobile").autocomplete({
            source: TravellerPhoneNumberArrayList
        });

        // $("#GuestName").autocomplete({
        //     source: TravellerFullNameArrayList
        // });
    });
}

$('#sellRate').keyup(function() {
    if($('#from').val().length == ''){
        $('#from').focus();
        makeAlert('warning','Please select check in Date ');
        return false;
    }

    if($('#to').val().length == ''){
        $('#to').focus();
        makeAlert('warning','Please select check out Date ');
        return false;
    }

    var checkindate = $('#from').val();
    var checkoutdate = $('#to').val();
    var NoofNights = numOfDaysBeteenDates(checkindate, checkoutdate);
    var NoOfRooms =  $('#NoOfRooms').val();
    var RoomPricewithGst = 0;
    var TotalRoomPricewithGSTXdayXnights =0;

    var totalgstamt = 0;
    var totalAmountwithgst =0;
    var sellRate =  $('#sellRate').val();
    if (sellRate < 1000) {
        gst = 0;
        totalgstamt = ((gst / 100) * sellRate);
    } else if (sellRate >= 1000 && sellRate < 2500) {
        gst = 12;
        totalgstamt = ((gst / 100) * sellRate);

    } else if (sellRate >= 2500 && sellRate <7500) {
        gst = 18;
        totalgstamt = ((gst / 100) * sellRate);
    } else {
        gst = 28;
        totalgstamt = ((gst / 100) * sellRate);
    }
    $('#GST').val(gst);
    RoomPricewithGst = parseFloat(parseInt(sellRate) + parseInt(totalgstamt));
    $('#GSTAmount').val(parseInt(totalgstamt));
    TotalRoomPricewithGSTXdayXnights =  parseFloat(parseInt(NoofNights) * parseInt(NoOfRooms) * parseInt(RoomPricewithGst));
    $('#TotalAmountWithTax').val(TotalRoomPricewithGSTXdayXnights);
})

$('#QuickBookingBtn').click(function () {
    IsquickBooking = 1;
    validateBookingForm();
})

$('#BookNowBtn').click(function () {
    IsquickBooking = 0;
    validateBookingForm();
});

function getBookingSourceTypeChage(data) {

    var event = data.target.value;

    if(event == "OTA"){

        $('#BookingSource')
            .find('option')
            .remove()
            .end();

        $.each(OTA, function (i, data) {
            $('#BookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        });


    }

    if(event == "B2B"){
        $('#BookingSource')
            .find('option')
            .remove()
            .end();
        $.each(B2B, function (i, data) {
            $('#BookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        });
    }

    if(event == "OFFLINE"){
        $('#BookingSource')
            .find('option')
            .remove()
            .end();

        $.each(OFFLINE, function (i, data) {
            $('#BookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        });

    }


}




function validateBookingForm() {
    if ($('#from').val().length == "") {
        $('#from').focus();
        makeAlert("warning","Check In Required");
        return false;
    }
    if ($('#to').val().length == "") {
        $('#to').focus();
        makeAlert("warning","Check Out Required");
        return false;
    }
    if ($('#GuestMobile').val().length == "") {
        $('#GuestMobile').focus();
        makeAlert("warning","Guest Mobile Required");
        return false;
    }
    if ($('#GuestName').val().length == "") {
        $('#GuestName').focus();
        makeAlert("warning","Guest Name Required");
        return false;
    }

    if (!$('#GuestEmail').val().length == "") {
        /*$('#GuestEmail').focus();
        makeAlert("warning","Guest Email Required");
        return false;*/

        if(!validateEmail($('#GuestEmail').val())){
            $('#GuestEmail').focus();
            makeAlert("warning","Email is invalid");
            return false;
        }
    }else{
        $('#GuestEmail').val(" ");
    }





    if($('#sellRate').val().length == ''){
        $('#sellRate').focus();
        makeAlert('warning','sellRate Required ');
        return false;
    }
    var tagexist = searchObjectByKey(TravellerObj,'PhoneNumber',$('#GuestMobile').val(),'BookingTravellerId');
    if(!tagexist){
        // makeAlert('info','No result found');
        addTraveller();
        // console.log('not tagexist');

    }else{
        // console.log('tagexist');
        // console.log(tagexist);
        addTraveller();
    }
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function addTraveller(){
    var data = {};
    data.FirstName = $('#GuestName').val();
    data.Email = $('#GuestEmail').val();
    data.PhoneNumber = $('#GuestMobile').val();
    data.Gender = $('#gender').val();
    // console.log(data);
    // data = JSON.stringify(data);
    makeAjax('http://zingoapi.azurewebsites.net/api/Travellers', 'POST', getAddTravellerReponse, auth, data);
}


function getAddTravellerReponse(data) {
// console.log(data);
    doQuickBooking(data.BookingTravellerId);
}

function doQuickBooking(TravellerId) {
    console.log(TravellerId);
    var data = {};
    data.TravellerId = TravellerId;
    data.BookingNumber = generateBookingNo();
    data.HotelId = hotelId;
    data.BookingDate = getCurrentDate();
    data.BookingTime = twelveHourFormatCurrentTime();
    data.OptCheckInDate = $('#from').val();
    data.CheckInDate = $('#from').val();
    data.NoOfAdults = $('#TotalGuest').val();
    data.NoOfChild = $('#TotalChilds').val();
    data.GST = $('#GST').val();
    data.ExtraCharges =0;
    data.GSTAmount = parseInt($('#GSTAmount').val());
    data.BookingStatus = 'Quick';
    data.SellRate = parseInt($('#sellRate').val()); // sellrate * nooftoom * nights
    data.TotalAmount = parseInt($('#TotalAmountWithTax').val());
    data.BalanceAmount = parseInt($('#TotalAmountWithTax').val());
    data.RoomCategory = $('#RoomType').val();
    data.OptCheckOutDate = $('#to').val();
    data.CheckOutDate = $('#to').val();
    data.NoOfRooms = $('#NoOfRooms').val();

    data.DurationOfStay = numOfDaysBeteenDates($('#from').val(), $('#to').val());
    data.BookingSourceType = $('#BookingSourceType').val();
    data.BookingSource = $('#BookingSource').val();
    data.BookingPlan = $('#RatePlaneName').val();
    data.CheckInTime = "12:00";
    data.CheckOutTime = "12:00";
    // console.log(data);
    // data = JSON.stringify(data);
    makeAjax('http://zingoapi.azurewebsites.net/api/RoomBookings', 'POST', getQuickBookingResponse, auth, data);
}


function getQuickBookingResponse(data){
    if(IsquickBooking == 1){
        // console.log(data);
        alert('Booking Done Sucessfully');
        getBookingIdForViewDetails(data.BookingId);
        // alert('Booking Done Sucessfully');
        // location.reload();
    }else{
        BookingResponseObj = data;
        checkRoomAvilabilityandGetRooms();
    }

}



function getHotelRoomAvilabilityOnDateChangeDetails() {
    var data = {};
    data.HotelId = hotelId;
    data.FromDate = $('#Quickfrom').val();
    // data.FromDate = '10/25/2018';
    data.ToDate = $('#Quickto').val();
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Agent/GetAvailabilityOfCategoryBetweenDatesOfParticularHotel', 'POST', getHotelRoomOnDateChangeAvilabilityDetails, auth,data);
    // makeAjax(MAIN_API_IRL + 'Agent/GetCategoryAvailabilityByDateAndHotelIdAndFromDate', 'POST', getHotelRoomOnDateChangeAvilabilityDetails, auth,data);
}
function getHotelRoomOnDateChangeAvilabilityDetails(data) {
    // console.log(data);
    $('#InventoryAvilabilityRoomDiv').empty();
    // console.log(data);
    var NotificationsRow = '';
    for(i=0;i<data.length;i++) {
        NotificationsRow += '<div class="alert ">';
        NotificationsRow += '<div class="row">';
        NotificationsRow += '<div class="col-md-6">';
        NotificationsRow += '<h5>' +  data[i].CategoryName + '</h5>';
        NotificationsRow += ' </div>';
        NotificationsRow += '<div class="col-md-6">';
        NotificationsRow += '<h5><span class=" badge badge-danger"> Avilable ' + data[i].Availability+ '</span></h5>';
        NotificationsRow += ' </div>';

        NotificationsRow += '</div>';

        NotificationsRow += '</div>';
        NotificationsRow += '</div>';

    }

    $('#InventoryAvilabilityRoomDiv').append(NotificationsRow);
}
function checkRoomAvilabilityandGetRooms() {
    var data = {};
    data.HotelId = hotelId;
    data.FromDate = $('#from').val();
    // data.FromDate = '10/25/2018';
    data.ToDate = $('#to').val();
    // data.ToDate = "10/27/2018";
    // makeAjax(MAIN_API_IRL + 'Agent/GetAvailabilityOfCategoryBetweenDatesOfParticularHotel', 'POST', getHotelAvilabilityDetails, auth,data);
    makeAjax(MAIN_API_IRL + 'Agent/GetCategoryAvailabilityByDateAndHotelIdAndFromDate', 'POST', getHotelAvilabilityDetails, auth,data);
}


function getHotelAvilabilityDetails(data) {
    // console.log(data);
    $('#selectRoomModel').click();
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

}


$('#selectRoomBtn').click(function () {
     // alert($("input[name='RoomNo']:checked").val());
    var requestedRoomId = $("input[name='RoomNo']:checked").val();
    if($("input[name='RoomNo']:checked").val() == undefined){
        alert('Please select the room');
        return false;
    }
    BookingResponseObj.RoomId = $("input[name='RoomNo']:checked").val();
    BookingResponseObj.BookingStatus = 'Quick';
    console.log(BookingResponseObj)
    makeAjax('http://zingoapi.azurewebsites.net/api/RoomBookings/'+BookingResponseObj.BookingId, 'PUT', getBookNowRoomAddResponse, auth, BookingResponseObj);
})

function getBookNowRoomAddResponse(data) {
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Rooms/'+BookingResponseObj.RoomId, 'GET', GetRoomByRoomId, auth);


}

function GetRoomByRoomId(data) {
    data.Status = 'Booked';
    // console.log(data);
    makeAjax(MAIN_API_IRL+'Rooms/UpdateRooms/'+BookingResponseObj.RoomId, 'PUT', getUpdateRoomsStatusResponse, auth, data);
}
function getUpdateRoomsStatusResponse(data) {
    // console.log(data);
    getBookingIdForViewDetails(BookingResponseObj.BookingId);
    // alert('Booking Done Thank You');
    // location.reload();
}
function searchObjectByKey(a, key, value ,returnkey) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][key] === value) {
            return a[i][returnkey];
        }
    }
    return 0;
}

// sync the state to the input
$("#room-checkbox").on("click", function (e) {
    $(this).toggleClass('room-checkbox-checked');
    var $radio = $(this).find('input[type="radio"]');
    $radio.prop("checked", !$radio.prop("checked"))

    e.preventDefault();
});

$('#CloseselectRoomBtn').click(function () {
    var r = confirm("Are you sure you dont want to select the room");
    if(r == true){
        alert('Booking Done Room not allocated ')
        location.reload();
    }

})