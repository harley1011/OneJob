angular.module('controllers')

  .controller('userPostingDetailCtrl', function ($scope, $state, bidService, $ionicSlideBoxDelegate, jobService, $rootScope, tempStorageService) {
    $scope.showMore = false;
    $scope.edit = true;
    $scope.showMoreFields = function(){
      $scope.showMore = !$scope.showMore;

    }

    $scope.init = function(){
      $scope.post = tempStorageService.getTempStore();

      bidService.getBidHistory(100, $scope.post.objectId, function(result){
        $scope.bids = JSON.parse(JSON.stringify(result.data));
        console.log($scope.bids);
      });

    }

    $scope.editFields = function(){
      $scope.edit = !$scope.edit;
    }

  })

