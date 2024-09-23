document.addEventListener("DOMContentLoaded", function () {
  // Obtener los radios de "apoyo"
  const apoyoRadios = document.querySelectorAll('input[name="apoyo"]');
  const apoyoNombreDiv = document.getElementById("apoyo-nombre");

  // Obtener el campo de fecha y hora
  const dateTimeField = document.getElementById("date-time");

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
  dateTimeField.value = getCurrentDateTime();

  // Actualizar la fecha y hora cada segundo
  setInterval(function () {
    dateTimeField.value = getCurrentDateTime();
  }, 1000);

  // Mostrar u ocultar el campo "apoyo-nombre" basado en la selección
  apoyoRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "si") {
        apoyoNombreDiv.style.display = "block";
      } else {
        apoyoNombreDiv.style.display = "none";
      }
    });
  });
});
