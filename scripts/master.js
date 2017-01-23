var canvas = $("#canvas")[0]
var ctx = canvas.getContext("2d");
var car = $("#car")

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.lineWidth = 2.6;
var middleX = window.innerWidth/2

//Set origin to bottom left
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

var xScale = 120
var terrainHeights = [1,2,2,1,4,3,5,6,7,6,5,4,3,4,3,3,4,4,4,4,5,5,6,6,7,8,5,4,3,2,1,1,1,1,1]
var terrain = terrainHeights.map(function(height, index){
  return {x: index*xScale, y: height}
})

var cycle = 0
var currentY = 0

var currentCarBody = "water";
var currentCarWheel = "wheel1";
var currentCarEngine = "engine1"

var filePath = "img/"
var bodySpeed = 4;
var wheelSpeed = 1;
var engineSpeed = 3;
var carSpeed = bodySpeed + wheelSpeed + engineSpeed;
 $("#water").on("click",function(e){
 currentCarBody = "water";
 bodySpeed = 4;
 $('#carBody').attr('src',filePath+'water.png');
  });

  $("#strong").on("click",function(e){
 currentCarBody = "strong";
 bodySpeed = 1;
 $('#carBody').attr('src', filePath+'strong.png');
  });

  $("#lightweight").on("click",function(e){
 currentCarBody = "lightweight";
 bodySpeed = 8;
 $('#carBody').attr('src', filePath+'lightweight.png');
  });

 $("#sub").on("click",function(e){
 currentCarBody = "sub";
 bodySpeed = 4;
 $('#carBody').attr('src', filePath+'sub.png');
  });


function clear(){
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "lightblue";
  ctx.fill();
}

function render(){
  cycle++
  clear()

  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 10);

  for(i=0; i<terrain.length; i++){
    ctx.lineTo(terrain[i].x, terrain[i].y*10);

    if(terrain[i].x - middleX < 80) {
      currentY = terrain[i].y
    }
  }

  ctx.lineTo((terrain.length-1)*60, 0)
  ctx.closePath()
  ctx.fill()


  var imageData = ctx.getImageData(middleX, 200, 1, 200);
  imageData.forEach(function(val){
    
  })
  console.log(imageData.data)


  //translate car
  car.css({
    left: middleX,
    bottom: currentY+60,
  })

  //move terrain
  terrain = terrain.map(function(point){
    return {x: point.x - 2, y: point.y}
  })

  // window.requestAnimationFrame(render);
  // console.log(terrain)

}


window.requestAnimationFrame(render);
