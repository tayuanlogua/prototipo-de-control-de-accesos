document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("machinery-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de los campos del formulario
    const machineryId = document.getElementById("machinery-id").value;
    const machineryName = document.getElementById("machinery-name").value;
    const purchaseDate = document.getElementById("purchase-date").value;
    const machineryType = document.getElementById("machinery-type").value;
    const remarks = document.getElementById("remarks").value;

    // Muestra los valores en la consola (puedes cambiar esto para enviar a un servidor o hacer otras acciones)
    console.log("ID de Maquinaria:", machineryId);
    console.log("Nombre de Maquinaria:", machineryName);
    console.log("Fecha de Compra:", purchaseDate);
    console.log("Tipo de Maquinaria:", machineryType);
    console.log("Observaciones:", remarks);

    // Puedes añadir más lógica para procesar el formulario aquí

    // Resetea el formulario después de enviar
    form.reset();
  });
});
