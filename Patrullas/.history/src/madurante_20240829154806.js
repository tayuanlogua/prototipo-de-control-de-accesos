document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("burnt-cane-form");
  const distritoSelect = document.getElementById("distrito");
  const haciendaSelect = document.getElementById("hacienda");
  const supportSelect = document.getElementById("support");
  const supportDetails = document.getElementById("support-details");
  const fechaHoraInput = document.getElementById("fechaHora");
  const ubicacionInput = document.getElementById("ubicacion");
  const numeroSuerteSelect = document.getElementById("numeroSuerte");
  const letraSuerteSelect = document.getElementById("letraSuerte");
  const suerteInput = document.getElementById("suerte");

  // Inicializa el campo de fecha y hora
  const now = new Date();
  const dateTimeString = now.toISOString().slice(0, 16); // Formato YYYY-MM-DDTHH:MM
  fechaHoraInput.value = dateTimeString;

  // Obtiene la ubicación del usuario
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        ubicacionInput.value = `Lat: ${latitude}, Lon: ${longitude}`;
      },
      (error) => {
        console.error("Error obtaining location", error);
        ubicacionInput.value = "No se pudo obtener la ubicación";
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
    ubicacionInput.value = "Geolocalización no soportada";
  }

  const haciendas = {
    1: [
      "Rio Frayle",
      "La Industria",
      "Salsipuedes",
      "Pergola II",
      "Pergola III",
      "Acuario",
      "Pergola I",
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

  // Completa el selector de números del 1 al 100
  for (let i = 1; i <= 100; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    numeroSuerteSelect.appendChild(option);
  }

  // Completa el selector de letras de la A a la Z
  for (let i = 65; i <= 90; i++) {
    const option = document.createElement("option");
    option.value = String.fromCharCode(i);
    option.textContent = String.fromCharCode(i);
    letraSuerteSelect.appendChild(option);
  }

  // Actualiza el campo de texto "Suerte" al cambiar las selecciones
  const updateSuerte = () => {
    const numeroSeleccionado = numeroSuerteSelect.value;
    const letraSeleccionada = letraSuerteSelect.value;
    suerteInput.value = `${numeroSeleccionado}-${letraSeleccionada}`;
  };

  numeroSuerteSelect.addEventListener("change", updateSuerte);
  letraSuerteSelect.addEventListener("change", updateSuerte);

  // Función para actualizar el select de haciendas basado en el distrito seleccionado
  const updateHaciendas = () => {
    const selectedDistrito = distritoSelect.value;
    const haciendasList = haciendas[selectedDistrito] || [];
    console.log("Distrito seleccionado:", selectedDistrito); // Depuración
    console.log("Haciendas para el distrito:", haciendasList); // Depuración

    haciendaSelect.innerHTML = '<option value="">Seleccione Hacienda</option>'; // Reset options
    haciendasList.forEach((hacienda) => {
      const option = document.createElement("option");
      option.value = hacienda;
      option.textContent = hacienda;
      haciendaSelect.appendChild(option);
    });
  };

  distritoSelect.addEventListener("change", updateHaciendas);

  // Manejo de la visibilidad de detalles de soporte
  supportSelect.addEventListener("change", () => {
    if (supportSelect.value === "yes") {
      supportDetails.style.display = "block";
    } else {
      supportDetails.style.display = "none";
    }
  });
});
