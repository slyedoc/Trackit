'use strict';
angular.module('app')
    .controller('FieldListCtrl', function ($scope, fields, toaster) {
        $scope.entityName = 'Field';
        $scope.entities = fields;
        $scope.selectedEntities = [];

        $scope.options = {
            items: $scope.entities,
            columns: [
                {name: 'Id', field: 'id' },
                {name: 'Name', field: 'name', sorted: true },
                {name: 'Created', field: 'createdAt', template: '{{ item.createdAt | date: \'short\' }}' },
                {name: 'Updated', field: 'updatedAt', template: '{{ item.updatedAt | date: \'short\' }}' }
            ],
            selectable: true,
            multiSelect: false,
            selectedItems: $scope.selectedEntities,
            localStorage: true,
            lockTable: false,
            showExportButton: false
        };

        // Add
        $scope.addEntity = {};
        $scope.add = function () {
            $scope.entities.post( $scope.addEntity).then(function (data) {
                toaster.pop('success', 'Added ' + $scope.entityName, data.name);
                $scope.entities.push(data);
            });
        };

        // Delete
        $scope.delete = function () {
            $scope.selectedEntities[0].remove().then(function () {
                toaster.pop('success', 'Deleted' + $scope.entityName, $scope.selectedEntities[0].name);
                _.pull($scope.entities, $scope.selectedEntities[0]);
            });
        };
    });