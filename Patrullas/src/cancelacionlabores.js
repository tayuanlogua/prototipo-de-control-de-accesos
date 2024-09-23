// Obtener la ubicación automática del usuario
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("location").value = "Geolocalización no soportada";
  }
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  document.getElementById("location").value = `Lat: ${lat}, Lon: ${lon}`;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("location").value = "Permiso denegado";
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("location").value = "Información no disponible";
      break;
    case error.TIMEOUT:
      document.getElementById("location").value = "La solicitud expiró";
      break;
    case error.UNKNOWN_ERROR:
      document.getElementById("location").value = "Error desconocido";
      break;
  }
}

// Establecer fecha y hora actual al cargar la página
function setDateTime() {
  const fechaHoraInput = document.getElementById("fechaHora");
  const now = new Date();
  const dateTimeString = now.toISOString().slice(0, 16); // Formato YYYY-MM-DDTHH:MM
  fechaHoraInput.value = dateTimeString;
}

// Ejecutar las funciones al cargar la página
window.onload = function () {
  getLocation();
  setDateTime();
};

// Esperar a que el contenido del DOM esté completamente cargado antes de inicializar las variables del formulario
document.addEventListener("DOMContentLoaded", () => {
  // Variables del formulario
  const distritoSelect = document.getElementById("distrito");
  const haciendaSelect = document.getElementById("hacienda");
  const numeroSuerteSelect = document.getElementById("numeroSuerte");
  const letraSuerteSelect = document.getElementById("letraSuerte");
  const suerteInput = document.getElementById("suerte");

  // Haciendas por distrito
  const haciendas = {
    1: [
      "Rio Frayle", "La Industria", "Salsipuedes", "Pergola II", "Pergola III", "ACUARIO", "PERGOLA I", "Vallecito",
      "Papayal", "La Linda", "El Rincon", "Papayalito", "El Tablon Bajo", "Cantarohondo", "El Tablon Alto", "El Baranco",
      "Santa Barbara Participacion", "La Michela"
    ],
    2: [
      "Orocue", "Palace", "San Isidro", "Rancho Grande", "Romano Barney", "Taula Mejia", "Vanegas", "Holandita Adecañas",
      "Canada Adecañas", "Canada", "Canada Agrocañas", "Canada Esmeralda", "Hato", "Arado", "Yarumales", "Mendiola La Paila",
      "Benitez", "Hato San Carlos", "Mundo Cabaña", "La Munda Esmeralda", "Canada Cabaña", "Hato Agrocañas", "Hato Cavi"
    ],
    3: [
      "Cabaña", "Caldas", "Pilamo", "Taula Chiman", "Normandia", "Santa Helena", "Cabaña II", "Muchilanga Naranjito",
      "Caldas Agroindustrias", "Normandia Agroindustrias", "Taula Chiman Agroindistria", "Humberto Lopez Cabaña", 
      "Arado Adecañas", "Toribio Rivas Esmeralda", "Cabaña Rabinovich", "Naranjo Agrocañas", "Naranjo", "Muchilanga", 
      "Taula Ana", "Naranjo Esmeralda", "Gobierno Negro", "Granada", "Cabaña Agrocañas", "Naranjo Cabaña", 
      "Muchilanga Cabaña", "Vegas Cabaña", "Alvaro Naranjo Poveda Arrey", "El Rebaño", "Dulce Jugada Participacion"
    ],
    4: [
      "Cuprecia", "Laguna", "La Gitana", "Vista Hermosa", "Nanaluisa", "Lote Toro", "La Stellia", "La Real", "El Recuerdo",
      "Tonoli", "Laguna Arrendo", "Florencia", "Casa Grande", "Santa Ines", "La Loma", "Corcovao Adecañas", 
      "Veracruz Adecañas", "Sarria", "Nilo Toro", "Janeiro Esmeralda", "Hermanas Florez", "Las Cañas", "Ana Maria Bonilla",
      "El Cairo", "Tablanca", "Holanda", "La Camelia", "Sucursal", "El Socorro Cabaña", "Monaco", "La Alsacia", 
      "Ventura Olgin"
    ],
    5: [
      "Casablanca", "Bocas de Palo", "Perico Negro", "El Lago", "Victoria", "Curazao", "Coburgo Cantarito", "Bohemia", 
      "Curazao Escobar", "Ceibal Nereida Sepulveda Roja", "Curazao Agroindustrias", "Curazao Velez", "La Moraleja", 
      "Curazao Esmeralda", "Lago Rabinovich", "Quintero", "Sofia", "Sarria", "Victoria Esmeralda", "Avenida", 
      "Sarria Agrocañas", "La Moraleja Accion Fiduciaria", "Campo Alegre Argos Arrendo", "Moraleja Arango", "Cachipay", 
      "Moraleja PYS Proyectos Soll"
    ]
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
    suerteInput.value = `${numeroSeleccionado} - ${letraSeleccionada}`;
  };

  numeroSuerteSelect.addEventListener("change", updateSuerte);
  letraSuerteSelect.addEventListener("change", updateSuerte);

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

  distritoSelect.addEventListener("change", updateHaciendas);
});

