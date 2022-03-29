const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    hule = new Rubber(200,400,20);
    hierro = new Hierro(200,450)
    piedra = new Stone(200,400,30,30);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    hule.display();
    hierro.display();
    piedra.display();
    
 
}