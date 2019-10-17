import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NacComponent } from './nac/nac.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NacComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    MapComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



