(function () {
    var homeController = function ($scope) {
        $scope.appear = function () {
            swal("Good job!", "You clicked the button!", "success")
        }
    };

    homeController.$inject = ['$scope'];

    angular.module('MyApplication')
        .controller('HomeController', homeController);
}());