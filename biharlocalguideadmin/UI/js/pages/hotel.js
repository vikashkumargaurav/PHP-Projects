/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HotelName ;
var HotelAddress;
var totalHotelTax = 0;
$(document).ready(function () {
    var getHotelsDetailUrl = MAIN_API_IRL + 'Dashboard/GetDashboardDataForCurrentDate/' + hotelId;
    makeAjax(getHotelsDetailUrl, 'GET', getHotelStat, auth);
    var getTableApiUrl = MAIN_API_IRL + 'RoomBooking/GetAllBookingCustomAPI/' + hotelId;
    makeAjax(getTableApiUrl, 'GET', getBookingsTable, auth);
    makeAjax(MAIN_API_IRL+'Hotels/'+hotelId,'GET',getHotelDetails,auth);
    $('#checkindate').datepicker({
        autoclose: true,
        keepOpen: false,
    }).on('change', function(){
        $('.datepicker').hide();
    });
})

function getHotelDetails(data) {
    console.log(data);
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName);

}

function getBookingsTable(data) {
    console.log(data);
    var tableRow = '';
    count = 0;
    for (i = 0; i < data.length; i++) {
        count++;

        if(data[i].travellers == null){
           continue;
        }else{
            tableRow += '<tr>';
            tableRow += '<td>' + count + '</td>';
            tableRow += '<td>' + data[i].roomBooking.BookingId + '</td>';
            tableRow += '<td>' + data[i].roomBooking.CheckInDate + '</td>';
            tableRow += '<td>' + data[i].roomBooking.CheckOutDate + '</td>';
            tableRow += '<td>' + data[i].roomBooking.BookingDate + '</td>';
            tableRow += '<td>' + data[i].travellers.FirstName + '</td>';
            tableRow += '<td>' + data[i].roomBooking.BookingStatus + '</td>';
            tableRow += '<td>' + data[i].roomBooking.BookingSource + '</td>';

            tableRow += '<td>' + data[i].roomBooking.NoOfRooms + '</td>';
            tableRow += '<td>' + data[i].roomBooking.DurationOfStay + '</td>';
            tableRow += '<td>' + (data[i].roomBooking.NoOfRooms) * (data[i].roomBooking.DurationOfStay) + '</td>';
            tableRow += '<td>' + data[i].roomBooking.SellRate + '</td>';
            tableRow += '<td>' + data[i].roomBooking.ExtraCharges + '</td>';
            tableRow += '<td>' + data[i].roomBooking.GSTAmount + '</td>';
            tableRow += '<td>' + data[i].roomBooking.TotalAmount + '</td>';
            tableRow += '<td>' + data[i].roomBooking.OTACommissionAmount + '</td>';
            tableRow += '<td>' + data[i].roomBooking.OTACommissionGSTAmount + '</td>';
            tableRow += '<td>' + data[i].roomBooking.OTATotalCommissionAmount + '</td>';
            tableRow += '<td>' + ((data[i].roomBooking.TotalAmount) - (data[i].roomBooking.OTATotalCommissionAmount)) + '</td>';
            tableRow += '<td>Null</td>';
            tableRow += '<td>' + ((data[i].roomBooking.TotalAmount) - (data[i].roomBooking.CustomerPaymentAtOTA)) + '</td>';
            tableRow += '<td>' + data[i].roomBooking.OTAToPayHotel + '</td>';
            tableRow += '<td>' + data[i].roomBooking.HotelToPayOTA + '</td>';
            tableRow += '<td>NUll</td>';
            tableRow += '<td>' + data[i].roomBooking.ZingoCommision + '</td>';
            if (data[i].roomBooking.OTAStatus == null)
                tableRow += '<td>Pending</td>';
            else {
                tableRow += '<td>' + data[i].roomBooking.OTAStatus + '</td>';
            }
            tableRow += '</tr>';
        }


    }

    $('#bookingTable tbody').empty();
    $('#bookingTable').append(tableRow);
    if (!$.fn.DataTable.isDataTable('#bookingTable')) {
       var table= $('#bookingTable').DataTable({
            responsive: true,
           dom: 'lBfrtip',
           buttons: [
               {
                   extend: 'excel',
                   messageTop: HotelName+' - '+HotelAddress,
                   messageBottom: 'Hotel tax :' +totalHotelTax ,
                   text: 'Download excel',
                   className: 'exportExcel',
                   filename: HotelName,
                   exportOptions: {
                       modifier: {
                           page: 'all'
                       }
                   }
               }
           ]
        });
    }
    totalHotelTax = table.column( 13,{page:'current'} ).data().sum();
    $('#totalHotelTax').text(totalHotelTax);
    console.log(totalHotelTax);
    $('#checkindate, #checkoutdate ,#bookingStatus').change( function() {
        table.draw();
        totalHotelTax = table.column( 13,{page:'current'} ).data().sum();
        console.log(totalHotelTax);
        $('#totalHotelTax').text(totalHotelTax);
    } );

}

function getCheckInDate(cindate) {
    var cinDate = cindate.target.value
    $('#checkoutdate').datepicker({
        minDate: getNextDayDate(cinDate),
        todayHighlight: getCurrentDate(),
        autoclose: true

    }).on('change', function(){
        $('.datepicker').hide();
    });
    $('#checkoutdate').datepicker('update', getNextDayDate(cinDate));
}

function getHotelStat(data) {
    console.log(data);
    $('#ExpectedCheckIn').text(data.ExpectedCheckIn);
    $('#ExpectedCheckOut').text(data.ExpectedCheckOut);
    $('#TodayBookingCount').text(data.TodayBookingCount);
    $('#totalOccupiedRoomByActiveStatus').text(data.totalOccupiedRoomByActiveStatus);
}

var $dates = $('#checkindate, #checkoutdate').datepicker();

// fetching data between check in amnd check out date and by status
$.fn.dataTableExt.afnFiltering.push(
    function( oSettings, aData, iDataIndex ) {
        var iFini = document.getElementById('checkindate').value;
        var iFfin = document.getElementById('checkoutdate').value;
        if ($('#bookingStatus').val() == null) {
            var iBookingStatus = "";
        } else {
            var iBookingStatus = $('#bookingStatus').val();
        }
        var iStartDateCol = 2;  // column no
        var iEndDateCol = 3;    // column no
        var ibookingStatusCol = 6;   // column no

        iFini=iFini.substring(6,10) + iFini.substring(3,5)+ iFini.substring(0,2);
        iFfin=iFfin.substring(6,10) + iFfin.substring(3,5)+ iFfin.substring(0,2);

        var datofini=aData[iStartDateCol].substring(6,10) + aData[iStartDateCol].substring(3,5)+ aData[iStartDateCol].substring(0,2);
        var datoffin=aData[iEndDateCol].substring(6,10) + aData[iEndDateCol].substring(3,5)+ aData[iEndDateCol].substring(0,2);
        var dataofBookingstatus = aData[ibookingStatusCol];

        if ( iFini === "" && iFfin === "" &&((iBookingStatus === "" )|| (iBookingStatus === dataofBookingstatus)))
        {
            return true;
        }
        else if ( iFini <= datofini && iFfin === "" &&((iBookingStatus === "" )|| (iBookingStatus === dataofBookingstatus)))
        {
            return true;
        }
        else if ( iFfin >= datoffin && iFini === "" &&((iBookingStatus === "" )|| (iBookingStatus === dataofBookingstatus)))
        {
            return true;
        }
        else if (iFini <= datofini && iFfin >= datoffin &&((iBookingStatus === "" )|| (iBookingStatus === dataofBookingstatus)))
        {
            return true;
        }
        return false;
    }
);


jQuery.fn.dataTable.Api.register( 'sum()', function ( ) {
    return this.flatten().reduce( function ( a, b ) {
        if ( typeof a === 'string' ) {
            a = a.replace(/[^\d.-]/g, '') * 1;
        }
        if ( typeof b === 'string' ) {
            b = b.replace(/[^\d.-]/g, '') * 1;
        }

        return a + b;
    }, 0 );
} );