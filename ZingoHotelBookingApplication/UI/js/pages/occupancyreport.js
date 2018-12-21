$(document).ready(function () {
    showNavigationreportDiv(Report);
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
    // report apis

    // makeAjax(MAIN_API_IRL + 'Dashboard/GetDashboardDataForCurrentDate/'+hotelId, 'GET', GetDashboardDataForCurrentDate, auth);
})



function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName + ' Hotel / Report / Occupancy Report');

    makeAjax(MAIN_API_IRL + 'Dashboard/GetDashboardDataForDailyDate/' + hotelId, 'GET', GetDashboardDataForDailyDate, auth);
    makeAjax(MAIN_API_IRL + 'Dashboard/GetDashboardDataForWeeklyDate/' + hotelId, 'GET', GetDashboardDataForWeeklyDate, auth);
    makeAjax(MAIN_API_IRL + 'Dashboard/GetDashboardDataForMonthlyDate/' + hotelId, 'GET', GetDashboardDataForMonthlyDate, auth);

}
var DailyOccupancyGraphData = [];
var DailyOccupancyRevenueGraphData = [];

var WeeklyOccupancyGraphData = [];
var WeeklyOccupancyRevenueGraphData = [];

var MonthlyOccupancyGraphData = [];
var MonthlyOccupancyRevenueGraphData = [];

function GetDashboardDataForDailyDate(data) {
    //  excel sheet -------------------------------------------
  var dailyDataExcel = '';
    dailyDataExcel += '<caption>'+HotelName +' Hotel  Daily Occupancy Report</caption>'
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
            // console.log(key, value);
        // });
    });

    $('#Daily-Occupancy-Report').append(dailyDataExcel);
    //  excel sheet -------------------------------------------
    // console.log(data);
    if (authData.Plans == 'Normal') {
        $('#OccupancyPercentageDiv').hide();
        $('#unsoldRoomsDiv').hide();
        $('#OfflineTotalAmountDiv').hide();
        $('#B2BTotalAmountDiv').hide();
        $('#OTATotalAmountDiv').hide();
        $('#TotalDiscountAmountDiv').hide();
        $('#CommissionAmountDiv').hide();


        $('#B2BTotalAmount').text('₹ ' + data.B2BTotalAmount);
        $('#CommissionAmount').text('₹ ' + data.CommissionAmount);
        $('#DailyARR').text('₹ ' + data.DailyARR);
        $('#DailylyRevenueTotalCost').text('₹ ' + data.DailylyRevenueTotalCost);
        $('#ExpectedCheckIn').text(' ' + data.ExpectedCheckIn);
        $('#GSTAmount').text('₹ ' + data.GSTAmount);
        $('#NetAmount').text('₹ ' + data.NetAmount);
        $('#OTATotalAmount').text('₹ ' + data.OTATotalAmount);
        $('#OccupancyPercentage').text('' + Math.round(parseInt(data.OccupancyPercentage)) + '%');
        $('#OccupiedRooms').text('₹ ' + data.OccupiedRooms);
        $('#OfflineTotalAmount').text('₹ ' + data.OfflineTotalAmount);
        $('#TotalDiscountAmount').text('₹ ' + data.TotalDiscountAmount);
        $('#totalOccupiedRoomByActiveStatus').text(' ' + data.totalOccupiedRoomByActiveStatus);
        $('#unsoldRooms').text(' ' + data.unsoldRooms);
    } else {
        $('#B2BTotalAmount').text('₹ ' + data.B2BTotalAmount);
        $('#CommissionAmount').text('₹ ' + data.CommissionAmount);
        $('#DailyARR').text('₹ ' + data.DailyARR);
        $('#DailylyRevenueTotalCost').text('₹ ' + data.DailylyRevenueTotalCost);
        $('#ExpectedCheckIn').text(' ' + data.ExpectedCheckIn);
        $('#GSTAmount').text('₹ ' + data.GSTAmount);
        $('#NetAmount').text('₹ ' + data.NetAmount);
        $('#OTATotalAmount').text('₹ ' + data.OTATotalAmount);
        $('#OccupancyPercentage').text('' + Math.round(parseInt(data.OccupancyPercentage)) + '%');
        $('#OccupiedRooms').text('₹ ' + data.OccupiedRooms);
        $('#OfflineTotalAmount').text('₹ ' + data.OfflineTotalAmount);
        $('#TotalDiscountAmount').text('₹ ' + data.TotalDiscountAmount);
        $('#totalOccupiedRoomByActiveStatus').text(' ' + data.totalOccupiedRoomByActiveStatus);
        $('#unsoldRooms').text(' ' + data.unsoldRooms);
    }
    DailyOccupancyGraphData[0] = data.ExpectedCheckIn;
    DailyOccupancyGraphData[1] = data.unsoldRooms;
    DailyOccupancyGraphData[2] = data.totalOccupiedRoomByActiveStatus;
    makeDailyoccupancydoughnutChart(DailyOccupancyGraphData);

    DailyOccupancyRevenueGraphData[0] =data.DailylyRevenueTotalCost;
    DailyOccupancyRevenueGraphData[1] =data.DailyARR;
    DailyOccupancyRevenueGraphData[2] =data.OTATotalAmount;
    DailyOccupancyRevenueGraphData[3] =data.GSTAmount;
    DailyOccupancyRevenueGraphData[4] =data.TotalDiscountAmount;
    DailyOccupancyRevenueGraphData[5] =data.CommissionAmount;
    DailyOccupancyRevenueGraphData[6] =data.NetAmount;
    DailyOccupancyRevenueGraphData[7] =data.B2BTotalAmount;
    DailyOccupancyRevenueGraphData[8] =data.OfflineTotalAmount;
    makeDailyoccupancybarChart(DailyOccupancyRevenueGraphData)

}

function GetDashboardDataForWeeklyDate(data) {

    var dailyDataExcel = '';
    dailyDataExcel += '<caption>'+HotelName +' Hotel  Weekly Occupancy Report</caption>'
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
        // console.log(key, value);
        // });
    });

    $('#Weekly-Occupancy-Report').append(dailyDataExcel);
    //  excel sheet -------------------------------------------
    // console.log(data);
    if (authData.Plans == 'Normal') {
        $('#WeeklyOccupancyPercentageDiv').hide();
        $('#WeeklyunsoldRoomsDiv').hide();
        $('#WeeklyOfflineTotalAmountDiv').hide();
        $('#WeeklyB2BTotalAmountDiv').hide();
        $('#WeeklyOTATotalAmountDiv').hide();
        $('#WeeklyTotalDiscountAmountDiv').hide();
        $('#WeeklyCommissionAmountDiv').hide();

        $('#WeeklyB2BTotalAmount').text('₹ ' + data.WeeklyB2BTotalAmount);
        $('#WeeklyCommissionAmount').text('₹ ' + data.CommissionAmount);
        $('#WeeklyDailyARR').text('₹ ' + data.WeeklyARR);
        $('#WeeklyDailylyRevenueTotalCost').text('₹ ' + data.SevenDayRevenueTotalCost);
        $('#WeeklyExpectedCheckIn').text(' ' + data.ExpectedCheckIn);
        $('#WeeklyGSTAmount').text('₹ ' + data.WeeklyGSTAmount);
        $('#WeeklyNetAmount').text('₹ ' + data.NetAmount);
        $('#WeeklyOTATotalAmount').text('₹ ' + data.WeeklyOTATotalAmount);
        $('#WeeklyOccupancyPercentage').text('' + Math.round(parseInt(data.OccupancyPercentage)) + '%');
        $('#WeeklyOccupiedRooms').text('₹ ' + data.TotalOccupiedRooms);
        $('#WeeklyOfflineTotalAmount').text('₹ ' + data.WeeklyOfflineTotalAmount);
        $('#WeeklyTotalDiscountAmount').text('₹ ' + data.WeeklyDiscountAmount);
        $('#WeeklytotalOccupiedRoomByActiveStatus').text(' ' + data.TotalOccupiedRooms);
        $('#WeeklyunsoldRooms').text(' ' + data.unsoldRooms);
    } else {
        $('#WeeklyB2BTotalAmount').text('₹ ' + data.WeeklyB2BTotalAmount);
        $('#WeeklyCommissionAmount').text('₹ ' + data.CommissionAmount);
        $('#WeeklyDailyARR').text('₹ ' + data.WeeklyARR);
        $('#WeeklyDailylyRevenueTotalCost').text('₹ ' + data.SevenDayRevenueTotalCost);
        $('#WeeklyExpectedCheckIn').text(' ' + data.ExpectedCheckIn);
        $('#WeeklyGSTAmount').text('₹ ' + data.WeeklyGSTAmount);
        $('#WeeklyNetAmount').text('₹ ' + data.NetAmount);
        $('#WeeklyOTATotalAmount').text('₹ ' + data.WeeklyOTATotalAmount);
        $('#WeeklyOccupancyPercentage').text('' + Math.round(parseInt(data.OccupancyPercentage)) + '%');
        $('#WeeklyOccupiedRooms').text('₹ ' + data.TotalOccupiedRooms);
        $('#WeeklyOfflineTotalAmount').text('₹ ' + data.WeeklyOfflineTotalAmount);
        $('#WeeklyTotalDiscountAmount').text('₹ ' + data.WeeklyDiscountAmount);
        $('#WeeklytotalOccupiedRoomByActiveStatus').text(' ' + data.TotalOccupiedRooms);
        $('#WeeklyunsoldRooms').text(' ' + data.unsoldRooms);
    }

    WeeklyOccupancyGraphData[0] = data.ExpectedCheckIn;
    WeeklyOccupancyGraphData[1] = data.unsoldRooms;
    WeeklyOccupancyGraphData[2] = data.TotalOccupiedRooms;
    makeweeklyoccupancydoughnutChart(WeeklyOccupancyGraphData);

    WeeklyOccupancyRevenueGraphData[0] =data.SevenDayRevenueTotalCost;
    WeeklyOccupancyRevenueGraphData[1] =data.WeeklyARR;
    WeeklyOccupancyRevenueGraphData[2] =data.WeeklyOTATotalAmount;
    WeeklyOccupancyRevenueGraphData[3] =data.WeeklyGSTAmount;
    WeeklyOccupancyRevenueGraphData[4] =data.WeeklyDiscountAmount;
    WeeklyOccupancyRevenueGraphData[5] =data.CommissionAmount;
    WeeklyOccupancyRevenueGraphData[6] =data.NetAmount;
    WeeklyOccupancyRevenueGraphData[7] =data.WeeklyB2BTotalAmount;
    WeeklyOccupancyRevenueGraphData[8] =data.WeeklyOfflineTotalAmount;
    makeweeklyoccupancybarChart(WeeklyOccupancyRevenueGraphData)

}

function GetDashboardDataForMonthlyDate(data) {
    var dailyDataExcel = '';
    dailyDataExcel += '<caption>'+HotelName +' Hotel  Monthly Occupancy Report</caption>'
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
        // console.log(key, value);
        // });
    });

    $('#Monthly-Occupancy-Report').append(dailyDataExcel);
    //  excel sheet -------------------------------------------
    // console.log(data);
    // console.log(data);
    if (authData.Plans == 'Normal') {
        $('#MonthlyCommissionAmountDiv').hide();
        $('#MonthlyunsoldRoomsDiv').hide();
        $('#MonthlyOfflineTotalAmountDiv').hide();
        $('#MonthlyB2BTotalAmountDiv').hide();
        $('#MonthlyOTATotalAmountDiv').hide();
        $('#MonthlyTotalDiscountAmountDiv').hide();
        $('#MonthlyCommissionAmountDiv').hide();

        $('#MonthlyB2BTotalAmount').text('₹ ' + data.MonthlyB2BTotalAmount);
        $('#MonthlyCommissionAmount').text('₹ ' + data.CommissionAmount);
        $('#MonthlyDailyARR').text('₹ ' + data.MonthlyARR);
        $('#MonthlyDailylyRevenueTotalCost').text('₹ ' + data.SevenDayRevenueTotalCost);
        $('#MonthlyExpectedCheckIn').text(' ' + data.ExpectedCheckIn);
        $('#MonthlyGSTAmount').text('₹ ' + data.MonthlyGSTAmount);
        $('#MonthlyNetAmount').text('₹ ' + data.NetAmount);
        $('#MonthlyOTATotalAmount').text('₹ ' + data.MonthlyOTATotalAmount);
        $('#MonthlyOccupancyPercentage').text('' + Math.round(parseInt(data.OccupancyPercentage)) + '%');
        $('#MonthlyOccupiedRooms').text('₹ ' + data.TotalOccupiedRooms);
        $('#MonthlyOfflineTotalAmount').text('₹ ' + data.MonthlyOfflineTotalAmount);
        $('#MonthlyTotalDiscountAmount').text('₹ ' + data.MonthlyDiscountAmount);
        $('#MonthlytotalOccupiedRoomByActiveStatus').text(' ' + data.TotalOccupiedRooms);
        $('#MonthlyunsoldRooms').text(' ' + data.unsoldRooms);
    } else {
        $('#MonthlyB2BTotalAmount').text('₹ ' + data.MonthlyB2BTotalAmount);
        $('#MonthlyCommissionAmount').text('₹ ' + data.CommissionAmount);
        $('#MonthlyDailyARR').text('₹ ' + data.MonthlyARR);
        $('#MonthlyDailylyRevenueTotalCost').text('₹ ' + data.SevenDayRevenueTotalCost);
        $('#MonthlyExpectedCheckIn').text(' ' + data.ExpectedCheckIn);
        $('#MonthlyGSTAmount').text('₹ ' + data.MonthlyGSTAmount);
        $('#MonthlyNetAmount').text('₹ ' + data.NetAmount);
        $('#MonthlyOTATotalAmount').text('₹ ' + data.MonthlyOTATotalAmount);
        $('#MonthlyOccupancyPercentage').text('' + Math.round(parseInt(data.OccupancyPercentage)) + '%');
        $('#MonthlyOccupiedRooms').text('₹ ' + data.TotalOccupiedRooms);
        $('#MonthlyOfflineTotalAmount').text('₹ ' + data.MonthlyOfflineTotalAmount);
        $('#MonthlyTotalDiscountAmount').text('₹ ' + data.MonthlyDiscountAmount);
        $('#MonthlytotalOccupiedRoomByActiveStatus').text(' ' + data.TotalOccupiedRooms);
        $('#MonthlyunsoldRooms').text(' ' + data.unsoldRooms);
    }

    MonthlyOccupancyGraphData[0] = data.ExpectedCheckIn;
    MonthlyOccupancyGraphData[1] = data.unsoldRooms;
    MonthlyOccupancyGraphData[2] = data.TotalOccupiedRooms;
    makemonthlyoccupancydoughnutChart(MonthlyOccupancyGraphData);

    MonthlyOccupancyRevenueGraphData[0] =data.SevenDayRevenueTotalCost;
    MonthlyOccupancyRevenueGraphData[1] =data.MonthlyARR;
    MonthlyOccupancyRevenueGraphData[2] =data.MonthlyOTATotalAmount;
    MonthlyOccupancyRevenueGraphData[3] =data.MonthlyGSTAmount;
    MonthlyOccupancyRevenueGraphData[4] =data.MonthlyDiscountAmount;
    MonthlyOccupancyRevenueGraphData[5] =data.CommissionAmount;
    MonthlyOccupancyRevenueGraphData[6] =data.NetAmount;
    MonthlyOccupancyRevenueGraphData[7] =data.MonthlyB2BTotalAmount;
    MonthlyOccupancyRevenueGraphData[8] =data.MonthlyOfflineTotalAmount;
    makeMonthlyoccupancybarChart(MonthlyOccupancyRevenueGraphData)
}

function GetDashboardDataForCurrentDate(data) {
    // console.log(data);
}