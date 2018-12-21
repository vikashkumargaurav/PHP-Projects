$('document').ready(function () {
    $('#sidebarToggle').click();
    $('#propertyNameselectDiv').hide();
    $('#RoomTypeSelectDiv').hide();
    $("#AddOnServiceDiv").hide();
    $("#OTAPercentageDiv").hide();
    $('#BookingDate').val(getCurrentDate());
    $('#checkindate').val(getCurrentDate());
    $('#checkoutdate').val(getCurrentDateplusone());
    $.each(OTA, function (i, data) {
        $('#BookingSource').append($("<option style='color: black;'></option>")
            .attr("value", data.BookingSourceName)
            .text(data.BookingSourceName));
    })
    for (i = 1; i <= 10; i++) {// for count no of rooms show in select
        $('#NoOfRooms').append($("<option style='color: black;'></option>")
            .attr("value", i)
            .text(i));
    }
    makeChangeHotelPaymentMode('ota');
    $('#Inclusion').val("BreakFast,WiFi,Taxes");
    $('#BookingDate').datepicker({
        startDate: getCurrentDate(),
        autoclose: true,
        keepOpen: false,
    }).on('change', function () {
        $('.datepicker').hide();
    });
    $('#checkindate').datepicker({
        startDate: getCurrentDate(),
        autoclose: true,
        keepOpen: false,
    }).on('change', function () {
        $('.datepicker').hide();
    });
})

function getCheckInDateOnChange(cindate) {
    var cinDate = cindate.target.value;
    $('#checkoutdate').datepicker({
        minDate: getNextDayDate(cinDate),
        todayHighlight: getCurrentDate(),
        autoclose: true

    });
    $('#checkoutdate').datepicker('update', getNextDayDate(cinDate));
}


function getBookingTypeChange(data) {

    var option = data.target.value;
    console.log(option);
    if (option == 'database') {
        // $('#PropetyNameInput').val("");

        $('#propertyNameselectDiv').show();
        $('#RoomTypeSelectDiv').show();
        $('#PropertyNameDiv').hide();
        $('#RoomTypeDiv').hide();
        makeAjax(MAIN_API_IRL + 'Hotels', 'GET', getHotelsDetails, auth);

    } else {
        $('#propertyNameselectDiv').hide();
        $('#RoomTypeSelectDiv').hide();
        $('#PropertyNameDiv').show();
        $('#RoomTypeDiv').show();
        $('#RoomTypeDiv').val("");
        $('#PropetyNameInput').val("");
        $('#Localty').val("");
        $('#City').val("");
        $('#HotelEmail').val("");
        $('#ZingoCommission').val("0");
    }

}

function getHotelsDetails(data) {
    console.log(data);
    makeAjax(MAIN_API_IRL + 'Hotels/GetContactsByHotelId/' + data[0].HotelId, 'GET', GetContactsByHotelId, auth);
    makeAjax(MAIN_API_IRL + 'RoomCategories/GetRoomCategoriesByHotelId/' + data[0].HotelId, 'GET', GetRoomCategoryByHotelId, auth);
    $.each(data, function (i, data) {
        $('#PropetyName').append($("<option style='color: black;'></option>")
            .attr("value", data.HotelId)
            .text(data.HotelName));
    })
    $('#PropetyNameInput').val(data[0].HotelName);
    $('#Localty').val(data[0].Localty);
    $('#City').val(data[0].City);
    $('#ZingoCommission').val(data[0].CommissionAmount);

}

function getHotelId(data) {
    var HotelId = data.target.value;
    makeAjax(MAIN_API_IRL + 'Hotels/' + HotelId, 'GET', getHotelsDetailsByhotelId, auth);
    makeAjax(MAIN_API_IRL + 'Hotels/GetContactsByHotelId/' + HotelId, 'GET', GetContactsByHotelId, auth);
    makeAjax(MAIN_API_IRL + 'RoomCategories/GetRoomCategoriesByHotelId/' + HotelId, 'GET', GetRoomCategoryByHotelId, auth);
}

function getHotelsDetailsByhotelId(data) {
    console.log(data);
    $('#PropetyNameInput').val(data.HotelName);
    $('#Localty').val(data.Localty);
    $('#City').val(data.City);
    $('#ZingoCommission').val(data.CommissionAmount);
}

function GetContactsByHotelId(data) {
    console.log(data);
    if (data == "") {
        $('#HotelEmail').val("");
    } else {
        $('#HotelEmail').val(data[0].EmailList);
    }

}

function getBookingSourceTypeChage(data) {
    $('#BookingSource').empty();
    var option = data.target.value;
    makeChangeHotelPaymentMode(option);
    console.log(option);
    if (option == 'ota') {
        $('#OTADiv').show();
        $('#BookingId').val("");
        $('#ZingoCommission').val("0");
        $.each(OTA, function (i, data) {
            $('#BookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        })
    } else if (option == 'b2b') {
        $('#OTADiv').hide();
        $('#BookingId').val(generateBookingNo());
        $.each(B2B, function (i, data) {
            $('#BookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        })
    } else {
        $('#OTADiv').hide();
        $('#BookingId').val(generateBookingNo());
        $.each(OFFLINE, function (i, data) {
            $('#BookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        })
    }
}

function getRatePlaneOnChage(data) {
    var option = data.target.value;
    switch (option) {
        case 'CP' :
            $('#Inclusion').val("BreakFast,WiFi,Taxes");
            break;
        case 'EP' :
            $('#Inclusion').val("Room Only,Taxes");
            break;
        case 'AP' :
            $('#Inclusion').val("BreakFast,Lunch,DInner,Taxes");
            break;
        case 'MAP':
            $('#Inclusion').val("BreakFast,Lunch/Dinner,Taxes");
            break;
    }
}

function GetRoomCategoryByHotelId(data) {
    if (data == "") {
        makeAlert('warning', 'No Room Category Found')
        $('#RoomTypeSelectDiv').hide();
        $('#RoomTypeDiv').show();
    } else {
        console.log(data[0].CategoryName);
        $('#RoomTypeSelectDiv').show();
        $('#RoomTypeInput').val(data[0].CategoryName);
        $('#RoomTypeDiv').hide();
        $('#RoomType').empty();
        $.each(data, function (i, data) {
            $('#RoomType').append($("<option style='color: black;'></option>")
                .attr("value", data.CategoryName)
                .text(data.CategoryName));
        })
    }
    console.log(data);

}

function onChangeRoomType(data) {
    var RoomType = data.target.value;
    console.log(RoomType);
    $('#RoomTypeInput').val(RoomType);
}

function makeChangeHotelPaymentMode(option) {
    $('#PaymentMode').empty();
    console.log(option);
    if (option == 'ota') {
        $.each(PaymentMode.OTA, function (i, data) {
            $('#PaymentMode').append($("<option style='color: black;'></option>")
                .attr("value", data.PaymentModeName)
                .text(data.PaymentModeName));
        })
    } else if (option == 'b2b') {
        $.each(PaymentMode.B2B, function (i, data) {
            $('#PaymentMode').append($("<option style='color: black;'></option>")
                .attr("value", data.PaymentModeName)
                .text(data.PaymentModeName));
        })
    } else {
        $.each(PaymentMode.B2B, function (i, data) {
            $('#PaymentMode').append($("<option style='color: black;'></option>")
                .attr("value", data.PaymentModeName)
                .text(data.PaymentModeName));
        })
    }
}

$('#RoomCharge, #ExtraCharge ,#HotelTax').keyup(function () {
    console.log('hii');
    if ($('#RoomCharge').val() == "") {
        var RoomCharge = 0;
    } else {
        var RoomCharge = $('#RoomCharge').val();
    }
    if ($('#ExtraCharge').val() == "") {
        var ExtraCharge = 0;
    } else {
        var ExtraCharge = $('#ExtraCharge').val();
    }
    if ($('#HotelTax').val() == "") {
        var HotelTax = 0;
    } else {
        var HotelTax = $('#HotelTax').val();
    }
    $('#TotalAmountWithTax').val(calculateTotalAmountForHotel(RoomCharge, ExtraCharge, HotelTax).toFixed(2))

});

function calculateTotalAmountForHotel(roomcharge = 0, extracharge = 0, hoteltax = 0) {
    var TotalAmount = (parseFloat(roomcharge) + parseFloat(extracharge) + parseFloat(hoteltax));
    return TotalAmount;
}

$('#OTACommissionAmount, #OTAGst').keyup(function () {
    console.log('hii');
    if ($('#OTACommissionAmount').val() == "") {
        var OTACommissionAmount = 0;
    } else {
        var OTACommissionAmount = $('#OTACommissionAmount').val();
    }
    if ($('#OTAGst').val() == "") {
        var OTAGst = 0;
    } else {
        var OTAGst = $('#OTAGst').val();
    }

    $('#OTACommissionIncludingGST').val(calculateTotalCommissionAmountForOTA(OTACommissionAmount, OTAGst));

});

function calculateTotalCommissionAmountForOTA(OTACommissionAmount = 0, OTAGst = 0) {
    var TotalAmount = (parseFloat(OTACommissionAmount) + parseFloat(OTAGst));
    return TotalAmount;
}

$('#AddOnServiceCheckBox').click(function () {
    if ($(this).is(":checked")) {
        $("#AddOnServiceDiv").show();
    } else {
        $("#AddOnServiceDiv").hide();
    }
})

function getBookingSourceNameChange(data) {
    var option = data.target.value;
    console.log(option);
    if (option != 'MAKEMY TRIP') {
        $('#OTAServiceFeeDiv').hide();
    } else {
        $('#OTAServiceFeeDiv').show();
    }
    if (($('#BookingSourceType').val() == 'ota') && (option == "EXPEDIA")) {
        $('#OTACommissionAmountDiv').hide();
        $('#OTAGstDiv').hide();
        $('#OTAPercentageDiv').show();
        $('#OTAPercentage').val("0");
        $('#OTACommissionIncludingGST').val("0");

    }
    else {
        $('#OTACommissionAmountDiv').show();
        $('#OTAGstDiv').show();
        $('#OTAPercentageDiv').hide();
        $('#OTACommissionAmount').val("0");
        $('#OTAGst').val("0");
        $('#OTACommissionIncludingGST').val("0");

    }

}

function getOnChangePaymentMode(data) {
    var option = data.target.value;
    if (($('#BookingSourceType').val() == 'ota') && (option == "PREPAID/ONLINE")) {
        $('#CustomerPaymentAtOTADiv').hide();
    }
    else {
        $('#CustomerPaymentAtOTADiv').show();
    }
}


$('#OTAPercentage').keyup(function () {
    if ($('#OTAPercentage').val() == "") {
        var OTAPercentage = 0;
    } else if (($('#OTAPercentage').val()) > 100) {
        $('#OTAPercentage').val("0");
    } else {
        var OTAPercentage = $('#OTAPercentage').val();
    }

    $('#OTACommissionIncludingGST').val(calculateGSTpercentageForOTAwithRoomCharge(OTAPercentage).toFixed(2));
})


function calculateGSTpercentageForOTAwithRoomCharge(percentage) {
    if ($('#RoomCharge').val() == "") {
        $('#RoomCharge').focus();
        makeAlert("warning", "Enter Room Charge First");
    } else {
        var Total = (parseFloat(percentage)) / (100.0);
        var TotalPercentage = Total * (parseFloat($('#RoomCharge').val()));
        return TotalPercentage;
    }
}

$('#calculate').click(function () {

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

    if ($('#BookingSourceType').val() == 'ota') {


        if ($('#BookingSource').val() == 'EXPEDIA') {
            if ($('#OTAPercentage').val().length == "") {
                $('#OTAPercentage').focus();
                makeAlert("warning","OTAPercentage Required");
                return false;
            }
        }else{
            if ($('#OTACommissionAmount').val().length == "") {
                $('#OTACommissionAmount').focus();
                makeAlert("warning","OTACommissionAmount Required");
                return false;
            }
            if ($('#OTAGst').val().length == "") {
                $('#OTAGst').focus();
                makeAlert("warning","OTAGst Required");
                return false;
            }
        }
        calculateTotalforOTA();

    } else {
        calculateTotalforB2BandOffline();
    }


})


function calculateTotalforOTA() {


    if ($('#AddOnServiceCheckBox').prop("checked") == true) {
        if ($('#AddOnServicesName').val().length == "") {
            $('#AddOnServicesName').focus();
            makeAlert("warning","AddOnServiceCheckBox Required");
            return false;
        }
        if ($('#AddOnServicesAmount').val().length == "") {
            $('#AddOnServicesAmount').focus();
            makeAlert("warning","AddOnServicesAmount Required");
            return false;
        }
    }
    calculateZingoCommission();

}


function calculateTotalforB2BandOffline() {
    calculateZingoCommission();
}
function calculate() {

}
function calculateZingoCommission() {
    var checkindate = $('#checkindate').val();
    var checkoutdate = $('#checkoutdate').val();
    var NoofNights = numOfDaysBeteenDates(checkindate, checkoutdate);
    $('#TotalNoOfNights').val(NoofNights);
    console.log(NoofNights);
    var ZingoHotelsTotalCommission = parseFloat((parseFloat($('#ZingoCommission').val())) * (parseInt($('#NoOfRooms').val())) * (parseInt($('#TotalNoOfNights').val())));
    console.log(ZingoHotelsTotalCommission)
    $('#ZingoHotelsTotalCommission').val(ZingoHotelsTotalCommission);
    if ($('#BookingSourceType').val() == 'ota'){
        calculateNetAmountForOTA();
        calculateARR();
    }else{
        calculateNetAmount();
        calculateARR();
    }

}
function calculateNetAmountForOTA() {
    if ($('#BookingSource').val() != 'MAKEMY TRIP'){
        $('#OTAServiceFee').val('0');
    }
    var AddOnServicesAmount ;
    if ($('#AddOnServiceCheckBox').prop("checked") == true) {
        AddOnServicesAmount = $('#AddOnServicesAmount').val();
    }else{
        AddOnServicesAmount = 0;
    }
    var totalNetAmount = parseFloat(parseFloat($('#TotalAmountWithTax').val()) +(parseFloat(AddOnServicesAmount)) - (parseFloat($('#OTACommissionIncludingGST').val())) - (parseFloat($('#ZingoHotelsTotalCommission').val())) - (parseFloat($('#OTAServiceFee').val())));
    console.log(totalNetAmount);
    $('#NetAmount').val(totalNetAmount);


}
function calculateNetAmount() {
    var totalNetAmount = parseFloat(parseFloat($('#TotalAmountWithTax').val()) - (parseFloat($('#ZingoHotelsTotalCommission').val())));
    console.log(totalNetAmount);
    $('#NetAmount').val(totalNetAmount);

}

function calculateARR() {
    var calculateNoofRoomandNight = ((parseInt($('#NoOfRooms').val())) * (parseInt($('#TotalNoOfNights').val())))
    var ARR = parseFloat((parseFloat($('#TotalAmountWithTax').val()) / (calculateNoofRoomandNight)));
    console.log(ARR);
    $('#ARR').val(ARR);
}

$('#ZingoHotelsTotalCommission').keyup(function () {
    if($('#TotalAmountWithTax').val() == ""){
      makeAlert('warning','TotalAmountWithTax Required');
        $('#TotalAmountWithTax').focus();
        return false;

    }else{
        if($('#BookingSourceType').val() == 'ota'){
            var totalNetAmount = parseFloat(parseFloat($('#TotalAmountWithTax').val()) - (parseFloat($('#ZingoHotelsTotalCommission').val())) - parseFloat($('#OTACommissionIncludingGST').val()));
            console.log(totalNetAmount);
            $('#NetAmount').val(totalNetAmount);
        }else{
            var totalNetAmount = parseFloat(parseFloat($('#TotalAmountWithTax').val()) - (parseFloat($('#ZingoHotelsTotalCommission').val())));
            console.log(totalNetAmount);
            $('#NetAmount').val(totalNetAmount);
        }
    }


})