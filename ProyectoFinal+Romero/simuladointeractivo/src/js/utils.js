function formatearMoneda(cantidad) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
  }).format(cantidad);
}

function validarEntrada(entrada, tipo) {
  if (tipo === "number") {
    return !isNaN(entrada) && entrada !== "";
  }
  if (tipo === "text") {
    return entrada.trim() !== "";
  }
  return false;
}

function retrasarEjecucion(funcion, retraso) {
  let temporizador;
  return function (...args) {
    const contexto = this;
    clearTimeout(temporizador);
    temporizador = setTimeout(() => funcion.apply(contexto, args), retraso);
  };
}

function parsearJSON(respuesta) {
  return respuesta.json().catch(() => {
    console.error("Error al parsear JSON:", respuesta);
    throw new Error("Respuesta JSON inválida");
  });
}
