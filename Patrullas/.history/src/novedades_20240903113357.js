function mostrarOpciones() {
  // Obtén el valor de la selección principal
  var seleccion = document.getElementById("novedades").value;

  // Obtén las secciones de Hurtos e Informaciones
  var hurtos = document.getElementById("hurtos");
  var informaciones = document.getElementById("informaciones");

  // Oculta ambas secciones al principio
  hurtos.classList.add("hidden");
  informaciones.classList.add("hidden");

  // Muestra la sección correspondiente según la selección
  if (seleccion === "hurtos") {
    hurtos.classList.remove("hidden");
  } else if (seleccion === "informaciones") {
    informaciones.classList.remove("hidden");
  }
}
