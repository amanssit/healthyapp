(function() {
  'use strict';
  angular.module('starter').factory('categoryFactory', function($http, $q, $cacheFactory, APP_CONFIG) {
    var dataFactory, categoryFactoryCache, urlBase;
    urlBase = APP_CONFIG.baseApiUrl + "/getCategory.php";
    dataFactory = {};
    categoryFactoryCache = $cacheFactory("categoryFactory");
    dataFactory.getCategories = function() {
      var deferred;
      deferred = $q.defer();
      if (!categoryFactoryCache.get("getCategories")) {
        $http({
          method: "GET",
          url: urlBase
        }).success(function(data, status, headers, config) {
          deferred.resolve(data);
          return categoryFactoryCache.put("getCategories", data);
        }).error(function(data, status) {
          return deferred.reject(data);
        });
      } else {
        deferred.resolve(categoryFactoryCache.get("getCategories"));
      }
      return deferred.promise;
    };


  //  dataFactory.getSelectedCategories = function() {
  //    var deferred;
  //    deferred = $q.defer();
  //    if (!categoryFactoryCache.get("getPropertiesByRegion" + Region)) {
  //      dataFactory.getProperties().then((function(data) {
  //        deferred.resolve(data);
  //        return categoryFactoryCache.put("getPropertiesByRegion/" + propertyName, data);
  //      }), function(error) {
  //        return deferred.reject(data);
  //      });
  //    } else {
  //      deferred.resolve(categoryFactoryCache.get("getPropertiesByRegion" + Region));
  //    }
  //    return deferred.promise;
  //  };
  //
    return dataFactory;
  });

}).call(this);

//# sourceMappingURL=categoryFactory.js.map
