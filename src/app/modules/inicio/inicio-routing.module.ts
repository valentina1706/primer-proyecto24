import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  // ruta inicial/principal
  {
    path:"", component: InicioComponent
  },
  //carga perezosa-> ruta al modulo inicio
  {
    path:"inicio", component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
