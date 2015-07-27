'use strict';

angular.module('app')
    .directive('sameAs', function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModel) {

                function validate(value) {
                    var isValid = scope.$eval(attrs.sameAs) === value;
                    ngModel.$setValidity('same-as', isValid);
                    return isValid ? value : undefined;
                }

                ngModel.$parsers.unshift(validate);

                // Force-trigger the parsing pipeline.
                scope.$watch(attrs.sameAs, function () {
                    ngModel.$setViewValue(ngModel.$viewValue);
                });

            }
        };
    });

