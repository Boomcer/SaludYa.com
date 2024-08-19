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
let admins = [
    new admin("Cesar Nicolas", "Gallardo", "41299976", "3814400357", "gallardo41299@gmail.com", "123456")
]

localStorage.setItem("users", JSON.stringify(admins));

let usuarios = JSON.parse(localStorage.getItem("users")) || [];

function loguear (){
    let user = document.getElementById("usuario").value;

    let pass = document.getElementById("contraseña").value;

    usuarios.forEach(usuario => {
        if(usuario.correo === user && usuario.contraseña === pass){
            if (usuario.rol === "Paciente") {
                window.location = "../pages/turnos.html";
            }

            else if(usuario.rol === "Admin"){
                window.location= "../pages/admin.html";
            }

            else if(usuario.rol === "Medico"){

            }
        }
    });

}

