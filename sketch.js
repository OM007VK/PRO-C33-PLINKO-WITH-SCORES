const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisons = [];
var divisonsHeight = 300;
var particles = [];
var particles = [particles];
var plinkos = [];
var line;

var divisonsHeight = 300

var gameState = "PLAY";
//var gameState = "END";

var count = 0;
var score = 0;
 
function preload()
{

}

function setup(){
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(400,690,800,20);
  

  for (var i = 0; i<=innerWidth; i= i+80){
    divisons.push(new Divisions(i,height-divisonsHeight/2, 10, divisonsHeight));
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 50));
  }
  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 120));
  }
  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 190));
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 260));
  }
  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 330));
  }

  Engine.run(engine);

}


function draw(){
    rectMode(CENTER);
    background(0);

    textSize(25);
  fill("white");
  //text("Score : ",33 ,25);
  text("Score : "+score,5 ,25);

  textSize(25)
  text("500",20,425);
  text("500",100,425);
  text("500",180,425);
  text("500",260,425);
  text("100",340,425);
  text("100",420,425);
  text("100",500,425);
  text("200",580,425);
  text("200",660,425);
  text("200",740,425);

    for (var n = 0; n<divisons.length; n++)  {
      divisons[n].display();
    }

    if (frameCount %50 === 0){
      particles.push(new Ball(random(width/2-800, width/2+700),10,10));
    }

    for (var h = 0; h<particles.length; h++)  {
      particles[h].display();
    }
    
    for (var j = 0; j<particles.length; j++)  {
      particles[j].display();
    }

    fill ("white")
    text(mouseX + "," + mouseY, mouseX,mouseY)

    ground.display();
    if (gameState === "END") {
      background("black");
      fill("red");
      textSize(50);
      text("Game Over", 200,400);
    }

    if (particles=null)
    {
      particles.display();

      if (particles.body.position.y>700)
      {
       score=score+500
       particles=null;
       if( count>= 5) gameState="END";
      }

      else if (particles.body.position.x < 600 && particles.body.position.x > 301)   
      {
        score = score +100;
        particles=null;
        if ( count>= 5) gameState ="END";
      }
      else if (particles.body.position.x < 900 && particles.body.position.x > 601)
      {
        score = score +200;
        particles=null;
        if ( count>= 5) gameState ="END";
      }
   }
}

for (var i = 0; i < divisons.length; i++) {

  divisons[i].display();
  }

  function mousePressed() {
    if(gameState !== "END")
    count++;
    plinko = new Plinko(mouseX, 50, 10, 10)
  }
