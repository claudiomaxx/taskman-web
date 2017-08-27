(function (angular) {
    'use strict';

    angular.module('taskmanServices', [])
        .factory('departmentServices', ['$q', function ($q) {
            return {
                create: function (department) {
                    return $q.resolve({
                        data: department
                    });
                    // $http.post('', department);
                }
            };
        }])

        .factory('userServices', ['$q', function ($q) {
            return {
                create: function (user) {
                    return $q.resolve({
                        data: user
                    });
                    // $http.post('', user);
                }
            };
        }])
        
        .factory('taskServices', ['$q', function ($q) {
            return {
                create: function (user) {
                    return $q.resolve({
                        data: user
                    });
                    // $http.post('', user);
                }
            };
        }]);

})(angular);