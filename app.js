const electron = 
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


// partials and urls
app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/home/', {
          controller: 'HomeCtrl',
          templateUrl: 'partials/home.html'
        })
        .when('/', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        })
        .when('/home/:result', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html'
        })
        .when('/search', {
            controller: 'SearchCtrl',
            templateUrl: 'partials/search.html'
        })
        .when('/prog', {
          controller: 'progCtrl',
          templateUrl: 'partials/progBar.html'
        })
        .otherwise({redirectTo: '/'})
})