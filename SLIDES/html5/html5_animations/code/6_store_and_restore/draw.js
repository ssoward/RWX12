var draw = function(canvas) {
  var context = canvas.getContext('2d');
  var center = {x: canvas.width/2, y: canvas.height/2};

  context.beginPath();
  context.strokeStyle = 'blue';
  context.lineWidth = 10;
  context.moveTo(center.x - center.x/2, center.y - center.y/2);
  context.lineTo(center.x - center.x/2, center.y);
  context.stroke();
  context.save();
  
  context.beginPath();
  context.strokeStyle = 'red';
  context.moveTo(center.x - center.x/2, center.y);
  context.lineTo(center.x + center.x/2, center.y);
  context.stroke();

  context.restore();
  context.beginPath();
  context.moveTo(center.x + center.x/2, center.y);
  context.lineTo(center.x + center.x/2, center.y - center.y/2);
  context.stroke();
}