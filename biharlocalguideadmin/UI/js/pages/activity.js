$('document').ready(function () {
    $('#updateactivityBtn').hide();
    // makeAjax(MAIN_API_IRL + 'SubCategories', 'GET', getSubCategories);
    if (authData.UserRoleId == 3) {
        makeAjax(MAIN_API_IRL + 'Categories', 'GET', getCategories);
    } else {
        makeAjax(MAIN_API_IRL + 'GetCategoriesByCityId/' + BiharCityId, 'GET', getCategories);

    }
    // makeAjax(MAIN_API_IRL + 'Categories', 'GET', getCategories);
    makeAjax(MAIN_API_IRL + 'Activities', 'GET', getActivities);
    $('#ValidFrom').datepicker({
        autoclose: true,
        keepOpen: false,
    }).on('change', function () {
        $('.datepicker').hide();
    });
})
var activityImages = [];
var ImageUploadStatus = 0;

function getActivities(data) {
    console.log(data);
    var activityRow = '';
    row = 0;
    for (i = 0; i < data.length; i++) {
        // console.log(data[i].CityName);
        activityRow += '<tr>';
        activityRow += '<td>' + ++row + '</td>';
        activityRow += '<td>' + data[i].ActivitiesId + '</td>';
        activityRow += '<td>' + data[i].OrderNo + '</td>';
        activityRow += '<td>' + data[i].ActivityName + '</td>';
        activityRow += '<td>' + data[i].Availability + '</td>';


        var ValidFrom = data[i].ValidFrom.split('T');
        var ValidTo = data[i].ValidTo.split('T');

        activityRow += '<td>' + ValidFrom[0] + ' To ' + ValidTo[0] + '</td>';
        activityRow += '<td>' + data[i].subCategories.SubCategoriesName + '</td>';
        activityRow += '<td>' + data[i].Languagues + '</td>';
        activityRow += '<td>' + data[i].GovernmentIDRequired + '</td>';
        activityRow += '<td>' + data[i].Location + '</td>';
        activityRow += '<td>' + data[i].Address + '</td>';
        activityRow += '<td>' + data[i].HighlightsOfTheActivity + '</td>';
        activityRow += '<td style="width: 100px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">' + data[i].AboutTheActivity + '</td>';
        activityRow += '<td>' + data[i].Description + '</td>';
        if (data[i].OtherDetails != null) {
            activityRow += '<td>' + data[i].OtherDetails + '</td>';
        } else {
            activityRow += '<td> -Null- </td>';
        }

        activityRow += '<td>' + data[i].Notes + '</td>';

        activityRow += '<td>' + data[i].GroupSizeALlowed + '</td>';
        activityRow += '<td>' + data[i].GuestRequirements + '</td>';
        activityRow += '<td>' + data[i].WhatIWillProvide + '</td>';
        activityRow += '<td>' + data[i].WhatWeWillDo + '</td>';
        activityRow += '<td>' + data[i].WhereWeWillMeet + '</td>';
        activityRow += '<td>' + data[i].WhoCanCome + '</td>';
        if (data[i].activityImages.length == 0) {
            activityRow += '<td><a target="_blank" href=""><img src="img/noimg.png" height="42" width="42"> </a> </td>';
        } else {
            activityRow += '<td>';
            for (j = 0; j < data[i].activityImages.length; j++) {
                activityRow += '<a target="_blank" href="' + data[i].activityImages[j].Images + '"><img src="' + data[i].activityImages[j].Images + '" height="42" width="42"> </a>';
            }


            activityRow += '</td>';
        }

        activityRow += '<td>' + data[i].FlexibleCancellationPolicy + '</td>';
        activityRow += '<td><div class="btn-group">';
        activityRow += '<button type="button" class="btn btn-danger">Action</button>';
        activityRow += '<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        activityRow += '<span class="sr-only">Toggle Dropdown</span></button>';

        activityRow += '  <div class="dropdown-menu">';
        activityRow += '    <a class="dropdown-item" onclick="getActivityId(\'' + data[i].ActivitiesId + '\')">Edit</a>';
        if (authData.UserRoleId == 3) {
            activityRow += '    <a class="dropdown-item" onclick="getActivityIdForDelete(' + data[i].ActivitiesId + ')">Delete</a>';
        }
        activityRow += '  </div>';
        activityRow += '</div></td>';
        activityRow += '</tr>';
    }
    $('#activityDivTable').append(activityRow);
    $('#activityDivTable').dataTable({
        responsive: true
    })
}

function getActivityId(data) {
    var ActivityId = data;
    makeAjax(MAIN_API_IRL + 'Activities/' + ActivityId, 'GET', getActivitieByActivityId);


}

function getActivitieByActivityId(data) {
    makeAjax(MAIN_API_IRL + 'GetSubcategoryByCategoryId/' + data.subCategories.CategoriesId, 'GET', getSubCategoriesByCategoryId);
    console.log(data);
    $('#addactivityBtn').hide();
    $('#updateactivityBtn').show();
    $('#ActivitiesId').val(data.ActivitiesId);
    $('#activityImages').val(data.activityImages[0].Images);

    $('#categoryinput').val(data.subCategories.CategoriesId);

    $('#ActivityName').val(data.ActivityName);
    $('#HighlightsOfTheActivity').val(data.HighlightsOfTheActivity);
    $('#Description').val(data.Description);

    var ValidFrom = data.ValidFrom.split('T');
    var ValidTo = data.ValidTo.split('T');
    $('#Status').val(data.Status);

    if ((data.Status == "ActiveEver") || (data.Status == "Deactive")) {
        $('#ValidFrom').val(getCurrentDate()).prop("disabled", true);
        $('#ValidTo').val(getCurrentDate()).prop("disabled", true);
        if (data.Status == "Deactive") {
            makeAlert('danger', 'Activity will no longer visible ');
        }
    } else {
        $('#ValidFrom').val(getCurrentDate()).prop("disabled", false);
        $('#ValidTo').prop("disabled", false);
        makeAlert('warning', 'select activity validity');
        // getValidFrom(getCurrentDate());
    }

    $('#ValidFrom').val(monthdayyearFormateDate(ValidFrom[0]));
    $('#ValidTo').val(monthdayyearFormateDate(ValidTo[0]));
    $('#Availability').val(data.Availability);
    $('#Languagues').val(data.Languagues);
    $('#AboutTheActivity').val(data.AboutTheActivity);
    $('#OtherDetails').val(data.OtherDetails);
    $('#Address').val(data.Address);
    $('#Location').val(data.Location);
    $('#WhatWeWillDo').val(data.WhatWeWillDo);
    $('#WhatIWillProvide').val(data.WhatIWillProvide);
    $('#WhoCanCome').val(data.WhoCanCome);
    $('#WhereWeWillMeet').val(data.WhereWeWillMeet);
    $('#GuestRequirements').val(data.GuestRequirements);
    $('#GovernmentIDRequired').val(data.GovernmentIDRequired);
    $('#GroupSizeALlowed').val(data.GroupSizeALlowed);
    $('#OrderNo').val(data.OrderNo);
    $('#Notes').val(data.Notes);
    $('#FlexibleCancellationPolicy').val(data.FlexibleCancellationPolicy);

    $('#ActivityImagesId').val(data.activityImages[0].ActivityImagesId);
    $('#subcategoryinput').val(data.subCategories.SubCategoriesId);
    $('#ActivityName').focus();
}

function getActivityIdForDelete(data) {
    console.log(data);
    var r = confirm("Are you sure your want to delete this");
    if (r == true) {
        makeAjax(MAIN_API_IRL + 'Activities/' + data, 'DELETE', getActivityDeleteConfirm);
    }
}

function getActivityDeleteConfirm(data) {
    console.log(data);
    alert('Activity  ' + data.ActivityName + ' deleted successfully ');
    window.location.reload();
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

function getCategories(data) {
    console.log(data);
    $.each(data, function (i, data) {
        $('#categoryinput').append($("<option style='color: black;'></option>")
            .attr("value", data.CategoriesId)
            .text(data.CategoriesName));
    })
}

function getSubCategoryonChangeCategoryId(categoryId) {
    var categoryId = categoryId.target.value;
    makeAjax(MAIN_API_IRL + 'GetSubcategoryByCategoryId/' + categoryId, 'GET', getSubCategoriesByCategoryId);
}

function getActivityStatus(status) {
    var status = status.target.value;
    // alert(status);
    if ((status == "ActiveEver") || (status == "Deactive")) {
        $('#ValidFrom').val(getCurrentDate()).prop("disabled", true);
        $('#ValidTo').val(getCurrentDate()).prop("disabled", true);
        if (status == "Deactive") {
            makeAlert('danger', 'Activity will no longer visible ');
        }
    } else {
        $('#ValidFrom').val(getCurrentDate()).prop("disabled", false);
        $('#ValidTo').prop("disabled", false);
        makeAlert('warning', 'select activity validity');
        // getValidFrom(getCurrentDate());
    }
}

function getSubCategoriesByCategoryId(data) {
    $('#subcategoryinput').empty();
    console.log(data);
    if (data != '') {
        $.each(data, function (i, data) {
            $('#subcategoryinput').append($("<option style='color: black;'></option>")
                .attr("value", data.SubCategoriesId)
                .text(data.SubCategoriesName));
        })
    } else {
        makeAlert('warning', 'No SubCategory Avilable');
    }

}

$('#addactivityBtn').click(function () {
    if (!$('#categoryinput').val()) {
        $('#categoryinput').focus();
        makeAlert('warning', 'CategoriesName Required');
        return false;
    }
    if (!$('#subcategoryinput').val()) {
        $('#subcategoryinput').focus();
        makeAlert('warning', 'SubCategoriesName Required');
        return false;
    }
    if ($('#ActivityName').val().trim().length == '') {
        $('#ActivityName').focus();
        makeAlert('warning', 'ActivityName Required');
        return false;
    }
    if ($('#Description').val().trim().length == '') {
        $('#Description').focus();
        makeAlert('warning', 'Description Required');
        return false;
    }
    if ($('#ValidFrom').val().trim().length == '') {
        $('#ValidFrom').focus();
        makeAlert('warning', 'ValidFrom Date Required');
        return false;
    }
    if ($('#ValidTo').val().trim().length == '') {
        $('#ValidTo').focus();
        makeAlert('warning', 'ValidTo Date Required');
        return false;
    }
    // if ($('#Availability').val().trim().length == '') {
    //     $('#Availability').focus();
    //     makeAlert('warning','Availability Required');
    //     return false;
    // }
    if ($('#Languagues').val().trim().length == '') {
        $('#Languagues').focus();
        makeAlert('warning', 'Languagues Required');
        return false;
    }
    // if ($('#AboutTheActivity').val().trim().length == '') {
    //     $('#AboutTheActivity').focus();
    //     makeAlert('warning','AboutTheActivity Required');
    //     return false;
    // }
    // if ($('#OtherDetails').val().trim().length == '') {
    //     $('#OtherDetails').focus();
    //     makeAlert('warning','OtherDetails Required');
    //     return false;
    // }
    if ($('#Address').val().trim().length == '') {
        $('#Address').focus();
        makeAlert('warning', 'Address Required');
        return false;
    }
    if ($('#Location').val().trim().length == '') {
        $('#Location').focus();
        makeAlert('warning', 'Location Required');
        return false;
    }
    // if ($('#WhatWeWillDo').val().trim().length == '') {
    //     $('#WhatWeWillDo').focus();
    //     makeAlert('warning','WhatWeWillDo Required');
    //     return false;
    // }
    // if ($('#WhatIWillProvide').val().trim().length == '') {
    //     $('#WhatIWillProvide').focus();
    //     makeAlert('warning','WhatIWillProvide Required');
    //     return false;
    // }
    // if ($('#WhoCanCome').val().trim().length == '') {
    //     $('#WhoCanCome').focus();
    //     makeAlert('warning','WhoCanCome Required');
    //     return false;
    // }
    // if ($('#WhereWeWillMeet').val().trim().length == '') {
    //     $('#WhereWeWillMeet').focus();
    //     makeAlert('warning','WhereWeWillMeet Required');
    //     return false;
    // }
    // if ($('#GuestRequirements').val().trim().length == '') {
    //     $('#GuestRequirements').focus();
    //     makeAlert('warning','GuestRequirements Required');
    //     return false;
    // }
    if ($('#GovernmentIDRequired').val().trim().length == '') {
        $('#GovernmentIDRequired').focus();
        makeAlert('warning', 'GovernmentIDRequired Required');
        return false;
    }
    // if ($('#GroupSizeALlowed').val().trim().length == '') {
    //     $('#GroupSizeALlowed').focus();
    //     makeAlert('warning','GroupSizeALlowed Required');
    //     return false;
    // }
    if ($('#OrderNo').val().trim().length == '') {
        $('#OrderNo').focus();
        makeAlert('warning', 'OrderNo Required');
        return false;
    }
    // if ($('#Notes').val().trim().length == '') {
    //     $('#Notes').focus();
    //     makeAlert('warning','Notes Required');
    //     return false;
    // }
    // if ($('#FlexibleCancellationPolicy').val().trim().length == '') {
    //     $('#FlexibleCancellationPolicy').focus();
    //     makeAlert('warning','FlexibleCancellationPolicy Required');
    //     return false;
    // }
    if ($('#file-1').val().trim().length == '') {
        $('#file-1').focus();
        makeAlert('warning', 'Image Required');
        return false;
    }
    getfilesUpload();

});

function getActivityaddStatus(data) {
    console.log(data);
    $('#ActivitiesId').val(data.ActivitiesId);
    var ActivitiesId = data.ActivitiesId;
    var data = new FormData();
    var files = $("#fileUpload").get(0).files;
    // Add the uploaded image content to the form data collection
    if (files.length > 0) {
        data.append("ActivityImage", files[0]);

    }
    // uploading activity img
    makeFileUploadAjax(MAIN_API_IRL + "Upload/user/PostActivityImage", 'POST', getactivityImgUploadUrl, data);
}

// function getactivityImgUploadUrl(data) {
//     console.log(data);
//     var ImageUrl = data;
//     var data = {};
//     data.ActivitiesId = $('#ActivitiesId').val();
//     data.OrderNo = $('#OrderNo').val();
//     data.Images = IMAGE_URL + '' + ImageUrl;
//     console.log(data);
//     // adding activity img  url
//     makeAjax(MAIN_API_IRL + 'ActivityImages', 'POST', getActivityCompleteaddStatus, data);
// }

function addActivity(activityImages) {
    var data = {};

    // data.categoryinput = $('#categoryinput').val();
    data.SubCategoriesId = $('#subcategoryinput').val();
    data.ActivityName = $('#ActivityName').val();
    data.Description = $('#Description').val();
    data.ValidFrom = $('#ValidFrom').val();
    data.ValidTo = $('#ValidTo').val();
    data.Availability = $('#Availability').val();
    data.Languagues = $('#Languagues').val();
    data.HighlightsOfTheActivity = $('#HighlightsOfTheActivity').val();
    data.AboutTheActivity = $('#AboutTheActivity').val();
    data.OtherDetails = $('#OtherDetails').val();
    data.Address = $('#Address').val();
    data.Location = $('#Location').val();
    data.WhatWeWillDo = $('#WhatWeWillDo').val();
    data.WhatIWillProvide = $('#WhatIWillProvide').val();
    data.WhoCanCome = $('#WhoCanCome').val();
    data.WhereWeWillMeet = $('#WhereWeWillMeet').val();
    data.GuestRequirements = $('#GuestRequirements').val();
    data.GovernmentIDRequired = $('#GovernmentIDRequired').val();
    data.GroupSizeALlowed = $('#GroupSizeALlowed').val();
    data.OrderNo = $('#OrderNo').val();
    data.Notes = $('#Notes').val();
    data.Status = $('#Status').val();
    data.FlexibleCancellationPolicy = $('#FlexibleCancellationPolicy').val();
    data.activityImages = activityImages;

    makeAjax(MAIN_API_IRL + 'Activities', 'POST', getActivityCompleteaddStatus, data);


}

function getActivityCompleteaddStatus(data) {
    console.log(data);
    alert('Activity Added Successfully');
    window.location.reload();
}


$('#updateactivityBtn').click(function () {
    if (!$('#categoryinput').val()) {
        $('#categoryinput').focus();
        makeAlert('warning', 'CategoriesName Required');
        return false;
    }
    if (!$('#subcategoryinput').val()) {
        $('#subcategoryinput').focus();
        makeAlert('warning', 'SubCategoriesName Required');
        return false;
    }
    if ($('#ActivityName').val().trim().length == '') {
        $('#ActivityName').focus();
        makeAlert('warning', 'ActivityName Required');
        return false;
    }
    if ($('#Description').val().trim().length == '') {
        $('#Description').focus();
        makeAlert('warning', 'Description Required');
        return false;
    }
    if ($('#ValidFrom').val().trim().length == '') {
        $('#ValidFrom').focus();
        makeAlert('warning', 'ValidFrom Date Required');
        return false;
    }
    if ($('#ValidTo').val().trim().length == '') {
        $('#ValidTo').focus();
        makeAlert('warning', 'ValidTo Date Required');
        return false;
    }
    // if ($('#Availability').val().trim().length == '') {
    //     $('#Availability').focus();
    //     makeAlert('warning','Availability Required');
    //     return false;
    // }
    if ($('#Languagues').val().trim().length == '') {
        $('#Languagues').focus();
        makeAlert('warning', 'Languagues Required');
        return false;
    }
    // if ($('#AboutTheActivity').val().trim().length == '') {
    //     $('#AboutTheActivity').focus();
    //     makeAlert('warning','AboutTheActivity Required');
    //     return false;
    // }
    // if ($('#OtherDetails').val().trim().length == '') {
    //     $('#OtherDetails').focus();
    //     makeAlert('warning','OtherDetails Required');
    //     return false;
    // }
    if ($('#Address').val().trim().length == '') {
        $('#Address').focus();
        makeAlert('warning', 'Address Required');
        return false;
    }
    if ($('#Location').val().trim().length == '') {
        $('#Location').focus();
        makeAlert('warning', 'Location Required');
        return false;
    }
    // if ($('#WhatWeWillDo').val().trim().length == '') {
    //     $('#WhatWeWillDo').focus();
    //     makeAlert('warning','WhatWeWillDo Required');
    //     return false;
    // }
    // if ($('#WhatIWillProvide').val().trim().length == '') {
    //     $('#WhatIWillProvide').focus();
    //     makeAlert('warning','WhatIWillProvide Required');
    //     return false;
    // }
    // if ($('#WhoCanCome').val().trim().length == '') {
    //     $('#WhoCanCome').focus();
    //     makeAlert('warning','WhoCanCome Required');
    //     return false;
    // }
    // if ($('#WhereWeWillMeet').val().trim().length == '') {
    //     $('#WhereWeWillMeet').focus();
    //     makeAlert('warning','WhereWeWillMeet Required');
    //     return false;
    // }
    // if ($('#GuestRequirements').val().trim().length == '') {
    //     $('#GuestRequirements').focus();
    //     makeAlert('warning','GuestRequirements Required');
    //     return false;
    // }
    if ($('#GovernmentIDRequired').val().trim().length == '') {
        $('#GovernmentIDRequired').focus();
        makeAlert('warning', 'GovernmentIDRequired Required');
        return false;
    }
    // if ($('#GroupSizeALlowed').val().trim().length == '') {
    //     $('#GroupSizeALlowed').focus();
    //     makeAlert('warning','GroupSizeALlowed Required');
    //     return false;
    // }
    if ($('#OrderNo').val().trim().length == '') {
        $('#OrderNo').focus();
        makeAlert('warning', 'OrderNo Required');
        return false;
    }
    // if ($('#Notes').val().trim().length == '') {
    //     $('#Notes').focus();
    //     makeAlert('warning','Notes Required');
    //     return false;
    // }
    // if ($('#FlexibleCancellationPolicy').val().trim().length == '') {
    //     $('#FlexibleCancellationPolicy').focus();
    //     makeAlert('warning','FlexibleCancellationPolicy Required');
    //     return false;
    // }
    if (document.getElementById("file-1").files.length == 0) {
        console.log("no files selected");
        var data = {};
        var ActivitiesId = $('#ActivitiesId').val();

        data.ActivitiesId = $('#ActivitiesId').val();
        data.SubCategoriesId = $('#subcategoryinput').val();
        data.ActivityName = $('#ActivityName').val();
        data.Description = $('#Description').val();
        data.ValidFrom = $('#ValidFrom').val();
        data.ValidTo = $('#ValidTo').val();
        data.Availability = $('#Availability').val();
        data.Languagues = $('#Languagues').val();
        data.HighlightsOfTheActivity = $('#HighlightsOfTheActivity').val();
        data.AboutTheActivity = $('#AboutTheActivity').val();
        data.OtherDetails = $('#OtherDetails').val();
        data.Address = $('#Address').val();
        data.Status = $('#Status').val();
        data.Location = $('#Location').val();
        data.WhatWeWillDo = $('#WhatWeWillDo').val();
        data.WhatIWillProvide = $('#WhatIWillProvide').val();
        data.WhoCanCome = $('#WhoCanCome').val();
        data.WhereWeWillMeet = $('#WhereWeWillMeet').val();
        data.GuestRequirements = $('#GuestRequirements').val();
        data.GovernmentIDRequired = $('#GovernmentIDRequired').val();
        data.GroupSizeALlowed = $('#GroupSizeALlowed').val();
        data.OrderNo = $('#OrderNo').val();
        data.Notes = $('#Notes').val();
        data.FlexibleCancellationPolicy = $('#FlexibleCancellationPolicy').val();

        console.log(data);
        makeAjax(MAIN_API_IRL + 'Activities/' + ActivitiesId, 'PUT', getActivityUpdatewithoutImgStatus, data);
    } else {
        console.log("files selected");
        var data = {};
        var ActivitiesId = $('#ActivitiesId').val();

        data.ActivitiesId = $('#ActivitiesId').val();
        data.SubCategoriesId = $('#subcategoryinput').val();
        data.ActivityName = $('#ActivityName').val();
        data.Description = $('#Description').val();
        data.ValidFrom = $('#ValidFrom').val();
        data.ValidTo = $('#ValidTo').val();
        data.Availability = $('#Availability').val();
        data.Languagues = $('#Languagues').val();
        data.HighlightsOfTheActivity = $('#HighlightsOfTheActivity').val();
        data.AboutTheActivity = $('#AboutTheActivity').val();
        data.OtherDetails = $('#OtherDetails').val();
        data.Status = $('#Status').val();
        data.Address = $('#Address').val();
        data.Location = $('#Location').val();
        data.WhatWeWillDo = $('#WhatWeWillDo').val();
        data.WhatIWillProvide = $('#WhatIWillProvide').val();
        data.WhoCanCome = $('#WhoCanCome').val();
        data.WhereWeWillMeet = $('#WhereWeWillMeet').val();
        data.GuestRequirements = $('#GuestRequirements').val();
        data.GovernmentIDRequired = $('#GovernmentIDRequired').val();
        data.GroupSizeALlowed = $('#GroupSizeALlowed').val();
        data.OrderNo = $('#OrderNo').val();
        data.Notes = $('#Notes').val();
        data.FlexibleCancellationPolicy = $('#FlexibleCancellationPolicy').val();

        console.log(data);// update image is disable not working right now
        // makeAjax(MAIN_API_IRL + 'Activities/' + ActivitiesId, 'PUT', getActivityUpdatewithImgStatus, data);
        makeAjax(MAIN_API_IRL + 'Activities/' + ActivitiesId, 'PUT', getActivityUpdatewithoutImgStatus, data);
    }
});

function getActivityUpdatewithoutImgStatus(data) {
    console.log(data);
    alert('Activity Updated Successfully');
    window.location.reload();
}

function getActivityUpdatewithImgStatus(data) {
    console.log(data);

    var ActivitiesId = $('#ActivitiesId').val();
    var data = new FormData();
    var files = $("#file-1").get(0).files;
    // Add the uploaded image content to the form data collection
    if (files.length > 0) {
        data.append("ActivityImage", files[0]);

    }
    makeFileUploadAjax(MAIN_API_IRL + "Upload/user/PostActivityImage", 'POST', getactivityImgUpdateUploadUrl, data);
}

function getactivityImgUpdateUploadUrl(data) {
    console.log(data);
    var ImageUrl = data;
    var data = {};
    var ActivityImagesId = $('#ActivityImagesId').val();
    data.ActivitiesId = $('#ActivitiesId').val();

    data.ActivityImagesId = $('#ActivityImagesId').val();
    data.OrderNo = $('#OrderNo').val();
    data.Images = IMAGE_URL + '' + ImageUrl;
    console.log(data);
    makeAjax(MAIN_API_IRL + 'ActivityImages/' + ActivityImagesId, 'PUT', getActivityUpdateCompleteaddStatus, data);
}

function getActivityUpdateCompleteaddStatus(data) {
    console.log(data);
    alert('Activity Update Successfully');
    window.location.reload();
}

var countUpload = 0;

function getfilesUpload() {
    // $('#file-1').get(0).files

    for (var i = 0; i < $('#file-1').get(0).files.length; ++i) {
        countUpload++;
        var data = new FormData();
        var files = $("#file-1").get(0).files[i];
        // Add the uploaded image content to the form data collection
        if ($('#file-1').get(0).files.length > 0) {
            data.append("ActivityImage", files);
        }
        makeFileUploadAjax(MAIN_API_IRL + "Upload/user/PostActivityImage", 'POST', getuploadImageUrlArray, data);
    }


}

function getuploadImageUrlArray(data) {
    console.log(data);
    var obj = {};
    obj.Images = IMAGE_URL + '' + data;
    activityImages.push(obj);
    if (activityImages.length == $('#file-1').get(0).files.length) {
        console.log(activityImages);
        var ActivitiesId = $('#ActivitiesId').val();
        console.log(ActivitiesId);
        addActivity(activityImages);
    }
}
