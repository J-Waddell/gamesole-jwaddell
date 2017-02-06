console.log("up,down,left,right,start")

const app = angular.module('game-sole', ['ngRoute', 'ngMaterial'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        })
        .when('/home', {
            contorller: 'HomeCtrl',
            templateUrl: 'partials/home.html'
        })
        .otherwise({redirectTo: '/'})
})