var initialRoomCatId;
var HotelMainObj; // stores only current selected hotel
var HotelMasterObj; // stores all list of hotel connected

$('document').ready(function () {
    makeAjax(getHotels_url1, 'GET', getHotelsDetailByFirstAPI, AUTH_KEY);
    $('#navbarSupportedContent ul li').eq(3).addClass('active');

    $('#checkindate').val(getCurrentDate());
    $('#checkoutdate').val(getCurrentDateplusone());

    $('#checkindate').datepicker({
        startDate: getCurrentDate(),
        todayHighlight: getCurrentDate(),
        autoclose: true,
    });
    $('#checkoutdate').datepicker();

});

function getHotelsDetailByFirstAPI(data) {
    // console.log(data);
    if (data == '') {
        makeAjax(getHotels_url2, 'GET', getHotelsDetailBySecondAPI, AUTH_KEY);
    } else {
//        console.log(data);
        setUpNav(data);
        if (getHotelObj()) {
            HotelMainObj = getHotelObj();
            loadRoomCat(getHotelObj());
        } else {
            var firstHotel = data[0];
            saveHotelObj(firstHotel);
            HotelMainObj = firstHotel;
            loadRoomCat(getHotelObj());
        }
    }
}

var secondApiDataLength = '';

function getHotelsDetailBySecondAPI(data) {

    if (data) {
        secondApiDataLength = data.length;
        setUpNav(data);
        HotelMasterObj = data;
        if (getHotelObj()) {
            loadRoomCat(getHotelObj());
        } else {
            // console.log(data);
            var firstHotel = data[0];
            saveHotelObj(firstHotel);
            loadRoomCat(getHotelObj());
            HotelMainObj = data;
        }
    }
}

function loadRoomCat(data) {
    getRoomCategories(data.HotelId);
    $('#hotelNameLi').slideDown('slow');
    $('#navHotelName').append(data.HotelName);
}

function getRoomCategories(hotelId) {
    var roomCatUrl = ROOM_CAT_URL + hotelId;
    makeAjax(roomCatUrl, 'GET', getOnLoadRoomCat);
}

function getOnLoadRoomCat(data) {
    // if atleast one room category is available
    if (data.length > 0) {

        initialRoomCatId = data[0].RoomCategoryId;
        checkAvilable();

        $.each(data, function (i, data) {
            $('#categoryNameInput').append($("<option style='color: #777777; background-color: #04091e'></option>")
                .attr("value", data.RoomCategoryId)
                .text(data.CategoryName));
        });
        loadRoomTypeDetails(data);

    }
}

function checkAvilable() {
    var roomCatId;
    if ($('#categoryNameInput').children('option').length <= 1) {
        roomCatId = initialRoomCatId;
    } else {
        roomCatId = $('#categoryNameInput').val();
    }
    getCategoryNameByCategoryId(roomCatId);
    $('#mainLoader').show();
    var checkInDate = $('#checkindate').val().trim();
    var checkOutDate = $('#checkoutdate').val().trim();

    showComplimentryBuffet(checkInDate, checkOutDate);


    var data = JSON.stringify({
        "HotelId": getHotelObj().HotelId,
        "RoomCategoryId": roomCatId,
        "FromDate": checkInDate,
        "ToDate": checkOutDate
    });
    var temp_url = 'http://zingoapi.azurewebsites.net/api/Rates/GetRatesBetweenTheDatesByHotelIdAndRoomCategoryId';
    makeAjax(temp_url, 'POST', getRooomAvilabilityPrice, data);
}

function getRooomAvilabilityPrice(data) {
    // console.log(data);
    for (i = 0; i < data.length; i++) {
//        console.data[i].SellRateForSingle;
        if ((data[0].DeclaredRateForSingle) == (data[0].SellRateForSingle)) {
            $('#showPrice').show();
            $('#DeclaredRateForSingle').hide();
            $($('#saving')).hide();
            $('#showPrice').text('   ₹ ' + data[0].SellRateForSingle + " /night");
        } else {
            var savings = (data[0].DeclaredRateForSingle) - (data[0].SellRateForSingle);
            $('#showPrice').show();
            $('#DeclaredRateForSingle').show();
            $('#DeclaredRateForSingle').text('₹ ' + data[0].DeclaredRateForSingle + ' /night');
            $('#showPrice').text('   ₹ ' + data[0].SellRateForSingle + " only");
            $('#saving').text('Save ₹ ' + savings);
        }
    }
    if (!data.length > 0) {
        $('#roomcatname').hide();
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


// when category is changed
function onchangeRoomCategory(categoryId) {
    var categoryId = categoryId.target.value;
    // getCategoryNameByCategoryId(categoryId);
    checkAvilable();
}

function getCategoryNameByCategoryId(categoryId) {
    var temp_url = 'http://zingoapi.azurewebsites.net/api/RoomCategories/' + categoryId;
    makeAjax(temp_url, 'GET', printCategoryName);
}

function printCategoryName(data) {
    $('#roomcatname').show();
    $('#roomcatname').text(data.CategoryName);
}

function onchangeCheckOut() {
    checkAvilable();
}

// Transferring to the payment link
$('#getDate').click(function () {

    var catVal = ($('#categoryNameInput').val());

    if   (!(catVal == 'Room Category')) {

        var roomCatId =   catVal;
        var checkindate = $('#checkindate').val();
        var checkoutdate = $('#checkoutdate').val();
        var data = {};
        data.CheckInDate = checkindate;
        data.CheckoutDate = checkoutdate;
        data.hotelId = getHotelObj().HotelId;
        saveData(data, 'checkdate');

        window.open('booking/booking.php?roomcatId=' + roomCatId, '_blank');
    }else {
        alert('Please select room category')
    }
});




























