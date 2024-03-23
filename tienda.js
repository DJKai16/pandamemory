// Funcionalidades JavaScript
const productos = [
    { id: 1, nombre: "Mochila Kawiia", descripcion: "Juego de mochila kawiia", precio: 50.98, imagen: "img/mochila1.jpg" },
    { id: 2, nombre: "Smartwatch", descripcion: "Reloj Smartwatsh", precio: 80.89, imagen: "img/smartwash1.jpg" },
    { id: 3, nombre: "Parlante Bluetooth", descripcion: "Parlante que siempre va contigo a donde quieras", precio: 49.99, imagen: "img/parlante2.jpg" },
    { id: 4, nombre: "Parlantes Bluetooth", descripcion: "Hermoso y potente parlante a bluetooth.", precio: 55.99, imagen: "img/parlante1.jpg" }
  ];
  

  const contenedorProductos = document.getElementById("productos");
  const listaCarrito = document.getElementById("lista-carrito");
  const modal = document.getElementById("modal-terminos");
  const enlaceMostrar = document.getElementById("mostrar-terminos");
  const botonCerrar = document.getElementsByClassName("cerrar-modal")[0];
  const botonMostrarFormulario = document.getElementById("mostrar-formulario");
  const formulario = document.getElementById("formulario");
  
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
        <p>Precio: $${producto.precio}</p>
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
  }
  
  // Evento para mostrar el formulario al hacer clic en "Realizar Compra"
  botonMostrarFormulario.addEventListener("click", function() {
    formulario.style.display = "block";
  });
  
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
    const productosEnCarrito = Array.from(listaCarrito.children).map(item => item.textContent);
    // Aquí puedes enviar los datos del cliente y los productos en el carrito al servidor para procesar el pedido
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Productos en el carrito:", productosEnCarrito);
    // Una vez enviado el pedido, podrías limpiar el carrito y mostrar un mensaje de confirmación
    listaCarrito.innerHTML = '';
    alert("¡Gracias por tu pedido! Pronto te contactaremos para la entrega.");
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