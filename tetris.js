var tetro;
var choose=[255,2,204,153,102,51],colores=[];
function genPoly(n) {
  tetro = polyominoGenerator().returnPolyominos(n);   
  console.log(tetro);
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
var dimta= [10,250,20,500];//numero de columnas, ancho del cuadro, numero de filas, largo del cuadro;
/* var colores =[[0, 255, 0], [0, 0, 255], [255, 153, 102], [255, 255, 0], [51, 255, 0],[0, 0, 51],[0, 0, 102], [0, 0, 153], [0, 0, 204], [0, 51, 0], [0, 51, 51], [0, 51, 102], [0, 51, 153], [0, 51, 204], [0, 51, 255], [0, 1,255], [0, 204, 0], [0, 204, 51], [0, 204, 102], [0, 204, 153], [0, 204, 204], [0, 204, 255], [0, 255, 51], [0, 255, 102], [0, 255, 153], [0, 255, 204], [0, 255, 255], [51, 0, 0], [51, 0, 51], [51, 0, 102], [51, 0, 153], [51, 0, 204], [51, 0, 255], [51, 51, 0], [51, 51, 51], [51, 51, 102], [51, 51, 153], [51, 
  51, 204], [51, 51, 255], [51, 102, 0], [51, 102, 51], [51, 102, 102], [51, 102, 153], [51, 102, 204], [51, 102, 255], [51, 153, 0], [51, 153, 51], [51, 153, 102], [51, 153, 153], [51, 153, 204], [51, 153, 255], [51, 204, 0], [51, 204, 51], [51, 204, 102], [51, 204, 153], [51, 204, 204], [51, 204, 255], [51, 255, 51], [51, 255, 102], [51, 255, 153], [51, 255, 204], [51, 255, 255], [102, 0, 0], [102, 0, 51], [102, 0, 102], [102, 0, 153], [102, 0, 204], [102, 0, 255], [102, 51, 0], [102, 51, 51], [102, 51, 102], [102, 51, 153], [102, 51, 204], [102, 51, 255], [102, 102, 0], [102, 102, 51], [102, 102, 102], [102, 102, 153], [102, 
  102, 204], [102, 102, 255], [102, 153, 0], [102, 153, 51], [102, 153, 102], [102, 153, 153], [102, 153, 204], [102, 153, 255], [102, 204, 0], [102, 204, 51], [102, 204, 102], [102, 204, 153], [102, 204, 204], [102, 204, 255], [102, 255, 0], [102, 255, 51], [102, 255, 102], [102, 255, 153], [102, 255, 204], [102, 255, 255], [153, 0, 0], [153, 0, 51], [153, 0, 102], [153, 0, 153], [153, 0, 204], [153, 0, 255], [153, 51, 0], [153, 51, 51], [153, 51, 102], [153, 51, 153], [153, 51, 204], [153, 51, 255], [153, 102, 0], [153, 102, 51], [153, 102, 102], [153, 102, 153], [153, 102, 204], [153, 102, 255], [153, 153, 0], [153, 153, 51], [153, 153, 102], [153, 153, 153], [153, 153, 204], [153, 153, 255], [153, 204, 0], [153, 204, 51],
   [153, 204, 102], [153, 204, 153], [153, 204, 204], [153, 204, 255], [153, 255, 0], [153, 255, 51], [153, 255, 102], [153, 255, 153], [153, 255, 204], [153, 255, 255], [204, 0, 0], [204, 0, 51], [204, 0, 102], [204, 0, 153], [204, 0, 204], [204, 0, 255], [204, 51, 0], [204, 51, 51], [204, 51, 102], [204, 51, 153], [204, 51, 204], [204, 51, 255], [204, 102, 0], [204, 102, 51], [204, 102, 102], [204, 102, 153], [204, 102, 204], [204, 102, 255], [204, 153, 0], [204, 153, 51], [204, 153, 102], [204, 153, 153], [204, 153, 204], [204, 153, 255], [204, 204, 0], [204, 204, 51], [204, 204, 102], [204, 204, 153], [204, 204, 204], [204, 204, 255], [204, 255, 0], [204, 255, 51], [204, 255, 102], [204, 255, 153], [204, 255, 204], [204, 255, 255], [255, 0, 0], [255, 0, 51], [255, 0, 102], [255, 0, 153], [255, 0, 204], [255, 0, 255], [255, 51, 0], [255, 51, 51], [255, 51, 102], [255, 51, 153], [255, 51, 204], [255, 51, 255], [255, 102, 0], [255, 102, 51], [255, 102, 102], [255, 102, 153], [255, 102, 204], [255, 102, 255], [255, 153, 0], [255, 153, 
  51], [255, 153, 153], [255, 153, 204], [255, 153, 255], [255, 204, 0], [255, 204, 51], [255, 204, 102], [255, 204, 153], [255, 204, 204], [255, 204, 255], [255, 255, 51], [255, 255, 102], [255, 255, 153], [255, 255, 204]];
var colores22 =[[0, 0, 0], [0, 0, 255], [0, 0, 153], [0, 0, 204], [0, 0, 102], [0, 0, 51], [0, 255, 0], [0, 255, 255], [0, 255, 153],[0, 255, 204], [0, 255, 102], [0, 255, 51],[0, 204, 51], [0, 102, 0], [0, 102, 255], [0, 102, 153], [0, 102, 204], [0, 102, 102], [0, 102, 51], [0, 51, 0], [0, 51, 255], [0, 51, 153], [0, 51, 204], [0, 51, 102], [0, 51, 51], [255, 0, 0], [255, 0, 255],  [255, 0, 153], [255, 0, 204], [255, 0, 102], [255, 0, 51], [255, 255, 0], [255, 255, 255], [255, 255, 153], [255, 255, 204], [255, 255, 102], [255, 255, 51], [255, 153, 0], [255, 153, 255], [255, 153, 153], [255, 153, 204], [255, 153, 102], [255, 153, 51], [255, 204, 0], [255, 204, 255], [255, 204, 153], [255, 204, 204], [255, 204, 102], [255, 204, 51], [255, 102, 0], [255, 102, 255],[255, 102, 153], [255, 102, 204], [255, 102, 102], 
[255, 102, 51], [255, 51, 0], [255, 51, 255], [255, 51, 153], [255, 51, 204], [255, 51, 102], [255, 51, 51], [153, 0, 0], [153, 0, 255], [153, 0, 153], [153, 0, 204], [153, 0, 102], [153, 0, 51], [153, 255, 0], [153, 255, 255], [153, 255, 153], [153, 255, 204], [153, 255, 102], [153, 255, 51], [153, 153, 0], [153, 153, 255], [153, 153, 153], [153, 153, 204], [153, 153, 102], [153, 153, 51], [153, 204, 0], [153, 204, 255], [153, 204, 153], [153, 204, 204], [153, 204, 102], [153, 204, 51], [153, 102, 0], [153, 102, 255], [153, 102, 153], [153, 102, 204], [153, 102, 102], [153, 102, 51], [153, 51, 0], [153, 51, 255], [153, 51, 153], [153, 51, 204], [153, 51, 102], [153, 51, 51], [204, 0, 0], [204, 0, 255], [204, 0, 153], [204, 0, 204], [204, 0, 102], [204, 0, 51], [204, 255, 0], [204, 255, 255], [204,  255, 153], [204, 255, 204], [204, 255, 102], [204, 255, 51], [204, 153, 0], [204, 153, 255], [204, 153, 153], [204, 153, 204], [204, 153, 102], [204, 153, 51], [204, 204, 0], [204, 204, 255], [204, 204, 153], [204, 204, 204], [204, 204, 102], [204, 204, 51], [204, 102, 0], [204, 102, 255], [204, 102, 153], [204, 102, 204],[204, 102, 102], [204, 102, 51], [204, 51, 0], [204, 51, 255], [204, 51, 153], [204, 51, 204], [204, 51, 102], [204, 51, 51], [102, 0, 0], [102, 0, 255], [102, 0, 153], [102, 0, 204], [102, 0, 102], [102, 0, 51], [102, 255, 0], [102, 255, 255],  [102, 255, 153], [102, 255, 204], [102, 255, 102], [102, 255, 51], [102, 153,  0], [102, 153, 255], [102, 153, 153], [102, 153, 204], [102, 153, 102], [102, 153, 51], [102, 204, 0], [102, 204, 255], [102, 204, 153], [102, 204, 204], [102, 204, 102], [102, 204, 51], [102, 102, 0], [102, 102, 255], [102, 102, 153], [102, 102, 204], [102, 102, 102], [102, 102, 51], [102, 51, 0], [102, 51, 255], [102, 51, 153], [102, 51, 204],[102, 51, 102], [102, 51, 51], [51, 0, 0], [51, 0, 255], [51, 0, 153], [51, 0, 204], [51, 0, 102], [51, 0, 51], [51, 255, 0],  [51, 255, 255], [51, 255, 153], [51, 255, 204], [51, 255, 102], [51, 255, 51], [51, 153, 0], [51, 153, 255], [51, 153, 153],[51, 153, 204], [51, 153, 102], [51, 153, 51],[51, 204, 0], [51, 204, 255], [51, 204, 153], [51, 204, 204], [51, 204, 102], [51, 204, 51], [51, 102, 0], [51, 102, 255], [51, 102, 153], [51, 102, 204], [51, 102, 102], [51, 102, 51], [51, 51, 0], [51, 51, 255], [51, 51, 153], [51, 51, 204], [51, 51, 102], [51, 51, 51]]; */
class pieza {

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
  }
  var tiempos=[0,0,400];//tiempo transcurrido desde la ultima toma, tultima toma,cada cuanto cae;
  var tablero = Array.from({length: dimta[2]},()=>Array.from({length: dimta[0]},()=>0));
  var estado = ["inicio"];
  var medidas ={lineas:8,nivel:1,score:0};
  var ancho = 500, alto = 550;
  var inicial =[ancho*7/48-26,alto*3/30-25];
  var current,newt;
  function determinado(){
   medidas ={lineas:0,nivel:1,score:0};;//almacena lineasresueltas, nivel y score;
   tiempos=[0,0,500];//tiempo transcurrido desde la ultima toma, tultima toma,cada cuanto cae;
   tablero = Array.from({length: dimta[2]},()=>Array.from({length: dimta[0]},()=>0));
   estado = ["inicio"];}
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
  }
  
  function draw() {
   if(estado[0]=="inicio"){
    inicio();
   }else if(estado[0]=="juego"){
     juego();
     if(tablero[0].some((value)=>{return value!=0}))
       gameover();}}
  
  function start(){
   estado[0]="juego";
   document.getElementById("inicio").style.display = "none";
   let a = Math.floor(Math.random() * tetro.length);
   console.log(tetro[a],"!!!!!!!!!!!!!!!!!!!!!!!!!!!cur");
   current = new pieza(Math.round(dimta[0]/2)-1,0,tetro[a],0,a);
   a= Math.floor(Math.random() * tetro.length);
   console.log(tetro[a],"!!!!!!!!!!!!!!!!!!!!!!!!!!!cur");
   newt = new pieza(13,18,tetro[a],0,a);
  }  
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
   fill(125);
   rectMode(CORNERS);
   rect(inicial[0],inicial[1],inicial[0]+dimta[1],inicial[1]+dimta[3]);
   rectMode(CENTER);
   //end default
  show(tablero,0,0,25);
  todopoderosa(current,"show",25);
  todopoderosa(newt,"show",25);
  current.update();
  }
function show(arr,vx,vy,extra){
  arr.forEach((row,y)=>{
   row.forEach((value,x)=>{
    if(value!==0){
      let rx= vx+x;
      let ry = vy+y;
        stroke(colores[value-1]);
        fill(colores[value-1]);
        rect(extra*(rx)+inicial[0]+extra/2,extra*(ry)+inicial[1],dimta[1]/dimta[0],dimta[3]/dimta[2]);
        noFill();}
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
          rect(extra*(rx)+inicial[0]+extra/2,extra*(ry)+inicial[1],dimta[1]/dimta[0],dimta[3]/dimta[2]);
          noFill();
        }
   })
   return bol;}
  function completo(){ //completar filas ///ñooo
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
   else if (keyCode === DOWN_ARROW|| key=="s") current.moveee(0,1);
   else if (keyCode === UP_ARROW|| key=="w") current.rotando();
   else if( key=="r")current.fullcaida()
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