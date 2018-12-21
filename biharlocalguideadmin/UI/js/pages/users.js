$('document').ready(function () {
    $('#userupdateBtn').hide();
    makeAjax(MAIN_API_IRL + 'Profiles', 'GET', getProfiles);

    $.each(UserRoles, function (i, data) {
        $('#UserRoleId').append($("<option style='color: black;'></option>")
            .attr("value", data.UserRoleId)
            .text(data.UserRoleName));
    })
})

function getProfiles(data) {
    console.log(data);
    var usersRow = '';
    row = 0;
    for(i=0;i<data.length;i++){
        console.log(data[i].FullName);
        usersRow += '<tr>';
        usersRow += '<td>' + ++row + '</td>';
        usersRow += '<td>' + data[i].ProfileId + '</td>';
        usersRow += '<td>' + data[i].FullName + '</td>';
        switch (data[i].UserRoleId) {
            case 1 :
                usersRow += '<td><span class="badge badge-info">User</span></td>';
                break;
            case 2:
                usersRow += '<td><span class="badge badge-info">ZingoAdmin</span></td>';
                break;
            case 3:
                usersRow += '<td><span class="badge badge-info">SuperAdmin</span></td>';
                break;


        }
        usersRow += '<td>' + data[i].Email + '</td>';
        usersRow += '<td>' + data[i].PhoneNumber + '</td>';
        usersRow += '<td>' + data[i].Gender + '</td>';
        if(data[i].Status == 'Active'){
            usersRow += '<td><span class="badge badge-success">' + data[i].Status + '</span></td>';
        }else{
            usersRow += '<td><span class="badge badge-info">' + data[i].Status + '</span></td>';
        }

        usersRow += '<td style="width: 50px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">' + data[i].Prefix + '</td>';
        usersRow += '<td>' +convertDateNumDateToMonthNameFormate(data[i].SignUpDate) + '</td>';
        if((data[i].ProfilePhoto == null) || (data[i].ProfilePhoto == "")  ){
            usersRow += '<td><a><img src="img/noimg.png" height="42" width="42"> </a> </td>';
        }else{
            usersRow += '<td><a target="_blank" href="'+data[i].ProfilePhoto+'"><img src="'+data[i].ProfilePhoto+'" height="42" width="42"> </a> </td>';
        }

        usersRow += '<td><div class="btn-group">';
        usersRow += '<button type="button" class="btn btn-danger">Action</button>';
        usersRow += '<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        usersRow += '<span class="sr-only">Toggle Dropdown</span></button>';

        usersRow += '  <div class="dropdown-menu">';
        // usersRow += '    <a class="dropdown-item" onclick="getProfileId(' + data[i].ProfileId + ')">Edit</a>';
        usersRow += '    <a class="dropdown-item" onclick="getProfileIdForDelete(' + data[i].ProfileId + ')">Delete</a>';
        usersRow += '  </div>';
        usersRow += '</div></td>';
        usersRow += '</tr>';
    }
    $('#usersDiv').append(usersRow);
    $('#usersDiv').dataTable({
        responsive: true
    })

}

$('#addProfileBtn').click(function () {
    if (!($('#firstName').val()).match(VALID_NAME)) {
        $('#firstName').focus();
        makeAlert('warning', 'Valid Name Required');
        return false;
    }
    if (!($('#Email').val()).match(VALID_EMAIL)) {
        $('#Email').focus();
        makeAlert('warning', 'Valid Email Required');
        return false;
    }

    if ($('#Password').val().length == "") {
        $('#Password').focus();
        makeAlert('warning', 'Valid Password Required');
        return false;
    }
    if ($('#confirmPassword').val().length == "") {
        $('#confirmPassword').focus();
        makeAlert('warning', 'Please confirm your password');
        return false;
    }

    var Password = $('#Password').val();
    var confirmPassword = $('#confirmPassword').val();
    if ((Password) != (confirmPassword)) {
        $('#confirmPassword').focus();
        makeAlert('warning', 'Password does not match with  Confirm Password');
        return false;
    }
    var data = {};
    data.Email = $('#Email').val();
    makeAjax(MAIN_API_IRL+'Profiles/GetProfileByEmail', 'POST', getProfileByEmailToCheckEmailExist, data);



})

function getProfileByEmailToCheckEmailExist(data) {
    console.log(data);
    if(data != ''){
        makeAlert('warning','Email alreay exist');
        $('#Email').focus();
        return false;
    }else {
        Verificationcode = generateBookingNo().substring(0, 6);
        var data = {};
        data.FullName = $('#firstName').val() + ' ' + $('#lastName').val();
        data.Email = $('#Email').val();
        data.Gender = $("input[name='Gender']:checked").val();
        data.PhoneNumber = $('#PhoneNumber').val();
        data.Password = $('#Password').val();
        data.UserRoleId = $('#UserRoleId').val();
        data.Prefix = "";
        data.AuthType = "Normal";
        data.AuthId = "Normal";
        data.SignUpDate = getCurrentDate();
        data.Status = 'Active'

        console.log(data);
        makeAjax(MAIN_API_IRL + 'Profiles', 'POST', getRegistrationResponse, data);
    }
}

function getRegistrationResponse(data) {
    console.log(data);
    alert('Registeration Done Successfully');
    window.location.reload();
}

function getProfileIdForDelete(data){
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
        makeAjax(MAIN_API_IRL+'Profiles/'+data,'DELETE',getProfileDeleteConfirm);
    }
}

function getProfileDeleteConfirm(data){
    console.log(data);
    alert('City '+ data.FullName +' deleted successfully ');
    window.location.reload();
}
