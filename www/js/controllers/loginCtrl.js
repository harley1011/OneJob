angular.module('controllers')

  .controller('loginCtrl', function ($scope, $ionicLoading,$state, authorizationService) {

    $scope.user = {
      email: "",
      password: ""
    }
    $scope.register = function()
    {
      $state.go('register');
    }
    $scope.login = function (isValid, user) {
      if (isValid) {
        $ionicLoading.show({
          content: '<ion-spinner icon="bubbles" class="spinner-balanced"></ion-spinner>'
        });
        authorizationService.login(user.email, user.password, function (result) {
          $ionicLoading.hide();
          if (result.success) {
            $scope.error = false;
            $state.go('tab.profile');
          }
          else {
            $scope.user.password = "";
            $scope.error = true;
            $scope.message = result.message.message;
          }
        })
      }
    }
  })

