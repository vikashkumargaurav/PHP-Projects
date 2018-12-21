/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var avilableRoomCount = 0;
var row = 1;
var current_row;
var RoomCategoryName;
var StdCheckInTime;
var StdCheckOutTime;
var bookingCompleteData = {};

$(document).ready(function () {
    $('#mainLoader').show()
    if (localStorage.getItem('checkdate') != null) {
//        alert('yes');
        var checkdate = {};
        checkdate = loadData('checkdate');
        console.log(checkdate);
        $('#checkindate').val(checkdate.CheckInDate);
        $('#checkoutdate').val(checkdate.CheckoutDate);
    } else {
//        alert("no");
        $('#checkindate').val(getCurrentDate());
        $('#checkoutdate').val(getCurrentDateplusone());
    }

    $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/Hotels/42',
        type: 'GET',
        headers: {Authorization: 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg=='},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            StdCheckInTime = data.CheckInTime;
            StdCheckOutTime = data.CheckOutTime;

//            RoomCategoryName = data[0].CategoryName;
//            console.log(RoomCategoryName);
            getAllRooms(data.room);
            $('#checkAvilable').click();
            $('#mainLoader').hide();

        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
    })


})

function getAllRooms(data) {
    $.each(data, function (i, data) {
        if (data.RoomCategoryId == RoomCatId) {
            RoomCategoryName = data.CategoryName;
        }
        console.log(RoomCategoryName);
        if (data.RoomCategoryId == RoomCatId) {
            if (data.Status == "Available") {
                avilableRoomCount++;
            }
        }


    })
    console.log(avilableRoomCount);
    if (avilableRoomCount < 5) {
        $('#showAvilableDiv').show();
        $('#avilable').text('HURRY! - Only last  : ' + avilableRoomCount + ' rooms left at this price. BOOK FAST!!');
    }

    console.log(data);

}


//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

var bookingDate;
var checkInDate;
var checkOutDate;
var days;
var rooms;
var totalroomPrice;
var gst;
var gstpercentage = [];
var totalgstamt;
var gstAmt;
var subTotal;
var grandTotal;
var j = 1;
var totalAdults = 0;
var totalChilderns = 0;
var sellValue;
var roomPrice = [];


$(".next").click(function () {

    if ($('#checkindate').val().trim().length == '') {
        $('#checkindate').focus();
        alert('Please Specify CheckInDate');
        return false;
    }
    if ($('#checkoutdate').val().trim().length == '') {
        $('#checkoutdate').focus();
        alert('Please Specify checkoutdate');
        return false;
    }
//    if (new Date($('#checkindate').val()) >= new Date($('#checkoutdate').val()))
//    {
////        $('#checkoutdate').focus();
//        var inDate = $('#checkindate').val();
//        $('#checkoutdate').val(getNextDayDate(inDate));
////        makeAlert('warning', 'Please Specify correct date');
////        return false;
//
//    }

    var i = 1;
    while (i <= row) {
        if ($('#adults_' + i).val().trim().length == '') {
            $('#adults_' + i).focus();
//            alert('Please Specify No of Adults in Room : ' + i);
            makeAlert('info', 'Please Specify No of Adults in Room : ' + i);
            return false;
        }
        if (parseInt($('#adults_' + i).val()) > MAX_ADULTS_LIMITS) {
            $('#adults_' + i).focus();
            $('#adults_' + i).val(3);
            makeAlert('info', 'Max limit of Adults in Room ' + i + ' is ' + MAX_ADULTS_LIMITS);
            return false;
        }
        if ($('#childrens_' + i).val().trim().length == '') {
            $('#childrens_' + i).focus();
//            alert('Please Specify No of children in Room :' + i);
            makeAlert('info', 'Please Specify No of children in Room : ' + i);
            return false;
        }
        if (parseInt($('#childrens_' + i).val()) > MAX_CHILDRENS_LIMITS) {
            $('#childrens_' + i).focus();
            $('#childrens_' + i).val(2);
            makeAlert('info', 'Max limit of Childrens in Room ' + i + ' is ' + MAX_CHILDRENS_LIMITS);
            return false;
        }
        if ((parseInt($('#adults_' + i).val())) + (parseInt($('#childrens_' + i).val())) > MAX_ROOM_LIMIT) {
            $('#adults_' + i).focus();
            makeAlert('info', 'Maxmimum limit in Room ' + i + ' : is ' + MAX_ROOM_LIMIT);
            $('#adults_' + i).val(3);
            $('#childrens_' + i).val(1);
            return false;
        }
        i++;
    }



    $('#checkAvilable').click();

//    if (!($('#SingleRoom').is(':checked') || $('#DoubleRoom').is(':checked'))) {
////        alert('please select the room type');
//        makeAlert('info', 'Please select the room type');
//        return false;
//    }
    bookingDate = getCurrentDate();
    checkInDate = $('#checkindate').val().trim();
    checkOutDate = $('#checkoutdate').val().trim();
    days = numOfDaysBeteenDates(checkInDate, checkOutDate);
    rooms = row;

    j = 1;
    totalAdults = 0;
    totalChilderns = 0;
    var k = 0

    while (j <= row) {
        totalAdults += parseInt($('#adults_' + j).val());
        var adultcount = parseInt($('#adults_' + j).val());
        if (adultcount == 1) {
            roomPrice[k] = sellRateForSingleRoom;
        } else if (adultcount == 2) {
            roomPrice[k] = sellRateForDoubleRoom;
        } else {
            roomPrice[k] = sellRateForDoubleRoom + SellRateForExtraAdult;
        }
        totalChilderns += parseInt($('#childrens_' + j).val());
        j++;
        k++;
    }

//    alert(totalAdults);
    $('#showcindate').text('Check in Date : ' + checkInDate);
    $('#showcoutdate').text('Check out Date : ' + checkOutDate);
    $('#showrooms').text(rooms);
    $('#shownights').text(days);
    $('#showadults').text('Adults: ' + totalAdults);
    $('#showchildrens').text('Childs: ' + totalChilderns);
    //we have to calculate sell rate 
//    sellValue = sellRateForSingleRoom;
    totalgstamt = 0;
    for (j = 0; j < row; j++) {

        if (roomPrice[j] < 999.99) {
            gst = 0;
            totalgstamt += ((gst / 100) * roomPrice[j]);
        } else if (roomPrice[j] >= 1000 && roomPrice[j] < 2499.99) {
            gst = 12;
            totalgstamt += ((gst / 100) * roomPrice[j]);

        } else if (roomPrice[j] >= 2500 && roomPrice[j] <= 7499.99) {
            gst = 18;
            totalgstamt += ((gst / 100) * roomPrice[j]);
        } else {
            gst = 28;
            totalgstamt += ((gst / 100) * roomPrice[j]);
        }
    }

    console.log(totalgstamt);
    var roomsellRate = '';
    var countRoom = 1;
    totalroomPrice = 0;
    for (m = 0; m < row; m++) {
        roomsellRate += '<li style = "font-size:12px;list-style:none"> Room ' + countRoom + ' : INR ' + roomPrice[m] + ' -/night</li>';
        totalroomPrice += parseInt(roomPrice[m]);
        countRoom++;
    }
    console.log(totalroomPrice);
    $('#sellRate').html(roomsellRate);

    totalgstamt = totalgstamt * days;

    subTotal = days * totalroomPrice;
    grandTotal = subTotal + totalgstamt;
//    alert(getCurrentTime());



    $('#subTotal').text('SubTotal : ' + subTotal);
    $('#gstAmt').text('Taxes and Fee : ' + totalgstamt);
    $('#grandTotal').text('Grand Total : ' + grandTotal);

    if (animating)
        return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'relative'
            });
            next_fs.css({'left': left, 'opacity': opacity});
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".previous").click(function () {
    if (animating)
        return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({'left': left});
            previous_fs.css({'transform': 'scale(' + scale + ')', 'opacity': opacity});
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$('#checkAvilable').click(function () {
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
            "RoomCategoryId": RoomCatId,
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
})
var sellRateForSingleRoom;
var sellRateForDoubleRoom;
var SellRateForExtraAdult;
function getRooomAvilabilityPrice(data) {
    $('#rateDiv').show();
    console.log(data);
    for (i = 0; i < data.length; i++) {
//        console.data[i].SellRateForSingle;
        sellRateForSingleRoom = data[0].SellRateForSingle;
        sellRateForDoubleRoom = data[0].SellRateForDouble;
        SellRateForExtraAdult = data[0].SellRateForExtraAdult;
        $('#sellRateForSingleRoom').text('Single:' + sellRateForSingleRoom);
        $('#sellRateForDoubleRoom').text('Double:' + sellRateForDoubleRoom);
        $('#SingleRoom').val(sellRateForSingleRoom);
        $('#DoubleRoom').val(sellRateForDoubleRoom);

//        this below info is shown on the 1st stepper form
        $('#onChangeRoomSellPrice').text('₹ ' + sellRateForSingleRoom);
        $('#onChangeRoomDeclaredPrice').text('₹ ' + data[0].DeclaredRateForSingle);
        $('#onChangeRoomCatName').text(RoomCategoryName);
        $('#onChangeSavePrice').text('   Save ₹ ' + ((data[0].DeclaredRateForSingle) - sellRateForSingleRoom));
        console.log(SellRateForExtraAdult);
    }
//    $.each(data,function(i,data){
////        console.log(data.SellRateForSingle);
//    })
    // this checkSubTotal is used to get the sub total on ist stepper form
    $('#checkSubTotal').click();
}
var travellerDetails;
$("#bookRoom").click(function () {

    if (!($('#Tname').val().match(VALID_NAME))) {
        $('#Tname').focus();
//        alert('Please Specify Name');
        makeAlert('info', 'Please Specify Valid Name');
        return false;
    }
    if (!($('#email').val().match(VALID_EMAIL))) {
        $('#email').focus();
//        alert('Please Specify email');
        makeAlert('info', 'Please Specify valid email');
        return false;
    }
    if ($('#phone').val().trim().length == '') {
        $('#phone').focus();
        //alert('Please Specify phone');
        makeAlert('info', 'Please Specify phone');
        return false;
    }
    if (authStatus == 'false') {
        $('#phone').focus();
        makeAlert('warning', 'Please verify your mobile no');
        return false;
    }

    var data = {};
    data.FirstName = $('#Tname').val();
    data.Email = $('#email').val();
    data.PhoneNumber = $('#phone').val();
//    $('#loader').show();
    $('#mainLoader').show();
    $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/Travellers',
        type: 'POST',
        headers: {Authorization: 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg=='},
        data: data,

        dataType: 'json',
        success: function (data) {
//            $('#loader').hide();
            saveData(data, 'travellerData');
            travellerDetails = data;  // setting data for mailer api
            console.log(checkOutDate);
            console.log(data.BookingTravellerId);
            submitBookingDetails(data.BookingTravellerId);
            $('#mainLoader').hide();

        }
    }).fail(function () {
        console.log('fail');
        //console.log(data);
        $('#mainLoader').hide();
    })


})

function submitBookingDetails(TId) {
    var data = {};
    data.TravellerId = TId;
    data.BookingNumber = generateBookingNo();
    data.HotelId = HOTEL_ID;
    data.BookingDate = getCurrentDate();
    data.BookingTime = twelveHourFormatCurrentTime();
    data.OptCheckInDate = checkInDate;
    data.CheckInDate = checkInDate;
    data.NoOfAdults = totalAdults;
    data.NoOfChild = totalChilderns;
    data.GST = gst;
    data.GSTAmount = totalgstamt;
    data.BookingStatus = 'Quick';
    data.SellRate = subTotal; // sellrate * nooftoom * nights
    data.TotalAmount = grandTotal;
    data.BalanceAmount = grandTotal;
    data.RoomCategory = RoomCategoryName;
    data.OptCheckOutDate = checkOutDate;
    data.CheckOutDate = checkOutDate;
    data.NoOfRooms = rooms;
    data.DurationOfStay = days;
    data.BookingSourceType = 'OFFLINE';
    data.BookingSource = 'DIRECT';
    data.BookingPlan = 'CP';
    data.CheckInTime = StdCheckInTime;
    data.CheckOutTime = StdCheckOutTime;
    console.log(data);
    $('#mainLoader').show();
    $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/RoomBookings',
        type: 'POST',
        headers: {Authorization: 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg=='},
        data: data,

        dataType: 'json',
        success: function (data) {
            $('#mainLoader').hide();
            sendMail(data);
//            if (mailstatus) {
//                console.log('yes');
//            } else {
//                console.log('no');
//            }
            console.log(data);
            bookingCompleteData = data
//            console.log(bookingCompleteData);
            if (data.BookingId != '') {
                alert('Thank you booking Done');


                console.log(travellerDetails);
                saveData(data, 'bookingData');
                saveData(roomPrice, 'roomPrice');
                window.open('bookingcomplete.php', '_blank');
                window.location.href = 'index.php';
            } else {
                alert('Sorry Something is Wrong');
            }


        }
    }).fail(function () {
        console.log('fail');
        //console.log(data);
        $('#mainLoader').hide();
    })
}

function sendMail(tempdata) {
    console.log(tempdata);
    console.log(travellerDetails.BookingTravellerId);

    var data2 = {"TravellerId": travellerDetails.BookingTravellerId,
        "EmailAddress": travellerDetails.Email,
        "BookingNumber": tempdata.BookingNumber,
        "HotelId": tempdata.HotelId,
        "CheckInDate": tempdata.CheckInDate,
        "CheckOutDate": tempdata.CheckOutDate,
        "RoomNo": 0
    };
    $('#mainLoader').show();

    $.ajax({
        url: 'http://zingoapi.azurewebsites.net/api/Calculation/SendInvoice',
        type: 'POST',
        headers: {Authorization: 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg=='},
        data: data2,
        dataType: 'json',

        success: function (data) {
            $('#mainLoader').hide();
            console.log(data);
//            return 1;
        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
//        return 0;
    })
//    return 1;
}

//date picker 
$(document).ready(function () {
// $('[data-toggle="tooltip"]').tooltip();   
    $('#checkindate').datepicker({
        startDate: getCurrentDate(),
        todayHighlight: getCurrentDate(),
        autoclose: true

    });

})

function cleandate() {
    $('#checkoutdate').datepicker('clearDates');
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

function onchangeCheckOut() {
//    alert('hiiii');
    $('#checkAvilable').click();

}

var last = 1;
$("#addRoom").click(function () {
    if (row < avilableRoomCount) {
        row++;

        console.log('before add' + row);
        $("#RoomDiv").append('<div class="form-row" style="text-align: left" id="Room_' + row + '">' +
                '<span style="padding-top: 35px;" class="col-md-2">Room ' + row + ' :</span>' +
                '<div class="form-group col-md-3 text-lg-left">' +
                '<label style="font-size: 12px;" for="exampleInputEmail1 ">Adults</label>' +
                '<input name="adults" id="adults_' + row + '" type="number" class="form-control" value="1" placeholder="Adults" min="1" max="3">' +
                '</div>' +
                '<div class="form-group col-md-3 text-lg-left">' +
                '<label style="font-size: 12px;" for="exampleInputEmail1 ">Children</label>' +
                '<input name="childrens" data-toggle="tooltip" title="Age of the childen must be below 12 years" id="childrens_' + row + '"  type="number" class="form-control" value="0" placeholder="Children" min="0" max="2">' +
                '</div>' +
                ' <span id="removeRoom' + row + '" onclick="removeRow(\'' + row + '\')" style="display:none;padding-top: 40px;cursor:pointer" class="col-md-1"><i  class="fas fa-times  text-black"></i></span>' +
                '</div>');

        $('#removeRoom' + row).show();
        $('#removeRoom' + last).hide();

        last = row;
        console.log('after  last    ' + last);
    }

});



function removeRow(c_row) {
    //alert('Do you want to remove it');
    console.log('before' + row);
    row--;
    $('#removeRoom' + row).show();

    $('#removeRoom' + c_row).parent().remove();

    console.log('after' + row);
}


$('#checkSubTotal').click(function () {
    checkInDate = $('#checkindate').val().trim();
    checkOutDate = $('#checkoutdate').val().trim();
    days = numOfDaysBeteenDates(checkInDate, checkOutDate);
    rooms = row;

    j = 1;
    totalAdults = 0;
    totalChilderns = 0;
    var k = 0

    while (j <= row) {
        totalAdults += parseInt($('#adults_' + j).val());
        var adultcount = parseInt($('#adults_' + j).val());
        if (adultcount == 1) {
            roomPrice[k] = sellRateForSingleRoom;
        } else if (adultcount == 2) {
            roomPrice[k] = sellRateForDoubleRoom;
        } else {
            roomPrice[k] = sellRateForDoubleRoom + SellRateForExtraAdult;
        }
        totalChilderns += parseInt($('#childrens_' + j).val());
        j++;
        k++;
    }
    
    totalgstamt = 0;
    for (j = 0; j < row; j++) {

        if (roomPrice[j] < 999.99) {
            gst = 0;
            totalgstamt += ((gst / 100) * roomPrice[j]);
        } else if (roomPrice[j] >= 1000 && roomPrice[j] < 2499.99) {
            gst = 12;
            totalgstamt += ((gst / 100) * roomPrice[j]);

        } else if (roomPrice[j] >= 2500 && roomPrice[j] <= 7499.99) {
            gst = 18;
            totalgstamt += ((gst / 100) * roomPrice[j]);
        } else {
            gst = 28;
            totalgstamt += ((gst / 100) * roomPrice[j]);
        }
    }
    
    console.log(days);
    console.log(rooms);
    var totalRoomPrice = 0;
    var showsubtotal = 0;
    for (i = 0; i < rooms; i++) {
        totalRoomPrice += roomPrice[i];
    }
    showsubtotal = totalRoomPrice * days;
    console.log(roomPrice);
    console.log(totalRoomPrice);
    console.log(showsubtotal);
    $('#showsubtotal').text('SubTotal ₹ ' + showsubtotal);
    $('#showRoomCount').text('( ' + rooms + ' Room');
    $('#shownightscount').text(' for ' + days + ' days ) Excluding Taxes');

    console.log(totalgstamt);
    var roomsellRate = '';
    var countRoom = 1;
    totalroomPrice = 0;
    for (m = 0; m < row; m++) {
        roomsellRate += '<li style = "font-size:12px;list-style:none"> Room ' + countRoom + ' : INR ' + roomPrice[m] + ' -/night</li>';
        totalroomPrice += parseInt(roomPrice[m]);
        countRoom++;
    }
    console.log(totalroomPrice);
    $('#sellRate1').html(roomsellRate);

    totalgstamt = totalgstamt * days;

    subTotal = days * totalroomPrice;
    grandTotal = subTotal + totalgstamt;
//    alert(getCurrentTime());

    $('#showadults1').text('Adults: ' + totalAdults);
    $('#showchildrens1').text('Childs: ' + totalChilderns);

    
    $('#gstAmt1').text('Taxes and Fee : ' + totalgstamt);
    $('#grandTotal1').text(' ₹ ' + grandTotal+ ' ');
})