

//-------- Challenge 2 --------
// Juego de piedra papel o tijera ✂️ ⛰ 📃
// Preguntar a 2 usuarios que opcion eleguir
// Mostrar en consola que jugador gano

var jugador1 = prompt("Hola! escoge piedra, papel o tijera").toLowerCase()
var jugador2 = prompt("Hola, tu turno... escoge piedra, papel o tijeras").toLowerCase()

var piedra = "piedra"
var papel = "papel"
var tijera = "tijera"

if (jugador1 === piedra && jugador2 === piedra){
    console.log ("buuu, echenle ganas...empataron XD")
} else if (jugador1 === papel && jugador2 === papel){
    console.log ("buuu, echenle ganas...empataron XD")
} else if (jugador1 === tijera && jugador2 === tijera){
    console.log ("buuu, echenle ganas...empataron XD")
} else if (jugador1 === papel && jugador2 === piedra){
    console.log ("muy bien, ganaste jugador 1 :)")
} else if (jugador1 === piedra && jugador2 === tijera){
    console.log ("muy bien, ganaste jugador 1 :)")
} else if (jugador1 === tijera && jugador2 === papel){
    console.log ("muy bien, ganaste jugador 1 :)")
} else if (jugador2 === papel && jugador1 === piedra){
    console.log ("muy bien, ganaste jugador 2 :)")
} else if (jugador2 === piedra && jugador1 === tijera){
    console.log ("muy bien, ganaste jugador 2 :)")
} else if (jugador2 === tijera && jugador1 === papel){
    console.log ("muy bien, ganaste jugador 2 :)")
}
