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
    var getTableApiUrl = MAIN_API_IRL + 'RoomBooking/GetAllBookingCustomAPI/' + hotelId;
    // var getTableApiUrl = MAIN_API_IRL + 'RoomBookings';
    // alert(getUserPositionData());
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
    var tableRow = '';
    count = 0;

    totalRoomNight = 0 ; // night (10 column)
    totalRoomCharge = 0 ; // Room Charge (11 column)
    totalExtraCharge = 0 ; // Extra Charge (12 column)

    var isEditable = "";
    var isDisabled = true;
    var isPointer = 'auto';

    if(getUserPositionData() == 'Luci-Owner' ){

        isEditable = '&nbsp;&nbsp;<span class= "badge badge-danger">edit</span>'
        isDisabled = false;
        isPointer = 'pointer';
    }

    for (i = 0; i < data.length; i++) {
        count++;

        if (data[i].travellers == null) {
            continue;
        } else {
            // console.log('yes');

            if(getUserPositionData() == 'Luci-Manager' && data[i].roomBooking.BookingStatus!='Completed'){



                isEditable = '&nbsp;&nbsp;<span class= "badge badge-danger">edit</span>'
                isDisabled = false;
                isPointer = 'pointer';
            }else  if(getUserPositionData() == 'Luci-Manager' && data[i].roomBooking.BookingStatus=='Completed'){

                 isEditable = "";
                 isDisabled = true;
                 isPointer = 'auto';

            }

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

            totalRoomNight+= +( (data[i].roomBooking.NoOfRooms) * (data[i].roomBooking.DurationOfStay) );
            totalExtraCharge+= +data[i].roomBooking.ExtraCharges;
            totalRoomCharge+= +data[i].roomBooking.SellRate;

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

            // OLD

    /*    totalRoomCharge = table.column(11, {page: 'current'}).data().sum();
    totalRoomNight = table.column(10, {page: 'current'}).data().sum();
    totalExtraCharge = table.column(12, {page: 'current'}).data().sum();*/



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


function editBooking(id){

    if(getUserPositionData() == 'Luci-Owner' || getUserPositionData() == 'Luci-Manger' ){
        // alert(hotelId + "i am " + id)
        window.location.href = 'index.php?page_name=updatebooking&BookingId=' + id+'&hotelId='+ hotelId;

    }
}
