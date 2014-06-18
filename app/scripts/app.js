'use strict';

angular
  .module('investApp', ['ui.router'])

   .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
    })
    .state('state1', {
      url: "/login",
      templateUrl: "views/login.html"
    })
    .state('state2', {
      url: "/signup",
      templateUrl: "views/signup.html"
    })
    .state('state3', {
      url: "/display",
      templateUrl: "views/display.html",
      controller: 'MainCtrl'
    })
});
