var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="white";
  movingRect=createSprite(400, 300, 50, 50);
  movingRect.shapeColor="white";
}

function draw() {
  background(0); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="white"
    fixedRect.shapeColor="white"
  }
  
  

  drawSprites();
}