$(document).ready(function() {
  var player =JSON.parse(sessionStorage.getItem('players'));
  var votedMen = JSON.parse(sessionStorage.getItem('votedMen'));
  var days = JSON.parse(sessionStorage.getItem('days'));
  var killers = JSON.parse(sessionStorage.getItem('killers'));
  var civilians = sessionStorage.getItem('civilians');
  //根据取出的玩家状态，为die状态玩家添加背景色
  for(var i = 0;i <player.length;i++){
    if(player[i].state == 'die'){
      console.log(player[i].state);
      $('.role').eq(i).css('background-color', '#c6c6c6');
      $('.number').eq(i).css('background-color', '#c6c6c6');
    }
  }
//添加点击小刀事件
  $('.rolebox').hover(function(){
    $('.bg').hide();
    $(this).find('.bg').show();
  })
  var status = 1;
  $('.bg').click(function(){
    //先判断是否第一次点击
    if(status == 1) {
      num = $(this).prev().text();
      voteId = parseInt(num);
      sessionStorage.setItem('voteId',voteId);
      alert(voteId);
      voteRole = $(this).prev().prev().text();
      sessionStorage.setItem('voteRole',voteRole);
      // 判断是否存活状态

      if(player[voteId-1].state == 'living') {
        alert('确定投死此人吗？')
        $(this).siblings().css('background-color', '#c6c6c6');
        player[voteId-1].state = 'die';
        votedMen.push(player[voteId-1]);
        //判断身份
        if(player[voteId-1].role == '平民'){
          civilians --;
          sessionStorage.setItem('civilians',civilians);
        }else  if(player[voteId-1].role == '杀手'){
          killers --;
          sessionStorage.setItem('killers',killers);
        }
        sessionStorage.setItem('votedMen',JSON.stringify(votedMen));
        sessionStorage.setItem('players',JSON.stringify(player));
        days = days + 1;
        sessionStorage.setItem('days',JSON.stringify(days));
        status = 2;
      }else if(player[voteId-1].state == 'die'){
        alert('不能再杀一次');
      }
    }else{
      alert('请不要重复点击');
    }
  })
  $('#change').click(function () {
    if(status == 2) {
      //判断是否结束游戏
      if(killers == 0 || (killers >= civilians)){
        alert('jieshu');
        time = 'day';
        sessionStorage.setItem('time',time);
        window.location.href='../csstask13/result.html';
      }else {
        alert('jixu');
        window.location.href = 'process.html';
      }
    }else {
      alert('请先投一个人');
    }
  })
})