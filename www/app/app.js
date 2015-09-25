// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

// Add this file before all other custom js files
var db;

(function() {
  'use strict';

  angular.module('starter', ['ionic'])

    .run(function($ionicPlatform,DB) {
      console.log('run')


      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        console.log('ionic ready')

        DB.init();

        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider,$locationProvider) {
      console.log('config')
      $stateProvider

        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/master.html',
          controller: 'AppCtrl'
        })

        .state('app.search', {
          url: '/search',
          views: {
            'menuContent': {
              templateUrl: 'app/search.html'
            }
          }
        })

        .state('app.browse', {
          url: '/browse',
          views: {
            'menuContent': {
              templateUrl: 'app/browse.html'
            }
          }

        })



      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/category');
      //$locationProvider.html5Mode(true);
    })
    .constant("APP_CONFIG", {
      baseApiUrl: "http://android.par-ken.com/healthyalsi"
    })
    .constant('DB_CONFIG', {
      name: 'DB',
      tables: [
        {
          name: 'products',
          columns: [
            {name: 'id', type: 'integer'},
            {name: 'categoryName', type: 'text'},
            {name: 'description', type: 'text'},
            {name: 'image', type: 'text'}
          ]
        }
      ]
    });

  'use strict';
  // Global Controller or Parent Controller
  angular.module('starter').controller('AppCtrl', function($scope, $ionicModal, $timeout,$http) {

    console.log('AppCtrl')
    //$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    //  $rootScope.staticCarousel = false;
    //  return $rootScope.showGif = pageFactory.busy;
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('app/login.html', {
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

  });

  angular.module('starter').controller('MainCtrl', function($scope, $ionicModal, $timeout,$http) {
    console.log('MainCtrl')
    //$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    //  $rootScope.staticCarousel = false;
    //  return $rootScope.showGif = pageFactory.busy;
    //});



  });

  function populateDB(tx) {
		/*
		 * Service: GET_RMF_NEWS
		 * @params NEWS_FLAG 1|2|3
		 */
		tx.executeSql('DROP TABLE IF EXISTS rmf_news');
		tx.executeSql('CREATE TABLE IF NOT EXISTS rmf_news (news_id INTEGER,news_header TEXT,news_content TEXT, news_url TEXT, datetime TEXT, is_enabled INTEGER, news_type INTEGER)');

		/*
		 * NFO_LIST
		 * @params
		 */
		tx.executeSql('DROP TABLE IF EXISTS nfo_product_calender');
		tx.executeSql('CREATE TABLE IF NOT EXISTS nfo_product_calender (nfo_id INTEGER,nfo_name TEXT, nfo_start_date TEXT, nfo_end_date TEXT, maturity_period TEXT)');

		/*
		 * VIDEOS
		 * @params VIDEO_FLAG 0|1|2
		 */

		tx.executeSql('DROP TABLE IF EXISTS rmf_videos')
		tx.executeSql('CREATE TABLE IF NOT EXISTS rmf_videos (video_id INTEGER,video_header TEXT, cover_image TEXT, video_expiry_date TEXT, video_duration TEXT,video_youtube_url TEXT,video_download_url TEXT,video_date  TEXT)');

		/*
		 * EQUITY_QUANTS
		 *  @params
		 */

		tx.executeSql('DROP TABLE IF EXISTS rmf_equity_quants');
		tx.executeSql('CREATE TABLE IF NOT EXISTS rmf_equity_quants (scheme_id INTEGER,scheme_name TEXT,aum INTEGER, weighted_avg_market_cap TEXT, large_cap TEXT, mid_cap TEXT, small_cap TEXT upload_datetime TEXT, quants_doc_url TEXT,doc_size TEXT, is_enabled INTEGER)');

		/*
		 * DEBT_QUANTS
		 * @params
		 */

		tx.executeSql('DROP TABLE IF EXISTS rmf_debt_quants');
		tx.executeSql('CREATE TABLE IF NOT EXISTS rmf_debt_quants (scheme_id INTEGER,scheme_name TEXT,aum INTEGER, ytm TEXT, duration TEXT,wt_average_maturity TEXT, quants_doc_url TEXT, doc_size TEXT)');

		/*
		 * GET_RMF_NEWS_HOME
		 * @params
		 */

		tx.executeSql('DROP TABLE IF EXISTS rmf_news_home');
		tx.executeSql('CREATE TABLE IF NOT EXISTS rmf_news_home (news_id INTEGER,news_header TEXT,news_content TEXT, news_url TEXT, datetime TEXT, is_enabled INTEGER, news_type INTEGER)');

		/*
		 * NFO_PRODUCT_CALENDER_HOME
		 * $params
		 */

		tx.executeSql('DROP TABLE IF EXISTS nfo_product_calender_home');
		tx.executeSql('CREATE TABLE IF NOT EXISTS nfo_product_calender_home (nfo_home_id INTEGER,nfo_name TEXT, nfo_start_date TEXT, nfo_end_date TEXT,maturity_period TEXT, is_enabled INTEGER)');

		/*
		 * MARKETS_AND_ECONOMY
		 *
		 */

		tx.executeSql('DROP TABLE IF EXISTS market_economy');
		tx.executeSql('CREATE TABLE IF NOT EXISTS market_economy (me_id INTEGER, sub_type TEXT,me_header TEXT, me_content TEXT, doc_url TEXT,doc_size TEXT)');

		/*
		 * RMF_DIFFERENCE
		 *
		 */

		tx.executeSql('DROP TABLE IF EXISTS rmf_difference');
		tx.executeSql('CREATE TABLE IF NOT EXISTS rmf_difference (rmf_id INTEGER, rmf_header TEXT,rmf_content TEXT, doc_url TEXT,doc_size TEXT,lead_generation TEXT)');

		/*
		 * Download Documents Local File System
		 *
		 */

		tx.executeSql('DROP TABLE IF EXISTS rmf_local_documents');
		tx.executeSql('CREATE TABLE IF NOT EXISTS rmf_local_documents (doc_name TEXT,doc_size  TEXT, doc_url  TEXT,doc_local_url  TEXT,doc_type TEXT)');

		/*
		 * Downloaded Videos Local File System
		 */

		tx.executeSql('DROP TABLE IF EXISTS rmf_download_videos');
		tx.executeSql('CREATE TABLE IF NOT EXISTS rmf_download_videos (video_id INTEGER,video_header text,video_duration text,video_date text,video_youtube_url text,video_local_url text)');

		tx.executeSql('DROP TABLE IF EXISTS nfo_documents');
		tx.executeSql('CREATE TABLE IF NOT EXISTS nfo_documents (nfo_id INTEGER,nfo_doc_type TEXT, nfo_doc_url TEXT, nfo_doc_name TEXT)');


		/*
		 * FUND_PERFORMANCE
		 *
		 */
		tx.executeSql('DROP TABLE IF EXISTS rmf_equity_funds');
		tx.executeSql('CREATE TABLE IF NOT EXISTS rmf_equity_funds (news_id, news_header, news_content, news_url, datetime, is_enabled, news_type)');

		/*
		 * Messages
		 *
		 */

		tx.executeSql('DROP TABLE IF EXISTS rmf_messages1');
		tx.executeSql('CREATE TABLE IF NOT EXISTS rmf_messages1 (msg_id PRIMARY KEY,msg_content TEXT,doc_url TEXT,doc_size TEXT,uploaddate TEXT,read_flag INTEGER)');



	}

	function errorCB() {
		alert("Error: Init.js ErrorCB");
	}

	function successCB() {
		//alert();
		console.log('DB Created Success');
	}


}).call(this);

//# sourceMappingURL=app.js.map

