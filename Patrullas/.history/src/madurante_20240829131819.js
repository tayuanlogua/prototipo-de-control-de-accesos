document.addEventListener("DOMContentLoaded", function () {
  // Completa la fecha y la hora actuales
  const fechaHoraInput = document.getElementById("fechaHora");
  const fechaActual = new Date();
  const fechaFormateada = fechaActual.toISOString().split("T")[0]; // Formato YYYY-MM-DD
  const horaFormateada = fechaActual.toTimeString().split(" ")[0]; // Formato HH:MM:SS
  fechaHoraInput.value = `${fechaFormateada} ${horaFormateada}`;

  // Completa la ubicación utilizando la API de geolocalización
  const ubicacionInput = document.getElementById("ubicacion");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        ubicacionInput.value = `Lat: ${latitud}, Lon: ${longitud}`;
      },
      function (error) {
        console.error("Error obteniendo la ubicación:", error);
        ubicacionInput.value = "Ubicación no disponible";
      }
    );
  } else {
    ubicacionInput.value = "Geolocalización no soportada por el navegador";
  }

  // Maneja la lógica de selección de distritos y haciendas
  const distritoSelect = document.getElementById("distrito");
  const haciendaSelect = document.getElementById("hacienda");

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
});
