document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const loginSection = document.getElementById("login-section");
  const patrullasSection = document.getElementById("patrullas-section");
  const toggleFormButton = document.getElementById("toggle-form");
  const formContainer = document.getElementById("form-container");

  // Manejo del inicio de sesión
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío real del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar usuario y contraseña (esto es un ejemplo simple, debes reemplazarlo por autenticación real)
    if (username === "admin" && password === "password") {
      loginSection.style.display = "none";
      patrullasSection.style.display = "block";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });

  // Mostrar/ocultar formularios
  toggleFormButton.addEventListener("click", function () {
    if (formContainer.style.display === "none") {
      formContainer.style.display = "block";
      showForms();
    } else {
      formContainer.style.display = "none";
    }
  });

  function showForms() {
    const formGroups = document.querySelectorAll(".form-group");
    formGroups.forEach((formGroup) => {
      formGroup.style.display = "block"; // Asegúrate de que los formularios estén visibles
    });
  }
});
