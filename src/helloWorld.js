(function (angular) {
    "use strict";

    // Create an Angular module. Change the module's name as appropriate.
    var module = angular.module('kata.helloWorld', []);

    // Create a service.  We can get this from our test using injection.
    module.factory("greet", function () {
        return function (name) {
            return "Hello " + name + "!";
        };
    });

}(window.angular));
