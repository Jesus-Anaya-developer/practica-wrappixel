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
        { title: 'progressBar', url: 'progress' },
        { title: 'Grafica', url: 'grafica1' },
      ]
    }
  ];

  constructor() { }
}
