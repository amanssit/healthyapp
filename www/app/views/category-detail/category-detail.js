/**
 * Created by ManjeshV on 9/23/2015.
 */

(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    $stateProvider.state('app.category-details', {
      url: '/category/:id',
      views: {
        'menuContent': {
          templateUrl: 'app/views/category-detail/category-detail.html',
          controller: 'CategoryDetailCtrl'
        }
      }
    });
  });

  'use strict';

  angular.module('starter').controller('CategoryDetailCtrl', function($scope, $rootScope, $location, $stateParams, $http,categoryFactory,productFactory ) {
    $scope.data = "Manjesh Category"
  });

}).call(this);
