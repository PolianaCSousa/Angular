import { Component, Output, EventEmitter } from '@angular/core';
//Preciso importar o Output para dados, e o EventEmitter quando eu quiser emitir eventos

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent {

  //o changeNumber será a propriedade que emitirá o evento. Quando o evento click aconteceu ele disparará a função handleClick que por sua vez vai emitir um evento que nomeei de changeNumber
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

    handleClick (){
      this.changeNumber.emit() //aqui o evento já está sendo emitido para o componente pai
    }
}
