/* global hbApp */
/* jslint node: true */ // use strict at top

"use strict";

hbApp.controller("UsersCtrl", function($scope, loadedUsers, HttpSrvc, $route) {

    $scope.users  = loadedUsers;


    $scope.updateUser = function(user) {
        HttpSrvc.myPut('/heinebier/user/'+ user.id, user).then(
            function okFunction() {},
            function errorFunction() { $route.reload();  }

        );
    };

    $scope.deleteUser = function(userId) {
        HttpSrvc.myDelete('/heinebier/user/' + userId).then(
            function okFunction() {
                $scope.users  = _.reject($scope.users, function(user) {
                    return _.isEqual(user.id, userId);
                });
            },
            function errorFunction() {}
        );
    };

    $scope.addUser = function(newUser) {


        $.datepicker.formatDate('dd-mm-yyyy', newUser.hireDate);

        return HttpSrvc.myPost('/heinebier/user', newUser).then(
            function(user) {
                $scope.users.push(user);
                $scope.newUser = null;

            });
    };
});