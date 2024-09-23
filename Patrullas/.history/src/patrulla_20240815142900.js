// Obtener el formulario y los elementos de selección
const formularioPatrullas = document.getElementById("patrullas-form");
const actividadPropia = document.getElementById("actividad-propia");
const novedades = document.getElementById("novedades");

// Evento de envío del formulario
formularioPatrullas.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  // Obtener los valores seleccionados
  const actividadValue = actividadPropia.value;
  const novedadesValue = novedades.value;

  // Determinar la URL de redirección basada en la selección
  let url;
  if (actividadValue) {
    // Redirigir basado en actividad propia
    switch (actividadValue) {
      case "transformadores":
        url = "formulario-transformadores.html";
        break;
      case "motobombas":
        url = "formulario-motobombas.html";
        break;
      case "chorras":
        url = "formulario-chorras.html";
        break;
      case "semilla":
        url = "formulario-semilla.html";
        break;
      case "frente-cosecha":
        url = "formulario-frente-cosecha.html";
        break;
      case "subsuelo":
        url = "formulario-subsuelo.html";
        break;
      case "preparacion":
        url = "formulario-preparacion.html";
        break;
      case "maquinaria-amarilla":
        url = "formulario-maquinaria-amarilla.html";
        break;
      case "suertes-consigna":
        url = "formulario-suertes-consigna.html";
        break;
      case "cana-en-pie":
        url = "formulario-cana-en-pie.html";
        break;
      case "fertilizacion":
        url = "formulario-fertilizacion.html";
        break;
      case "hurto-cana":
        url = "formulario-hurto-cana.html";
        break;
      case "fumigacion":
        url = "formulario-fumigacion.html";
        break;
      case "drones":
        url = "formulario-drones.html";
        break;
      default:
        alert("Actividad no válida.");
        return;
    }
  } else if (novedadesValue) {
    // Redirigir basado en novedades
    switch (novedadesValue) {
      case "cadaver":
        url = "formulario-cadaver.html";
        break;
      case "hurtos":
        url = "formulario-hurtos.html";
        break;
      case "bloqueos-comunidades":
        url = "formulario-bloqueos-comunidades.html";
        break;
      case "cierres-vias":
        url = "formulario-cierres-vias.html";
        break;
      case "informaciones":
        url = "formulario-informaciones.html";
        break;
      default:
        alert("Novedad no válida.");
        return;
    }
  } else {
    alert("Por favor, seleccione una actividad o una novedad.");
    return;
  }

  // Redirigir al usuario al formulario seleccionado
  window.location.href = url;
});
