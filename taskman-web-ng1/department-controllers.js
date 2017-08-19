(function (angular) {
   'use strict';

    angular.module('departmentControllers', ['taskmanServices'])
        .controller('CreateDepartmentController', [ '$rootScope', 'departmentServices', function ($rootScope, departmentServices) {
            
            var vm = this;

            vm.department = {
                name: '',
                managerId: 0
            };

            vm.save = function () {
                $rootScope.messages = [];
                
                departmentServices.create(vm.department).then(function (response) {
                    console.log(response);
                    $rootScope.messages.push({ type: 'SUCCESS', text: 'You rock! Department was created succesfully!' });

                }, function (responseError) {
                    console.log('OPS! Something went wrong!', response);
                });
            };

        }]);

})(angular);