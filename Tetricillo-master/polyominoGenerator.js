polyominoGenerator = function() {
/**----------------------------------------------------------
				MODEL ELEMENT CONSTRUCTORS
------------------------------------------------------------*/
/** Object factory that creates a point and returns it.
*/
var Point = function(x, y) {
	return {
		x: x,
		y: y
	};
}

/** Object factory that creates a list of points that when
together represent a piece. It returns a point array which is 
an array of points. 
*/
var Piece = function() {

	var i;

	//a piece has an array of points.
	var pointArray = [];

	for(i = 0; i < arguments.length; i += 2) {
		pointArray[i/2] = Point(arguments[i], arguments[i+1]); 
	}

	return {
		pointArray: pointArray
	};
}

 var PieceSpecial = function(array) {

 	var pointArray = [];

 	for(var i = 0; i < array.length; i += 2) {
 		pointArray.push(Point(array[i], array[i+1]));
 	}

 	return {
 		pointArray: pointArray
 	};

 }

/*------------------------------------------------------------
					ALGORITHMIC OPERATIONS
------------------------------------------------------------*/
/** This is the main function that is called
at the highest level. It calls several of the helper
functions in the program in order to generate the desired
array of Hexominos.
*/
this.returnPolyominos = function (num) {

	if(typeof num != "number") {
		console.log("For some reason what you entered is not a number.");
		return;
	}

	return generatePolyominos(num);
}

/** This is the actual function that calls around everything. 
It is the "powerhouse of the cell" lol.
It returns an array of pieces. 
*/
var generatePolyominos = function(num) {
	var start_time = Date.now();
	//base case for the recursive function
	if(num === 1) {
		var pieceArray = [];
		pieceArray[0] = Piece(0, 0);
		var end_time = Date.now();
		console.log(num, '-omino took: ', end_time - start_time, 'milliseconds');
		return pieceArray; 
	}

	var newPolyominos = [],
	prevPolyominos = generatePolyominos(num - 1); //recursive call here!!
	
	for(var i = 0; i < prevPolyominos.length; i++) {
		var testPolyominos = [];
		testPolyominos.push(copyPolyomino(prevPolyominos[i]));
		testPolyominos.push(rotatePointsClockWise(copyPolyomino(prevPolyominos[i])));
		testPolyominos.push(flipPointsVertically(rotatePointsClockWise(copyPolyomino(prevPolyominos[i]))));
		testPolyominos.push(flipPointsHorizontally(rotatePointsClockWise(copyPolyomino(prevPolyominos[i]))));
		
		testPolyominos.push(rotatePointsClockWise(rotatePointsClockWise(copyPolyomino(prevPolyominos[i]))));
		testPolyominos.push(flipPointsVertically(rotatePointsClockWise(rotatePointsClockWise(copyPolyomino(prevPolyominos[i])))));
		testPolyominos.push(flipPointsHorizontally(rotatePointsClockWise(rotatePointsClockWise(copyPolyomino(prevPolyominos[i])))));

		testPolyominos.push(rotatePointsClockWise(rotatePointsClockWise(rotatePointsClockWise(copyPolyomino(prevPolyominos[i])))));
		testPolyominos.push(flipPointsVertically(rotatePointsClockWise(rotatePointsClockWise(rotatePointsClockWise(copyPolyomino(prevPolyominos[i]))))));
		testPolyominos.push(flipPointsHorizontally(rotatePointsClockWise(rotatePointsClockWise(rotatePointsClockWise(copyPolyomino(prevPolyominos[i]))))));

		for(var j = 0; j < testPolyominos.length; j++) {
			testPolyominos[j] = normalizePolyomino(testPolyominos[j]);
			newPolyominos = checkAndAddNewPiece(testPolyominos[j], newPolyominos);
		}
	}

	var end_time = Date.now();
	console.log(num, '-omino took: ', end_time - start_time, 'milliseconds');
	return newPolyominos;
}

/**
Creates all possible pieces generatable from the passed in (n-1) polyomino
and determines if that piece already exists in the newPolyominos array and 
updates the newPolyominos array with the freshly generated piece.
*/
var checkAndAddNewPiece = function(polycopy, newPolyominos) {
	
	for(var j = 0; j < polycopy.pointArray.length; j++) {
			for(var k = 0 ; k < 2; k++) {
				if(k === 0) {
					var newpoint = Point(polycopy.pointArray[j].x + 1, polycopy.pointArray[j].y);
					if(pointArrayContains(newpoint, polycopy.pointArray)) continue;
					var newPointArray = copyPointArray(polycopy.pointArray);
					newPointArray.push(newpoint);
					var newPiece = {
						pointArray: newPointArray
					};
					if(!PieceContains(newPiece, newPolyominos)) {
						newPolyominos.push(newPiece);
					}
				} else {
					var newpoint = Point(polycopy.pointArray[j].x, polycopy.pointArray[j].y + 1);
					if(pointArrayContains(newpoint, polycopy.pointArray)) continue;
					var newPointArray = copyPointArray(polycopy.pointArray);
					newPointArray.push(newpoint);
					var newPiece = {
						pointArray: newPointArray
					};
					if(!PieceContains(newPiece, newPolyominos)) {
						newPolyominos.push(newPiece);
					}
				}
			}
		}

	return newPolyominos;
}


/*------------------------------------------------------
                   PIECE MUTATORS
--------------------------------------------------------
*/
/** Takes a list of points that represent a polyomino and 
returns the array after performing a matrix rotation on the 
set of points that are passed in. 
*/
var rotatePointsClockWise = function(piece) {

	var i;

	for(i = 0; i < piece.pointArray.length; i++) {
		piece.pointArray[i] = Point(piece.pointArray[i].y, -piece.pointArray[i].x);
	}

	return piece;
}

/** Takes a list of points that represent a polyomino. Performs
the matrix vertical flip operation on each one of the points and 
returns an array of points. 
*/
var flipPointsVertically = function(piece) {
	
	var i;

	for(i = 0; i < piece.pointArray.length; i++) {
		piece.pointArray[i] = Point(-piece.pointArray[i].x, piece.pointArray[i].y);
	}

	return piece;
}

/** Takes a list of points that represent a polyomino. Performs
the matrix horizontal flip operation on each one of the poitns and
returns an array of points. 
*/
var flipPointsHorizontally = function(piece) {

	var i;

	for(i = 0; i < piece.pointArray.length; i++) {
		piece.pointArray[i] = Point(piece.pointArray[i].x, -piece.pointArray[i].y);
	}

	return piece;
}


/*--------------------------------------------------------
*					PIECE HELPERS 
---------------------------------------------------------*/

/*
Returns a boolean indicating whether two pieces are equal.
*/
var pieceEquals = function(pieceA, pieceB) {

	var pieceARotated = rotatePointsClockWise(copyPolyomino(pieceA)),
	pieceARotatedTwice = rotatePointsClockWise(copyPolyomino(pieceARotated)),
	pieceARotatedThrice = rotatePointsClockWise(copyPolyomino(pieceARotatedTwice)),
	pieceAFlippedVertically = flipPointsVertically(copyPolyomino(pieceA)),
	pieceAFlippedHorizontally = flipPointsHorizontally(copyPolyomino(pieceA)),
	pieceAR1FV = flipPointsVertically(rotatePointsClockWise(copyPolyomino(pieceA))),
	pieceAR1FH = flipPointsHorizontally(rotatePointsClockWise(copyPolyomino(pieceA))),
	pieceAR2FV = flipPointsVertically(rotatePointsClockWise(copyPolyomino(pieceARotated))),
	pieceAR2FH = flipPointsHorizontally(rotatePointsClockWise(copyPolyomino(pieceARotated))),
	pieceAR3FV = flipPointsVertically(rotatePointsClockWise(copyPolyomino(pieceARotatedTwice))),
	pieceAR3FH = flipPointsHorizontally(rotatePointsClockWise(copyPolyomino(pieceARotatedTwice))),
	pointArrayA = pieceA.pointArray,
	pointArrayB = pieceB.pointArray,
	pointArrayARotated = normalizePoints(pieceARotated.pointArray),
	pointArrayARotatedTwice = normalizePoints(pieceARotatedTwice.pointArray),
	pointArrayARotatedThrice = normalizePoints(pieceARotatedThrice.pointArray),
	pointArrayAFlippedVertically = normalizePoints(pieceAFlippedVertically.pointArray),
	pointArrayAFlippedHorizontally = normalizePoints(pieceAFlippedHorizontally.pointArray),
	pointArrayAR1FV = normalizePoints(pieceAR1FV.pointArray),
	pointArrayAR1FH = normalizePoints(pieceAR1FH.pointArray),
	pointArrayAR2FV = normalizePoints(pieceAR2FV.pointArray),
	pointArrayAR2FH = normalizePoints(pieceAR2FH.pointArray),
	pointArrayAR3FV = normalizePoints(pieceAR3FV.pointArray),
	pointArrayAR3FH = normalizePoints(pieceAR3FH.pointArray);


	return  samePointArray(pointArrayA, pointArrayB)
			||
			samePointArray(pointArrayARotated, pointArrayB)
			||
			samePointArray(pointArrayARotatedTwice, pointArrayB)
			||
			samePointArray(pointArrayARotatedThrice, pointArrayB)
			||
			samePointArray(pointArrayAFlippedHorizontally, pointArrayB)
			||
			samePointArray(pointArrayAFlippedVertically, pointArrayB)
			||
			samePointArray(pointArrayAR1FV, pointArrayB)
			||
			samePointArray(pointArrayAR1FH, pointArrayB)
			||
			samePointArray(pointArrayAR2FV, pointArrayB)
			||
			samePointArray(pointArrayAR2FH, pointArrayB)
			||
			samePointArray(pointArrayAR3FV, pointArrayB)
			||
			samePointArray(pointArrayAR3FH, pointArrayB);
}

//determines if a point array contains the point.
var pointArrayContains = function (point, pointArray) {
	for(var i = 0; i < pointArray.length; i++) {
		if(pointsEqual(point, pointArray[i])) {
			return true;
		}
	}

	return false;
}

//determines if two points are equal.
var pointsEqual = function(pointA, pointB) {
	return pointA.x === pointB.x && pointA.y === pointB.y;
}

//create a new copy of the polyomino
var copyPolyomino = function(polyomino) {
	var array = copyPointArray(polyomino.pointArray);
	var numArray = [];

	for(var i = 0; i < array.length; i++) {
		numArray.push(array[i].x);
		numArray.push(array[i].y);
	}

	var copiedPiece = PieceSpecial(numArray);

	return copiedPiece;
}

//create a new copy of the point array
var copyPointArray = function(pointArray) {
	var newArray = [];
	for(var i = 0; i < pointArray.length; i++) {
		newArray.push(Point(pointArray[i].x, pointArray[i].y));
	}

	return newArray;
}

//determines if piece array contains the given piece.
var PieceContains = function(Piece, pieceArray) {
	for(var i = 0; i < pieceArray.length; i++) {
		if(pieceEquals(Piece, pieceArray[i])) {
			return true;
		}
	}

	return false;
}

//check if the two point arrays are the same
var samePointArray = function(pointArrayA, pointArrayB) {
	//they can't be equal if they are different sizes!
	if (pointArrayA.length !== pointArrayB.length) {
		alert("You stupid! The pieces aren't even the same kind!")
		return false;
	}

	for(var i = 0; i < pointArrayA.length; i++) {
		if(!pointArrayContains(pointArrayA[i], pointArrayB)) {
			return false;
		}
	}

	return true;

}

//make sure there's no polyomino that's going out of the grid
var normalizePoints = function(pointArray) {
	var minX = Number.POSITIVE_INFINITY,
	minY = Number.POSITIVE_INFINITY;

	for(var i = 0; i < pointArray.length; i++) {
		if(pointArray[i].x < minX) {
			minX = pointArray[i].x;
		}

		if(pointArray[i].y < minY) {
			minY = pointArray[i].y;
		}
	}

	if(minX < 0) {
		for(var i = 0; i < pointArray.length; i++) {
			pointArray[i].x += (-minX);
		}
	}

	if(minY < 0) {
		for(var i = 0; i < pointArray.length; i++) {
			pointArray[i].y += (-minY);
		}
	}

	return pointArray;
}

//normalize the polyomino and return a new piece.
var normalizePolyomino = function(piece) {
	return {
		pointArray: normalizePoints(piece.pointArray)
	}
}

return this;

};
