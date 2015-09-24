// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js


(function() {
  'use strict';

  angular.module('starter', ['ionic'])

    .run(function($ionicPlatform) {
      console.log('run')
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        console.log('ionic ready')
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider,$locationProvider) {
      console.log('config')
      $stateProvider

        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/menu.html',
          controller: 'AppCtrl'
        })

        .state('app.search', {
          url: '/search',
          views: {
            'menuContent': {
              templateUrl: 'app/search.html'
            }
          }
        })

        .state('app.browse', {
          url: '/browse',
          views: {
            'menuContent': {
              templateUrl: 'app/browse.html'
            }
          }

        })

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/category');
      //$locationProvider.html5Mode(true);
    })

  'use strict';
  // Global Controller or Parent Controller
  angular.module('starter').controller('AppCtrl', function($scope, $ionicModal, $timeout,$http) {

    console.log('AppCtrl')
    //$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    //  $rootScope.staticCarousel = false;
    //  return $rootScope.showGif = pageFactory.busy;
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('app/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };

  });

  angular.module('starter').controller('MainCtrl', function($scope, $ionicModal, $timeout,$http) {
    console.log('MainCtrl')
    //$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    //  $rootScope.staticCarousel = false;
    //  return $rootScope.showGif = pageFactory.busy;
    //});



  });

}).call(this);

//# sourceMappingURL=app.js.map

