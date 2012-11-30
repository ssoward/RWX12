var draw = function(canvas) {
  var context = canvas.getContext('2d');
  context.font = '32pt Arial';
  context.fillStyle = 'orange';
  context.textAlign = 'right';  
  context.fillText('Hello', canvas.width/2, canvas.height/2); 
  context.textAlign = 'left';
  context.globalAlpha = '0.5';
  context.fillText('World', canvas.width/2, canvas.height/2);
}