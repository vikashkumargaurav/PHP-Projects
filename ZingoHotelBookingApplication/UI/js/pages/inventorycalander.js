$(document).ready(function () {
    $( "#fromDate" ).val(getCurrentDate())
    $( "#toDate" ).val(getNextDayDate(getCurrentDate()))
    makeAjax(MAIN_API_IRL + 'Hotels/' + hotelId, 'GET', getHotelDetails, auth);

})

function getHotelDetails(data) {
    // console.log(data);
    HotelObj = data;
    HotelName = data.HotelName;
    HotelAddress = data.PlaceName;
    $('#HotelName').text(HotelName +' Hotel Inventory Calander');

}
var HotelName;
var HotelAddress;
var HotelObj ={};
$( function() {
    var dateFormat = "mm/dd/yy",
        fromDate = $( "#fromDate" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2
            })
            .on( "change", function() {
                toDate.datepicker( "option", "minDate", getDate( this ) );
                $('#toDate').val(getNextDayDate($('#fromDate').val()));
            }),
        toDate = $( "#toDate" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2
        })
            .on( "change", function() {
                fromDate.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }
} );


$('#getAvilabilityRoomBtn').click(function () {
    if ($('#fromDate').val().length == ''){
        $('#fromDate').focus();
        return false;
    }
    if ($('#toDate').val().length == ''){
        $('#toDate').focus();
        return false;
    }
    var data = {};
    data.HotelId = hotelId;
    data.FromDate = $('#fromDate').val();
    data.ToDate = $('#toDate').val();
    makeAjax(MAIN_API_IRL + 'Agent/GetAvailabilityOfCategoryBetweenDatesOfParticularHotel', 'POST', getHotelRoomAvilabilityDetails, auth,data);
})


function getHotelRoomAvilabilityDetails(data) {
    $('#AvilabilityRoomDiv').empty();
    // console.log(data);
    var NotificationsRow = '';
    for(i=0;i<data.length;i++) {
            NotificationsRow += '<div class="alert alert-secondary">';
            NotificationsRow += '<div class="row">';
            NotificationsRow += '<div class="col-md-4">';
            NotificationsRow += '<h5>' +  data[i].CategoryName + '</h5>';
            NotificationsRow += ' </div>';
            NotificationsRow += '<div class="col-md-4">';
            NotificationsRow += '<h5><span class=" badge badge-danger"> Available ' + data[i].Availability+ '</span></h5>';
            NotificationsRow += ' </div>';

            NotificationsRow += '<div class="col-md-4">';
            if(data[i].Availability != 0){
                NotificationsRow += '<button class="btn btn-danger" id="bookNow">Book Now</button>';
            }else{
                NotificationsRow += '<button class="btn btn-danger disabled">Book Now</button>';
            }
            NotificationsRow += '</div>';
            NotificationsRow += '<hr>';
            NotificationsRow += '</div>';
            NotificationsRow += '</div>';

    }

    $('#AvilabilityRoomDiv').append(NotificationsRow);


  /*  $('#bookNow').on('click', function () {
       alert('Hello');
    });*/

}