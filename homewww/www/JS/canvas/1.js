myApp.controller('pageCtrl',['$scope','$http',function($scope,$http){
  $http({
    method:'GET',
    url:'/carrots-admin-ajax/a/article/search'
  }).then(function successCallback(response) {
    $scope.lists = response.data.data.articleList;
  },function errorCallback(response){
    console.log('error');
  });

  // $scope.startdate = new Date();
  // $scope.popup1 = {
  //   opened: false;
  // };
  // $scope.open1 = function () {
  //   $scope.popup1.opened = true;
  // };
  $scope.popup1 = {
    opened: false
  };
  $scope.popup2 = {
    opened: false
  };
  $scope.open1 = function () {
    $scope.popup1.opened = true;
    console.log(1);
  };
  $scope.open2 = function () {
    $scope.popup2.opened = true;
    console.log(2);

  };






}]);