angular.module('controllers')
  .controller('registerCtrl', function ($scope, $state, registrationService, $ionicLoading) {
    $scope.user =
    {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      phoneNumber: "",


    };
    $scope.error = false;

    $scope.nextPassword = function () {
      if ($scope.user.email) {
        registrationService.setEmail($scope.user.email);
        registrationService.setUsername($scope.user.username);
        $state.go('registerPassword')
      }
      else {
        $scope.message = "Please enter a valid email";
        $scope.error = true;
      }
    };

    $scope.nextEmail = function () {
      if ($scope.user.firstName || $scope.user.lastName) {
        registrationService.setNames($scope.user.firstName, $scope.user.lastName);
        $state.go('registerEmail')
      }
      else {
        $scope.message = "Please fill out both fields";
        $scope.error = true;
      }

    };

    $scope.register = function () {
      if (!$scope.user.password || $scope.user.password.length < 5) {
        $scope.error = true;
        $scope.errorMessage = "Password must be at least 5 characters"
        return;
      }
      $ionicLoading.show({
        content: '<ion-spinner icon="bubbles" class="spinner-balanced"></ion-spinner>'
      });
      var user = registrationService.getUser();

      user.password = $scope.user.password;

      registrationService.signUp(user.username, user.email, user.firstName, user.lastName, user.password, function (result) {
        $ionicLoading.hide();
        if (result.success) {
          $state.go('tab.profile');
        }
        else {
          $scope.user.email = "";
          $scope.user.password = "";
          $scope.error = true;
          $scope.message = data.message;
        }
      });
    }
  })

