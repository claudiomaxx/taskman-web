(function (angular) {
   'use strict';

    angular.module('taskControllers', ['taskmanServices'])
        .controller('CreateTaskController', [ '$rootScope', 'taskServices', function ($rootScope, taskServices) {
            
            var vm = this;

            vm.task = {
                name: '',
                departmentId: 0,
                userId: 0
            };

            vm.departmentList = [
                {
                    id: '1',
                    name: 'IT'
                },
                {
                    id: '2',
                    name: 'Financial'
                }
            ];

            vm.save = function () {
                $rootScope.messages = [];
                
                taskServices.create(vm.task).then(function (response) {
                    console.log(response);
                    $rootScope.messages.push({ type: 'SUCCESS', text: 'You rock! Task was created succesfully!' });

                }, function (responseError) {
                    console.log('OPS! Something went wrong!', response);
                });
            };

        }]);

})(angular);