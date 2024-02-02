import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent {

  @Input() progreso: number = 0;

  cambiarValor(valor: number) {
    this.progreso = Math.max(0, Math.min(100, this.progreso + valor));
  }
}
