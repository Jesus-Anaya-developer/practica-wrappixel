import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: number = 0;
  @Input() btnClass: string = 'btn-primary';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter()

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor: number) {
    this.progreso = Math.max(0, Math.min(100, this.progreso + valor));
    this.cambioValor.emit(this.progreso);
  }

  onChange(nuevoValor: number) {

    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    this.cambioValor.emit(this.progreso);
  }
}
