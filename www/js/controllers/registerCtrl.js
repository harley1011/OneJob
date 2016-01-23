angular.module('controllers')
  .controller('registerCtrl', function ($scope, registrationService) {
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
    $scope.register = function(){

    }

  })

