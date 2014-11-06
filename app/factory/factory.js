'use strict';

angular.module('app')
  .factory('factory', function () {
    // 共通処理
    var DEFUALT_MESSAGE = "AngularJS:";
    return {
      showMassage: function (message) {
        return DEFUALT_MESSAGE + message;
      }
    }
  });