'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise('not-found');

    // Home state routing
    $stateProvider
      .state('viewactivity', {
        url: '/activity/:activityId',
        templateUrl: 'modules/core/views/viewactivity.client.view.html',
        controller: 'ActivitiesController',
        controllerAs: 'vm'
      })
      .state('activities', {
        url: '/activityList',
        templateUrl: 'modules/core/views/activities.client.view.html',
        controller: 'ActivitiesController',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/',
        templateUrl: 'modules/core/views/home.client.view.html'
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: 'modules/core/views/404.client.view.html'
      });
  }
]);
