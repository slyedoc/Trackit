'use strict';

angular.module('app')
    .controller('NavbarCtrl', function ($scope, $state, auth, store, toaster) {

        $scope.auth = auth;

        $scope.login = function () {

            //try to sign in
            auth.signin({}, function (profile, token) {
                // Success, save info in local storage
                store.set('profile', profile);
                store.set('token', token);

                //go back to home an say hi
                $state.go('home');
                toaster.pop('success', 'Hello', 'Welcome back ' + profile.email);

        }, function () {
                // Error
            });
        };

        $scope.logout = function() {

            auth.signout();

            //remove settings form local storage and go to home screen
            store.remove('profile');
            store.remove('token');
            $state.go('home');
        }
    });