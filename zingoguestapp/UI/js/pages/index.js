$('document').ready(function () {
    makeAjax(API_URL+'Travellers/'+aid,'GET',getProfile,AUTH_KEY);

})

function getProfile(data) {
    //console.log(data);
    $('#FirstName').text(data.FirstName);
    $('#PhoneNumber').text(data.PhoneNumber);
    // makeAjax(API_URL+'Travellers/GetTravellerByPhoneNumber/'+data.PhoneNumber,'GET',getTravellerByPhoneNumber,AUTH_KEY);
}

function getTravellerByPhoneNumber(data) {
    console.log(data);
}

function getPaidAmenities(data) {
    console.log(data);
    window.location.href = "index.php?page_name=paidamenities&Id=" + data;
}

function getRoomServices(data) {
    console.log(data);
    window.location.href = "index.php?page_name=roomservices&Id=" + data;
}