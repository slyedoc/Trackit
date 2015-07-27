'use strict';
angular.module('app')
    .controller('OrganizationListCtrl', function ($scope, organizations, toaster) {
        $scope.organizations = organizations;
        $scope.selectedItems = [];

        $scope.options = {
            items: $scope.organizations,
            columns: [
                {name: 'Id', field: 'id' },
                {name: 'Name', field: 'name', sorted: true },
                {name: 'Created', field: 'createdAt', template: '{{ item.createdAt | date: \'short\' }}' },
                {name: 'Updated', field: 'updatedAt', template: '{{ item.updatedAt | date: \'short\' }}' }
            ],
            selectable: true,
            multiSelect: false,
            selectedItems: $scope.selectedItems,
            localStorage: true,
            lockTable: false,
            showExportButton: false
        };

        // Add
        $scope.addItem = {};
        $scope.add = function () {
            organizations.post( $scope.addItem ).then(function (data) {
                $scope.organizations.push(data);
                toaster.pop('success', 'Added Organization', data.name);
            });
        };

        // Delete
        $scope.delete = function () {
            $scope.selectedItems[0].remove().then(function () {
                toaster.pop('success', 'Deleted Organization', $scope.selectedItems[0].name);
                _.pull($scope.organizations, $scope.selectedItems[0]);
            });
        };
    });