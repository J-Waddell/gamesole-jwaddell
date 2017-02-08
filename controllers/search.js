// homepage navbar js
// var Nav = angular.module('myApp', ['ngMaterial', 'ngMdIcons']);

app.controller('SearchCtrl', function($mdSidenav, searchFactory) {
  var vm = this;
  
  vm.toggleLeft = function() {
    $mdSidenav('left-nav').toggle();
  };
  
  vm.close = function() {
    $mdSidenav('left-nav').close();
  }
});

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
app.factory('searchFactory', function($http) {
  return {
    getList : () => {
      return $http.get('https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/search')
    }
  }
})