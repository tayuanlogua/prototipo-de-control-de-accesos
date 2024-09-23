document
  .getElementById("actividades-propias-link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document
      .getElementById("actividades-propias-form")
      .classList.toggle("hidden");
    document.getElementById("novedades-form").classList.add("hidden");
  });

document
  .getElementById("novedades-link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("novedades-form").classList.toggle("hidden");
    document.getElementById("actividades-propias-form").classList.add("hidden");
  });
