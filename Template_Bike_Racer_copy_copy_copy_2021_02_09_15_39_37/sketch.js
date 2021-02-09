var path,mainCyclist,opponent1,opponent2,opponent3,cycleBell;
var pathImg,mainRacerImg1,mainRacerImg2, opponentG,opponent1img,opponent2img,opponent3img, player1, player2;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
  opponent1img=loadImage("opponent1.png");
  opponent2img=loadImage("opponent2.png");
  opponent1G = new Group()
  opponent2G = new Group()
  cycleBell = loadSound("sound/bell.mp3")
  gameover = loadImage("gameOver.png")
}

function setup(){
  
createCanvas(windowWidth, windowHeight);
  
// Moving background
path=createSprite(100,height/2);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(width-600,height/2,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;



  
  
}

function draw() {
  background(0);
  
  //opponent1();
  //opponent2();
  
  if (keyDown("space")){
    cycleBell.play()
  }

  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  text("Distance: "+ distance,350,30);
  distance = distance + Math.round(getFrameRate()/50)
  
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  //code to reset the background
  if(path.x > width ){
    path.x = width/2;
  }
  var select_oppPlayer = Math.round(random(1,2));
  if (World.frameCount % 150 == 0){
    
    if(select_oppPlayer==1){
    opponent1();
     
  }
  else if(select_oppPlayer==2){
    opponent2();
    
  }
  }
  }
    if (mainCyclist.collide(opponent1G)){
      gameState = END
    }
    if (mainCyclist.collide(opponent2G)){
      gameState = END
    }
    if(gameState===END){
      opponent1.velocityX = 0
      opponent1.setLifetime = -1
      opponent2.velocityX = 0
     opponent2.setLifetime = -1
      path.velocityX = 0
      text("Distance: "+ distance,350,30);
    }
  
    drawSprites();
 
}
function opponent1() {
   console.log("Working 1")
  player1 =createSprite(700,Math.round(random(50, 250)));
        player1.scale =0.06;
        player1.velocityX = -(6 + 2*distance/150);
        player1.addImage("opponentPlayer1",opponent1img);
        player1.setLifetime=170;
        opponent1G.add(player1)
  
        
  

}
function opponent2() 
{
   console.log("Working 2")
  player2 = createSprite(1100,Math.round(random(50, 250), 10, 10));
  player2.velocityX = -(6 + 2*distance/150);
  player2.addImage(opponent2img)
  player2.scale = 0.07;
  player2.setLifetime=170;
  opponent2G.add(player2)

}
  
