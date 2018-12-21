/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var hotels = [];
var OccupancyPercentage = [];
var TodayBookingCount = [];
var row = 0;
var getHotels_url1 = MAIN_API_IRL + '' + GET_HOTELS_DETAILS_1_API + '' + aid; // mappingprofileurl

$('document').ready(function () {
    var profleApi = MAIN_API_IRL+'Profiles/'+aid;
    makeAjax(profleApi, 'GET', getUserProfile, auth);
    makeAjax(getHotels_url1, 'GET', getHotelsDetailByFirstAPI, auth);
})
function getUserProfile(data){
    console.log(data);
    $('#username').text('Welcome : '+data.FirstName);
}
function getHotelsDetailByFirstAPI(data) {
    console.log(data);
    if (data == '') {
        var getHotels_url2 = MAIN_API_IRL + '' + GET_HOTELS_DETAILS_2_API + '' + aid; // hotelbyprofileidurl
        makeAjax(getHotels_url2, 'GET', getHotelsDetailBySecondAPI, auth);
    } else {
//        console.log(data);
        var hotelRow = '';
        var hotelcount = 0;
        for (i = 0; i < data.length; i++) {

            hotelRow += '<li class="nav-item" onclick="getHotelIdForNextPage(\'' + (btoa(JSON.stringify(data[i]))) + '\')">';
            hotelRow += '<a class="nav-link" href="#">';
            hotelRow += '<i class="fa fa-bed"></i> ';
            hotelRow += '<span>' + data[i].hotels.HotelName + '</span></a>';
            hotelRow += '</li>';
            hotelcount++;
            hotels[i] = data[i].hotels.HotelName;
        }
        $('#showHotelsOnNavBar').append(hotelRow);
        $('#hotelcount').text(hotelcount);
//        console.log(hotelcount);

//        alert('yes getting data from 1 st api');
    }
}
var secondApiDataLength;
function getHotelsDetailBySecondAPI(data) {
   console.log(data);
    secondApiDataLength = data.length;
    var hotelRow = '';
    var hotelcount = 0;
    for (i = 0; i < data.length; i++) {

        var getHotelsDetailUrl = MAIN_API_IRL + 'Dashboard/GetDashboardDataForCurrentDate/' + data[i].HotelId;
//        console.log(data[i].HotelId);
        makeAjax(getHotelsDetailUrl, 'GET', getHotelProp, auth);
        hotels[i] = data[i].HotelName;

        hotelRow += '<li class="nav-item" onclick="getHotelIdForNextPage(\'' + (btoa(JSON.stringify(data[i]))) + '\')">';
        hotelRow += '<a class="nav-link" href="#">';
        hotelRow += '<i class="fa fa-bed"></i> ';
        hotelRow += '<span>' + data[i].HotelName + '</span></a>';
        hotelRow += '</li>';
        hotelcount++;

    }
    $('#showHotelsOnNavBar').append(hotelRow);
    $('#hotelcount').text(hotelcount);
//    console.log(hotelcount);

}

function getHotelProp(data) {
//    console.log(data);
    TodayBookingCount[row] = data.TodayBookingCount;
    if (data.OccupancyPercentage == "NaN") {
        OccupancyPercentage[row++] = 0;
    } else {
        OccupancyPercentage[row++] = data.OccupancyPercentage;
    }
    if (row == secondApiDataLength) {
        generateGraph();
    }

}

// function generateGraph() {
//     Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
//     Chart.defaults.global.defaultFontColor = '#292b2c';
//
// // Bar Chart Example
//     var ctx = document.getElementById("myBarChart");
//     var myLineChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: hotels,
//             datasets: [{
//                     label: "Revenue",
//                     backgroundColor: "rgba(2,117,216,1)",
//                     borderColor: "rgba(2,117,216,1)",
//                     data: TodayBookingCount,
//                 }],
//         },
//         options: {
//             scales: {
//                 xAxes: [{
//                         time: {
//                             unit: 'number'
//                         },
//                         gridLines: {
//                             display: false
//                         },
//                         ticks: {
//                             maxTicksLimit: 10
//                         }
//                     }],
//                 yAxes: [{
//                         ticks: {
//                             min: 0,
//                             max: 15,
//                             maxTicksLimit: 5
//                         },
//                         gridLines: {
//                             display: true
//                         }
//                     }],
//             },
//             legend: {
//                 display: false
//             }
//         }
//     });
//
// }
function getHotelIdForNextPage(data) {
    data = JSON.parse(atob(data));
//    console.log(data);
    var hotelId = data.HotelId;
//    console.log(hotelId);
    window.location.href = 'index.php?page_name=hotel&hotelId=' + hotelId;
}




