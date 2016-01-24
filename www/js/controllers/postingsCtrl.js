angular.module('controllers')

  .controller('postingsCtrl', function ($scope, $state, $ionicSlideBoxDelegate, jobService) {

    $scope.jobsPost = [{title: 'Babysitting', detail: 'Need someone to watch two kids'}];
    $scope.jobberPosts = [
      {firstName: 'John', lastName: 'Doe', rating: 4, reviews: 5, tags: ['Mover', 'Tutor'], profilePicture: 'img/adam.jpg', detail: 'I am a tutor for Math, English and French for high school students.'},
      {firstName: 'Bob', lastName: 'Grey', rating: 3, reviews: 6, tags: ['Mover', 'Lawn Care'], profilePicture: 'img/ben.png', detail: 'I am a mover with a truck and provide lawn care with my own equipment.'}]

      $scope.detailPage = function(categorie){
      console.log(categorie);
      $state.go('tab.categoryPostings');
    }

    $scope.init = function(){
      jobService.returnAllJobs(50, null, null, function(result){
        console.log(JSON.parse(JSON.stringify(result.jobs)));
        $scope.jobsPost = JSON.parse(JSON.stringify(result.jobs));
      })
    }
    $scope.secondaryButtonAction = function(){
      $state.go('tab.createPosting');
    }

    $scope.getNumber = function(num) {
      return new Array(num);
    }

    $scope.switchSlide = function(index){
      if (index == 1)
      {
        $ionicSlideBoxDelegate.slide(1)
      }
      else {
        $ionicSlideBoxDelegate.slide(0);
      }

    }
    $scope.slideChange = function ($index) {
      if ($index == 1)
      {

        $scope.secondaryButtonTitle = " Create";
      }
      else
      {

        $scope.secondaryButtonTitle = "";
      }
    }
  })

