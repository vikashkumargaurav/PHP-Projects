$('document').ready(function () {
    $('#interestupdateBtn').hide();
    makeAjax(MAIN_API_IRL + 'interest', 'GET', getInterest);
})

function getInterest(data) {
    console.log(data);
    var interestRow = '';
    row = 0;
    for (i = 0; i < data.length; i++) {
        interestRow += '<tr>';
        interestRow += '<td>' + ++row + '</td>';
        interestRow += '<td>' + data[i].ZingoInterestId + '</td>';
        interestRow += '<td>' + data[i].InterestName + '</td>';
        interestRow += '<td>' + data[i].Description + '</td>';


        interestRow += '<td><div class="btn-group">';
        interestRow += '<button type="button" class="btn btn-danger">Action</button>';
        interestRow += '<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        interestRow += '<span class="sr-only">Toggle Dropdown</span></button>';

        interestRow += '  <div class="dropdown-menu">';
        interestRow += '    <a class="dropdown-item" onclick="getInterestId(\'' + (btoa(JSON.stringify(data[i]))) + '\')">Edit</a>';
        if(authData.UserRoleId ==3) {
            interestRow += '    <a class="dropdown-item" onclick="getInterestIdForDelete(' + data[i].ZingoInterestId + ')">Delete</a>';
        }
        interestRow += '  </div>';
        interestRow += '</div></td>';

    }
    $('#interestDiv').append(interestRow);
    $('#interestDiv').dataTable({
        responsive: true
    })
}

$('#addinterestBtn').click(function () {
    if($('#InterestName').val().trim().length == ''){
        $('#InterestName').focus();
        alert('Interest Name Required');
        return false;
    }
    if($('#Description').val().trim().length == ''){
        $('#Description').focus();
        alert('Description Required');
        return false;
    }
    var data = {};
    data.InterestName = $('#InterestName').val();
    data.Description = $('#Description').val();
    makeAjax(MAIN_API_IRL+'interest','POST',getaddInteresrStatus,data);
})
function getaddInteresrStatus(data) {
    alert('Interest Add Successfully')
    window.location.reload();
    console.log(data);
}

function getInterestIdForDelete(data){
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
        makeAjax(MAIN_API_IRL+'interest/'+data,'DELETE',getInterestDeleteConfirm);
    }
}

function getInterestDeleteConfirm(data){
    console.log(data);
    alert('Interest '+ data.InterestName +' deleted successfully ');
    window.location.reload();
}
function getInterestId(data) {
    data = JSON.parse(atob(data));
    console.log(data);
    $('#addinterestBtn').hide();
    $('#interestupdateBtn').show();
    $('#InterestName').val(data.InterestName);
    $('#ZingoInterestId').val(data.ZingoInterestId);
    $('#Description').val(data.Description);
    $('#InterestName').focus();
}

$('#interestupdateBtn').click(function () {
    if($('#InterestName').val().trim().length == ''){
        $('#InterestName').focus();
        alert('Interest Name Required');
        return false;
    }
    if($('#Description').val().trim().length == ''){
        $('#Description').focus();
        alert('Description Required');
        return false;
    }
    var ZingoInterestId = $('#ZingoInterestId').val();
    // console.log(CityId);
    var data = {};
    data.ZingoInterestId = ZingoInterestId;
    data.InterestName = $('#InterestName').val();
    data.Description = $('#Description').val();
    makeAjax(MAIN_API_IRL+'interest/'+ZingoInterestId,'PUT',getaddInterestUpdateStatus,data);
})


function getaddInterestUpdateStatus(data) {
    alert('Interest Updated Successfully')
    window.location.reload();
    console.log(data);
}