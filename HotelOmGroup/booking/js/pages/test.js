/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    // console.log('edhweiwihd ')
    var data = new FormData();
    data.append('TravellerId',11);
    data.append('EmailAddress','nishant@zingohotels.com');
    data.append('BookingNumber','180806112538');
    data.append('HotelId','42');
    data.append('CheckInDate','08/06/2018');
    data.append('CheckOutDate','"08/07/2018');
    data.append('RoomNo',0);

      var files = $("#fileUpload").get(0).files;

      // Add the uploaded image content to the form data collection
      if (files.length > 0) {
          data.append("UploadedImage", files[0]);
        
      }

      // Make Ajax request with the contentType = false, and procesDate = false
      var ajaxRequest = $.ajax({
           type: "POST",
           url: "/api/Upload/user/PostHotelImage",
           contentType: false,
           processData: false,
           data: data
           });

      ajaxRequest.done(function (xhr, textStatus) {
          alert(xhr);
             });
})