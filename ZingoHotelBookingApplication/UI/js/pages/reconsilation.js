/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HotelName1;
var HotelAddress1;
var totalHotelTax = 0;
$(document).ready(function () {
    // var getHotelsDetailUrl = MAIN_API_IRL + 'Dashboard/GetDashboardDataForCurrentDate/' + hotelId;
    // makeAjax(getHotelsDetailUrl, 'GET', getHotelStat, auth);
    var getTableApiUrl = MAIN_API_IRL + 'RoomBooking/GetAllBookingCustomAPI/' + hotelId;
    // var getTableApiUrl = MAIN_API_IRL + 'RoomBookings';
    // alert(getUserPositionData());
    makeAjax(getTableApiUrl, 'GET', getBookingsTable1, auth);
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails1, auth);
    $('#checkindate1').datepicker({
        autoclose: true,
        keepOpen: false,
    }).on('change', function () {
        $('.datepicker').hide();
    });
});

function getHotelDetails1(data) {
    // console.log(data);
    HotelName1 = data.HotelName;
    HotelAddress1 = data.PlaceName;
    // $('#HotelName').text(HotelName);

}

function getBookingsTable1(data) {
    // console.log(data);
    var tableRow = '';
    count = 0;

    totalRoomNight1 = 0 ; // night (10 column)
    totalRoomCharge1 = 0 ; // Room Charge (11 column)
    totalExtraCharge1 = 0 ; // Extra Charge (12 column)

    var isEditable = "";
    var isDisabled = true;
    var isPointer = 'auto';

    for (i = 0; i < data.length; i++) {
        count++;

        if (data[i].travellers == null) {
            continue;
        } else {
            // console.log('yes');

            tableRow += '<tr>';
            tableRow += '<td>' + count +'</td>';
            tableRow += '<td disabled=' + isDisabled +' onclick=editBooking('+ data[i].roomBooking.BookingId + ') style="cursor: '+ isPointer +'  ">' + data[i].roomBooking.BookingId  + isEditable + '</td>';
            tableRow += '<td>' + makeDateFormated(data[i].roomBooking.CheckInDate) + '</td>';
            tableRow += '<td>' + makeDateFormated(data[i].roomBooking.CheckOutDate) + '</td>';
            tableRow += '<td>' + makeDateFormated(data[i].roomBooking.BookingDate) + '</td>';
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

            totalRoomNight1+= +( (data[i].roomBooking.NoOfRooms) * (data[i].roomBooking.DurationOfStay) );
            totalExtraCharge1+= +data[i].roomBooking.ExtraCharges;
            totalRoomCharge1+= +data[i].roomBooking.SellRate;

            if (data[i].roomBooking.OTAStatus == null)
                tableRow += '<td>Pending</td>';
            else {
                tableRow += '<td>' + data[i].roomBooking.OTAStatus + '</td>';
            }
            tableRow += '</tr>';
        }


    }

    $('#bookingTable1 tbody').empty();
    $('#bookingTable1').append(tableRow);

    if (!$.fn.DataTable.isDataTable('#bookingTable1')) {
        var table1 = $('#bookingTable1').DataTable({
            responsive: true,
            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'excel',
                    footer: true,
                    messageTop: HotelName1 + ' - ' + HotelAddress1,
                    messageBottom:"Hotel "+HotelName + " ExcelSheet" ,
                    text: 'Download excel',
                    className: 'exportExcel',
                    filename: HotelName1,
                    exportOptions: {
                        modifier: {
                            page: 'all'
                        }
                    }
                }
            ]
        });
    }
    totalHotelTax1 = table1.column(13, {page: 'current'}).data().sum();

    // OLD

    /*    totalRoomCharge = table.column(11, {page: 'current'}).data().sum();
    totalRoomNight = table.column(10, {page: 'current'}).data().sum();
    totalExtraCharge = table.column(12, {page: 'current'}).data().sum();*/



    GrossCharges = table1.column(14, {page: 'current'}).data().sum();
    CommissionCharges = table1.column(15, {page: 'current'}).data().sum();
    CommissionGSTCharges = table1.column(16, {page: 'current'}).data().sum();
    CommissionIncludingGST = table1.column(17, {page: 'current'}).data().sum();
    NettAmount = table1.column(18, {page: 'current'}).data().sum();
    CustomerPaidatHotel = table1.column(19, {page: 'current'}).data().sum();
    OTAToPayHotel = table1.column(20, {page: 'current'}).data().sum();
    HoteltoPayOTA = table1.column(20, {page: 'current'}).data().sum();


    $('#HotelTaxFooter1').text(totalHotelTax1);
    $('#RoomChargeFooter1').text( totalRoomCharge1);
    $('#ExtraChargeFooter1').text( totalExtraCharge1);
    $('#totalRoomNightFooter1').text( totalRoomNight1);

    $('#GrossChargesFooter1').text(GrossCharges1);
    $('#CommissionChargesFooter1').text( CommissionCharges1);
    $('#CommissionGSTChargesFooter1').text(CommissionGSTCharges1);
    $('#CommissionIncludingGSTFooter1').text(CommissionIncludingGST1);
    $('#NettAmountFooter1').text( NettAmount1);
    $('#CustomerPaidatHotelFooter1').text( CustomerPaidatHotel1);
    $('#OTAToPayHotelFooter1').text( OTAToPayHotel1);
    $('#HoteltoPayOTAFooter1').text( HoteltoPayOTA1);


    $('#checkindate1, #checkoutdate1 ,#bookingStatus1').change(function () {
        table.draw();
        totalHotelTax1 = table1.column(13, {page: 'current'}).data().sum();
        totalRoomCharge1 = table1.column(11, {page: 'current'}).data().sum();
        totalExtraCharge1 = table1.column(12, {page: 'current'}).data().sum();
        totalRoomNight1 = table1.column(10, {page: 'current'}).data().sum();

        GrossCharges1 = table1.column(14, {page: 'current'}).data().sum();
        CommissionCharges1 = table1.column(15, {page: 'current'}).data().sum();
        CommissionGSTCharges1 = table1.column(16, {page: 'current'}).data().sum();
        CommissionIncludingGST1 = table1.column(17, {page: 'current'}).data().sum();
        NettAmount1 = table.column(18, {page: 'current'}).data().sum();
        CustomerPaidatHotel1 = table1.column(19, {page: 'current'}).data().sum();
        OTAToPayHotel1 = table1.column(20, {page: 'current'}).data().sum();
        HoteltoPayOTA1 = table1.column(20, {page: 'current'}).data().sum();

        $('#HotelTaxFooter1').text(totalHotelTax1);
        $('#RoomChargeFooter1').text( totalRoomCharge1);
        $('#ExtraChargeFooter1').text( totalExtraCharge1);
        $('#totalRoomNightFooter1').text( totalRoomNight1);

        $('#GrossChargesFooter1').text(GrossCharges1);
        $('#CommissionChargesFooter1').text( CommissionCharges1);
        $('#CommissionGSTChargesFooter1').text(CommissionGSTCharges1);
        $('#CommissionIncludingGSTFooter1').text(CommissionIncludingGST1);
        $('#NettAmountFooter1').text( NettAmount1);
        $('#CustomerPaidatHotelFooter1').text( CustomerPaidatHotel1);
        $('#OTAToPayHotelFooter1').text( OTAToPayHotel1);
        $('#HoteltoPayOTAFooter1').text( HoteltoPayOTA1);
    });

}

function getCheckInDate(cindate) {
    var cinDate = cindate.target.value
    $('#checkoutdate1').datepicker({
        minDate: getNextDayDate(cinDate),
        todayHighlight: getCurrentDate(),
        autoclose: true

    }).on('change', function () {
        $('.datepicker').hide();
    });
    $('#checkoutdate1').datepicker('update', getNextDayDate(cinDate));
}

/*
function getHotelStat(data) {
    // console.log(data);
    $('#ExpectedCheckIn1').text(data.ExpectedCheckIn);
    $('#ExpectedCheckOut1').text(data.ExpectedCheckOut);
    $('#TodayBookingCount1').text(data.TodayBookingCount);
    $('#totalOccupiedRoomByActiveStatus').text(data.totalOccupiedRoomByActiveStatus);
}
*/

var $dates = $('#checkindate1, #checkoutdate1').datepicker();

// fetching data between check in amnd check out date and by status
$.fn.dataTableExt.afnFiltering.push(
    function (oSettings, aData, iDataIndex) {
        var iFini = document.getElementById('checkindate').value;
        var iFfin = document.getElementById('checkoutdate').value;
        if ($('#bookingStatus1').val() == null) {
            var iBookingStatus = "";
        } else {
            var iBookingStatus = $('#bookingStatus1').val();
        }
        var iStartDateCol = 2;  // column no
        var iEndDateCol = 3;    // column no
        var ibookingStatusCol = 6;   // column no

        // iFini = iFini.substring(6, 10) + iFini.substring(3, 5) + iFini.substring(0, 2);
        // iFfin = iFfin.substring(6, 10) + iFfin.substring(3, 5) + iFfin.substring(0, 2);

        // var datofini = aData[iStartDateCol].substring(6, 10) + aData[iStartDateCol].substring(3, 5) + aData[iStartDateCol].substring(0, 2);
        var datofini = aData[iStartDateCol];
        // var datoffin = aData[iEndDateCol].substring(6, 10) + aData[iEndDateCol].substring(3, 5) + aData[iEndDateCol].substring(0, 2);
        var datoffin = aData[iEndDateCol];
        var dataofBookingstatus = aData[ibookingStatusCol];

        if (iFini === "" && iFfin === "" && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
            return true;
        }
        else if (iFini <= datofini && iFfin === "" && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
            return true;
        }
        else if (iFfin >= datoffin && iFini === "" && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
            return true;
        }
        else if (iFini <= datofini && iFfin >= datoffin && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
            return true;
        }
        return false;
    }
);



jQuery.fn.dataTable.Api.register('sum()', function () {
    return this.flatten().reduce(function (a, b) {
        if (typeof a === 'string') {
            a = a.replace(/[^\d.-]/g, '') * 1;
        }
        if (typeof b === 'string') {
            b = b.replace(/[^\d.-]/g, '') * 1;
        }

        return a + b;
    }, 0);
});
