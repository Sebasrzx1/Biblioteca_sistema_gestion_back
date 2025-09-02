async function cargarLibros() {
      try {
        const response = await fetch("http://localhost:3000/api/libros/disponibles");
        const data = await response.json();

        // Mostrar en tabla
        const tabla = document.getElementById("tablaLibros");
        const tbody = tabla.querySelector("tbody");
        tbody.innerHTML = "";
        data.forEach(l => {
          const row = `
            <tr>
              <td>${l.categoria}</td>
              <td>${l.titulo}</td>
              <td>${l.id_ejemplar}</td>
            </tr>
          `;
          tbody.innerHTML += row;
        });
        tabla.style.display = "table";

        // Mostrar en cards
        const cards = document.getElementById("cardsLibros");
        cards.innerHTML = "";
        data.forEach(l => {
          const card = `
            <div class="card">
              <h3>${l.titulo}</h3>
              <p><b>Categoria:</b> ${l.categoria}</p>
              <p><b>ID Ejemplar:</b> ${l.id_ejemplar}</p>
            </div>
          `;
          cards.innerHTML += card;
        });
        cards.style.display = "flex";

      } catch (err) {
        console.error("Error al cargar los libros:", err);
        alert("No se pudieron cargar los libros.");
      }
    }