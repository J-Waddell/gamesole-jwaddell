// homepage navbar js
// var Nav = angular.module('myApp', ['ngMaterial', 'ngMdIcons']);

app.controller('SearchCtrl', function($scope, $mdSidenav, $http, $mdToast, $route, searchFactory, authFactory) {
  // $http.defaults.headers.common = '4588299-4a587cc35cb439120e3fe1260'
  // $http.get(`https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/search?game_name=`, {
  //   headers: {
  //     'X-Mashape-Key' : 'jfS9AMR1wnmshvZpFflvUUg11Tnpp1iysnujsnLAfEXBSJCk9e'
  //   }
  // })
  //   .then(function(gameData) {
  //     console.log(gameData.data.result)
  //     $scope.gameData = gameData.data.result
  //   })



// mashape new key: 

  // $http.defaults.headers.common['X-Mashape-Key'] = 'jfS9AMR1wnmshvZpFflvUUg11Tnpp1iysnujsnLAfEXBSJCk9e';
  // $http.get(`https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/information?console=${$scope.search}`)
  //   // .then(function(gameInfo) {
    //   console.log(gameInfo)
    // })

  //   $scope.downVote = function(key, gameRoute) {
  //   gameRoute.likes = gameRoute.likes - 1
  // }
  //   $scope.upVote = function(key, gameRoute) {
  //   gameRoute.likes = gameRoute.likes + 1
  // }

    // $scope.routeGame = function() {
    //     let gameRoute = {
    //         result: $scope.searchGameData,            
    //         Image: $scope.img,
    //         comment: $scope.comment,
    //         uid: authFactory.getUserId(),
    //         // likes: 0
    //     }
    // console.log(gameRoute)
    // $http.post('https://gamesole-d397d.firebaseio.com/pin/.json', JSON.stringify(gameRoute))
    // }

// search bar connected to results
// $scope.Showme = function() {
//   let gameObj = {
//     result: $scope.gameData
//   }
// }

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
    // $http.get(`https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/search?game_name=${item}`)
    .then(function(search) {
    // searchFactory.getList()
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