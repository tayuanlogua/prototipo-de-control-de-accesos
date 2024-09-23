document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("burnt-cane-form");
  const distritoSelect = document.getElementById("distrito");
  const haciendaSelect = document.getElementById("hacienda");
  const supportSelect = document.getElementById("support");
  const supportDetails = document.getElementById("support-details");

  const haciendas = {
    1: [
      "Rio Frayle",
      "La Industria",
      "Salsipuedes",
      "Pergola II",
      "Pergola III",
      "ACUARIO",
      "PERGOLA I",
      "Vallecito",
      "Papayal",
      "La Linda",
      "El Rincon",
      "Papayalito",
      "El Tablon Bajo",
      "Cantarohondo",
      "El Tablon Alto",
      "El Baranco",
      "Santa Barbara Participacion",
      "La Michela",
    ],
    2: [
      "Orocue",
      "Palace",
      "San Isidro",
      "Rancho Grande",
      "Romano Barney",
      "Taula Mejia",
      "Vanegas",
      "Holandita Adecañas",
      "Canada Adecañas",
      "Canada",
      "Canada Agrocañas",
      "Canada Esmeralda",
      "Hato",
      "Arado",
      "Yarumales",
      "Mendiola La Paila",
      "Benitez",
      "Hato San Carlos",
      "Mundo Cabaña",
      "La Munda Esmeralda",
      "Canada Cabaña",
      "Hato Agrocañas",
      "Hato Cavi",
    ],
    3: [
      "Cabaña",
      "Caldas",
      "Pilamo",
      "Taula Chiman",
      "Normandia",
      "Santa Helena",
      "Cabaña II",
      "Muchilanga Naranjito",
      "Caldas Agroindustrias",
      "Normandia Agroindustrias",
      "Taula Chiman Agroindistria",
      "Humberto Lopez Cabaña",
      "Arado Adecañas",
      "Toribio Rivas Esmeralda",
      "Cabaña Rabinovich",
      "Naranjo Agrocañas",
      "Naranjo",
      "Muchilanga",
      "Taula Ana",
      "Naranjo Esmeralda",
      "Gobierno Negro",
      "Granada",
      "Cabaña Agrocañas",
      "Naranjo Cabaña",
      "Muchilanga Cabaña",
      "Vegas Cabaña",
      "Alvaro Naranjo Poveda Arrey",
      "El Rebaño",
      "Dulce Jugada Participacion",
    ],
    4: [
      "Cuprecia",
      "Laguna",
      "La Gitana",
      "Vista Hermosa",
      "Nanaluisa",
      "Lote Toro",
      "La Stellia",
      "La Real",
      "El Recuerdo",
      "Tonoli",
      "Laguna Arrendo",
      "Florencia",
      "Casa Grande",
      "Santa Ines",
      "La Loma",
      "Corcovao Adecañas",
      "Veracruz Adecañas",
      "Sarria",
      "Nilo Toro",
      "Janeiro Esmeralda",
      "Hermanas Florez",
      "Las Cañas",
      "Ana Maria Bonilla",
      "El Cairo",
      "Tablanca",
      "Holanda",
      "La Camelia",
      "Sucursal",
      "El Socorro Cabaña",
      "Monaco",
      "La Alsacia",
      "Ventura Olgin",
    ],
    5: [
      "Casablanca",
      "Bocas de Palo",
      "Perico Negro",
      "El Lago",
      "Victoria",
      "Curazao",
      "Coburgo Cantarito",
      "Bohemia",
      "Curazao Escobar",
      "Ceibal Nereida Sepulveda Roja",
      "Curazao Agroindustrias",
      "Curazao Velez",
      "La Moraleja",
      "Curazao Esmeralda",
      "Lago Rabinovich",
      "Quintero",
      "Sofia",
      "Sarria",
      "Victoria Esmeralda",
      "Avenida",
      "Sarria Agrocañas",
      "La Moraleja Accion Fiduciaria",
      "Campo Alegre Argos Arrendo",
      "Moraleja Arango",
      "Cachipay",
      "Moraleja PYS Proyectos Soll",
    ],
  };

  // Función para actualizar el select de haciendas basado en el distrito seleccionado
  const updateHaciendas = () => {
    const selectedDistrito = distritoSelect.value;
    const haciendasList = haciendas[selectedDistrito] || [];

    haciendaSelect.innerHTML = '<option value="">Seleccione Hacienda</option>'; // Reset options
    haciendasList.forEach((hacienda) => {
      const option = document.createElement("option");
      option.value = hacienda;
      option.textContent = hacienda;
      haciendaSelect.appendChild(option);
    });
  };

  // Maneja el cambio en el select de distrito
  distritoSelect.addEventListener("change", updateHaciendas);

  // Maneja el cambio en el select de apoyo
  supportSelect.addEventListener("change", () => {
    if (supportSelect.value === "yes") {
      supportDetails.style.display = "block";
    } else {
      supportDetails.style.display = "none";
    }
  });

  // Maneja el envío del formulario
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
