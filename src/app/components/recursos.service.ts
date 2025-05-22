import { Injectable } from '@angular/core';
import { RecursosInterface } from './recursos-interface';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  recursosList:RecursosInterface[] = [];

  constructor(){
    this.cargarLS();
  }

  cargarLS() {
    const datos = localStorage.getItem("recursos");
    if (datos) {
      this.recursosList = JSON.parse(datos);
      this.ordenar();
    }
  }

  private ordenar() {
  this.recursosList.sort((a, b) => a.prioridad - b.prioridad);
  }

  guardarEnLS(){
    const recursos = this.recursosList;
    localStorage.setItem("recursos", JSON.stringify(recursos));
  }

  setRecurso(recurso: RecursosInterface){
    if(recurso.nombre !== '' && recurso.categoria !== '' && recurso.prioridad !== 0){
      this.recursosList.push(recurso)
      this.ordenar();
      this.guardarEnLS();
    }
  }

  getRecursos(): RecursosInterface[] {
    return this.recursosList;
  }

  deleteRecurso(index: number){
    this.recursosList.splice(index, 1)
    this.guardarEnLS();
  }

  adquirir(index: number){
    this.recursosList[index].adquirido = !this.recursosList[index].adquirido;
    this.guardarEnLS();
  }
}
