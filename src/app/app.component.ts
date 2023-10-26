import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  // es un metodo del ciclo de vida de un componente
  // lo que hace esque permite ejecutar una funcionalidad antes que se inicialice el componente
  ngOnInit(): void {

    setTimeout(() => {
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
    }, 50);

  }

  //arreglo de objetos
  peliculasEnCines;

  peliculasProximosEstrenos =
    [

    ];

  manejarRated(voto: number): void {
    alert(voto);
  }

  //variable
  title = 'hello world!';
  ocultar = false;

  // //objeto
  // pelicula = {
  //   titulo: 'EL PADRINO',
  //   fechaLanzamiento: new Date(),
  //   precio: 1400.99
  // };

  // //function
  // duplicarNumero(valor: number): number {
  //   return valor * 2;
  // }


}
