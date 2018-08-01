
myApp.controller('loginCtrl', function ($scope, $http, $state) {
  //登录
  $scope.login = function (){
    $http({
      method: 'POST',
      url: '/carrots-admin-ajax/a/login',
      params: {
        name: $scope.name,
        pwd: $scope.pwd
      },
    }).then (function (response) {
      if (response.data.code == 0) {
        sessionStorage.setItem('name', $scope.user);
        $state.go("home");
      } else{
          $scope.tips = response.data.message;
      }
    });
  };

  //鼠标移除效果
  $scope.leave = function (ev) {
    $scope.tips = '';
  }

  //退出
  $scope.logout = function(){
    $http({
      method:'POST',
      url:'/carrots-admin-ajax/a/logout'
    }).then(function(response){
      if(response.data.code == 0){
       sessionStorage.clear();
        $state.go("login");
      }else{
        alert(response.data.message);
      }
    })
  }







});