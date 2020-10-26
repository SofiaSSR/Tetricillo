function getMatrices(chart, polyOminos) {
  var posiciones_x_Objeto = [];
  var posiciones_y_Objeto = [];
  var n = polyOminos.length;
  var posiciones_finales = [];
  var para_retornar = [];


  function adjustMatrix(matrix){
    // Adjust a given 1d matrix to a square 2D matrix of size n
    var newMatrix = [];
    for (var i = 0; i < n*n; i += n)
      newMatrix.push(matrix.slice(i, i + n));
    return newMatrix;
  }

  function createMatrix(){
    var currentPosition = 0; // Iterates over the obtained positions
    for(var i = 0; i < n; i++)
      for(var j = 0; j < n; j++){
        var current_x = posiciones_x_Objeto[currentPosition];
        var current_y = posiciones_y_Objeto[currentPosition];
        if (current_x === j && current_y === i){  // A tile must be added
          posiciones_finales.push(1);  // Adds 1 to represent a tile
          currentPosition++;  // Update the iterator
        }
        else
          posiciones_finales.push(0);  // Adds 0 for a blank space
      }

      console.log(posiciones_finales);
      para_retornar.push(adjustMatrix(posiciones_finales));
  }

  function renderPiece(Piece) {

    var group = chart.append("g");
  	var pieceView = group.selectAll("rect")
      .data(Piece.pointArray)
      .enter()
      .append("rect")
  		.attr("x", function(d) {
        window.alert("Prros aqu")
        console.log("Sacare posicion x");
        console.log(d.x);
        posiciones_x_Objeto.push(d.x);
  		})
  		.attr("y", function(d) {
        posiciones_y_Objeto.push(d.y);
  		});
  }

  var n = polyOminos[0].pointArray.length;
  for(var i = 0; i < n-1; i++)
  {
    renderPiece(polyOminos[i]);
    createMatrix();
    posiciones_x_Objeto = [];
    posiciones_y_Objeto = [];
    posiciones_finales = [];
  }
  console.log("Perro");
  console.log(para_retornar);
  return para_retornar;
};
