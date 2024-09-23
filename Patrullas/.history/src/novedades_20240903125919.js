// Función para mostrar la hora actual
function mostrarHoraActual() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, "0");
  const minutos = ahora.getMinutes().toString().padStart(2, "0");
  const segundos = ahora.getSeconds().toString().padStart(2, "0");
  const horaActual = `${horas}:${minutos}:${segundos}`;
  document.getElementById(
    "current-time"
  ).textContent = `Hora actual: ${horaActual}`;
}

// Actualizar la hora cada segundo
setInterval(mostrarHoraActual, 1000);
mostrarHoraActual(); // Mostrar hora inmediatamente
