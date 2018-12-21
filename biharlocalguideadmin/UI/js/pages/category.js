$('document').ready(function () {
    $('#updatecategoryBtn').hide();
    makeAjax(MAIN_API_IRL + 'Categories', 'GET', getCategories);
    makeAjax(MAIN_API_IRL + 'Cities', 'GET', getCities);
})

function getCities(data) {
    console.log(data);
    $.each(data, function (i, data) {
        $('#cityinput').append($("<option style='color: black;'></option>")
            .attr("value", data.CityId)
            .text(data.CityName));
    })
}

function getCategories(data) {
    console.log(data);
    var categoryRow = '';
    row = 0;
    for (i = 0; i < data.length; i++) {
        // console.log(data[i].CityName);
        categoryRow += '<tr>';
        categoryRow += '<td>' + ++row + '</td>';
        categoryRow += '<td>' + data[i].CategoriesId + '</td>';
        categoryRow += '<td>' + data[i].CategoriesName + '</td>';

        categoryRow += '<td>' + data[i].OrderNo + '</td>';

        categoryRow += '<td>';
        if (data[i].subCategoriesList != null) {
            for (j = 0; j < data[i].subCategoriesList.length; j++) {
                console.log(data[i].subCategoriesList[j].SubCategoriesName);
                categoryRow += ' <span class="badge badge-secondary"> ' + data[i].subCategoriesList[j].SubCategoriesName + ' </span> ';
            }
        } else {
            categoryRow += '--';
        }
        categoryRow += '<td style="width: 50px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">' + data[i].Description + '</td>';
        categoryRow += '</td>';
        categoryRow += '<td><a target="_blank" href="'+data[i].CategoriesImage+'"><img src="'+data[i].CategoriesImage+'" height="42" width="42"> </a> </td>';
        categoryRow += '<td><div class="btn-group">';
        categoryRow += '<button type="button" class="btn btn-danger">Action</button>';
        categoryRow += '<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        categoryRow += '<span class="sr-only">Toggle Dropdown</span></button>';

        categoryRow += '  <div class="dropdown-menu">';
        categoryRow += '    <a class="dropdown-item" onclick="getCategoryId(' + data[i].CategoriesId + ')">Edit</a>';
        if(authData.UserRoleId ==3){
            categoryRow += '    <a class="dropdown-item" onclick="getCategoryIdForDelete(' + data[i].CategoriesId + ')">Delete</a>';
        }
        categoryRow += '  </div>';
        categoryRow += '</div></td>';
        categoryRow += '</tr>';

    }
    $('#categoryDiv').append(categoryRow);
    $('#categoryDiv').dataTable({
        responsive: true
    })
}

$('#addcategoryBtn').click(function () {
    if($('#CategoriesName').val().trim().length == ''){
        $('#CategoriesName').focus();
        makeAlert('warning','CategoriesName Required');
        return false;
    }

    if($('#OrderNo').val().trim().length == ''){
        $('#OrderNo').focus();
        makeAlert('warning','OrderNo Required');
        return false;
    }
    if($('#Description').val().trim().length == ''){
        $('#Description').focus();
        makeAlert('warning','Description Required');
        return false;
    }

    if($('#fileUpload').val().trim().length == ''){
        $('#fileUpload').focus();
        makeAlert('warning','Image Required');
        return false;
    }
    var data = new FormData();
    var files = $("#fileUpload").get(0).files;
    // Add the uploaded image content to the form data collection
    if (files.length > 0) {
        data.append("CategoriesImage", files[0]);

    }
    makeFileUploadAjax(MAIN_API_IRL + "Upload/user/PostCategoryImage", 'POST', getImgUploadStatus, data);

});

function getImgUploadStatus(data) {
    // console.log(data);
    var CategoriesImage = data;
    if (CategoriesImage != null) {
        var data ={};
        data.CityId = $('#cityinput').val();
        data.CategoriesName = $('#CategoriesName').val();
        data.OrderNo = $('#OrderNo').val();
        data.Description = $('#Description').val();
        data.CategoriesImage = IMAGE_URL+''+CategoriesImage;
        makeAjax(MAIN_API_IRL+'Categories','POST',getAddCategoryStatus,data);
    } else {
        console.log('fail');
    }
}

function getAddCategoryStatus(data) {
    // console.log(data);
    alert('Category Added Successfully');
    window.location.reload();
}

function getCategoryIdForDelete(data){
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
        makeAjax(MAIN_API_IRL+'Categories/'+data,'DELETE',getCategoryDeleteConfirm);
    }
}

function getCategoryDeleteConfirm(data){
    console.log(data);
    alert('City '+ data.CategoriesName +' deleted successfully ');
    window.location.reload();
}

function getCategoryId(data) {
    var CatId = data;
    makeAjax(MAIN_API_IRL + 'Categories/'+CatId, 'GET', getCategoriesDetailsById);

}
function getCategoriesDetailsById(data){
    console.log(data);
    $('#addcategoryBtn').hide();
    $('#updatecategoryBtn').show();
    $('#CategoriesName').val(data.CategoriesName);
    $('#Description').val(data.Description);
    $('#OrderNo').val(data.OrderNo);
    $('#cityinput').val(data.CityId);
    $('#CategoriesId').val(data.CategoriesId);
    $('#CategoriesImage').val(data.CategoriesImage);
    $('#cityinput').focus();
    $('#fileUploadName').text(data.CategoriesImage);
}

$('#updatecategoryBtn').click(function () {
    if($('#CategoriesName').val().trim().length == ''){
        $('#CategoriesName').focus();
        makeAlert('warning','CategoriesName Required');
        return false;
    }
    if($('#Description').val().trim().length == ''){
        $('#Description').focus();
        makeAlert('warning','Description Required');
        return false;
    }
    if($('#OrderNo').val().trim().length == ''){
        $('#OrderNo').focus();
        makeAlert('warning','OrderNo Required');
        return false;
    }
    if( document.getElementById("fileUpload").files.length == 0 ){
        console.log("no files selected");

        var data ={};
        var CategoriesId = $('#CategoriesId').val();
        data.CityId = $('#cityinput').val();
        data.CategoriesId = CategoriesId;
        data.CategoriesName = $('#CategoriesName').val();
        data.OrderNo = $('#OrderNo').val();
        data.Description = $('#Description').val();
        data.CategoriesImage = $('#CategoriesImage').val();
        console.log(data);
        makeAjax(MAIN_API_IRL+'Categories/'+CategoriesId,'PUT',getUpdateCategoryStatus,data);

    }else{
        console.log(" files selected");
        var data = new FormData();
        var files = $("#fileUpload").get(0).files;
        // Add the uploaded image content to the form data collection
        if (files.length > 0) {
            data.append("CategoriesImage", files[0]);

        }
        makeFileUploadAjax(MAIN_API_IRL + "Upload/user/PostCategoryImage", 'POST', getImgUpdateStatus, data);
    }


})

function getImgUpdateStatus(data) {
    // console.log(data);
    var CategoriesImage = data;
    if (CategoriesImage != null) {
        var data ={};
        var CategoriesId = $('#CategoriesId').val();
        data.CityId = $('#cityinput').val();
        data.CategoriesId = CategoriesId;
        data.CategoriesName = $('#CategoriesName').val();
        data.OrderNo = $('#OrderNo').val();
        data.Description = $('#Description').val();
        data.CategoriesImage = IMAGE_URL+''+CategoriesImage;
        makeAjax(MAIN_API_IRL+'Categories/'+CategoriesId,'PUT',getUpdateCategoryStatus,data);
    } else {
        console.log('fail');
    }
}

function getUpdateCategoryStatus(data) {
    console.log(data);
    alert('Category Updated Successfully');
    window.location.reload();
}

