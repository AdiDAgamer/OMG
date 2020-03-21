
const {Engine, World, Bodies} = Matter;
var engine, world;

var ground;
var botPlayer;
var object;

function setup() 
{
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 575, 800, 50);
  botPlayer = new Player(100, 525, 25, 75);
  object = new Object(700, 300, 40, 600);
}

function draw() 
{
  background(0);
  Engine.update(engine);
    
  ground.display();
  botPlayer.display();
  object.display();
}
