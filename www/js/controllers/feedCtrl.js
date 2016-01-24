angular.module('controllers')

  .controller('feedCtrl', function ($scope, $state, $ionicSlideBoxDelegate, jobService, $rootScope, tempStorageService) {
    
     $scope.init = function () {

      jobService.returnAllJobs(50, null, null, function (result) {
        if (result.jobs)
          $scope.jobsPost = JSON.parse(JSON.stringify(result.jobs));
        else
          $scope.jobsPost = [];
      })
     };

  })

