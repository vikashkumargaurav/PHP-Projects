$(window).on("load", function () {
    makeAjax(MAIN_API_IRL + 'Travellers', 'GET', GetTravellers1, auth);
    makeAjax(MAIN_API_IRL + 'RoomCategories/GetRoomCategoriesByHotelId/' + hotelId, 'GET', GetRoomCategoryByForCommonPageHotelId1, auth);

});


function directBook(currRoomObject) {
    console.log(currRoomObject);
    roomObjMain = currRoomObject;
    $('#bookedRoomNoDiv').empty();
    $('#bookedRoomNoDiv').append('<h5 class="text-success">Room No <span class="badge badge-success">' + currRoomObject.RoomNo + '</span></h5>');

}

function GetRoomCategoryByForCommonPageHotelId1(data) {
    $.each(data, function (i, data) {
        $('#QuickRoomType1').append($("<option style='color: black;'></option>")
            .attr("value", data.CategoryName)
            .text(data.CategoryName));
    })
}


var TravellerObj1;
var TravellerPhoneNumberArrayList1 = [];


function GetTravellers1(data) {
    // console.log(data);
    TravellerObj1 = data;
    $.each(data, function (i, data) {
        if (data.PhoneNumber != null)
            TravellerPhoneNumberArrayList1.push(data.PhoneNumber);

        // if (data.FirstName != null)
        //     TravellerFullNameArrayList.push(data.FirstName);
    });
    /*    $(function () {
            $("#QuickGuestMobile1").autocomplete({
                source: TravellerPhoneNumberArrayList1
            });

            // $("#GuestName").autocomplete({
            //     source: TravellerFullNameArrayList
            // });
        });*/
}


$(function () {
    var dateFormat = "mm/dd/yy",
        from1 = $("#Quickfrom1")
            .datepicker({
                // defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2,
                autoclose: true
            })
            .on("change", function () {
                $('#Quickto1').val(getNextDayDate($('#Quickfrom1').val()))
                to1.datepicker("option", "minDate", getDate1(this));
                // getHotelRoomAvilabilityOnDateChangeDetails()
            }),

        to1 = $("#Quickto1").datepicker({
            // defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2,
        })
            .on("change", function () {
                from1.datepicker("option", "maxDate", getDate1(this));
                // getHotelRoomAvilabilityOnDateChangeDetails();
            });


    function getDate1(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
});


$('#QuicksellRate1').change(function () {
    updatePricing();
});

function updatePricing() {
    if ($('#Quickfrom1').val().length == '') {
        $('#Quickfrom1').focus();
        makeAlert('warning', 'Please select check in Date ');
        return false;
    }

    if ($('#Quickto1').val().length == '') {
        $('#Quickto1').focus();
        makeAlert('warning', 'Please select check out Date ');
        return false;
    }

    var checkindate = $('#Quickfrom1').val();
    var checkoutdate = $('#Quickto1').val();
    var NoofNights = numOfDaysBeteenDates(checkindate, checkoutdate);
    var RoomPricewithGst = 0;
    var TotalRoomPricewithGSTXdayXnights = 0;

    var totalgstamt = 0;
    var totalAmountwithgst = 0;
    var sellRate = $('#QuicksellRate1').val();
    if (sellRate < 1000) {
        gst = 0;
        totalgstamt = ((gst / 100) * sellRate);
    } else if (sellRate >= 1000 && sellRate < 2500) {
        gst = 12;
        totalgstamt = ((gst / 100) * sellRate);

    } else if (sellRate >= 2500 && sellRate < 7500) {
        gst = 18;
        totalgstamt = ((gst / 100) * sellRate);
    } else {
        gst = 28;
        totalgstamt = ((gst / 100) * sellRate);
    }
    $('#QuickGST1').val(gst);
    RoomPricewithGst = parseFloat(parseInt(sellRate) + parseInt(totalgstamt));
    $('#QuickGSTAmt1').val(parseInt(totalgstamt));
    TotalRoomPricewithGSTXdayXnights = parseFloat(parseInt(NoofNights) * parseInt(RoomPricewithGst));
    $('#QuickTotalAmountWithTax1').val(TotalRoomPricewithGSTXdayXnights);

}


$('#directBookNowBtn').click(function () {
    validateBookingForm1();
});


function getBookingSourceTypeChage1(data) {

    var event = data.target.value;

    if (event == "OTA") {

        $('#QuickBookingSource1')
            .find('option')
            .remove()
            .end();

        $.each(OTA, function (i, data) {
            $('#QuickBookingSource1').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        });


    }

    if (event == "B2B") {
        $('#QuickBookingSource1')
            .find('option')
            .remove()
            .end();
        $.each(B2B, function (i, data) {
            $('#QuickBookingSource1').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        });
    }

    if (event == "OFFLINE") {
        $('#QuickBookingSource1')
            .find('option')
            .remove()
            .end();
        $.each(OFFLINE, function (i, data) {
            $('#QuickBookingSource1').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        });
    }
}


function validateBookingForm1() {

    if ($('#Quickfrom1').val().length == "") {
        $('#Quickfrom').focus();
        makeAlert("warning", "Check In Required");
        return false;
    }
    if ($('#Quickto1').val().length == "") {
        $('#Quickto1').focus();
        makeAlert("warning", "Check Out Required");
        return false;
    }
    if ($('#QuickGuestMobile1').val().length == "") {
        $('#QuickGuestMobile1').focus();
        makeAlert("warning", "Guest Mobile Required");
        return false;
    }
    if ($('#QuickGuestName1').val().length == "") {
        $('#QuickGuestName1').focus();
        makeAlert("warning", "Guest Name Required");
        return false;
    }

    if (!$('#QuickGuestEmail1').val().length == "") {
        /*$('#GuestEmail').focus();
        makeAlert("warning","Guest Email Required");
        return false;*/

        if (!validateEmail1($('#QuickGuestEmail1').val())) {
            $('#QuickGuestEmail1').focus();
            makeAlert("warning", "Email is invalid");
            return false;
        }
    } else {
        $('#QuickGuestEmail1').val(" ");
    }

    if ($('#QuicksellRate1').val().length == '') {
        $('#QuicksellRate1').focus();
        makeAlert('warning', 'sellRate Required ');
        return false;
    }
    var tagexist = searchObjectByKey(TravellerObj1, 'PhoneNumber', $('#QuickGuestMobile1').val(), 'BookingTravellerId');
    console.log(tagexist);
    console.log(TravellerObj1);
    if (!tagexist) {
        // makeAlert('info','No result found');
        addTraveller1();
        console.log('not tagexist');

    } else {
        console.log('tagexist');
        console.log(tagexist);
        addTraveller1();
    }
}


function validateEmail1(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function addTraveller1() {
    var data = {};
    data.FirstName = $('#QuickGuestName1').val();
    data.Email = $('#QuickGuestEmail1').val();
    data.PhoneNumber = $('#QuickGuestMobile1').val();
    data.Gender = $('#Quickgender1').val();
    // console.log(data);
    // data = JSON.stringify(data);
    makeAjax('http://zingoapi.azurewebsites.net/api/Travellers', 'POST', getAddTravellerReponse1, auth, data);
}


function getAddTravellerReponse1(data) {
console.log("mydata",data);
    doQuickBooking1(data.BookingTravellerId);
}

function doQuickBooking1(TravellerId) {
    // console.log(TravellerId);
    var data = {};
    data.TravellerId = TravellerId;
    data.BookingNumber = generateBookingNo();
    data.HotelId = hotelId;
    data.BookingDate = getCurrentDate();
    data.BookingTime = twelveHourFormatCurrentTime();
    data.OptCheckInDate = $('#Quickfrom1').val();
    data.CheckInDate = $('#Quickfrom1').val();
    data.NoOfAdults = $('#QuickTotalGuest1').val();
    data.NoOfChild = $('#QuickTotalChilds1').val();
    data.GST = $('#QuickGST1').val();
    data.ExtraCharges = 0;
    data.GSTAmount = parseInt($('#QuickGSTAmt1').val());
    data.BookingStatus = 'Active';
    data.SellRate = parseInt($('#QuicksellRate1').val()); // sellrate * nooftoom * nights
    data.TotalAmount = parseInt($('#QuickTotalAmountWithTax1').val());
    data.BalanceAmount = parseInt($('#QuickTotalAmountWithTax1').val());
    data.RoomCategory = $('#QuickRoomType1').val();
    data.OptCheckOutDate = $('#Quickto1').val();
    data.CheckOutDate = $('#Quickto1').val();
    data.NoOfRooms = '1';
    data.DurationOfStay = numOfDaysBeteenDates($('#Quickfrom1').val(), $('#Quickto1').val());
    data.BookingSourceType = $('#QuickBookingSourceType1').val();
    data.BookingSource = $('#QuickBookingSource1').val();
    data.BookingPlan = $('#QuickRatePlaneName1').val();
    data.CheckInTime = "12:00";
    data.CheckOutTime = "12:00";

    data.RoomId = roomObjMain.RoomId;
    // console.log(data);
    // data = JSON.stringify(data);
    makeAjax('http://zingoapi.azurewebsites.net/api/RoomBookings', 'POST', getQuickBookingResponse1, auth, data);
}

function getQuickBookingResponse1(data) {
    // console.log(data);
    alert('Booking Done Sucessfully');
    location.reload();
}


/*

function getHotelRoomAvilabilityOnDateChangeDetails() {
    var data = {};
    data.HotelId = hotelId;
    data.FromDate = $('#from').val();
    // data.FromDate = '10/25/2018';
    data.ToDate = $('#to').val();
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Agent/GetAvailabilityOfCategoryBetweenDatesOfParticularHotel', 'POST', getHotelRoomOnDateChangeAvilabilityDetails, auth,data);
    // makeAjax(MAIN_API_IRL + 'Agent/GetCategoryAvailabilityByDateAndHotelIdAndFromDate', 'POST', getHotelRoomOnDateChangeAvilabilityDetails, auth,data);
}

*/

function searchObjectByKey(a, key, value, returnkey) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][key] === value) {
            return a[i][returnkey];
        }
    }
    return 0;
}


