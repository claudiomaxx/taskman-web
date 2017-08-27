(function (angular) {
   'use strict';

    angular.module('userControllers', ['taskmanServices'])
        .controller('CreateUserController', [ '$rootScope', 'userServices', function ($rootScope, userServices) {
            
            var vm = this;

            vm.user = {
                name: '',
                email: ''
            };

            vm.save = function () {
                $rootScope.messages = [];
                
                userServices.create(vm.user).then(function (response) {
                    console.log(response);
                    $rootScope.messages.push({ type: 'SUCCESS', text: 'You rock! User was created succesfully!' });

                }, function (responseError) {
                    console.log('OPS! Something went wrong!', response);
                });
            };

        }]);

})(angular);