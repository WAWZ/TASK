$(document).ready(function() {

  if ($('button').text() == '法官查看') {
    var btn = $('button');
    btn.addEventListener('click', console.log('1111'));
    console.log('123');
  }
})