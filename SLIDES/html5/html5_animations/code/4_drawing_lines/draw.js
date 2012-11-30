var draw = function(canvas) {
  var context = canvas.getContext('2d');
  var center = {x: canvas.width/2, y: canvas.height/2};
  var radius = center.y / 2;
  
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 10;
  context.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
  
  context.moveTo(center.x, center.y - radius);
  context.lineTo(center.x, center.y + radius);
  
  context.moveTo(center.x, center.y);
  var pointOnCircleX = center.x + radius * Math.cos(0.75 * Math.PI);
  var pointOnCircleY = center.y + radius * Math.sin(0.75 * Math.PI);
  context.lineTo(pointOnCircleX, pointOnCircleY);

  context.moveTo(center.x, center.y);
  var pointOnCircleX = center.x + radius * Math.cos(0.25 * Math.PI);
  var pointOnCircleY = center.y + radius * Math.sin(0.25 * Math.PI);
  context.lineTo(pointOnCircleX, pointOnCircleY);
  
  context.stroke();
}