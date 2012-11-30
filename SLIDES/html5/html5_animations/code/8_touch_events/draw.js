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