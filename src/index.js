'use strict';

angular.module('app', ['ngAnimate', 'ngMessages', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mgcrea.ngStrap',
    'angular-loading-bar', 'auth0', 'angular-storage', 'angular-jwt', 'toaster', 'fg'])
    .config(function ($urlRouterProvider, $locationProvider, authProvider, jwtInterceptorProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        //$locationProvider.html5Mode(true);

        authProvider.init({
            domain: 'track.auth0.com',
            clientID: 'P2h25oTW8b2jWbxPWpKKKJg3gOCeCj8C'
        });

        jwtInterceptorProvider.tokenGetter = ['store', function(store) {
            // Return the saved token
            return store.get('token');
        }];
        $httpProvider.interceptors.push('jwtInterceptor');

    })
    .run(function ($rootScope, auth, store, jwtHelper, $state) {
        // This hooks al auth events to check everything as soon as the app starts
        auth.hookEvents();

        $rootScope.$on('$locationChangeStart', function() {
            var token = store.get('token');
            if (token) {
                if (!jwtHelper.isTokenExpired(token)) {
                    if (!auth.isAuthenticated) {
                        auth.authenticate(store.get('profile'), token);
                    }
                } else {
                    // Either show Login page or use the refresh token to get a new idToken
                    $state.go('home');
                }
            }
        });
    });

