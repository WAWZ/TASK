  $(document).ready(function() {
    var get = sessionStorage.getItem('role');
    var killedMen = [];
    sessionStorage.setItem('killedMen',JSON.stringify(killedMen));
    var votedMen = [];
    sessionStorage.setItem('votedMen',JSON.stringify(votedMen));
    var newarr = JSON.parse(get);
    var days = 1;
    sessionStorage.setItem('days',JSON.stringify(days));
    console.log(newarr);
    //根据杀手和玩家人数添加小格子
    var player =[];
    for(var i = 0;i <newarr.length;i++){
      $('main').append("<div class=\"rolebox\">\n" +
        "    <div class=\"role\">" + newarr[i] + "</div>\n" +
        "    <div class=\"number\">" + (i+1) + "</div>\n" +
        "</div>");
       players ={
        role:newarr[i],
        num:(i+1),
        state:"living"
      };
      player.push(players);
    }
    console.log(player);
    sessionStorage.setItem('players',JSON.stringify(player));
    console.log('hi');
    $('#change').click(function () {
      window.location.href='process.html';
    })
  })
