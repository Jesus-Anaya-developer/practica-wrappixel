import { Component } from '@angular/core';
import { Observable, interval, retry, take, map } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent {

  constructor() {


    /*
        // *Para que se ejecute el observable se debe suscribir
        // *retry(3): Reintenta el observable 3 veces
        this.retornaObservable().pipe(retry(3))
          .subscribe({
            // *Se pueden pasar 3 callbacks
            // *next: Se ejecuta cuando el observable emite un valor
            next: (v) => console.log('Subs', v),
            // *error: Se ejecuta cuando el observable emite un error
            error: (e) => console.error('Error', e),
            // *complete: Se ejecuta cuando el observable se completa
            complete: () => console.log('El observador terminó')
          });
      */

    this.retornaIntervalo().subscribe({
      next: (v) => console.log(v)
    });

  }

  retornaIntervalo(): Observable<number | string> {

    return interval(1000)
      .pipe(
        // *take(6): Finaliza el observable después de 6 emisiones
        take(6),
        // *map(): Modifica el valor emitido
        map((v: number) => { return "Hola mundo " + v; })
      );
  }

  retornaObservable(): Observable<number> {

    let i = -1;

    return new Observable<number>(observer => {

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

        if (i === 2) {
          // *Forzar un error con .error()
          observer.error('i llegó a 2');
        }
      }, 1000);
    });

  }
}
