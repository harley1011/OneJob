// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in serviceModule.js
// 'starter.controllers' is found in controllerModule.js
angular.module('starter', ['ionic', 'services', 'controllers'])

.run(function($ionicPlatform, $rootScope, authorizationService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, $timeout) {
    if (toState.authenticate && !authorizationService.isLoggedIn()) {
      event.preventDefault();
      $state.transitionTo('login');
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllerModule.js
  $stateProvider

  // setup an abstract state for the tabs directive

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

    .state('register', {
      url: '/register',
      templateUrl: 'templates/register-name.html',
      controller: 'registerCtrl'
    })

    .state('registerEmail', {
      url: '/registerEmail',
      templateUrl: 'templates/register-email.html',
      controller: 'registerCtrl'
    })

    .state('registerPassword', {
      url: '/registerPassword',
      templateUrl: 'templates/register-password.html',
      controller: 'registerCtrl'
    })


    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'profileCtrl'
        }
      }
    })

  .state('tab.messages', {
      url: '/messages',
      views: {
        'tab-messages': {
          templateUrl: 'templates/tab-messages.html',
          controller: 'messagesCtrl'
        }
      }
    })
  
.state('tab.feed', {
      url: '/feed',
      views: {
        'tab-feed': {
          templateUrl: 'templates/tab-feed.html',
          controller: 'feedCtrl'
        }
      }
    })
  .state('tab.postings', {
      url: '/posting',
      views: {
        'tab-posting': {
          templateUrl: 'templates/tab-postings.html',
          controller: 'postingsCtrl'
        }
      }
    })
    
    .state('tab.favorites', {
      url: '/favorites',
      views: {
        'tab-favorites': {
          templateUrl: 'templates/tab-favorites.html',
          controller: 'favoritesCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/profile');

});
