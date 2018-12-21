var HotelMainObj; // stores only current selected hotel
var HotelMasterObj; // stores all list of hotel connected

$(document).ready(function () {
    makeAjax(getHotels_url1, 'GET', getHotelsDetailByFirstAPI, AUTH_KEY);
    $('#navbarSupportedContent ul li').eq(5).addClass('active');

});


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