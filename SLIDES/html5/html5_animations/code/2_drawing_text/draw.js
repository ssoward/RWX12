var draw = function(canvas) {
  var context = canvas.getContext('2d');
  context.font = '32pt Arial';
  context.textAlign = 'center';
  context.fillStyle = 'orange';
  context.fillText('Hello', canvas.width/2, canvas.height/2); 
}