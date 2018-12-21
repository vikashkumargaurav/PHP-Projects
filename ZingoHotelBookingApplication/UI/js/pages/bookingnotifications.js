/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HotelName;
var HotelAddress;
var HotelObj ={};
$(document).ready(function () {
    makeAjax(MAIN_API_IRL + 'Dashboard/GetDashboardDataForCurrentDate/' + hotelId, 'GET', getHotelStat, auth);
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
    makeAjax(MAIN_API_IRL + 'BookingsNotificationManagers/GetBookingNMByHotelId/'+hotelId, 'GET', getBookingsNotificationManagers, auth);
})

function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName +' Hotel Booking Notifications');

}

function getHotelStat(data) {
    // console.log(data);
    $('#ExpectedCheckIn').text(data.ExpectedCheckIn);
    $('#ExpectedCheckOut').text(data.ExpectedCheckOut);
    $('#TodayBookingCount').text(data.TodayBookingCount);
    $('#totalOccupiedRoomByActiveStatus').text(data.totalOccupiedRoomByActiveStatus);

    $('#DailyARR').text(data.DailyARR);
    $('#DailyRevenueTotalCost').text(data.DailyRevenueTotalCost);
    $('#TotalAmount').text(data.TotalAmount);
    $('#SevenDayRevenueTotalCost').text(data.SevenDayRevenueTotalCost);
}

function getBookingsNotificationManagers(data) {
    data.reverse()
    // console.log(data);
    var NotificationsRow = '';
    for(i=0;i<data.length;i++){

        // conditions for booking status

        var bookingStatus = "";

        if(data[i].Booking.toUpperCase() === "ACTIVE"){

            bookingStatus = '<span class="float-right badge text-white" style="background-color: #4CAF50">' + data[i].Booking + '</span>' ;

        }else if(data[i].Booking.toUpperCase() === "QUICK"){

            bookingStatus = '<span class="float-right badge text-white" style="background-color: #fbc02d">' + data[i].Booking + '</span>' ;

        }else if(data[i].Booking.toUpperCase() === "COMPLETED"){

            bookingStatus = '<span class="float-right badge text-white" style="background-color: #FF69B4">' + data[i].Booking + '</span>' ;


        }else if(data[i].Booking.toUpperCase() === "CANCELLED"){

            bookingStatus = '<span class="float-right badge text-white" style="background-color: #F44336">' + data[i].Booking + '</span>' ;


        }else {

            bookingStatus = '<span class="float-right badge text-white" style="background-color: #F44336">' + data[i].Booking + '</span>' ;

        }


        NotificationsRow +='<div class="alert alert-secondary">';
        NotificationsRow +='<div class="row">';
        NotificationsRow +='<div class="col-md-12">';
        NotificationsRow +='<h5>'+data[i].Title+'</h5>';
        NotificationsRow +=' </div>';
        NotificationsRow +='<div class="col-md-2">';
        NotificationsRow +='<h6>'+data[i].TravellerName+'</h6>';
        NotificationsRow +=' </div>';
        NotificationsRow +='<div class="col-md-4">';
        NotificationsRow +=' <p><span>'+data[i].CheckInDate+'</span><br><span>Check In</span></p>';
        NotificationsRow +=' </div>';
        NotificationsRow +='<div class="col-md-4">';
        NotificationsRow +='<p><span>'+data[i].CheckOutDate+'</span><br><span>Check Out</span></p>';
        NotificationsRow +='</div>';
        NotificationsRow +='<div class="col-md-2">';
        NotificationsRow += bookingStatus/*'<span class="float-right badge badge-secondary">'+data[i].Booking+'</span>'*/;
        NotificationsRow +='</div>';
        NotificationsRow +='<hr>';
        NotificationsRow +='</div>';
        NotificationsRow +='</div>';


    }
    $('#NotificationsDiv').append(NotificationsRow);
}



