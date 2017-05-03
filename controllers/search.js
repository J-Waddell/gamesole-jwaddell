// homepage navbar js

app.controller('SearchCtrl', function($scope, $mdSidenav, $http, $mdToast, $route, searchFactory, authFactory) {

$scope.sendCard = function(item) {
  console.log(item)
    let gameObj = {
      image: item.image.small_url,
      name: item.name,
      platform: item.platforms[0].name,
      information: item.deck,
      releaseDate: item.original_release_date,
      siteDetail: item.site_detail_url,
      likes: 0
  }
  $mdToast.show(
    $mdToast.simple()
    .textContent('Saved!')
    .position('top right')
    .hideDelay(800)
    );
  $http.post('https://gamesole-d397d.firebaseio.com/pin/.json', JSON.stringify(gameObj))
};

  $scope.Showme = function(item) {
      console.log(item, 'item')  
    $http.get(`http://www.giantbomb.com/api/search?api_key=dc75e54a7566ebbd6a99e4edacb2840ae2f6a514&format=json&query="${item}"&resources=game`)
    .then(function(search) {
      console.log(search.data.results)
      $scope.searchGameData = search.data.results
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
});

// app factory
app.factory('searchFactory', function($http) {
    return {
        getList : () => {
            return $http.get('https://gamesole-d397d.firebaseio.com/pin.json')
            .then(function(httpResObj) {
                return httpResObj.data
            })
        }
    }
})