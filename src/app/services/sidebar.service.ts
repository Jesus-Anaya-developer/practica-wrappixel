import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        // * Las rutas se sacan de las que definimos en pages.routing.ts
        { title: 'Main', url: '/' },
        { title: 'Grafica', url: 'grafica1' },
        { title: 'progressBar', url: 'progress' },
        { title: 'Promesas', url: 'promesas' },
        { title: 'rxjs', url: 'rxjs' },
      ]
    }
  ];

  constructor() { }
}
