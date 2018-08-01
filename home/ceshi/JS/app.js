var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap']);
// var myApp = angular.module('myApp',['ui.router']);
myApp.config(function ( $stateProvider) {
  $stateProvider
    .state('list', {
      url: '/list',
      templateUrl: 'list.html'
    })
    .state('listdetails', {
      url: '/listdetails',
      templateUrl: 'list-details.html'
    })

});