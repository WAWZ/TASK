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
myApp.controller('pageCtrl',function ($scope, $http, $state, $stateParams,status,types,sideBar) {

$scope.params = $stateParams;
console.log($stateParams);
$scope.datestart = Number($scope.params.startAt) || undefined;
$scope.dateend = Number($scope.params.endAt) || undefined;
$scope.listTheType = $scope.params.type;
$scope.listTheStatus = $scope.params.status;

//侧边栏
// 取出constant里面的types、status、industry
$scope.types = types;
$scope.status = status;
$scope.sideBar = sideBar;
// $scope.industry = industry;
$scope.gtitle=sessionStorage.getItem('title');
$scope.gcontent=sessionStorage.getItem('content');
// $scope.gname = sessionStorage.getItem('name');
  // $scope.gname ='';

$scope.getTitle = function(e) {
  // $scope.x = e;
  $scope.gtitle = ($scope.gtitle == e) ? undefined : e;
  $('.sidebartitle').css({
    borderLeft: '0px'
  });

  $scope.gtitle == e ? (
    $('.sidebartitle').eq(e).css({
      borderLeft: '3px solid #fff'
    })
  ):(
    $('.sidebartitle').eq(e).css({
      borderLeft: '0px'
    })
  )
}
$scope.getContent = function(e,index){
  $scope.gcontent = e;
  sessionStorage.setItem('title',index);
  sessionStorage.setItem('content',e);
  $('.sidebartitle').eq(index).css({
    borderLeft: '3px solid #fff'
  });
}

  console.log($state.params.status);

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
    // $scope.listPagePicker,
      console.log(456);
  }else {
    alert('请求失败');
  }
});
console.log($scope.currentPage);

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
  console.log($scope.currentPage);
  $state.go('home.list', {
    page: $scope.currentPage,
  }, {
    reload: true
  });
};

// 确认显示多少条数据以及跳转到第几页
  $scope.listToShow = function () {
  console.log(12);
  $state.go('home.list', {
    size: $scope.currentSize,
    page: $scope.listPagePicker,
    // console.log(1234);
  }, {
    reload: true
  });
};

  //清除
  console.log('000');
  $scope.listClear = function(){
    $state.go('home.list',{
      type:undefined,
      status:undefined,
      startAt:undefined,
      endAt:undefined
    },{
      reload:true
    })
    console.log('clear');
  };

  //搜搜
  $scope.listSearch = function (){
    console.log('start');
    if($scope.datestart == undefined) {
      $scope.datestart = undefined;
    }else if(angular.isObject($scope.datestart)){
      $scope.datestart = Date.parse($scope.datestart);
    }
    console.log($scope.datestart);
    if($scope.dateend == undefined) {
      $scope.dateend = undefined;
    }else if(angular.isObject($scope.dateend)){
      $scope.dateend = Date.parse($scope.dateend);
      // $scope.newdateend = ($scope.dateend /1000).toString();
     $scope.dateend += 83699999;
    }
    $state.go("home.list", {
          page: 1,
          type: $scope.listTheType,
          status: $scope.listTheStatus,
          startAt: $scope.datestart,
          endAt: $scope.dateend
        }, {
          reload: true
        });
  console.log('end');
  }

//新增或者编辑
   $scope.addlist = function (id){
      $state.go("home.listdetails",{
        id:id
      })
   }

//删除
  $scope.delete = function(){
    $scope.listTheId = this.list.id;
    bootbox.confirm({
      size:"middle",
      title:"提示",
      onEscape: true,
      backdrop: true,
      message:"是否确认删除",
      buttons: {
        confirm: {
          label: '确认',
          className: 'btn-success'
        },
        cancel: {
          label: '取消',
          className: 'btn-danger'
        }
      },
      callback:function(result){
        if(result === true){
          $http({
                    method: 'DELETE',
                    url: '/carrots-admin-ajax/a/u/article/'+ $scope.listTheId
                    // params: $scope.params
        }).then (function (response) {
              if(response.data.code == 0){
                  $state.reload('home.list');
                  // alert(999);
              }else{
                alert(response.data.message);
              }
              console.log(response.data.code);
          })
          // bootbox.alert('right');
        }else{
          // bootbox.alert("wrong");
        }
      }
    })
  }

  $scope.changeShow = function(){
    $scope.listTheStatus = this.list.status;
    $scope.listTheId = this.list.id;
    if($scope.listTheStatus == 1){
      $scope.listTheStatus =2;
      bootbox.confirm({
        title:'<p class="text-left">操作提示</p>',
        // title:"操作提示",
        message:"<p class='text-center'>上线后该图片将在轮播banner中展示。</p><p class='text-center'><b>是否执行上线操作</b></p>",
        buttons: {
          confirm: {
            label: '确认',
            className: 'btn-success'
          },
          cancel: {
            label: '取消',
            className: 'btn-danger'
          }
        },
        callback:function(result){
          if(result == true){
            $http({
              method:'PUT',
              url: '/carrots-admin-ajax/a/u/article/status',
              params:{
                id:$scope.listTheId,
                status:$scope.listTheStatus
              }
            }).then(function(response){
              if(response.data.code == 0) {
                $state.reload("home.list");
                bootbox.alert({
                  title:'提示',
                  message:'上线成功',
                  size:"small",
                });
              }else {
                alert(response.data.message)
              }
            })
          }
        }
      });
    }else if ($scope.listTheStatus == 2){
      $scope.listTheStatus = 1;
      bootbox.confirm({
        title:'<p class="text-left">操作提示</p>',
        // message:'下线后该图片将不展示站轮播banner中。' +
        // '<br/>' +
        // '是否执行下线操作？',
        message:"<p class='text-center'>下线后该图片将不在轮播banner中展示。</p><br/><p class='text-center'><b>是否执行下线操作</b></p>",
        buttons: {
          confirm: {
            label: '确认',
            className: 'btn-success'
          },
          cancel: {
            label: '取消',
            className: 'btn-danger'
          }
        },
        callback:function(result){
          if(result == true){
            $http({
              method:'PUT',
              url: '/carrots-admin-ajax/a/u/article/status',
              params:{
                id:$scope.listTheId,
                status:$scope.listTheStatus
              }
            }).then(function(response){
              if(response.data.code == 0){
                $state.reload("home.list");
                bootbox.alert({
                  tltle:'提示',
                  // title:'<p class="text-left">操作提示</p>',
                  message:'下线成功',
                  size:'small',
                });
              }else{
                alert(response.data.message);
              }
            })
          }
        }
      });
    }
  };
});