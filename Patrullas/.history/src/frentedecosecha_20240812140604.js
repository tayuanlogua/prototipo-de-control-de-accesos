document.addEventListener("DOMContentLoaded", function () {
  const horaInput = document.getElementById("hora");
  const fechaInput = document.getElementById("fecha");

  function updateTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    horaInput.value = `${hours}:${minutes}:${seconds}`;
  }

  // Set current date and time on page load
  updateTime();
  fechaInput.valueAsDate = new Date();

  // Update time every second
  setInterval(updateTime, 1000);
});
