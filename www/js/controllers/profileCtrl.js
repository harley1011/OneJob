angular.module('controllers')

  .controller('profileCtrl', function ($scope, accountService) {

    $scope.init = function(){
      $scope.user = accountService.getUser();
      console.log(accountService.getUser());
    }
  })

