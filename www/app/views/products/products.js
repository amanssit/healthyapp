(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    $stateProvider.state('products', {
      url: '/products',
      templateUrl: 'app/views/products/products.html',
      controller: 'ProductsCtrl'
    });
  });

  'use strict';

  angular.module('starter').controller('ProductsCtrl', function($scope, $rootScope, $location, $stateParams,$http ) {
    $http.get("http://android.par-ken.com/healthyalsi/getProducts.php?catid="+$stateParams.cateid)
      .success(function(response) {
        $scope.products = response;
      });
    $scope.addproduct=function(id){
      alert("product Added : "+id);
    }
  });

}).call(this);
