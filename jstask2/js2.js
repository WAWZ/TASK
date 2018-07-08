"use strict";
var pg1 = document.getElementById("simpleOne");
var pg2 = document.getElementById("simpleTwo");
//判断点击的哪一个首页
if(pg1){
    pg1.onclick = function () { start() };
}else  if (pg2) {
  pg2.onclick = function () {
    start()
  };
}
//根据首页跳转第二页人数设置页面
function start() {
    window.location.href="matching.html";
}
var lessB = document.getElementById("rangeLess");
var moreB = document.getElementById("rangeMore");
var  textNum =  document.getElementById("input_text_Num");
var  rangeNum = document.getElementById("input_range_Num");
var kNum = document.getElementById("killerNum");
var cNum = document.getElementById("civilianNum");
var aNum = document.getElementById("allocateNum");
//input上面值改变事件
textNum.onchange = function change(){
    rangeNum.value = textNum.value;
    ymey = false;
    textNum.focus();
  }
  //input下面值改变事件
rangeNum.onchange = function changeTwo() {
    textNum.value = rangeNum.value;
  ymey = false;
}
//减按钮设置
lessB.onclick = function lessNum(){
  if(textNum.value <= 4){
    alert("嗨，人数不够，再找些小伙伴吧！");
  }else{
    textNum.value --;
    rangeNum.value = textNum.value;
  }
  ymey = false;
}
//加按钮函数
moreB.onclick = function moreNum(){
  if(textNum.value >= 18){
    alert("嗨，人数太多啦，再开一局吧！");
  }else{
    textNum.value ++;
    rangeNum.value = textNum.value;
  }
  ymey = false;
  color();
}
aNum.onclick = function () { check() };
  var  killers;
  var civilians;
  var arr = [];
  //点击玩家设置时，先判断杀手平民数量，在进行乱序设置
function check(){
      numAllocate();
      newAllocate();
    ymey = true;
  }
  //根据input值判断杀手平民数量
function numAllocate() {
  var number = textNum.value;
  number = parseInt(number);
  if(number > 3 && number < 19){
  if (number >= 4 && number <= 5) {
    killers = 1;
  } else if (number > 5 && number <= 8) {
    killers = 2;
  } else if (number > 8 && number <= 11) {
    killers = 3;
  } else if (number > 11 && number <= 15) {
    killers = 4;
  } else if (number > 15 && number <= 18) {
    killers = 5;
  }
    kNum.innerText = killers;
  sessionStorage.setItem("killers",killers);
    civilians = number - killers;
    sessionStorage.setItem("civilians",civilians);
    cNum.innerText = civilians;
  }else{
      kNum.innerText = "0";
      cNum.innerText = "0";
  }
  return arr = [killers,civilians];
}
//根据杀手平民数量进行数组乱序
function newAllocate() {
  var arr = numAllocate();
  console.log(arr);
  var newKillers =arr[0];
  console.log(newKillers);
  var newCivilian = arr[1];
  console.log(newCivilian);
  var num = [];
  for (var i = 0; i < newKillers; i++) {
    num.push("杀手");
  }
  for (var i = newKillers; i < (newKillers + newCivilian); i++) {
    num.push("平民");
  }
  // console.log(num);
  var numNew = [];
  while (num.length) {
    var index = ~~(Math.random() * num.length);
    numNew.push(num[index]);
    num.splice(index, 1);
  }
  sessionStorage.setItem('role', JSON.stringify(numNew));

//   console.log(restoredSession);
  return numNew;
}
var allnum = newAllocate();
//点击发牌时触发的函数
var ymey = false;
function sb (){
  if((textNum.value > 3) && (textNum.value <19)) {  //首先判断人数是否有效
    if (ymey == false) {                             // 判断是否input值进行改变，如果点击事件使input值改变，没有点击玩家设置
      alert("请设置人数");
    } else {
      window.location.href = "killer.html";
      // sessionStorage();
      alert('hi');
    }
  }else {
    alert("请输入4-18");
  }
}

var btn = document.getElementById("input_range_Num"); //读取滑块设置
function color(){
 var suibian = (textNum.value - 4)/14*100 + '%';     //滑块左边占据总滑块的比例
 // alert(suibian);
 btn.style.backgroundSize=suibian ;
}
























// aNum.onclick = function () { check() };
// var  killers;
// var civilians;
// var arr = [];





// function check() {
// // var  allNum = killers + civilians ;
//   function numAllocate() {
//     var number = textNum.value;
//     number = parseInt(number);
//     if (number >= 4 && number <= 5) {
//       killers = 1;
//     } else if (number > 5 && number <= 8) {
//       killers = 2;
//     } else if (number > 8 && number <= 11) {
//       killers = 3;
//     } else if (number > 11 && number <= 15) {
//       killers = 4;
//     } else if (number > 15 && number <= 18) {
//       killers = 5;
//     }
//     kNum.innerText = killers;
//     civilians = number - killers;
//     cNum.innerText = civilians;
//     return arr = [killers, civilians];
//     sessionStorage.setItem("killers",killers);
//     sessionStorage.setItem("civilians",civilians);
//   }
//   function newAllocate() {
//     var arr = numAllocate();
//     console.log(arr);
//     var newKillers = arr[0];
//     console.log(newKillers);
//     var newCivilian = arr[1];
//     console.log(newCivilian);
//     var num = [];
//     for (var i = 0; i < newKillers; i++) {
//       num.push("killer");
//     }
//     for (var i = newKillers; i < (newKillers + newCivilian); i++) {
//       num.push("civilian");
//     }
//     console.log(num);
//     var numNew = [];
//     while (num.length) {
//       var index = ~~(Math.random() * num.length);
//       numNew.push(num[index]);
//       num.splice(index, 1);
//     }
//     console.log(numNew);
//     return numNew;
//   }
//   return newAllocate();
// }
//   function peoplenum() {
//     var a = document.getElementById("input_text_Num").value;
//     if (a >= 4 && a <= 18) {
//       var b = check();
//       if (b.length == a) {
//         console.log("任务三啦！");
//       } else {
//         alert("忘记点击玩家设置啦！")
//       }
//     } else {
//       alert("请输入有效数字[4-18之间]");
//     }
//   }



// function  peoplenum() {
//       var bFlag = true;
// }

// function peoplenum(){
//   var a=document.getElementById("input_text_Num").value;
//   if( a>=4 && a <= 18) {
//       var b = newAllocate();
//     if( b.length ==a){
//         alert("任务三啦！");
//       // window.location.href = "csstask7.html";
//     }else{
//         alert("忘记点击玩家设置啦！");
//         textNum.value = 4;
//     }
//   }else{
//     alert("请输入有效数字[4-18之间]");
//   }
// }


// console.log(addKiller());
  // var num = [];
  //
  // function addNum() {
  //   for (var i = 0; i < number; i++) {
  //     num.push(i);
  //   }
  //   return num;
  // }


//   var num = addNum();
//   console.log(num);
//
//   function shuffle(num) {
//     var b = [];
//     while (num.length) {
//       var indekillers = ~~(Math.random() * num.length);
//       b.push(num[index]);
//       num.splice(index, 1);
//     }
//     console.log(b);
//     return b;
//   }
//   var newNum = shuffle(num);
//   // console.log(newNum);
// }
// function shuffle(a) {
//   var b = [];
//   while (a.length) {
//     var indekillers = ~~(Math.random() * a.length);
//     b.push(a[index]);
//     a.splice(index, 1);
//   }
//   return b;
// }

