/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var HotelName;
var HotelAddress;
var totalHotelTax = 0;
$(document).ready(function () {
    var getHotelsDetailUrl = MAIN_API_IRL + 'Dashboard/GetDashboardDataForCurrentDate/' + hotelId;
    makeAjax(getHotelsDetailUrl, 'GET', getHotelStat, auth);
    // var getTableApiUrl = MAIN_API_IRL + 'RoomBooking/GetAllBookingCustomAPI/' + hotelId;
    var getTableApiUrl = MAIN_API_IRL + 'RoomBooking/GetAllBooking/' + hotelId;
    // var getTableApiUrl = MAIN_API_IRL + 'RoomBookings';
    makeAjax(getTableApiUrl, 'GET', getBookingsTable, auth);
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);
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
    data.reverse();
    var tableRow = '';
    count = 0;
    for (i = 0; i < data.length; i++) {
        count++;


            console.log('yes');
            tableRow += '<tr>';
            tableRow += '<td>' + count + '</td>';
            tableRow += '<td>' + data[i].BookingId + '</td>';
            tableRow += '<td>' +makeDateFormated(data[i].CheckInDate) + '</td>';
            tableRow += '<td>' +makeDateFormated(data[i].CheckOutDate) + '</td>';
            tableRow += '<td>' + data[i].BookingDate + '</td>';
            tableRow += '<td><button class="btn btn-link" onclick="getBookingId('+data[i].BookingId+')">Audit</button></td>';
            tableRow += '<td>' + data[i].BookingStatus + '</td>';
            tableRow += '<td>' + data[i].BookingSource + '</td>';

            tableRow += '<td>' + data[i].NoOfRooms + '</td>';
            tableRow += '<td>' + data[i].DurationOfStay + '</td>';
            tableRow += '<td>' + (data[i].NoOfRooms) * (data[i].DurationOfStay) + '</td>';
            tableRow += '<td>' + data[i].SellRate + '</td>';
            tableRow += '<td>' + data[i].ExtraCharges + '</td>';
            tableRow += '<td>' + data[i].GSTAmount + '</td>';
            //  audit start
            if(data[i].auditSettlementList.length != 0){
                tableRow += '<td>' + data[i].auditSettlementList[data[i].auditSettlementList.length-1].AuditingSellRate + '</td>';
                tableRow += '<td>' + data[i].auditSettlementList[data[i].auditSettlementList.length-1].AuditingGST + '</td>';
                tableRow += '<td>' + data[i].auditSettlementList[data[i].auditSettlementList.length-1].AuditingExtra + '</td>';
                tableRow += '<td>' + data[i].auditSettlementList[data[i].auditSettlementList.length-1].DifferenceAmount + '</td>';
                tableRow += '<td>' + data[i].auditSettlementList[data[i].auditSettlementList.length-1].SettlementDate + '</td>';
                tableRow += '<td>' + data[i].auditSettlementList[data[i].auditSettlementList.length-1].SettlementDate + '</td>';
                tableRow += '<td>' + data[i].auditSettlementList[data[i].auditSettlementList.length-1].CreatedBy + '</td>';
                tableRow += '<td>' + data[i].auditSettlementList[data[i].auditSettlementList.length-1].Remark + '</td>';
            }else{
                tableRow += '<td>Pending</td>';
                tableRow += '<td>Pending</td>';
                tableRow += '<td>Pending</td>';
                tableRow += '<td>Pending</td>';
                tableRow += '<td>Pending</td>';
                tableRow += '<td>Pending</td>';
                tableRow += '<td>Pending</td>';
                tableRow += '<td>Pending</td>';
            }
            // tableRow += '<td>' + data[i].TotalAmount + '</td>';
            // tableRow += '<td>' + data[i].OTACommissionAmount + '</td>';
            // tableRow += '<td>' + data[i].OTACommissionGSTAmount + '</td>';
            // tableRow += '<td>' + data[i].OTATotalCommissionAmount + '</td>';
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
    // totalHotelTax = table.column(13, {page: 'current'}).data().sum();
    // totalRoomCharge = table.column(11, {page: 'current'}).data().sum();
    // totalRoomNight = table.column(10, {page: 'current'}).data().sum();
    // totalExtraCharge = table.column(12, {page: 'current'}).data().sum();
    //
    // GrossCharges = table.column(14, {page: 'current'}).data().sum();
    // CommissionCharges = table.column(15, {page: 'current'}).data().sum();
    // CommissionGSTCharges = table.column(16, {page: 'current'}).data().sum();
    // CommissionIncludingGST = table.column(17, {page: 'current'}).data().sum();
    // NettAmount = table.column(18, {page: 'current'}).data().sum();
    // CustomerPaidatHotel = table.column(19, {page: 'current'}).data().sum();
    // OTAToPayHotel = table.column(20, {page: 'current'}).data().sum();
    // HoteltoPayOTA = table.column(20, {page: 'current'}).data().sum();
    //
    //
    // $('#HotelTaxFooter').text(totalHotelTax);
    // $('#RoomChargeFooter').text( totalRoomCharge);
    // $('#ExtraChargeFooter').text( totalExtraCharge);
    // $('#totalRoomNightFooter').text( totalRoomNight);
    //
    // $('#GrossChargesFooter').text(GrossCharges);
    // $('#CommissionChargesFooter').text( CommissionCharges);
    // $('#CommissionGSTChargesFooter').text(CommissionGSTCharges);
    // $('#CommissionIncludingGSTFooter').text(CommissionIncludingGST);
    // $('#NettAmountFooter').text( NettAmount);
    // $('#CustomerPaidatHotelFooter').text( CustomerPaidatHotel);
    // $('#OTAToPayHotelFooter').text( OTAToPayHotel);
    // $('#HoteltoPayOTAFooter').text( HoteltoPayOTA);


    $('#SettlementDateRange ,#bookingStatus').change(function () {
        if($('#SettlementDateRange').val() == 'Week'){
            $('#checkindate').val(LastWeekDate())
            $('#checkoutdate').val(getYesterdayDate())
        }else if($('#SettlementDateRange').val() == 'LastDay'){
            $('#checkoutdate').val(getYesterdayDate())
            $('#checkindate').val(getYesterdayDate())
        }else if ($('#SettlementDateRange').val() == 'Month') {
            $('#checkindate').val(getPreviousMonthdayDate())
            $('#checkoutdate').val(getYesterdayDate())
        }else{
            $('#checkindate').val('')
            $('#checkoutdate').val('')
        }
        table.draw();
        // totalHotelTax = table.column(13, {page: 'current'}).data().sum();
        // totalRoomCharge = table.column(11, {page: 'current'}).data().sum();
        // totalExtraCharge = table.column(12, {page: 'current'}).data().sum();
        // totalRoomNight = table.column(10, {page: 'current'}).data().sum();
        //
        // GrossCharges = table.column(14, {page: 'current'}).data().sum();
        // CommissionCharges = table.column(15, {page: 'current'}).data().sum();
        // CommissionGSTCharges = table.column(16, {page: 'current'}).data().sum();
        // CommissionIncludingGST = table.column(17, {page: 'current'}).data().sum();
        // NettAmount = table.column(18, {page: 'current'}).data().sum();
        // CustomerPaidatHotel = table.column(19, {page: 'current'}).data().sum();
        // OTAToPayHotel = table.column(20, {page: 'current'}).data().sum();
        // HoteltoPayOTA = table.column(20, {page: 'current'}).data().sum();
        //
        // $('#HotelTaxFooter').text(totalHotelTax);
        // $('#RoomChargeFooter').text( totalRoomCharge);
        // $('#ExtraChargeFooter').text( totalExtraCharge);
        // $('#totalRoomNightFooter').text( totalRoomNight);
        //
        // $('#GrossChargesFooter').text(GrossCharges);
        // $('#CommissionChargesFooter').text( CommissionCharges);
        // $('#CommissionGSTChargesFooter').text(CommissionGSTCharges);
        // $('#CommissionIncludingGSTFooter').text(CommissionIncludingGST);
        // $('#NettAmountFooter').text( NettAmount);
        // $('#CustomerPaidatHotelFooter').text( CustomerPaidatHotel);
        // $('#OTAToPayHotelFooter').text( OTAToPayHotel);
        // $('#HoteltoPayOTAFooter').text( HoteltoPayOTA);
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
        var start = document.getElementById('checkindate').value;
        // var iFini = document.getElementById('checkindate').value;
        var end = document.getElementById('checkoutdate').value;
        // var iFfin = document.getElementById('checkoutdate').value;
        if ($('#bookingStatus').val() == null) {
            var iBookingStatus = "";
        } else {
            var iBookingStatus = $('#bookingStatus').val();
        }
        var iStartDateCol = 3;  // column no
        var iEndDateCol = 3;    // column no
        var ibookingStatusCol = 6;   // column no
       // console.log(aData[iStartDateCol])
        // start = start.substring(6, 10) + start.substring(3, 5) + start.substring(0, 2);
        // end = end.substring(6, 10) + end.substring(3, 5) + end.substring(0, 2);

        // var datofstart = aData[iStartDateCol].substring(6, 10) + aData[iStartDateCol].substring(3, 5) + aData[iStartDateCol].substring(0, 2);
        var datofstart = aData[iStartDateCol];
        // var datofend = aData[iEndDateCol].substring(6, 10) + aData[iEndDateCol].substring(3, 5) + aData[iEndDateCol].substring(0, 2);
        var datofend = aData[iEndDateCol];
        var dataofBookingstatus = aData[ibookingStatusCol];

        if (start === "" && end === "" && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
            return true;
        }
        else if (start <= datofstart && end === "" && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
            return true;
        }
        else if (start >= datofend && start === "" && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
            return true;
        }
        else if (start <= datofstart && end >= datofend && ((iBookingStatus === "") || (iBookingStatus === dataofBookingstatus))) {
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