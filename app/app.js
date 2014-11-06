'use strict';

angular.module('app', ['ui.router'])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');
  });