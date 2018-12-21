
$('#bookingBtn').click(function () {
    if ($('#City').val().length == "") {
        $('#City').focus();
        makeAlert("warning","City Required");
        return false;
    }
    if ($('#Localty').val().length == "") {
        $('#Localty').focus();
        makeAlert("warning","Localty Required");
        return false;
    }
    if ($('#HotelEmail').val().length == "") {
        $('#HotelEmail').focus();
        makeAlert("warning","HotelEmail Required");
        return false;
    }
    if ($('#BookingId').val().length == "") {
        $('#BookingId').focus();
        makeAlert("warning","BookingId Required");
        return false;
    }
    if ($('#BookingDate').val().length == "") {
        $('#BookingDate').focus();
        makeAlert("warning","BookingDate Required");
        return false;
    }
    if ($('#checkindate').val().length == "") {
        $('#checkindate').focus();
        makeAlert("warning","checkindate Required");
        return false;
    }
    if ($('#checkoutdate').val().length == "") {
        $('#checkoutdate').focus();
        makeAlert("warning","checkoutdate Required");
        return false;
    }


    if ($('#GuestMobile').val().length == "") {
        $('#GuestMobile').focus();
        makeAlert("warning","GuestMobile Required");
        return false;
    }
    if ($('#GuestName').val().length == "") {
        $('#GuestName').focus();
        makeAlert("warning","GuestName Required");
        return false;
    }
    if ($('#GuestEmail').val().length == "") {
        $('#GuestEmail').focus();
        makeAlert("warning","GuestEmail Required");
        return false;
    }


    if ($('#RoomCharge').val().length == "") {
        $('#RoomCharge').focus();
        makeAlert("warning","RoomCharge Required");
        return false;
    }
    if ($('#ExtraCharge').val().length == "") {
        $('#ExtraCharge').focus();
        makeAlert("warning","ExtraCharge Required");
        return false;
    }
    if ($('#HotelTax').val().length == "") {
        $('#HotelTax').focus();
        makeAlert("warning","HotelTax Required");
        return false;
    }

    $('#calculate').click();
    if($('#activityinput').val() == "database"){
        var data = {};
        data.FirstName = $('#GuestName').val();
        data.Email = $('#GuestEmail').val();
        data.PhoneNumber = $('#GuestMobile').val();
        // console.log(data);
        // data = JSON.stringify(data);
        makeAjax('http://zingoapi.azurewebsites.net/api/Travellers', 'POST', getAddTravellerReponse, auth, data);
    }else{
        var bookingDetails = saveBookingdata();
        console.log(bookingDetails);
        window.open('invoice/bookinginvoice.php?bookingDetails=' + btoa(JSON.stringify(bookingDetails)));
        window.open('invoice/guestinvoice.php?bookingDetails=' + btoa(JSON.stringify(bookingDetails)));
        makeAlert('success','Booking Done');
        window.location.reload();

    }

})

function getAddTravellerReponse(rdata) {
    console.log(rdata);
    var data = {};
    data.TravellerId = rdata.BookingTravellerId;
    data.BookingNumber = $('#BookingId').val();
    data.HotelId = $('#PropetyName').val();
    data.BookingDate = $('#BookingDate').val();
    data.BookingTime = twelveHourFormatCurrentTime();
    data.OptCheckInDate = $('#checkindate').val();
    data.CheckInDate = $('#checkindate').val();
    data.NoOfAdults = $('#TotalGuest').val();
    data.NoOfChild = 0;
    data.GST = 0;
    data.ExtraCharges =parseInt($('#ExtraCharge').val());
    data.GSTAmount = parseInt($('#HotelTax').val());
    data.BookingStatus = 'Quick';
    data.SellRate = parseInt($('#RoomCharge').val()); // sellrate * nooftoom * nights
    data.TotalAmount = parseInt($('#TotalAmountWithTax').val());
    data.BalanceAmount = parseInt($('#TotalAmountWithTax').val());
    data.RoomCategory = $('#RoomTypeInput').val();
    data.OptCheckOutDate = $('#checkoutdate').val();
    data.CheckOutDate = $('#checkoutdate').val();
    data.NoOfRooms = $('#NoOfRooms').val();
    data.DurationOfStay = $('#TotalNoOfNights').val();
    data.BookingSourceType = $('#BookingSourceType').val();
    data.BookingSource = $('#BookingSource').val();
    data.BookingPlan = $('#RatePlaneName').val();
    data.CheckInTime = "12:00";
    data.CheckOutTime = "12:00";
    // console.log(data);
    // data = JSON.stringify(data);
    makeAjax('http://zingoapi.azurewebsites.net/api/RoomBookings', 'POST', getBookingResponse, auth, data);
}

function getBookingResponse(data) {
    // console.log(data);
    var bookingDetails = saveBookingdata();
    bookingDetails["ResponseBookingId"]=data.BookingId;
    // console.log(bookingDetails);
    window.open('invoice/bookinginvoice.php?bookingDetails=' + btoa(JSON.stringify(bookingDetails)));
    window.open('invoice/guestinvoice.php?bookingDetails=' + btoa(JSON.stringify(bookingDetails)));
    // window.open('invoice/B2Binvoice.php?bookingDetails=' + btoa(JSON.stringify(bookingDetails)));
    makeAlert('success','Booking Done');
    window.location.reload();

}

function saveBookingdata() {
    if ($('#PropetyNameInput').val() != "") {
        var PropetyName = $('#PropetyNameInput').val();
        console.log("PropetyNameInput");
    } else {
        var PropetyName = $('#PropetyNameInput').val();
        console.log("PropetyName");
    }
    bookingDetails = {
        "BookingId": $('#BookingId').val(),
        "ResponseBookingId": "",
        "BookingSourceType": $('#BookingSourceType').val(),
        "BookingSource": $('#BookingSource').val(),
        "PropetyName": PropetyName,
        "Localty": $('#Localty').val(),
        "City": $('#City').val(),
        "GuestName": $('#GuestName').val(),
        "GuestMobile": $('#GuestMobile').val(),
        "BookingDate": $('#BookingDate').val(),
        "checkindate": $('#checkindate').val(),
        "checkoutdate": $('#checkoutdate').val(),
        "TotalNoOfNights": $('#TotalNoOfNights').val(),
        "RoomType": $('#RoomTypeInput').val(),
        "NoOfRooms": $('#NoOfRooms').val(),
        "TotalGuest": $('#TotalGuest').val(),
        "RatePlaneName": $('#RatePlaneName').val(),
        "PaymentMode": $('#PaymentMode').val(),
        "Inclusion": $('#Inclusion').val(),
        "RoomCharge": $('#RoomCharge').val(),
        "ExtraCharge": $('#ExtraCharge').val(),
        "HotelTax": $('#HotelTax').val(),
        "HotelGrossCharges": $('#TotalAmountWithTax').val(),
        "OTAGst": $('#OTAGst').val(),
        "ZingoHotelsTotalCommission": $('#ZingoHotelsTotalCommission').val(),
        "HotelToPayZingo": $('#ZingoHotelsTotalCommission').val(),
        "NetAmount": $('#NetAmount').val(),
        "ARR": $('#ARR').val(),
        "Comments": $('#Comments').val(),
        "OTACommissionAmount": $('#OTACommissionAmount').val(),
        "OTAPercentage": $('#OTAPercentage').val(),
        "OTACommissionIncludingGST": $('#OTACommissionIncludingGST').val(),
        "OTAServiceFee": $('#OTAServiceFee').val(),
        "CustomerPaymentAtOTA": $('#CustomerPaymentAtOTA').val(),
        "AddOnServicesName": $('#AddOnServicesName').val(),
        "AddOnServicesAmount": $('#AddOnServicesAmount').val(),
        "AdditionalCharge": 0,
    };

    return bookingDetails;
}