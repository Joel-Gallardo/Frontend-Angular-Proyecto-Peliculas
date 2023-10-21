import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
