
app.controller("SignUpController", function ($scope, $http, $rootScope, $location ) {

    $scope.userdata = {};
    $scope.url = "https://zingolocals.azurewebsites.net/api/travellers";

    $scope.submitForm = function(userdata){
        $scope.userdata = userdata;

        $http({
            method: 'POST',
            url: $scope.url,
            data: $scope.userdata
        })
            .then(function onSucess (response) {
                    $scope.data = response.data ;
                    $scope.status = response.status;
                    $scope.statusText = response.statusText;
                    $rootScope.resultValue = $scope.data;
                    $location.path( "/login" );
                },
                function onFailed (response) {
                    alert("Something went wrong !")
                })
    };
});
