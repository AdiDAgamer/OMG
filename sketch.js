
const {Engine, World, Bodies} = Matter;
var engine, world;

var ground;
var botPlayer;

function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.World;
  ground = new Ground(400, 375, 800, 50);
  botPlayer = new Player(100, 355, 25, 25);
}

function draw() 
{
  background(0);
  Engine.update(engine);
    
  ground.display();
  botPlayer.display();
}