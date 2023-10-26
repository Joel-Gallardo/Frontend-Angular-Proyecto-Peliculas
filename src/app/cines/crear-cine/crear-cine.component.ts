import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: [ './crear-cine.component.css' ]
})
export class CrearCineComponent {

  constructor(private router: Router) { }

  guardarCambios() {
    //Todo guardar cambios
    this.router.navigate([ 'cines' ])
  }

}
