import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OportunidadesComponent } from './components/oportunidades/oportunidades.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'oportunidades', component: OportunidadesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
