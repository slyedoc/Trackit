'use strict';
angular.module('app')
    .controller('ItemTypeListCtrl', function ($scope, itemTypes, toaster) {
        $scope.itemTypes = itemTypes;

        $scope.selectedItems = [];

        $scope.options = {
            items: $scope.itemTypes,
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
            itemTypes.post( $scope.addItem).then(function (data) {
                toaster.pop('success', 'Added Item Type', data.name);
                $scope.itemTypes.push(data);
            });
        };

        // Delete
        $scope.delete = function () {
            $scope.selectedItems[0].remove().then(function () {
                toaster.pop('success', 'Deleted Item Type', $scope.selectedItems[0].name);
                _.pull($scope.itemTypes, $scope.selectedItems[0]);
            });
        };
    });