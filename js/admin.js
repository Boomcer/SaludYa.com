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

crearTabla()

function crearTabla(){
    cuerpoTabla.innerHTML = "";

    usuarios.map((usuario) =>{
    
            let fila = document.createElement("tr");
            let celdas = `
                <td>${usuario.nombre}</td>
                <td>${usuario.apellido}</td>
                <td>${usuario.dni}</td>
                <td>${usuario.numTel}</td>
                <td>${usuario.correo}</td>
                <td class="row">
                    <button class="btn btn-danger btn-trash mx-1" onclick="editarUsuario('${usuario.id}')">
                        <i class="bi bi-trash" aria-hidden="true"></i>
                    </button>
                    <button class="btn btn-warning btn-trash" onclick="eliminarUsuario('${usuario.id}')">
                        <i class="bi bi-pencil" aria-hidden="true"></i>
                    </button>
                </td>`;
            fila.innerHTML = celdas;
            cuerpoTabla.append(fila);
    
    });
}

const agregarUsuario = () => {

    if(usuarios.find(usuario => usuario.correo === correo.value)){
        alert("Ya existe una cuenta con ese correo")
    }

    else{
        let user = new admin(nombre.value, apellido.value, dni.value, numTel.value, correo.value);
    
        usuarios.push(user);
        guardarUsuarios();
        document.querySelector("#formulario-alta").reset();
        crearTabla();
    }

}

const eliminarUsuario = (id) =>{
    let index = usuarios.findIndex((item)=>item.id === id)

    if(usuarios[index].id === usuarios[0].id){
        alert("Esta cuenta no se puede borrar");
    }

    else{
        if(index>=0){
            let validar = confirm(`Esta seguro que quiere eliminar a ${usuarios[index].nombre}`)
    
            if(validar){
                usuarios.splice(index,1)
                localStorage.setItem('users', JSON.stringify(usuarios))
                crearTabla();
            }
        }
    }

}

const editarUsuario = (id) =>{
    let index = usuarios.findIndex((item)=>item.id === id);

    nombre.value = usuarios[index].nombre;
    apellido.value = usuarios[index].apellido;
    dni.value = usuarios[index].dni;
    numTel.value = usuarios[index].numTel;
    correo.value = usuarios[index].correo;
    contraseña.value = usuarios[index].contraseña;
}
