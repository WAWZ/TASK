myApp.filter('statusfilter', function () {
  return function (status) {
    if (status === 1) {
      status = '草稿';
      return  status;
    } else if (status === 2){
      status ="上线";
      return  status;
    }
  }
});
myApp.filter('typefilter', function () {
  return function (type) {
    if (type == 0) {
      type="首页banner";
      return  type;
    } else if (type == 1){
      type ="找职位banner";
      return  type;
    } else if (type == 2){
      type ="找精英banner";
      return  type;
    }  else if (type == 3){
      type ="行业大图";
      return  type;
    }
  }
});