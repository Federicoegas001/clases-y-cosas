const productos = [
    {
        id: 1,
        precio: 10.99,
        nombre: "Producto 1"
    },
    {
        id: 2,
        precio: 5.99,
        nombre: "Producto 2"
    },
    {
        id: 3,
        precio: 8.99,
        nombre: "Producto 3"
    }
];


console.log(productos.map((producto) => ({...producto, precio:'$' + producto.precio} )))

//metodo find

/* console.log(productos.find((producto) => producto.id == 2)) */
/* console.log(find(2, productos)) */


const find = (array, callback) =>{
    for(const element of array){
        if(callback(element)/* Esto debe devolver un boolean */){
            return element
        }
    }
}
console.log(find(productos, (producto) => producto.id == 2))


//metodo avanzado Filter

/* console.log(productos.filter((producto) =>{
    return producto.precio > 7
})) */


const mensajesRedSocial = [
    "¡Hola a todos! Soy nuevo aquí. ¿Alguien me puede decir cómo funciona esto?",
    "Felicidades a todos los gTonToraduados. ¡Han trabajado muy duro!",
    "¡Qué día tan maravilloso para ir a la playa! ¿Quién se apunta?",
    "¡Estoy emocionado de compartir con ustedes mi nuevo proyecto! Pronto les daré más detalles.",
    "¿Alguien tiene recTontoomendaciones para un buen tonto restaurante en la ciudad?",
    "¡Hoy es mi cuTontompleaños! ¡Feliz de celebrarlo con todos ustedes!",
    "¡Acabo de publicar un nuevo artículo en mi blog! Échale un vistazo y déjame tus comentarios.",
    "¿Alguien sabe dónde puedo encontrar un buen tutorial de JavaScript?",
    "Me encanta esta red social. Conocer gente nueva y compartir ideas es genial.",
    "¡Qué día tan agotador! Necesito unas vacaciones urgentemente tonto.",
];














/* 
tenemos un array de mensajes y debemos obtener uinicamente los mensajes donde se haya una infraccion 
(la palabra tonto esta estrictamenrte prohebida)

*/

/* let stringABuscar = prompt('ingrese algo para buscar')


const result = mensajesRedSocial.filter((mensaje) => mensaje.toUpperCase().includes(stringABuscar.toUpperCase()))


alert(result.join('-\n')) */


/* console.log(mensajesRedSocial.filter((palabra) => palabra.toUpperCase().includes("tonto".toUpperCase()))) */





const wrapping = (gifts) => {
    return gifts.map((gift) => {
        return (
            '*'.repeat(gift.length + 2) + '\n*' + gift + '*\n' + '*'.repeat(gift.length + 2) 
        )
    })
}