document.addEventListener("DOMContentLoaded", () => {
  // Función para obtener la fecha y hora actual
  function setFechaHora() {
    const fechaHoraInput = document.getElementById("fechaHora");
    const fechaHora = new Date().toLocaleString();
    fechaHoraInput.value = fechaHora;
  }

  // Función para obtener la ubicación (esto es solo un ejemplo, reemplazar con una API real si es necesario)
  function setUbicacion() {
    // Aquí puedes usar una API de geolocalización para obtener la ubicación real
    // Por ahora, solo se establece un valor de ejemplo.
    const ubicacionInput = document.getElementById("ubicacion");
    ubicacionInput.value = "Ubicación Actual"; // Reemplazar con una función real
  }

  setFechaHora();
  setUbicacion();
});
