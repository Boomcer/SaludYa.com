class admin {
    constructor(nombre, apellido, dni, numTel, correo, contraseña){
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.numTel = numTel;
        this.correo = correo;
        this.contraseña = contraseña;
        this.rol = "Admin";
    }
}


let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let dni = document.querySelector("#dni");
let numTel = document.querySelector("#numTel");
let correo = document.querySelector("#correo");
let contraseña = document.querySelector("#contraseña");

let usuarios = JSON.parse(localStorage.getItem("users")) || [];

const guardarUsuarios = () => {
    localStorage.setItem("users", JSON.stringify(usuarios));
};

let cuerpoTabla = document.querySelector("#tabla");
cuerpoTabla.innerHTML = "";

usuarios.map((usuario) =>{
    
        let fila = document.createElement("tr");
        let celdas = `
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.dni}</td>
            <td>${usuario.numTel}</td>
            <td>${usuario.correo}</td>
            <td>
                <button class="btn btn-primary rounded-pill" onclick="eliminarUsuario(${usuario.id})">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </td>`;
        fila.innerHTML = celdas;
        cuerpoTabla.append(fila);

});


const agregarUsuario = () => {

    let user = new admin(nombre.value, apellido.value, dni.value, numTel.value, correo.value);

    usuarios.push(user);
    guardarUsuarios();
    document.querySelector("#formulario-alta").reset();
}
