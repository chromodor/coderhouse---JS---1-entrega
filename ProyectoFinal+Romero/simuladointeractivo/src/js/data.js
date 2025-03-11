const obtenerDatos = async () => {
  try {
    const respuesta = await fetch("./assets/data/sample-data.json");
    if (!respuesta.ok) {
      throw new Error("La respuesta de la red no fue satisfactoria");
    }
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error("Ha habido un problema con tu operación de fetch:", error);
  }
};

const obtenerProductoPorId = (datos, id) => {
  return datos.productos.find((producto) => producto.id === id);
};

const obtenerTodosLosProductos = (datos) => {
  return datos.productos;
};

const obtenerServicios = (datos) => {
  return datos.servicios;
};

export {
  obtenerDatos,
  obtenerProductoPorId,
  obtenerTodosLosProductos,
  obtenerServicios,
};
