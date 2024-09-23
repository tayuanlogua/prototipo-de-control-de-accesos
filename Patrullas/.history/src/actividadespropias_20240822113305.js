// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("activities-form");

  // Verificar que el formulario existe
  if (!form) {
    console.error("No se encontró el formulario con ID 'activities-form'.");
    return;
  }

  form.addEventListener("submit", function (event) {
    // Prevenir el envío del formulario si los campos están vacíos
    const inputs = form.querySelectorAll("input");
    let allFilled = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "" && input.id !== "date-time") {
        // No verificar el campo de fecha y hora
        allFilled = false;
        input.classList.add("error"); // Añadir clase de error
      } else {
        input.classList.remove("error"); // Quitar clase de error
      }
    });

    if (!allFilled) {
      event.preventDefault(); // Evitar el envío si hay campos vacíos
      alert("Por favor, complete todos los campos.");
    } else {
      alert("Formulario enviado con éxito.");
    }
  });

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
    // En el formato 'YYYY-MM-DDTHH:MM'
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  // Establecer la fecha y hora actuales en el campo correspondiente
  dateTimeField.value = getCurrentDateTime();

  // Actualizar la fecha y hora cada minuto (no cada segundo)
  setInterval(function () {
    dateTimeField.value = getCurrentDateTime();
  }, 60000); // Actualizar cada minuto
});
