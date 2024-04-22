import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './vistas/inicio/inicio.component';
// import { ServiciosComponent } from './vistas/servicios/servicios.component';

const routes: Routes = [
  //ruta inicial del componente                                  

  {path:"", component: InicioComponent},
  //carga perezosa -> ruta al moduloo inicio
  //loadchildren: indica que sera ruta hija del modulo raiz
  //()=>: funcion fleca que importara la direccion del modulo
  //.then: promesa que nos devolvera un valor resuelto o rechazado
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
