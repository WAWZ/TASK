var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. ' +
  'When they got to :inserty:, they stared in horror for a few moments, then :insertz:.' +
  ' Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
randomize.onclick = function(){ result()};

function result() {
  var newStory = storyText;
  var xTtem =insertX[Math.floor(Math.random()*3)];
  console.log(xTtem);
  // var yTtem = randomValueFormArray(insertY);
  var yTtem =insertY[Math.floor(Math.random()*3)];
  console.log(yTtem);
  // var zTtem = randomValueFormArray(insertZ);
  var zTtem = insertZ[Math.floor(Math.random()*3)];
  console.log(zTtem);
  var s = newStory.replace(':insertx:',xTtem);
  console.log(s);
  var t = s.replace(':inserty:',yTtem);
  console.log(t);
  var y = t.replace(':insertz:',zTtem);
  console.log(y);
  newStory = y.replace(':insertx:',xTtem);


  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);
   newStory = newStory.replace('94','24');
   newStory = newStory.replace('300','21');

  }

  story.textContent =newStory ;
  story.style.visibility = 'visible';
}
