$(document).ready(function() {
  var fsm = new StateMachine({
     init:'单身汉',
    transitions: [
      { name: 'flower', from: '单身汉',   to: '初恋'  },
      { name: 'flower', from: '初恋',   to: '热恋'  },
      { name: 'flower', from: '热恋',   to: '结婚'  },
      { name: 'flower', from: '结婚',   to: '结婚'  },
      { name: 'ring',  from: '单身汉',  to: '热恋' },
      { name: 'ring',  from: '初恋',  to: '结婚' },
      { name: 'ring',  from: '热恋',  to: '结婚' },
      { name: 'ring',  from: '结婚',  to: '结婚' },
      { name: 'quarrel',  from: '单身汉',  to: '单身汉' },
      { name: 'quarrel', from: '结婚',  to: '热恋' },
      { name: 'quarrel', from: '热恋', to: '初恋'  },
      { name: 'quarrel',  from: '初恋',    to: '单身汉' },
      { name: 'breakup', from: '结婚',    to: '单身汉'  },
      { name: 'breakup', from: '热恋',    to: '单身汉'  },
      { name: 'breakup', from: '初恋',    to: '单身汉'  },
      { name: 'breakup', from: '单身汉',    to: '单身汉'  },
    ],

    methods: {
      onBeforeFlower: function() {
        switch (fsm.state) {
          case'单身汉':
          $('#result').text('送花进度太慢了');
          break;
          case'初恋':
          $('#result').text('送花进度太慢了');
          break;
          case'热恋':
          $('#result').text('恭喜你结婚');
          break;
          case'结婚':
          $('#result').text('咦，老夫老妻还秀恩爱');
          break;
        }
      },
      onBeforeRing:function () {
        switch (fsm.state) {
          case'单身汉':
            $('#result').text('直接热恋了');
            break;
          case'初恋':
            $('#result').text('直接结婚了');
            break;
          case'热恋':
            $('#result').text('浪费一个大钻戒');
            break;
          case'结婚':
            $('#result').text('夫人已经变成了指环王');
            break;
        }
      },
      onBeforeQuarrel:function () {
        switch (fsm.state) {
          case'单身汉':
            $('#result').text('醒醒吧，你没有女朋友');
            break;
          case'初恋':
            $('#result').text('好吧，又成功回到了单身狗');
            break;
          case'热恋':
            $('#result').text('你们又回到初恋关系');
            break;
          case'结婚':
            $('#result').text('你们又回到热恋关系');
            break;
        }
      },
      onBeforeBreakup:function () {
        switch (fsm.state) {
          case'单身汉':
            $('#result').text('别做梦了，你是一只单身汪');
            break;
          case'初恋':
            $('#result').text('成功变成了一直单身汪');
            break;
          case'热恋':
            $('#result').text('成功变成了一直单身汪');
            break;
          case'结婚':
            $('#result').text('唉，离婚了');
            break;
        }
      },
    }
  });

  $('#send1').click(function(){
    fsm.flower();
    $('#change').text(fsm.state);

  });
  $('#send2').click(function(){
    fsm.ring();
    $('#change').text(fsm.state);
  })
  $('#send3').click(function(){
    fsm.quarrel();
    $('#change').text(fsm.state);
  })
  $('#send4').click(function () {
    fsm.breakup();
    $('#change').text(fsm.state);
  })
})