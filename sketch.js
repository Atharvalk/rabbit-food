var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimage
var leaf,leafimage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimage = loadImage("apple.png");
  leafimage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

createleaf()
createapple()
  drawSprites();
  rabbit.x = World.mouseX
}
function createapple(){

  if(frameCount%60===0){
    apple = createSprite(50,0,20,20)
    apple.velocityY=3
    apple.addImage(appleimage)
    apple.scale=0.08
    apple.x=random(80,300)
  }
}

function createleaf(){
  if(frameCount%100===0){
    leaf = createSprite(100,-50,20,20)
    leaf.velocityY=3
    leaf.addImage(leafimage)
    leaf.scale=0.08
    leaf.x=random(80,300)
  }
}