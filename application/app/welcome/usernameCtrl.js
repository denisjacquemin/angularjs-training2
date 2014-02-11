/* global myApp */
/* jslint node: true */ // use strict at top

"use strict";

hbApp.controller("UsernameCtrl", function($scope, AuthSrvc) {


    $scope.loadCurrentUser = function() {
        AuthSrvc.fetchCurrentUser().then(function(data){
            $scope.username  = data.name;
        });
    }

});