//类型
myApp.filter('typeFilter',function(types){
  return function(type){
    return (types[type]);
  }
})
//状态
myApp.filter('statusFilter',function(status){
  console.log('wawz');
  return function(statu){
    return (status[statu]);
  }
})

  //上下线
  myApp.filter('statusChange', function () {
  console.log('shangxaixian');
  return function (status) {
    switch (status){
      case 1: return'上线';
      case 2: return'下线';
    }
  };
});
