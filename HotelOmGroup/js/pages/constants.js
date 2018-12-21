/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var PROFILE_ID = 239;
var AUTH_KEY = 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg==';
var MAIN_API_IRL = 'http://zingoapi.azurewebsites.net/api/';
var GET_HOTELS_DETAILS_1_API = 'ProfileHotelMapping/GetHotelIdByProfileId/';
var GET_HOTELS_DETAILS_2_API = 'Profiles/GetHotelsByProfileId/';
var getHotels_url1 = MAIN_API_IRL + '' + GET_HOTELS_DETAILS_1_API + '' + PROFILE_ID; // mappingprofileurl
var getHotels_url2 = MAIN_API_IRL + '' + GET_HOTELS_DETAILS_2_API + '' + PROFILE_ID; // mappingprofileurl
var ROOM_CAT_URL = 'http://zingoapi.azurewebsites.net/api/RoomCategories/GetRoomCategoriesByHotelId/';


//var DEFAULT_ROOM_CAT = 29;
var authStatus = 'false';
var VALID_EMAIL = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var MAX_ROOM_LIMIT = 4;
var VALID_NAME = /^[a-zA-Z ]{2,30}$/;
var MAX_ADULTS_LIMITS = 3;
var MAX_CHILDRENS_LIMITS = 2;
var Authorization = 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg==';
var TEST_API_URL = 'http://zingotesting.azurewebsites.net/api/RoomCategories/GetRoomCategoriesByHotelId/';
var MAIN_API_IRL = 'http://zingoapi.azurewebsites.net/api/';
var TEST_AUTHORIZATION = 'Basic emluZ29UZXN0Ojg5MDQxNTE0MDQ=';


var ROOMPICTURES =
    {
        "hotel111": {
            "cat144": {
                "type": "Executive With Balcony",
                "img": "img2.jpg"
            },
            "cat145": {
                "type": "Delux Room",
                "img": "img10.jpg"
            },
            "cat146": {
                "type": "Delux Non AC",
                "img": "img9.jpg"
            }
        },
        "hotel112": {
            "cat147": {
                "type": "Deluxe Non AC",
                "img": "img9.jpg"
            },
            "cat148": {
                "type": "Delux AC",
                "img": "img8.jpg"
            },
            "cat149": {
                "type": "Family",
                "img": "img6.jpg"
            }
        },
        "hotel113": {
            "cat150": {
                "type": "Beach House NON AC ",
                "img": "img6.jpg"
            },
            "cat151": {
                "type": "Beach Cottage ",
                "img": "img10.jpg"
            },
            "cat152": {
                "type": "Mud House",
                "img": "img4.jpg"
            }
        }
    };









