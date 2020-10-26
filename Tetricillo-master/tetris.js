const tipot =[[0,1,0],[1,1,1],[0,0,0]];
const tipoc= [[2,2],[2,2]];
const tipol =[[0,3,0,0],[0,3,0,0],[0,3,0,0],[0,3,0,0]];
const tipoj1 =[[0,4,0],[0,4,0],[4,4,0]];
const tipoj2 =[[0,5,0],[0,5,0],[0,5,5]];
const tipos1 =[[0,6,6],[6,6,0],[0,0,0]];
const tipos2 =[[7,7,0],[0,7,7],[0,0,0]];
var dimta= [10,250,20,500];//numero de columnas, ancho del cuadro, numero de filas, largo del cuadro;
var colores =[[205,0,0],[255,128,0],[255,255,0],[0,225,255],[0,255,0],[0,0,255],[255,0,128]];
var tetro=[tipot,tipoc,tipol,tipoj1,tipoj2,tipos1,tipos2];


function genPoly(n) {

}



class pieza{
  constructor(A,B,C,D){

    this.x = A;
    this.y = B;
    this.matriz = C;
    this.caido = D;


  }
  update(){ //caida segunt tiempo
    tiempos[0] = millis() - tiempos[1];
    if(tiempos[0] > tiempos[2]){
        tiempos[1] = millis();
        this.moveee(0,1);
      }
    }


  rotando(){
    let rotado = this.matriz[0].map((v, index) => this.matriz.map(row => row[index]).reverse());
    if(todopoderosa(rotado,this.x,this.y,"salirse",0))
    this.matriz.forEach((fila,i)=>{fila.forEach((col,j) => {
    this.matriz[i][j] = rotado[i][j] //rotando ando *jaja si vi esto :)
  });})}
    moveee(mx,my){//movimiento continuo
      if(!todopoderosa(this.matriz,this.x,this.y,"caida",0))
        caido();
      else if(todopoderosa(this.matriz,this.x+mx,this.y+my,"salirse",0)){
        this.y = this.y + my;
        this.x = this.x + mx;
        medidas.score += my * 10;
  }}

    full_down(){
      genPoly(3);
      while (this.caido == false)
        this.moveee(0,1);
    }


}
var tiempos=[0,0,400];//tiempo transcurrido desde la ultima toma, tultima toma,cada cuanto cae;
var tablero = Array.from({length: dimta[2]},()=>Array.from({length: dimta[0]},()=>0));
var estado = ["inicio",true];
var medidas ={lineas:8,nivel:1,score:0};

function determinado(){
  medidas ={lineas:0,nivel:1,score:0};;//almacena lineasresueltas, nivel y score;
  tiempos=[0,0,500];//tiempo transcurrido desde la ultima toma, tultima toma,cada cuanto cae;
  tablero= Array.from({length: dimta[2]},()=>Array.from({length: dimta[0]},()=>0));
  estado = ["inicio",true];}
//var musica = document.getElementById("msik");
function textito(letra,letra2,pt2,size){//creando el entorno by default
  textSize(size);
  textAlign(CENTER,TOP);
  text(letra,width*10/12,height*pt2/15);
  text(letra2,width*10/12,height*(pt2+1)/15);}

function setup() {
  var canvas= createCanvas(500,550);
  canvas.parent("canvas");
  rectMode(CENTER);
  current= new pieza(4,0,random(tetro.slice()),0);
  newt = new pieza(13,18,random(tetro.slice()),0);
}


function draw() {
 if(estado[0]=="inicio"){
  inicio();
  estado[1]=true;
 }else if(estado[0]=="juego"){
   juego();
   if(tablero[0].some((value)=>{return value!=0}))
     gameover();}}

function start(){
 estado[0]="juego"
 document.getElementById("inicio").style.display = "none"}

function inicio(){
    background(0);
    //musica.play();
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
 noFill();
 rectMode(CENTER);
 rect(width*10/24,height*8/15,dimta[1],dimta[3]);
 stroke(125, 213, 200);
 rectMode(CORNER);

 var origin_x = (width*10/24)-(dimta[1]/2);
 var origin__y = (height*8/15) - (dimta[3]/2);
 var tile_width = dimta[1]/dimta[0];
 var tile_height = dimta[3]/dimta[2];

 for (var i = 0; i < dimta[0]; i++)
  for (var j = 0; j < dimta[2]; j++)
    rect(origin_x + (i * tile_width), origin__y + (j * tile_height),
      dimta[1]/dimta[0], dimta[3]/dimta[2]);
  rectMode(CENTER);



todopoderosa(tablero,1,1,"show",25);
todopoderosa(current.matriz,current.x+1,current.y+1,"show",25);
todopoderosa(newt.matriz,newt.x,newt.y,"show",10);
current.update();
}

function todopoderosa(arr,vx,vy,tipe,extra){//"salirse"verificar que no se salga del cuadro,"caida" verificar caida,"pegar" pegar el arreglo al tablero,"show"dibujar el arreglo con el color
 let bol =true;
 arr.forEach((row,y)=>{
   row.forEach((value,x)=>{
     if(value!==0){
      if(tipe=="salirse"){
       if(vy+y>dimta[2]-1 || 0>vy+y || vx+x>dimta[0]-1 || 0> vx+x|| tablero[vy+y][vx+x]!=0)
         bol=false;
      }else if(tipe=="caida"){
        if(vy+y==dimta[2]-1){
          bol =false;
        }else if(tablero[vy+y+1][vx+x]!=0)
        bol =false;
      }else if(tipe=="pegar")
        tablero[y+vy][x+vx]=value;
      else if(tipe=="show"){
        var inicial =[width*7/48-26,height*3/30-25];
        stroke(colores[value-1]);
        fill(colores[value-1]);
        rect(25*(vx+x)+inicial[0]+extra,25*(vy+y)+inicial[1],dimta[1]/dimta[0],dimta[3]/dimta[2]);
        noFill();
      }
    }
     });
   })
 return bol;}
function completo(){ //completar filas
  tablero.forEach((fila,i)=>{
    if(fila.every(function n(value){return value!=0;})){
    for(var m=i;m>0;m--)
      tablero[m]=tablero[m-1].slice();
    medidas.lineas++
    medidas.score+=100;
    if(medidas.lineas%9==0 && medidas.lineas>0){
      medidas.nivel+=1
      medidas.score+=1
    if(tiempos[2]>100)
      tiempos[2]-=100;
      }
  }})
}

function keyPressed(){//deteccion de teclas
 if (keyCode === LEFT_ARROW || key=="a") current.moveee(-1,0);
 else if (keyCode === RIGHT_ARROW|| key=="d") current.moveee(1,0);
 else if (keyCode === DOWN_ARROW|| key=="s") current.full_down();
 else if (keyCode === UP_ARROW|| key=="w") current.rotando();
 else if( key=="r")fullcaida()
 else if(key=="n" && estado[0]=="gameover") {
  determinado();
  estado[0]="juego";
  current.matriz = random(tetro.slice());
  newt.matriz=random(tetro.slice());
  console.log("hey");}}

function caido(){//deteccion y creacion de nuevo bloque
  if(current.caido==0)
   current.caido=1;
  else{
      todopoderosa(current.matriz,current.x,current.y,"pegar",0);
      current.x=4;
      current.y=0;
      current.caido=0;
      noLoop();
      current.matriz=newt.matriz.slice();
      newt.matriz=random(tetro.slice());
      current.caido = newt.caido;
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
