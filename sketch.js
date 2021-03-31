var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite;
var music;

function preload(){
   music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    fixSprite1=createSprite(100,590,180,20);
    fixSprite1.shapeColor="red";

    fixSprite2=createSprite(300,590,180,20);
    fixSprite2.shapeColor="green";

    fixSprite3=createSprite(500,590,180,20);
    fixSprite3.shapeColor="blue";

    fixSprite4=createSprite(700,590,180,20);
    fixSprite4.shapeColor="yellow";


    //create box sprite and give velocity
    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

    edge1=createSprite(0,10,5,2000)
    edge2=createSprite(802,10,5,2000)
    edge3=createSprite(10,602,2000,5)
    edge4=createSprite(10,2,2000,5)
    
}

function draw() {
    background("grey");
    drawSprites();
    //create edgeSprite
     movingSprite.bounceOff(edge1);
     movingSprite.bounceOff(edge2);
     movingSprite.bounceOff(edge3);
     movingSprite.bounceOff(edge4);
    // movingSprite.bounceOff(fixSprite1);
    // movingSprite.bounceOff(fixSprite2);
    // movingSprite.bounceOff(fixSprite3);
    // movingSprite.bounceOff(fixSprite4);

    //add condition to check if box touching surface and make it box

    if(movingSprite.isTouching(fixSprite1)){
        music.play()
        movingSprite.shapeColor="red";
        movingSprite.bounceOff(fixSprite1);
        
      }

      if(movingSprite.isTouching(fixSprite2)){
         music.play()
         movingSprite.shapeColor="green";
         movingSprite.bounceOff(fixSprite2);
         
       }

       if(movingSprite.isTouching(fixSprite3)){
         music.play()
         movingSprite.shapeColor="blue";
         movingSprite.bounceOff(fixSprite3);
         
       }

       if(movingSprite.isTouching(fixSprite4)){
         music.play()
         movingSprite.shapeColor="yellow";
         movingSprite.bounceOff(fixSprite4);
         
       }
    

}
