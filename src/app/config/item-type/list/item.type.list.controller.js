'use strict';
angular.module('app')
    .controller('ItemTypeListCtrl', function ($scope, itemTypes) {
        $scope.itemTypes = itemTypes;
    });