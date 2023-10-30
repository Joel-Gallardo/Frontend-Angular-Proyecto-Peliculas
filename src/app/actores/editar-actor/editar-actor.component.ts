import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: [ './editar-actor.component.css' ]
})
export class EditarActorComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  modelo: actorCreacionDTO = { nombre: 'Robert De Niro', fechaNacimiento: new Date() }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      // console.log(params.id);
    })
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
  }

}
