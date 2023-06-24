import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  //as propriedades podem ser variaveis, arrays ou objetos. Independente do que seja, eu consigo ter acesso a elas lá no template usando {{}}
  nome :string = "Poliana";
  disciplinas = ['SD', 'Filosofia', 'Dev. Front'];
  pet = {
    nome: 'Bob',
    idade: 15,
    raca: 'Poodle'
  };
}
