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



// crearTabla()

// function crearTabla(){
//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     users.map((user)=>{
//         let fila = document.createElement('tr');
//         let celdas = `
//         <td>${user.nombre}</td>
//         <td>${user.apellido}</td>
//         <td>${user.dni}</td>
//         <td>${user.numTel}</td>
//         <td></td>`

//         fila.innerHTML = celdas;
//         cuerpoTabla.append(fila);

//     })
// }


