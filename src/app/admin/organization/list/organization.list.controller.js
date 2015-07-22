'use strict';
angular.module('app')
    .controller('OrganizationListCtrl', function ($scope, organizations) {
        $scope.organizations = organizations;
    });