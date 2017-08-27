(function (angular) {
    'use strict';

    angular.module('taskmanApp', ['ngRoute', 'departmentControllers', 'userControllers', 'taskControllers'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/department/create', {
                    templateUrl: 'department-form-tpl.html',
                    controller: 'CreateDepartmentController',
                    controllerAs: 'vm'
                })
                .when('/user/create', {
                    templateUrl: 'user-form-tpl.html',
                    controller: 'CreateUserController',
                    controllerAs: 'vm'
                })
                .when('/task/create', {
                    templateUrl: 'task-form-tpl.html',
                    controller: 'CreateTaskController',
                    controllerAs: 'vm'
                })
                .when('/home', {
                    templateUrl: 'home-tpl.html'
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.messages = [];
        }]);

})(angular);