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
    makeAjax(getTableApiUrl, 'GET', getBookingsTable, auth);
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);

    $('#bookingTable tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );


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

        if (data[i].travellers == null) {
            continue;
        } else {
            console.log('yes');
            tableRow += '<tr>';
            // tableRow += '<td>' + count + '</td>';
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
        var table = $('#bookingTable').DataTable({
            // responsive: true,
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
        table.columns().every( function () {
            var that = this;

            $( 'input', this.footer() ).on( 'keyup change', function () {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();
                }
            } );
        } );

    }

}



function getHotelStat(data) {
    // console.log(data);
    $('#ExpectedCheckIn').text(data.ExpectedCheckIn);
    $('#ExpectedCheckOut').text(data.ExpectedCheckOut);
    $('#TodayBookingCount').text(data.TodayBookingCount);
    $('#totalOccupiedRoomByActiveStatus').text(data.totalOccupiedRoomByActiveStatus);
}


