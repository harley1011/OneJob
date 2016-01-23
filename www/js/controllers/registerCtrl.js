angular.module('controllers')
  .controller('registerCtrl', function ($scope, $state, $ionicLoading, authorizeService, accountService, pushService) {
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
        accountService.setEmail($scope.user.email);
        accountService.setUsername($scope.user.username);
        $state.go('registerPassword')
      }
      else {
        $scope.message = "Please enter a valid email";
        $scope.error = true;
      }
    };

    $scope.nextPhone = function () {
      if ($scope.user.email) {
        accountService.setEmail($scope.user.email);
        $state.go('registerPhone');
      }
      else {
        $scope.message = "Please enter a valid email";
        $scope.error = true;
      }
    };

    $scope.nextEmail = function () {
      if ($scope.user.firstName || $scope.user.lastName) {
        accountService.setNames($scope.user.firstName, $scope.user.lastName);
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
      var user = accountService.getUser();


      user.password = $scope.user.password;
      if (user.phoneNumber)
      {
        user.phoneNumber = user.phoneNumber.replace(/\D/g,'');
      }
      accountService.register(user).then(function (result) {
        authorizeService.login(user.email, user.password)
          .success(function (data) {
            $ionicLoading.hide();
            if (!data.success) {
              $scope.user.email = "";
              $scope.user.password = "";
              $scope.error = true;
              $scope.message = data.message;
            }
            else {
              pushService.registerWithPushService();
              $state.go('tab.createYayOrNay');
            }
          })
          .error(function (data) {
            $scope.message = "Can't login, please check that you have internet access";
            $ionicLoading.hide();
          });
      });

    };
  })

