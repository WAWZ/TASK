var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap','ngMessages']);
myApp.config(function ( $urlRouterProvider,$stateProvider) {
  //默认跳转login.html
  $urlRouterProvider.when('','/login');
  $stateProvider
    .state('login',{
      url:'/login',
      templateUrl:'login.html'
    })
    .state('home',{
      url:'/home',
      templateUrl:'nav-list.html'
    })
    .state('home.listdetails', {
      url: '/listdetails/?id',
      templateUrl: 'list-details.html'
    })
    .state('home.list', {
      url: "/list?title&author&type&status&page&size&startAt&endAt&total&id",
      templateUrl: 'list.html'
    })
});