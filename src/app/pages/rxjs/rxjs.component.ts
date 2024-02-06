import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent {

  constructor() {

    const obs$ = new Observable(observer => {
      let i = -1;
      const intervalo = setInterval(() => {
        i++;
        // *Emitir un valor con .next()
        observer.next(i);

        if (i === 4) {

          // *Finalizar el intervalo con .clearInterval()
          // !Es necesario guardar el intervalo en una variable para poder finalizarlo
          clearInterval(intervalo);

          // *Finalizar el observable con .complete()
          observer.complete();
        }
      }, 1000);
    });

    // *Para que se ejecute el observable se debe suscribir
    obs$.subscribe({
      // *Se pueden pasar 3 callbacks
      // *next: Se ejecuta cuando el observable emite un valor
      next: (v) => console.log('Subs', v),
      // *error: Se ejecuta cuando el observable emite un error
      error: (e) => console.error('Error', e),
      // *complete: Se ejecuta cuando el observable se completa
      complete: () => console.log('El observador terminó')
    });

  }
}
