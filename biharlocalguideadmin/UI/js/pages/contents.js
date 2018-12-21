// $('document').ready(function () {
//     makeAjax(MAIN_API_IRL + 'Cities', 'GET', getInputCities);
//     // makeAjax(MAIN_API_IRL + 'Contents/GetContentByCityId/'+BiharCityId, 'GET', GetContentByCityId);
//
// })
function getInputCities(data) {
    $.each(data, function (i, data) {
        $('#searchcityinput').append($("<option style='color: black;'></option>")
            .attr("value", data.CityId)
            .text(data.CityName));
    })
}


$('#searchcityinput').on('change', function() {
    // alert( this.value );
    var cityId = this.value;
    makeAjax(MAIN_API_IRL + 'Contents/GetContentByCityId/'+cityId, 'GET', GetContentByCityId);
});
function GetContentByCityId(data) {
    $('#contentDiv').empty();

    console.log(data);
    var contentRow = '';
    row = 0;
    for (i = 0; i < data.length; i++) {
        // console.log(data[i].CityName);
        contentRow += '<tr>';
        contentRow += '<td>' + ++row + '</td>';
        contentRow += '<td>' + data[i].ContentId + '</td>';
        contentRow += '<td>' + data[i].Title + '</td>';

        contentRow += '<td>' + data[i].CreatedBy + '</td>';
        contentRow += '<td>' + data[i].ContentType + '</td>';
        contentRow += '<td>' + data[i].ContentURL + '</td>';
        contentRow += '<td><span style="margin-top: -10px;" onclick="getContentDeleteId('+data[i].ContentId+')" class="card-text float-right"><i class="fas fa-trash-alt"></i></span></td>';
        contentRow += '<td>' + convertDateNumDateToMonthNameFormate(data[i].CreatedDate) + '</td>';
        // contentRow += '<td>' + data[i].Description + '</td>';
        contentRow += '</tr>';

    }
    // $('#contentDiv tbody').empty();
    $('#contentDiv').append(contentRow);
    // if (!$.fn.DataTable.isDataTable('#contentDiv')) {
    //     var table = $('#contentDiv').DataTable({
    //         responsive: true
    //
    //     });
    // }

}


function getContentDeleteId(data) {
    var r = confirm("Are you sure you want to Delete ");
    if (r == true) {
        console.log(data);
        makeAjax(MAIN_API_IRL + 'Contents/' + data, 'DELETE', deleteContentResponse);
    }
}

function deleteContentResponse(data) {
    alert('Deleted');
    location.reload()
    // console.log(data);
}