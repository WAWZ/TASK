// myApp.controller('pageCtrl',['$scope','$http',function($scope,$http){
//   $http({
//     method:'GET',
//     url:'/carrots-admin-ajax/a/article/search'
//   }).then(function successCallback(response) {
//     $scope.lists = response.data.data.articleList;
//   },function errorCallback(response){
//     console.log('error');
//   });
//
//   // $scope.startdate = new Date();
//   // $scope.popup1 = {
//   //   opened: false;
//   // };
//   // $scope.open1 = function () {
//   //   $scope.popup1.opened = true;
//   // };
//   $scope.popup1 = {
//     opened: false
//   };
//   $scope.popup2 = {
//     opened: false
//   };
//   $scope.open1 = function () {
//     $scope.popup1.opened = true;
//   };
//   $scope.open2 = function () {
//     $scope.popup2.opened = true;
//   };
//
//
// }]);
myApp.controller('pageCtrl', function ($scope, $http, $state, $stateParams, types, status, industry) {

$scope.params = $stateParams;
// console.log($scope.params.startAt);
// console.log(typeof $scope.params.startAt);
$scope.listDateStart = Number($scope.params.startAt) || undefined;
// console.log(typeof $scope.listDateStart);
$scope.listDateEnd = Number($scope.params.endAt) || undefined;
$scope.listTheType = $scope.params.type;
$scope.listTheStatus = $scope.params.status;


// 取出constant里面的types、status、industry
$scope.types = types;
$scope.status = status;
$scope.industry = industry;


// 请求后台数据
$http({
  method: 'GET',
  url: '/carrots-admin-ajax/a/article/search',
  params: $scope.params
}).then (function (response) {
  if (response.data.code == 0){
    $scope.articleList = response.data.data.articleList;
    $scope.totalItems = response.data.data.total;
    $scope.currentPage = $scope.params.page || 1;
    $scope.currentSize = $scope.params.size || 10;
  }else {
    alert('请求失败');
  }
});


// 日期插件
// $scope.format = "yyyy/MM/dd";
// $scope.altInputFormats = ['yyyy/MM/dd'];
$scope.popup1 = {
  opened: false
};
$scope.popup2 = {
  opened: false
};
$scope.open1 = function () {
  $scope.popup1.opened = true;
};
$scope.open2 = function () {
  $scope.popup2.opened = true;
};


// 分页插件选择第几页
$scope.listPickPage = function () {
  $state.go('home.list', {
    page: $scope.currentPage,
  }, {
    reload: true
  });
};


// 确认显示多少条数据以及跳转到第几页
$scope.listToShow = function () {
  $state.go('home.list', {
    size: $scope.currentSize,
    page: $scope.listPagePicker,
  }, {
    reload: true
  });
};
});