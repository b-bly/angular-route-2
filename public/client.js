console.log('client js loaded');

var app = angular.module('ColorApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html'
    }).when('/red', {
        templateUrl: 'views/red.html',
        controller: 'RedController',
        controllerAs: 'vm'
    }).when('/yellow', {
        templateUrl: 'views/yellow.html',
        controller: 'YellowController',
        controllerAs: 'vm'
    }).when('/blue', {
        templateUrl: 'views/blue.html',
        controller: 'BlueController'
    }).when('/green', {
        templateUrl: 'views/green.html',
        controller: 'GreenController'
    });
}]);

//bad
// app.controller('YellowController', ['$scope', function($scope) {
//     $scope.something= "something";
// }]);

//good
// app.controller('GreenController', [function() {
//     var self = this;
//     self.something = "this is something";
// }]);