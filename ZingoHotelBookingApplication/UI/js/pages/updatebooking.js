$(document).ready(function () {
    makeAjax(MAIN_API_IRL + 'RoomBookings/' + BookingId, 'GET', GetBookingByRoomId, auth);
});

var BookingObj = {};
var TravellerObj = {};
var HotelObj = {};
var BookingTravellerData = {};


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

    if(data.servicesList.length>0){
        var serviceList = '';
        $('#serviceTable tbody').empty();

        for(var i=0; i<data.servicesList.length; i++){
            // console.log('New data' +i  , data.servicesList[i]);

            serviceList+= '<tr>';
            serviceList+= '<td>' + (i+1) + '</td>'; //s no
            serviceList+= '<td><input type="text" id="descServices'+i+'" value=" '+ data.servicesList[i].Description +' " ></td>' ;
            serviceList+= '<td><input type="text" id="priceServices'+i+'" value=" '+ data.servicesList[i].Amount +' " ></td>'  ;
            serviceList+= '<td><input type="text" id="payStatusServices'+i+'" value=" '+ data.servicesList[i].PaidStatus +' " ></td>';
            serviceList+= '<td><input type="text" id="paymentModeServices'+i+'" value=" '+ data.servicesList[i].PaymentMode +' " ></td>';
            serviceList+= '<td><input type="button" class="btn btn-success btn-sm" onclick="updateBtnServices('+i+')" value=" Update " ></td>';
            serviceList+= '</tr>';
        }
        $('#serviceTable').append(serviceList);

    }else {
        // alert("No services to edit");
    }
}

function updateBtnServices(index) {
    var desc = $('#descServices' + index).val();
    var price = $('#priceServices' + index).val();
    var payStatus = $('#payStatusServices' + index).val();
    var payMode = $('#paymentModeServices' + index).val();

    var serviceObj = BookingObj.servicesList[index];
    serviceObj.Description = desc;
    serviceObj.Amount = parseInt(price);
    serviceObj.PaidStatus = payStatus;
    serviceObj.PaymentMode = payMode;

    console.log('my new obj', serviceObj);

    var serviceId = serviceObj.ServicesId;

    // alert( desc + price + payStatus + payMode);
    makeAjax(MAIN_API_IRL + 'Services/'+serviceId, 'PUT', updateService, auth, serviceObj);


}

function updateService(data) {
    if(data){
        alert("Services updated sucessfully !");
        location.reload();
    }else{
        alert("Unable to update!");
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
    HotelObj.ContactNo = data[0].ContactNo;
    HotelObj.Email = data[0].Email;
    HotelObj.GSTNumber = data[0].GSTNumber;
    BookingTravellerData.HotelObj = HotelObj;
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
    // console.log("my booking obj",data.BookingObj);
    userDetailMainObject = data.BookingObj; // this is a global received image added after nishant

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

    $("#CheckOutDate").datepicker({
        format: 'mm-dd-yyyy'
    });
    $("#CheckOutDate").on("change", function () {
        var fromdate = $(this).val();
        updateonKeyUp();
    });

    $("#CheckInDate").datepicker({
        format: 'mm-dd-yyyy'
    });
    $("#CheckInDate").on("change", function () {
        var indate = $(this).val();
        updateonKeyUp();
    });


    $('#CheckInDate').val(data.BookingObj.CheckInDate).prop("disabled", false);
    $('#CheckOutDate').val(data.BookingObj.CheckOutDate).prop("disabled", false);
    $('#BookingId').val(data.BookingObj.BookingId).prop("disabled", false);
    $('#RoomId').val(data.BookingObj.RoomId).prop("disabled", false);

    $('#PhoneNumber').val(data.TravellerObj.PhoneNumber).prop("disabled", true);
    $('#FirstName').val(data.TravellerObj.FirstName).prop("disabled", true);
    $('#Email').val(data.TravellerObj.Email).prop("disabled", true);
    $('#Gender').val(data.TravellerObj.Gender).prop("disabled", true);

    $('#NoOfRooms').val(data.BookingObj.NoOfRooms).prop("disabled", false);
    $('#NoOfAdults').val(data.BookingObj.NoOfAdults).prop("disabled", false);
    $('#NoOfChild').val(data.BookingObj.NoOfChild).prop("disabled", false);
    $('#BookingSourceType').val(data.BookingObj.BookingSourceType).prop("disabled", false);
    $('#BookingSource').val(data.BookingObj.BookingSource).prop("disabled", false);
    $('#BookingPlan').val(data.BookingObj.BookingPlan).prop("disabled", false);
    $('#RoomCategory').val(data.BookingObj.RoomCategory).prop("disabled", false);

    $('#SellRate').val(data.BookingObj.SellRate).prop("disabled", false);
    $('#GSTPercent').val(data.BookingObj.GST).prop("disabled", false);
    $('#GSTAmount').val(data.BookingObj.GSTAmount).prop("disabled", false);
    $('#TotalAmount').val(data.BookingObj.TotalAmount).prop("disabled", false);
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

    // console.log("bookingtravellersdata : " , viewBookingTravelerData())

    // After Nishant Bhai (New Function added)    ----------------------------------

    $('#updateBtn').click(function () {
        // data = JSON.stringify(data);

        userDetailMainObject.NoOfAdults =  $('#NoOfAdults').val() ;
        userDetailMainObject.NoOfChild =   $('#NoOfChild').val();
        userDetailMainObject.BookingPlan = $('#BookingPlan').val();
        userDetailMainObject.RoomCategory =$('#RoomCategory').val();
        userDetailMainObject.BookingSourceType = $('#BookingSourceType').val();
        userDetailMainObject.BookingSource = $('#BookingSource').val();
        userDetailMainObject.NoOfRooms = $('#NoOfRooms').val();
        userDetailMainObject.SellRate = $('#SellRate').val();
        userDetailMainObject.GST = $('#GSTPercent').val();
        userDetailMainObject.GSTAmount = $('#GSTAmount').val();
        userDetailMainObject.TotalAmount = $('#TotalAmount').val();
        //Payment Service

        // console.log("Mailobject",userDetailMainObject);
         makeAjax('http://zingoapi.azurewebsites.net/api/RoomBookings/'+ userDetailMainObject.BookingId, 'PUT', updateBooking, auth,userDetailMainObject );
    });

}


$('#NoOfRooms').keyup(function () {
   updateonKeyUp();
});

$('#SellRate').keyup(function() {
    updateonKeyUp();
});

$('#CheckOutDate').keyup(function () {
   updateonKeyUp();
});

$('#CheckInDate').keyup(function() {
    updateonKeyUp();
});




function updateonKeyUp() {

    if($('#CheckInDate').val().length == ''){
        $('#CheckInDate').focus();
        makeAlert('warning','Please select check in Date ');
        return false;
    }

    if($('#CheckOutDate').val().length == ''){
        $('#CheckOutDate').focus();
        makeAlert('warning','Please select check out Date ');
        return false;
    }

    var checkindate = $('#CheckInDate').val();
    var checkoutdate = $('#CheckOutDate').val();
    var NoofNights = numOfDaysBeteenDates(checkindate, checkoutdate);
    var NoOfRooms =  $('#NoOfRooms').val();
    var RoomPricewithGst = 0;
    var TotalRoomPricewithGSTXdayXnights =0;

    var totalgstamt = 0;



    var totalAmountwithgst =0;
    var sellRate =  $('#SellRate').val();
    if (sellRate < 1000) {
        gst = 0;
        totalgstamt = ((gst / 100) * sellRate);
    } else if (sellRate >= 1000 && sellRate < 2500) {
        gst = 12;
        totalgstamt = ((gst / 100) * sellRate);

    } else if (sellRate >= 2500 && sellRate <7500) {
        gst = 18;
        totalgstamt = ((gst / 100) * sellRate);
    } else {
        gst = 28;
        totalgstamt = ((gst / 100) * sellRate);
    }
    $('#GSTPercent').val(gst);
    RoomPricewithGst = parseFloat(parseInt(sellRate) + parseInt(totalgstamt));
    $('#GSTAmount').val(parseInt(totalgstamt));
    TotalRoomPricewithGSTXdayXnights =  parseFloat(parseInt(NoofNights) * parseInt(NoOfRooms) * parseInt(RoomPricewithGst));
    $('#TotalAmount').val(TotalRoomPricewithGSTXdayXnights);


    var summaryTotalAmount =  TotalRoomPricewithGSTXdayXnights + parseInt($('#ServiceTotalAmount').val());
    var summaryRemainingAmount =  summaryTotalAmount - parseInt($('#SummeryTotalPaidAmount').val()) ;


    $('#SummeryTotalAmount').val(summaryTotalAmount);
    $('#SummeryRemainingAmount').val(summaryRemainingAmount);

}


function numOfDaysBeteenDates(checkInDate, checkOutDate) {
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    }

    function datediff(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }

    var days = datediff(parseDate(checkInDate), parseDate(checkOutDate));
    return days;
}


function updateBooking(data){
    console.log("update",data);
    alert('Data Updated successfully');
    location.reload();
}