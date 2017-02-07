// homepage navbar js
var Nav = angular.module('myApp', ['ngMaterial', 'ngMdIcons']);

Nav.controller('mainController', ['$mdSidenav', function($mdSidenav) {
  var vm = this;
  
  vm.toggleLeft = function() {
    $mdSidenav('left-nav').toggle();
  };
  
  vm.close = function() {
    $mdSidenav('left-nav').close();
  }
}]);

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