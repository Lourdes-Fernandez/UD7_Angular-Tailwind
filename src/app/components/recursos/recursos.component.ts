import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { RecursosService } from '../recursos.service';
import { RecursosInterface } from '../recursos-interface';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-recursos',
  imports: [RouterLink, NgClass],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export class RecursosComponent {
  servicio = inject(RecursosService);
  
  // Leer siempre la lista actualizada
  get recursosList(): RecursosInterface[] {
    return this.servicio.getRecursos();
  }
  
  deleteRecurso(id: number){
    this.servicio.deleteRecurso(id);
  }

  adquirir(index:number) {
    this.servicio.adquirir(index)
  }
}
