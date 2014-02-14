/* global angular */
/* global _ */

var hbApp = angular.module('hbApp', ['ngRoute']);

hbApp.config( function($routeProvider) {

    $routeProvider
        .when('/HB_welcome-page', {
            templateUrl: 'app/welcome/welcome.html'
        }).when('/tags', {
            templateUrl: 'app/tags/tags.html',
            controller: 'TagsCtrl',
            resolve: {
                 loadedTags: function(HttpSrvc, $q) {

                     return HttpSrvc.myGet("/heinebier/tag");
                 }
            }
        }).when('/users', {
            templateUrl: 'app/users/users.html',
            controller: 'UsersCtrl',
            resolve: {
                loadedUsers: function(HttpSrvc) {

                    return HttpSrvc.myGet("/heinebier/user");
                }
            }
        })
        .otherwise({ templateUrl: 'app/error/error.html' });


});


hbApp.factory('httpInterceptor', function ($q) {
    return {
        request: function (config) {
            console.log('request sent');
            //$('body').fadeOut();
            return config || $q.when(config);
        },

        response: function(config) {
            console.log('response received');
            //$('body').fadeIn();
            return config || $q.when(config);
        }
    };
});

hbApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
});
