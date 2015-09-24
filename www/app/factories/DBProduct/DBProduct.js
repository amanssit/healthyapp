(function() {
  'use strict';
  angular.module('starter').factory('DBProduct', function(DB) {
    var self = this;

    self.all = function() {
      return DB.query('SELECT * FROM products')
        .then(function(result){
          return DB.fetchAll(result);
        });
    };

    self.getById = function(id) {
      return DB.query('SELECT * FROM products WHERE id = ?', [id])
        .then(function(result){
          return DB.fetch(result);
        });
    };

    return self;
  });

}).call(this);

