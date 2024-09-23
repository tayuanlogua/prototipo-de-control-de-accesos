document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("drones-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de los campos del formulario
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const hacienda = document.getElementById("hacienda").value;
    const suerte = document.getElementById("suerte").value;
    const contractorCompany =
      document.getElementById("contractor-company").value;
    const contractorSupervisor = document.getElementById(
      "contractor-supervisor"
    ).value;
    const performed = document.querySelector(
      'input[name="performed"]:checked'
    ).value;
    const executed = document.querySelector(
      'input[name="executed"]:checked'
    ).value;
    const observations = document.getElementById("observations").value;
    const photo = document.getElementById("photo").files[0]; // Obtiene el archivo de la foto

    // Muestra los valores en la consola (puedes cambiar esto para enviar a un servidor o hacer otras acciones)
    console.log("Ubicación:", location);
    console.log("Fecha:", date);
    console.log("Hacienda:", hacienda);
    console.log("Suerte:", suerte);
    console.log("Empresa Contratista:", contractorCompany);
    console.log("Cabo de Empresa Contratista:", contractorSupervisor);
    console.log("¿Se realizó?:", performed);
    console.log("¿Se efectuó?:", executed);
    console.log("Observaciones:", observations);
    console.log("Foto:", photo ? photo.name : "No seleccionada");

    // Aquí puedes añadir más lógica para procesar el formulario

    // Resetea el formulario después de enviar
    form.reset();
  });
});
