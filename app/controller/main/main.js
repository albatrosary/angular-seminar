'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/controller/main/main.html',
        controller: 'mainCtrl'
      });
  });