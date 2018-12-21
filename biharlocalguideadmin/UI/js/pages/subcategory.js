$('document').ready(function () {
    $('#updatesubcategoryBtn').hide();
    makeAjax(MAIN_API_IRL + 'SubCategories', 'GET', getSubCategories);
    if(authData.UserRoleId == 3){
        makeAjax(MAIN_API_IRL + 'Categories', 'GET', getCategories);
    }else{
        makeAjax(MAIN_API_IRL + 'GetCategoriesByCityId/'+BiharCityId, 'GET', getCategories);

    }

})

function getCategories(data) {
    console.log(data);
    $.each(data, function (i, data) {
        $('#categoryinput').append($("<option style='color: black;'></option>")
            .attr("value", data.CategoriesId)
            .text(data.CategoriesName));
    })
}

function getSubCategories(data) {
    console.log(data);
    var subcategoryRow = '';
    row = 0;
    for (i = 0; i < data.length; i++) {
        // console.log(data[i].CityName);
        subcategoryRow += '<tr>';
        subcategoryRow += '<td>' + ++row + '</td>';
        subcategoryRow += '<td>' + data[i].SubCategoriesId + '</td>';
        subcategoryRow += '<td>' + data[i].SubCategoriesName + '</td>';

        subcategoryRow += '<td>' + data[i].OrderNo + '</td>';
        subcategoryRow += '<td>' + data[i].categories.CategoriesName + '</td>';
        subcategoryRow += '<td style="width: 100px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">' + data[i].Description + '</td>';
        subcategoryRow += '<td><a target="_blank" href="'+data[i].SubCategoriesImage+'"><img src="'+data[i].SubCategoriesImage+'" height="42" width="42"> </a> </td>';
        subcategoryRow += '<td><div class="btn-group">';
        subcategoryRow += '<button type="button" class="btn btn-danger">Action</button>';
        subcategoryRow += '<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        subcategoryRow += '<span class="sr-only">Toggle Dropdown</span></button>';

        subcategoryRow += '  <div class="dropdown-menu">';
        subcategoryRow += '    <a class="dropdown-item" onclick="getsubCategoryId(\'' + data[i].SubCategoriesId + '\')">Edit</a>';
        if(authData.UserRoleId ==3) {
            subcategoryRow += '    <a class="dropdown-item" onclick="getsubCategoryIdForDelete(' + data[i].SubCategoriesId + ')">Delete</a>';
        }
        subcategoryRow += '  </div>';
        subcategoryRow += '</div></td>';

    }
    $('#subcategoryDiv').append(subcategoryRow);
    $('#subcategoryDiv').dataTable({
        responsive: true
    })
}

$('#addsubcategoryBtn').click(function () {
    if($('#SubCategoriesName').val().trim().length == ''){
        $('#SubCategoriesName').focus();
        makeAlert('warning','SubCategoriesName Required');
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
        data.append("SubCategoriesImage", files[0]);

    }
    makeFileUploadAjax(MAIN_API_IRL + "Upload/user/PostSubCategoryImage", 'POST', getsubcategoryImgUploadStatus, data);

});

function getsubcategoryImgUploadStatus(data) {
    console.log(data);
    var CategoriesImage = data;
    if (CategoriesImage != null) {
        var data ={};
        data.CategoriesId = $('#categoryinput').val();
        data.SubCategoriesName = $('#SubCategoriesName').val();
        data.OrderNo = $('#OrderNo').val();
        data.Description = $('#Description').val();
        data.SubCategoriesImage = IMAGE_URL+''+CategoriesImage;
        makeAjax(MAIN_API_IRL+'SubCategories','POST',getAddSubCategoryStatus,data);
    } else {
        console.log('fail');
    }
}

function getAddSubCategoryStatus(data) {
    console.log(data);
    alert('Sub Category Added Successfully');
    window.location.reload();
}

function getsubCategoryIdForDelete(data){
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
        makeAjax(MAIN_API_IRL+'SubCategories/'+data,'DELETE',getsubCategoryDeleteConfirm);
    }
}

function getsubCategoryDeleteConfirm(data){
    // console.log(data);
    alert('City '+ data.SubCategoriesName +' deleted successfully ');
    window.location.reload();
}

function getsubCategoryId(data) {
    var subcategoryId = data;
    makeAjax(MAIN_API_IRL + 'SubCategories/'+subcategoryId, 'GET', getSubCategoriesBysubCategoryId);
    // data = JSON.parse(atob(data));

}

function getSubCategoriesBysubCategoryId(data){
    console.log(data);
    $('#addsubcategoryBtn').hide();
    $('#updatesubcategoryBtn').show();
    $('#SubCategoriesName').val(data.SubCategoriesName);
    $('#Description').val(data.Description);
    $('#OrderNo').val(data.OrderNo);
    $('#categoryinput').val(data.CategoriesId);
    $('#SubCategoriesId').val(data.SubCategoriesId);
    $('#SubCategoriesImage').val(data.SubCategoriesImage);
    $('#categoryinput').focus();
}

$('#updatesubcategoryBtn').click(function () {
    if($('#SubCategoriesName').val().trim().length == ''){
        $('#SubCategoriesName').focus();
        makeAlert('warning','SubCategoriesName Required');
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
    if( document.getElementById("fileUpload").files.length == 0 ){
        console.log("no files selected");

        var data ={};
        var SubCategoriesId = $('#SubCategoriesId').val();
        data.SubCategoriesId = $('#SubCategoriesId').val();
        data.CategoriesId = $('#categoryinput').val();
        data.SubCategoriesName = $('#SubCategoriesName').val();
        data.OrderNo = $('#OrderNo').val();
        data.Description = $('#Description').val();
        data.SubCategoriesImage = $('#SubCategoriesImage').val();
        console.log(data);
        makeAjax(MAIN_API_IRL+'SubCategories/'+SubCategoriesId,'PUT',getUpdateSubCategoryStatus,data);

    }else{
        console.log(" files selected");
        var data = new FormData();
        var files = $("#fileUpload").get(0).files;
        // Add the uploaded image content to the form data collection
        if (files.length > 0) {
            data.append("CategoriesImage", files[0]);

        }
        makeFileUploadAjax(MAIN_API_IRL + "Upload/user/PostSubCategoryImage", 'POST', getImgUpdateforSubCategoryStatus, data);
    }


})

function getImgUpdateforSubCategoryStatus(data) {
    console.log(data);
    var SubCategoriesImage = data;
    if (SubCategoriesImage != null) {
        var data ={};
        var SubCategoriesId = $('#SubCategoriesId').val();
        data.SubCategoriesId = $('#SubCategoriesId').val();
        data.CategoriesId = $('#categoryinput').val();
        data.SubCategoriesName = $('#SubCategoriesName').val();
        data.OrderNo = $('#OrderNo').val();
        data.Description = $('#Description').val();
        data.SubCategoriesImage = $('#SubCategoriesImage').val();
        data.SubCategoriesImage = IMAGE_URL+''+SubCategoriesImage;
        makeAjax(MAIN_API_IRL+'SubCategories/'+SubCategoriesId,'PUT',getUpdateSubCategoryStatus,data);
    } else {
        console.log('fail');
    }
}

function getUpdateSubCategoryStatus(data) {
    console.log(data);
    alert('Sub-Category Updated Successfully');
    window.location.reload();
}