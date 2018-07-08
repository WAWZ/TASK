$(document).ready(function() {
  //取出之前死去的人数标号，改变背景
  var player = JSON.parse(sessionStorage.getItem('players'));
  for (var i = 0; i < player.length; i++) {
    if (player[i].state == 'die') {
      console.log(player[i].state);
      $('.role').eq(i).css('background-color', '#c6c6c6');
      $('.number').eq(i).css('background-color', '#c6c6c6');
    }
  }
  $('#change').click(function(){
    window.location.href = 'process.html';
  })
})