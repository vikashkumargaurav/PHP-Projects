/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
var HotelName;
var HotelAddress;
var HotelObj ={};
$(document).ready(function () {
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
})

function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName +' Hotel Gst Calculator');

}


*/

// exclusive cal
$('#sellRate').keyup(function() {
    var totalgstamt = 0;
    var totalAmountwithgst =0;
    var sellRate =  $('#sellRate').val();
    if (sellRate < 1000) {
        gst = 0;
        totalgstamt = ((gst / 100) * sellRate).toFixed(2);
    } else if (sellRate >= 1000 && sellRate < 2500) {
        gst = 12;
        totalgstamt = ((gst / 100) * sellRate).toFixed(2);

    } else if (sellRate >= 2500 && sellRate < 7500) {
        gst = 18;
        totalgstamt = ((gst / 100) * sellRate).toFixed(2);
    } else {
        gst = 28;
        totalgstamt = ((gst / 100) * sellRate).toFixed(2);
    }
    $('#totalamount').val(parseFloat(parseInt(sellRate) + parseInt(totalgstamt)));
    $('#gstamount').val(totalgstamt);
    $('#gstpercentage').val(gst);
})

// inclusive cal


$('#inclusivetotalamount').keyup(function() {
    var inclusivetotalgstamt = 0;
    var inclusivetotalAmountwithgst =0;
    var inclusivetotalamount =  $('#inclusivetotalamount').val();
    if (inclusivetotalamount < 1119.99) {
        inclusivegst = 0;
        inclusivetotalgstamt = 0;
        inclusivesellRate = inclusivetotalamount;
    } else if (inclusivetotalamount >= 1120 && inclusivetotalamount < 2799.99) {
        inclusivegst = 12;
        inclusivesellRate = ((inclusivetotalamount / 112) * 100).toFixed(2);
        inclusivetotalgstamt = (inclusivesellRate * (inclusivegst/ 100)).toFixed(2);

    } else if (inclusivetotalamount >= 2800 && inclusivetotalamount <= 8849.99) {
        inclusivegst = 18;
        inclusivesellRate = ((inclusivetotalamount / 118) * 100).toFixed(2);
        inclusivetotalgstamt = (inclusivesellRate * (inclusivegst/ 100)).toFixed(2);
    } else {
        inclusivegst = 28;
        inclusivesellRate = ((inclusivetotalamount / 118) * 100).toFixed(2);
        inclusivetotalgstamt = (inclusivesellRate * (inclusivegst/ 100)).toFixed(2);
    }
    $('#inclusivesellRate').val(parseFloat(inclusivesellRate));
    $('#inclusivegstamount').val(inclusivetotalgstamt);
    $('#inclusivegstpercentage').val(inclusivegst);
})

