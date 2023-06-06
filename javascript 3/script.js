/* console.log("Hola mundo") */


//BUCLE FOR

/* for(let iterador = 1; iterador <= 5; iterador = iterador + 1){
    console.log(iterador)
    console.log("Hola mundo")
} */


/* EJERCICIOS
1)Imprime los números del 1 al 10
2)Imprime los números pares del 2 al 20
3)Imprime los números impares del 1 al 19 */




/*  for(let i = 10; i >= 1; i = i -1){
    console.log(i)
}  */

/* EJERcicio 1

for(let i = 1; i <= 10; i = i +1){
    console.log(i)
} */


/* EJERCICIO 2
for(let i = 2; i <= 20; i = i +2){
    console.log(i)
}
 */

/* EJERCICIO 3
for(let i = 1; i <= 19; i = i +2){
    console.log(i)
} */


/* si escriben pepito quiero que el bucle se corte */

/* for(let i = 1; i <= 10; i = i +1){
    let nombre = prompt("ingrese nombre")
    if (nombre === "pepito"){
        break
    }
} */


/* quieor que hagas un contador que vaya del 1 al 10 pero se salte el 5 y el 6 */

/* for(let i = 1; i <= 10; i = i + 1){
    if(i === 5 || i === 6){
        continue
    }
    console.log(i)
} */

/* BUCLE WHILE */
/* let decision = prompt("Ingrese SI para continuar con el programa")
while(decision === "SI"){
    alert("EL programa se esta ejecutando")
    decision = prompt("Ingrese SI para continuar con el programa")
} */

/* Crear una calculador */

/* let operacion = prompt("ingrese la operacion")
let numero1 = Number(prompt("ingrese el primer numero"))
let numero2 = Number(prompt("ingrese el segundo numero"))
if (operacion === "+"){
    alert("El resultado de " + numero1 + " + " + numero2 + " es " + (numero1 + numero2))
} */


/* Crear una calculadora:
Solicitaremos al usuario una decision 'Si desea usar la calculadora escriba SI'
Luego si se presiono SI, se solcitara una operacion y 2 numeros, y se resolvera segun la operacion correspondiente (+ o -)
Si la operacion no existe entonces se dira 'ERROR: operacion no valida'
Al finalizar el programa de la calculadora se volvera a solictar una decision que dira 'Escriba SI si desea usar la calculadora

Se dira 'La calculadora ha finalizado' en caso de haberse acabado el bucle while
OPCIONAL: Agregar las operaciones * y /
OPCIONAL: La operacion ademas de ser + debera funcionar con su formato texto "sumar", lo mismo con el resto de operaciones
MERITORIO: Se validara que los numeros ingresados sean numeros previo al if de las oepraciones
 */

/* let decision = prompt('Si desea usar la calculadora escriba SI')
while(decision === 'SI'){
    let operacion = prompt('Ingrese la operacion + o -')
let numero1 = Number(prompt('Ingrese un numero'))
let numero2 = Number(prompt('Ingrese un numero'))
if(operacion === '+'){
    alert('El resultado de ' + numero1 + '+' + numero2 + ' es: ' + (numero1 + numero2))
}
else if (operacion === '-'){
    alert('El resultado de ' + numero1 + '-' + numero2 + ' es: ' + (numero1 - numero2))
}
else{
    alert('ERROR: operacion no valida')
}
decision = prompt('Escriba SI si desea usar la calculadora')
} */

/* METODO DE STRING */

/* let nombre = "pepe"

console.log("La cantidad de caracteres del string " + nombre + " es: " + nombre.length) */


/* let mensaje = prompt("Ingrese un mensaje")

if(mensaje.includes("tontito")){
    console.log("Hemos detectado que tu respuesta tiene contenido que puede ser ofensivo, Estas seguro que desea mandar este mensaje?")
}else{
    console.log("mensaje enviado con exito")
} */

