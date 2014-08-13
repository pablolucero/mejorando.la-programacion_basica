/*
	Reglas:
	La piedra aplasta o rompe la tijera (gana la piedra)
	La tijera corta el papel (gana la tijera)
	El papel envuelve la piedra (gana el papel)
*/

var opciones = ["Piedra", "Papel", "Tijera"];
var opcion = prompt("Elije una opcion:\n0 - Piedra\n1 - Papel\n2 - Tijera", 0);
var usuario = opciones[opcion];
var randomNumber = Math.floor(Math.random() * 3) // numero al azar entre 0 y 2
var maquina = opciones[randomNumber];


alert("Vos elegiste: " + usuario +"\nLa maquina eligio: " + maquina);

if (usuario == maquina) {
	alert("Empataste!");
} else if (usuario == "Papel") {

	if (maquina == "Piedra") { alert("Ganaste!"); };
	if (maquina == "Tijera") { alert("Perdiste!"); };
	
} else if (usuario == "Piedra") {
	
	if (maquina == "Tijera") { alert("Ganaste!"); };
	if (maquina == "Papel") { alert("Perdiste!"); };

} else if (usuario == "Tijera") {
	
	if (maquina == "Papel") { alert("Ganaste!"); };
	if (maquina == "Piedra") { alert("Perdiste!"); };	
}