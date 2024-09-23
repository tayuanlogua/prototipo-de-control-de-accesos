document.getElementById("toggle-form").addEventListener("click", function () {
  const formContainer = document.getElementById("form-container");
  if (formContainer.style.display === "none") {
    formContainer.style.display = "block";
    loadForms();
  } else {
    formContainer.style.display = "none";
  }
});

function loadForms() {
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = `
        <form>
            <label for="revista-hacienda">Revista Hacienda:</label>
            <textarea id="revista-hacienda" name="revista-hacienda"></textarea>
            <label for="transformadores">Transformadores:</label>
            <textarea id="transformadores" name="transformadores"></textarea>
            <label for="moto-bombas">Moto Bombas:</label>
            <textarea id="moto-bombas" name="moto-bombas"></textarea>
            <label for="chorras">Chorras:</label>
            <textarea id="chorras" name="chorras"></textarea>
            <label for="semilla">Semilla:</label>
            <textarea id="semilla" name="semilla"></textarea>
            <label for="frentes-cosecha">Frentes de Cosecha:</label>
            <textarea id="frentes-cosecha" name="frentes-cosecha"></textarea>
            <label for="subsuelo">Subsuelo:</label>
            <textarea id="subsuelo" name="subsuelo"></textarea>
            <label for="preparacion">Preparación:</label>
            <textarea id="preparacion" name="preparacion"></textarea>
            <label for="maquinaria-amarilla">Maquinaria Amarilla:</label>
            <textarea id="maquinaria-amarilla" name="maquinaria-amarilla"></textarea>
            <label for="suerte-consigna">Suerte en Consigna:</label>
            <textarea id="suerte-consigna" name="suerte-consigna"></textarea>
            <label for="fertilizacion">Fertilización:</label>
            <textarea id="fertilizacion" name="fertilizacion"></textarea>
            <label for="cana-quemada">Caña Quemada en Pie:</label>
            <textarea id="cana-quemada" name="cana-quemada"></textarea>
            <label for="hurto-cana">Hurto de Caña:</label>
            <textarea id="hurto-cana" name="hurto-cana"></textarea>
            <label for="suministros-combustible">Suministros de Combustible:</label>
            <textarea id="suministros-combustible" name="suministros-combustible"></textarea>
            <label for="fumigacion">Fumigación:</label>
            <textarea id="fumigacion" name="fumigacion"></textarea>
            <label for="drones">Drones:</label>
            <textarea id="drones" name="drones"></textarea>
            <button type="submit">Enviar</button>
        </form>
    `;
}
