var HotelMainObj; // stores only current selected hotel
var HotelMasterObj; // stores all list of hotel connected
var roomData = {};
var catUrl = 'http://zingoapi.azurewebsites.net/api/RoomCategories/' + RoomCatId;

$(document).ready(function () {

    makeAjax(getHotels_url1, 'GET', getHotelsDetailByFirstAPI, AUTH_KEY);

        // First we load the 1st api then after that we load the data
    // makeAjax(catUrl, 'GET', showRoomInfo, AUTH_KEY);

    $('#DeclaredRateForSingle').hide();
    $('#save').hide();
    $('#checkindate').val(getCurrentDate());
    $('#checkoutdate').val(getCurrentDateplusone());
    $('#checkindate').datepicker({
        startDate: getCurrentDate(),
        todayHighlight: getCurrentDate(),
        autoclose: true
    });
    $('#checkoutdate').datepicker();


});

function loadCatData(data) {
    // console.log(data);

    if(getHotelObj().HotelId ==111){
        $('ul div').fadeIn(500);
    }
    checkAvilable();
    showRoomInfo(data);
}

function showRoomInfo(data) {
    var hotelIdPath = 'hotel'+getHotelObj().HotelId;
    var currCatPath = 'cat'+RoomCatId;
    var imgUrl = 'image/hotels/'+ getHotelObj().HotelId + '/' +  ROOMPICTURES[hotelIdPath][currCatPath].img;

    // console.log(data);
    $('#CategoryName').text(data.CategoryName);
    $('#roomcatname').text(data.CategoryName);
    $('#Description').text(data.Description);
    $('#roomImgDiv').append('<img id="roomImg" width="100%" src="'+imgUrl+'">');
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

        makeAjax(catUrl, 'GET',loadCatData, null  );

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

        makeAjax(catUrl, 'GET',loadCatData, null  );


    }
}

function getCheckInDate(cindate) {
    var cinDate = cindate.target.value
    $('#checkoutdate').datepicker({
        minDate: getNextDayDate(cinDate),
        todayHighlight: getCurrentDate(),
        autoclose: true

    });
    $('#checkoutdate').datepicker('update', getNextDayDate(cinDate));
}
function onchangeCheckOut() {
    checkAvilable();
}

function getPriceByCatId(data) {
    // console.log(data);
    $('#CategoryPrice').text('₹ ' + data[0].SellRateForSingle + '  / Night');
}



//-----------------------------------------------------------------------------

$('#bookroomBtn').click(function () {
    var roomCatId = $('#categoryNameInput').val();
    var checkindate = $('#checkindate').val();
    var checkoutdate = $('#checkoutdate').val();
    var data = {};
    data.CheckInDate = checkindate;
    data.CheckoutDate = checkoutdate;
    data.hotelId = getHotelObj().HotelId;
    saveData(data, 'checkdate');
    window.open('booking/booking.php?roomcatId=' + RoomCatId, '_blank');
});


function checkAvilable() {
    roomCatId = RoomCatId;
    $('#mainLoader').show();
    var checkInDate = $('#checkindate').val().trim();
    var checkOutDate = $('#checkoutdate').val().trim();
    var data = JSON.stringify({
        "HotelId": getHotelObj().HotelId,
        "RoomCategoryId": roomCatId,
        "FromDate": checkInDate,
        "ToDate": checkOutDate,
    });

    // console.log(data);

    var myUrl = 'http://zingoapi.azurewebsites.net/api/Rates/GetRatesBetweenTheDatesByHotelIdAndRoomCategoryId';
    makeAjax(myUrl, 'POST', getRooomAvilabilityPrice, data);
}

function getRooomAvilabilityPrice(data) {
    // console.log(data);
    for (i = 0; i < data.length; i++) {
//        console.data[i].SellRateForSingle;
        if ((data[0].DeclaredRateForSingle) == (data[0].SellRateForSingle)) {
            $('#showPrice').show();
            $('#showPrice').text('   ₹ ' + data[0].SellRateForSingle + '/ Night');
        } else {
            var savings = (data[0].DeclaredRateForSingle) - (data[0].SellRateForSingle);
            $('#showPrice').show();
            $('#DeclaredRateForSingle').show();
            $('#DeclaredRateForSingle').text('₹ ' + data[0].DeclaredRateForSingle);
            $('#showPrice').text('   ₹ ' + data[0].SellRateForSingle + ' / night');
            $('#saving').text('Save ₹ ' + savings);
        }
    }
}

















