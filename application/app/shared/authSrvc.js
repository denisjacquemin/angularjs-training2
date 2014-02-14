/* global hbApp */
/* jslint node: true */ // use strict at top

"use strict";

hbApp.service("AuthSrvc", function(HttpSrvc) {
    return {
        fetchCurrentUser: function() {

            return HttpSrvc.myGet("/heinebier/auth");
        }
    };
});