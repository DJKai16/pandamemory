const productos = [
    { id: 1, nombre: "Pulsera de Hilo", descripcion: "Pulsera de hilo, hecho a mano y con la mejor calidad de hilos, lleva un dijen de acero", precio: 24.98, imagen: "img/munay_hilo_an3.jpg" },
    { id: 2, nombre: "Smartwatch", descripcion: "Reloj Smartwatsh", precio: 80.89, imagen: "img/smartwash1.jpg" },
    { id: 3, nombre: "Pulsera con dijen ojo turco", descripcion: "Hermosa pulsera de hilo con dijen de ojito turco para el mal ojo del bebe o para uno mismo. diseño nuevo y elegante", precio: 24.99, imagen: "img/munay_hilo_an4.jpg" },
    { id: 4, nombre: "pulsera de hilo", descripcion: "Hermosa pulsera de hilo hecha a mano de la mejor calidad, con dijen de caero inoxidable.", precio: 24.99, imagen: "img/munay_hilo_an2.jpg" },

    { id: 1, nombre: "Pulsera de Hilo", descripcion: "Pulsera de hilo, hecho a mano y con la mejor calidad de hilos, lleva un dijen de acero", precio: 24.98, imagen: "img/munay_hilo_an2.jpg" },
    { id: 2, nombre: "Smartwatch", descripcion: "Reloj Smartwatsh", precio: 80.89, imagen: "img/smartwash1.jpg" },
    { id: 3, nombre: "Pulsera con dijen ojo turco", descripcion: "Hermosa pulsera de hilo con dijen de ojito turco para el mal ojo del bebe o para uno mismo. diseño nuevo y elegante", precio: 24.99, imagen: "img/munay_hilo_an4.jpg" },
    { id: 4, nombre: "Mochila KWAI", descripcion: "Hermosa mochila kwai para regalar.", precio: 24.99, imagen: "img/mochila1.jpg" }
    
  ];

  const contenedorProductos = document.getElementById("productos");
  const listaCarrito = document.getElementById("lista-carrito");
  const modal = document.getElementById("modal-terminos");
  const enlaceMostrar = document.getElementById("mostrar-terminos");
  const botonCerrar = document.getElementsByClassName("cerrar-modal")[0];
  const botonMostrarFormulario = document.getElementById("mostrar-formulario");
  const formulario = document.getElementById("formulario");
  const resumenCompra = document.getElementById("resumen-compra");
  const subtotalElement = document.getElementById("subtotal");
  const envioElement = document.getElementById("envio");
  const totalElement = document.getElementById("total");
  
  // Costo de envío
  const costoEnvio = 10;
  
  // Función para mostrar los productos en la página
  function mostrarProductos() {
    contenedorProductos.innerHTML = '';
    productos.forEach(producto => {
      const elementoProducto = document.createElement("div");
      elementoProducto.classList.add("producto");
      elementoProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>Precio: S/ ${producto.precio}</p>
        <button class="boton-comprar" onclick="agregarAlCarrito(${producto.id})">Comprar</button>
      `;
      contenedorProductos.appendChild(elementoProducto);
    });
  }
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(idProducto) {
    const productoSeleccionado = productos.find(producto => producto.id === idProducto);
    const elementoCarrito = document.createElement("li");
    elementoCarrito.textContent = `${productoSeleccionado.nombre} - $${productoSeleccionado.precio}`;
    listaCarrito.appendChild(elementoCarrito);
     // Llamar a mostrarResumenCompra para actualizar el resumen de la compra
     mostrarResumenCompra();
  }
  
  // Evento para mostrar el formulario al hacer clic en "Realizar Compra"
  botonMostrarFormulario.addEventListener("click", function() {
    formulario.style.display = "block";
  });
  
// Función para enviar los datos de compra al servidor
function enviarCompraAlServidor(datos) {
  // Simulación de AJAX - Aquí debes reemplazar esta parte con una llamada real a tu servidor
  console.log("Enviando datos al servidor:", datos);
  alert("¡Compra realizada con éxito! En un Momento se comunicara contigo un Ascesor de ventas.");
  
  // Limpiar el carrito
  limpiarCarrito();
  
  // Restablecer el formulario y ocultarlo
  formulario.reset();
  formulario.display = "none";
  
  // Ocultar el resumen de la compra
  resumenCompra.style.display = "none";
}

// Evento para manejar el envío del formulario de datos del cliente
document.getElementById("datos-cliente").addEventListener("submit", function(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const aceptarTerminos = document.getElementById("aceptar-terminos").checked;
  
  if (!aceptarTerminos) {
    alert("Por favor, acepte los términos y condiciones.");
    return;
  }
  
  // Datos a enviar al servidor
  const datos = {
    nombre: nombre,
    email: email,
    carrito: obtenerProductosCarrito() // Esta función debería devolver los productos en el carrito como un array o una cadena JSON
  };
  
  // Simulación de envío al servidor
  enviarCompraAlServidor(datos);
  
  // Mostrar resumen de compra
  mostrarResumenCompra();
});

// Función para mostrar el resumen de compra
function mostrarResumenCompra() {
  // Calcular subtotal y total
  let subtotal = 0;
  Array.from(listaCarrito.children).forEach(item => {
    const precioTexto = item.textContent.split(' - ')[1].substring(1); // Obtener el texto del precio y eliminar el símbolo $
    const precio = parseFloat(precioTexto);
    subtotal += precio;
  });
  const total = subtotal + costoEnvio;
  
  // Mostrar resumen de compra
  subtotalElement.textContent = `Subtotal: S/${subtotal.toFixed(2)}`;
  envioElement.textContent = `Costo de envío: S/${costoEnvio.toFixed(2)}`;
  totalElement.textContent = `Total: S/${total.toFixed(2)}`;
  resumenCompra.style.display = "block";
}

// Función para obtener los productos en el carrito
function obtenerProductosCarrito() {
  const productosCarrito = [];
  Array.from(listaCarrito.children).forEach(item => {
    const producto = {
      nombre: item.textContent.split(' - ')[0], // Obtener el nombre del producto
      precio: parseFloat(item.textContent.split(' - ')[1].substring(1)) // Obtener el precio del producto
    };
    productosCarrito.push(producto);
  });
  return productosCarrito;
}

// Función para limpiar el carrito de compras
function limpiarCarrito() {
  listaCarrito.innerHTML = ''; // Vaciar el contenido del carrito
}



// Función para obtener los productos en el carrito
function obtenerProductosCarrito() {
  const productosCarrito = [];
  Array.from(listaCarrito.children).forEach(item => {
    const producto = {
      nombre: item.textContent.split(' - ')[0], // Obtener el nombre del producto
      precio: parseFloat(item.textContent.split(' - ')[1].substring(1)) // Obtener el precio del producto
    };
    productosCarrito.push(producto);
  });
  return productosCarrito;
}

  
  
  // Función para mostrar el resumen de compra
// Función para mostrar el resumen de compra
function mostrarResumenCompra() {
  // Calcular subtotal
  let subtotal = 0;
  Array.from(listaCarrito.children).forEach(item => {
    const precioTexto = item.textContent.split(' - ')[1].substring(1); // Obtener el texto del precio y eliminar el símbolo $
    const precio = parseFloat(precioTexto);
    subtotal += precio;
  });
  // Calcular total
  const total = subtotal + costoEnvio;
  // Mostrar resumen de compra
  subtotalElement.textContent = `Subtotal: S/ ${subtotal.toFixed(2)}`;
  envioElement.textContent = `Costo de envío: S/ ${costoEnvio.toFixed(2)}`;
  totalElement.textContent = `Total: S/ ${total.toFixed(2)}`;
  resumenCompra.style.display = "block";
}

  // Mostrar modal al hacer clic en el enlace
  enlaceMostrar.onclick = function() {
    modal.style.display = "block";
  }
  
  // Evento para mostrar el formulario al hacer clic en "Realizar Compra"
  botonMostrarFormulario.addEventListener("click", function() {
    formulario.style.display = "block";
  });
  
  // Mostrar modal al hacer clic en el enlace
  enlaceMostrar.onclick = function() {
    modal.style.display = "block";
  }
// Cerrar modal al hacer clic en el botón de cerrar
botonCerrar.onclick = function() {
  modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Llamar a la función para mostrar los productos cuando se cargue la página
window.onload = mostrarProductos;
