angular.module('controllers')

  .controller('createPostingCtrl', function ($scope, $state, $ionicSlideBoxDelegate, jobService, $ionicHistory, $rootScope) {

    $scope.post = {
      title: "",
      detail: "",
      cost: 10,
      duration: 1,
      tag: "",
      location: "West Island"
    }

    $scope.createPost = function () {
      jobService.postJob($scope.post.title, $scope.post.detail,
        $scope.post.cost, $scope.post.duration, $scope.post.location,
        $scope.post.tag, function (result) {
          console.log(JSON.parse(JSON.stringify(result)));
          $rootScope.$broadcast('addPost', JSON.parse(JSON.stringify(result)));
          $ionicHistory.goBack(-1);
        })
    }


  })

