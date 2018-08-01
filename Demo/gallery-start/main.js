var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
  /* Looping through images */
for (var i = 1; i < 5; i++) {
  var xxx = 'images/pic' + i + '.jpg';
  console.log(i);
  console.log(xxx);
  var newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  thumbBar.appendChild(newImage);
  newImage.onclick = function () {
    var imgSrc = this.getAttribute('src');
    change(imgSrc);
  }

  // newImage.onclick = function(e) {
  //   var imgSrc = e.target.getAttribute('src');
  //   change(imgSrc);
  // }
}
    function change(imgSrc) {
      displayedImage.setAttribute('src', imgSrc);
    }
  // }
/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
  var c = btn.getAttribute("class");
  if(c == "dark"){
    btn.setAttribute('class',"light");
    btn.textContent = "lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  }else if( c =="light" ){
    btn.setAttribute('class',"dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}