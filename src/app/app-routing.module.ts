import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OportunidadesComponent } from './components/oportunidades/oportunidades.component';
import { PropertyListComponent } from "./components/property-list/property-list.component";
import { PropiedadComponent } from "./components/propiedad/propiedad.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'oportunidades', component: OportunidadesComponent },
  { path: 'propiedad', component:PropiedadComponent },
  { path: 'propiedades', redirectTo: 'propiedades/', pathMatch: 'full'},
  { path: 'propiedades/:extranjeras', component: PropertyListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
