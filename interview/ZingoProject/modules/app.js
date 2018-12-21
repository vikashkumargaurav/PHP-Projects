
var app = angular.module("ApiApp",["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'views/signup.html',
            controller:'SignUpController'
        })
        .when('/home',{
            templateUrl:'views/signup.html',
            controller:'SignUpController'
        })
        .when('/signup',{
            templateUrl:'views/signup.html',
            controller:'SignUpController'
        })
        .when('/login',{
            templateUrl:'views/login.html',
            controller:'LoginController'
        });

    app.factory('SharedFactory', function () {
        return {} ;
    })

});



