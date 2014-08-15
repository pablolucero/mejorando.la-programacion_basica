var array = ["ganaste", "perdiste"]

// 1 = bomba
var matriz =  [ [[0], [1], [0]], 
				[[1], [0], [0]], 
				[[0], [1], [1]] ];

alert("Bienvenido al Buscaminas\nPara jugar imagina un tablero de 3x3");
var x = prompt("Elige una opcion del eje x (entre 0 y 2)");
var y = prompt("Elige una opcion del eje y (entre 0 y 2)");

if (x <= 2 && y <= 2) {
	var opcion = matriz[x][y];
	if (opcion == 1) {
		document.writeln("BOOM! Perdiste!<br>");
	} else {
		document.writeln("Ganaste!<br>");
	}
} else {
	document.writeln("Perdiste!! La opcion elegida no es valida<br>");
}
