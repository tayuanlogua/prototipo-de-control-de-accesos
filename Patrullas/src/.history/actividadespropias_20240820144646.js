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
});
