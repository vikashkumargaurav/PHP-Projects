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
var MAIN_API_IRL = 'http://zingolocals.azurewebsites.net/api/';
var TEST_AUTHORIZATION = 'Basic emluZ29UZXN0Ojg5MDQxNTE0MDQ=';
var LOGIN_AUTH_TEST_KEY = 'Basic emluZ29ob3RlbHM6U3dvcmRmaXNoITI=';
var IMAGE_URL = "http://zingolocals.azurewebsites.net/";
var BiharCityId = 2;
var CITY_ID ;

var UserRoles = [
    {
        "UserRoleId": 1,
        "UserRoleUniqueId": "Zingo-User",
        "UserRoleName": "User"
    },
    {
        "UserRoleId": 2,
        "UserRoleUniqueId": "Zingo-Admin",
        "UserRoleName": "ZingoAdmin"
    },
    {
        "UserRoleId": 3,
        "UserRoleUniqueId": "Zingo-SuperAdmin",
        "UserRoleName": "SuperAdmin"
    }
]
var monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNameFromNo = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'

}

