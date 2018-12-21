
app.controller("LoginController", function ($scope,$location,$anchorScroll, $rootScope) {

    console.log($rootScope.resultValue);
    var user = $rootScope.resultValue;

    $scope.travellerId =  user.TravellerId;
    $scope.fullname    =  user.FirstName + " "  + user.MiddleName + " " + user.LastName;
    $scope.email       =  user.Email;
    $scope.mobileno    =  user.PhoneNumber;
    $scope.gender      =  user.Gender;
    $scope.dob         =  user.DOB;
    $scope.location    =  user.PlaceName;

});
