document.addEventListener("DOMContentLoaded", function() { initialise(); }, false);

var canvas;
var stage;
var graphics;

var reportKeyboardEvents = false;

function initialise() {
  var canvasID = "mainCanvas"
  canvas = document.getElementById(canvasID);
  
  canvas.width = "800";
  canvas.height = "600";
  
  canvas.addEventListener('mousemove', function(event) {
              updateMousePosition(event);
            }, false);
  window.addEventListener('keydown', function(event) {
              handleKeydown(event);
            }, false);
  window.addEventListener('keyup', function (event) {
              handleKeyup(event);
            }, false);
  
  stage = new createjs.Stage(canvasID);
  graphics = new createjs.Graphics()
  
  var background = new createjs.Shape();
  background.graphics.beginFill("black").drawRect(0, 0, canvas.width, canvas.height);
  stage.addChild(background);
  
  var circle = new createjs.Shape();
  circle.graphics.beginFill("red").drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  stage.addChild(circle);
  
  createjs.Ticker.on("tick", tick);
  function tick(event) {
    stage.update(event);
  }
}

function updateMousePosition(event) {
  var rectangle = canvas.getBoundingClientRect();
  var mousePositionX = event.clientX - rectangle.left;
  var mousePositionY = event.clientY - rectangle.top;
}
function handleKeydown(event) {
  switch (event.keyCode) {
    case 32:
      break;
    default:
      if (reportKeyboardEvents) {
        console.log("KeyDown: " + event.keycode);
      }
      break;
  }
}
function handleKeyup(event) {
  switch (event.keyCode) {
    case 32:
      break;
    default:
      if (reportKeyboardEvents) {
        console.log("Keyup: " + event.keycode);
      }
      break;
  }
}