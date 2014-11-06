'use strict';

angular.module('app')
  .controller('mainCtrl', function ($scope, factory) {
    // controllerの中身
    $scope.onClick = function () {
      $scope.message = factory.showMassage("AngularJSアプリケーション");
    };
  });