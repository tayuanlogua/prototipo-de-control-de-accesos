document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById('current-date');
  const timeElement = document.getElementById('current-time');
  const locationElement = document.getElementById('location');

  function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const date = `${year}-${month}-${day}`;
    const time = `${hours}:${minutes}:${seconds}`;
    
    dateElement.textContent = `Fecha: ${date}`;
    timeElement.textContent = `Hora: ${time}`;
  }

  function updateLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // Aquí puedes usar una API para obtener una dirección legible si es necesario
          locationElement.textContent = `Ubicación: Lat ${latitude.toFixed(6)}, Lon ${longitude.toFixed(6)}`;
        },
        function () {
          locationElement.textContent = 'Ubicación: No disponible';
        }
      );
    } else {
      locationElement.textContent = 'Ubicación: Geolocalización no soportada';
    }
  }

  updateDateTime();
  updateLocation();
  setInterval(updateDateTime, 1000); // Actualizar la hora cada segundo
});

