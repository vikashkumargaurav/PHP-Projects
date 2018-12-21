/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('#username').text('Welcome : ' + authData.FullName);

$("#fileUpload").change(function () {
    var fileExtension = ['jpg', 'png', 'gif'];
    if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
        $('#fileUpload').val("");
        this.focus();
        alert("Only formats are allowed : " + fileExtension.join(', '));
        return false;
    }
    var file = $("#fileUpload").get(0).files;
    $('#fileUploadName').text(file[0].name);


});


