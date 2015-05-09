(function () {
    var myController = function ($scope) {
        $scope.appear = function () {
            swal("Good job!", "You clicked the button!", "success")
        }

        $scope.title = 'Hello Angular';
    };

    myController.$inject = ['$scope'];

    angular.module('app').controller('myController', myController);
}());