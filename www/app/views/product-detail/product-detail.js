(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    console.log('ProductDetail routing')
    $stateProvider.state('app.product-detail', {
<<<<<<< HEAD
      url: '/product-detail/:proid',
=======
      url: '/product-detail',
>>>>>>> 1c1ba1346af6a4ad5fd918bdfc76a98c987b6a67
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
