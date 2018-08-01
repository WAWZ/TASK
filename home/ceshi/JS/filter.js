//类型
myApp.filter('typeFilter', function () {
  return function (types) {
    switch (types){
      case 0: return'首页banner';
      case 1: return'找职位banner';
      case 2: return'找精英banner';
      case 3: return'行业大图';
    }
  };
});
//状态
myApp.filter('statusFilter', function () {
  console.log(123);
  return function (status) {
    switch (status){
      case 1: return'草稿';
      case 2: return'上线';
    }
  };
});
