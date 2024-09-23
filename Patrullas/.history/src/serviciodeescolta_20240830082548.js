document.addEventListener("DOMContentLoaded", function () {
  function addMoreFields(group, limit) {
    const container = document.getElementById(group);
    if (container.children.length < limit) {
      const newItem = document.createElement("div");
      newItem.className = "multi-input-item";
      newItem.innerHTML = `<input type="text" name="${group.replace(
        "-group",
        ""
      )}[]" placeholder="Ingrese un valor" required>
                           <button type="button" class="remove-item">Eliminar</button>`;
      container.appendChild(newItem);
    } else {
      alert(`Solo puedes agregar hasta ${limit} elementos.`);
    }
  }

  document.querySelectorAll(".add-more").forEach((button) => {
    button.addEventListener("click", function () {
      const group = this.dataset.group;
      const limit = parseInt(this.dataset.limit, 10);
      addMoreFields(group, limit);
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      e.target.closest(".multi-input-item").remove();
    }
  });

  // --- Funcionalidad para fecha y hora actual ---
  function updateFechaHora() {
    const now = new Date();
    const formatted = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    document.getElementById("fechaHora").value = formatted;
  }

  updateFechaHora(); // Llamar para inicializar la fecha y hora al cargar

  // --- Funcionalidad para obtener la ubicación ---
  function updateUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitud = position.coords.latitude;
          const longitud = position.coords.longitude;
          document.getElementById(
            "ubicacion"
          ).value = `Lat: ${latitud}, Lon: ${longitud}`;
        },
        (error) => {
          console.error("Error obteniendo la ubicación:", error);
          document.getElementById("ubicacion").value =
            "Ubicación no disponible";
        }
      );
    } else {
      document.getElementById("ubicacion").value =
        "Geolocalización no soportada por el navegador";
    }
  }

  updateUbicacion(); // Llamar para obtener la ubicación al cargar

  // --- Funcionalidad para manejar haciendas ---
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

  const distritoSelect = document.getElementById("distrito");
  const haciendaSelect = document.getElementById("hacienda");

  // Función para actualizar el select de haciendas basado en el distrito seleccionado
  function updateHaciendas() {
    const selectedDistrito = distritoSelect.value;
    const haciendasList = haciendas[selectedDistrito] || [];

    haciendaSelect.innerHTML = '<option value="">Seleccione Hacienda</option>'; // Reset options
    haciendasList.forEach((hacienda) => {
      const option = document.createElement("option");
      option.value = hacienda;
      option.textContent = hacienda;
      haciendaSelect.appendChild(option);
    });
  }

  distritoSelect.addEventListener("change", updateHaciendas);

  // --- Funcionalidad para manejar suertes ---
  const numeroSuerteSelect = document.getElementById("numeroSuerte");
  const letraSuerteSelect = document.getElementById("letraSuerte");
  const suerteInput = document.getElementById("suerte");

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
  function updateSuerte() {
    const numeroSeleccionado = numeroSuerteSelect.value;
    const letraSeleccionada = letraSuerteSelect.value;
    suerteInput.value = `${numeroSeleccionado}-${letraSeleccionada}`;
  }

  numeroSuerteSelect.addEventListener("change", updateSuerte);
  letraSuerteSelect.addEventListener("change", updateSuerte);
});
