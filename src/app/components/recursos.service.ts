import { Injectable } from '@angular/core';
import { RecursosInterface } from './recursos-interface';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  recursosList:RecursosInterface[] = [];

  setRecurso(recurso: RecursosInterface){
    if(recurso.nombre !== '' && recurso.categoria !== '' && recurso.prioridad !== 0){
      this.recursosList.push(recurso)
    }
  }

  getRecursos(): RecursosInterface[] {
    return this.recursosList;
  }

  deleteRecurso(index: number){
    this.recursosList.splice(index, 1)
  }

  adquirir(index: number){
    if(!this.recursosList[index].adquirido){
      this.recursosList[index].adquirido = true;
    } else {
      this.recursosList[index].adquirido = false;
    }
  }
}
