class paciente{
    constructor(nombre,apellido,dni,numTel){
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.numTel = numTel;
    }
}

class medico{
    constructor(nombre,apellido,dni,numTel,especialidad){
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.numTel = numTel;
        this.especialidad = especialidad;
    }
}

    let nombre = document.querySelector("#inputNombre");
    let apellido = document.querySelector("#inputApellido");
    let dni = document.querySelector("#inputDni");
    let numTel = document.querySelector("#inputNumTel");

let pacientes = [];

const agregarPaciente = (event) => {
    event.preventDefault();

    let nuevoPaciente = new paciente( 
        nombre.value,
        apellido.value,
        dni.value,
        numTel.value,);

    pacientes.push(nuevoPaciente);

    document.querySelector("#formulario-alta").reset();

}

document.querySelector("#formulario-alta").addEventListener('sumbit',agregarPaciente)