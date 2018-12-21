function getBookingId(BookingId) {
    // console.log(BookingId);
    makeAjax(MAIN_API_IRL + 'RoomBookings/' + BookingId, 'GET', getBookingByBookingId, auth);
}


var isAuditedBefore = 0;
function getBookingByBookingId(data) {
    $('#auditUpdateModel').click();
    // console.log(data);
    $('#BookingId').val(data.BookingId);
    $('#RoomId').val(data.RoomId);
    $('#TravellerId').val(data.TravellerId);
    $('#CheckInDate').val(data.CheckInDate);
    $('#CheckOutDate').val(data.CheckOutDate);
    $('#SellRate').val(data.SellRate);
    $('#GSTAmount').val(data.GSTAmount);
    $('#ExtraCharges').val(data.ExtraCharges);
    $('#TotalAmount').val(data.TotalAmount);
    if(data.auditSettlementList.length !=0){
        isAuditedBefore = 1;
        $('#AuditSettlementId').val(data.auditSettlementList[0].AuditSettlementId);
        $('#PaymentMode').val(data.auditSettlementList[0].PaymentMode);
        $('#PaymentStatus').val(data.auditSettlementList[0].PaymentStatus);
        $('#AuditingSellRate').val(data.auditSettlementList[0].AuditingSellRate);
        $('#AuditingGST').val(data.auditSettlementList[0].AuditingGST);
        $('#AuditingExtra').val(data.auditSettlementList[0].AuditingExtra);
        $('#DifferenceAmount').val(data.auditSettlementList[0].DifferenceAmount);
        $('#Remark').val(data.auditSettlementList[0].Remark);
    }else{
        isAuditedBefore = 0;
        $('#PaymentMode').val('');
        $('#PaymentStatus').val('');
        $('#AuditingSellRate').val('');
        $('#AuditingGST').val('');
        $('#AuditingExtra').val('');
        $('#DifferenceAmount').val('');
        $('#Remark').val('');
    }
}

$('#AuditingSellRate , #AuditingExtra').keyup(function () {

    var CheckingTotalAmount;
    var TotalAmount = parseInt($('#TotalAmount').val());
    var
    CheckingTotalAmount = parseInt($('#SellRate').val()) + parseInt($('#GSTAmount').val()) + parseInt($('#ExtraCharges').val())
    if (TotalAmount != CheckingTotalAmount) {
        makeAlert('warning', 'wrong calculation ple check it');
    }

    var AuditingTotal ;
    var AuditingGST = calculatesellRateGst(parseInt($('#AuditingSellRate').val()));
    $('#AuditingGST').val(AuditingGST);
    AuditingTotal = (parseInt($('#AuditingSellRate').val()) + parseInt(AuditingGST) + parseInt($('#AuditingExtra').val()));
    $('#DifferenceAmount').val(TotalAmount - AuditingTotal);

})

$('#AuditUpdateBtn').click(function () {
    if($('#PaymentMode').val().length == 0){
        $('#PaymentMode').focus();
        alert('PaymentMode Required');
        return false;
    }
    if($('#PaymentStatus').val().length == 0){
        $('#PaymentStatus').focus();
        alert('PaymentStatus Required');
        return false;
    }
    if($('#AuditingSellRate').val().length == 0){
        $('#AuditingSellRate').focus();
        alert('AuditingSellRate Required');
        return false;
    }

    if($('#AuditingGST').val().length == 0){
        $('#AuditingGST').focus();
        alert('AuditingGST Required');
        return false;
    }

    if($('#AuditingExtra').val().length == 0){
        $('#AuditingExtra').focus();
        alert('AuditingExtra Required');
        return false;
    }

    var data = {};

    data.BookingId = $('#BookingId').val();
    data.SettlementDate = getCurrentDate();
    data.PaymentMode = $('#PaymentMode').val();
    data.PaymentStatus = $('#PaymentStatus').val();
    data.AuditingSellRate = $('#AuditingSellRate').val();
    data.AuditingGST = $('#AuditingGST').val();
    data.AuditingExtra = $('#AuditingExtra').val();
    data.DifferenceAmount = $('#DifferenceAmount').val();
    data.Remark = $('#Remark').val();
    data.CreatedBy = authData.UserName;

    // console.log(data);
    if(isAuditedBefore == 0){
        makeAjax(MAIN_API_IRL+'AuditSettlements','POST',getAuditPostResponse,auth,data);
    }else{
        data.AuditSettlementId = $('#AuditSettlementId').val();
        // console.log(data);
        makeAjax(MAIN_API_IRL+'AuditSettlements/'+$('#AuditSettlementId').val(),'PUT',getAuditUpdateResponse,auth,data);
    }

})
function getAuditUpdateResponse(data) {
    // console.log(data);
    alert('Audit Update Done ');
    location.reload();
}

function getAuditPostResponse(data) {
    // console.log(data);
    alert('Audit Update Done ');
    location.reload();
}
function calculatesellRateGst(sellRate) {
    var totalgstamt = 0;
    var totalAmountwithgst =0;
    // var sellRate =  $('#sellRate').val();
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
    // $('#totalamount').val(parseFloat(parseInt(sellRate) + parseInt(totalgstamt)));
    // $('#gstamount').val(totalgstamt);
    // $('#gstpercentage').val(gst);
    return totalgstamt;
}