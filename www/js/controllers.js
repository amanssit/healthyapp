angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
             db = window.openDatabase("healthy", "1.0", "healthyalsi DB", 200000);
            db.transaction(populateDB, errorCB, successCB);
        }
         function populateDB(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS cartdata (id INTEGER PRIMARY KEY AUTOINCREMENT, productname,quantity)');
            alert("table created");
            insertDB();
        }
function successCB() {
       
           alert("database created");
        }
        function errorCB() {
       
          alert("there is a error");
        }
        function insertDB(tx) {
            tx.executeSql('INSERT INTO cartdata (productname,quantity) VALUES ("apple",1)');
            alert("datainserted");
        }
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CategoryCtrl', function($scope,$http) {
 
  $http.get("http://android.par-ken.com/healthyalsi/getCategory.php")
    .success(function(response) {

      $scope.categores=response;
    });
})

.controller('ProductCtrl', function($scope, $stateParams,$http) {
  $http.get("http://android.par-ken.com/healthyalsi/getProducts.php?catid="+$stateParams.cateid)
    .success(function(response) {

      $scope.products=response;
    });
    $scope.addproduct=function(id){
      alert("product Added : "+id);
    }
})
.controller('DetailsCtrl', function($scope, $stateParams,$http) {
 
});
