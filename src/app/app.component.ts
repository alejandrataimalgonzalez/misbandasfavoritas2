import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MIS BANDAS FAVORITAS';
  bandas= BANDAS;
  banda :Banda;
  seleccionar(item: Banda): void{
    this.banda = item;

  }  }
  


export class Banda{
  id: number;
  nombre: string;
  constructor (id,nombre){
    this.id= id;
    this.nombre=nombre;
  }
}
const BANDAS: Banda[] = [
      {id:11, nombre:'caifanes'},
      {id: 12,nombre: 'hombres G'},
      {id: 13,nombre: 'Bacilos'},
      {id: 14,nombre: 'Sin Bandera'},
      {id: 15,nombre: 'camila'}

]; 
