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
    $('#HotelName').text(HotelName + ' Hotel / Report / Booking Report');
    makeAjax(MAIN_API_IRL + 'Calculation/GetOverallStatisticsofHotel/' + hotelId, 'GET', GetOverallStatisticsofHotel, auth);

}

function GetOverallStatisticsofHotel(data) {
    var dailyDataExcel = '';
    dailyDataExcel += '<caption>'+HotelName +' Hotel  Booking Report</caption>'
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

    $('#Booking-Report').append(dailyDataExcel);
    // console.log(data);
    $('#TotalBookingTillDate').text(data.TotalBookingTillDate);
    $('#TotalAmount').text(data.TotalAmount);
    $('#TodayBookingCount').text(data.TodayBookingCount);
    $('#SellRate').text(data.SellRate);
    $('#LastSevenDayBookingCount').text(data.LastSevenDayBookingCount);
    $('#ExtraCharges').text(data.ExtraCharges);
    $('#DiscountAmount').text(data.DiscountAmount);
    $('#DeclaredRate').text(data.DeclaredRate);
}

