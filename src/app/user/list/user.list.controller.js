'use strict';
angular.module('app')
    .controller('UserListCtrl', function ($scope, users) {
        $scope.users = users;
    });