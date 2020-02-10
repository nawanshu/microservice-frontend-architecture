import angular from 'angular';
import 

var mainApp = angular.module('mainApp', []);
// angular.element(function() {
//     angular.bootstrap(document, ['mainApp']);
//   });
mainApp.controller('appController', ['$scope', function($scope){
    $scope.title = 'Hello Angular';
}])

// window.onload = function(){};
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementsByTagName("body")[0].setAttribute("ng-controller", "appController");
//   });

// mainApp.config(['$routeProvider',
//     function config($routeProvider) {
//       $routeProvider.
//         when('/', {
//             templateUrl: '/index.html',
//             controller: 'appController'
//         }).
//         otherwise('/');
//     }
// ]);
