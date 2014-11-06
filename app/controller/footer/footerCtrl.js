'use strict';

angular.module('app')
  .controller('footerCtrl', function ($scope, factory) {
    // controllerの中身
    $scope.onClick = function () {
      $scope.message = factory.showMassage("ここはフッター");
    };
  });