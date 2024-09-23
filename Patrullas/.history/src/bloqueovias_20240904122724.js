document.addEventListener("DOMContentLoaded", () => {
  // Función para obtener la fecha y hora actual
  function setFechaHora() {
    const fechaHoraInput = document.getElementById("fechaHora");
    const fechaHora = new Date().toLocaleString();
    fechaHoraInput.value = fechaHora;
  }

  // Función para obtener la ubicación actual usando la API de Geolocalización
  function setUbicacion() {
    const ubicacionInput = document.getElementById("ubicacion");

    // Verificar si la geolocalización está disponible
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          ubicacionInput.value = `Lat: ${lat.toFixed(6)}, Lon: ${lon.toFixed(
            6
          )}`;
        },
        (error) => {
          console.error("Error obteniendo la ubicación:", error);
          ubicacionInput.value = "No se pudo obtener la ubicación";
        }
      );
    } else {
      ubicacionInput.value = "Geolocalización no disponible";
    }
  }

  // Función para agregar un campo para equipos
  function addEquipoField() {
    const container = document.getElementById("equiposContainer");
    const input = document.createElement("input");
    input.type = "text";
    input.name = "equiposBloqueo[]";
    input.placeholder = "Equipo";
    container.appendChild(input);
  }

  document
    .getElementById("addEquipo")
    .addEventListener("click", addEquipoField);

  setFechaHora();
  setUbicacion();
});
