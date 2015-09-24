(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    console.log('ProductDetail routing')
    $stateProvider.state('app.product-detail', {
      url: '/product-detail',
      views: {
        'menuContent': {
          templateUrl: 'app/views/product-detail/product-detail.html',
          controller: 'ProductDetailCtrl'
        }
      }
    })

  });



  'use strict';

  angular.module('starter').controller('ProductDetailCtrl', function($scope, $rootScope, $location, $stateParams,$http ) {
    console.log('ProductDetailCtrl controller')
    $http.get("http://android.par-ken.com/healthyalsi/getProducts.php?catid="+$stateParams.cateid)
      .success(function(response) {
        $scope.products = response;
      });
    $scope.addproduct=function(id){
      alert("product Added : "+id);
    }
  });

}).call(this);
