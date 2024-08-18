
let cuerpoTabla = document.querySelector("tbody") || null;
let contadorTurnos = document.getElementById("count");
let idTurno = null;
const myModal = new bootstrap.Modal(document.getElementById("modalUpdate"));
const confirmDeleteModal = new bootstrap.Modal(
  document.getElementById("modalConfirmDelete")
);
let turnos = JSON.parse(localStorage.getItem("turnos")) || [];
let turnoIdToDelete = null;

crearTabla();

function crearTabla() {
  if (cuerpoTabla) {
    cuerpoTabla.innerHTML = "";
    contadorTurnos.innerText = "Turnos registrados: " + turnos.length;

    if (turnos.length > 0) {
      turnos.forEach((turno) => {
        let fila = document.createElement("tr");
        let celdas = `
          <td>${turno.numeracion}</td>
          <td>${turno.nombre}</td>
          <td>${turno.apellido}</td>
          <td>${turno.medico}</td>
          <td>${turno.fecha}</td>
          <td>
            <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUpdate" onclick="cargarFormulario('${turno.id}')">
              <i class="bi bi-pencil" aria-hidden="true"></i>
            </button>
          <button class="btn btn-danger" onclick="confirmarEliminacion('${turno.id}')">
              <i class="bi bi-trash" aria-hidden="true"></i>
            </button>
          </td>
        `;

        fila.innerHTML = celdas;
        cuerpoTabla.append(fila);
      });
    } else {
      cuerpoTabla.innerHTML =
        "<tr><td colspan='6'>No hay datos para mostrar</td></tr>";
    }
  }
}

const cargarFormulario = (id) => {
  const idToCompare = Number(id);
  idTurno = turnos.findIndex((item) => item.id === idToCompare);

  if (idTurno !== -1) {
    let turno = turnos[idTurno];
    let formulario = document.querySelector("#formulario-update");

    formulario.nombre.value = turno.nombre;
    formulario.apellido.value = turno.apellido;
    formulario.DNI.value = turno.DNI;
    formulario.celular.value = turno.celular;
    formulario.medico.value = turno.medico;
    formulario.fecha.value = turno.fecha;
    formulario.consulta.value = turno.consulta;
    document.getElementById(turno.sexo).checked = true;
  } else {
    console.error(`Turno con id ${id} no encontrado.`);
  }
};

function crearTurno(event) {
  event.preventDefault();

  const turno = {
    id: idTurno !== null ? turnos[idTurno].id : Date.now(),
    numeracion: turnos.length + 1,
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    DNI: document.getElementById("DNI").value,
    celular: document.getElementById("celular").value,
    medico: document.getElementById("medico").value,
    fecha: document.getElementById("fecha").value,
    consulta: document.getElementById("consulta").value,
    sexo: document.querySelector('input[name="flexRadioDefault"]:checked').id,
  };

  if (idTurno !== null) {
    turnos[idTurno] = turno;
    idTurno = null;
  } else {
    turnos.push(turno);
  }

  localStorage.setItem("turnos", JSON.stringify(turnos));
  crearTabla();

  document.getElementById("formulario-update").reset();
  myModal.hide();
}

function confirmarEliminacion(id) {
  turnoIdToDelete = id;
  confirmDeleteModal.show();
}

document.getElementById("confirmDelete").addEventListener("click", () => {
  borrarRegistro(turnoIdToDelete);
  confirmDeleteModal.hide();
});

function borrarRegistro(id) {
  const idToDelete = Number(id);
  const newTurnos = turnos.filter((turno) => turno.id !== idToDelete);

  localStorage.setItem("turnos", JSON.stringify(newTurnos));
  turnos = newTurnos;

  crearTabla();
}