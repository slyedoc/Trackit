'use strict';

angular.module('app')
    .directive('compile', function ($compile, $timeout) {
        return {
            restrict: 'A',
            compile: function () {

                return function (scope, element, attrs) {

                    scope.$watch(function () {
                            // watch the 'compile' expression for changes
                            return scope.$eval(attrs.compile);
                        },
                        function (value) {

                            // Since we may need a script template from compile-sciprts, we need to delay this directive
                            // wait one digest cycle
                            $timeout(function () {
                                // when the 'compile' expression changes
                                // assign it into the current DOM
                                element.html(value);

                                // compile the new DOM and link it to the current
                                // scope.
                                // NOTE: we only compile .childNodes so that
                                // we don't get into infinite loop compiling ourselves
                                $compile(element.contents())(scope);
                            }, 0);

                        });
                };
            }
        };
    });