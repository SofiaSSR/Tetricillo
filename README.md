# Tetricillo

proyecto obligatorio 2020-2

## ¿Que es?

Un ¡tetris!jugable en cualquier navegador hecho a base de p5.js y html

## ¿Como funciona?


###### 1. Iniciar
Tanto el tablero como las piezas son expresadas en matrices de enteros que se inicializan en 0
cada tipo de pieza esta codificada en una matriz de ceros y un unico numero natural que lo diferencia en color.
La pieza en movimiento es un arreglo llamado current que en las primeras posiciones tiene la posicion x, y,
en la ultima tiene la matriz que lo codifica;
la funcion todopoderosa se basa en recorrer el arreglo bidimensional dado y verificar si el valor de esa posicion no es cero.


###### 2. Movimiento y rotacion.
el movimiento  esta dado por la funcion moveee que es llamada por 3 instancias:
-Por teclado
-Por los botones HTML
-Por la funcion update que lo llama cada cierto intervalo en milisegundos guardado en el arreglo tiempos
(el intervalo cambia cada vez que se sube de nivel , tornando mas complicado el juego)
En el se verifica primero si esta disponible el lugar para moverse.(todopoderosa tipo "salirse")
La rotacion genera una matriz mediante transposicion y el reverso de las columnas de la pieza original,todopoderosa tipo "salirse" verifica que la matriz rotada tiene cabida
siendo ese el caso la funcion copia la matriz rotada en la matriz original.

###### 3. Caida y choque
Con la funcion todopoderosa tipo "caida" vemos si debajo de cada cuadrito de la ficha hay algo en el tablero o bien esta el limite inferior,
si es asi pega (mediante todopoderosa tipo "pegar")el valor de cada cuadro en el tablero en la posicion que se muestra en pantalla y
reestablece los valores de la pieza actual current, dandole otro tetromino aleatoreo(funcion caido).


######  4.Puntajes y gameover
Todas las variables como lineas blanqueadas y score se guardan en medidas, para blanquear una linea se recorren las filas del tablero
y si en alguna cada elemento es diferente de 0 se corren todas las filas una posicion hacia abajo.

Finalmente si algun elemento de la primera fila tiene un valor, significa que una ficha esta en el tope y se termina el juego
poniendo el fondo y dando las estadisticas finales.
