/* global angular */
/* global _ */

var hbApp = angular.module('hbApp', ['ngRoute']);

hbApp.config( function($routeProvider) {

    $routeProvider
        .when('/tags', {
            templateUrl: 'index.html',
            controller: 'usernameCtrl',
            resolve: {
                loadedUsername: function(HttpSrvc, $q) {
                    return 'denis';//HttpSrvc.myGet("/rest/quote");
                }
            }
        })
        .otherwise({ redirectTo: 'app/error/error' });

});