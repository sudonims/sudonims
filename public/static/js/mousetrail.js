// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below

var score = 20;

var dots = [];
var mouse = {
  x: 0,
  y: 0,
};
// let edible;
// The Dot object used to scaffold the dots
var Dot = function (which, x, y) {
  this.x = x;
  this.y = y;
  this.node = (function () {
    var n = document.createElement('div');
    n.className = which;
    document.body.appendChild(n);
    // document.body.appendChild(n);
    return n;
  })();
  this.getX = () => this.x;
  this.getY = () => this.y;
};
// The Dot.prototype.draw() method sets the position of
// the object's <div> node
Dot.prototype.draw = function () {
  this.node.style.left = this.x + 'px';
  this.node.style.top = this.y + 'px';
};

// edible = new Dot(
//   'eat',
//   Math.floor(Math.random() * window.innerWidth),
//   Math.floor(Math.random() * window.innerHeight)
// );
// edible.draw();

// Creates the Dot objects, populates the dots array
for (var i = 0; i < score; i++) {
  var d = new Dot('trail', 0, 0);
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
  // draw() is called.
  var x = mouse.x,
    y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function (dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * 0.8;
    y += (nextDot.y - dot.y) * 0.8;
  });
}

addEventListener('mousemove', function (event) {
  //event.preventDefault();
  mouse.x = event.pageX - 20;
  mouse.y = event.pageY - 20;
  // if (event.x === edible.getX() && event.y == edible.getY()) {
  //   edible = new Dot(
  //     'eat',
  //     Math.floor(Math.random() * window.innerWidth),
  //     Math.floor(Math.random() * window.innerHeight)
  //   );

  //   edible.draw();
  //   score += 100;
  // }
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
