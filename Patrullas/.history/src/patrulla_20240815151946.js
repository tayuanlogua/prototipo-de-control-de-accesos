function mostrarOpciones() {
  var seccion = document.getElementById("seccion").value;
  var actividadSection = document.getElementById("actividad-section");
  var novedadSection = document.getElementById("novedad-section");

  // Ocultar ambos por defecto
  actividadSection.style.display = "none";
  novedadSection.style.display = "none";

  // Mostrar la sección correspondiente
  if (seccion === "actividad") {
    actividadSection.style.display = "block";
  } else if (seccion === "novedad") {
    novedadSection.style.display = "block";
  }
}
