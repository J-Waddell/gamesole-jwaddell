app.controller('HomeCtrl', function($scope, $http, $mdToast, $route, authFactory, searchFactory) {
    searchFactory.getList()
    .then(function(res) {
        $scope.res = res
    })
    $scope.deletePost = function(post, key) {
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
            siteDetail: item.site_detail_url,
            likes: 0
        }
    console.log(gameRoute)
    $http.post('https://gamesole-d397d.firebaseio.com/pin/.json', JSON.stringify(gameRoute))
        .then(function() {
        searchFactory.getList()
        })
    }

})
