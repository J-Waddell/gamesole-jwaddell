// homepage navbar js
// var Nav = angular.module('myApp', ['ngMaterial', 'ngMdIcons']);

app.controller('SearchCtrl', function($scope, $mdSidenav, $http) {
  $http.defaults.headers.common['X-Mashape-Key'] = 'jfS9AMR1wnmshvZpFflvUUg11Tnpp1iysnujsnLAfEXBSJCk9e';
  $http.get(`https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/search?game_name=`)
    .then(function(gameData) {
      console.log(gameData.data.result)
      $scope.gameData = gameData.data.result
    })
  // $http.defaults.headers.common['X-Mashape-Key'] = 'jfS9AMR1wnmshvZpFflvUUg11Tnpp1iysnujsnLAfEXBSJCk9e';
  // $http.get(`https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/information?console=${$scope.search}`)
  //   // .then(function(gameInfo) {
    //   console.log(gameInfo)
    // })

// search bar connected to results
// $scope.Showme = function() {
//   let gameObj = {
//     result: $scope.gameData
//   }
// }

  $scope.Showme = function() {
      // console.log('showme')
      // let gameObj = {
      //   search: $scope.search
      // }
    $http.get(`https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/search?game_name=${$scope.search}`)
    .then(function(search) {
      // console.log(search.data.result)
      $scope.searchGameData = search.data.result
      console.log(typeof $scope.searchGameData)
     
  })
};

  var vm = this;
  
  vm.toggleLeft = function() {
    $mdSidenav('left-nav').toggle();
  };
  
  vm.close = function() {
    $mdSidenav('left-nav').close();
  }


var header = document.querySelector(".header");
var input = document.querySelector(".search-box-input");
var close = document.querySelector(".delete");

function hideHeader() {
  header.classList.remove('show');
  header.classList.add('hide');
};

function showHeader() {
  if (input.value === '') {
    header.classList.remove('hide');
    header.classList.add('show');
  }
};

function showHeaderOnClose() {
  header.classList.remove('hide');
  header.classList.add('show');
};

// input.addEventListener("focus", hideHeader);
// input.addEventListener("blur", showHeader);
// close.addEventListener("click", showHeaderOnClose);

// go to searched thing
// controller('SearchCtrl', function() {
//   console.log('I am SearchCtrl')
// })


// search factory
// app.factory('searchFactory', function($http) {
//   return {
//     getList : () => {
//       return $http.get(`https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/search/${$scope.results}.json`)
//     }
//   }
// })

// app.run(function($http) {
// })
  
//   app.run(function($http) {
});