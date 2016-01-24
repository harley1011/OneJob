angular.module('controllers')

  .controller('createPostingCtrl', function ($scope, $state, $ionicSlideBoxDelegate, jobService) {

    $scope.post = {
      title: "",
      detail: "",
      cost: 10,
      duration: 1,
      tag: "",
      location: "West Island"
    }

    $scope.createPost = function (){
      jobService.postJob($scope.post.title, $scope.post.detail,
        $scope.post.cost, $scope.post.duration, $scope.post.location,
        $scope.post.tag, function(result){
        console.log(result);
      })
    }


  })

