const productosPC = [
    {
      precio: 999,
      descripcion: "Portátil de alta gama con procesador Intel Core i7 y tarjeta gráfica NVIDIA GeForce RTX 3080.",
      titulo: "Portátil Gaming"
    },
    {
      precio: 799,
      descripcion: "Ordenador de escritorio con procesador AMD Ryzen 7 y tarjeta gráfica AMD Radeon RX 6700 XT.",
      titulo: "Ordenador de Escritorio"
    },
    {
      precio: 249,
      descripcion: "Monitor de 24 pulgadas Full HD con tecnología IPS y tiempo de respuesta de 1 ms.",
      titulo: "Monitor"
    },
    {
      precio: 129,
      descripcion: "Teclado mecánico RGB con interruptores Cherry MX y diseño compacto.",
      titulo: "Teclado"
    },
    {
      precio: 79,
      descripcion: "Ratón inalámbrico ergonómico con sensor óptico de alta precisión y 6 botones programables.",
      titulo: "Ratón"
    }
  ];


const CodeHTML = document.querySelector(".prueba")

productosPC.forEach((producto) =>{
    CodeHTML.innerHTML += `
    <h2>${producto.titulo}</h2>
    <span>Precio: $${producto.precio}</span>
    <p>${producto.descripcion}</p>
    <button>Comprar</button>
    <hr>`
})

