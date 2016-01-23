// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in serviceModule.js
// 'starter.controllers' is found in controllerModule.js
angular.module('starter', ['ionic', 'services', 'controllers'])

.run(function($ionicPlatform) {
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
        'tab-chats': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'profileCtrl'
        }
      }
    })

    .state('tab.postings', {
      url: '/postings',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-postings.html',
          controller: 'postingsCtrl'
        }
      }
    })
    .state('tab.messages', {
      url: '/messages',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-messages.html',
          controller: 'messagesCtrl'
        }
      }
    })

    .state('tab.favorites', {
      url: '/favorites',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-favorites.html',
          controller: 'favoritesCtrl'
        }
      }
    })

    .state('tab.feed', {
      url: '/feed',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-feed.html',
          controller: 'feedCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/profile');

});
