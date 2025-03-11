// Archivo principal de JavaScript para el simulador interactivo

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  cargarDatos();
  document
    .getElementById("quote-form")
    .addEventListener("submit", manejarFormulario);
});

// Cargar datos desde el archivo JSON
function cargarDatos() {
  fetch("./assets/data/sample-data.json")
    .then((response) => response.json())
    .then((data) => {
      inicializarApp(data);
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
}

// Inicializar la aplicación con los datos cargados
function inicializarApp(data) {
  // Ejemplo de procesamiento de datos y actualización de la interfaz de usuario
  const listaProductos = document.getElementById("product-list");
  data.productos.forEach((producto) => {
    const itemProducto = document.createElement("div");
    itemProducto.className = "product-item";
    itemProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito('${producto.id}')">Agregar al Carrito</button>
        `;
    listaProductos.appendChild(itemProducto);
  });
}

// Función para manejar la adición de artículos al carrito
function agregarAlCarrito(productId) {
  // Lógica para agregar el producto al carrito
  console.log(`Producto ${productId} agregado al carrito.`);
  // Actualizar la visualización del carrito o realizar otras acciones
}

// Función para manejar el envío del formulario
function manejarFormulario(event) {
  event.preventDefault();
  const productoSeleccionado = document.getElementById("product").value;
  const cantidad = parseInt(document.getElementById("quantity").value);
  obtenerDatos().then((data) => {
    const producto = data.productos.find(
      (p) => p.id === parseInt(productoSeleccionado.replace("product", ""))
    );
    if (producto) {
      const total = producto.precio * cantidad;
      document.getElementById("quote-result").innerText = `Total: $${total}`;
    } else {
      document.getElementById("quote-result").innerText =
        "Producto no encontrado.";
    }
  });
}

// Se pueden agregar funciones adicionales para interacciones del usuario aquí
