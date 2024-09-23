document.addEventListener("DOMContentLoaded", function () {
  // Configurar la fecha y hora del sistema
  const dateTimeInput = document.getElementById("date-time");
  const currentDateTime = new Date();
  const formattedDateTime = currentDateTime.toLocaleString(); // Formato local
  dateTimeInput.value = formattedDateTime;
});
