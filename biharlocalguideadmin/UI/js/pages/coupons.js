$('document').ready(function () {
    $('#CouponupdateBtn').hide();
    makeAjax(MAIN_API_IRL + 'Coupons', 'GET', getCoupons);
    makeAjax(MAIN_API_IRL + 'Categories', 'GET', getCategories);
    $('#ValidFrom').datepicker({
        autoclose: true,
        keepOpen: false,
    }).on('change', function () {
        $('.datepicker').hide();
    });
})

function getCategories(data) {
    console.log(data);
    $.each(data, function (i, data) {
        $('#categoryinput').append($("<option style='color: black;'></option>")
            .attr("value", data.CategoriesId)
            .text(data.CategoriesName));
    })
}

function getValidFrom(cindate) {
    var cinDate = cindate.target.value
    $('#checkoutdate').datepicker({
        minDate: getNextDayDate(cinDate),
        todayHighlight: getCurrentDate(),
        autoclose: true

    }).on('change', function () {
        $('.datepicker').hide();
    });
    $('#ValidTo').datepicker('update', getNextDayDate(cinDate));
}
function getCoupons(data) {
    console.log(data);
    var couponRow = '';
    row = 0;
    for (i = 0; i < data.length; i++) {
        couponRow += '<tr>';
        couponRow += '<td>' + ++row + '</td>';
        couponRow += '<td>' + data[i].CouponId + '</td>';
        couponRow += '<td>' + data[i].CategoriesId + '</td>';
        couponRow += '<td>' + data[i].CouponCode + '</td>';
        couponRow += '<td>' + data[i].CouponValue + '</td>';

        var ValidFrom = data[i].ValidFrom.split('T');
        var ValidTo = data[i].ValidTo.split('T');

        couponRow += '<td>' + ValidFrom[0] + ' To ' +ValidTo[0]+'</td>';
        couponRow += '<td><div class="btn-group">';
        couponRow += '<button type="button" class="btn btn-danger">Action</button>';
        couponRow += '<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        couponRow += '<span class="sr-only">Toggle Dropdown</span></button>';

        couponRow += '  <div class="dropdown-menu">';
        couponRow += '    <a class="dropdown-item" onclick="getCouponId(\'' + (btoa(JSON.stringify(data[i]))) + '\')">Edit</a>';
        couponRow += '    <a class="dropdown-item" onclick="getCouponIdForDelete('+data[i].CouponId+')">Delete</a>';
        couponRow += '  </div>';
        couponRow += '</div></td>';

    }
    $('#couponDiv').append(couponRow);
    $('#couponDiv').dataTable({
        responsive: true
    })
}

function getCouponIdForDelete(data){
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
        makeAjax(MAIN_API_IRL+'Coupons/'+data,'DELETE',getCouponDeleteConfirm);
    }
}

function getCouponDeleteConfirm(data){
    console.log(data);
    alert('Coupon '+ data.CouponCode +' deleted successfully ');
    window.location.reload();
}

$('#addCouponBtn').click(function () {
    if ($('#CouponCode').val().trim().length == '') {
        $('#CouponCode').focus();
        makeAlert('warning','CouponCode Required');
        return false;
    }
    if ($('#CouponValue').val().trim().length == '') {
        $('#CouponValue').focus();
        makeAlert('warning','CouponValue Required');
        return false;
    }
    if ($('#ValidFrom').val().trim().length == '') {
        $('#ValidFrom').focus();
        makeAlert('warning','ValidFrom Date Required');
        return false;
    }
    if ($('#ValidTo').val().trim().length == '') {
        $('#ValidTo').focus();
        makeAlert('warning','ValidTo Date Required');
        return false;
    }
  var data ={};
    data.CouponCode = $('#CouponCode').val();
    data.CouponValue = $('#CouponValue').val();
    data.CategoriesId = $('#categoryinput').val();
    data.ValidFrom = $('#ValidFrom').val();
    data.ValidTo = $('#ValidTo').val();
    console.log(data);
    makeAjax(MAIN_API_IRL + 'Coupons', 'POST', getCouponaddStatus, data);
})


function getCouponaddStatus(data) {
    console.log(data);
    alert('New Coupon Add Successfully')
    window.location.reload();
}

function getCouponId(data) {
    data = JSON.parse(atob(data));
    console.log(data);
    var ValidFrom = data.ValidFrom.split('T');
    var ValidTo = data.ValidTo.split('T');
    $('#addCouponBtn').hide();
    $('#CouponupdateBtn').show();
    $('#categoryinput').val(data.CategoriesId);
    $('#CouponId').val(data.CouponId);
    $('#CouponCode').val(data.CouponCode);
    $('#CouponValue').val(data.CouponValue);
    $('#ValidFrom').val(monthdayyearFormateDate(ValidFrom[0]));
    $('#ValidTo').val(monthdayyearFormateDate(ValidTo[0]));
    $('#CouponCode').focus();
}

$('#CouponupdateBtn').click(function () {
    if ($('#CouponCode').val().trim().length == '') {
        $('#CouponCode').focus();
        makeAlert('warning','CouponCode Required');
        return false;
    }
    if ($('#CouponValue').val().trim().length == '') {
        $('#CouponValue').focus();
        makeAlert('warning','CouponValue Required');
        return false;
    }
    if ($('#ValidFrom').val().trim().length == '') {
        $('#ValidFrom').focus();
        makeAlert('warning','ValidFrom Date Required');
        return false;
    }
    if ($('#ValidTo').val().trim().length == '') {
        $('#ValidTo').focus();
        makeAlert('warning','ValidTo Date Required');
        return false;
    }
    var data ={};
    var CouponId = $('#CouponId').val();
    data.CouponCode = $('#CouponCode').val();
    data.CouponValue = $('#CouponValue').val();
    data.CouponId = $('#CouponId').val();
    data.CategoriesId = $('#categoryinput').val();
    data.ValidFrom = $('#ValidFrom').val();
    data.ValidTo = $('#ValidTo').val();
    console.log(data);
    makeAjax(MAIN_API_IRL + 'Coupons/'+CouponId, 'PUT', getCouponUpdateStatus, data);
})


function getCouponUpdateStatus(data) {
    alert('Coupon Updated Successfully')
    window.location.reload();
}