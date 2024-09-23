// Función para obtener y mostrar la fecha actual
function displayDateTime() {
    const currentDateElement = document.getElementById('current-date');
    const currentTimeElement = document.getElementById('current-time');
  
    const currentDate = new Date();
  
    // Formatear la fecha (dd/mm/yyyy)
    const formattedDate = currentDate.toLocaleDateString('es-ES');
    // Formatear la hora (hh:mm:ss)
    const formattedTime = currentDate.toLocaleTimeString('es-ES');
  
    // Mostrar la fecha y hora en la página
    currentDateElement.textContent = `Fecha: ${formattedDate}`;
    currentTimeElement.textContent = `Hora: ${formattedTime}`;
  }
  
  // Función para obtener la ubicación del usuario
  function displayLocation() {
    const locationElement = document.getElementById('location');
  
    // Comprobar si el navegador soporta geolocalización
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          // Mostrar las coordenadas en la página
          locationElement.textContent = `Ubicación: Latitud: ${lat}, Longitud: ${lon}`;
        },
        function () {
          locationElement.textContent = 'Ubicación: No se pudo obtener la ubicación';
        }
      );
    } else {
      locationElement.textContent = 'Ubicación: Geolocalización no soportada';
    }
  }
  
  // Llamar a las funciones cuando la página se cargue
  document.addEventListener('DOMContentLoaded', function () {
    displayDateTime();
    displayLocation();
  });
  