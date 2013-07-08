/*global angular */
'use strict';

var todoApp = angular.module('TodoApp', []);

todoApp
    .constant()

    .value()

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/todo.html',
                controller: 'TodoCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    .run()
;

