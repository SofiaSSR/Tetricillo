const tipot =[[0,1,0],[1,1,1],[0,0,0]];
const tipoc= [[2,2],[2,2]];
const tipol =[[0,3,0,0],[0,3,0,0],[0,3,0,0],[0,3,0,0]];
const tipoj1 =[[0,4,0],[0,4,0],[4,4,0]];
const tipoj2 =[[0,5,0],[0,5,0],[0,5,5]];
const tipos1 =[[0,6,6],[6,6,0],[0,0,0]];
const tipos2 =[[7,7,0],[0,7,7],[0,0,0]];
var dimta= [10,250,20,500];
var colores =[[255,0,0],[255,128,0],[255,255,0],[128,225,0],[0,255,0],[0,0,255],[255,0,128]];
var tetro=[tipot,tipoc,tipol,tipoj1,tipoj2,tipos1,tipos2];
var medidas =[0,1,0];//almacena lineasresueltas, nivel y score;
var current= [0,0,[]];//representa la pieza actual px, py, tipo ,color;
var tiempos=[0,0,500];//tiempo transcurrido desde la tulrima toma, tultima toma,cada cuanto cae;
var tablero = Array.from({length: dimta[2]},()=>Array.from({length: dimta[0]},()=>0));
//creando el entorno by default
function textito(letra,letra2,pt2,size){
  textSize(size);
  textAlign(CENTER,TOP);
  text(letra,width*10/12,height*pt2/15);
  text(letra2,width*10/12,height*(pt2+1)/15);
}
function setup() {
  var canvas= createCanvas(500,550);
  canvas.parent("canvas");
  rectMode(CENTER);
  current[2] = random(tetro);
}
function show(arr,mx,my){
  var inicial =[width*7/48-25,height*3/30-25];
  arr.forEach((row,y) => {
   row.forEach((value,x)=>{ 
   if(value!==0){
    stroke(colores[value-1]);
    fill(colores[value-1]);
   rect(25*(mx+x)+inicial[0]+25,25*(my+y)+inicial[1],dimta[1]/dimta[0],dimta[3]/dimta[2]);
   noFill();
   //parque que tiende a ser borrada!!!!!!!!!!!!!!!!!!!!
  }
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
 textito("TETRIS","",2,35);
 textito("SCORE",medidas[2],5,25);
 textito("LEVEL",medidas[1],8,15);
 textito("LINES",medidas[0],10,15);
 noFill();
 rect(width*10/24,height*8/15,250,500);
 //end default
 show(tablero,1,1);
 show(current[2],current[0]+1,current[1]+1);
 update();
 if(tablero[0].some((value)=>{return value!=0}))
  gameover();
}
//movimiento continuo
function moveee(mx,my){
  if(!verify(current[2],current[0],current[1],0))
   caido();
  else if(verify(current[2],current[0]+mx,current[1]+my,1)){
  current[1] = current[1]+my;
  current[0] = current[0]+mx;
  medidas[2]+=my*10;
}
}
//verificar que no se salga del cuadro
function verify(arr,vx,vy,tipe){
 let bol =true;
 arr.forEach((row,y)=>{
   row.forEach((value,x)=>{
     if(value!==0){
     if(tipe==1){
       if(vy+y>dimta[2]-1 || 0>vy+y ||
        vx+x>dimta[0]-1 || 0> vx+x)
         bol=false;
      }else{
        if(vy+y==dimta[2]-1){
          bol =false;
        }else {if(tablero[vy+y+1][vx+x]!=0){
        bol =false;}}
      }}
       });
  })
 return bol;
  }
function completo(){
  tablero.forEach((fila,i)=>{
    if(fila.every(function n(value){return value!=0;})){
    for(var m=i;m>0;m--)
      tablero[m]=tablero[m-1]; 
    medidas[0]++
    medidas[2]+=100;}
  })
  if(medidas[0]%1000==0 && tiempos[2]<100){
    tiempos[2]-=95;
  }
}
//rotando ando
function rotando(arr){  
let rotado=Array.from({length: arr.length},()=>Array.from({length: arr[0].length},()=>0));
for (let i = 0;i<arr.length;i++){
  for(let j = 0;j<arr.length;j++){
    rotado[j][rotado.length-1-i]=arr[i][j];
  }}
  if(verify(rotado,current[0],current[1],1)){
  for (let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr.length;j++){
    arr[i][j]= rotado[i][j];
    }}}
}
//recordar la casilla
function glue(arr,mx,my){
  arr.forEach((row,y) => {
    row.forEach((value,x)=>{ 
    if(value!==0)
     tablero[y+my][x+mx]=value;})}) 
}
//deteccion de teclas
function keyPressed(){
 if (keyCode === LEFT_ARROW || key=="a") moveee(-1,0);
 else if (keyCode === RIGHT_ARROW|| key=="d") moveee(1,0);
 else if (keyCode === DOWN_ARROW|| key=="s") moveee(0,1);
 else if (keyCode === UP_ARROW|| key=="w") rotando(current[2]);}
//deteccion y creacion de nuevo bloque
function caido(){
glue(current[2],current[0],current[1]);
current[0]=0;
current[1]=0;
noLoop();
current[2]=random(tetro.slice());
loop();
completo();
}
function gameover(){
background(0);
textSize(30);
text("GAME OVER",width/2,height*1/4);
textSize(20);
text("Tu puntaje final fue: "+medidas[2]+"\n Quedaste en el nivel: "+medidas[1]+"\n y completaste "+medidas[0]+" lineas",width/2,height*2/4);
text("Eres Genial, ¡Gracias por jugar!",width/2,height*3/4);
noLoop();
}