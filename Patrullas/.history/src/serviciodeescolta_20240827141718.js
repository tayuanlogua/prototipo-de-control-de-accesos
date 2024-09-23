document.addEventListener("DOMContentLoaded", function () {
  function addMoreFields(group, limit) {
    const container = document.getElementById(group);
    if (container.children.length < limit) {
      const newItem = document.createElement("div");
      newItem.className = "multi-input-item";
      newItem.innerHTML = `<input type="text" name="${group.replace(
        "-group",
        ""
      )}[]" placeholder="Ingrese un valor" required>
                                 <button type="button" class="remove-item">Eliminar</button>`;
      container.appendChild(newItem);
    } else {
      alert(`Solo puedes agregar hasta ${limit} elementos.`);
    }
  }

  document.querySelectorAll(".add-more").forEach((button) => {
    button.addEventListener("click", function () {
      const group = this.dataset.group;
      const limit = parseInt(this.dataset.limit, 10);
      addMoreFields(group, limit);
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      e.target.closest(".multi-input-item").remove();
    }
  });
});
