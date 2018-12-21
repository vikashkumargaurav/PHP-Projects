$(document).ready(function () {
    makeAjax(MAIN_API_IRL + 'RoomBookings/' + BookingId, 'GET', GetBookingByRoomId, auth);

    if ( (getUserPositionData() == 'Luci-Owner' ) || (getUserPositionData() == 'Luci-Manager' && BookingId.BookingStatus!='Completed') )      {
        $('#modifyBookingBtn').show();
        $('#modifyBookingBtn').click(function () {
            window.location.href = 'index.php?page_name=updatebooking&BookingId=' + BookingId+'&hotelId='+ hotelId;
        });
    }
});

var BookingObj = {};
var TravellerObj = {};
var HotelObj = {};
var BookingTravellerData = {};

function getBookingSourceTypeChage(data) {
    $('#BookingSource').empty();
    var option = data.target.value;
    makeChangeHotelPaymentMode(option);
    console.log(option);
    if (option == 'OTA') {
        $('#OTADiv').show();


        $.each(OTA, function (i, data) {
            $('#BookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        })
    } else if (option == 'B2B') {

        $.each(B2B, function (i, data) {
            $('#BookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        })
    } else {

        $.each(OFFLINE, function (i, data) {
            $('#BookingSource').append($("<option style='color: black;'></option>")
                .attr("value", data.BookingSourceName)
                .text(data.BookingSourceName));
        })
    }
}

function GetBookingByRoomId(data) {
    // console.log(data);

    BookingObj = data;
    BookingTravellerData.BookingObj = BookingObj
    if (data.HotelId == 0) {
        makeAlert('warning', 'wrong booking credential');
    } else {
        HotelId = data.HotelId;
    }
    makeAjax(MAIN_API_IRL + 'Travellers/' + data.TravellerId, 'GET', getTravellerByTravellerId, auth);
    makeAjax(MAIN_API_IRL + 'Hotels/' + HotelId, 'GET', getHotelByHotelId, auth);
    if(data.RoomId != 0){
        makeAjax(MAIN_API_IRL + 'Rooms/' + data.RoomId, 'GET', getRoomByRoomIdForView, auth);
    }else{
        $('#ShowRoomNo').text('Room Not Allocated');
    }
}

function getRoomByRoomIdForView(data) {
    // console.log(data);
    $('#ShowRoomNo').text('Room '+data.RoomNo);
}
function getHotelByHotelId(data) {
    // console.log(data);
    HotelObj.HotelName = data.DisplayName;
    HotelObj.Localty = data.Localty;
    HotelObj.PlaceName = data.PlaceName;
    HotelObj.PinCode = data.PinCode;
    HotelObj.State = data.State;
    HotelObj.ServiceTotalAmount = $('#ServiceTotalAmount').val();
    HotelObj.ServiceTotalPaidAmount = $('#ServiceTotalPaidAmount').val();
    HotelObj.ServiceRemainingAmount = $('#ServiceRemainingAmount').val();

    HotelObj.SummeryTotalAmount = $('#SummeryTotalAmount').val();
    HotelObj.SummeryTotalPaidAmount = $('#SummeryTotalPaidAmount').val();
    HotelObj.SummeryRemainingAmount = $('#SummeryRemainingAmount').val();
    BookingTravellerData.HotelObj = HotelObj;
    makeAjax(MAIN_API_IRL + 'Hotels/GetGSTDetailsByHotelId/' + HotelId, 'GET', GetGSTDetailsByHotelId, auth);
}

function GetGSTDetailsByHotelId(data) {
    // console.log(data);
    if(data!=null&&data.length!=0){
        HotelObj.ContactNo = data[0].ContactNo;
        HotelObj.Email = data[0].Email;
        HotelObj.GSTNumber = data[0].GSTNumber;
        BookingTravellerData.HotelObj = HotelObj;
    }else{
        HotelObj.ContactNo = "";
        HotelObj.Email = "";
        HotelObj.GSTNumber = "";
        BookingTravellerData.HotelObj = HotelObj;
    }

}

function getTravellerByTravellerId(data) {
    // console.log(data);
    // TravellerObj = data;
    // TravellerObj.travellerDocumentsList = null
    // TravellerObj.bookingList = null
    TravellerObj.BookingTravellerId = data.BookingTravellerId;
    TravellerObj.Address = data.Address;
    TravellerObj.Email = data.Email;
    TravellerObj.FirstName = data.FirstName;
    TravellerObj.Gender = data.Gender;
    TravellerObj.PhoneNumber = data.PhoneNumber;
    BookingTravellerData.TravellerObj = TravellerObj;
    viewBookingTravelerData(BookingTravellerData);
}

function viewBookingTravelerData(data) {
    // console.log(data);
    $('#ShowBookingStatus').text(data.BookingObj.BookingStatus);
    if ((data.BookingObj.BookingStatus) == "Quick") {
        if(data.BookingObj.RoomId != 0){
            $('#checkoutBtn').hide();
            // $('#changeRoomBtn').hide();
            $('#allocateRoomBtn').hide();
            $('#invoiceBtn').hide();
        }else{
            $('#checkoutBtn').hide();
            $('#changeRoomBtn').hide();
            $('#invoiceBtn').hide();
        }

    } else if ((data.BookingObj.BookingStatus) == "Completed") {
        $('#checkoutBtn').hide();
        $('#checkinBtn').hide();
        $('#cancelBtn').hide();
        $('#changeRoomBtn').hide();
    } else if ((data.BookingObj.BookingStatus) == "Active") {
        $('#allocateRoomBtn').hide();
        $('#changeRoomBtn').show();
        $('#checkinBtn').hide();
    }

    $('#CheckInDate').val(data.BookingObj.CheckInDate).prop("disabled", true);
    $('#CheckOutDate').val(data.BookingObj.CheckOutDate).prop("disabled", true);
    $('#BookingId').val(data.BookingObj.BookingId).prop("disabled", true);
    $('#RoomId').val(data.BookingObj.RoomId).prop("disabled", true);

    $('#PhoneNumber').val(data.TravellerObj.PhoneNumber).prop("disabled", true);
    $('#PhoneNumber').val(data.TravellerObj.PhoneNumber).prop("disabled", true);
    $('#FirstName').val(data.TravellerObj.FirstName).prop("disabled", true);
    $('#Email').val(data.TravellerObj.Email).prop("disabled", true);
    $('#Gender').val(data.TravellerObj.Gender).prop("disabled", true);

    $('#NoOfRooms').val(data.BookingObj.NoOfRooms).prop("disabled", true);
    $('#NoOfAdults').val(data.BookingObj.NoOfAdults).prop("disabled", true);
    $('#NoOfChild').val(data.BookingObj.NoOfChild).prop("disabled", true);
    $('#BookingSourceType').val(data.BookingObj.BookingSourceType).prop("disabled", true);
    $('#BookingSource').val(data.BookingObj.BookingSource).prop("disabled", true);
    $('#BookingPlan').val(data.BookingObj.BookingPlan).prop("disabled", true);
    $('#RoomCategory').val(data.BookingObj.RoomCategory).prop("disabled", true);

    $('#SellRate').val(data.BookingObj.SellRate).prop("disabled", true);
    $('#GSTPercent').val(data.BookingObj.GST).prop("disabled", true);
    $('#GSTAmount').val(data.BookingObj.GSTAmount).prop("disabled", true);
    $('#TotalAmount').val(data.BookingObj.TotalAmount).prop("disabled", true);
    var TotalAmountRoomPriceWithGst = 0;
    var ServiceTotalAmount = 0;
    var ServiceTotalPaidAmount = 0;
    var ServiceRemainingAmount = 0;

    var TotalPaidAmount = 0;
    var TotalAmountWithserviceAndRoom = 0;
    TotalAmountRoomPriceWithGst = data.BookingObj.TotalAmount;
    if (data.BookingObj.servicesList.length != 0) {
        $('#ServiceSummeryDiv').show();

        for (i = 0; i < data.BookingObj.servicesList.length; i++) {
            ServiceTotalAmount += parseInt(data.BookingObj.servicesList[i].Amount);
            if (data.BookingObj.servicesList[i].PaidStatus == "Paid") {
                ServiceTotalPaidAmount += parseInt(data.BookingObj.servicesList[i].Amount);
            } else {
                ServiceRemainingAmount += parseInt(data.BookingObj.servicesList[i].Amount);
            }


        }
        // ServiceRemainingAmount = parseInt(ServiceTotalAmount - ServiceTotalPaidAmount);
        $('#ServiceTotalAmount').val(ServiceTotalAmount).prop("disabled", true);
        $('#ServiceTotalPaidAmount').val(ServiceTotalPaidAmount).prop("disabled", true);
        $('#ServiceRemainingAmount').val(ServiceRemainingAmount).prop("disabled", true);


    }

    if (data.BookingObj.paymentList.length != 0) {

        for (i = 0; i < data.BookingObj.paymentList.length; i++) {
            TotalPaidAmount += parseInt(data.BookingObj.paymentList[i].Amount);

        }


    }
    TotalAmountWithserviceAndRoom = parseInt(TotalAmountRoomPriceWithGst + ServiceTotalAmount);
    $('#SummeryTotalAmount').val(TotalAmountWithserviceAndRoom).prop("disabled", true);
    $('#SummeryTotalPaidAmount').val(TotalPaidAmount).prop("disabled", true);
    $('#SummeryRemainingAmount').val(parseInt(TotalAmountWithserviceAndRoom) - parseInt(TotalPaidAmount)).prop("disabled", true);
    var operationsBtnRow = '';
    operationsBtnRow += '<button class="btn btn-danger" id="checkoutBtn">Check Out</button>';
    operationsBtnRow += '<button class="btn "  style="background-color: #79bea8;color: white" id="changeroomBtn"> Change Room </button>';
    operationsBtnRow += '<button class="btn " style="background-color: #803322;color: white" id="extendBtn"> Extend </button>';
    operationsBtnRow += '<button class="btn " style="background-color: #f46407;color: white" id="cancelBtn"> Cancel </button>';
    operationsBtnRow += '<button class="btn " style="background-color: #4e57d2;color: white" id="invoiceBtn"> Invoice </button>';

    $('#bookingOperationsDiv').html(operationsBtnRow)


}