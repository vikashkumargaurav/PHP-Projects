/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HotelName;
var HotelAddress;
var HotelObj ={};
$(document).ready(function () {
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
    makeAjax(MAIN_API_IRL + 'RoomBooking/GetActiveBookingByHotelIdAndBookingStatus/'+hotelId+'/Active', 'GET', GetActiveBookingByHotelIdAndBookingStatus, auth);
})

function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName +' Hotel Pending Services Notifications');

}


function GetActiveBookingByHotelIdAndBookingStatus(data) {
    // console.log(data);
    data.reverse();
    var countServiceStatus = 0;
    var PendingServicesRow = '';
    // console.log(data);
    for(i=0;i<data.length;i++){
        if(data[i].servicesList.length != 0){
            for(j=0;j<data[i].servicesList.length;j++){
                if(data[i].servicesList[j].ServiceStatus == "Pending"){
                    countServiceStatus++;
                    // console.log(data[i].servicesList[j].ServiceStatus)
                    PendingServicesRow +='<div class="alert alert-secondary">';
                    PendingServicesRow +='<div class="row">';
                    PendingServicesRow +='<div class="col-md-12">';
                    PendingServicesRow +='<h5>'+data[i].servicesList[j].Description+'</h5>';
                    PendingServicesRow +=' </div>';
                    PendingServicesRow +='<div class="col-md-2">';
                    PendingServicesRow +='<h6>#'+data[i].BookingNumber+'</h6>';
                    PendingServicesRow +=' </div>';
                    PendingServicesRow +='<div class="col-md-4">';
                    PendingServicesRow +=' <p><span>'+data[i].CheckInDate+'</span><br><span>Check In</span></p>';
                    PendingServicesRow +=' </div>';
                    PendingServicesRow +='<div class="col-md-4">';
                    PendingServicesRow +='<p><span>'+data[i].CheckOutDate+'</span><br><span>Check In</span></p>';
                    PendingServicesRow +='</div>';
                    PendingServicesRow +='<div class="col-md-2">';
                    PendingServicesRow +='<span class="float-right badge badge-secondary">'+data[i].servicesList[j].ServiceStatus+'</span>';
                    PendingServicesRow +='</div>';
                    PendingServicesRow +='<hr>';
                    PendingServicesRow +='</div>';
                    PendingServicesRow +='</div>';
                }
            }
        }
    }
    if (countServiceStatus == 0) {
        PendingServicesRow += ' No Pending Services ';
    }

$('#NotificationsDiv').append(PendingServicesRow);
}



