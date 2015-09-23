/**
 * Created by ManjeshV on 9/23/2015.
 */

(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    $stateProvider.state('app.category', {
      url: '/category',
      views: {
        'menuContent': {
          templateUrl: 'app/views/category/category.html',
          controller: 'CategoryCtrl'
        }
      }
    });
  });

  'use strict';

  angular.module('starter').controller('CategoryCtrl', function($scope, $rootScope, $location, $stateParams, $http ) {
    $http.get("http://android.par-ken.com/healthyalsi/getCategory.php")
      .success(function(response) {

        $scope.categores=response;
      });
  });

}).call(this);
