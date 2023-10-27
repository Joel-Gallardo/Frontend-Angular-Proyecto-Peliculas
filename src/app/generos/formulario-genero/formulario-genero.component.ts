import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: [ './formulario-genero.component.css' ]
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }


  form: FormGroup;

  @Input()
  modelo: generoCreacionDTO

  @Output()
  onSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [ '', {
        validators: [ Validators.required, Validators.minLength(3), primeraLetraMayuscula() ]
      } ]
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios() {
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if (campo.hasError('required')) {
      return 'El campo nombre es requerido'
    }
    if (campo.hasError('minlength')) {
      return 'la longitud minima es 3 caracteres'
    }

    if (campo.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

}
