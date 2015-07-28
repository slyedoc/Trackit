'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('config', {
                url: '/config',
                templateUrl: 'app/config/config.html',
                abstract: true
            })
            .state('config.item-type', {
                url: '/item-type',
                template: '<div ui-view></div>',
                abstract: true
            })
            .state('config.item-type.list', {
                url: '/',
                templateUrl: 'app/config/item-type/list/list.html',
                controller: 'ItemTypeListCtrl',
                resolve: {
                    itemTypes: function (Restangular) {
                        return Restangular.all('item-types').getList().then(function (data) {
                            return data;
                        });
                    }
                }
            })
            .state('config.field', {
                url: '/field',
                template: '<div ui-view></div>',
                abstract: true
            })
            .state('config.field.list', {
                url: '/',
                templateUrl: 'app/config/field/list/list.html',
                controller: 'FieldListCtrl',
                resolve: {
                    fields: function (Restangular) {
                        return Restangular.all('fields').getList().then(function (data) {
                            return data;
                        });
                    }
                }
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/admin/admin.html',
                abstract: true
            })
            .state('admin.organization', {
                url: '/organization',
                template: '<div ui-view></div>',
                abstract: true
            })
            .state('admin.organization.list', {
                url: '/',
                templateUrl: 'app/admin/organization/list/list.html',
                controller: 'OrganizationListCtrl',
                resolve: {
                    organizations: function (Restangular) {
                        return Restangular.all('organizations').getList().then(function (data) {
                            return data;
                        });
                    }
                }
            })

            .state('user', {
                url: '/users',
                template: '<div ui-view></div>',
                abstract: true
            })
            .state('user.list', {
                url: '/',
                templateUrl: 'app/user/list/list.html',
                controller: 'UserListCtrl',
                resolve: {
                    users: function (Restangular) {
                        return Restangular.all('users').getList().then(function (data) {
                            return data;
                        });
                    }
                }
            })
            .state('item', {
                url: '/items',
                template: '<div ui-view></div>',
                abstract: true
            })
            .state('item.list', {
                url: '/',
                templateUrl: 'app/item/list/list.html',
                controller: 'ItemListCtrl'
            });
    });
