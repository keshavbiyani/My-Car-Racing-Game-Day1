var player;
var car;
function preload(){
car = loadImage("car1.png");
}
function setup() {
  createCanvas(800,600);
  player = createSprite(400, 530, 50, 50);
  player.addImage("player",car);
  player.scale = 0.1;
}

function draw() {
  background("white");  
  player.x = World.mouseX;
  drawSprites();
}
