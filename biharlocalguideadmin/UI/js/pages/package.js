$('document').ready(function () {
    var biharCityId = 2;
    makeAjax(MAIN_API_IRL + 'GetActivitiesByCityId/' + biharCityId, 'GET', getActivities);
    makeAjax(MAIN_API_IRL + 'PackageDetails', 'GET', getPackages);
    $('#updatePackageBtn').hide();
})

function getPackages(data) {
    console.log(data);
    var categoryRow = '';
    row = 0;
    for (i = 0; i < data.length; i++) {
        // console.log(data[i].CityName);
        categoryRow += '<tr>';
        categoryRow += '<td>' + ++row + '</td>';
        categoryRow += '<td>' + data[i].PackageDetailsId + '</td>';
        categoryRow += '<td>' + data[i].Name + '</td>';
        categoryRow += '<td>' + data[i].activities.ActivityName + '</td>';
        categoryRow += '<td>' + data[i].Description + '</td>';
        categoryRow += '<td>' + data[i].TimeSlot + '</td>';
        categoryRow += '<td>' + data[i].SellRate + '</td>';
        categoryRow += '<td>' + data[i].SellRateForChild + '</td>';
        categoryRow += '<td>' + data[i].DeclaredRate + '</td>';
        categoryRow += '<td>' + data[i].DeclaredRateForChild + '</td>';
        categoryRow += '<td>' + data[i].Discount + '</td>';
        categoryRow += '<td>' + data[i].DiscountAmount + '</td>';
        categoryRow += '<td>' + data[i].GSTPercentage + '</td>';
        categoryRow += '<td><div class="btn-group">';
        categoryRow += '<button type="button" class="btn btn-danger">Action</button>';
        categoryRow += '<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        categoryRow += '<span class="sr-only">Toggle Dropdown</span></button>';

        categoryRow += '  <div class="dropdown-menu">';
        categoryRow += '    <a class="dropdown-item" onclick="getPackageId(' + data[i].PackageDetailsId + ')">Edit</a>';
        if(authData.UserRoleId ==3) {
            categoryRow += '    <a class="dropdown-item" onclick="getPackageIdForDelete(' + data[i].PackageDetailsId + ')">Delete</a>';
        }
        categoryRow += '  </div>';
        categoryRow += '</div></td>';
        categoryRow += '</tr>';

    }
    $('#packageDiv').append(categoryRow);
    $('#packageDiv').dataTable({
        responsive: true
    })
}
function getPackageId(data) {
    console.log(data);
    makeAjax(MAIN_API_IRL + 'PackageDetails/' + data, 'GET', getPackageByPackageId);
}

function getPackageByPackageId(data){
    $('#addPackageBtn').hide();
    $('#updatePackageBtn').show();
    console.log(data);
    $('#PackageDetailsId').val(data.PackageDetailsId)
    $('#Name').val(data.Name)
    $('#SellRate').val(data.SellRate)
    $('#DeclaredRate').val(data.DeclaredRate)
    $('#SellRateForChild').val(data.SellRateForChild)
    $('#DeclaredRateForChild').val(data.DeclaredRateForChild)
    $('#DeclaredRateForChild').val(data.DeclaredRateForChild)
    $('#GSTPercentage').val(data.GSTPercentage)
    $('#Description').val(data.Description)
    $('#activityinput').val(data.activities.ActivitiesId)
    $('#Name').focus();






}
function getPackageIdForDelete(data){
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
        makeAjax(MAIN_API_IRL+'PackageDetails/'+data,'DELETE',getPackageDeleteConfirm);
    }
}

function getPackageDeleteConfirm(data){
    console.log(data);
    alert('City '+ data.Name +' deleted successfully ');
    window.location.reload();
}
function getActivities(data) {

    console.log(data);
    $.each(data, function (i, data) {
        $('#activityinput').append($("<option style='color: black;'></option>")
            .attr("value", data.ActivitiesId)
            .text(data.ActivityName));
    })
}

$('#addPackageBtn').click(function () {
    if ($('#activityinput').val().trim().length == '') {
        $('#activityinput').focus();
        makeAlert('warning','activityinput Required');
        return false;
    }
    if ($('#Name').val().trim().length == '') {
        $('#Name').focus();
        makeAlert('warning','Name Required');
        return false;
    }
    if ($('#SellRate').val().trim().length == '') {
        $('#SellRate').focus();
        makeAlert('warning','SellRate Required');
        return false;
    }
    if ($('#DeclaredRate').val().trim().length == '') {
        $('#DeclaredRate').focus();
        makeAlert('warning','DeclaredRate Required');
        return false;
    }
    if ($('#SellRateForChild').val().trim().length == '') {
        $('#SellRateForChild').focus();
        makeAlert('warning','SellRateForChild Required');
        return false;
    }
    if ($('#DeclaredRateForChild').val().trim().length == '') {
        $('#DeclaredRateForChild').focus();
        makeAlert('warning','DeclaredRateForChild Required');
        return false;
    }
    if ($('#GSTPercentage').val().trim().length == '') {
        $('#GSTPercentage').focus();
        makeAlert('warning','GSTPercentage Required');
        return false;
    }
    if ($('#starttime').val().trim().length == '') {
        $('#starttime').focus();
        makeAlert('warning','starttime Required');
        return false;
    }
    if ($('#endtime').val().trim().length == '') {
        $('#endtime').focus();
        makeAlert('warning','endtime Required');
        return false;
    }
    if ($('#GSTPercentage').val().trim().length == '') {
        $('#GSTPercentage').focus();
        makeAlert('warning','GSTPercentage Required');
        return false;
    }
    if ($('#Description').val().trim().length == '') {
        $('#Description').focus();
        makeAlert('warning','Description Required');
        return false;
    }
    var DiscountAmount = (parseInt($('#DeclaredRate').val()) - parseInt($('#SellRate').val()));
    var Discountcal = ((DiscountAmount / parseInt($('#DeclaredRate').val())) );
    console.log(Discountcal);
    var Discount = Discountcal * 100;
    var data = {};
    data.ActivitiesId = $('#activityinput').val();
    data.Name = $('#Name').val();
    data.SellRate = $('#SellRate').val();
    data.DeclaredRate = $('#DeclaredRate').val();
    data.SellRateForChild = $('#SellRateForChild').val();
    data.DeclaredRateForChild = $('#DeclaredRateForChild').val();
    data.GSTPercentage = $('#GSTPercentage').val();
    data.TimeSlot = $('#starttime').val() + ':00 - ' + $('#endtime').val()+':00'  ;
    data.GSTPercentage = $('#GSTPercentage').val();
    data.DiscountAmount = DiscountAmount;
    data.Discount = Discount;
    data.Description = $('#Description').val();
    console.log(data);
    makeAjax(MAIN_API_IRL + 'PackageDetails', 'POST', getaddPackageDetailsStatus, data);

})

function getaddPackageDetailsStatus(data) {
    console.log(data);
    alert('Package Added Successfully');
    window.location.reload();
}


$('#updatePackageBtn').click(function () {
    if ($('#activityinput').val().trim().length == '') {
        $('#activityinput').focus();
        makeAlert('warning','activityinput Required');
        return false;
    }
    if ($('#Name').val().trim().length == '') {
        $('#Name').focus();
        makeAlert('warning','Name Required');
        return false;
    }
    if ($('#SellRate').val().trim().length == '') {
        $('#SellRate').focus();
        makeAlert('warning','SellRate Required');
        return false;
    }
    if ($('#DeclaredRate').val().trim().length == '') {
        $('#DeclaredRate').focus();
        makeAlert('warning','DeclaredRate Required');
        return false;
    }
    if ($('#SellRateForChild').val().trim().length == '') {
        $('#SellRateForChild').focus();
        makeAlert('warning','SellRateForChild Required');
        return false;
    }
    if ($('#DeclaredRateForChild').val().trim().length == '') {
        $('#DeclaredRateForChild').focus();
        makeAlert('warning','DeclaredRateForChild Required');
        return false;
    }
    if ($('#GSTPercentage').val().trim().length == '') {
        $('#GSTPercentage').focus();
        makeAlert('warning','GSTPercentage Required');
        return false;
    }
    if ($('#starttime').val().trim().length == '') {
        $('#starttime').focus();
        makeAlert('warning','starttime Required');
        return false;
    }
    if ($('#endtime').val().trim().length == '') {
        $('#endtime').focus();
        makeAlert('warning','endtime Required');
        return false;
    }
    if ($('#GSTPercentage').val().trim().length == '') {
        $('#GSTPercentage').focus();
        makeAlert('warning','GSTPercentage Required');
        return false;
    }
    if ($('#Description').val().trim().length == '') {
        $('#Description').focus();
        makeAlert('warning','Description Required');
        return false;
    }
    var PackageDetailsId = $('#PackageDetailsId').val();
    var DiscountAmount = (parseInt($('#DeclaredRate').val()) - parseInt($('#SellRate').val()));
    var Discountcal = ((DiscountAmount / parseInt($('#DeclaredRate').val())) );
    console.log(Discountcal);
    var Discount = Discountcal * 100;
    var data = {};
    data.ActivitiesId = $('#activityinput').val();
    data.PackageDetailsId = $('#PackageDetailsId').val();
    data.Name = $('#Name').val();
    data.SellRate = $('#SellRate').val();
    data.DeclaredRate = $('#DeclaredRate').val();
    data.SellRateForChild = $('#SellRateForChild').val();
    data.DeclaredRateForChild = $('#DeclaredRateForChild').val();
    data.GSTPercentage = $('#GSTPercentage').val();
    data.TimeSlot = $('#starttime').val() + ':00 - ' + $('#endtime').val()+':00'  ;
    data.GSTPercentage = $('#GSTPercentage').val();
    data.DiscountAmount = DiscountAmount;
    data.Discount = Discount;
    data.itinerary = "";
    data.Description = $('#Description').val();
    console.log(data);
    makeAjax(MAIN_API_IRL + 'PackageDetails/'+PackageDetailsId, 'PUT', getaddPackageDetailsUpdateStatus, data);

})

function getaddPackageDetailsUpdateStatus(data) {
    // console.log(data);
    alert('Package Updated Successfully');
    window.location.reload();
}

function getPackageIdForDelete(data) {
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
        makeAjax(MAIN_API_IRL + 'PackageDetails/' + data, 'DELETE', getPackageDeleteConfirm);
    }
}

function getPackageDeleteConfirm(data) {
    console.log(data);
    alert('Package  ' + data.Name + ' deleted successfully ');
    window.location.reload();
}