import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OportunidadesComponent } from './components/oportunidades/oportunidades.component';
import { PropertyListComponent } from "./components/property-list/property-list.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'oportunidades', component: OportunidadesComponent},
  { path: 'propiedades', redirectTo: 'propiedades/', pathMatch: 'full'},
  { path: 'propiedades/:extranjeras', component: PropertyListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
