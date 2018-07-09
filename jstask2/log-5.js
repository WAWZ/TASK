$(document).ready(function() {
  var player =JSON.parse(sessionStorage.getItem('players'));
  var votedMen = JSON.parse(sessionStorage.getItem('votedMen'));
  var days = JSON.parse(sessionStorage.getItem('days'));
  var killers = JSON.parse(sessionStorage.getItem('killers'));
  var civilians = sessionStorage.getItem('civilians');
  alert('请点击小刀确定投人');
  $('.rolebox').hover(function(){
    $('.bg').hide();
    $(this).find('.bg').show();
  })
  //根据取出的玩家状态，为die状态玩家添加背景色
  for(var i = 0;i <player.length;i++){
    if(player[i].state == 'die'){
      console.log(player[i].state);
      $('.role').eq(i).css('background-color', '#c6c6c6');
      $('.number').eq(i).css('background-color', '#c6c6c6');
      $('.rolebox').eq(i).unbind('mouseenter').unbind('mouseleave');
      $('.rolebox').eq(i).unbind('click');
    }
  }
//添加点击小刀事件
  var status = sessionStorage.getItem('status');//保证每次页面内只能点击一次

  // var status = 1;
  $('.bg').click(function(){
    //先判断是否第一次点击

    if(status == '1') {
      num = $(this).prev().text();
      voteId = parseInt(num);
      // alert(voteId);
      voteRole = $(this).prev().prev().text();
      // 判断是否存活状态
      if(player[voteId-1].state == 'living') {
        // alert('确定投死此人吗？')
        $(this).siblings().css('background-color', '#c6c6c6');
        player[voteId-1].state = 'die';
        votedMen.push(player[voteId-1]);
        $(this).hide();
        $(this).parent().unbind('mouseenter').unbind('mouseleave');
        $(this).unbind('click');
        //判断身份
        if(player[voteId-1].role == '平民'){
          civilians --;
        }else  if(player[voteId-1].role == '杀手'){
          killers --;
        }
        // sessionStorage.setItem('votedMen',JSON.stringify(votedMen));
        // sessionStorage.setItem('players',JSON.stringify(player));
        status = '2';
      }
      // else if(player[voteId-1].state == 'die'){
      //   alert('不能再杀一次');
      // }
    }
    // else{
    //   alert('请不要重复点击');
    // }
  })

  $('#change').click(function () {
    sessionStorage.setItem('status',status);
    var newstatus =  sessionStorage.getItem('status');

    if(newstatus == '2' ) {
    // if(status  == '2') {
      sessionStorage.setItem('votedMen',JSON.stringify(votedMen));
      sessionStorage.setItem('players',JSON.stringify(player));
      //判断是否结束游戏
      if(killers == 0 || (killers >= civilians)){
        // alert('jieshu');
        time = 'day';
        sessionStorage.setItem('time',time);
        window.location.href='../csstask13/result.html';
      }else {
        // alert('jixu');
        window.location.href = 'process.html';
      }
      days = days + 1;
      sessionStorage.setItem('days',JSON.stringify(days));
      sessionStorage.setItem('voteId',voteId);
      sessionStorage.setItem('voteRole',voteRole);
      sessionStorage.setItem('civilians',civilians);
      sessionStorage.setItem('killers',killers);
      status = '1';
      sessionStorage.setItem('status',status);
    }else {
      alert('请先投一个人');
    }
  })
})