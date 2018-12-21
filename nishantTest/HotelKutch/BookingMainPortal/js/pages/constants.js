/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HOTEL_ID;
var HOTEL_NAME ;
var LOCATION;
var DEFAULT_ROOM_CAT = 29;
var ROOM_CAT_URL = 'http://zingoapi.azurewebsites.net/api/RoomCategories/GetRoomCategoriesByHotelId/'+HOTEL_ID;
var authStatus = 'false';
var VALID_EMAIL = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var MAX_ROOM_LIMIT = 4;
var VALID_NAME = /^[a-zA-Z ]{2,30}$/;
var MAX_ADULTS_LIMITS = 3;
var MAX_CHILDRENS_LIMITS = 2;
var Authorization = 'Basic TW9obmlBdmQ6ODIyMDgxOTcwNg==';
var TEST_API_URL = 'http://zingotesting.azurewebsites.net/api/';
var MAIN_API_IRL = 'http://zingoapi.azurewebsites.net/api/';
var TEST_AUTHORIZATION = 'Basic emluZ29UZXN0Ojg5MDQxNTE0MDQ=';
var HOTEL_CATEGORYBYID = 'RoomCategories/GetRoomCategoriesByHotelId/';

