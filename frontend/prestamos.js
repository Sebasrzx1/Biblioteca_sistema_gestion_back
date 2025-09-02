async function cargarPrestamos() {
      try {
        const response = await fetch("http://localhost:3000/api/prestamo/activos");
        const data = await response.json();

        // Mostrar en tabla
        const tabla = document.getElementById("tablaPrestamos");
        const tbody = tabla.querySelector("tbody");
        tbody.innerHTML = "";
        data.forEach(p => {
          const row = `
            <tr>
              <td>${p.id_prestamo}</td>
              <td>${p.nombre} ${p.apellido}</td>
              <td>${p.titulo}</td>
              <td>${p.fecha_prestamo.split("T")[0]}</td>
              <td>${p.fecha_devolucion_prevista.split("T")[0]}</td>
            </tr>
          `;
          tbody.innerHTML += row;
        });
        tabla.style.display = "table";

        // Mostrar en cards
        const cards = document.getElementById("cardsPrestamos");
        cards.innerHTML = "";
        data.forEach(p => {
          const card = `
            <div class="card">
              <h3>${p.titulo}</h3>
              <p><b>Usuario:</b> ${p.nombre} ${p.apellido}</p>
              <p><b>Fecha Préstamo:</b> ${p.fecha_prestamo.split("T")[0]}</p>
              <p><b>Devolución Prevista:</b> ${p.fecha_devolucion_prevista.split("T")[0]}</p>
            </div>
          `;
          cards.innerHTML += card;
        });
        cards.style.display = "flex";

      } catch (err) {
        console.error("Error al cargar préstamos:", err);
        alert("No se pudieron cargar los préstamos.");
      }
    }