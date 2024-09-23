// Obtener la ubicación automática del usuario
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("location").value = "Geolocalización no soportada";
  }
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  document.getElementById("location").value = `Lat: ${lat}, Lon: ${lon}`;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("location").value = "Permiso denegado";
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("location").value = "Información no disponible";
      break;
    case error.TIMEOUT:
      document.getElementById("location").value = "La solicitud expiró";
      break;
    case error.UNKNOWN_ERROR:
      document.getElementById("location").value = "Error desconocido";
      break;
  }
}

// Ejecutar la función de geolocalización al cargar la página
window.onload = function () {
  getLocation();
};
