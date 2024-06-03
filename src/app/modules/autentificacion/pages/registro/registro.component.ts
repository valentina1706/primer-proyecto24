import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de la contraseña para ver los caracteres o no
hide = true;
//importar la interfaz de usuario ->inicializar
usuarios: Usuario = {
  uid: "", //->inicializamos con comillas simples porque es string
  nombre: "",
  apellido: "",
  email: "",
  rol: "",
  password: ""
}


coleccionUsuarios: Usuario[] = [];

//funcion para el registro de nuevos usuarios
registrar(){
  //constante credenciales va a resguardar la informacion que ingrese el usuario
  const credenciales = {
    uid: this.usuarios.uid,
    nombre: this.usuarios.nombre,
    apellido: this.usuarios.nombre,
    email: this.usuarios.email,
    rol: this.usuarios.rol,
    password: this.usuarios.password
  }
    
  //enviamos nueva informacion como un nuevo objeto a la coleccion de usuarios
  this.coleccionUsuarios.push(credenciales)

  //mostramos credenciales por consola
  console.log(credenciales);
  
}
}

