angular.module('controllers')

  .controller('userPostingDetailCtrl', function ($scope, $state, bidService, $ionicSlideBoxDelegate, jobService, $rootScope, tempStorageService) {
    $scope.showMore = false;
    $scope.edit = true;
    $scope.showMoreFields = function(){
      $scope.showMore = !$scope.showMore;

    }

    $scope.init = function(){
      $scope.post = tempStorageService.getTempStore();
      if ($scope.post.contractor)
      {
        $scope.isThereContractor = true;
      }
      else
      {
        $scope.isThereContractor = false;
      }
      bidService.getBidHistory(100, $scope.post.objectId, function(result){
        if (result.data)
        $scope.bids = JSON.parse(JSON.stringify(result.data));
        console.log($scope.bids);

      });

    }

    $scope.pickBid = function(bid){
      bidService.pickBid(bid.objectId, function(result){
        console.log(result);
      })
    }
    $scope.editFields = function(){
      $scope.edit = !$scope.edit;
    }

  })

