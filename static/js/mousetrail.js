// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.querySelector('#canvas');
  var context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = document.documentElement.offsetHeight;
  console.log(document.documentElement.offsetHeight, window.innerWidth);

  var mouse = {
    x: 0,
    y: 0,
  };

  var edible = {
    x: Math.floor(Math.random() * window.innerWidth),
    y: Math.floor(Math.random() * document.documentElement.offsetHeight),
  };

  var motionTrailLength = 50;
  var positions = [];

  function storeLastPosition(xPos, yPos) {
    // push an item
    positions.push({
      x: xPos,
      y: yPos,
    });

    //get rid of first item
    if (positions.length > motionTrailLength) {
      positions.shift();
    }
  }

  // This is the screen redraw function
  function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var xPos = mouse.x,
      yPos = mouse.y;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(edible.x, edible.y, 10, 0, 2 * Math.PI, true);
    context.fillStyle = 'blue';
    context.fill();

    for (var i = 0; i < positions.length; i++) {
      var ratio = (i + 1) / positions.length;
      context.beginPath();
      // context.lineTo(positions[i].x, positions[i].y);
      context.arc(positions[i].x, positions[i].y, 6, 0, 2 * Math.PI, true);
      context.fillStyle = 'rgba(204, 102, 153, ' + ratio / 2 + ')';
      context.fill();
    }
    context.beginPath();
    context.arc(xPos, yPos, 6, 0, 2 * Math.PI, true);
    context.fillStyle = '#FF6A6A';
    context.fill();

    storeLastPosition(xPos, yPos);
    // update position
  }

  addEventListener('mousemove', function (event) {
    event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
    if (
      Math.sqrt(
        Math.pow(mouse.x - edible.x, 2) + Math.pow(mouse.y - edible.y, 2)
      ) <= 6
    ) {
      console.log('yaya');
      edible = {
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * document.documentElement.offsetHeight),
      };

      motionTrailLength += 10;
    }
  });

  // animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  // And get it started by calling animate().
  animate();
});
