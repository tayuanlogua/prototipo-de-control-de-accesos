document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("consignment-form");
  const consignmentType = document.getElementById("consignment-type");
  const invasionGroup = document.querySelector(".invasion-group");

  consignmentType.addEventListener("change", () => {
    if (consignmentType.value === "invasion") {
      invasionGroup.style.display = "block";
    } else {
      invasionGroup.style.display = "none";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de los campos del formulario
    const consignmentCode = document.getElementById("consignment-code").value;
    const haciendaSuerte = document.getElementById("hacienda-suerte").value;
    const consignmentTypeValue =
      document.getElementById("consignment-type").value;
    const newDamages = document.getElementById("new-damages").value;
    const support = document.getElementById("support").value;
    const name = document.getElementById("name").value;
    const file = document.getElementById("file").value;
    const radication = document.getElementById("radication")
      ? document.getElementById("radication").value
      : "";

    // Muestra los valores en la consola (puedes cambiar esto para enviar a un servidor o hacer otras acciones)
    console.log("Código de Consigna:", consignmentCode);
    console.log("Hacienda o Suerte:", haciendaSuerte);
    console.log("Tipo de Consigna:", consignmentTypeValue);
    console.log("Daños Nuevos:", newDamages);
    console.log("Apoyo:", support);
    console.log("Nombre:", name);
    console.log("Ficha:", file);
    console.log("¿Se radicó?:", radication);

    // Puedes añadir más lógica para procesar el formulario aquí

    // Resetea el formulario después de enviar
    form.reset();
    invasionGroup.style.display = "none"; // Oculta el grupo de invasión al resetear
  });
});
