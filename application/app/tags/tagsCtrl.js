/* global hbApp */
/* jslint node: true */ // use strict at top

"use strict";

hbApp.controller("TagsCtrl", function($scope, loadedTags) {

    $scope.tags  = loadedTags;

});