var tetro;//almacena todos los poliminos creados por polyominogenerator
var choose=[255,2,204,153,102,51],colores=[];//para generar los colores 
var dimta= [10,250,20,500];//numero de columnas, ancho del cuadro, numero de filas, largo del cuadro;
var elene;
function genPoly(n) {
  elene=n;
  tetro = polyominoGenerator().returnPolyominos(n);   
  console.log(tetro);
  //-------definiciones basicas del juego, n-minos, colores de las piezas, tamaño del tablero etc----
  if (elene <5){dimta[0]=10;}
  else{dimta[0]=12;}
  let ccol =1;
  while(ccol**3<tetro.length){
    ccol+=1;
  }
  for(let r=0;r<ccol;r++)
  for(let s=0;s<ccol;s++)
  for(let t=0;t<ccol;t++){
  colores.push([choose[r],choose[s],choose[t]])}
  colores.splice(colores.indexOf([2,2,2]), 1);
  colores.shift();
  }
class tablero{
constructor(A,B,l1,c1,c2,c3){
this.matriz = Array.from({length: A},()=>Array.from({length: B},()=>0));
this.color = [c1,c2,c3];
this.fondo = l1;
}
completo(){//proceso para limpiar completar filas  
  let filled_lines_counter = 0;  // Has the count of the removed lines in the current game
  this.matriz.forEach((fila,i)=>{
    if(fila.every(function n(value){return value!=0;})){
      for(let m=i;m>0;m--)
        this.matriz[m]= this.matriz[m-1].slice(); 
      medidas.lineas++;
      medidas.score+=100;
      filled_lines_counter++;
    }})
    next(filled_lines_counter);
  }
  show(guide_point){
    stroke(this.color);
    this.matriz.forEach((row,y)=>{
     row.forEach((value,x)=>{
       fill(this.fondo);
      if(value!==0)
        fill(colores[value-1]);
      rect(tile_width*(x)+guide_point[0],tile_height*(y)+guide_point[1],tile_width,tile_height);
    })})
    noFill();}
    
}
class poliomino {

  constructor(A,B,C,D,E){
   this.pointArray= C.pointArray;
    this.x = A;
    this.y = B;
   this.caido = D;
   this.id= E+1;
 }
  update(){ //caida segunt tiempo
    tiempos.transcurrido=millis()-tiempos.ultimaToma;
    if(tiempos.transcurrido>tiempos.active){
     tiempos.ultimaToma=millis();
     this.moveee(0,1);}}
  rotando(){ 
    let rotado=normalizePolyomino(rotatePointsClockWise(copyPolyomino(current)));
    console.log(rotado);
    let bol = true;
    rotado.pointArray.forEach((row)=>{
      let rx= current.x + row.x;
      let ry= current.y + row.y;
      if(ry>dimta[2]-1 || 0>ry || rx>dimta[0]-1 || 0>rx || tableu.matriz[ry][rx]!=0)
        bol=false;})
     if(bol)
     this.pointArray=rotado.pointArray; 
  }
  moveee(mx,my){//movimiento continuo
    if(!this.todopoderosa("caida")){
       caido();}
    noLoop()
    this.y = this.y+my;
    this.x = this.x+mx;
    if(this.todopoderosa("salirse")){ 
      medidas.score+=my*10;
    }else{
      this.y = this.y-my;
      this.x = this.x-mx;
   }loop()}
  full_down(){
    while (this.caido == false)
      this.moveee(0,1);
  }
  show(guide_point){
    this.pointArray.forEach((row)=>{
      let rx= this.x + row.x;
      let ry= this.y + row.y;
      stroke(colores[this.id-1]);
      fill(colores[this.id-1]);
      rect(tile_width*(rx)+guide_point[0],tile_height*(ry)+guide_point[1],tile_width,tile_height);
      noFill();})}
  todopoderosa(tipe){
    let bol = true;
    this.pointArray.forEach((row)=>{
      let rx= this.x + row.x;
      let ry= this.y + row.y;
      if(tipe=="salirse"){//"salirse"verificar que no se salga del tablero
        if(ry>dimta[2]-1 || 0>ry || rx>dimta[0]-1 || 0>rx || tableu.matriz[ry][rx]!=0)
        bol=false;
      }else if(tipe=="caida"){//"caida" verificar que chocó
          if(ry==dimta[2]-1){
             bol =false;
          }else if(tableu.matriz[ry+1][rx]!=0)
           bol =false;
      }else if(tipe=="pegar")//"pegar" pegar el arreglo al tablero
         tableu.matriz[ry][rx]=this.id;})
   return bol;}
}
const ancho = 500, alto = 550;
const inicialc =[ancho*6/48,alto*2/30];
const inicialn =[ancho*9/12,alto*13/15];
const boardcol =[0];
const curcol=[125,125,213,200];
const  fastcol=[200,240,240,25];
var tiempos={transcurrido:0,ultimaToma:0,active:700,leveled:700,fast:100};//tiempo transcurrido desde la ultima toma, tultima toma,caida,caida normal,caida fast-mode;
var estado = ["inicio"];
var medidas ={lineas:0,nivel:1,score:0};
var tableu,current,newt;
var game_lives = 3; 
var update_board_flag = true;
var juego_rapido = false;
var lost_game = false;
var score_copy = 0;//la copia del score antes de iniciar el fast mode
var copy_board=[];//la copia del tablero antes de iniciar el fast mode
var tile_width,tile_height;//ancho y alto de cada cuadro
let img;
var fast_game_counter = -1;  // stores the number of times fast_game has occurred
var fast_game_counter_flag = false;  // For copying the board just once
//-----------------funciones determinantes en la funcion del juego---------------------
  function determinado(){//devuelve las variables a su estado original (posibilita un rerun sin actualizar pagina)
   medidas ={lineas:0,nivel:1,score:0};
   tiempos={transcurrido:0,ultimaToma:0,active:700,leveled:700,fast:100};
   estado = ["inicio"];
   copy_board = [];
   score_copy = 0;
   lost_game = false;
   juego_rapido = false;
   update_board_flag = true;
   game_lives = 3;
   fast_game_counter = -1;
   fast_game_counter_flag = false;
  }
  function next(cuanto){//mira que hacer cuando se limpia una fila (suma puntaje, da vidas etc)
    if (cuanto == elene ||cuanto == elene-1){
      game_lives++;
      medidas.score+=200;}
    if(medidas.lineas%9==0 && medidas.lineas>0){
      medidas.nivel+=1;
      medidas.score+=1;
    if(tiempos.leveled>100)
      tiempos.leveled-=100;
      tiempos.active = tiempos.leveled;
    }
  }

  function textito(letra,letra2,pt2,size){//creando la estetica default
   textSize(size);
   textAlign(CENTER,TOP);
   text(letra,width*10/12,height*pt2/15);
    text(letra2,width*10/12,height*(pt2+1)/15);}

  function displayLives(){
      switch(game_lives){
        case 1:
          image(img, 340, 120, 50, 50);
          break;
        case 2:
          image(img, 340, 120, 50, 50);
          image(img, 390, 120, 50, 50);
          break;
        case 3:
          image(img, 340, 120, 50, 50);
          image(img, 390, 120, 50, 50);
          image(img, 440, 120, 50, 50);
      }
    }
  
  function setup() {
    var canvas= createCanvas(500,550);
    canvas.parent("canvas");
    rectMode(CENTER);
    img = loadImage('hearth_image_file.png');
    noLoop();
  }
  
function draw() {
  if(estado[0]=="inicio"){
    inicio();
   }else if(estado[0]=="juego"){
     juego();
     displayLives();
     fast_game();
     if(tableu.matriz[0].some((value)=>{return value!=0})){  // A tile reaches top
       game_lives--;
       if (game_lives > 0 && juego_rapido)
       {
        tableu.matriz = JSON.parse(JSON.stringify(copy_board));
         medidas.score = score_copy.valueOf();
         lost_game = true;

       }
       else if (game_lives == 0 || !(juego_rapido))
         gameover();
     }
    }
   }
  
  function start(){
   estado[0]="juego";
   document.getElementById("inicio").style.display = "none";
   tableu = new tablero(dimta[2],dimta[0],curcol[0],curcol[1],curcol[2],curcol[3]);
   let a = Math.floor(Math.random() * tetro.length);
   current = new poliomino(Math.round(dimta[0]/2)-1,false,tetro[a],0,a);
   a= Math.floor(Math.random() * tetro.length);
   newt = new poliomino(0,0,tetro[a],0,a);
   tile_width = dimta[1]/dimta[0];
   tile_height = dimta[3]/dimta[2];
   loop();
  }  
  function inicio(){
      background(boardcol);
      //musica.play();
      stroke(255);
      textSize(20);
      textAlign(CENTER,TOP);
      text("Presiona para comenzar", width/2,height*1/4);
      text("Records",width/2,height/2);
    }
  function juego(){
   background(boardcol);
   stroke(255);
   textito("TETRIS","",2,35);
   textito("SCORE",medidas.score,5,25);
   textito("LEVEL",medidas.nivel,8,15);
   textito("LINES",medidas.lineas,10,15);
   textito("NEXT","",12,15);
   fill(tableu.fondo);
   rectMode(CORNERS);
   stroke(tableu.color);
   rect(inicialc[0]-25/2,inicialc[1]-13,inicialc[0]+dimta[1]-25/2,inicialc[1]+dimta[3]-13);
   rectMode(CENTER);
   //end default
  tableu.show(inicialc);
  current.show(inicialc);
  newt.show(inicialn);
  current.update();
  }
  function fast_game(){
    if (tiempos.ultimaToma >= 5000*(4+(5*fast_game_counter)) && tiempos.ultimaToma < (30000*(fast_game_counter+1)))  // fast game interval
    {
      console.log("fast");
      if (update_board_flag && (!lost_game))  // Create a copy board
      {
        score_copy = medidas.score.valueOf();
        copy_board = JSON.parse(JSON.stringify(tableu.matriz));
        console.log(copy_board);
        update_board_flag = false;
        juego_rapido = true;
        tiempos.active= tiempos.fast;
        tableu.color=[fastcol[1],fastcol[2],fastcol[3]];
        tableu.fondo=fastcol[0];
      }
    }
    else
    {
      lost_game = false;
      juego_rapido = false;
      tiempos.active = tiempos.leveled;
      update_board_flag = true;
      tableu.color=[curcol[1],curcol[2],curcol[3]];
      tableu.fondo=curcol[0];
      if (!fast_game_counter_flag) {
        fast_game_counter++;
        fast_game_counter_flag = true;
      }
    }
}
  function keyPressed(){//deteccion de teclas
   if (keyCode === LEFT_ARROW || key=="a") current.moveee(-1,0);
   else if (keyCode === RIGHT_ARROW|| key=="d") current.moveee(1,0);
   else if (keyCode === DOWN_ARROW|| key=="s") current.moveee(0,1);
   else if (keyCode === UP_ARROW|| key=="w") current.rotando();
   else if( key=="r")current.full_down()
   else if(key=="n" && estado[0]=="gameover") {
    determinado();
    start()
    loop()}}
  
  function caido(){//deteccion y creacion de nuevo bloque
  if(current.caido==0)
   current.caido=1;
  else{
      current.todopoderosa("pegar");
      current.x= Math.round(dimta[0]/2)-1;
      current.y=0;
      current.caido=0;
      noLoop();
      current.pointArray=newt.pointArray/* .map(a => Object.assign({}, a)) */;
      current.id= newt.id;
      a = Math.floor(Math.random()* tetro.length);
      newt.pointArray=tetro[a].pointArray/* .map(a => Object.assign({}, a)) */;
      newt.id=a+1;
      loop();
      tableu.completo();}}
  
  function gameover(){//stylish del gameover
    background(boardcol);
    stroke(255);
    estado[0]="gameover";
    textSize(30);
    text("GAME OVER",width/2,height*1/4);
    textSize(20);
    text("Tu puntaje final fue: "+medidas.score+"\n Quedaste en el nivel: "+medidas.nivel+"\n Completaste "+medidas.lineas+" lineas"+"\n y te quedaron "+game_lives+" vidas",width/2,height*4/10);
    text("🤘 Eres Genial, ¡Gracias por jugar! 🤗",width/2,height*3/4);
    text("Presiona N para volver",width/2,height*9/10);
    noLoop();
  } 