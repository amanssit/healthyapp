(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    console.log('Products routing')
    $stateProvider

      .state('app.products', {
        url: '/products/:cateid',
        templateUrl: 'app/views/products/products.html',
        controller: 'ProductsCtrl'
      });

  });



  'use strict';

  angular.module('starter').controller('ProductsCtrl', function($scope, $rootScope, $location, $stateParams,$http ) {
    console.log('Products controller')
    $http.get("http://android.par-ken.com/healthyalsi/getProducts.php?catid="+$stateParams.cateid)
      .success(function(response) {
        $scope.products = response;
      });
    $scope.addproduct=function(id){
      alert("product Added : "+id);
    }
  });

}).call(this);
