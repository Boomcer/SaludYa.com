let cuerpoTabla = document.querySelector("tbody") || null;
let contadorTurnos = document.getElementById("count");
let idTurno = null;
const myModal = new bootstrap.Modal(document.getElementById("modalUpdate"));
let turnos = JSON.parse(localStorage.getItem("turnos")) || [];

crearTabla();

function crearTabla() {
  if (cuerpoTabla) {
    cuerpoTabla.innerHTML = "";
    contadorTurnos.innerText = "Turnos registrados: " + turnos.length;
    
    if(localStorage.getItem(turnos)){
        turnos = JSON,parse(localStorage.getItem("turnos"))
    } else{
        turnos=[]
    }
    
    if (turnos.length > 0) {
      
      turnos.map((turno) => {
        let fila = document.createElement("tr");
        let celdas = /*HTML */ `<td>${turno.nombre}</td>
            <td>${turno.apellido}</td>
            <td>${turno.medico}</td>
            <td>${turno.fecha}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
            <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUpdate" onclick="cargarFormulario('${turno.id}')">
            <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button class="btn btn-danger" onclick="borrarRegistro('${turno.id}')">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            </td>`;

        fila.innerHTML = celdas;
        cuerpoTabla.append(fila);
      });
    } else {
      cuerpoTabla.append("No hay datos para mostrar");
    }
  }
}

//cargar datos en el modal
const cargarFormulario = (id) => {
  idturno = turno.findIndex((item) => item.id === id);
  let formulario = document.querySelector("#formulario-update");

  Array.from(formulario.elements).forEach((campo) => {
   nombre.value = turno[idTurno].nombre;
   apellido.value = turno[idTurno];
   DNI.value = turno[idTurno];
   celular.value = turno[idTurno];
   medico.value = turno[idTurno];
   fecha.value = turno[idTurno];
   consulta.value = turno[idTurno];

  });
}