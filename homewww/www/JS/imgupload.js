myApp.directive('myPic',function($http){
  return {
    restrict:'EA',
    templateUrl :'picture.html',
    replace:true,
    link:function(scope){
      scope.getValue = function(vm){
      //Scope提供$apply方法传播Model的变化,获得图片信息。
        scope.$apply(function(){
          console.log(vm.files[0]);
          scope.files = vm.files[0];
          scope.fileName = vm.files[0].name;
          scope.fileSize = vm.files[0].size;
          scope.fileDetail = true;
        });

        //上传
        scope.UpDown = function(){
          var formData = new FormData();
          // 将要上传的参数以键值对的形式存入formData
          formData.append('file',scope.files);
          if(scope.fileSize < 5242880){
            $http({
              method:'POST',
              url:'/carrots-admin-ajax/a/u/img/task',
              //在GET方法中可以使用params ，在POST/PUT/PATCH/DELETE中不能使用params 来传递数据，要使用data来传递。
              data:formData,
              headers: {
                //这里要注意的是，因为是通过anjularjs的http请求来上传文件的，所以要让当前的request成为一个Multipart/form-data请求，
                // anjularjs对于post和get请求默认的Content-Type header 是application/json。通过设置‘Content-Type’: undefined，
                // 这样浏览器不仅帮我们把Content-Type 设置为 multipart/form-data，还填充上当前的boundary，
                // 如果你手动设置为： ‘Content-Type’: multipart/form-data，后台会抛出异常：the current request boundary parameter is null。
                // /angularjs设置文件上传的content-type修改方式
                'Content-Type': undefined
              },
            }).then(function(response){
              if(response.data.code == 0){
                //隐藏空进度条
                scope.emptyProgress = true;
                //显示满进度条
                scope.fullProgress = true;
                scope.val = 100;
                //隐藏错号
                scope.detailTipRemove = true;
                //显示对号
                scope.detailTipOk = true;
                //上传不可用
                scope.detailUp = true;
                //显示已经上传到服务器的文件地址
                scope.detailImgUrl = response.data.data.url;
              }else{
                alert('上传失败');
              }
            });
          }else{
            alert('请上传小于5M的文件')
          }
        };

        scope.Delete = function(){
          //中断读取
          // scope.fileReader.abort();
          scope.detailImgUrl = '';
          //将input值清空，避免删除后无法上传同一张图片
          $('#detailFile').val('');
          // scope.val = 0;
          scope.detailUp = false;
          //重新让小手显示 对号隐藏
          scope.detailTipRemove = false;
          scope.detailTipOk = false;
          //表格第二行文件信息隐藏
          scope.fileDetail = false;
          //空进度条显示 满进度条隐藏
          scope.emptyProgress = false;
          scope.fullProgress = false;
        };
      };
    }
  }
});