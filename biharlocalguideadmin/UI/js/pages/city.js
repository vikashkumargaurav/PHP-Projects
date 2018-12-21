$('document').ready(function () {
    $('#cityupdateBtn').hide();
    makeAjax(MAIN_API_IRL + 'Cities', 'GET', getCities);
})

function getCities(data) {
    console.log(data);
    var cityRow = '';
    row = 0;
    for (i = 0; i < data.length; i++) {
        console.log(data[i].CityName);
        cityRow += '<tr>';
        cityRow += '<td>' + ++row + '</td>';
        cityRow += '<td>' + data[i].CityId + '</td>';
        cityRow += '<td>' + data[i].CityName + '</td>';
        cityRow += '<td>';
        if (data[i].categoriesList != null) {
            for (j = 0; j < data[i].categoriesList.length; j++) {
                console.log(data[i].categoriesList[j].CategoriesName);
                cityRow += ' <span class="badge badge-secondary"> ' + data[i].categoriesList[j].CategoriesName + ' </span> ';
            }
        } else {
            cityRow += '--';
        }
        cityRow += '<td><div class="btn-group">';
        cityRow += '<button type="button" class="btn btn-danger">Action</button>';
        cityRow += '<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        cityRow += '<span class="sr-only">Toggle Dropdown</span></button>';

        cityRow += '  <div class="dropdown-menu">';
        cityRow += '    <a class="dropdown-item" onclick="getCityId('+data[i].CityId+')">Edit</a>';
        cityRow += '    <a class="dropdown-item" onclick="getCityIdForDelete('+data[i].CityId+')">Delete</a>';
        cityRow += '  </div>';
        cityRow += '</div></td>';

    }
    $('#cityDiv').append(cityRow);
    $('#cityDiv').dataTable({
        responsive: true
    })
}

$('#addcityBtn').click(function () {
    if($('#CityName').val().trim().length == ''){
        $('#CityName').focus();
        makeAlert('warning','City Name Required');
        return false;
    }
    var data = {};
    data.CityName = $('#CityName').val();
    makeAjax(MAIN_API_IRL+'Cities','POST',getaddCityStatus,data);
})
function getaddCityStatus(data) {
    alert('New City Add Successfully')
    window.location.reload();
    console.log(data);
}

function getCityId(data) {
    console.log(data);
    makeAjax(MAIN_API_IRL + 'Cities/'+data, 'GET', getCitiesDetailsById);

}
function getCitiesDetailsById(data) {
    console.log(data);
    $('#addcityBtn').hide();
    $('#cityupdateBtn').show();
    $('#CityName').val(data.CityName);
    $('#CityId').val(data.CityId);
    $('#CityName').focus();
}
function getCityIdForDelete(data){
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
       makeAjax(MAIN_API_IRL+'Cities/'+data,'DELETE',getCityDeleteConfirm);
    }
}

function getCityDeleteConfirm(data){
    console.log(data);
    alert('City '+ data.CityName +' deleted successfully ');
    window.location.reload();
}
$('#cityupdateBtn').click(function () {
    if($('#CityName').val().trim().length == ''){
        $('#CityName').focus();
        makeAlert('warning','City Name Required');
        return false;
    }
    var CityId = $('#CityId').val();
    console.log(CityId);
    var data = {};
    data.CityId = CityId;
    data.CityName = $('#CityName').val();
    makeAjax(MAIN_API_IRL+'Cities/'+CityId,'PUT',getaddCityUpdateStatus,data);
})


function getaddCityUpdateStatus(data) {
    alert('City Updated Successfully')
    window.location.reload();
    console.log(data);
}