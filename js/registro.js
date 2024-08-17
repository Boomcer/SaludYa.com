


class Usuario {
    constructor(nombre, apellido, patologia, obraSocial, correo, contraseña) {
        this.id = usuarios.length > 0 ? usuarios.at(-1).id + 1 : 1;
        this.nombre = nombre;
        this.apellido = apellido;
        this.patologia = patologia;
        this.obraSocial = obraSocial;
        this.correo = correo;
        this.contraseña = contraseña;
        this.rol = "Paciente";
    }
}


let usuarios = JSON.parse(localStorage.getItem("users")) || [];

const guardarUsuarios = () => {
    localStorage.setItem("users", JSON.stringify(usuarios));
    window.location = "../index.html"
};



const agregarUsuario = (event) => {
    event.preventDefault();
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let patologia = document.querySelector("#patologia");
    let obraSocial=document.querySelector("#obraSocial")
    let correo = document.querySelector("#correo");
    let contraseña = document.querySelector("#contraseña");

    let user = new Usuario(nombre.value, apellido.value, patologia.value, obraSocial.value, correo.value, contraseña.value);

    usuarios.push(user);
    guardarUsuarios();
    alert("El usuario se registró de manera correcta");
    nombre.value = "";
    apellido.value = "";
    patologia.value="";
    obraSocial.value="";
    correo.value = "";
    contraseña.value = "";
    document.querySelector("#registro").reset();
    nombre.focus();
};

document.querySelector("#registro").addEventListener("submit", agregarUsuario);


