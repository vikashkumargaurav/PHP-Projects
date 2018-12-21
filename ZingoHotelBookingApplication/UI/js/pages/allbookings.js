/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HotelName;
var HotelAddress;
var totalHotelTax = 0;
$(document).ready(function () {
    // var getHotelsDetailUrl = MAIN_API_IRL + 'Dashboard/GetDashboardDataForCurrentDate/' + hotelId;
    // makeAjax(getHotelsDetailUrl, 'GET', getHotelStat, auth);
    // var getTableApiUrl = MAIN_API_IRL + 'RoomBooking/GetAllBookingCustomAPI/' + hotelId;
    var getTableApiUrl = MAIN_API_IRL + 'RoomBookings';
    makeAjax(getTableApiUrl, 'GET', getBookingsTable, auth);
    // makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
    $('#checkindate').datepicker({
        autoclose: true,
        keepOpen: false,
    }).on('change', function () {
        $('.datepicker').hide();
    });
})

function getHotelDetails(data) {
    // console.log(data);
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName);

}

function getBookingsTable(data) {
    // console.log(data);
    var tableRow = '';
    count = 0;
    for (i = 0; i < data.length; i++) {
        count++;

        if ((data[i].CheckOutDate == null)|| (data[i].CheckInDate == null)||(!isValidDateFormate(data[i].CheckInDate))) {
            continue;
        } else {
            // console.log('yes');
            tableRow += '<tr>';
            tableRow += '<td>' + count + '</td>';
            tableRow += '<td>' + data[i].BookingId + '</td>';
            tableRow += '<td>' + data[i].CheckInDate + '</td>';
            tableRow += '<td>' + data[i].CheckOutDate + '</td>';
            tableRow += '<td>' + data[i].BookingDate + '</td>';
            // tableRow += '<td>' + data[i].travellers.FirstName + '</td>';
            tableRow += '<td>' + data[i].BookingStatus + '</td>';
            tableRow += '<td>' + data[i].BookingSource + '</td>';

            tableRow += '<td>' + data[i].NoOfRooms + '</td>';
            tableRow += '<td>' + data[i].DurationOfStay + '</td>';
            tableRow += '<td>' + (data[i].NoOfRooms) * (data[i].DurationOfStay) + '</td>';
            tableRow += '<td>' + data[i].SellRate + '</td>';
            tableRow += '<td>' + data[i].ExtraCharges + '</td>';
            tableRow += '<td>' + data[i].GSTAmount + '</td>';
            tableRow += '<td>' + data[i].TotalAmount + '</td>';
            tableRow += '<td>' + data[i].OTACommissionAmount + '</td>';
            tableRow += '<td>' + data[i].OTACommissionGSTAmount + '</td>';
            tableRow += '<td>' + data[i].OTATotalCommissionAmount + '</td>';
            tableRow += '<td>' + ((data[i].TotalAmount) - (data[i].OTATotalCommissionAmount)) + '</td>';
            tableRow += '<td>Null</td>';
            tableRow += '<td>' + ((data[i].TotalAmount) - (data[i].CustomerPaymentAtOTA)) + '</td>';
            tableRow += '<td>' + data[i].OTAToPayHotel + '</td>';
            tableRow += '<td>' + data[i].HotelToPayOTA + '</td>';
            tableRow += '<td>NUll</td>';
            tableRow += '<td>' + data[i].ZingoCommision + '</td>';
            if (data[i].OTAStatus == null)
                tableRow += '<td>Pending</td>';
            else {
                tableRow += '<td>' + data[i].OTAStatus + '</td>';
            }
            tableRow += '</tr>';
        }


    }

    $('#bookingTable tbody').empty();
    $('#bookingTable').append(tableRow);
    if (!$.fn.DataTable.isDataTable('#bookingTable')) {
        var table = $('#bookingTable').DataTable({
            responsive: true,
            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'excel',
                    footer: true,
                    messageTop: HotelName + ' - ' + HotelAddress,
                    messageBottom:"Hotel "+HotelName + " ExcelSheet" ,
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
    totalHotelTax = table.column(13, {page: 'current'}).data().sum();
    totalRoomCharge = table.column(11, {page: 'current'}).data().sum();
    totalRoomNight = table.column(10, {page: 'current'}).data().sum();
    totalExtraCharge = table.column(12, {page: 'current'}).data().sum();

    GrossCharges = table.column(14, {page: 'current'}).data().sum();
    CommissionCharges = table.column(15, {page: 'current'}).data().sum();
    CommissionGSTCharges = table.column(16, {page: 'current'}).data().sum();
    CommissionIncludingGST = table.column(17, {page: 'current'}).data().sum();
    NettAmount = table.column(18, {page: 'current'}).data().sum();
    CustomerPaidatHotel = table.column(19, {page: 'current'}).data().sum();
    OTAToPayHotel = table.column(20, {page: 'current'}).data().sum();
    HoteltoPayOTA = table.column(20, {page: 'current'}).data().sum();


    $('#HotelTaxFooter').text(totalHotelTax);
    $('#RoomChargeFooter').text( totalRoomCharge);
    $('#ExtraChargeFooter').text( totalExtraCharge);
    $('#totalRoomNightFooter').text( totalRoomNight);

    $('#GrossChargesFooter').text(GrossCharges);
    $('#CommissionChargesFooter').text( CommissionCharges);
    $('#CommissionGSTChargesFooter').text(CommissionGSTCharges);
    $('#CommissionIncludingGSTFooter').text(CommissionIncludingGST);
    $('#NettAmountFooter').text( NettAmount);
    $('#CustomerPaidatHotelFooter').text( CustomerPaidatHotel);
    $('#OTAToPayHotelFooter').text( OTAToPayHotel);
    $('#HoteltoPayOTAFooter').text( HoteltoPayOTA);


    $('#checkindate, #checkoutdate ,#bookingStatus').change(function () {
        table.draw();
        totalHotelTax = table.column(13, {page: 'current'}).data().sum();
        totalRoomCharge = table.column(11, {page: 'current'}).data().sum();
        totalExtraCharge = table.column(12, {page: 'current'}).data().sum();
        totalRoomNight = table.column(10, {page: 'current'}).data().sum();

        GrossCharges = table.column(14, {page: 'current'}).data().sum();
        CommissionCharges = table.column(15, {page: 'current'}).data().sum();
        CommissionGSTCharges = table.column(16, {page: 'current'}).data().sum();
        CommissionIncludingGST = table.column(17, {page: 'current'}).data().sum();
        NettAmount = table.column(18, {page: 'current'}).data().sum();
        CustomerPaidatHotel = table.column(19, {page: 'current'}).data().sum();
        OTAToPayHotel = table.column(20, {page: 'current'}).data().sum();
        HoteltoPayOTA = table.column(20, {page: 'current'}).data().sum();

        $('#HotelTaxFooter').text(totalHotelTax);
        $('#RoomChargeFooter').text( totalRoomCharge);
        $('#ExtraChargeFooter').text( totalExtraCharge);
        $('#totalRoomNightFooter').text( totalRoomNight);

        $('#GrossChargesFooter').text(GrossCharges);
        $('#CommissionChargesFooter').text( CommissionCharges);
        $('#CommissionGSTChargesFooter').text(CommissionGSTCharges);
        $('#CommissionIncludingGSTFooter').text(CommissionIncludingGST);
        $('#NettAmountFooter').text( NettAmount);
        $('#CustomerPaidatHotelFooter').text( CustomerPaidatHotel);
        $('#OTAToPayHotelFooter').text( OTAToPayHotel);
        $('#HoteltoPayOTAFooter').text( HoteltoPayOTA);
    });

}

function getCheckInDate(cindate) {
    var cinDate = cindate.target.value
    $('#checkoutdate').datepicker({
        minDate: getNextDayDate(cinDate),
        todayHighlight: getCurrentDate(),
        autoclose: true

    }).on('change', function () {
        $('.datepicker').hide();
    });
    $('#checkoutdate').datepicker('update', getNextDayDate(cinDate));
}

function getHotelStat(data) {
    // console.log(data);
    $('#ExpectedCheckIn').text(data.ExpectedCheckIn);
    $('#ExpectedCheckOut').text(data.ExpectedCheckOut);
    $('#TodayBookingCount').text(data.TodayBookingCount);
    $('#totalOccupiedRoomByActiveStatus').text(data.totalOccupiedRoomByActiveStatus);
}

var $dates = $('#checkindate, #checkoutdate').datepicker();

// fetching data between check in amnd check out date and by status
$.fn.dataTableExt.afnFiltering.push(
    function (oSettings, aData, iDataIndex) {
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

        iFini = iFini.substring(6, 10) + iFini.substring(3, 5) + iFini.substring(0, 2);
        iFfin = iFfin.substring(6, 10) + iFfin.substring(3, 5) + iFfin.substring(0, 2);
        // console.log(iFini);
        var datofini = aData[iStartDateCol].substring(6, 10) + aData[iStartDateCol].substring(3, 5) + aData[iStartDateCol].substring(0, 2);
        var datoffin = aData[iEndDateCol].substring(6, 10) + aData[iEndDateCol].substring(3, 5) + aData[iEndDateCol].substring(0, 2);
        var dataofBookingstatus = aData[ibookingStatusCol];
        // console.log(datofini);
        if ((iFini === "" && iFfin === "") && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
            return true;
        }
        else if ((iFini <= datofini) && (iFfin === "") && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
            return true;
        }
        else if ((iFfin >= datoffin) && (iFini === "") && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
            return true;
        }
        else if ((iFini <= datofini) && (iFfin >= datoffin) && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
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