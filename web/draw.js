'use strict';//prevents global variables

//var draw = function draw(canvas, location){
    //alert(ele);
//    var context = canvas.getContext('2d');
//      context.beginPath();
//    context.fillStyle = 'red';
//    context.arc(location.x, location.y, 20, 0, 2 * Math.PI, true);
//    context.fill();
//    context.closePath();
//    context.stroke();






//    var center = {x: canvas.width/2, y: canvas.height/2};
//    context.fillStyle = 'orange';
//    context.font = '32pt arial';
//    context.textAlign = 'right';
//    context.fillText('hello', center.x, center.y);
//    context.textAlign = 'left';
//    context.globalAlpha = '0.5';
//    context.fillText('WORLD', center.x, center.y);

    //002 draw line
//    context.beginPath();

//    context.moveTo(center.x, center.y);
//    context.lineTo(center.x +40, center.y +40);

    //circle
    //context.arc(center.x, center.y, 50, 0, 2*Math.PI, true);

    //arc
//    context.arc(center.x, center.y, 50, 0, 2 *Math.PI, false);
//    context.fillStyle = 'blue';
//    context.fill();
//    context.lineWidth = 10;
//    context.strokeStyle = 'red';
//    context.closePath();
//    context.stroke();

//    var drawCircle = function(){
//
//    context.arc(center.x, center.y, 50, 0, 2 *Math.PI, false);
//    context.fillStyle = 'blue';
//    context.fill();
//    context.lineWidth = 10;
//    context.strokeStyle = 'red';
//    context.closePath();
//    context.stroke();
//    };
//
//    drawCircle();
//    center.x = center.x + 10;
//    setTimeout('drawCircle();', 100);


//}
var rand = function() {
  return Math.floor(Math.random() * 255);
}

var draw = function(canvas, position) {
  position.x = position.x - canvas.offsetLeft;
  position.y = position.y - canvas.offsetTop;

  var context = canvas.getContext('2d');

  context.beginPath();
  var color = "rgb(" + rand() + ", " + rand() + ", " + rand() + ")";
  context.fillStyle = color;
  context.strokeStyle = color;
  context.lineWidth = 10;
  context.arc(position.x, position.y, 20, 0, 2 * Math.PI, false);
  context.fill();
  context.stroke();
  context.closePath();
}

var display = function(canvas, position) {
  var context = canvas.getContext('2d');
  context.textAlign = 'start';
  context.font = '12pt Arial';
  context.fillStyle = 'orange';
  var positionInfo = "X: " + position.x + " Y: " + position.y;
  context.clearRect(0, canvas.height - 12, canvas.width, canvas.height - 12);
  context.fillText(positionInfo, 0, canvas.height);
}