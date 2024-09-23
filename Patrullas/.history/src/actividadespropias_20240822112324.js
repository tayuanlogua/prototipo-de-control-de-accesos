// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("activities-form");

  form.addEventListener("submit", function (event) {
    // Prevenir el envío del formulario si los campos están vacíos
    const inputs = form.querySelectorAll("input");
    let allFilled = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFilled = false;
        input.style.borderColor = "red"; // Resaltar los campos vacíos
      } else {
        input.style.borderColor = "#ddd"; // Restaurar el borde normal
      }
    });

    if (!allFilled) {
      event.preventDefault(); // Evitar el envío si hay campos vacíos
      alert("Por favor, complete todos los campos.");
    } else {
      alert("Formulario enviado con éxito.");
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
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
  });
});
