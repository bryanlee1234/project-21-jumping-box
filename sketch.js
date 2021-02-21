var canvas;
var music;
var block1,block2,block3, block4, ball;
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1=createSprite(0,580,360,30)
    block2=createSprite(295,580,200,30)
    block3=createSprite(515,580,360,30)
    block4=createSprite(740,580,360,30)
    
    block1.shapeColor="blue"
    block2.shapeColor="red"
    block3.shapeColor="yellow"
    block4.shapeColor="green"

    ball=createSprite(Math.round(random(20,750)),100,40,40)
    ball.shapeColor="white"
    ball.velocityY=4
    ball.velocityX=7



}

function draw() {
    background("black");
    //create edgeSprite
    edges=createEdgeSprites();

    ball.bounceOff(edges);

    if(ball.isTouching(block1)){
    ball.shapeColor="blue"
    music.play();
    }
    
    if(ball.isTouching(block2)){
    ball.shapeColor="red";
    music.stop();
    ball.velocityX = 0; 
    ball.velocityY = 0;
    }

    if(ball.isTouching(block3)){
    ball.shapeColor="yellow"
    }

    if(ball.isTouching(block4)){
    ball.shapeColor="green"
    }
    //add condition to check if box touching surface and make it box

    drawSprites();
}
