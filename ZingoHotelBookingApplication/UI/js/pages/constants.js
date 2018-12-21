/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HOTEL_ID;
var authStatus = 'false';
var VALID_EMAIL = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var MAX_ROOM_LIMIT = 4;
var VALID_NAME = /^[a-zA-Z ]{2,30}$/;
var Authorization = 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg==';
// var TEST_API_URL = 'http://zingotesting.azurewebsites.net/api/';
var MAIN_API_IRL = 'http://zingoapi.azurewebsites.net/api/';
var TEST_AUTHORIZATION = 'Basic emluZ29UZXN0Ojg5MDQxNTE0MDQ=';
var LOGIN_AUTH_TEST_KEY = 'Basic emluZ29ob3RlbHM6U3dvcmRmaXNoITI=';
var LOGIN_API_URL = 'Profiles/GetProfileByUserNameAndPassword'; // POST
var GET_PROFILE_URL = 'Profiles/';    //{profleId}
var GET_HOTELS_DETAILS_1_API = 'ProfileHotelMapping/GetHotelIdByProfileId/'
var GET_HOTELS_DETAILS_2_API = 'Profiles/GetHotelsByProfileId/';
// if in both api we get a empty response the show no hotel found based on this profiles and give alert download hotel app
// above need to show in alert

var Premium = [
    {
        "PageName": "quickbooking",
        "PageDisplayName": " Book Now"

    }, {
        "PageName": "bookinglists",
        "PageDisplayName": "All Booking "

    }, {
        "PageName": "searchbookings",
        "PageDisplayName": "Search Bookings "

    }, {
        "PageName": "pendingcheckout",
        "PageDisplayName": "Pending Checkout"

    }, {
        "PageName": "pendingservices",
        "PageDisplayName": "Pending Services"

    }, {
        "PageName": "report",
        "PageDisplayName": "Report"

    }, {
        "PageName": "accounting",
        "PageDisplayName": "Accounting"

    }, {
        "PageName": "gstcalculator",
        "PageDisplayName": "GST Calculator"

    }, {
        "PageName": "notifications",
        "PageDisplayName": "Notifications"

    },{
        "PageName": "QuickSearch",
        "PageDisplayName": "QuickSearch"

    }

]


var luci_office = [
    {
        "PageName": "quickbooking",
        "PageDisplayName": " Book Now"

    }, {
        "PageName": "bookinglists",
        "PageDisplayName": "All Booking "

    }, {
        "PageName": "searchbookings",
        "PageDisplayName": "Search Bookings "

    }, {
        "PageName": "pendingcheckout",
        "PageDisplayName": "Pending Checkout"

    }, {
        "PageName": "pendingservices",
        "PageDisplayName": "Pending Services"

    },  {
        "PageName": "gstcalculator",
        "PageDisplayName": "GST Calculator"

    }, {
        "PageName": "notifications",
        "PageDisplayName": "Notifications"

    },{
        "PageName": "QuickSearch",
        "PageDisplayName": "QuickSearch"

    }

];


var Basic = [{
    "PageName": "quickbooking",
    "PageDisplayName": " Book Now"

}, {
    "PageName": "pendingcheckout",
    "PageDisplayName": "Pending Checkout"

}, {
    "PageName": "report",
    "PageDisplayName": "Report"

}, {
    "PageName": "accounting",
    "PageDisplayName": "Accounting"

}, {
    "PageName": "gstcalculator",
    "PageDisplayName": "GST Calculator"

}, {
    "PageName": "notifications",
    "PageDisplayName": "Notifications"

}, {
    "PageName": "changepassword",
    "PageDisplayName": "Change Password"
}
, {
        "PageName": "QuickSearch",
        "PageDisplayName": "QuickSearch"
    }

]
var Report = [{
    "PageName": "occupancyreport",
    "PageDisplayName": "Occupancy Report"

}, {
    "PageName": "cashierreport",
    "PageDisplayName": "Cashier Report"

}, {
    "PageName": "bookingreport",
    "PageDisplayName": "Booking Report"

}, {
    "PageName": "advancebooking",
    "PageDisplayName": "Advance Booking Report"

}
]
var NotificationsData = [{
    "PageName": "bookingnotifications",
    "PageDisplayName": "Booking Notifications "

}, {
    "PageName": "competitivenotifications",
    "PageDisplayName": "Competitive Analysis  Notifications"

}, {
    "PageName": "inventorynotifications",
    "PageDisplayName": "Inventory Notifications"

}, {
    "PageName": "generalnotifications",
    "PageDisplayName": "General Notifications"

}
]


var B2B = [{
    "BookingSourceId": 1,
    "BookingSourceName": "CORPORATE"

}, {
    "BookingSourceId": 2,
    "BookingSourceName": "BOSH"

}, {
    "BookingSourceId": 3,
    "BookingSourceName": "TA"

}, {
    "BookingSourceId": 4,
    "BookingSourceName": "OTHER"

}
]

var PaymentMode = {
    "OTA": [{
        "PaymentModeId": 1,
        "PaymentModeName": "PaY@Hotel"
    }, {
        "PaymentModeId": 2,
        "PaymentModeName": "PREPAID/ONLINE"
    }],
    "B2B": [{
        "PaymentModeId": 1,
        "PaymentModeName": "PaY@Hotel"
    }, {
        "PaymentModeId": 2,
        "PaymentModeName": "PREPAID/ONLINE"
    }, {
        "PaymentModeId": 3,
        "PaymentModeName": "BTC PREPAID"
    }, {
        "PaymentModeId": 4,
        "PaymentModeName": "BTC POSTPAID"
    }, {
        "PaymentModeId": 5,
        "PaymentModeName": "PARTPAYMENT"
    }]
}

var OTA = [{
    "BookingSourceId": 1,
    "BookingSourceName": "MAKEMY TRIP"

}, {
    "BookingSourceId": 2,
    "BookingSourceName": "YATRA/TG"

}, {
    "BookingSourceId": 3,
    "BookingSourceName": "EXPEDIA"

}, {
    "BookingSourceId": 4,
    "BookingSourceName": "BOOKING.COM"

}, {
    "BookingSourceId": 5,
    "BookingSourceName": "GOIBIBO"

}, {
    "BookingSourceId": 6,
    "BookingSourceName": "AGODA"

},
    {
        "BookingSourceId": 7,
        "BookingSourceName": "CLEARTRIP"

    },
    {
        "BookingSourceId": 8,
        "BookingSourceName": "VIA"

    }
]

var OFFLINE = [{
    "BookingSourceId": 1,
    "BookingSourceName": "WALK IN"

}, {
    "BookingSourceId": 2,
    "BookingSourceName": "ZINGO DIRECT"

}, {
    "BookingSourceId": 3,
    "BookingSourceName": "Other"

}
]
var RatePlane = [{
    "RatePlane": "CP",
    "Inclusion": "BreakFast,WiFi,Taxes"
},
    {
        "RatePlane": "EP",
        "Inclusion": "Room Only,Taxes"
    },
    {
        "RatePlane": "CP",
        "Inclusion": "BreakFast,Lunch,DInner,Taxes"
    },
    {
        "RatePlane": "MAP",
        "Inclusion": "BreakFast,Lunch/Dinner,Taxes"
    }
]