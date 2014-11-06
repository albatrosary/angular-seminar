'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('footer', {
        url: '/footer',
        templateUrl: 'app/controller/footer/footer.html',
        controller: 'footerCtrl'
      });
  });