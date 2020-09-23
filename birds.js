var weave = document.getElementById('content');
var height = weave.clientHeight;
var width = weave.clientWidth;
var bird = document.getElementsByClassName("bird")[0];
var initX = bird.getBoundingClientRect().top;
var initY = bird.getBoundingClientRect().left;
var container = bird.parentElement.parentElement.parentElement.parentElement.parentElement;

bird.parentElement.parentElement.parentElement.style.position = 'static';
bird.parentElement.parentElement.parentElement.parentElement.style.position = 'static';
bird.removeAttribute('onmouseover');

bird.style.position = 'absolute';
bird.style.transition = 'top 10s, left 10s';
bird.style.top = initX + 'px';
bird.style.left = initY + 'px';
bird.style['z-index'] = 99;

for (var i = 0; i < 20; i += 1) {
  var newBird = bird.cloneNode(true);
  container.appendChild(newBird);
}

var birds = document.getElementsByClassName("bird");
var wing0s = document.getElementsByClassName("wing0");
var wing1s = document.getElementsByClassName("wing1");

for (var i = 0; i < wing0s.length; i += 1) {
  var wing0 = wing0s[i];
  wing0.style.position = 'absolute';
  wing0.style.transition = 'left 3s, transform 2s';
  wing0.style.left = 0;
  wing0.style.left = wing0.offsetHeight + 'px';
  wing0.style.transform = 'rotate(90deg)';
}

for (var i = 0; i < wing1s.length; i += 1) {
  var wing1 = wing1s[i];
  wing1.style.position = 'absolute';
  wing1.style.transition = 'left 3s, transform 2s';
  wing1.style.left = 0;
  wing1.style.left = (2 * wing1.offsetHeight - 10) + 'px';
  wing1.style.transform = 'rotate(-90deg)';
}
  
  setInterval(function () {
    for (var i = 0; i < wing1s.length; i += 1) {
        var wing1 = wing1s[i];
        if (wing1.style.transform !== 'rotate(-140deg)') {
          wing1.style.transform = 'rotate(-140deg)'
        } else {
          wing1.style.transform = 'rotate(-40deg)'
        }
      }

      for (var i = 0; i < wing0s.length; i += 1) {
        var wing0 = wing0s[i];
        if (wing0.style.transform !== 'rotate(140deg)') {
          wing0.style.transform = 'rotate(140deg)'
        } else {
          wing0.style.transform = 'rotate(40deg)'
        }
      }
  }, 2000);

function moveBirds() {
  for (var i = 0; i < birds.length; i += 1) {
    var b = birds[i];
    b.style.top = Math.round(Math.random() * height) + 'px';
    b.style.left = Math.round(Math.random() * width) + 'px';
  }
}

moveBirds();

setInterval(moveBirds, 10000);






