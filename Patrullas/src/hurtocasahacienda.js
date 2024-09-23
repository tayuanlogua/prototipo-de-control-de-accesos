// Inicializa el campo de fecha y hora
const fechaHoraInput = document.getElementById('fechaHora');
const now = new Date();
const dateTimeString = now.toISOString().slice(0, 16); // Formato YYYY-MM-DDTHH:MM
fechaHoraInput.value = dateTimeString;

// Obtiene la ubicación del usuario
const ubicacionInput = document.getElementById('ubicacion');
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      ubicacionInput.value = `Lat: ${latitude}, Lon: ${longitude}`;
    },
    (error) => {
      console.error("Error obteniendo ubicación", error);
      ubicacionInput.value = "No se pudo obtener la ubicación";
    }
  );
} else {
  console.log("Geolocalización no soportada por el navegador.");
  ubicacionInput.value = "Geolocalización no soportada";
}

// Definición de las haciendas
const haciendas = {
  1: [
    "Rio Frayle", "La Industria", "Salsipuedes", "Pergola II", "Pergola III", "Acuario",
    "Pergola I", "Vallecito", "Papayal", "La Linda", "El Rincon", "Papayalito", "El Tablon Bajo",
    "Cantarohondo", "El Tablon Alto", "El Baranco", "Santa Barbara Participacion", "La Michela"
  ],
  2: [
    "Orocue", "Palace", "San Isidro", "Rancho Grande", "Romano Barney", "Taula Mejia", "Vanegas",
    "Holandita Adecañas", "Canada Adecañas", "Canada", "Canada Agrocañas", "Canada Esmeralda", 
    "Hato", "Arado", "Yarumales", "Mendiola La Paila", "Benitez", "Hato San Carlos"
  ],
  3: [
    "Cabaña", "Caldas", "Pilamo", "Taula Chiman", "Normandia", "Santa Helena", "Cabaña II", 
    "Muchilanga Naranjito", "Caldas Agroindustrias", "Normandia Agroindustrias", 
    "Taula Chiman Agroindistria", "Humberto Lopez Cabaña", "Arado Adecañas", "Toribio Rivas Esmeralda"
  ],
  4: [
    "Cuprecia", "Laguna", "La Gitana", "Vista Hermosa", "Nanaluisa", "Lote Toro", "La Stellia", 
    "La Real", "El Recuerdo", "Tonoli", "Laguna Arrendo", "Florencia", "Casa Grande", "Santa Ines"
  ],
  5: [
    "Casablanca", "Bocas de Palo", "Perico Negro", "El Lago", "Victoria", "Curazao", 
    "Coburgo Cantarito", "Bohemia", "Curazao Escobar", "Ceibal Nereida Sepulveda Roja", 
    "Curazao Agroindustrias", "Curazao Velez", "La Moraleja", "Curazao Esmeralda", "Lago Rabinovich"
  ]
};

// Selector de distrito y hacienda
const distritoInput = document.getElementById('distrito');
const haciendaSelect = document.getElementById('hacienda');

// Escucha el cambio en el distrito seleccionado
distritoInput.addEventListener('change', () => {
  const selectedDistrito = parseInt(distritoInput.value); // Asegura que sea número
  const haciendasOptions = haciendas[selectedDistrito];

  // Limpiar opciones anteriores
  haciendaSelect.innerHTML = '';

  if (haciendasOptions) {
    // Agrega una opción predeterminada
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Seleccione una hacienda';
    haciendaSelect.appendChild(defaultOption);

    // Agregar nuevas opciones
    haciendasOptions.forEach((hacienda) => {
      const option = document.createElement('option');
      option.value = hacienda;
      option.textContent = hacienda;
      haciendaSelect.appendChild(option);
    });
  } else {
    // En caso de que no haya opciones para el distrito seleccionado
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'No hay haciendas disponibles';
    haciendaSelect.appendChild(option);
  }
});

// Completa el selector de números del 1 al 100
const numeroSuerteSelect = document.getElementById('numeroSuerteSelect');
for (let i = 1; i <= 100; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  numeroSuerteSelect.appendChild(option);
}

// Completa el selector de letras de la A a la Z
const letraSuerteSelect = document.getElementById('letraSuerteSelect');
for (let i = 65; i <= 90; i++) {
  const option = document.createElement('option');
  option.value = String.fromCharCode(i);
  option.textContent = String.fromCharCode(i);
  letraSuerteSelect.appendChild(option);
}
