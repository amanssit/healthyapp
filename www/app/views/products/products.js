(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    console.log('Products routing')
    $stateProvider

      .state('app.products', {
        url: '/products/:cateid',
        views: {
          'menuContent': {
            templateUrl: 'app/views/products/products.html',
            controller: 'ProductsCtrl'
          }
        }
      });

  });



  'use strict';

  angular.module('starter').controller('ProductsCtrl', function($scope, $rootScope, $location, $stateParams,$http, DB, DBProduct ) {
    console.log('Products controller')

    $scope.products = [];
    $scope.product = null;

    // Insert Data
    DB.query("INSERT INTO products VALUES (1,'categoryName','description','image')",[]).then(function(products){
      console.log("success inserting data")
    },function(){
      console.log("Error inserting data")
    });


    // Get all the products
    DBProduct.all().then(function(products){
      $scope.products = products;
    });
    // Get one product, example with id = 2
    DBProduct.getById(1).then(function(product) {
      $scope.product = product;
    });


    $http.get("http://android.par-ken.com/healthyalsi/getProducts.php?catid="+$stateParams.cateid)
      .success(function(response) {
        $scope.products = response;
      });
    $scope.addproduct=function(id){
      alert("product Added : "+id);
    }
  });

}).call(this);
