var chao , boy, barreiraEsquerda, barreiraDireita;
var chaoimg, boyimg;

function preload(){
  //imagens pré-carregadas
  chaoimg =loadImage("path.png");
  boyimg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  chao = createSprite (200,200);
  chao.addImage(chaoimg);
  chao.scale = 1.2;
  chao.velocityY = 14;
  
  boy = createSprite (180,340,30,30);
  boy.addAnimation("boycorrendo",boyimg);
  boy.scale = 0.08;

  barreiraEsquerda = createSprite (0,0,100,800);
  barreiraEsquerda.visible=false;

  barreiraDireita = createSprite(410,0,100,800);
  barreiraDireita.visible=false;
}

function draw() {
  background(0);

  boy.x = World.mouseX;
  
  //edges =createEdgesSprites();
  boy.collide(barreiraEsquerda);
  boy.collide(barreiraDireita);

  if (chao.y>400){
    chao.y=height/2;
  }
  drawSprites();



  
}
