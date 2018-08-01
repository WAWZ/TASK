myApp.controller('detailsCtrl',function($scope,$http,$state,$stateParams,types,industry){
  //从常量里取出来数据，渲染到option上面
  $scope.types = types;
  $scope.industry = industry;

  //富文本编辑
  var div1=document.getElementById('div1');
  var div2=document.getElementById('div2');
  var E = window.wangEditor;
  var editor = new E(div1,div2);
  editor.create()

  $scope.error = function (x) {
    console.log(x);
  }

  //初始化
  $scope.params = $stateParams;
  $scope.firstOption = undefined;
  $scope.secondOption = undefined;

    if($scope.params.id){
      $scope.addhide = true;
      $scope.editor = true;
      $http({
        method:'GET',
        url:'/carrots-admin-ajax/a/article/'+$scope.params.id,
      }).then(function(response){
        if(response.data.code == 0){
          $scope.title = response.data.data.article.title;
          $scope.firstOption = response.data.data.article.type;
          $scope.secondOption = response.data.data.article.industry;
          $scope.content = response.data.data.article.content;
          $scope.content = editor.txt.html($scope.content);
          $scope.url = response.data.data.article.url;
          $scope.detailImgUrl = response.data.data.article.img;
          $scope.createAt = response.data.data.article.createAt;
        }
        }
      )
    }


  $scope.online = function(){
    $http({
      //三目运算符判断新增上线还是编辑上线
      method:$scope.params.id ? 'PUT':'POST',
      url:'/carrots-admin-ajax/a/u/article/'+ $scope.params.id,
      params:{
        title:$scope.title,
        status:2,
        type:$scope.firstOption,
        createAt:$scope.createAt,
        img:$scope.detailImgUrl,
        content:editor.txt.html($scope.content),
        url:$scope.url,
        industry:$scope.secondOption,
      },
     }).then(function(response){
  console.log('code');
  if(response.data.code == 0){
    $state.go("home.list");
    bootbox.alert({
      title:'提示',
      message:'修改成功',
      size:'small'
    });
    reload:true;
  }else{
    alert(response.data.message);
    }
  })
};

    //保存为草稿
  $scope.save =function(){
    $http({
      method:$scope.params.id?'PUT':'POST',
      url:'/carrots-admin-ajax/a/u/article/'+ $scope.params.id,
      params:{
        title:$scope.title,
        status:1,
        type:$scope.firstOption,
        createAt:$scope.createAt,
        img:$scope.detailImgUrl,
        content:editor.txt.html($scope.content),
        url:$scope.url,
        industry:$scope.secondOption,
      },
    }).then(function(response){
      console.log('code');
      if(response.data.code == 0){
        $state.go("home.list");
        bootbox.alert({
          title:'提示',
          message:'保存成功',
          size:'small'
        });
        reload:true;
      }else{
        alert(response.data.message);
        alert(response.data.code);
      }
    })
    }

    //取消
    $scope.cancel = function(){
      $state.go('home.list');
      reload:true;
    }

})