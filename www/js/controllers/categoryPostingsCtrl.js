angular.module('controllers')

  .controller('postingsCtrl', function ($scope, $ionicSlideBoxDelegate) {

    $scope.jobePost = [{title: 'Babysitting', detail: 'Need someone to watch two kids'}];
    $scope.jobberPost = [{title: 'Babysitting', detail: 'Need someone to watch two kids'}];
    $scope.categories = ['Childcare', 'Driving', 'Moving', 'Heavy Lifting', 'Yard Work', 'Odd Jobs', 'Errands']

    $scope.detailPage = function(category){
      console.log(category);
    }

    $scope.switchSlide = function(index){
      if (index == 1)
      {
        $ionicSlideBoxDelegate.slide(1);
        $scope.secondaryButtonTitle = " Create";
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

