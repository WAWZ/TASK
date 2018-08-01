var listApp = angular.module('listApp',[])
// var myApp = angular.module('list', ['ui.router']);

listApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    templateUrl: 'list.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'jstask5.html'
  }
  var addState = {
    name: 'add',
    url: '/add',
    templateUrl: 'list-add.html'
  }

  var otherState = {
    name: 'other',
    url: '/other',
    template: ""
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(otherState);
  $stateProvider.state(addState);
});
