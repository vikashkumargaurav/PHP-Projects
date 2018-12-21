$('document').ready(function () {
    makeAjax(API_URL+'RoomBookings/GetAllRoomBookingsByTravellerId/'+aid,'GET',getAllBookingsByTravellerId,AUTH_KEY);
})


function getAllBookingsByTravellerId(data) {
    var bookingRow = '';
    console.log(data);
    for(i=0;i<data.length;i++){
        bookingRow += '<div class="row bg-white has-shadow" data-toggle="modal" data-target="#exampleModal" onclick="getBookingDetailsByBookingId(' + data[i].BookingId + ')">';
        bookingRow += '<div class="left-col col-lg-6 d-flex align-items-center justify-content-between">';
        bookingRow += '<div class="project-title d-flex align-items-center">';
        bookingRow += '<div class="image has-shadow"><img src="img/myimg/icon_hotel.png" alt="..." class="img-fluid"></div>';
        bookingRow += '<div class="text">';
        if(data[i].BookingStatus == 'Active'){
            bookingRow += '<h3 class="h4"><span class="badge badge-success">'+data[i].BookingStatus+'</span></h3><small>Booking Id :'+data[i].BookingId+'</small>';
        }else if(data[i].BookingStatus == 'Cancelled'){
            bookingRow += '<h3 class="h4"><span class="badge badge-danger">'+data[i].BookingStatus+'</span></h3><small>Booking Id :'+data[i].BookingId+'</small>';
        }else{
            bookingRow += '<h3 class="h4"><span class="badge badge-warning">'+data[i].BookingStatus+'</span></h3><small>Booking Id :'+data[i].BookingId+'</small>';
        }

        bookingRow += '</div>';
        bookingRow += '</div>';
        bookingRow += '<div class="project-date"><strong>'+convertDateNumDateToMonthNameFormate(data[i].CheckInDate)+'</strong><br><span>Check-In</span></div>';
        bookingRow += '</div>';

        bookingRow += '<div class="right-col col-lg-6 d-flex align-items-center">';
        bookingRow += '<div class="time"><strong>'+convertDateNumDateToMonthNameFormate(data[i].CheckOutDate)+'</strong><br><span>Check-Out</span></div>';
        bookingRow += '<div class="comments">'+numOfDaysBeteenDates(data[i].CheckInDate,data[i].CheckOutDate)+' Nights</div>';
        bookingRow += '<div class="project-progress">';
        // bookingRow += '<div class="progress">';
        bookingRow += '<div class="date text-center"><strong>'+data[i].RoomCategory+'</strong><br><span>Room Type</span></div>';
        bookingRow += '</div>';
        // bookingRow += '</div>';
        bookingRow += '<div class="project-date"><strong>'+convertDateNumDateToMonthNameFormate(data[i].BookingDate)+'</strong><br><span>BookingDate</span></div>';
        bookingRow += '</div>';
        bookingRow += '</div>';

    }
    $('#BookingsDiv').append(bookingRow);
}


function getBookingDetailsByBookingId(data) {
    console.log(data);

}