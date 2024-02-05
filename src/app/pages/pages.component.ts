import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit {

  //Se saca de la funcion changeTheme para que sea accesible desde el html y no salte al DOM
  public themeElement = document.querySelector('#theme');

  ngOnInit() {

    const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    // If the theme exists, change the href attribute to the new theme.
    if (this.themeElement) {
      this.themeElement.setAttribute('href', theme);
    }
  }

}
