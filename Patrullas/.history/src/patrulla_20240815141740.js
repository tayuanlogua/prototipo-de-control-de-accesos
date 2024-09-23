// Obtener el formulario y los elementos de selección
const formularioPatrullas = document.getElementById("patrullas-form");
const actividadPropia = document.getElementById("actividad-propia");
const novedades = document.getElementById("novedades");

// Evento de envío del formulario
formularioPatrullas.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  // Validar que se haya seleccionado una actividad y una novedad
  if (actividadPropia.value === "" || novedades.value === "") {
    alert("Por favor, seleccione una actividad propia y una novedad.");
    return;
  }

  // Aquí puedes agregar la lógica para enviar el formulario o manejar los datos
  const datosFormulario = {
    actividad: actividadPropia.value,
    novedad: novedades.value,
  };

  // Ejemplo de mostrar los datos en la consola
  console.log("Datos del Formulario:", datosFormulario);

  // Aquí puedes agregar el envío de los datos al servidor o cualquier otra acción
  alert("Formulario enviado con éxito.");

  // Reiniciar el formulario después de enviarlo
  formularioPatrullas.reset();
});
