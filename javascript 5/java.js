const alumnos = [
    {
        nombre:"Maria",
        apellido:"Juana"
    },
    {
        nombre:"Ivana",
        apellido:"Suarez"
    },
    {
    nombre:"lucas",
    apellido:"Suarez"
    }
]


const numeros = [2,8,9,5]

//Crear una funcion llamada porDos(array) y devuelve un array de numeros multiplicados por 2
//porDos([2,4,6]) => [4,8,12]

/* const porDos = (arrayDeNumeros) =>{
    return arrayDeNumeros.map((numero) =>{
        return numero * 2
    })
}

console.log(porDos([3,7,10])) */


/* Mejorar la funcion porDos para que ahora sea la funcion,por(numero, arrayDeNumeros) */
const porDos = (multiplicador, arrayDeNumeros) =>{
    return arrayDeNumeros.map((numero) =>{
        return numero * multiplicador
    })
}

console.log(porDos(5,[3,7,10]))

//sirve para recorrer un array

alumnos.forEach((alumno) =>{
    console.log(`Hola me llamo ${alumno.nombre} ${alumno.apellido}`)
})

//crear un array en base a otro array
//map devuelve un array donde cada elemento es el retunn de la funcion
const nombreCompletos = alumnos.map((alumno) =>{
    return `${alumno.nombre} ${alumno.apellido}`
})

console.log(nombreCompletos)


// objeto literal

/* let nombreUsuario = "lucas"
let apellidoUsuario = "Suarez"
let edadUsuario = 30 */

/* const usuario = {
    nombre: "lucas",
    apellido: "Suarez",
    edad: 30,
    "pelo largo": false,
    tieneAmigos:true,
    amigos:[
        "pepe",
        "juana"
    ]
}
 */
/* console.log(usuario["pelo largo"])
console.log(usuario) */

/* console.log(
    `
    hola ${usuario.nombre} ${usuario.apellido}, cuantos años tenes?
    
    -${usuario.nombre}:hola, tengo ${usuario.edad}
    `

)

for(const alumno of alumnos){
    console.log(
    `
    hola ${alumno.nombre} ${alumno.apellido}
    `
    )
}
 */


/* 
1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array.

4)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

26)Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.

//filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])
//['remolacha', 'sorpresa', 'verde']

32)definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.

 */

/* 1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array. */

/* const suma = (array) =>{
    let suma = 0
    for(let numeroarray of array){
        suma = suma + numeroarray
    }
    return suma
} */


/* const suma = (array) =>{
    let suma = 0
    array.forEach((elemento) => {
        suma = suma + elemento
})
    return suma
}

console.log(suma([10,2,4])) */


/* ---------------------------------------------------------------------------------------------------- */
const suma2 = (array) =>{
    let suma = 0
    for(let numeroarray of array){
        suma = suma + numeroarray
            if(suma % 2 === 0)
                return suma
        }
        else{
            return false
        }
    }   
}

console.log(suma2([1,2,3]))
/* length

const filtrarPorLongitud = (numlongitud, arrayDeString) =>{
    arrayDeString.forEach(palabra)
        if(palabra.length > numlongitud){
            return palabra
    }
    }

console.log(filtrarPorLongitud(4,['dia','remolacha','azul','sorpresa','te','verde',])) */ 