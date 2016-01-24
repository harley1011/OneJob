angular.module('controllers')

  .controller('postingsCtrl', function ($scope, $state, $ionicSlideBoxDelegate, jobService, $rootScope, tempStorageService) {

    $scope.currentTab = 0;
    $scope.jobsPost = [{title: 'Babysitting', detail: 'Need someone to watch two kids'}];
    $scope.myJobsPost = [{title: 'Babysitting', detail: 'Need someone to watch two kids'}];
    $scope.hiredJobs = [];
    $scope.jobberPosts = [
      {
        firstName: 'John',
        lastName: 'Doe',
        rating: 4,
        reviews: 5,
        tags: ['Mover', 'Tutor'],
        profilePicture: 'img/adam.jpg',
        detail: 'I am a tutor for Math, English and French for high school students.'
      },
      {
        firstName: 'Bob',
        lastName: 'Grey',
        rating: 3,
        reviews: 6,
        tags: ['Mover', 'Lawn Care'],
        profilePicture: 'img/ben.png',
        detail: 'I am a mover with a truck and provide lawn care with my own equipment.'
      }]

    $scope.postingDetail = function (post) {
      tempStorageService.setTempStore(post);
      $state.go('tab.postingDetail');
    }


    $scope.userPostingDetail = function (post) {
      tempStorageService.setTempStore(post);
      $state.go('tab.userPostingDetail');
    }

    $rootScope.$on('addPost', function (e, post) {
      $scope.myJobsPost.push(post);
    })


    $scope.init = function () {

      jobService.returnAllJobs(50, null, null, function (result) {
        if (result.jobs)
          $scope.jobsPost = JSON.parse(JSON.stringify(result.jobs));
        else
          $scope.jobsPost = [];
      })

      jobService.returnMyJobs(50, null, function (result) {
        if (result.jobs)
          $scope.myJobsPost = JSON.parse(JSON.stringify(result.jobs));
        else
          $scope.myJobsPost = [];
        console.log($scope.myJobsPost);
      })

      jobService.returnHiredJobs(50, function (result) {
        if (result.jobs)
          $scope.hiredJobs = JSON.parse(JSON.stringify(result.jobs));
        else
          $scope.hiredJobs = [];
      })
    }
    $scope.secondaryButtonAction = function () {
      $state.go('tab.createPosting');
    }

    $scope.getNumber = function (num) {
      return new Array(num);
    }

    $scope.switchSlide = function (index) {

      if (index == 1) {
        $scope.currentTab = 1;
        $ionicSlideBoxDelegate.slide(1)
      }
      else {
        $scope.currentTab = 0;
        $ionicSlideBoxDelegate.slide(0);
      }

    }
    $scope.slideChange = function ($index) {
      if ($index == 1) {

        $scope.secondaryButtonTitle = " Create";
      }
      else {

        $scope.secondaryButtonTitle = "";
      }
    }
  })

