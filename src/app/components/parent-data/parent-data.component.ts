import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
  inputs: ['name', 'dados']
})
export class ParentDataComponent {
  /*É obrigatório inicializar no filho as propriedades que serão preenchidas com os dados do componente pai. 
  Para ver como inicializar e tipar os dados em TS leia o readme TYPESCRIPT.md*/
  
  name!: string;
  dados!: {email: string, role: string};

}
