(function (angular) {
   'use strict';

    angular.module('departmentControllers', ['departmentServices'])
        .controller('createDepartment', function (departmentService) {
            
            var vm = this;

            vm.department = {
                name: '',
                managerId: 0
            };

            vm.save = function () {
                departmentService.create(department).then(function (response) {
                    console.log(response);

                }, function (responseError) {
                    console.log('OPS! Something went wrong!', response);
                });
            };

        });

})(angular);