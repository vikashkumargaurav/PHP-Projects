/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var VALID_EMAIL = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var VALID_NAME = /^[a-zA-Z ]{2,30}$/;
var VALID_MOBILE = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
var API_IRL = 'http://zingolocals.azurewebsites.net/api/';
var DestinationId = 13;
// var BiharCityId = 2;
var BiharCityId = 14; // merabihar
var monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var MAILER_URL = "http://zingolocals.azurewebsites.net/api/Operation/SendInvoice";
var FIRSTCATID ;
var IMAGE_URL = "http://zingolocals.azurewebsites.net/";
// aid = 49;
var following = 0 ;
var Followers = 0 ;