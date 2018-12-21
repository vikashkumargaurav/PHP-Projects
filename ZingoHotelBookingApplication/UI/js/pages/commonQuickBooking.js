$(document).ready(function () {
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetailsforCommonPage, auth);
    makeAjax(MAIN_API_IRL + 'RoomCategories/GetRoomCategoriesByHotelId/' + hotelId, 'GET', GetRoomCategoryByForCommonPageHotelId, auth);
    // makeAjax(MAIN_API_IRL + 'Travellers', 'GET', GetTravellersForCommonPage, auth);
    $("#Quickfrom").val(getCurrentDate())
    $("#Quickto").val(getNextDayDate(getCurrentDate()));

    for (i = 1; i <= 10; i++) {// for count no of rooms show in select
        $('#QuickNoOfRooms').append($("<option style='color: black;'></option>")
            .attr("value", i)
            .text(i));
    }
})

function getHotelDetailsforCommonPage(data) {
    // console.log(data);
    // HotelObj = data;
    HotelName = data.HotelName;
    // HotelAddress = data.PlaceName;
    // $('#HotelName').text(HotelName + ' Hotel Quick Booking');
}
var BookingResponseObj ;
// var IsquickBooking = 0;
var HotelName;
var HotelAddress;
// var HotelObj = {};
var TravellerObj;
var TravellerPhoneNumberArrayList = [];
var TravellerFullNameArrayList = [];
$(function () {
    var dateFormat = "mm/dd/yy",
        from = $("#Quickfrom")
            .datepicker({
                // defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
            }),
        to = $("#Quickto").datepicker({
            // defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2
        })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
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

function GetRoomCategoryByForCommonPageHotelId(data) {
    $.each(data, function (i, data) {
        $('#QuickRoomType').append($("<option style='color: black;'></option>")
            .attr("value", data.CategoryName)
            .text(data.CategoryName));
    })
}


function GetTravellersForCommonPage(data) {
    // console.log(data);
    TravellerObj = data;
    $.each(data, function (i, data) {
        if (data.PhoneNumber != null)
            TravellerPhoneNumberArrayList.push(data.PhoneNumber);

        // if (data.FirstName != null)
        //     TravellerFullNameArrayList.push(data.FirstName);
    })
    $(function () {
        $("#QuickGuestMobile").autocomplete({
            source: TravellerPhoneNumberArrayList
        });

        // $("#GuestName").autocomplete({
        //     source: TravellerFullNameArrayList
        // });
    });
}

$('#QuicksellRate').keyup(function() {
    if($('#Quickfrom').val().length == ''){
        $('#Quickfrom').focus();
        makeAlert('warning','Please select check in Date ');
        return false;
    }

    if($('#Quickto').val().length == ''){
        $('#Quickto').focus();
        makeAlert('warning','Please select check out Date ');
        return false;
    }

    var checkindate = $('#Quickfrom').val();
    var checkoutdate = $('#Quickto').val();
    var NoofNights = numOfDaysBeteenDates(checkindate, checkoutdate);
    var NoOfRooms =  $('#QuickNoOfRooms').val();
    var RoomPricewithGst = 0;
    var TotalRoomPricewithGSTXdayXnights =0;

    var totalgstamount = 0;
    var totalAmountwithgst =0;
    var sellRate =  $('#QuicksellRate').val();
    if (sellRate < 1000) {
        gst = 0;
        totalgstamount = ((gst / 100) * sellRate);
    } else if (sellRate >= 1000 && sellRate < 2500) {
        gst = 12;
        totalgstamount = ((gst / 100) * sellRate);

    } else if (sellRate >= 2500 && sellRate < 7500) {
        gst = 18;
        totalgstamount = ((gst / 100) * sellRate);
    } else {
        gst = 28;
        totalgstamount = ((gst / 100) * sellRate);
    }
    $('#QuickGST').val(gst);
    RoomPricewithGst = parseFloat(parseInt(sellRate) + parseInt(totalgstamount));
    $('#QuickGSTAmt').val(parseInt(totalgstamount));
    TotalRoomPricewithGSTXdayXnights =  parseFloat(parseInt(NoofNights) * parseInt(NoOfRooms) * parseInt(RoomPricewithGst));
    $('#QuickTotalAmountWithTax').val(TotalRoomPricewithGSTXdayXnights);
})

$('#QuickBookingModelBtn').click(function () {
    validateBookingForm();
    if ($('#Quickfrom').val().length == "") {
        $('#Quickfrom').focus();
        makeAlert("warning","Check In Required");
        return false;
    }
    if ($('#Quickto').val().length == "") {
        $('#Quickto').focus();
        makeAlert("warning","Check Out Required");
        return false;
    }
    if ($('#QuickGuestMobile').val().length == "") {
        $('#QuickGuestMobile').focus();
        makeAlert("warning","Guest Mobile Required");
        return false;
    }

    if ($('#QuickGuestName').val().length == "") {
        $('#QuickGuestName').focus();
        makeAlert("warning","Guest Name Required");
        return false;
    }

    // email is not manditory
    if (!$('#QuickGuestEmail').val().length == "") {

        if(!validateEmail($('#QuickGuestEmail').val())){
            $('#GuestEmail').focus();
            makeAlert("warning","Email is invalid");
            return false;
        }

    }else {
        $('#QuickGuestEmail').val(" ");
    }


    if($('#QuicksellRate').val().length == ''){
        $('#QuicksellRate').focus();
        makeAlert('warning','sellRate Required ');
        return false;
    }
    addTravellerFun();
    // var tagexist = searchObjectByKey(TravellerObj,'PhoneNumber',$('#GuestMobile').val(),'BookingTravellerId');
    // if(!tagexist){
    //     // makeAlert('info','No result found');
    //     addTravellerFun();
    //     console.log('not tagexist');
    //
    // }else{
    //     console.log('tagexist');
    //     console.log(tagexist);
    //
    // }
})


function validateBookingForm() {

}
function addTravellerFun(){
    var data = {};
    data.FirstName = $('#QuickGuestName').val();
    data.Email = $('#QuickGuestEmail').val();
    data.PhoneNumber = $('#QuickGuestMobile').val();
    data.Gender = $('#Quickgender').val();
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
    data.OptCheckInDate = $('#Quickfrom').val();
    data.CheckInDate = $('#Quickfrom').val();
    data.NoOfAdults = $('#QuickTotalGuest').val();
    data.NoOfChild = $('#QuickTotalChilds').val();
    data.GST = $('#QuickGST').val();
    data.ExtraCharges =0;
    data.GSTAmount = parseInt($('#QuickGSTAmt').val());
    data.BookingStatus = 'Quick';
    data.SellRate = parseInt($('#QuicksellRate').val()); // sellrate * nooftoom * nights
    data.TotalAmount = parseInt($('#QuickTotalAmountWithTax').val());
    data.BalanceAmount = parseInt($('#QuickTotalAmountWithTax').val());
    data.RoomCategory = $('#QuickRoomType').val();
    data.OptCheckOutDate = $('#Quickto').val();
    data.CheckOutDate = $('#Quickto').val();
    data.NoOfRooms = $('#QuickNoOfRooms').val();

    data.DurationOfStay = numOfDaysBeteenDates($('#Quickfrom').val(), $('#Quickto').val());
    data.BookingSourceType = $('#QuickBookingSourceType').val();
    data.BookingSource = $('#QuickBookingSource').val();
    data.BookingPlan = $('#QuickRatePlaneName').val();
    data.CheckInTime = "12:00";
    data.CheckOutTime = "12:00";
    // console.log(data);
    // data = JSON.stringify(data);
    makeAjax('http://zingoapi.azurewebsites.net/api/RoomBookings', 'POST', getQuickBookingResponse, auth, data);
}


function getQuickBookingResponse(data){
        // console.log(data);
        alert('Booking Done Sucessfully');
        location.reload();
}

function getBookingSourceTypeChage(data) {

    var event = data.target.value;

    if(event == "OTA"){

        $('#QuickBookingSource')
            .find('option')
            .remove()
            .end();

        $.each(OTA, function (i, data) {
            $('#QuickBookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        });


    }

    if(event == "B2B"){
        $('#QuickBookingSource')
            .find('option')
            .remove()
            .end();
        $.each(B2B, function (i, data) {
            $('#QuickBookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        });
    }

    if(event == "OFFLINE"){
        $('#QuickBookingSource')
            .find('option')
            .remove()
            .end();

        $.each(OFFLINE, function (i, data) {
            $('#QuickBookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        });

    }


}




function searchObjectByKey(a, key, value ,returnkey) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][key] === value) {
            return a[i][returnkey];
        }
    }
    return 0;
}

// // sync the state to the input
// $("#room-checkbox").on("click", function (e) {
//     $(this).toggleClass('room-checkbox-checked');
//     var $radio = $(this).find('input[type="radio"]');
//     $radio.prop("checked", !$radio.prop("checked"))
//
//     e.preventDefault();
// });

// $('#CloseselectRoomBtn').click(function () {
//     var r = confirm("Are you sure you dont want to select the room");
//     if(r == true){
//         alert('Booking Done Room not allocated ')
//         location.reload();
//     }
//
// })

$(document).ready(function () {
    $( "#InventoryfromDate" ).val(getCurrentDate());
    $( "#InventorytoDate" ).val(getNextDayDate(getCurrentDate()));
})
$( function() {
    var dateFormat = "mm/dd/yy",
        fromDate = $( "#InventoryfromDate" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2
            })
            .on( "change", function() {
                toDate.datepicker( "option", "minDate", getDate( this ) );
                $('#InventorytoDate').val(getNextDayDate($('#InventoryfromDate').val()));
            }),
        toDate = $( "#InventorytoDate" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2
        })
            .on( "change", function() {
                fromDate.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }
} );


$('#getAvilabilityRoomBtn').click(function () {
    if ($('#InventoryfromDate').val().length == ''){
        $('#InventoryfromDate').focus();
        return false;
    }
    if ($('#InventorytoDate').val().length == ''){
        $('#InventorytoDate').focus();
        return false;
    }
    var data = {};
    data.HotelId = hotelId;
    data.FromDate = $('#InventoryfromDate').val();
    data.ToDate = $('#InventorytoDate').val();
    makeAjax(MAIN_API_IRL + 'Agent/GetAvailabilityOfCategoryBetweenDatesOfParticularHotel', 'POST', getHotelRoomAvilabilityForInventoryDetails, auth,data);
})


function getHotelRoomAvilabilityForInventoryDetails(data) {
    $('#InventoryAvilabilityRoomDiv').empty();
    // console.log(data);
    var NotificationsRow = '';
    for(i=0;i<data.length;i++) {
        NotificationsRow += '<div class="alert alert-secondary">';
        NotificationsRow += '<div class="row">';
        NotificationsRow += '<div class="col-md-4">';
        NotificationsRow += '<h5>' +  data[i].CategoryName + '</h5>';
        NotificationsRow += ' </div>';
        NotificationsRow += '<div class="col-md-4">';
        NotificationsRow += '<h5><span class=" badge badge-danger"> Available ' + data[i].Availability+ '</span></h5>';
        NotificationsRow += ' </div>';

        NotificationsRow += '<div class="col-md-4">';
        if(data[i].Availability != 0 && !(data[i].Availability < 0)){
            NotificationsRow += '<button class="btn btn-danger" onclick="moveToBooking()">Book Now</button>';
        }else{
            NotificationsRow += '<button class="btn btn-danger disabled">Book Now</button>';
        }
        NotificationsRow += '</div>';
        NotificationsRow += '<hr>';
        NotificationsRow += '</div>';
        NotificationsRow += '</div>';

    }

    $('#InventoryAvilabilityRoomDiv').append(NotificationsRow);
}

function moveToBooking(){
    window.location.href = 'index.php?page_name=quickbooking&hotelId=' + hotelId;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateMobile(mob) {
    var unrealisticPhoneNumberRegex = /^[a-zA-Z0-9\-().\s]{10,15}$/;
    return unrealisticPhoneNumberRegex.test(String(mob).toLowerCase())
}



//  QuickSearch Functionality here
$('#tableSearch').hide();
var currHotelId = hotelId;
$('#searchNow').click(function () {

    var searchMob = $('#mobilenosearch').val();
    var searchBookingId = $('#searchbyBookingId').val();

        if(searchBookingId.length>0){
            var getBookingIdUrl = MAIN_API_IRL + 'RoomBookings/GetCustomRoomBooking/' + searchBookingId;
            $('#tableSearch tbody').empty();
            // make quicksearch table responsive with Datatable

            //reset the data table
            if ($.fn.DataTable.isDataTable('#tableSearch')) {
                $('#tableSearch').DataTable().clear().destroy();
            }
            makeAjax(getBookingIdUrl, 'GET', getBookingResultById, auth);
            return;
        }

        if(searchMob.length>0){
            var getMobileUrl = "http://zingoapi.azurewebsites.net/api/RoomBookings/SearchCustomBooking";
            var postdata = {
                "PhoneNumber":searchMob,
                "CheckInDate": "",
                "CheckOutDate": "",
                "HotelId": hotelId
            };
            // make quicksearch table responsive with Datatable

            //reset the data table
            if ($.fn.DataTable.isDataTable('#tableSearch')) {
                $('#tableSearch').DataTable().clear().destroy();
            }
            makeAjax(getMobileUrl, 'POST', getResultByMobile, auth, postdata);
            return;
        }

        if(searchMob.length===0 || searchBookingId.length===0){
            makeAlert("warning", "Fields are empty !");
        }

});

function makeDataTable() {

    var table = $('#tableSearch').DataTable({
        responsive: true,
        dom: 'lBfrtip',
        buttons: [
            {
                extend: 'excel',
                footer: true,
                messageTop: HotelName + ' - ' + HotelAddress,
                messageBottom:"Hotel "+HotelName + " ExcelSheet" ,
                text: 'Download excel',
                className: 'exportExcel',
                filename: HotelName,
                exportOptions: {
                    modifier: {
                        page: 'all'
                    }
                }
            }
        ]
    });
}

function getResultByMobile(data) {

    if(data){
    if(data.length>0){
        $('#tableSearch tbody').empty();
        for(var i=0; i<data.length; i++){
            var tableRow = "";
            tableRow += '<tr>';
            tableRow += '<td>' + data[i].BookingId + '</td>'; //1
            tableRow += '<td>' + data[i].FirstName + '</td>'; //2
            tableRow += '<td>' + data[i].BookingPlan + '</td>'; //4
            /* tableRow += '<td>' + data.TravellerId + '</td>'; //5*/
            tableRow += '<td>' + makeDateFormated(data[i].BookingDate) + '</td>'; //6
            /* tableRow += '<td>' + makeDateFormated(data.BookingTime) + '</td>'; //7*/
            tableRow += '<td>' + makeDateFormated(data[i].CheckInDate) + '</td>'; //8
            tableRow += '<td>' + makeDateFormated(data[i].CheckOutDate) + '</td>'; //9
            tableRow += '<td>' + data[i].NoOfAdults + '</td>'; //10
            tableRow += '<td>' + data[i].NoOfChild + '</td>'; //11

            tableRow += '<td>' + data[i].BookingSourceType + '</td>'; //12
            tableRow += '<td>' + data[i].BookingSource + '</td>'; //13
            tableRow += '<td>' + data[i].BookingStatus + '</td>'; //14
            tableRow += '<td>' + data[i].RoomCategory + '</td>'; //16
            tableRow += '<td>' + data[i].SellRate + '</td>'; //17
            tableRow += '<td>' + data[i].TotalAmount + '</td>'; //18
            /*tableRow += '<td>' + data.RoomId + '</td>'; //19*/
            tableRow += '<td>' + data[i].DurationOfStay + '</td>'; //20
            /* tableRow += '<td>' + data.OTABookingID + '</td>'; //22
             tableRow += '<td>' + data.TravellerAgentId + '</td>'; //23*/
            tableRow += '<td>' + data[i].OTACommissionAmount + '</td>'; //24
            tableRow += '<td>' + data[i].OTACommissionGSTAmount + '</td>'; //25
            tableRow += '<td>' + data[i].OTATotalCommissionAmount + '</td>'; //26
            tableRow += '<td>' + data[i].OTAToPayHotel + '</td>'; //27
            tableRow += '<td>' + data[i].HotelToPayOTA + '</td>'; //28
            tableRow += '<td>' + data[i].ZingoCommision + '</td>'; //29

            if (data[i].OTAStatus == null)
                tableRow += '<td>Pending</td>';  // 30
            else {
                tableRow += '<td>' + data[i].OTAStatus + '</td>';
            }
            tableRow += '</tr>';
            $('#tableSearch').show();
            $('#tableSearch').append(tableRow);
        }

        makeDataTable();

    }else{
        makeAlert('warning',"No data Found with this phone number !");
        $('#mobilenosearch').empty();
        $('#mobilenosearch').focus();
    }}
    else {
        makeAlert('warning',"No data Found with this phone number !");
        $('#mobilenosearch').empty();
        $('#mobilenosearch').focus();
    }
}

function getBookingResultById(data) {
    if(data) {

        if (data[0].roomBooking.HotelId == currHotelId) {
            $('#tableSearch').show();
            console.log("new data", data);
            var tableRow = "";
            tableRow += '<tr>';
            tableRow += '<td>' + data[0].roomBooking.BookingId + '</td>'; //1
            tableRow += '<td>' + data[0].travellers.FirstName + '</td>'; //2
            tableRow += '<td>' + data[0].roomBooking.BookingPlan + '</td>'; //4
            /* tableRow += '<td>' + data.TravellerId + '</td>'; //5*/
            tableRow += '<td>' + makeDateFormated(data[0].roomBooking.BookingDate) + '</td>'; //6
            /* tableRow += '<td>' + makeDateFormated(data.BookingTime) + '</td>'; //7*/
            tableRow += '<td>' + makeDateFormated(data[0].roomBooking.CheckInDate) + '</td>'; //8
            tableRow += '<td>' + makeDateFormated(data[0].roomBooking.CheckOutDate) + '</td>'; //9
            tableRow += '<td>' + data[0].roomBooking.NoOfAdults + '</td>'; //10
            tableRow += '<td>' + data[0].roomBooking.NoOfChild + '</td>'; //11

            tableRow += '<td>' + data[0].roomBooking.BookingSourceType + '</td>'; //12
            tableRow += '<td>' + data[0].roomBooking.BookingSource + '</td>'; //13
            tableRow += '<td>' + data[0].roomBooking.BookingStatus + '</td>'; //14
            tableRow += '<td>' + data[0].roomBooking.RoomCategory + '</td>'; //16
            tableRow += '<td>' + data[0].roomBooking.SellRate + '</td>'; //17
            tableRow += '<td>' + data[0].roomBooking.TotalAmount + '</td>'; //18
            /*tableRow += '<td>' + data.RoomId + '</td>'; //19*/
            tableRow += '<td>' + data[0].roomBooking.DurationOfStay + '</td>'; //20
            /* tableRow += '<td>' + data.OTABookingID + '</td>'; //22
             tableRow += '<td>' + data.TravellerAgentId + '</td>'; //23*/
            tableRow += '<td>' + data[0].roomBooking.OTACommissionAmount + '</td>'; //24
            tableRow += '<td>' + data[0].roomBooking.OTACommissionGSTAmount + '</td>'; //25
            tableRow += '<td>' + data[0].roomBooking.OTATotalCommissionAmount + '</td>'; //26
            tableRow += '<td>' + data[0].roomBooking.OTAToPayHotel + '</td>'; //27
            tableRow += '<td>' + data[0].roomBooking.HotelToPayOTA + '</td>'; //28
            tableRow += '<td>' + data[0].roomBooking.ZingoCommision + '</td>'; //29

            if (data[0].roomBooking.OTAStatus == null)
                tableRow += '<td>Pending</td>';  // 30
            else {
                tableRow += '<td>' + data[0].roomBooking.OTAStatus + '</td>';
            }
            tableRow += '</tr>';
            $('#tableSearch').show();
            $('#tableSearch').append(tableRow);
            makeDataTable();
        } else {
            makeAlert('warning', 'Data with booking Id doesn\'t exist ! ');
            $('#searchbyBookingId').empty();
            $('#searchbyBookingId').focus();

        }
    }else {
        makeAlert('warning', 'No data found ');
        $('#searchbyBookingId').empty();
        $('#searchbyBookingId').focus();
    }
}










// ---------------------------------------Inventory calender ---------------------------------------------------