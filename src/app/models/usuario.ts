export interface Usuario {
    uid: string | any; //any es para valores vacios o indifinidos
    nombre: string;
    apellido: string;
    email: string;
    rol: string;
    password: string;
}
