function loadRoomTypeDetails(data) {



    var hotelIdPath = 'hotel'+getHotelObj().HotelId;
    var roomRow = "" ;
    for(var i=(data.length-1);i>=0; i--){

        var currCatPath = 'cat'+data[i].RoomCategoryId;
        var varimgUrl = 'image/hotels/'+ getHotelObj().HotelId + '/' +  ROOMPICTURES[hotelIdPath][currCatPath].img;

        roomRow += '<div class="col-md-4 gallery_item">';
        roomRow += '<div class="accomodation_item text-center">';
        roomRow += '<div class="hotel_img">' ;
        roomRow += '<img class="img-responsive"  src="'+ varimgUrl   + '" alt="'+ data[i].CategoryName +'">';
        roomRow += '<a href="#"  onclick="bookCurrRoom(' +data[i].RoomCategoryId+ ')"  class="btn theme_btn button_hover">Book Now</a>'
        roomRow += '</div>';
        roomRow += '<a href="#"><h4 class="sec_h4"> '  +  data[i].CategoryName   +   ' </h4></a>';
        roomRow += '<h5 style="display: none" id="myPrice' + data[i].RoomCategoryId  +'"></h5>' ;
        roomRow += '</div>';
        roomRow += '</div>';
    }
    $('#roomTypeDiv').empty();
    $('#roomTypeDiv').append(roomRow);
    setPriceForEachCat(data);

}


function bookCurrRoom(data) {
    var roomcatId = data;
    // console.log(roomcatId);
    window.location.href = 'showroom.php?roomcatId=' + roomcatId;
}

function showComplimentryBuffet(cin, cout) {

    if(getHotelObj().HotelId == 111) {
        if (new Date(cin) >= (new Date('12-25-2018')) && new Date(cout) <= (new Date('01-02-2019'))) {
            $('#complementaryServices').slideDown(500);
        }
        else {
            $('#complementaryServices').fadeOut(500);
        }
    }

}

function setPriceForEachCat(data) {

    // console.log(data);

    var myUrl = 'http://zingoapi.azurewebsites.net/api/Rates/GetRatesBetweenTheDatesByHotelIdAndRoomCategoryId';
    var checkInDate = getCurrentDate();
    var checkOutDate = getCurrentDateplusone();


    for(var p=0; p<data.length; p++){

        var catId = data[p].RoomCategoryId;
        var hotelId = data[p].HotelsId;

        var dataForPrice = JSON.stringify({
            "HotelId": hotelId,
            "RoomCategoryId": catId,
            "FromDate": checkInDate,
            "ToDate": checkOutDate
        });

        // console.log('mypostdata', dataForPrice);
        // console.log('mypostdata', myUrl);


        makeAjaxWithoutLoader(myUrl, 'POST', showPrice, dataForPrice);
    }

}

function showPrice(data) {
    // console.log('for pricing',data);
    if(data.length>0){
        var currId = '#myPrice'+data[0].RoomCategoryId;
        var price = data[0].SellRateForSingle;

        $(currId).append( '₹' + price   + '<small>/night</small>')
        $(currId).fadeIn(2000);
    }
}
