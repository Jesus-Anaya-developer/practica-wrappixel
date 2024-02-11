import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string = '';
  public tituloSubs: Subscription;

  constructor(private router: Router) {

    this.tituloSubs = this.getTitulo().subscribe(data => {
      console.log(data);
      this.titulo = data['titulo'];
      // *Establece el título de la página
      document.title = `AdminPro - ${this.titulo}`;
    });
  }

  ngOnDestroy(): void {
    // *Desuscribe el observable
    this.tituloSubs.unsubscribe();
  }

  getTitulo() {

    return this.router.events
      .pipe(
        // *Filtra los eventos de navegación para obtener solo los eventos de ActivationEnd
        filter((event: any) => event instanceof ActivationEnd),
        // *Filtra los eventos de ActivationEnd para obtener solo los eventos cuyo snapshot no tenga hijos
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        // *Mapea los eventos de ActivationEnd para obtener solo los datos del snapshot
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

}
