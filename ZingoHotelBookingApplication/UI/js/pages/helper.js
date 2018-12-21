/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//localName is the local storage variable name
function getAuthKey(username, mobile) {
    var data = btoa(username + ':' + mobile);
    return ('Basic ' + data);
}
function saveData(data, localName) {
    var data = data;
    //converts to JSON string the Object
    account = JSON.stringify(data);
    //creates a base-64 encoded ASCII string
    account = btoa(account);
    //save the encoded accout to web storage
    localStorage.setItem(localName, account);
}

//localName is the local storage variable name

function loadData(localName) {
    var account = localStorage.getItem(localName);
//    if (!account)
//        return false;
    localStorage.removeItem(localName);
    //decodes a string data encoded using base-64
    account = atob(account);
    //parses to Object the JSON string
    account = JSON.parse(account);
    //do what you need with the Object
    return account;
}

function saveDataforSessionInLocal(localName) {
    var account = localStorage.getItem(localName);
//    if (!account)
//        return false;
//     localStorage.removeItem(localName);
    //decodes a string data encoded using base-64
    account = atob(account);
    //parses to Object the JSON string
    account = JSON.parse(account);
    //do what you need with the Object
    return account;
}

function saveUserPositionData(position) {
    localStorage.setItem("ownerPosition", position);
}

function getUserPositionData(){
    return localStorage.getItem('ownerPosition');
}

function removeUserPositionData() {
 localStorage.removeItem('ownerPosition');
}


// redirect too dashboard after nishant
function redirectToDashBoard(){
    window.location.href = 'index.php?page_name=hotel&hotelId=' + hotelId;
}



function removeSessionDataFromLocal(localName) {
    localStorage.removeItem(localName);
}

function getCurrentDateplusone() {
    var date = new Date();
    var t = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    var dd = (t.getDate() < 10 ? '0' : '') + t.getDate();
    var mm = ((t.getMonth() + 1) < 10 ? '0' : '') + (t.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    var yy = t.getFullYear();
    var tomorrow = mm + '/' + dd + '/' + yy;
    return tomorrow

}
function getPreviousMonthdayDate() {
    var date = new Date();
    var t = new Date(date.getTime());
    var dd = (t.getDate() < 10 ? '0' : '') + t.getDate();
    var mm = ((t.getMonth() ) < 10 ? '0' : '') + (t.getMonth());
    // 1970, 1971, ... 2015, 2016, ...
    var yy = t.getFullYear();
    var month = mm + '/' + dd + '/' + yy;
    return month
}

function getAfterOneMonthdayDate() {
    var date = new Date();
    var t = new Date(date.getTime());
    var dd = (t.getDate() < 10 ? '0' : '') + t.getDate();
    var mm = ((t.getMonth() + 2) < 10 ? '0' : '') + (t.getMonth() + 2);
    // 1970, 1971, ... 2015, 2016, ...
    var yy = t.getFullYear();
    var month = mm + '/' + dd + '/' + yy;
    return month
}
function getYesterdayDate() {
    var date = new Date();
    var t = new Date(date.getTime() - 24 * 60 * 60 * 1000);
    var dd = (t.getDate() < 10 ? '0' : '') + t.getDate();
    var mm = ((t.getMonth() + 1) < 10 ? '0' : '') + (t.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    var yy = t.getFullYear();
    var yesterday = mm + '/' + dd + '/' + yy;
    return yesterday
}
function getNextDayDate(date) {
    var date = new Date(date);
    var t = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    var dd = (t.getDate() < 10 ? '0' : '') + t.getDate();
    var mm = ((t.getMonth() + 1) < 10 ? '0' : '') + (t.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    var yy = t.getFullYear();
    var tomorrow = mm + '/' + dd + '/' + yy;
    return tomorrow
}

function getPhoneNumberFromUserInput() {
    return document.getElementById('phone').value;
}
function getCountryCode() {
    return $("#countryCode option:selected").val();
}
function getPhoneNumberWithCountryCode() {
    var number = '+' + getCountryCode() + getPhoneNumberFromUserInput();
    return number;
}
/**
 * Returns true if the phone number is valid.
 */
function isPhoneNumberValid() {
    var pattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    var phoneNumber = getPhoneNumberWithCountryCode();
    if (phoneNumber.match(pattern)) {
        return 1;
    } else {
        return 0;
    }
//    return phoneNumber.search(pattern) !== -1;
}

function makeAjax(url, type, funname, auth, data = null) {
    if (type == 'POST') {
        $('#mainLoader').show();
        $.ajax({
            url: url,
            type: type,
            headers: {Authorization: auth},
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: 'json',
            success: function (data) {
                $('#mainLoader').hide();
                funname(data);
            }
        }).fail(function () {
            console.log('fail');
            $('#mainLoader').hide();

        })
    }else if (type == 'PUT') {
        $('#mainLoader').show();
        $.ajax({
            url: url,
            type: type,
            headers: {Authorization: auth},
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: 'json',
            success: function (data) {
                $('#mainLoader').hide();
                funname(data);
            }
        }).fail(function () {
            console.log('fail');
            $('#mainLoader').hide();

        })
    } else if (type == 'GET') {
        $('#mainLoader').show();
        return $.ajax({
            url: url,
            type: type,
            headers: {Authorization: auth},
            dataType: 'json',
            success: function (data) {
                $('#mainLoader').hide();
                funname(data);
            }
        }).fail(function () {
            console.log('fail');
            $('#mainLoader').hide();
            //console.log(data);
        })
    } else {
        $('#mainLoader').hide();
        alert('sorry wrong method');
}

}

function makeAjaxWithoutLoader(url, type, funname, auth, data = null) {
    if (type == 'POST') {
        // $('#mainLoader').show();
        $.ajax({
            url: url,
            type: type,
            headers: {Authorization: auth},
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: 'json',
            success: function (data) {
                // $('#mainLoader').hide();
                funname(data);
            }
        }).fail(function () {
            console.log('fail');
            // $('#mainLoader').hide();

        })
    }else if (type == 'PUT') {
        // $('#mainLoader').show();
        $.ajax({
            url: url,
            type: type,
            headers: {Authorization: auth},
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: 'json',
            success: function (data) {
                // $('#mainLoader').hide();
                funname(data);
            }
        }).fail(function () {
            console.log('fail');
            // $('#mainLoader').hide();

        })
    } else if (type == 'GET') {
        // $('#mainLoader').show();
        return $.ajax({
            url: url,
            type: type,
            headers: {Authorization: auth},
            dataType: 'json',
            success: function (data) {
                // $('#mainLoader').hide();
                funname(data);
            }
        }).fail(function () {
            console.log('fail');
            // $('#mainLoader').hide();
            //console.log(data);
        })
    } else {
        $('#mainLoader').hide();
        alert('sorry wrong method');
    }

}



















function makeAlert(type, msg) {

    $('#makeAlert').show();
    if (type == 'warning') {
        $('#makeAlert').addClass("alert-warning");
        $('#makeAlert').html("<strong>Warning! </strong>" + msg);
    } else if (type == 'info') {
        $('#makeAlert').addClass("alert-info");
        $('#makeAlert').html("<strong>info! </strong> " + msg);
    } else if (type == 'danger') {
        $('#makeAlert').addClass("alert-danger");
        $('#makeAlert').html("<strong>danger! </strong> " + msg);
    } else {
        $('#makeAlert').addClass("alert-success");
        $('#makeAlert').html("<strong>success! </strong> " + msg);
    }
    setTimeout(function () {
        $("#makeAlert").hide();
    }, 3000);
}

function twelveHourFormatCurrentTime() {
    // 01, 02, 03, ... 29, 30, 31
    var date = new Date();
    var hours = date.getHours();
    var min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    var hours = (hours + 24) % 24;
    var mid = 'AM';
    if (hours == 0) { //At 00 hours we need to show 12 am
        hours = 12;
    } else if (hours > 12)
    {
        hours = hours % 12;
        mid = 'PM';
    }
    return (hours + ':' + min + ' ' + mid);
}

function toDigitFormatDate() {
    // 01, 02, 03, ... 29, 30, 31
    var date = new Date();
    var DD = (date.getDate() < 10 ? '0' : '') + date.getDate();
    // 01, 02, 03, ... 10, 11, 12
    var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    var YY = date.getFullYear().toString().substr(-2);

    // create the format you want
    return (YY + '' + MM + '' + DD);
}

function generateBookingNo() {
    var d = new Date();
    var hh = d.getHours();
    var mm = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    var ss = d.getSeconds();
    var current_time = hh + '' + mm + '' + ss;

    //console.log(current_date);
    return toDigitFormatDate() + '' + current_time;
}
function getCurrentTime() {
    var d = new Date();
    var hh = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();
    var current_time = hh + ':' + mm + ':' + ss;
    return current_time;
}

function getCurrentDate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1);
    var day = (d.getDate() < 10 ? '0' : '') + d.getDate();
    var current_date = month + '/' + day + '/' + year;
    //console.log(current_date);
    return current_date;
}

function makeDateFormated(date) {
    var d = new Date(date);
    var year = d.getFullYear();
    var month = ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1);
    var day = (d.getDate() < 10 ? '0' : '') + d.getDate();
    var current_date = month + '/' + day + '/' + year;
    //console.log(current_date);
    return current_date;
}

//function getCurrentDateplusone() {
//    var d = new Date();
//    var year = d.getFullYear();
//    var month = ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1);
//    var day = (d.getDate() < 10 ? '0' : '') + d.getDate();
//    var nextDay = parseInt(day) + 1;
//    var current_date_plue_one = month + '/' + nextDay + '/' + year;
//    //console.log(current_date);
//    return current_date_plue_one;
//}

function numOfDaysBeteenDates(checkInDate, checkOutDate) {
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    }

    function datediff(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }

    var days = datediff(parseDate(checkInDate), parseDate(checkOutDate));
    return days;
}


function isValidDateFormate(txtDate)
{
    var currVal = txtDate;
    if(currVal == '')
        return false;

    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?

    if (dtArray == null)
        return false;

    //Checks for mm/dd/yyyy format.
    dtMonth = dtArray[1];
    dtDay= dtArray[3];
    dtYear = dtArray[5];

    if (dtMonth < 1 || dtMonth > 12)
        return false;
    else if (dtDay < 1 || dtDay> 31)
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
        return false;
    else if (dtMonth == 2)
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap))
            return false;
    }
    return true;
}


function getLastWeek() {
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return lastWeek;
}
function getAfterOneWeek() {
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    return lastWeek;
}
function LastWeekDate() {
    var lastWeek = getLastWeek();
    var lastWeekMonth = lastWeek.getMonth() + 1;
    var lastWeekDay = lastWeek.getDate();
    var lastWeekYear = lastWeek.getFullYear();

    var lastWeekDisplay = lastWeekMonth + "/" + lastWeekDay + "/" + lastWeekYear;
    var lastWeekDisplayPadded = ("00" + lastWeekMonth.toString()).slice(-2) + "/" + ("00" + lastWeekDay.toString()).slice(-2) + "/" + ("0000" + lastWeekYear.toString()).slice(-4);
    return lastWeekDisplayPadded;
}

function AfterOneWeekDate() {
    var lastWeek = getAfterOneWeek();
    var lastWeekMonth = lastWeek.getMonth() + 1;
    var lastWeekDay = lastWeek.getDate();
    var lastWeekYear = lastWeek.getFullYear();

    var lastWeekDisplay = lastWeekMonth + "/" + lastWeekDay + "/" + lastWeekYear;
    var lastWeekDisplayPadded = ("00" + lastWeekMonth.toString()).slice(-2) + "/" + ("00" + lastWeekDay.toString()).slice(-2) + "/" + ("0000" + lastWeekYear.toString()).slice(-4);
    return lastWeekDisplayPadded;
}

function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}
