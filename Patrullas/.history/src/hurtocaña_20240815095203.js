window.onload = function () {
  // Obtener fecha y hora actual del sistema
  const fecha = new Date();
  const fechaFormateada = fecha.toLocaleDateString();
  const horaFormateada = fecha.toLocaleTimeString();

  // Asignar la fecha y hora a los campos correspondientes
  document.getElementById("fecha").value = fechaFormateada;
  document.getElementById("hora").value = horaFormateada;
};

document
  .getElementById("hurtoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulario enviado con éxito.");
    // Aquí puedes añadir el código para procesar el formulario, como enviarlo a un servidor
  });
