//prueba ejercicio 1
//imprime nombre y apellido

function saludar (name, lastName) {
    if (typeof name !== "string" && typeof lastName !== "string") {
        return "tienes que poner un string"
    }
    return ("hola " + name + " " + lastName);
}


var name= "Pied"
var lastName= "Piper"

console.log(saludar(name,lastName))

//prueba 2 ejercicio 1
//imprime nombre y apellido solicitandolo

var name = prompt("Ingresa tu nombre");
var lastName = prompt("ingresa tu apellido")

function saludar (name , lastName) {
    if (typeof name !== "string" && typeof lastName !== "string") {
        return "tienes que poner un string"
    }
    return ("hola " + name + " " + lastName);
}

console.log(saludar(name,lastName))


//ejercicio 2
//hacer funcion que sume 2 parametros

function sumar (number1 , number2) {
    if (typeof Number) {
    }
    var suma = number1 + number2
    return ("la suma es " + suma);
}

var number1 = 20;
var number2 = 40;

console.log(sumar(number1, number2))

//ejercicio 3
//hacer funcion que sume 2 parametros

function restar (number1 , number2) {
    if (typeof Number) {
    }
    var resta = number1 - number2
    return ("la resta es " + resta);
}

var number1 = 100;
var number2 = 60;

console.log(restar(number1, number2))


//ejercicio 4
//hacer funcion que indique si el si soy mayor de edad o no


var edadpregunta = prompt('Que edad tienes');
var anos =Number(edadpregunta);

function mayordeedad (anos) {
    if (anos >= 18 && anos <= 100) {
        console.log('Eres un adulto, disfruta de tus responsabilidades XD ')
    } else if (anos <= 17) {
        console.warn('estas en pañales, no eres mayor de edad')
    } else {
        console.error('No es una edad');
    }
}
//aquio ya no es necesario poner consol.log, porque ya esta declarado en los if
mayordeedad(anos)
//*******evitar uso de las "Ñ"

//ejercicio Area cuadrado

function Area (x, z){
    console.log(x * z)
}

Area (5, 5)

//ejercicio Area triangulo

function Area (b, a){
    console.log((b * a) /2)
}

Area (10, 20)

//ejercicio Area rectangulo

function Area (x, z){
    console.log(x * z)
}

Area (3, 9)



