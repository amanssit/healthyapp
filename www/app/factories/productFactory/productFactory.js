(function() {
  'use strict';
  angular.module('starter').factory('productFactory', function($http, $q, $cacheFactory, APP_CONFIG) {
    var dataFactory, productFactoryCache, urlBase;
    urlBase = APP_CONFIG.baseApiUrl + "/getProducts.php?catid=";
    dataFactory = {};
    productFactoryCache = $cacheFactory("productFactory");
    dataFactory.getProductByCatID = function(catid) {
      var deferred;
      deferred = $q.defer();
      if (!productFactoryCache.get("getProductByCatID")) {
        $http({
          method: "GET",
          url: urlBase + catid
        }).success(function(data, status, headers, config) {
          deferred.resolve(data);
          return productFactoryCache.put("getProductByCatID", data);
        }).error(function(data, status) {
          return deferred.reject(data);
        });
      } else {
        deferred.resolve(productFactoryCache.get("getProductByCatID"));
      }
      return deferred.promise;
    };

    return dataFactory;
  });

}).call(this);

//# sourceMappingURL=productFactory.js.map
