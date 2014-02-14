/*global hbApp*/
/* jslint node: true */
'use strict';

hbApp.directive('datepicker', function () {

    return {
        restrict: 'A',

        link: function (scope, element) {

           element.datepicker()   ; // { dateFormat: '@' }
        }
    };

});