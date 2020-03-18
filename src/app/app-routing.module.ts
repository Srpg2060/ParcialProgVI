import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsignarComponent } from './consignar/consignar.component';
import { RetiroComponent } from './retiro/retiro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'consulta', component: ConsultaComponent},
  { path: 'consignar', component: ConsignarComponent},
  { path: 'retiro', component: RetiroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

  
}
export const rutasComponent=[MenuComponent, LoginComponent, ConsultaComponent, ConsignarComponent, RetiroComponent]
