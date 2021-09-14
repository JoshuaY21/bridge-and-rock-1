const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = []


let engine;
let world;

function setup() {
  createCanvas(750, 750);
  engine = Engine.create();
  world = engine.world;
  var stone = new Stone(300,100);
  frameRate(80);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  groundLeft = new Ground(100,300,200,30)
  bridge = new Bridge(12,{x:170, y:270})
  groundRight = new Ground(650,300,200,30)
  Matter.Composite.add(bridge.body,groundRight)
  ground_con = new Link(bridge, groundRight)  


  for (var i = 0; i <= 8; i++) {
    var x = random(100,650);
    var y = random(10, 200);
    stone = new Stone(x,y)
    stones.push(stone);
    
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  for (var i = 0; i<=8;i++) {
    stones[i].show()
  }

  groundLeft.display()
  groundRight.display()
  bridge.show()
}
