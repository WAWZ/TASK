var myApp = angular.module('list', ['ui.router','ui.bootstrap']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    templateUrl: 'list.html'
  }
//
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
myApp.controller('LoadDataCtrl', ['$scope','$http', function($scope,$http){
  $http({
    method: 'GET',
    params: {},
    url:"/carrots-admin-ajax/a/article/search"
    // url: '/carrots-admin-ajax/a/article/search'
  }).then( function successCallback(response) {

    $scope.users = response.data.data.articleList;
  }, function errorCallback(response) {
    console.log('jiaaa');
  });
}]);