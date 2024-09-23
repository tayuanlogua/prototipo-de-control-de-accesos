document.addEventListener("DOMContentLoaded", (event) => {
  // Configurar la hora automáticamente
  const horaInput = document.getElementById("hora");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  horaInput.value = `${hours}:${minutes}:${seconds}`;
});
