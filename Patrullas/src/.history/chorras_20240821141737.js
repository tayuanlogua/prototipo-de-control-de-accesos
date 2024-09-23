<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <input type="text" id="date-time" readonly>

  <label>
    <input type="radio" name="apoyo" value="si"> Sí
  </label>
  <label>
    <input type="radio" name="apoyo" value="no"> No
  </label>

  <div id="apoyo-nombre" style="display:none;">
    <p>Apoyo Nombre</p>
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const apoyoRadios = document.querySelectorAll('input[name="apoyo"]');
      const apoyoNombreDiv = document.getElementById("apoyo-nombre");
      const dateTimeField = document.getElementById("date-time");

      function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }

      dateTimeField.value = getCurrentDateTime();

      setInterval(function () {
        dateTimeField.value = getCurrentDateTime();
      }, 1000);

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
  </script>
</body>
</html>

