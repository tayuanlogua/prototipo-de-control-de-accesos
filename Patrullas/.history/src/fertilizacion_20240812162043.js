document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("fertilization-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de los campos del formulario
    const location = document.getElementById("location").value;
    const hacienda = document.getElementById("hacienda").value;
    const suerte = document.getElementById("suerte").value;
    const fertilizationFront = document.getElementById(
      "fertilization-front"
    ).value;
    const cabo = document.getElementById("cabo").value;
    const equipment = document.getElementById("equipment").value;
    const numberOfEquipment = document.getElementById(
      "number-of-equipment"
    ).value;
    const toll = document.getElementById("toll").value;
    const photo = document.getElementById("photo").files[0]; // Obtiene el archivo de la foto

    // Muestra los valores en la consola (puedes cambiar esto para enviar a un servidor o hacer otras acciones)
    console.log("Ubicación:", location);
    console.log("Hacienda:", hacienda);
    console.log("Suerte:", suerte);
    console.log("Frente de Fertilización:", fertilizationFront);
    console.log("Cabo:", cabo);
    console.log("Equipos:", equipment);
    console.log("Número de Equipos:", numberOfEquipment);
    console.log("Tolvas:", toll);
    console.log("Foto:", photo ? photo.name : "No seleccionada");

    // Puedes añadir más lógica para procesar el formulario aquí

    // Resetea el formulario después de enviar
    form.reset();
  });
});
