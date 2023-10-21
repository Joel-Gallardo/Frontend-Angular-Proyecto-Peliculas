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
            titulo: 'Spiderman',
            fechaLanzamiento: new Date(),
            precio: 123.04
          },
          {
            titulo: 'Pulp fiction',
            fechaLanzamiento: new Date(),
            precio: 444.05
          }
        ];
    }, 5000);

  }

  //arreglo de objetos
  peliculasEnCines;

  peliculasProximosEstrenos =
    [
      {
        titulo: 'La toalla del mojado',
        fechaLanzamiento: new Date(),
        precio: 1523.04
      },
      {
        titulo: 'Sherk 5',
        fechaLanzamiento: new Date(),
        precio: 4644.05
      },
      {
        titulo: 'Rapido y furioso 20',
        fechaLanzamiento: new Date(),
        precio: 5644.05
      }
    ];

  //variable
  title = 'hello world!';

  //objeto
  pelicula = {
    titulo: 'EL PADRINO',
    fechaLanzamiento: new Date(),
    precio: 1400.99
  };

  //function
  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
