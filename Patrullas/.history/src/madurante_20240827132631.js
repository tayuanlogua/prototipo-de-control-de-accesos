// app.js

// Al cargar la página, completa la fecha y la ubicación automáticamente
document.addEventListener("DOMContentLoaded", function () {
  // Completa la fecha actual
  const fechaInput = document.getElementById("fecha");
  const fechaActual = new Date().toISOString().split("T")[0]; // Formato YYYY-MM-DD
  fechaInput.value = fechaActual;

  // Completa la ubicación utilizando la API de geolocalización
  const ubicacionInput = document.getElementById("ubicacion");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        ubicacionInput.value = `Lat: ${latitud}, Lon: ${longitud}`;
      },
      function (error) {
        console.error("Error obteniendo la ubicación:", error);
        ubicacionInput.value = "Ubicación no disponible";
      }
    );
  } else {
    ubicacionInput.value = "Geolocalización no soportada por el navegador";
  }
});
