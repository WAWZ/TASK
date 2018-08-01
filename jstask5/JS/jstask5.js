$(document).ready(function() {
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var logIn = document.getElementById('logIn');
  var result = document.getElementById('rersult');
  logIn.onclick = function() {
    var request = new XMLHttpRequest();//实例化XMLHttpRequest
    //发送请求
    request.open("POST", "/carrots-admin-ajax/a/login");//请求方式，请求地址
    var data = "name=" + username.value
             + "&pwd=" + password.value;
    //通过表单发送数据时默认的编码类型,发送的数据编码为“名称/值”对
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.send(data);

    request.onreadystatechange = function() {
      if (request.readyState===4) { //请求已完成，且响应已就绪
        if (request.status===200) {//成功，用户请求证正确接收，理解和处理.status:"OK"
           var data = JSON.parse(request.responseText);
           console.log(data.message);
           if(data.message == 'success'){
             // window.location.href = "http://dev.admin.carrots.ptteng.com/";
           }else {
             document.getElementById('result').innerHTML = data.message;
           }
        } else {
          alert("发生错误：" + request.status);
        }
      }
    }
  }
  logIn.onmouseleave = function(){
    document.getElementById('result').innerHTML = '';
  }
  // $("#logIn").click(function(){
  //   $.ajax({
  //     type:"POST",
  //     url:"/carrots-admin-ajax/a/login",
  //     data: {
  //       name: $("#username").val(),
  //       pwd:$("#password").val()
  //     },
  //     dataType:"json",
  //     success:function(jqXML){
  //       if(jqXML.message === "success"){
  //         $("#result").html(jqXML.message);
  //         window.location.href='http://dev.admin.carrots.ptteng.com/';
  //       }else{
  //         $("#result").html(jqXML.message);
  //         status = 2;
  //     }
  //     }
  //   });
  // })
  // $("#logIn").mouseleave(function(){
  //   $("#result").text("");
  // });
})
