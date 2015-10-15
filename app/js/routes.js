var sApp = angular.module('sApp', ['ui.router', 'ngSanitize', 'angular.filter', 'uiGmapgoogle-maps'])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        onEnter: function($state) {
          console.log('home');
        }
      })

      .state('location', {
        url: '/location/:location',
        templateUrl: 'templates/detail.html',
        controller: 'LocationController',
        onEnter: function($state) {
          console.log('location');
        }
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'ContactController',
        onEnter: function($state) {
          console.log('contact');
        }
      })
    }
  ]);
