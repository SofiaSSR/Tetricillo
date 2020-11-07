var tetro;
var choose=[255,2,204,153,102,51],colores=[];
var dimta= [10,250,20,500];//numero de columnas, ancho del cuadro, numero de filas, largo del cuadro;
function genPoly(n) {
  tetro = polyominoGenerator().returnPolyominos(n);   
  console.log(tetro);
  if (n <5){dimta[0]=10;}
  else{dimta[0]=12;}
  let ccol =1;
  while(ccol**3<tetro.length){
    ccol+=1;
  }
  for(let r=0;r<ccol;r++)
  for(let s=0;s<ccol;s++)
  for(let t=0;t<ccol;t++){
  colores.push([choose[r],choose[s],choose[t]])}

  colores.splice (colores.indexOf([2,2,2]), 1);
  colores.shift();
  console.log(colores);
  }
class pieza {
  constructor(A,B,C,D){
    this.pointArray= C.pointArray;
    this.x = A;
    this.y = B;
    this.id= D+1;
  }

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
    tiempos[0]=millis()-tiempos[1];
    if(tiempos[0]>tiempos[2]){
     tiempos[1]=millis();
     this.moveee(0,1);}}
  rotando(){ 
    let rotado=normalizePolyomino(rotatePointsClockWise(copyPolyomino(current)));
    rotado["x"]=current.x;
    rotado["y"]=current.y;
    console.log(rotado);
     if(todopoderosa(rotado,"salirse",0)){
      console.log("hey");
     this.pointArray=copyPolyomino(rotado).pointArray; 
    }}
  moveee(mx,my){//movimiento continuo
    if(!todopoderosa(this,"caida",0)){
       caido();}
    noLoop()
    this.y = this.y+my;
    this.x = this.x+mx;
    if(todopoderosa(this,"salirse",0)){ 
      medidas.score+=my*10;
    }else{
      this.y = this.y-my;
      this.x = this.x-mx;
   }loop()}
  full_down(){
    while (this.caido == false)
      this.moveee(0,1);
  }
  
  }
  var tablero = Array.from({length: dimta[2]},()=>Array.from({length: dimta[0]},()=>0));
  var ancho = 500, alto = 550;
  var inicial =[ancho*7/48-26,alto*3/30-25];
  var tiempos=[0,0,700];//tiempo transcurrido desde la ultima toma, tultima toma,cada cuanto cae;
var estado = ["inicio"];
var medidas ={lineas:8,nivel:1,score:0};
var current,newt;
var update_board_flag = true;
var juego_rapido = false;
var lost_game = false;
var score_copy = 0;
var copy_board = [];
var tile_width = dimta[1]/dimta[0];
var tile_height = dimta[3]/dimta[2];

  function determinado(){
   medidas ={lineas:0,nivel:1,score:0};;//almacena lineasresueltas, nivel y score;
   tiempos=[0,0,700];//tiempo transcurrido desde la ultima toma, tultima toma,cada cuanto cae;
   tablero = Array.from({length: dimta[2]},()=>Array.from({length: dimta[0]},()=>0));
   estado = ["inicio"];
   copy_board = [];
   score_copy = 0;
   lost_game = false;
   juego_rapido = false;
   update_board_flag = true;
  }
   //var musica = document.getElementById("msik");
  
  function textito(letra,letra2,pt2,size){//creando el entorno by default
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

  let img;
  function setup() {
    var canvas= createCanvas(500,550);
    canvas.parent("canvas");
    rectMode(CENTER);
    img = loadImage('hearth_image_file.jpg');
  }
  
  function draw() {  
   if(estado[0]=="inicio"){
    inicio();
   }else if(estado[0]=="juego"){
     juego();
     displayLives();
     fast_game();
     if(tablero[0].some((value)=>{return value!=0})){  // A tile reaches top
       game_lives--;
       if (game_lives > 0 && juego_rapido)
       {
         tablero = JSON.parse(JSON.stringify(copy_board));
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
   let a = Math.floor(Math.random() * tetro.length);
   current = new poliomino(Math.round(dimta[0]/2)-1,false,tetro[a],0,a);
   a= Math.floor(Math.random() * tetro.length);
   newt = new poliomino(13,18,tetro[a],0,a);
  }  
  function inicio(){
      background(0);
      stroke(255);
      textSize(20);
      textAlign(CENTER,TOP);
      text("Presiona para comenzar", width/2,height*1/4);
      text("Records",width/2,height/2);}
  
  function juego(){
   background(0);
   stroke(255);
   textito("TETRIS","",2,35);
   textito("SCORE",medidas.score,5,25);
   textito("LEVEL",medidas.nivel,8,15);
   textito("LINES",medidas.lineas,10,15);
   textito("NEXT","",12,15);
   fill(125);
   rectMode(CORNERS);
   rect(inicial[0],inicial[1],inicial[0]+dimta[1],inicial[1]+dimta[3]);
   stroke(125, 213, 200);
   rectMode(CENTER);
   //end default
  show(tablero,25);
  todopoderosa(current,"show",25);
  todopoderosa(newt,"show",25);
  current.update();
  }
  var fast_game_counter = -1;  // stores the number of times fast_game has occurred
  var fast_game_counter_flag = false;  // For copying the board just once
  function fast_game(){
    if (tiempos[1] >= 5000*(4+(5*fast_game_counter)) && tiempos[1] < (25000*(fast_game_counter+1)))  // fast game interval
    {
      if (update_board_flag && (!lost_game))  // Create a copy board
      {
        fast_game_counter_flag = false;
        score_copy = medidas.score.valueOf();
        copy_board = JSON.parse(JSON.stringify(tablero));
        update_board_flag = false;
      }
      juego_rapido = true;
      tiempos[2] = 100;
    }
    else
    {
      lost_game = false;
      juego_rapido = false;
      tiempos[2] = 400;
      update_board_flag = true;
      if (!fast_game_counter_flag)
      {
        fast_game_counter++;
        fast_game_counter_flag = true;
      }

    }
  }
function show(arr,extra){
  arr.forEach((row,y)=>{
   row.forEach((value,x)=>{
    if(value!==0)
      fill(colores[value-1]);
    stroke(125, 213, 200);
    rect(extra*(x)+inicial[0]+extra/2,extra*(y)+inicial[1]+extra/2,tile_width,tile_height);
    noFill();
        
  })})}
function todopoderosa(obj,tipe,extra){//"salirse"verificar que no se salga del cuadro,"caida" verificar caida,"pegar" pegar el arreglo al tablero,"show"dibujar el arreglo con el color
   let bol =true;
   obj.pointArray.forEach((row)=>{
     let rx= obj.x + row.x;
     let ry= obj.y + row.y;
     if(tipe=="salirse"){
       if(ry>dimta[2]-1 || 0>ry || rx>dimta[0]-1 || 0>rx || tablero[ry][rx]!=0)
       bol=false;
      }else if(tipe=="caida"){
        if(ry==dimta[2]-1){
            bol =false;
          }else if(tablero[ry+1][rx]!=0)
          bol =false;
        }else if(tipe=="pegar")
        tablero[ry][rx]=obj.id;
        else if(tipe=="show"){
          stroke(colores[obj.id-1]);
          fill(colores[obj.id-1]);
          rect(extra*(rx)+inicial[0]+extra/2,extra*(ry)+inicial[1],tile_width,tile_height);
          noFill();
        }
   })
   return bol;}
var game_lives = 3;
var filled_lines_counter = 0;  // Has the count of the removed lines in the current game
  
function completo(){//completar filas
  let init = Date.now();  
  tablero.forEach((fila,i)=>{
      if(fila.every(function n(value){return value!=0;})){
      for(var m=i;m>0;m--)
        tablero[m]=tablero[m-1].slice(); 
      medidas.lineas++;
      medidas.score+=100;
      filled_lines_counter++;}}) 
      if(medidas.lineas%9==0 && medidas.lineas>0){
        medidas.nivel+=1;
        medidas.score+=1;
      if(tiempos[2]>100)
        tiempos[2]-=100;
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
    start()}}
  
  function caido(){//deteccion y creacion de nuevo bloque
  if(current.caido==0)
   current.caido=1;
  else{
      todopoderosa(current,"pegar",0);
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
      completo();}}
  
  function gameover(){//stylish del gameover
    background(0);
    stroke(255);
    estado[0]="gameover";
    textSize(30);
    text("GAME OVER",width/2,height*1/4);
    textSize(20);
    text("Tu puntaje final fue: "+medidas.score+"\n Quedaste en el nivel: "+medidas.nivel+"\n y completaste "+medidas.lineas+" lineas",width/2,height*2/4);
    text("Eres Genial, ¡Gracias por jugar!",width/2,height*3/4);
    text("Presiona N para volver",width/2,height*9/10);
  } 