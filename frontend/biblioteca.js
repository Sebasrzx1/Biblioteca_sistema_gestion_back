async function cargarTabla(nombre) {
    try {
        const response = await fetch(`http://localhost:3000/api/biblioteca/${nombre}`);
        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
            alert("No hay registros en " + nombre);
            return;
        }

        // Mostrar tabla
        const tabla = document.getElementById("tabla");
        const head = document.getElementById("tablaHead");
        const body = document.getElementById("tablaBody");

        head.innerHTML = "";
        body.innerHTML = "";

        // Encabezados
        Object.keys(data[0]).forEach(key => {
            head.innerHTML += `<th>${key}</th>`;
        });

        // Filas
        data.forEach(row => {
            let fila = "<tr>";
            Object.values(row).forEach(val => {
                fila += `<td>${val ?? ''}</td>`;
            });
            fila += "</tr>";
            body.innerHTML += fila;
        });

        tabla.style.display = "table";
    } catch (err) {
        console.error("Error:", err);
        alert("Error cargando la tabla: " + nombre);
    }
}

