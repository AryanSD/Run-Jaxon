
var Path,Jaxon
var leftbor,rightbor;
var PathImg,Jaxonrun;

function preload(){
  PathImg = loadImage("path.png");

  Jaxonrun = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
createCanvas(400,400);
  // Moving background
Path=createSprite(200,200);
Path.addImage(PathImg);
Path.velocityY = 4;
Path.scale = 1.2;

//creating boy running
Jaxon = createSprite(180,340,30,30);
Jaxon.scale=0.08;
Jaxon.addAnimation("Jaxonrun", Jaxonrun);
  
// create left Boundary
leftbor=createSprite(0,0,100,800);
leftbor.visible = false;

//create right Boundary
rightbor=createSprite(410,0,100,800);
rightbor.visible = false;
}

function draw() {
  background(0);
  Path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  Jaxon.x = World.mouseX;
  
  edges= createEdgeSprites();
  Jaxon.collide(edges[3]);
  Jaxon.collide(leftbor);
  Jaxon.collide(rightbor);
  
  //code to reset the background
  if(Path.y > 400 ){
    Path.y = height/2;
  }
  
  drawSprites();
}