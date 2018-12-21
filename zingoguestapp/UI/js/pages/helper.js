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

function removeSessionDataFromLocal(localName) {
    localStorage.removeItem(localName);
}
function convertDateNumDateToMonthNameFormate(test) {
    console.log(test)
    var date = new Date(test);
    var MM = date.getMonth();
    var monthName = monthsArray[MM];
    var DD = date.getDate() ;
    var YY = date.getFullYear();
    var new_Date = monthName+' '+DD+' '+YY;
    return new_Date;

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

function makeAjaxForMailer(url, type, funname, data) {
    data = data || 0;
    if (type == 'POST') {
        console.log(data);
        $('#mainLoader').show();
        return $.ajax({
            url: url,
            type: type,
            // headers: {Authorization: auth},
            data: data,
            // contentType: "application/json",
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
            // headers: {Authorization: auth},
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

function makeAjax(url, type, funname, auth,data) {
    data = data || 0;
    console.log(data);
    if (type == 'POST') {
         $('#mainLoader').show();
        // console.log(data);
        return $.ajax({
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
    } else if (type == 'PUT') {
        $('#mainLoader').show();
        console.log(data);
        return $.ajax({
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
    } else if (type == 'DELETE') {
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
    }
    else {
        $('#mainLoader').hide();
        alert('sorry wrong method');
    }

}

function makeFileUploadAjax(url, type, funname, data) {
    data = data || 0;
    $('#mainLoader').show();
    return $.ajax({
        type: type,
        url: url,
        contentType: false,
        processData: false,
        data: data,
        success: function (data) {
            // console.log(data);
            $('#mainLoader').hide();
            funname(data);
        }
    }).fail(function () {
        console.log('fail');
        $('#mainLoader').hide();
        //console.log(data);
    })
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

function monthdayyearFormateDate(date) {
    // console.log(date);
    var date = new Date(date);
    var t = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    var dd = (t.getDate() < 10 ? '0' : '') + t.getDate();
    // 01, 02, 03, ... 10, 11, 12
    var mm = ((t.getMonth() + 1) < 10 ? '0' : '') + (t.getMonth() + 1);
    var yy = t.getFullYear();

    var new_date = mm + '/' + dd + '/' + yy;
    return new_date;
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
    } else if (hours > 12) {
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

function DurationofStay(date) {
    var a = moment(getCurrentDate()+' 12:00:00', 'MM/DD/YYYY hh:mm:ss');
    var b = moment(date +' 11:00:00', 'MM/DD/YYYY hh:mm:ss');
    var days = b.diff(a, 'days');
    var hours = b.diff(a, 'hours');
    var totalhours = parseInt(hours/12);
    //
    return days + ' Days ' +totalhours + ' Hours';
}
