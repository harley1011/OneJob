angular.module('controllers')

  .controller('loginCtrl', function ($scope, $ionicLoading) {

    $scope.login = function (isValid, user) {
      if (isValid) {
        $ionicLoading.show({
          content: '<ion-spinner icon="bubbles" class="spinner-balanced"></ion-spinner>'
        });
        authenticateService.login(user.email, user.password)
          .success(function (data) {
            $ionicLoading.hide();
            if (data.success) {
              $scope.error = false;
              $state.go('tab.profile');
            }
            else {
              $scope.user.password = "";
              $scope.error = true;
              $scope.message = data.message;
            }
          })
          .error(function (data) {
            $ionicLoading.hide();
            $scope.error = true;
            $scope.message = "Can't login right now, make sure you have an internet connection";
          });
      }
    }
  })

