document.addEventListener("DOMContentLoaded", function () {
  const apoyoRadios = document.querySelectorAll('input[name="apoyo"]');
  const apoyoNombreDiv = document.getElementById("apoyo-nombre");

  apoyoRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "si") {
        apoyoNombreDiv.style.display = "block";
      } else {
        apoyoNombreDiv.style.display = "none";
      }
    });
  });
});
