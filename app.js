console.log("up,down,left,right,start")

const app = angular.module('game-sole', ['ngRoute', 'ngMaterial'])

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAb966Kn8KS1mb9jxnI4AeIEwU_k5N04fQ",
    authDomain: "gamesole-d397d.firebaseapp.com",
    databaseURL: "https://gamesole-d397d.firebaseio.com",
    storageBucket: "gamesole-d397d.appspot.com",
    messagingSenderId: "512350570420"
  };
  firebase.initializeApp(config);

  // auth check & redirect if !user
    const checkForAuth = {
      checkForAuth ($location) {
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/')
          }
        })
      }
    }

// search controller
app.controller('GameCtrl', function($scope, $http) {
  $scope.$watch('search', function() {
    fetch();
  })
  $scope.search = 'The Last Of Us';
  function fetch(){
    $http.get("https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/search?game_name=" + $scope.search)
    .then(function(response) {$scope.details = response.data; });

    $http.get("https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/search?game_name=" + $scope.search)
    .then(function(response){ $scope.related = response.data; });

    $scope.update = function(game){
      $scope.search = game.name;
      };

    $scope.select = function(){
    this.setSelectionRange(3, this.value.length);
}

  }
})

// partials and urls
app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        })
        .when('/home', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html'
        })
        .when('/search', {
            controller: 'SearchCtrl',
            templateUrl: 'partials/search.html'
        })
        .otherwise({redirectTo: '/'})
})