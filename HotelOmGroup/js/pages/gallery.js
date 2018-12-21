var HotelMainObj; // stores only current selected hotel
var HotelMasterObj; // stores all list of hotel connected

$(document).ready(function () {
    makeAjax(getHotels_url1, 'GET', getHotelsDetailByFirstAPI, AUTH_KEY);
    $('#navbarSupportedContent ul li').eq(4).addClass('active');
    if(getHotelObj()){
        loadGallery(getHotelObj());
    }
});

function loadGallery(data) {

    var hotelId = data.HotelId;
    var hotelName  =  data.HotelName;
   $('#hotelNameGallery').fadeIn(2500);
   $('#htlTitle').fadeIn(3000);
   $('#hotelNameGallery').append(hotelName);


   var rowString = '';


   for(var p=0; p<12; p++){

       var mySrc = 'image/hotels/'+ hotelId +'/img'+ (p+1) + '.JPG'  ;

       rowString += '<div class="col-md-4 gallery_item">';
       rowString +=     '<div class="gallery_img">';
       rowString +=         '<img src=" ' + mySrc +  '" alt="gallery">';
       rowString +=         '<div class="hover">';
       rowString +=             '<a class="light" href="'+  mySrc + '"><i class="fa fa-expand"></i></a>'
       rowString +=         '</div>';
       rowString +=       '</div>';
       rowString +=  '</div>';

   }

    $('#gallery').empty();
    $('#gallery').append(rowString);

}















function getHotelsDetailByFirstAPI(data) {
    // console.log(data);
    if (data == '') {
        makeAjax(getHotels_url2, 'GET', getHotelsDetailBySecondAPI, AUTH_KEY);
    } else {
        setUpNav(data);
        HotelMasterObj = data ;
        if(getHotelObj()){
            HotelMainObj = getHotelObj() ;
        }else {
            var firstHotel = data[0];
            saveHotelObj(firstHotel);
            HotelMainObj = firstHotel ;
        }
        // showing hotel on top
        $('#hotelNameLi').slideDown('slow');
        $('#navHotelName').append(getHotelObj().HotelName);

    }
}

function getHotelsDetailBySecondAPI(data) {
    if(data){
        setUpNav(data);
        HotelMasterObj = data ;
        if(getHotelObj()){
            HotelMainObj = getHotelObj() ;
        }else {
            var firstHotel = data[0];
            HotelMainObj = firstHotel ;
            saveHotelObj(firstHotel);
        }

        // showing hotel on top
        $('#hotelNameLi').slideDown('slow');
        $('#navHotelName').append(getHotelObj().HotelName);
    }
}
