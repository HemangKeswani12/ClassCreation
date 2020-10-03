var fixedRect, movingRect;
var object1,object2,object3,object4, object5;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300, 250, 60, 80);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(500, 200, 70, 80);
  movingRect.shapeColor = "yellow";

  object1 = createSprite(200,100,50,50);
  object2 = createSprite(300,100,50,50);
  object3 = createSprite(400,100,50,50);
  object4 = createSprite(500,100,50,50);
  object5 = createSprite(300, 400, 50, 50);

  object2.velocityY = 2;
  object5.velocityY = 0;
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(object4,movingRect)){
    object4.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }else{
    object4.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }

  bounceOff(object2, movingRect);

  drawSprites();
}