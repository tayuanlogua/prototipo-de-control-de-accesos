// script.js

document.addEventListener("DOMContentLoaded", function () {
  const supportRadios = document.querySelectorAll('input[name="support"]');
  const supportNameGroup = document.getElementById("support-name-group");
  const supportNameInput = document.getElementById("support-name");

  // Función para mostrar/ocultar el campo "Nombre Apoyo Hacienda"
  function toggleSupportNameGroup() {
    const selectedValue = document.querySelector(
      'input[name="support"]:checked'
    ).value;
    if (selectedValue === "yes") {
      supportNameGroup.style.display = "block";
      supportNameInput.required = true; // Hacer el campo obligatorio
    } else {
      supportNameGroup.style.display = "none";
      supportNameInput.required = false; // No hacer el campo obligatorio
    }
  }

  // Inicializar el estado del campo "Nombre Apoyo Hacienda" al cargar la página
  const initialValue = document.querySelector('input[name="support"]:checked');
  if (initialValue) {
    toggleSupportNameGroup();
  }

  // Añadir eventos para actualizar el estado del campo cuando cambie la selección de radio
  supportRadios.forEach((radio) => {
    radio.addEventListener("change", toggleSupportNameGroup);
  });
});
