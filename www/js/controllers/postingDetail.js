angular.module('controllers')

  .controller('postingDetailCtrl', function ($scope, $state, bidService, $ionicPopup, $ionicSlideBoxDelegate, jobService, $rootScope, tempStorageService) {
    $scope.init = function () {
      $scope.post = tempStorageService.getTempStore();
      console.log($scope.post);
      bidService.getBidHistory(100, $scope.post.objectId, function (result) {
        $scope.bids = JSON.parse(JSON.stringify(result.data));
      });
    }

    $scope.makeBid = function () {
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="Number" ng-model="data.bid">',
        title: 'Enter Bid',
        scope: $scope,
        buttons: [
          {text: 'Cancel'},
          {
            text: '<b>Send</b>',
            type: 'button-calm',
            onTap: function (e) {
              if (!$scope.data.bid) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                bidService.makeBid($scope.post.objectId, $scope.data.bid, function (result) {
                  console.log(result);
                  var notInList = true;
                  for (var i = 0; i < $scope.bids.length; i++) {
                    if ($scope.bids[i].objectId == result.bid.objectId) {
                      $scope.bids[i].bidValue = result.bid.bidValue;
                      $scope.$digest();
                      notInList = false;
                    }
                  }
                  if (notInList) {
                    $scope.bids.push(result.bid);
                    $scope.$digest();
                  }

                  return $scope.data.bid;
                })

              }
            }
          }
        ]
      })
    }
  })

