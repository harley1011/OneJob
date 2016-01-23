angular.module('controllers')
  .controller('registerCtrl', function ($scope, $state, accountService, $ionicLoading) {
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


  })

