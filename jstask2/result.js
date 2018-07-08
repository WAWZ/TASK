var killedrole = sessionStorage.getItem('killedrole');
var voteId = sessionStorage.getItem('voteId');
var voteRole = sessionStorage.getItem('voteRole');
var days = JSON.parse(sessionStorage.getItem('days'));
var states = sessionStorage.getItem('states');
var killedMen = JSON.parse(sessionStorage.getItem('killedMen'));
var votedMen = JSON.parse(sessionStorage.getItem('votedMen'));
var killers = sessionStorage.getItem('killers');
var civilians = sessionStorage.getItem('civilians');
var time = sessionStorage.getItem('time');
$(document).ready(function() {
//判断游戏结果
  if(civilians > killers){
    $('#winnerShow').text('平民胜利');
  }else {
    $('#winnerShow').text('杀手胜利');
  }
  $('#killers').text(killers);
  $('#civilians').text(civilians);
//动态生成天数和杀投结果
    for (var i = 0; i < days; i++) {
      var day = i + 1;
      if (time == 'day') {
        var dayAdd = '<div class="day">\n' +
          '    <div class="day1">\n' +
          '        <div class="pg3row">\n' +
          '            <div class="col-xs-6 date">第' + day + '天</div>\n' +
          '            <div class="col-xs-6 time">0小时07分</div>\n' +
          '        </div>\n' +
          '        <div class="col-xs-12 night">晚上：' + killedMen[i].num + '号被杀手杀死，身份是平民</div>\n' +
          '        <div class="col-xs-12 daytime">白天：' + votedMen[i].num + '号被全民投票投死,身份是' + votedMen[i].role + '</div>\n' +
          '    </div>\n' +
          '</div>';
        $("#last").before(dayAdd);
      }else if(time == 'night') {
        if (i !== (days-1)) {
          var dayAddTo = '<div class="day">\n' +
            '    <div class="day1">\n' +
            '        <div class="pg3row">\n' +
            '            <div class="col-xs-6 date">第' + day + '天</div>\n' +
            '            <div class="col-xs-6 time">0小时07分</div>\n' +
            '        </div>\n' +
            '        <div class="col-xs-12 night">晚上：' + killedMen[i].num + '号被杀手杀死，身份是平民</div>\n' +
            '        <div class="col-xs-12 daytime">白天：' + votedMen[i].num + '号被全民投票投死,身份是' + votedMen[i].role + '</div>\n' +
            '    </div>\n' +
            '</div>';
          $("#last").before(dayAddTo);
        }else{
          var nightAdd = '<div class="day">\n' +
            '    <div class="day1">\n' +
            '        <div class="pg3row">\n' +
            '            <div class="col-xs-6 date">第'+day+'天</div>\n' +
            '            <div class="col-xs-6 time">0小时07分</div>\n' +
            '        </div>\n' +
            '        <div class="col-xs-12 night">晚上：'+killedMen[i].num+'号被杀手杀死，身份是平民</div>\n' +
            '    </div>\n' +
            '</div>'
          $('#last').before(nightAdd);
        }
      }
  }
})