angular.module('controllers')

  .controller('postingDetailCtrl', function ($scope, $state, $ionicSlideBoxDelegate, jobService, $rootScope, tempStorageService) {
    $scope.init = function(){
      $scope.post = tempStorageService.getTempStore();
    }
  })

