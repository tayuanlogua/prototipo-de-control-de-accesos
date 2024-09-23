document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("transformadores-form");
  const dateTimeField = document.getElementById("date-time");

  form.addEventListener("submit", function (event) {
    // Obtener la fecha y hora actuales
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // Puedes ajustar el formato según tus necesidades

    // Asignar la fecha y hora al campo oculto
    dateTimeField.value = formattedDateTime;

    // Opcional: Puedes evitar el envío del formulario para pruebas
    // event.preventDefault();
  });
});
