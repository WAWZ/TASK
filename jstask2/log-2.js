$(document).ready(function() {
  var get = sessionStorage.getItem('role');
  var newarr = JSON.parse(get);
  var players ={};
  console.log(newarr);
  var player =[];
  //根据分配结果生成小格子
  for(var i = 0;i <newarr.length;i++){
    $('main').append("<div class=\"rolebox\">\n" +
      "    <div class=\"role\">"+newarr[i]+"</div>\n" +
      "    <div class=\"number\">"+(i+1)+"</div>\n" +
      "    <div class=\"bg\">\n" +
      "        <div class=\"killer-img\"></div>\n" +
      "    </div>\n" +
      "</div>");
    players ={
      role:newarr[i],
      num:(i+1),
      state:"living"
    };
    player.push(players);
  }
  console.log(player);
  console.log('hi');



})

