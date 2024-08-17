let usuarios = JSON.parse((localStorage.getItem('users')))

function loguear (){
    let user = document.getElementById("usuario").value;

    let pass = document.getElementById("contraseña").value;

    usuarios.forEach(usuario => {
        if(usuario.correo === user && usuario.contraseña === pass){
            if (usuario.rol === "Paciente") {
                window.location()
            }

            else if(usuario.rol === "Admin"){
                window.location("../pages/admin.html")
            }

            else if(usuario.rol === "Medico"){

            }
        }
    });

    if(user === "Juan" && pass === "1234"){

        window.location="https://www.google.com/"
    }
    else{
        alert("Usuario o contrasena incorrectos")
    }
}

