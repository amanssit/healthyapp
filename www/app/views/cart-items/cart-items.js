(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    console.log('CartItems routing')
    $stateProvider.state('app.cart-items', {
      url: '/cart-items',
      views: {
        'menuContent': {
          templateUrl: 'app/views/cart-items/cart-items.html',
          controller: 'CartItemsCtrl'
        }
      }
    })

  });



  'use strict';

  angular.module('starter').controller('CartItemsCtrl', function($scope, $rootScope, $location, $stateParams,$http,LS ) {
    console.log('CartItemsCtrl controller')
    LS.setObject("cartData",[{id:1,name:"manjesh"}])


  });

}).call(this);
