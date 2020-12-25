//create requited variables
var car, wall;

var speed, weight;

function setup() {
  createCanvas(500, 400);

  //random speed and weight
  speed = random(55, 90);
  weight = random(400, 1500);

  //car
  car = createSprite(50, 200, 20, 20);
  car.velocityX = speed;
  car.shapeColor = "PURPLE";

  //wall
  wall = createSprite(450, 200, 30, 100);
  wall.shapeColor = "BROWN";
}

function draw() {
  background(0);  

  //writing the algorithm for the function "isTouching"
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX =  0;
    
    //calculating deformation and the changing the color
    var deformation = (0.5 * weight * speed * speed)/22500;
    if(deformation < 100){
      car.shapeColor = "GREEN";
    }
    if(deformation > 100 && deformation < 180){
      car.shapeColor = "YELLOW";
    }
    if(deformation > 180){
      car.shapeColor = "RED";
    }
  }

  //display text as Speed and Deformation
  fill ("white");
  text ("SPEED : " + speed , 20, 100);
  text ("DEFORMATION : " + deformation , 20, 300);
  
  //display output
  drawSprites();
}