var canvas = $("#canvas")[0]
var ctx = canvas.getContext("2d");

// ctx.canvas.width  = window.innerWidth;
// ctx.canvas.height = window.innerHeight;

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.lineWidth = 2.6;

function Point(x, y){
  this.x = x;
  this.y = y;
  return this
}

ctx.translate(0, canvas.height);
ctx.scale(1, -1);

var terrainHeights = [1,2,2,1,4,3,5,6,7,6,5,4,3,4,3,3,4,4,4,4,5,5,6,6,7,8,5,4,3,2,1,1,1,1,1]
var terrain = terrainHeights.map(function(height, index){
  return {x: index*90, y: height}
})
var cycle = 0

function render(){
  cycle++
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "lightblue";
  ctx.fill();


  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 10);

  for(i=0; i<terrain.length; i++){
    ctx.lineTo(terrain[i].x, terrain[i].y*10);
  }

  ctx.lineTo((terrain.length-1)*60, 0)
  ctx.closePath()
  ctx.fill()

  terrain = terrain.map(function(point){
    return {x: point.x - 2, y: point.y}
  })

  window.requestAnimationFrame(render);
  // console.log(terrain)

}


window.requestAnimationFrame(render);
