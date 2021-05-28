

const pacArray = [
    'images/PacMan1.png', 'images/PacMan2.png',
    'images/PacMan3.png', 'images/PacMan4.png'
];

let imgNum = 0;
var img = document.getElementById('pacMan');
var pacManWidth = document.getElementById('pacMan').clientWidth;
var pacHolderWidth = document.getElementById('pacHolder').clientWidth;
var pacHolderOffset = document.getElementById('pacHolder').offsetLeft;
var right = pacHolderWidth + pacHolderOffset;
console.log(pacHolderWidth);
console.log(pacHolderOffset);
console.log(pacManWidth);
console.log(pacHolderWidth - pacManWidth);

var position = pacHolderOffset;
var direction = 'forward';

function moveForward() {
 if (imgNum === 0) {
     imgNum = 1;
     img.src = pacArray[1];
   }
 else {
   imgNum = 0;
   img.src = pacArray[0];
 }

  img.style.left = position;
  position += 10;

}

function moveBackward() {

  if (imgNum === 2) {
    imgNum = 3;
    img.src = pacArray[3];
  }
  else {
    imgNum = 2;
    img.src = pacArray[2];
  }

  img.style.left = position;
  position -= 10;


}


function move() {
    //loop over pacmen array and move each one and move image in DOM

    if (direction == 'forward') {
      if (position >= pacHolderOffset && position < right - pacManWidth) {
        moveForward();
      }
      else if (position >= right - pacManWidth) {
        moveBackward();
        direction = 'backward';
      }
    }
    else {
      if (position == pacHolderOffset) {
        moveForward();
        direction = 'forward';
      }
      else {
        moveBackward();
      }
    }

  setTimeout(move, 300);

}
move();
