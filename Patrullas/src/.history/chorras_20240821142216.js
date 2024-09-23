document.addEventListener("DOMContentLoaded", function () {
  // Obtener los radios de "support"
  const supportRadios = document.querySelectorAll('input[name="support"]');
  const supportNameDiv = document.getElementById("support-name-group");

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

  // Mostrar u ocultar el campo "support-name" basado en la selección
  supportRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "yes") {
        supportNameDiv.style.display = "block";
      } else {
        supportNameDiv.style.display = "none";
      }
    });
  });
});
