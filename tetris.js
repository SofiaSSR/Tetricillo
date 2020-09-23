const tipot =[[0,1,0],[1,1,1],[0,0,0]];
const tipoc= [[2,2],[2,2]];
const tipol =[[0,3,0,0],[0,3,0,0],[0,3,0,0],[0,3,0,0]];
const tipoj1 =[[0,0,4],[0,0,4],[0,4,4]];
const tipoj2 =[[5,0,0],[5,0,0],[5,5,0]];
const tipos1 =[[0,6,6],[6,6,0],[0,0,0]];
const tipos2 =[[7,7,0],[0,7,7],[0,0,0]];
var dimta= [10,20];
var colores =[[255,0,0],[255,128,0],[255,255,0],[128,225,0],[0,255,0],[0,0,255],[255,0,128],[255]]
var tetro=[tipot,tipoc,tipol,tipoj1,tipoj2,tipos1,tipos2];
var medidas =[0,1,0];//almacena lineasresueltas, nivel y score;
var current= [0,0,[]];//representa la pieza actual px, py, tipo ,color;
var tiempos=[0,0,6000];//tiempo transcurrido desde la tulrima toma, tultima toma,cada cuanto cae;
var lll=[];
var tablero =[];
//creacion del tablero
(lll = []).length = dimta[0];
lll.fill(8);
(tablero= []).length = dimta[1];
tablero.fill(lll);
(lll = []).length = 0;
//creando el entorno by default
function textito(letra,pt1,pt2,size,alver,alhor){
  textSize(size);
  textAlign(alver,alhor);
  text(letra,pt1,pt2);
}
function setup() {
  var canvas= createCanvas(500,550);
  canvas.parent("canvas");
  rectMode(CENTER);
  current[2] = random(tetro);
}
/*var liml=width*2/24;
var limmax =height/15;
var limr=width*13/24;
var limmin= height*13/15;
var limits =[];
if(medidas[0]%100==0){
  medidas[1]++;}
  if(medidas[0]!=medidas[0]){ 
    medidas[2]+=200;
  } */
  function show(arr,mx,my){
    var inicial =[width*7/48-25,height*3/30-25];
    arr.forEach((row,y) => {
      row.forEach((value,x)=>{ 
        if(value!==0){
          stroke(colores[value-1]);
          if(value-1!==7)
          fill(colores[value-1]);
          rect(25*(mx+x)+inicial[0]+25,25*(my+y)+inicial[1],25,25);
          noFill();}
    });
  });}
  function update(){
    tiempos[0]=millis()-tiempos[1];
    if(tiempos[0]>tiempos[2]){
      tiempos[1]=millis();
      moveee(0,1); }
    }
    function draw() {
      //default style
    background(0);
    stroke(255);
    textito("TETRIS",width*10/12,height*2/15,35,CENTER,TOP);
  //textito(("LINES -- "+medidas[0].toString()),width*4/12,height/30+5,20,CENTER,BASELINE);
  textito("SCORE",width*10/12,height*5/15,25,CENTER,TOP);
  textito(medidas[2],width*10/12,height*7/15,25,CENTER,TOP);
  textito("LEVEL",width*10/12,height*9/15,20,CENTER,TOP);
  textito(medidas[1].toString(),width*10/12,height*11/15,20,CENTER,TOP);
  noFill();
  rect(width*10/24,height*8/15,250,500);
  //end default
  show(tablero,1,1);
  lll.forEach((arr)=>{
    show(arr[2],arr[0]+1,arr[1]+1);
  }) 
 show(current[2],current[0]+1,current[1]+1);
 update();
 if(current[1]==18){
   caido();
  }}
//deteccion de teclas
function keyPressed(){
 if (keyCode === LEFT_ARROW || key=="a") moveee(-1,0);
 else if (keyCode === RIGHT_ARROW|| key=="d") moveee(1,0);
 else if (keyCode === DOWN_ARROW|| key=="s") moveee(0,1);
 else if (keyCode === UP_ARROW|| key=="w") rotando();}
//movimiento continuo
function moveee(mx,my){
  if(current[1]+my<19)
  current[1] = current[1]+my;
  // if(abs(current[0]+mx)<5)
  current[0] = current[0]+mx;
  console.log(current[0], current[1]);
}
function rotando(){  
  current[2].forEach((line)=>line.reverse());
 //current[2].reverse();
  console.log("rot");
}
//recordar la casilla
function glue(big,small){
small[2].forEach((row,y)=>{
  row.forEach((value,x)=>{
    if(value!== 0){
    big[y+small[1]][x+small[0]]=value;   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log("  ",y+small[0],x+small[1]);
    }
}) 
})
}
//deteccion y creacion de nuevo bloque
function caido(){
lll.push(current.slice());
current[0]=0;
current[1]=0;
current[2]=random(tetro);
console.log(lll);
}