$(document).ready(function () {
    showNavigationDiv(NotificationsData);
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
    // makeAjax(MAIN_API_IRL + 'BookingsNotificationManagers/GetBookingNMByHotelId/'+hotelId, 'GET', getBookingsNotificationManagers, auth);
})

function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName +' Hotel / Notifications');

    // report obj in constant.js

}

function showNavigationDiv(data) {
    // console.log(data);
    var NavigationreportRow = '';
    for (i=0;i<data.length;i++){
        NavigationreportRow += '<div class="col-xl-6 col-sm-6 mb-3">';
        NavigationreportRow += '<div class="card text-white bg-danger o-hidden">';
        NavigationreportRow += '<a class="card-footer text-white clearfix small z-1" href="index.php?page_name='+data[i].PageName+'&hotelId='+hotelId+'">';
        NavigationreportRow += '<span class="float-left">'+data[i].PageDisplayName+'</span>';
        NavigationreportRow += '<span class="float-right"><i class="fas fa-angle-right"></i></span>';
        NavigationreportRow += '</a>';
        NavigationreportRow += ' </div>';
        NavigationreportRow += ' </div>';
    }
    $('#notificationDiv').append(NavigationreportRow);
}