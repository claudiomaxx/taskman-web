(function (angular) {
   'use strict';

    angular.module('taskmanServices', [])
        .factory('departmentServices', [ '$q', function ($q) {
            return {
                create: function (department) {
                    return $q.resolve({
                        data: department
                    });
                    // $http.post('', department);
                }
            };
        }]);

})(angular);