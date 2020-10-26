# Tetricillo
**Nombre:** Sofia Salinas Rico
**Fecha:** 4 de Octubre 2020
proyecto obligatoria 2020-1

## Tabla de contenidos:
* [¿Que es?](#que-es)
* [¿Como funciona?](#como-funciona)
* [Inspiracion](#inspiracion)

## ¿Que es?

¡Un tetris!jugable en cualquier navegador hecho a base de p5.js y html

## ¿Como funciona?

###### 1. Inicializacion
-Tanto el tablero como las piezas son expresadas en matrices de enteros que se inicializan en 0
- Cada tipo de pieza esta codificada en una matriz de ceros y un unico numero natural que lo diferencia en color.
- La pieza en movimiento esta en `current=[]` que en las primeras posiciones tiene la posicion x, y,
en la ultima tiene la matriz que lo codifica;
la funcion todopoderosa se basa en recorrer el arreglo bidimensional dado y verificar si el valor de esa posicion no es cero, los diferentes tipos de la funcion son sub funciones que utilizan el principio de la todopoderosa.


###### 2. Movimiento y rotacion.
el movimiento  esta dado por la funcion moveee que es llamada por 3 instancias:
-Por teclado
-Por los botones creados en HTML
-Por la funcion `update()` que lo llama cada cierto intervalo en milisegundos guardado en el arreglo tiempos.
(el intervalo cambia cada vez que se sube de nivel , tornando más complicado el juego).

En él se verifica primero si cayó con `topododerosa([],#,#,caido)`,  luego esta disponible el lugar para moverse con `topododerosa([],#,#,salirse)`

Para hacer la rotacion la funcion genera una matriz mediante transposicion y el reverso de las columnas de la pieza original, con`topododerosa([],#,#,salirse)` verifica que la matriz rotada tiene cabida, 
siendo ese el caso la funcion copia la matriz rotada en la matriz original.

###### 3. Caida y choque
Con la funcion todopoderosa tipo "caida" vemos si debajo de cada cuadrito de la ficha hay algo en el tablero o bien esta el limite inferior,
si es asi pega (mediante todopoderosa tipo "pegar")el valor de cada cuadro en el tablero en la posicion que se muestra en pantalla y
reestablece los valores de la pieza actual current, dandole otro tetromino aleatoreo `function caido()`.


######  4.Puntajes y gameover
Todas las variables como lineas blanqueadas y score se guardan en `medidas=[]`, para blanquear una linea se recorren las filas del tablero
y si en alguna cada elemento es diferente de 0 se corren todas las filas una posicion hacia abajo.

Finalmente si algun elemento de la primera fila tiene un valor, significa que una ficha esta en el tope y se termina el juego
poniendo el fondo y dando las estadisticas finales.

## Inspiracion

Este codigo esta inspirado en el codigo realizado por @PavlyukVadim , ubicado en el repositorio [@PavlyukVadim](https://github.com/amadevBox/tetris), tambien se puede visualizar en el YouTube en [@video](https://www.youtube.com/watch?v=iBNglVi9qww);
