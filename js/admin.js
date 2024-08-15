class paciente{
    constructor(nombre,apellido,dni,numTel){
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.numTel = numTel;
        this.rol;
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
        this.rol;
    }
}

class admin {
    constructor(nombre, apellido, dni){
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.rol;
    }
}

let usuarios = [];
const guardarUsuarios = () => {
    localStorage.setItem("users", JSON.stringify(usuarios));
};


let nombre = document.querySelector("#inputNombre");
let apellido = document.querySelector("#inputApellido");
let dni = document.querySelector("#inputDni");
let numTel = document.querySelector("#inputNumTel");


const agregarPaciente = (event) => {
    event.preventDefault();

    let nuevoPaciente = new paciente( 
        nombre.value,
        apellido.value,
        dni.value,
        numTel.value,);

        usuarios.push(nuevoPaciente);
        guardarUsuarios();

        document.querySelector("#formulario-alta").reset();
}

let cuerpoTabla = document.querySelector("tbody");

crearTabla()

function crearTabla(){
    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.map((user)=>{
        let fila = document.createElement('tr');
        let celdas = `
        <td>${user.nombre}</td>
        <td>${user.apellido}</td>
        <td>${user.dni}</td>
        <td>${user.numTel}</td>
        <td></td>`

        fila.innerHTML = celdas;
        cuerpoTabla.append(fila);

    })
}

document.querySelector("#formulario-alta").addEventListener("submit", agregarPaciente);


