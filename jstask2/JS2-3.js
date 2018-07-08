"use strict";
$(document).ready(function() {
  var get = sessionStorage.getItem('role');
  var newarr = JSON.parse(get);
  var time = 'allday' ;
  sessionStorage.setItem('time',time);
  // var newarr =  JSON.parse(localStorage.getItem('role'));
  console.log(newarr.length);
  //模拟状态机思想，状态循环
  //页面之间跳转
  var status;
  status = 0;
  var i = 1, x = 2, y = 2, z = 1;
    $("button").click(function () {
      if (status == 0) {
        $(".image2").show();
        $('.image1').hide();
        $('#changeTwo').hide();
        var s = z - 1;
        console.log(s);
        $('p').show();
        $('p').text("角色：" + newarr[s]);
        console.log($('p').text());
        console.log("11");
        x = i + 1;
        if( i < newarr.length) {
          $('button').text("隐藏" + z + "号，并传递给" + y + "号");
          status = 1;
        }else{
          $('button').text("法官查看");
          $('button').click(function () {
              window.location.href = "log-1.html";
            })
        }
      } else if (status == 1) {
        $(".image1").show();
        $('.image2').hide();
        $('#changeTwo').hide();
        $('button').text("查看" + x + "号身份");
        $('p').hide();
        console.log("22");
        status = 0;
        y++;
        z++;
        i++;
        $('#rolenumber').text(i);
      }
    })




})











