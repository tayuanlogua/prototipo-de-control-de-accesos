document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("burnt-cane-form");
  const supportSelect = document.getElementById("support");
  const supportDetails = document.getElementById("support-details");

  supportSelect.addEventListener("change", () => {
    if (supportSelect.value === "yes") {
      supportDetails.style.display = "block";
    } else {
      supportDetails.style.display = "none";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de los campos del formulario
    const dateTime = document.getElementById("date-time").value;
    const hacienda = document.getElementById("hacienda").value;
    const suerte = document.getElementById("suerte").value;
    const novelty = document.getElementById("novelty").value;
    const support = document.getElementById("support").value;
    const supportName = document.getElementById("support-name")
      ? document.getElementById("support-name").value
      : "";
    const file = document.getElementById("file").value;
    const photo = document.getElementById("photo").files[0]; // Obtiene el archivo de la foto
    const noveltyDescription = document.getElementById(
      "novelty-description"
    ).value;

    // Muestra los valores en la consola (puedes cambiar esto para enviar a un servidor o hacer otras acciones)
    console.log("Fecha y Hora:", dateTime);
    console.log("Hacienda:", hacienda);
    console.log("Suerte:", suerte);
    console.log("Novedad:", novelty);
    console.log("Apoyo:", support);
    console.log("Nombre del Apoyo:", supportName);
    console.log("Ficha:", file);
    console.log("Foto:", photo ? photo.name : "No seleccionada");
    console.log("Descripción de Novedad:", noveltyDescription);

    // Puedes añadir más lógica para procesar el formulario aquí

    // Resetea el formulario después de enviar
    form.reset();
    supportDetails.style.display = "none"; // Oculta el detalle del apoyo al resetear
  });
});
