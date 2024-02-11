import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

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

    this.intervalSubs = this.retornaIntervalo().subscribe({
      next: (v) => console.log(v)
    });

  }

  ngOnDestroy(): void {

    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number | string> {

    return interval(500)
      .pipe(
        // *map(): Modifica el valor emitido
        map((v: number) => { return v + 1 }),
        // *filter(): Filtra los valores emitidos
        filter((v: number) => (v % 2 === 0) ? true : false),
        // *take(6): Finaliza el observable después de 6 emisiones
        take(10),

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
