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
          ,
          // {
          //   titulo: 'Spiderman',
          //   fechaLanzamiento: new Date(),
          //   precio: 123.04
          // },
          // {
          //   titulo: 'Pulp fiction',
          //   fechaLanzamiento: new Date(),
          //   precio: 444.05
          // },
          // {
          //   titulo: 'Spiderman',
          //   fechaLanzamiento: new Date(),
          //   precio: 123.04
          // },
          // {
          //   titulo: 'Pulp fiction',
          //   fechaLanzamiento: new Date(),
          //   precio: 444.05
          // },
          // {
          //   titulo: 'Spiderman',
          //   fechaLanzamiento: new Date(),
          //   precio: 123.04
          // },
          // {
          //   titulo: 'Pulp fiction',
          //   fechaLanzamiento: new Date(),
          //   precio: 444.05
          // }
        ];
    }, 3000);

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
