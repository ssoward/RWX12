var draw = function(canvas) {
  var context = canvas.getContext('2d');
  var center = {x: canvas.width/2, y: canvas.height/2};
  var radius = center.y / 2;

  context.beginPath();
  context.fillStyle = 'blue';
  context.strokeStyle = 'black';
  context.lineWidth = 10;
  context.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
  context.fill();
  
  context.stroke();
}