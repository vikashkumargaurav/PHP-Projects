function triggerStayView(){

    // alert('2nd trigger stayview..')

    $(document).ready(function () {
        makeAjaxWithoutLoader(MAIN_API_IRL + 'RoomBooking/GetAllBookingCustomAPI/' + hotelId, 'GET', GetAllBookingCustomAPI, auth);
        makeAjaxWithoutLoader(MAIN_API_IRL + 'Hotels/GetRoomsByHotelId/' + hotelId, 'GET', GetRoomsByHotelId, auth);

    })
}

var TodayBookingList = [];
var TodayQuickBookingList = [];
var TodayActiveBookingList = [];

function GetAllBookingCustomAPI(data) {
    // console.log(data);



    // var getCurrentDate = getCurrentDate();
    for (i = 0; i < data.length; i++) {
        if ((data[i].roomBooking.CheckInDate <= getCurrentDate()) && (data[i].roomBooking.CheckOutDate >= getCurrentDate())) {
            // console.log('stayview',data[i]);
            TodayBookingList.push(data[i].roomBooking);
            var RoomStatus = searchObjectByKey(RoomObj,'RoomId',data[i].roomBooking.RoomId,'Status');
            if (data[i].roomBooking.BookingStatus == "Active") {
                TodayActiveBookingList.push(data[i])
                $('#RoomId_' + data[i].roomBooking.RoomId).css("background-color", "#EB4B34");
            } else if (data[i].roomBooking.BookingStatus == "Unclean") {
                $('#RoomId_' + data[i].roomBooking.RoomId).css({"background-color": "#ebea3a"});
            } else if (data[i].roomBooking.BookingStatus == "Blocked") {
                $('#RoomId_' + data[i].roomBooking.RoomId).css({"background-color": "#000000"});
            } else if (data[i].roomBooking.BookingStatus == "Delay") {
                $('#RoomId_' + data[i].roomBooking.RoomId).css({"background-color": "#0000FF"});
            } /*else if (data[i].roomBooking.BookingStatus == "Cancel") {
                $('#RoomId_' + data[i].roomBooking.RoomId).css({"background-color": "#4e57d2"});
            } */else if (data[i].roomBooking.BookingStatus == "Quick") {
                TodayQuickBookingList.push(data[i].roomBooking);
                $('#RoomId_' + data[i].roomBooking.RoomId).css({"background-color": "#0000FF"});
            }else if (data[i].roomBooking.BookingStatus == "Completed"&&RoomStatus=="Unclean") {
                $('#RoomId_' + data[i].roomBooking.RoomId).css({"background-color": "#ebea3a"});
            }else if (RoomStatus == 'Blocked'){
                $('#RoomId_' + data[i].roomBooking.RoomId).css({"background-color": "#000000"});

            }
        }
    }

    if (TodayQuickBookingList.length != 0) {
        // alert(TodayQuickBookingList.length);
        $('#todayQuickBookNotfContainer').show();
        showQuickBookings(TodayQuickBookingList);
    }

    // 3rd trigger
    triggerDashBoard();

}

//---------------------------------------ROOM ALLOCATION TO QUICK BOOKING -------------------------------------------------
var QuickBookingObj = {};

function showQuickBookings(data) {
    data.reverse();
    // console.log(data);
    var QuickBookingRow = '';
    for (i = 0; i < data.length; i++) {
        if (i < 5) {
            QuickBookingRow += '<div class="alert alert-secondary" >';
            QuickBookingRow += '<div class="row">';

            QuickBookingRow += '<div class="col-md-2">';
            QuickBookingRow += '<h6>' + data[i].RoomCategory + '<br><span> #' + data[i].BookingId + '</span></h6>';
            QuickBookingRow += ' </div>';
            QuickBookingRow += '<div class="col-md-4">';
            QuickBookingRow += ' <p><span>' + data[i].CheckInDate + '</span><br><span>Check In</span></p>';
            QuickBookingRow += ' </div>';
            QuickBookingRow += '<div class="col-md-4">';
            QuickBookingRow += '<p><span>' + data[i].CheckOutDate + '</span><br><span>Check Out</span></p>';
            QuickBookingRow += '</div>';
            QuickBookingRow += '<div class="col-md-2">';
            QuickBookingRow += '<span class="float-right badge badge-secondary">' + data[i].BookingStatus + '</span>';
            QuickBookingRow += '</div>';
            QuickBookingRow += '<div class="col-md-12">';
            QuickBookingRow += '<button class="btn btn-danger float-right" onclick="getBookingIdforQuickBookingRoomAllocation(' + data[i].BookingId + ')">Allocate Room</button>';
            QuickBookingRow += ' </div>';
            QuickBookingRow += '<hr>';
            QuickBookingRow += '</div>';
            QuickBookingRow += '</div>';
        } else {
            break;
        }

    }
    $('#QuickBookingDiv').append(QuickBookingRow);
}

function getBookingIdforQuickBookingRoomAllocation(data) {
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'RoomBookings/' + data, 'GET', getBookingByBookingId, auth)
}

function getBookingByBookingId(BookingObj) {
    QuickBookingObj = BookingObj;
    // console.log(BookingObj)
    var data = {};
    data.HotelId = BookingObj.HotelId;
    data.FromDate = BookingObj.CheckInDate;
    // data.FromDate = '10/25/2018';
    data.ToDate = BookingObj.CheckOutDate;
    // data.ToDate = "10/27/2018";
    // console.log(data);
    // makeAjax(MAIN_API_IRL + 'Agent/GetAvailabilityOfCategoryBetweenDatesOfParticularHotel', 'POST', getHotelAvilabilityDetails, auth,data);
    makeAjax(MAIN_API_IRL + 'Agent/GetCategoryAvailabilityByDateAndHotelIdAndFromDate', 'POST', getHotelAvilabilityDetails, auth, data);

}

function getHotelAvilabilityDetails(data) {
    // console.log(data)
    $('#selectRoomModel').click();
    $('#RoomDiv').empty();
    var roomNumberRow = '';
    for (i = 0; i < data.length; i++) {
        roomNumberRow += '<div class="col-xs-4 col-sm-3 col-md-2 nopad text-center">';
        roomNumberRow += '<label class="room-checkbox" id="room-checkbox">';
        roomNumberRow += '<img width="100%" class="img-responsive" src="https://cdn.iconscout.com/icon/free/png-256/dnd-door-hotel-room-travel-door-card-30136.png" />';
        roomNumberRow += '<input type="radio" name="RoomNo" value="' + data[i].RoomId + '" />';
        roomNumberRow += '<i class="fa fa-check" style="display: none"></i>';
        roomNumberRow += '</label>';
        roomNumberRow += '<p>' + data[i].RoomNo + '</p>';
        roomNumberRow += '</div>';
    }
    $('#RoomDiv').append(roomNumberRow);
}

$('#selectRoomBtn').click(function () {
    // alert($("input[name='RoomNo']:checked").val());
    var requestedRoomId = $("input[name='RoomNo']:checked").val();
    if ($("input[name='RoomNo']:checked").val() == undefined) {
        alert('Please select the room');
        return false;
    }
    QuickBookingObj.RoomId = $("input[name='RoomNo']:checked").val();
    QuickBookingObj.BookingStatus = 'Quick';
    // console.log(QuickBookingObj);
    makeAjax('http://zingoapi.azurewebsites.net/api/RoomBookings/' + QuickBookingObj.BookingId, 'PUT', getBookNowRoomAddResponse, auth, QuickBookingObj);
})

function getBookNowRoomAddResponse(data) {
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Rooms/' + QuickBookingObj.RoomId, 'GET', GetRoomByRoomId, auth);


}

function GetRoomByRoomId(data) {
    data.Status = 'Booked';
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Rooms/UpdateRooms/' + QuickBookingObj.RoomId, 'PUT', getUpdateRoomsStatusResponse, auth, data);
}

function getUpdateRoomsStatusResponse(data) {
    // console.log(data);
    alert('Room Allocated ');
    getBookingIdForViewDetails(QuickBookingObj.BookingId);

    // location.reload();
}

$('#CloseselectRoomBtn').click(function () {

    alert('Booking Done Room not allocated ')
    location.reload();

})
//---------------------------------------ROOM ALLOCATION TO QUICK BOOKING -------------------------------------------------
var RoomIdList = [];
var RoomObj ;

function GetRoomsByHotelId(data) {

    RoomObj = data;
    $('#CurrentDate').text(getCurrentDate());
    // console.log(data);
    var stayViewOfRoomsRow = '';
    for (i = 0; i < data.length; i++) {
        RoomIdList.push(data[i].RoomId);
        stayViewOfRoomsRow += '<div style="cursor: pointer;" class="col-xl-2 col-sm-2 mb-2" onclick="getRoomId(' + data[i].RoomId + ')">';
        stayViewOfRoomsRow += '<div class="card text-white text-center  o-hidden" id="RoomId_' + data[i].RoomId + '">';
        stayViewOfRoomsRow += '<span style="padding: 12px;" class="">' + data[i].RoomNo + '</span>';
        stayViewOfRoomsRow += ' </div>';
        stayViewOfRoomsRow += ' </div>';

    }
    $('#stayViewOfRooms').append(stayViewOfRoomsRow);
    for (j = 0; j < RoomIdList.length; j++) {
        // $('#RoomId_' + RoomIdList[j]).css({"background-color": "#77c54b"});

        var RoomStatus = searchObjectByKey(RoomObj,'RoomId',RoomIdList[j],'Status');
        if(RoomStatus == 'Blocked'){
            $('#RoomId_' + RoomIdList[j]).css({"background-color": "#000000"});

        }else {
            $('#RoomId_' + RoomIdList[j]).css({"background-color": "#77c54b"});

        }


    }
    // $('#RoomId_'+data[i].RoomId).css({"background-color": "blue"});


    // $('#stayViewMainContainer').css({'visibility':'visible'});
}

function getRoomId(RoomId) {

    // console.log(RoomId);
    var status = searchObjectByKey(TodayBookingList, 'RoomId', RoomId, 'BookingStatus');
    var RoomStatus = searchObjectByKey(RoomObj, 'RoomId', RoomId, 'Status');
    // console.log(status);
    // console.log(RoomStatus);
    if (status == "Active") {
        makeAjax(MAIN_API_IRL + 'RoomBooking/GetActiveBookingByRoomId/' + hotelId + '/' + RoomId, 'GET', GetActiveBookingByRoomId, auth);
    } else if (status == 'Completed' && RoomStatus == 'Unclean') {

    } else if (status == '0' && RoomStatus != 'Blocked') {

        // activating dynamic modal trigger
        var currRoomObj = {};
        $('#activeBookingModalBtn').click();
        for (var x = 0; x < RoomObj.length; x++) {
            if (RoomId === RoomObj[x].RoomId) {
                currRoomObj = RoomObj[x];
                break;
            }
        }

        $('#blockAvailRoom').click(function () {
            $('.close').click();
            if(currRoomObj.RoomNo) {
                currRoomObj.Status = "Blocked";
                var r = confirm("Do You want to block Room No. " + currRoomObj.RoomNo);
                if (r === true) {
                    makeAjax(MAIN_API_IRL + 'Rooms/UpdateRooms/' + RoomId, 'PUT', function (data) {
                        if (data) {
                            $('#RoomId_' + RoomId).css({"background-color": "#000000"});
                            // $('#RoomId_'+RoomId).prop('disabled', true);
                            alert('Room Blocked Successfully ')
                            currRoomObj = {};
                            RoomObj[j].Status = "Blocked";
                            // window.location.reload();
                        } else {
                            makeAlert('Warning', 'Something went wrong !')
                            currRoomObj = {};
                        }

                    }, auth, currRoomObj);
                } else {
                    currRoomObj = {};

                }
            }
        });

        $('#bookAvailRoom').click(function () {
            // window.location.href = 'index.php?page_name=quickbooking&hotelId=' + hotelId;
            // close the modal
            if(currRoomObj.RoomNo) {
                $('#directRoomBookingTrigger').click();
                directBook(currRoomObj); // further functionality in roombooking.js
            }
            $('#bookAvailRoom').unbind(); // unbinding the current listener
        });

    } else if (status == 'Quick') {

        makeAjax(MAIN_API_IRL + 'RoomBooking/GetDelayBookingByHotelIdAndRoomId/' + hotelId + '/' + RoomId, 'GET', GetActiveBookingByRoomId, auth);
    }
    else if (RoomStatus == 'Blocked') {

        var currRoomObj = {};
        for (var j = 0; j < RoomObj.length; j++) {
            if (RoomId === RoomObj[j].RoomId) {
                currRoomObj = RoomObj[j];
                break;
            }
        }
        var r = confirm("Do You want to un-block Room No " + currRoomObj.RoomNo);
        if (r == true) {
            currRoomObj.Status = "Available";
            makeAjax(MAIN_API_IRL + 'Rooms/UpdateRooms/' + RoomId, 'PUT', function (data) {
                if (data) {
                    $('#RoomId_' + RoomId).css({"background-color": "#77c54b"});
                    alert('Room Unblocked  Successfully')
                } else {
                    makeAlert('Warning', 'Something went wrong !')
                }

            }, auth, currRoomObj);
        } else {
        }

    }
}




function GetActiveBookingByRoomId(data) {
    // console.log(data);
    var data = data[data.length-1];
    makeAjax(MAIN_API_IRL + 'Travellers/' + data.TravellerId, 'GET', getTravellerByTravellerId, auth);
    $('#StayViewModel').click();
    // console.log(data);
    $('#BookingId').val(data.BookingId);
    $('#BookingNumber').val(data.BookingNumber);
    $('#RoomId').val(data.RoomId);
    $('#TravellerId').val(data.TravellerId);
    // $('#CheckInDate').val(data.CheckInDate);
    // $('#CheckOutDate').val(data.CheckOutDate);
    $('#SellRate').val(data.SellRate);
    $('#GSTAmount').val(data.GSTAmount);
    $('#ExtraCharges').val(data.ExtraCharges);
    $('#TotalAmount').val(data.TotalAmount);


    var RoomNo = searchObjectByKey(RoomObj,'RoomId',data.RoomId,'RoomNo');
    $('#ShowRoomNo').text(RoomNo);
    // alert(searchObjectByKey(RoomObj,'RoomId',data.RoomId,'RoomNo'))
    $('#CheckInDate').text(data.CheckInDate);
    $('#CheckOutDate').text(data.CheckOutDate);
    $('#ShowTotalAmount').text('₹ ' + data.TotalAmount);
    $('#ShowBalanceAmount').text('₹ ' + data.BalanceAmount);
    $('#ShowBookingId').text(data.BookingId);
    $('#ShowAdult').text(data.NoOfAdults + ' Adults');
    $('#ShowChild').text(data.NoOfChild + ' Child');
    $('#StayViewBookingModelFooter').html('<button style="width: 100%" type="button" class="btn btn-danger" onclick="getBookingIdForViewDetails(' + data.BookingId + ')">View Details</button>')

    if (data.servicesList.length != 0) {
        $('#servicesDiv').empty();
        $('#viewServiceDiv').show();
        $('#viewServiceBtn').show();
        // console.log('Indeis');
        var servicesRow = '';
        for (i = 0; i < data.servicesList.length; i++) {
            servicesRow += '<div class="row">';
            servicesRow += '<div class="col">';
            servicesRow += '<h6 class="float-left">' + data.servicesList[i].Description + '</h6>';
            servicesRow += ' </div>';

            servicesRow += '<div class="col">';
            servicesRow += '<h6 class="">' + data.servicesList[i].PaymentMode + '</h6>';
            servicesRow += ' </div>';

            servicesRow += '<div class="col">';
            servicesRow += '<h6 class="float-right">₹ ' + data.servicesList[i].Amount + '</h6>';
            servicesRow += ' </div>';

            servicesRow += ' </div>';

        }

        $('#servicesDiv').append(servicesRow);
    } else {
        // console.log('outside');
        $('#viewServiceDiv').hide();
        $('#servicesDiv').empty();
        $('#viewServiceBtn').hide();
    }

    // if((data.paymentList.length != 0 )|| (data.paymentList != null)){
    //     $('#showPaymentsDiv').show();
    //     $('#showPaymentsDiv').empty();
    //     // $('#viewServiceBtn').show();
    //     var paymentRow = '';
    //     for(i=0;i<data.paymentList.length;i++){
    //         paymentRow += '<div class="row">';
    //         paymentRow += '<div class="col">';
    //         paymentRow += '<h6 class="float-left">'+data.paymentList[i].PaymentName+'</h6>';
    //         paymentRow += ' </div>';
    //
    //         paymentRow += '<div class="col">';
    //         paymentRow += '<h6 class="">'+data.paymentList[i].PaymentType+'</h6>';
    //         paymentRow += ' </div>';
    //
    //         paymentRow += '<div class="col">';
    //         paymentRow += '<h6 class="float-right">₹ '+data.paymentList[i].Amount+'</h6>';
    //         paymentRow += ' </div>';
    //
    //         paymentRow += ' </div>';
    //
    //     }
    //
    //     $('#showPaymentsDiv').append(paymentRow);
    // }else{
    //     $('#showPaymentsDiv').hide();
    //     $('#showPaymentsDiv').empty();
    // }

}

function getTravellerByTravellerId(data) {
    // console.log(data);
    $('#FirstName').text(data.FirstName);
}

// $('#addServiceBtn').click(function () {
//     $('#ServiceDiv').toggle();
//     $('#PaymentDiv').hide();
// })
// $('#addPaymentBtn').click(function () {
//     $('#PaymentDiv').toggle();
//     $('#ServiceDiv').hide();
// })

$('#AddServiceApiPostBtn').click(function () {
    var data = {};
    if ($('#Description').val().length == '') {
        $('#Description').focus();
        alert('Service Name Required');
        return false;

    }
    if ($('#Amount').val().length == '') {
        $('#Amount').focus();
        alert('Service Price Required');
        return false;

    }
    data.Description = $('#Description').val();
    data.Amount = $('#Amount').val();
    data.PaidStatus = $('#PaidStatus').val();
    data.PaymentMode = $('#PaymentMode').val();
    data.BookingId = $('#BookingId').val();
    data.BookingNumber = $('#BookingNumber').val();
    data.PaymentDate = getCurrentDate();
    // data.ServiceStatus   = 'Completed';
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Services', 'POST', GetAddServicesReponse, auth, data);
})

function GetAddServicesReponse(data) {
    // console.log(data);
    alert('Service Added ');
    location.reload();

}

$('#AddPaymentApiPostBtn').click(function () {
    var data = {};
    if ($('#PaymentAmount').val().length == '') {
        $('#PaymentAmount').focus();
        alert('Service Price Required');
        return false;

    }
    data.PaymentName = $('#PaymentName').val();
    data.Amount = $('#PaymentAmount').val();
    data.PaymentType = $('#PaymentType').val();
    data.Remarks = $('#Remarks').val();
    data.BookingId = $('#BookingId').val();
    data.BookingNumber = $('#BookingNumber').val();
    data.PaymentDate = getCurrentDate();
    // data.ServiceStatus   = 'Completed';
    // console.log(data);
    makeAjax(MAIN_API_IRL + 'Payments', 'POST', GetAddPaymentsReponse, auth, data);
})

function GetAddPaymentsReponse(data) {
    // console.log(data);
    alert('Payment Added ');
    location.reload();
}

function searchObjectByKey(a, key, value, returnkey) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][key] === value) {
            return a[i][returnkey];
        }
    }
    return 0;
}