// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el campo de fecha y hora
  const dateTimeField = document.getElementById("date-time");

  // Verificar que el campo de fecha y hora existe
  if (!dateTimeField) {
    console.error("No se encontró el campo con ID 'date-time'.");
    return;
  }

  // Función para obtener la fecha y hora actuales en formato legible
  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  // Establecer la fecha y hora actuales en el campo correspondiente
  function updateDateTime() {
    dateTimeField.value = getCurrentDateTime();
  }

  // Actualizar la fecha y hora inmediatamente al cargar la página
  updateDateTime();

  // Actualizar la fecha y hora cada segundo
  setInterval(updateDateTime, 1000);
});
