var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,60,thickness,height);
  bullet.velocityX = speed; 
}

function draw() {

  background(255,255,255);  
  hasCollided()
  drawSprites();
}
function hasCollided(bulletNew , wallNew){
  bulletRightEdge=bulletNew.x+bulletNew.width;
  wallLeftEdge=wallNew.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
  if(hasCollided(bullet,wall)){
    bullet.velocitX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }
  if(damage=>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}