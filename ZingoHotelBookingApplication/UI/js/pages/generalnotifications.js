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
    $('#HotelName').text(HotelName +' Hotel General Notifications');
    makeAjax(MAIN_API_IRL + 'NotificationManger/GetNotificationManagersByHotelId/'+hotelId, 'GET', GetInventoryNotificationManagerByHotelId, auth);
}


function GetInventoryNotificationManagerByHotelId(data) {
    data.reverse()
    // console.log(data);
    var NotificationsRow = '';
    for(i=0;i<data.length;i++){
        if((data[i].NotificationText).indexOf("Dear !")!=-1){
            NotificationsRow +='<div class="alert alert-secondary">';
            NotificationsRow +='<div class="row">';
            NotificationsRow +='<div class="col-md-12">';
            NotificationsRow +='<h5> Dear '+HotelName+',</h5>';
            NotificationsRow +=' </div>';
            var notify = (data[i].NotificationText).split('=');
            NotificationsRow +='<div class="col-md-6">';
            NotificationsRow +='<h6>'+notify[notify.length-1]+'</h6>';
            NotificationsRow +=' </div>';
            var splittext = (data[i].NotificationFor).split(',');
            NotificationsRow +='<div class="col-md-6">';
            NotificationsRow +='<span class="float-right badge badge-secondary">'+splittext[splittext.length - 1]+'</span>';
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



