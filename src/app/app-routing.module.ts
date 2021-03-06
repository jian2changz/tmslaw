import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home'} },
  { path: 'about', component: AboutComponent, data: { state: 'about'} },
  { path: 'contact', component: ContactComponent, data: { state: 'contact'} },
  { path: 'home', component: HomeComponent, data: { state: 'home'} },
  { path: 'services', component: ServicesComponent, data: { state: 'services'} }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }