/**
 * Created by towlesj on 7/16/2015.
 */
angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, authProvider, jwtInterceptorProvider, $httpProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
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
