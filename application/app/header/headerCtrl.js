/* global hbApp */
/* jslint node: true */ // use strict at top

"use strict";

hbApp.controller("HeaderCtrl", function($scope, $location) {


    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

});