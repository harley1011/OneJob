angular.module('controllers')

  .controller('postingsCtrl', function ($scope, $state, $ionicSlideBoxDelegate) {

    $scope.jobePost = [{title: 'Babysitting', detail: 'Need someone to watch two kids'}];
    $scope.jobberPosts = [{firstName: 'John', lastName: 'Doe', profilePicture: 'img/adam.jpg', detail: 'I am a tutor for Math, English and French for high school students.'}];
    $scope.categories = ['Childcare', 'Driving', 'Moving', 'Heavy Lifting', 'Yard Work', 'Odd Jobs', 'Errands']

    $scope.detailPage = function(categorie){
      console.log(categorie);
      $state.go('tab.categoryPostings');
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
      if ($index == 0)
      {

        $scope.secondaryButtonTitle = " Create";
      }
      else
      {

        $scope.secondaryButtonTitle = "";
      }
    }
  })

