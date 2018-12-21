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

})

function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName +' Hotel Inventory Notifications');
    makeAjax(MAIN_API_IRL + 'NotificationManger/GetNotificationManagersByHotelId/'+hotelId, 'GET', GetInventoryNotificationManagerByHotelId, auth);
}


function GetInventoryNotificationManagerByHotelId(data) {
    data.reverse()
    // console.log(data);
    var NotificationsRow = '';
    for(i=0;i<data.length;i++){
        if(data[i].NotificationText == 'Please Update Inventory'){
            NotificationsRow +='<div class="alert alert-secondary">';
            NotificationsRow +='<div class="row">';
            NotificationsRow +='<div class="col-md-12">';
            NotificationsRow +='<h5> Dear '+HotelName+',</h5>';
            NotificationsRow +=' </div>';
            NotificationsRow +='<div class="col-md-6">';
            NotificationsRow +='<h6>'+data[i].NotificationText+'</h6>';
            NotificationsRow +=' </div>';

            NotificationsRow +='<div class="col-md-6">';
            NotificationsRow +='<span class="float-right badge badge-secondary">'+(data[i].NotificationFor).substr(6,25)+'</span>';
            NotificationsRow +='</div>';
            NotificationsRow +='<hr>';
            NotificationsRow +='</div>';
            NotificationsRow +='</div>';

        }else{
            continue;
        }


    }
    $('#NotificationsDiv').append(NotificationsRow);
}



