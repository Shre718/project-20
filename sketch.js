var car ;
var wall;
var speed;
var weight;



function setup() {
  createCanvas(800,400);
  car=createSprite(50,200,50,50)
  wall=createSprite(400,200,60,400) 
  speed=random(10,40)
  weight=random(10,20)
}

function draw() {
  background(255,255,255)  
  wall.shapeColor="lightblue"
  car.velocityX=speed;
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
  console.log(deformation)
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
    }
    if(deformation<100){
      car.shapeColor="green"
    }
  }
  drawSprites();

}