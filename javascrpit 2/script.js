//VAriables: Es un espacio reservado en la memoria donde podemos guardar un daot, 3 formas de hacerlo

//ES5-


//var NO SE USA 
//Si no se declara la variable por defecto es var
//Se permite la reasignacion
//VAR tiene hoisting

/* var bateria = 50
bateria = 49
nombre = "pepe" */

//let
/* let no tiene hoisting 
tiene inicializacion implicita
podemos reasginar
*/

let nombre
nombre = "pepe"
console.log(nombre)
//const
/* const no tiene hoisting
no tiene inicializacion implicita
no se puede reasignar
no se puede reasginar */


/* let edad = Number(prompt("ingrese su edad12"))

if(edad >= 18){
    console.log("puede pasar")
}else{
    console.log("no puede pasar")
} */


/* si la factura es tipo A el iva esta no esta incluido, si la factura es tipo b el iva esta incluido, si la factura es tipo c el iva esta excento */

/* let TipoDeFactura = prompt("ingrese el tipo de factura")

if(TipoDeFactura == "A"){
    console.log("la factura no tiene el iva incluido")
}
else if(TipoDeFactura == "B"){
    console.log("LA factura tiene el iva incluido")
}
else if (TipoDeFactura =="C"){
    console.log("la factura no tiene iva")
}
else{
    console.log("tipo de factura no valida")
}
 */


/* Ejercicio */

/* Crear una condicional que verifique que la edad sea mayor o igual a 18, en caso de ser asi decir por consola "es mayor de edad" sino decir "es menor de edad"

Crear un programa que solicite al usuario un precio, eso guardarlo en una variable. Si el precio es inferior a 3000 entonces decir por consola "es barato", si el precio es superior a 3000 decir por consola es caro

Solicitar al usuario 3 números y verificar cuál es el mayor de los 3 (nos muestra el numero mayor por consola)

Verificamos si el número es positivo, negativo o cero (nos dira por consola a que categoria pertenece)

Verificamos si la edad está en el rango de 18 a 65 años, si se cumple la condicion, se dira por consola Esta en edad laborable */


let edad = Number(prompt("Ingrese su edad"))
if(edad >= 18){
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}



let precio = Number(prompt("ingrese un precio"))
if(precio < 3000){
    console.log("es barato")
}else{
    console.log("es caro")
}


let primer_numero = Number(prompt("Primer numero"))
let segundo_numero = Number(prompt("segundo numero"))
let tercer_numero = Number(prompt("tercer numero"))

if(primer_numero > segundo_numero && primer_numero > tercer_numero){
    console.log(primer_numero)
}
else if(segundo_numero > primer_numero && segundo_numero > tercer_numero){
    console.log(segundo_numero)
}
else{
    console.log(tercer_numero)
}

let numero = Number(prompt("Ponga un numero"))
if (numero > 0){
    console.log("es positivo")
}
else if(numero < 0){
    console.log("es negativo")
}
else{
    console.log("es cero")
}


let edad2 = Number(prompt("ingrese edad"))
if(edad2 >= 18 && edad <= 65){
    console.log("Edad laborable")
}else{
    console.log("Edad no laborable")
}