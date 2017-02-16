app.controller('HomeCtrl', function($scope, $http, $mdToast, authFactory, searchFactory) {
    console.log('HomeCtrl')
    searchFactory.getList()
    .then(function(res) {
        console.log(res)
        $scope.res = res
    })
    // this.items = [];
    //     for (var i = 0; i < 1000; i++) {
    //       this.items.push(i);
    //     }
    $scope.deletePost = function(post, key) {
        console.log(key)
        let delPost = {
            delete: post,
        }
        $mdToast.show(
        $mdToast.simple()
        .textContent('Post Deleted')
        .position('top left')
        .hideDelay(3000)
        );
        $http.delete(`https://gamesole-d397d.firebaseio.com/pin/${key}.json`, JSON.stringify(delPost))
    }

    $scope.addComment = function(ting, key) {
        console.log(key)
        let sendCom = {
            comment: ting,
        }
        $http.patch(`https://gamesole-d397d.firebaseio.com/pin/${key}.json`, JSON.stringify(sendCom))
    }

    $scope.upVote = function(key, gameRoute) {
    gameRoute.likes = gameRoute.likes + 1
  }

    $scope.routeGame = function() {
        let gameRoute = {
            result: $scope.searchGameData,            
            Image: $scope.img,
            comment: $scope.comment,
            uid: authFactory.getUserId(),
            likes: 0
        }
    console.log(gameRoute)
    $http.post('https://gamesole-d397d.firebaseio.com/pin/.json', JSON.stringify(gameRoute))
        .then(function() {
        searchFactory.getList()
        })
    }

})



// saving posts to home factory


// Giant Bomb Api key:
// http://www.giantbomb.com/api/activate
// dc75e54a7566ebbd6a99e4edacb2840ae2f6a514

// bing api keys:
// 1. 692e7112434a478d93043f8774f2967b
// 2. 4a563a6d1c404a23aeee158777d3c485 