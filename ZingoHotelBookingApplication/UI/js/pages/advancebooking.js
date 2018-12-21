var HotelName;
var HotelAddress;
var HotelObj = {};
$(document).ready(function () {
    showNavigationreportDiv(Report);
    // $('#CheckOutDate').datepicker({
    //     autoclose: true,
    //     todayHighlight: getCurrentDate(),
    //     keepOpen: false,
    // }).on('change', function () {
    //     $('.datepicker').hide();
    // });
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
    // makeAjax(MAIN_API_IRL + 'RoomBooking/GetActiveBookingByHotelIdAndBookingStatus/' + hotelId + '/Active', 'GET', GetActiveBookingByHotelIdAndBookingStatus, auth);

})
var TodaysQuickBookingList = [];
var WeeklyQuickBookingList = [];
var MonthlyQuickBookingList = [];





function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName + ' Advance Booking Report ');
    makeAjax(MAIN_API_IRL + 'RoomBooking/GetBookingByBookingStatusCustomAPI/' + hotelId + '/Quick', 'GET', GetBookingByBookingStatusCustomAPI, auth);

}

// function GetBookingByBookingStatusCustomAPI(data) {
//     console.log(data);
// }

function GetBookingByBookingStatusCustomAPI(data) {
    for (i = 0; i < data.length; i++) {
        if (data[i].roomBooking.CheckInDate == getCurrentDate()) {
            TodaysQuickBookingList.push(data[i].roomBooking);
        } else if ((data[i].roomBooking.CheckInDate >= getCurrentDate()) && (data[i].roomBooking.CheckInDate <= AfterOneWeekDate())) {
            WeeklyQuickBookingList.push(data[i].roomBooking);
        } else if ((data[i].roomBooking.CheckInDate >= getCurrentDate()) && (data[i].roomBooking.CheckInDate <= getAfterOneMonthdayDate())) {
            MonthlyQuickBookingList.push(data[i].roomBooking);
        } else {
            console.log('Error');
        }
    }
    makeTodayAdvanceBooking(TodaysQuickBookingList);
    makeWeekAdvanceBooking(WeeklyQuickBookingList);
    makeMonthAdvanceBooking(MonthlyQuickBookingList);

}

var TodayTotalBookings = 0;
var TodayTotalRevenue = 0;
var TodayTotalTaxAmount = 0;
var TodayTotalCommissionAmount = 0;
var TodayOTABooking = 0;
var TodayTotalB2BBooking = 0;
var TodayTotalOfflineBooking = 0;
//-------------------------------



function makeTodayAdvanceBooking(data) {
    // console.log(data);
    var TodaysQuickBookingObj = {};
    if (data.length != 0) {
        TodayTotalBookings = data.length;
        for (i = 0; i < data.length; i++) {
            TodayTotalRevenue += data[i].TotalAmount;
            TodayTotalTaxAmount += data[i].GSTAmount;
            TodayTotalCommissionAmount += data[i].CommissionAmount;
            if ((data[i].BookingSourceType == 'ota') || (data[i].BookingSourceType == 'OTA')) {
                TodayOTABooking++;
            } else if ((data[i].BookingSourceType == 'b2b') || (data[i].BookingSourceType == 'B2B')) {
                TodayTotalB2BBooking++;
            } else if ((data[i].BookingSourceType == 'offline') || (data[i].BookingSourceType == 'OFFLINE')) {
                TodayTotalOfflineBooking++;
            }
        }
    }
    TodaysQuickBookingObj.TodayTotalBookings = TodayTotalBookings;
    TodaysQuickBookingObj.TodayTotalRevenue = TodayTotalRevenue;
    TodaysQuickBookingObj.TodayTotalTaxAmount = TodayTotalTaxAmount;
    TodaysQuickBookingObj.TodayTotalCommissionAmount = TodayTotalCommissionAmount;
    TodaysQuickBookingObj.TodayOTABooking = TodayOTABooking;
    TodaysQuickBookingObj.TodayTotalB2BBooking = TodayTotalB2BBooking;
    TodaysQuickBookingObj.TodayTotalOfflineBooking = TodayTotalOfflineBooking;


    console.log(TodaysQuickBookingObj)
    $('#TodayTotalBookings').text(TodaysQuickBookingObj.TodayTotalBookings)
    $('#TodayTotalRevenue').text(TodaysQuickBookingObj.TodayTotalRevenue)
    $('#TodayTotalTaxAmount').text(TodaysQuickBookingObj.TodayTotalTaxAmount)
    $('#TodayTotalCommissionAmount').text(TodaysQuickBookingObj.TodayTotalCommissionAmount)
    $('#TodayOTABooking').text(TodaysQuickBookingObj.TodayOTABooking)
    $('#TodayTotalB2BBooking').text(TodaysQuickBookingObj.TodayTotalB2BBooking)
    $('#TodayTotalOfflineBooking').text(TodaysQuickBookingObj.TodayTotalOfflineBooking)
    makeExcelforTodayAdvanceBooking(TodaysQuickBookingObj)
}

function makeExcelforTodayAdvanceBooking(data) {
    var dailyDataExcel = '';
    dailyDataExcel += '<caption>'+HotelName +' Hotel Today AdvanceBooking Report</caption>'
    dailyDataExcel += '<tr>'
    dailyDataExcel += '<td>Address : </td>'
    dailyDataExcel += '<td>'+HotelAddress+'</td>'
    dailyDataExcel += '</tr>'
    dailyDataExcel += '<tr>'
    dailyDataExcel += '<td>Created By</td>'
    dailyDataExcel += '<td>'+authData.UserName+'</td>'
    dailyDataExcel += '</tr>'
    dailyDataExcel += '<tr>'
    dailyDataExcel += '<td>Created Date</td>'
    dailyDataExcel += '<td>'+getCurrentDate()+' - '+getCurrentTime()+'</td>'
    dailyDataExcel += '</tr>'
    dailyDataExcel += '<tr style="background-color: red">'
    dailyDataExcel += '<th>Details</th>'
    dailyDataExcel += '<th>Values</th>'
    dailyDataExcel += '</tr>'
    $.each(data, function(key, value){
        // $.each(value, function(key, value){
        dailyDataExcel += '<tr>'
        dailyDataExcel += '<td>'+key+'</td>'
        dailyDataExcel += '<td>'+value+'</td>'
        dailyDataExcel += '</tr>'
        console.log(key, value);
        // });
    });

    $('#Daily-AdvanceBooking-Report').append(dailyDataExcel);
}
var WeekTotalBookings = 0;
var WeekTotalRevenue = 0;
var WeekTotalTaxAmount = 0;
var WeekTotalCommissionAmount = 0;
var WeekOTABooking = 0;
var WeekTotalB2BBooking = 0;
var WeekTotalOfflineBooking = 0;
//-------------------------------
function makeWeekAdvanceBooking(data) {
    // console.log(data);
    var WeeklyQuickBookingObj = {};
    if (data.length != 0) {
        WeekTotalBookings = data.length;
        for (i = 0; i < data.length; i++) {
            WeekTotalRevenue += data[i].TotalAmount;
            WeekTotalTaxAmount += data[i].GSTAmount;
            WeekTotalCommissionAmount += data[i].CommissionAmount;
            if ((data[i].BookingSourceType == 'ota') || (data[i].BookingSourceType == 'OTA')) {
                WeekOTABooking++;
            } else if ((data[i].BookingSourceType == 'b2b') || (data[i].BookingSourceType == 'B2B')) {
                WeekTotalB2BBooking++;
            } else if ((data[i].BookingSourceType == 'offline') || (data[i].BookingSourceType == 'OFFLINE')) {
                WeekTotalOfflineBooking++;
            }
        }
    }
    WeeklyQuickBookingObj.WeekTotalBookings = WeekTotalBookings;
    WeeklyQuickBookingObj.WeekTotalRevenue = WeekTotalRevenue;
    WeeklyQuickBookingObj.WeekTotalTaxAmount = WeekTotalTaxAmount;
    WeeklyQuickBookingObj.WeekTotalCommissionAmount = WeekTotalCommissionAmount;
    WeeklyQuickBookingObj.WeekOTABooking = WeekOTABooking;
    WeeklyQuickBookingObj.WeekTotalB2BBooking = WeekTotalB2BBooking;
    WeeklyQuickBookingObj.WeekTotalOfflineBooking = WeekTotalOfflineBooking;
    console.log(WeeklyQuickBookingObj)


    $('#WeekTotalBookings').text(WeeklyQuickBookingObj.WeekTotalBookings)
    $('#WeekTotalRevenue').text(WeeklyQuickBookingObj.WeekTotalRevenue)
    $('#WeekTotalTaxAmount').text(WeeklyQuickBookingObj.WeekTotalTaxAmount)
    $('#WeekTotalCommissionAmount').text(WeeklyQuickBookingObj.WeekTotalCommissionAmount)
    $('#WeekOTABooking').text(WeeklyQuickBookingObj.WeekOTABooking)
    $('#WeekTotalB2BBooking').text(WeeklyQuickBookingObj.WeekTotalB2BBooking)
    $('#WeekTotalOfflineBooking').text(WeeklyQuickBookingObj.WeekTotalOfflineBooking)
    makeExcelforWeekAdvanceBooking(WeeklyQuickBookingObj)
}

function makeExcelforWeekAdvanceBooking(data) {
    var dailyDataExcel = '';
    dailyDataExcel += '<caption>'+HotelName +' Hotel weekly Advance Booking Report</caption>'
    dailyDataExcel += '<tr>'
    dailyDataExcel += '<td>Address : </td>'
    dailyDataExcel += '<td>'+HotelAddress+'</td>'
    dailyDataExcel += '</tr>'
    dailyDataExcel += '<tr>'
    dailyDataExcel += '<td>Created By</td>'
    dailyDataExcel += '<td>'+authData.UserName+'</td>'
    dailyDataExcel += '</tr>'
    dailyDataExcel += '<tr>'
    dailyDataExcel += '<td>Created Date</td>'
    dailyDataExcel += '<td>'+getCurrentDate()+' - '+getCurrentTime()+'</td>'
    dailyDataExcel += '</tr>'
    dailyDataExcel += '<tr style="background-color: red">'
    dailyDataExcel += '<th>Details</th>'
    dailyDataExcel += '<th>Values</th>'
    dailyDataExcel += '</tr>'
    $.each(data, function(key, value){
        // $.each(value, function(key, value){
        dailyDataExcel += '<tr>'
        dailyDataExcel += '<td>'+key+'</td>'
        dailyDataExcel += '<td>'+value+'</td>'
        dailyDataExcel += '</tr>'
        console.log(key, value);
        // });
    });

    $('#weekly-AdvanceBooking-Report').append(dailyDataExcel);
}
var MonthTotalBookings = 0;
var MonthTotalRevenue = 0;
var MonthTotalTaxAmount = 0;
var MonthTotalCommissionAmount = 0;
var MonthOTABooking = 0;
var MonthTotalB2BBooking = 0;
var MonthTotalOfflineBooking = 0;
function makeMonthAdvanceBooking(data) {
    // console.log(data);
    var MonthlyQuickBookingObj = {};
    if (data.length != 0) {
        MonthTotalBookings = data.length;
        for (i = 0; i < data.length; i++) {
            MonthTotalRevenue += data[i].TotalAmount;
            MonthTotalTaxAmount += data[i].GSTAmount;
            MonthTotalCommissionAmount += data[i].CommissionAmount;
            if ((data[i].BookingSourceType == 'ota') || (data[i].BookingSourceType == 'OTA')) {
                MonthOTABooking++;
            } else if ((data[i].BookingSourceType == 'b2b') || (data[i].BookingSourceType == 'B2B')) {
                MonthTotalB2BBooking++;
            } else if ((data[i].BookingSourceType == 'offline') || (data[i].BookingSourceType == 'OFFLINE')) {
                MonthTotalOfflineBooking++;
            }
        }
    }
    MonthlyQuickBookingObj.MonthTotalBookings = MonthTotalBookings;
    MonthlyQuickBookingObj.MonthTotalRevenue = MonthTotalRevenue;
    MonthlyQuickBookingObj.MonthTotalTaxAmount = MonthTotalTaxAmount;
    MonthlyQuickBookingObj.MonthTotalCommissionAmount = MonthTotalCommissionAmount;
    MonthlyQuickBookingObj.MonthOTABooking = MonthOTABooking;
    MonthlyQuickBookingObj.MonthTotalB2BBooking = MonthTotalB2BBooking;
    MonthlyQuickBookingObj.MonthTotalOfflineBooking = MonthTotalOfflineBooking;
    console.log(MonthlyQuickBookingObj)

    $('#MonthTotalBookings').text(MonthlyQuickBookingObj.MonthTotalBookings)
    $('#MonthTotalRevenue').text(MonthlyQuickBookingObj.MonthTotalRevenue)
    $('#MonthTotalTaxAmount').text(MonthlyQuickBookingObj.MonthTotalTaxAmount)
    $('#MonthTotalCommissionAmount').text(MonthlyQuickBookingObj.MonthTotalCommissionAmount)
    $('#MonthOTABooking').text(MonthlyQuickBookingObj.MonthOTABooking)
    $('#MonthTotalB2BBooking').text(MonthlyQuickBookingObj.MonthTotalB2BBooking)
    $('#MonthTotalOfflineBooking').text(MonthlyQuickBookingObj.MonthTotalOfflineBooking)
    makeExcelforMonthAdvanceBooking(MonthlyQuickBookingObj)
}

function makeExcelforMonthAdvanceBooking(data) {
    var dailyDataExcel = '';
    dailyDataExcel += '<caption>'+HotelName +' Hotel Monthly AdvanceBooking Report</caption>'
    dailyDataExcel += '<tr>'
    dailyDataExcel += '<td>Address : </td>'
    dailyDataExcel += '<td>'+HotelAddress+'</td>'
    dailyDataExcel += '</tr>'
    dailyDataExcel += '<tr>'
    dailyDataExcel += '<td>Created By</td>'
    dailyDataExcel += '<td>'+authData.UserName+'</td>'
    dailyDataExcel += '</tr>'
    dailyDataExcel += '<tr>'
    dailyDataExcel += '<td>Created Date</td>'
    dailyDataExcel += '<td>'+getCurrentDate()+' - '+getCurrentTime()+'</td>'
    dailyDataExcel += '</tr>'
    dailyDataExcel += '<tr style="background-color: red">'
    dailyDataExcel += '<th>Details</th>'
    dailyDataExcel += '<th>Values</th>'
    dailyDataExcel += '</tr>'
    $.each(data, function(key, value){
        // $.each(value, function(key, value){
        dailyDataExcel += '<tr>'
        dailyDataExcel += '<td>'+key+'</td>'
        dailyDataExcel += '<td>'+value+'</td>'
        dailyDataExcel += '</tr>'
        console.log(key, value);
        // });
    });

    $('#Monthly-AdvanceBooking-Report').append(dailyDataExcel);
}