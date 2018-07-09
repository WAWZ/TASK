$(document).ready(function() {

  var player =JSON.parse(sessionStorage.getItem('players'));
  var killedMen = JSON.parse(sessionStorage.getItem('killedMen'));
  var killers = sessionStorage.getItem('killers');
  var civilians = sessionStorage.getItem('civilians');
  var days = sessionStorage.getItem('days');
  var time = sessionStorage.getItem('time');
  var roles = $('.role').toArray();
  var numNew,roleId;
  alert('请点击小刀确定杀人');

  //取出之前死去的人数，根据下标改变背景色
  $('.rolebox').hover(function(){
    $('.bg').hide();
    // if($(this)) {
    $(this).find('.bg').show();
    // }
  })
  for(var i = 0;i <player.length;i++){
    if(player[i].state == 'die'){
      console.log(player[i].state);
      $('.role').eq(i).css('background-color', '#c6c6c6');
      $('.number').eq(i).css('background-color', '#c6c6c6');
      // $('.rolebox').
      $('.rolebox').eq(i).unbind('mouseenter').unbind('mouseleave');
      $('.rolebox').eq(i).unbind('click');
      // $('.bg').eq(i).hide();
  }
}
  console.log(player);
// alert(player.length);
//添加点击出现小刀事件


  var status = sessionStorage.getItem('status');//保证每次页面内只能点击一次
  $('.bg').click(function() {

    // status = '1';
  if (status == '1') {
  //   if($('.rolebox')){
    num = $(this).prev().text();
    numNew = parseInt(num);
    roleId = player[numNew - 1].role;
    // alert(roleId);
    // alert(num);
    //先判断是存活状态
    if (player[numNew - 1].state == 'living') {
      //再判断身份
      if (roleId == '平民') {


        // console.log('hiuyi');
         // alert('确定杀死此人吗？');
        $(this).siblings().css('background-color', '#c6c6c6');
        $(this).hide();
        $(this).parent().unbind('mouseenter').unbind('mouseleave');
        $(this).unbind('click');





      //    player[numNew - 1].state = 'die';
      //    civilians --;
      //    sessionStorage.setItem('civilians',civilians);
      //    killedMen.push(player[numNew-1]);
      //    sessionStorage.setItem('killedMen',JSON.stringify(killedMen));
      // // sessionStorage.setItem()
      //   sessionStorage.setItem('players', JSON.stringify(player));
        status = '2';
        // sessionStorage.setItem('status',status);
    } else {
      alert('不能杀死杀手');
    }

  }
  else {
  //   alert('你已经杀人了，请不要重复点击');
  }
}
  // $parent().css('background-color','red');
})

     killers = sessionStorage.getItem('killers');
     civilians = sessionStorage.getItem('civilians');
  $('#change').click(function () {
    sessionStorage.setItem('status',status);
    var newstatus =  sessionStorage.getItem('status');

    if(newstatus == '2' ) {
 // if($('.rolebox').hover() ) {
   //判断游戏是否结束
   if(killers == 0 || (killers >= civilians)){
      // alert('jieshu');
      time = 'night';
      sessionStorage.setItem('time',time);
      window.location.href='../csstask13/result.html';
   }else {
     // alert('jixu');
     window.location.href = 'process.html';
   }
   player[numNew - 1].state = 'die';
   civilians --;
   sessionStorage.setItem('killedrole', numNew);
   sessionStorage.setItem('civilians',civilians);
   killedMen.push(player[numNew-1]);
   sessionStorage.setItem('killedMen',JSON.stringify(killedMen));
   // sessionStorage.setItem()
   sessionStorage.setItem('players', JSON.stringify(player));
   status = '1';
   sessionStorage.setItem('status',status);
 }else {
   alert('请先杀人');
 }
  })

})