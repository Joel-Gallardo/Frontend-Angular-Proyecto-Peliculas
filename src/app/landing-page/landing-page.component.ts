import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [ './landing-page.component.css' ]
})
export class LandingPageComponent {

  // es un metodo del ciclo de vida de un componente
  // lo que hace esque permite ejecutar una funcionalidad antes que se inicialice el componente
  ngOnInit(): void {

    this.peliculasEnCines =
      [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: '2002',
          Director: 'Sam Raimi',
          poster: 'https://m.media-amazon.com/images/I/81Ar4th8xWL._AC_UF1000,1000_QL80_.jpg'
        },
        {
          titulo: 'Pulp Fiction',
          fechaLanzamiento: new Date(),
          precio: 444.05,
          poster: 'https://m.media-amazon.com/images/I/71mlgE7nUdL._AC_UF894,1000_QL80_.jpg'
        }
      ];
  }

  //arreglo de objetos
  peliculasEnCines;

  peliculasProximosEstrenos =
    [

    ];

  // manejarRated(voto: number): void {
  //   alert(voto);
  // }


}
