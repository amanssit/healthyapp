

(function() {
  'use strict';
  angular.module('starter').factory('LS',  function($window) {
    return {
      set: function(key, value) {
        localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return localStorage[key] || false;
      },
      setObject: function(key, value) {
        localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key) {
        if(localStorage[key] != undefined)
          return JSON.parse(localStorage[key] || false );

        return false;
      },
      push:function(key,value){
        var data;
        if(localStorage[key] != undefined){
          data = JSON.parse(localStorage[key])
        } else {
          data = []
        }
        data.push(value)
        localStorage[key] = JSON.stringify(data);
      },
      pop:function (key,objectKey,objectValue){
        if(localStorage[key] != undefined) {
          var data = JSON.parse(localStorage[key])
          for(var i = 0; i < data.length; i++) {
            if(data[i][objectKey] == objectValue) {
              data.splice(i, 1);localStorage[key]= JSON.stringify(data);
              break;
            }
          }
        }
      },
      remove: function(key){
        localStorage.removeItem(key);
      },
      clear: function(){
        localStorage.clear();
      }
    }
  })

}).call(this);


