import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: [ './crear-actor.component.css' ]
})
export class CrearActorComponent {

  constructor(private router: Router) {
  }

  guardarCambios() {
    //todo guardar cambios
    this.router.navigate([ 'actores' ])
  }
}
