# Tetricillo
*Nombre:* Sofía Salinas Rico & José Luis Ávila Guzmán 
*Fecha:* Versión 1: 4 de Octubre 2020, Versión 2: 6 Noviembre 2020
proyecto obligatoria 2020-2

## Tabla de contenidos:
* [¿Qué es?](#qué-es)
* [¿Cómo funcióna?](#cómo-funcióna)
* [Inspiración](#inspiración)

## ¿Qué es?

¡Un n-tris! Jugable en cualquier navegador hecho a base de p5.js , d3.js y HTML5, utilizando los conceptos vistos en clase de programacion orientada a objetos.
Es una generalizacion del tetris, donde puedes jugar con monominos hasta heptominos, lo cual lo hace más emocionante.

## ¿Cómo funcióna?

###### 1. Inicialización
- El tablero es expresado en un arreglo 2D que se inicializa en 0
- Cada n-mino es generada de manera recursiva, y se definen como arreglos de objetos con parámetros x,y los cuales definen la posición de un cuadro que compone la pieza.
- La pieza en movimiento está almacenada en `current=[]`, el cual en las primeras posiciones tiene la posición x, y; y en la última tiene la matriz que lo codifica.
- La función 'todopoderosa' cumple el papel de recorrer el arreglo bidimensional dado y verificar si el valor de esa posición no es cero. Los diferentes tipos de la función son sub funciónes que utilizan el principio de la todopoderosa.


###### 2. Movimiento y rotación.
El movimiento  esta dado por la función `moveee` que es llamada por 3 instancias:
-Por teclado
-Por los botones creados en HTML
-Por la función `update()` que lo llama cada cierto intervalo en milisegundos guardado en el arreglo tiempos.
(el intervalo cambia cada vez que se sube de nivel , tornando más complicado el juego).

En él se verifica primero si cayó con `topododerosa([],#,#,caido)`,  luego está disponible el lugar para moverse con `topododerosa([],#,#,salirse)`

Para hacer la rotación, la función genera una matriz mediante transposición y el reverso de las columnas de la pieza original, con`topododerosa([],#,#,salirse)` verifica que la matriz rotada tiene cabida, 
siendo ese el caso la función copia la matriz rotada en la matriz original.

###### 3. Caida y choque
Con la función todopoderosa tipo "caida" se verifica si debajo de cada cuadro de la ficha hay algo en el tablero, o bien está el límite inferior,
si es así pega (mediante todopoderosa tipo "pegar")el valor de cada cuadro en el tablero en la posición que se muestra en pantalla, y reestablece los valores de la pieza actual current, dándole otro tetromino aleatorio `function caido()`.


######  4. Modalidad de juego rápido
Esta versión de N-Tris incluye un factor diferenciador, y es la modalidad de juego rápido. Esta consiste en intervalos de tiempo de 5 segundos durante los cuales las fichas caen a una velocidad más rápida de lo normal. En este punto se introduce el concepto de las vidas: El usuario tiene 3 vidas al inicio de la partida. Cuando una ficha llega al tope del tablero y se está durante el juego rápido el jugador pierde una vida y el tablero regresa a las posiciones que tenía antes de iniciar el juego rápido. Sin embargo, si una ficha llega a la parte superior del tablero y no se está en el juego rápido, el jugador pierde directamente.

######  5.Puntajes y gameover
Todas las variables como líneas blanqueadas y score se guardan en `medidas=[]`. Para eliminar una línea se recorren las filas del tablero, y si en alguna cada elemento es diferente de 0 se corren todas las filas una posición hacia abajo.


Finalmente, si algún elemento de la primera fila tiene un valor, significa que una ficha esta en el tope y se termina el juego poniendo el fondo y dando las estadísticas finales.

## Ejecución del programa
El n_Tris puede ser jugado con el código disponible en `master branch`, ejecutándolo en el editor de texto [Visual Studio Code][1] junto con la herramienta [LiveServer][2].

## Inspiración

Este código está inspirado en el código realizado por @PavlyukVadim , ubicado en el repositorio [@PavlyukVadim](https://github.com/amadevBox/tetris), también se puede visualizar en el YouTube en [@video](https://www.youtube.com/watch?v=iBNglVi9qww);
Ademas la función generadora de Poliominos fue realizada por @kartikvasu, ubicado en el repositorio[@kartikvasu](https://github.com/kartikvasu/polyominogenerator)


  [1]: https://code.visualstudio.com/
  [2]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
