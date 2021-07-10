// $(document).ready(function () {
//   var mousePos = {};

//   function getRandomInt(min, max) {
//     return Math.round(Math.random() * (max - min + 1)) + min;
//   }

//   $(window).mousemove(function (e) {
//     // console.log(e);
//     mousePos.x = e.pageX;
//     mousePos.y = e.pageY;
//   });

//   $(window).mouseleave(function (e) {
//     mousePos.x = -1;
//     mousePos.y = -1;
//   });

//   var draw = setInterval(function () {
//     if (mousePos.x > 0 && mousePos.y > 0) {
//       var range = 15;

//       var color =
//         'background: rgb(' +
//         getRandomInt(0, 255) +
//         ',' +
//         getRandomInt(0, 255) +
//         ',' +
//         getRandomInt(0, 255) +
//         ');';

//       var sizeInt = getRandomInt(10, 30);
//       var size = 'height: ' + sizeInt + 'px; width: ' + sizeInt + 'px;';

//       var left =
//         'left: ' +
//         getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) +
//         'px;';

//       var top =
//         'top: ' +
//         getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) +
//         'px;';

//       var style = left + top + color + size;
//       $("<div class='ball' style='" + style + "'></div>")
//         .appendTo('#wrap')
//         .one(
//           'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
//           function () {
//             $(this).remove();
//           }
//         );
//     }
//   }, 1);
// });

// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots = [],
  mouse = {
    x: 0,
    y: 0,
  };

// The Dot object used to scaffold the dots
var Dot = function () {
  this.x = 0;
  this.y = 0;
  this.node = (function () {
    var n = document.createElement('div');
    n.className = 'trail';
    document.body.appendChild(n);
    // document.body.appendChild(n);
    return n;
  })();
};
// The Dot.prototype.draw() method sets the position of
// the object's <div> node
Dot.prototype.draw = function () {
  this.node.style.left = this.x + 'px';
  this.node.style.top = this.y + 'px';
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
  var d = new Dot();
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
    x += (nextDot.x - dot.x) * 0.6;
    y += (nextDot.y - dot.y) * 0.6;
  });
}

addEventListener('mousemove', function (event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
