$(document).ready(function () {
    showNavigationreportDiv(Report);
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
    // report apis
    // makeAjax(MAIN_API_IRL + 'Dashboard/GetDashboardDataForDailyDate/' + hotelId, 'GET', GetDashboardDataForDailyDate, auth);

})

function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName + ' Hotel / Report / Cashier Report');
    makeAjax(MAIN_API_IRL + 'Calculation/GetStatisticsForWeek/' + hotelId, 'GET', GetStatisticsForWeek, auth);
    makeAjax(MAIN_API_IRL + 'Calculation/GetStatisticsForMonth/' + hotelId, 'GET', GetStatisticsForMonth, auth);
    makeAjax(MAIN_API_IRL + 'Calculation/GetStatisticsForCurrentDate/'+hotelId, 'GET', GetStatisticsForCurrentDate, auth);
}

var DailyCashierGraphData = [];
var WeeklyCashierGraphData = [];
var MonthlyCashierGraphData = [];

function GetStatisticsForCurrentDate(data) {

    var dailyDataExcel = '';
    dailyDataExcel += '<caption>'+HotelName +' Hotel  Daily Cashier Report</caption>'
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

    $('#Daily-Cashier-Report').append(dailyDataExcel);
    //  excel sheet -------------------------------------------
    // console.log(data);
    $('#DailyCashPayment').text(data.DailyCashPayment);
    $('#DailyOnlinePayment').text(data.DailyOnlinePayment);
    $('#DailyCardPayment').text(data.DailyCardPayment);
    $('#DailyBTCPostPaidPayment').text(data.DailyBTCPostPaidPayment);
    $('#DailyBTCPrePaidPayment').text(data.DailyBTCPrePaidPayment);

    DailyCashierGraphData[0] = data.DailyCashPayment;
    DailyCashierGraphData[1] = data.DailyOnlinePayment;
    DailyCashierGraphData[2] = data.DailyCardPayment;
    DailyCashierGraphData[3] = data.DailyBTCPostPaidPayment;
    DailyCashierGraphData[4] = data.DailyBTCPrePaidPayment;
    makeDailyCashierdoughnutChart(DailyCashierGraphData);
}

function GetStatisticsForWeek(data) {
    var dailyDataExcel = '';
    dailyDataExcel += '<caption>'+HotelName +' Hotel  weekly Cashier Report</caption>'
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

    $('#weekly-Cashier-Report').append(dailyDataExcel);
    //  excel sheet -------------------------------------------
    // console.log(data);
    $('#WeeklyCashPayment').text(data.WeeklyCashPayment);
    $('#WeeklyOnlinePayment').text(data.WeeklyOnlinePayment);
    $('#WeeklyCardPayment').text(data.WeeklyCardPayment);
    $('#WeeklyBTCPostPaidPayment').text(data.WeeklyBTCPostPaidPayment);
    $('#WeeklyBTCPrePaidPayment').text(data.WeeklyBTCPrePaidPayment);

    WeeklyCashierGraphData[0] = data.WeeklyCashPayment;
    WeeklyCashierGraphData[1] = data.WeeklyOnlinePayment;
    WeeklyCashierGraphData[2] = data.WeeklyCardPayment;
    WeeklyCashierGraphData[3] = data.WeeklyBTCPostPaidPayment;
    WeeklyCashierGraphData[4] = data.WeeklyBTCPrePaidPayment;
    makeweeklyCashierdoughnutChart(WeeklyCashierGraphData);
}

function GetStatisticsForMonth(data) {

    var dailyDataExcel = '';
    dailyDataExcel += '<caption>'+HotelName +' Hotel  Monthly Cashier Report</caption>'
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

    $('#Monthly-Cashier-Report').append(dailyDataExcel);
    // console.log(data);
    $('#MonthlyCashPayment').text(data.MonthlyCashPayment);
    $('#MonthlyOnlinePayment').text(data.MonthlyOnlinePayment);
    $('#MonthlyCardPayment').text(data.MonthlyCardPayment);
    $('#MonthlyBTCPostPaidPayment').text(data.MonthlyBTCPostPaidPayment);
    $('#MonthlyBTCPrePaidPayment').text(data.MonthlyBTCPrePaidPayment);

    MonthlyCashierGraphData[0] = data.MonthlyCashPayment;
    MonthlyCashierGraphData[1] = data.MonthlyOnlinePayment;
    MonthlyCashierGraphData[2] = data.MonthlyCardPayment;
    MonthlyCashierGraphData[3] = data.MonthlyBTCPostPaidPayment;
    MonthlyCashierGraphData[4] = data.MonthlyBTCPrePaidPayment;
    makemonthlyCashierdoughnutChart(MonthlyCashierGraphData);
}