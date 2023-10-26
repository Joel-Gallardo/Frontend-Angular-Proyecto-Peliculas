import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: [ './crear-pelicula.component.css' ]
})
export class CrearPeliculaComponent {

  constructor(private router: Router) { }

  guardarCambios() {
    //Todo guardar cambios
    this.router.navigate([ '' ])
  }

}
