(function() {

  'use strict';

  angular.module('starter', ['ui.router', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/views/home/home.view.html',
        controller: 'homeController',
        controllerAs: 'home'
      });

      $locationProvider.html5Mode(true);
  });

})();
