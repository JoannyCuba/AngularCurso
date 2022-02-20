import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['hulk', 'ironman', 'superman', 'batman']
  heroeBorrado:string[]=[]
  borrarHeroe() {
    this.heroeBorrado = this.heroes.splice(0,1)
    
    console.log('borrando',this.heroeBorrado)
  }
}
