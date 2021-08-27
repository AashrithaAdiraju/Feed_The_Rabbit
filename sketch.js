
var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("leaves.png")
}

function setup(){
  
  createCanvas(400,400);
  
  garden = createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.addImage(rabbitImg);
  rabbit.scale =0.09;
}

function createLeaves(){
  leaves = createSprite(random(50, 350),40, 10, 10);
  leaves.addImage(leavesImg)
  leaves.scale = .5
  leaves.velocityY = 2
  leaves.lifetime = 30
}

function createApples(){
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg)
  apple.scale = .5
  apple.velocityY = 2
  apple.lifetime = 30
}

var select_sprites = Math.round(random(1,2));

if (frameCount % 80 == 0) {
   if (select_sprites == 1) {
     createApples();
   }
   else {
     createLeaves();
  }
}

function draw() {
  
  background(0);
  
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
