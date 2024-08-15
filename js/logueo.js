function loguear (){
    let user = document.getElementById("usuario").value;

    let pass = document.getElementById("contraseña").value;

    if(user === "Juan" && pass === "1234"){

        window.location="https://www.google.com/"
    }
    else{
        alert("Usuario o contrasena incorrectos")
    }
}

