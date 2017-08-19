(function (angular) {
    'use strict';

    angular.module('taskmanApp', ['ngRoute', 'departmentControllers'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/department/create', {
                    templateUrl: 'department-form-tpl.html',
                    controller: 'CreateDepartmentController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/department/create'
                });
        }])
            .run([ '$rootScope', function ($rootScope) {
                $rootScope.messages = [];
            }]);

})(angular);