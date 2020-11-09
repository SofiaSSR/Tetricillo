# Tetricillo 

*Nombre:* Sofía Salinas Rico & José Luis Ávila Guzmán  

*Fecha:* Versión 1: 4 de Octubre 2020, Versión 2: 6 Noviembre 2020 

proyecto obligatoria 2020-2 

 

## Tabla de contenidos: 

* [¿Qué es?](#qué-es) 

* [Clases del proyecto](#Clases) 

*[Funcionamiento](#Funcionamiento) 

* [Inspiración](#inspiración) 

 

## ¿Qué es? 

¡Un n-tris! Jugable en cualquier navegador hecho a base de p5.js , d3.js y HTML5, utilizando los conceptos vistos en clase de programacion orientada a objetos. 

Es una generalizacion del tetris, donde puedes jugar con monominos hasta heptominos, lo cual lo hace más emocionante. 

## Clases 

###### 1. Clase Tablero 

La clase tablero tiene los miembros `matriz` que representa las posiciones que ocupan las fichas, `color` que representa los colores que tiene el tablero en cada espacio y `fondo` que es el color de fondo del tablero, el cual cambiará cuando se pase del modo normal al modo rápido. 

Además, la clase tablero contiene los métodos:  

* `show` que imprime las posiciones del tablero que están ocupadas, llenando cada casilla del color de la ficha que está en ella.  

* `completo` revisa si una fila está llena. Cuando una fila está llena aumenta el puntaje de la variable global `score` y se aumenta también el nivel. A medida que se aumentan los niveles las fichas caerán más rápido. 

 

###### 2. Clase Poliomino 

La clase Poliomino cuenta con los miembros de datos `x` y `y` que son enteros que representan las posiciones de la pieza en el tablero; `caido` que hace referencia al estado de una pieza ( en juego o que ya cayó) y `id` que es el tipo de Poliomino que el objeto pieza es.  

Además, la clase Poliomino cuenta con las siguientes funciones:  

* `update` es la encargada de refrescar el estado de la pieza en el tablero, haciendo que ésta baje cuando sea posible. Esto lo hace mediante una llamada al método `moveee` 

* `rotar` que realiza una rotación de la pieza en el sentido horario. 

* `moveee` realiza los movimientos laterales y hacia abajo. Esta función revisa los movimientos que se pueden hacer y evita los que son ilegales. 

* `show` muestra la ficha en el tablero, rellenando de color los cuadrados que ésta ocupa. 

* `todopoderosa` es una función multipropósito que dependiendo del argumento entregado realiza una acción. Puede realizar las acciones para fijar una ficha en el tablero o verificar que una ficha efectivamente cayó, y no puede moverse más hacia abajo. 

 

## Funcionamiento 

###### 3. Movimiento y rotación de pieza actual . 

El movimiento esta dado por el método `moveee` que es llamada por 3 instancias: 

-Por teclado 

-Por los botones creados en HTML 

-Por el método `update()` que lo llama cada cierto intervalo en milisegundos guardado en el objeto tiempos. 

(el intervalo cambia cada vez que se sube de nivel, tornando más complicado el juego). 

 

Antes de hacer el movimiento se verifica primero si cayó con `todopoderosa(“caído”)`, luego si está disponible el lugar para moverse con `todopoderosa(“salirse”) ` 

 

Para hacer la rotación, la función genera una matriz mediante transposición y el reverso de las columnas de la pieza original, con `todopoderosa(“salirse”)` verifica que el objeto rotado tiene cabida,  

siendo ese el caso la función copia el atributo pointArray de rotado en current. 

 

###### 4. Caída y choque 

Con la función de la clase Poliomino `todopoderosa` tipo "caida" se verifica si debajo de cada cuadro de la ficha hay algo en el tablero, o bien está el límite inferior, si es así pega (mediante todopoderosa tipo "pegar") el valor de cada cuadro en el tablero en la posición que se muestra en pantalla, y reestablece los valores de la pieza actual current, dándole otro tetromino aleatorio `function caido()`. 

 

 

######  5. Modalidad de juego rápido 

Esta versión de N-Tris incluye un factor diferenciador, y es la modalidad de juego rápido. Esta consiste en intervalos de tiempo de 5 segundos durante los cuales las fichas caen a una velocidad más rápida de lo normal. En este punto se introduce el concepto de las vidas: El usuario tiene 3 vidas al inicio de la partida. Cuando una ficha llega al tope del tablero y se está durante el juego rápido el jugador pierde una vida y el tablero regresa a las posiciones que tenía antes de iniciar el juego rápido. 

###### 6. Puntajes y gameover 

Todas las variables como líneas blanqueadas y score se guardan en `medidas= {}`.  

 

Finalmente, si algún elemento de la primera fila tiene un valor, significa que una ficha está en el tope fuera del juego rápido o se han perdido todas las vidas y se termina el juego poniendo el fondo y dando las estadísticas finales.  

 

## Ejecución del programa 

El n-Tris puede ser jugado con el código disponible en `master branch`, ejecutándolo en el editor de texto [Visual Studio Code][1] junto con la herramienta [LiveServer][2]. 

 

## Inspiración 

 

Este código está inspirado en el código realizado por @PavlyukVadim , ubicado en el repositorio [@PavlyukVadim](https://github.com/amadevBox/tetris), también se puede visualizar en el YouTube en [@video](https://www.youtube.com/watch?v=iBNglVi9qww); 

Además la función generadora de Poliominos fue realizada por @kartikvasu, ubicado en el repositorio[@kartikvasu](https://github.com/kartikvasu/polyominogenerator) 

 

 

  [1]: https://code.visualstudio.com/ 

  [2]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer 
