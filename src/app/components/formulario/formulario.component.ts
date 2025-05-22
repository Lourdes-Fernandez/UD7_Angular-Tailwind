import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*import { RecursosComponent } from '../recursos/recursos.component';*/
import { inject } from '@angular/core';
import { RecursosService } from '../recursos.service';
import { RecursosInterface } from '../recursos-interface';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, /*RecursosComponent*/],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  servicio = inject(RecursosService);

  recurso: RecursosInterface = {
    nombre: '',
    categoria: '',
    prioridad: 0,
    adquirido: false
  }
  
  
  addData(){
    this.servicio.setRecurso(this.recurso);
    console.log(`Nombre: ${this.recurso.nombre} - Categoria: ${this.recurso.categoria} - Prioridad: ${this.recurso.prioridad}`)
    this.recurso = {nombre: '', categoria: '', prioridad: 0, adquirido: false};
  }
}
