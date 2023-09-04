import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  //arreglo de objetos
  peliculas;

  // es un metodo del ciclo de vida de un componente
  // lo que hace esque permite ejecutar una funcionalidad antes que se inicialice el componente
  ngOnInit(): void {

    setTimeout(() => {
      this.peliculas = [];
    }, 500);

  }

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
