"use strict";
var pg1 = document.getElementById("simpleOne");
var pg2 = document.getElementById("simpleTwo");
if(pg1){
    pg1.onclick = function () { start() };
}else  if (pg2){
    pg2.onclick = function () { start() };
}
function start() {
    window.location.href="matching.html";
}
function peoplenum(){
    var a=document.getElementById("input_text_Num").value;
    if( a>=4 && a <= 18) {
        // function
        window.location.href = "csstask7.html";
     }else{
    alert("请输入有效数字[4-18之间]");
 }
}
var lessB = document.getElementById("rangeLess");
var moreB = document.getElementById("rangeMore");
var  textNum =  document.getElementById("input_text_Num");
var  rangeNum = document.getElementById("input_range_Num");
// var  textNum.value =  document.getElementById("input_text_Num").value;
// var  rangeNum.value = document.getElementById("input_range_Num").value;
textNum.onchange = function (ev) { change() };

  function change(){
    rangeNum.value = textNum.value;
    console.log(rangeNum.value);
  }
  rangeNum.onchange = function (ev) { changeTwo() };

  function changeTwo() {
    textNum.value = rangeNum.value;

  }

lessB.onclick = function lessNum(){
  // textNum.value --;
  // rangeNum.value = textNum.value;
  if(textNum.value <= 4){
    alert("嗨，人数不够，再找些小伙伴吧！");
  }else{
    textNum.value --;
    rangeNum.value = textNum.value;
  }
  // alert("hi");
}
moreB.onclick = function moreNum(){
  // textNum.value ++;
  // rangeNum.value = textNum.value;
  if(textNum.value >= 18){
    alert("嗨，人数太多啦，再开一局吧！");
  }else{
    textNum.value ++;
    rangeNum.value = textNum.value;
  }
}
if(textNum.value <4 || textNum.value > 18){
      alert("请输入4-18之间的有效数字。");
}

