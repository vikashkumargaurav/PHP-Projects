var HotelMainObj; // stores only current selected hotel
var HotelMasterObj; // stores all list of hotel connected

$(document).ready(function () {
    makeAjax(getHotels_url1, 'GET', getHotelsDetailByFirstAPI);
    $('#navbarSupportedContent ul li').eq(7).addClass('active');

    setUpContactPage();
});


function getHotelsDetailByFirstAPI(data) {
    // console.log(data);
    if (data == '') {
        makeAjax(getHotels_url2, 'GET', getHotelsDetailBySecondAPI);
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

        if(getHotelObj().HotelName){
            $('#navHotelName').append(getHotelObj().HotelName);
        }
        // setting up adress
        var hotelUrl = MAIN_API_IRL + 'Hotels/' + getHotelObj().HotelId;
        makeAjaxWithoutLoader(hotelUrl, 'GET', setUpContactPage);
    }




}

function setUpContactPage(data) {

    if(data){
        var mapObj = "";
        var placeName = "";
        var locality = "";
        var city = "";
        var pinCode = "";
        if(data.PlaceName){
            placeName = data.PlaceName;
        }
        if(data.Locality){
            locality = data.Locality;
        }
        if(data.City){
            city = data.City;
        }
        if(data.PinCode){
            pinCode = data.PinCode;
        }
        if(getHotelObj().HotelName) {
            $('#hotelName').fadeIn();
            $('#hotelName').append(getHotelObj().HotelName);
        }
        $('#addressMain').append(placeName +  locality  +  city + ", " + pinCode);
        $('#addressMain').fadeIn();

        setUpGoogleMaps(data.maps[0].Latitude, data.maps[0].Logitude,data.DisplayName );

    }

}


function setUpGoogleMaps(lat, long, name) {

    var $lat,$lon;

    if(!lat || !long){
         $lat = "14.547306";
         $lon = "74.319068";
    }

        $lat = lat;
        $lon = long;
        var $zoom = $('#mapBox').data('zoom');

        var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: true,
            scaleControl: true,
            streetViewControl: true,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            zoom: $zoom,
            mapType: "hybrid",
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dcdfe6"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "color": "#808080"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#dcdfe6"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ebebeb"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#efefef"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#737373"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                }
            ]
        });

    map.addMarker({
        lat: $lat,
        lng: $lon,
        title: name,
    });

}








