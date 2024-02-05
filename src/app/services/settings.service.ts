import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // *  Se saca de la funcion changeTheme para que sea accesible desde el html y no salte al DOM
  private links: HTMLElement[] = Array.from(document.querySelectorAll('.selector'));; // Initialize the "links" property

  // * Se saca de la funcion changeTheme para que sea accesible desde el html y no salte al DOM
  private themeElement = document.querySelector('#theme');

  constructor() {
    //Se llama a la funcion changeThemeService para que se ejecute al cargar la pagina
    this.changeThemeService();
  }

  // * Se carga el tema guardado en el localStorage
  changeThemeService() {
    // Se llama a la funcion changeTheme para que se ejecute al cargar la pagina
    const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    // If the theme exists, change the href attribute to the new theme.
    if (this.themeElement) {
      this.themeElement.setAttribute('href', theme);
    }
  }

  // * Se cambia el tema que seleccione el usuario
  changeTheme(theme: string) {
    // If the theme exists, change the href attribute to the new theme.
    if (this.themeElement) {
      this.themeElement.setAttribute('href', `./assets/css/colors/${theme}.css`);
      // Save the theme in the local storage.
      localStorage.setItem('theme', `./assets/css/colors/${theme}.css`);

      this.checkCurrentTheme();
    }
  }

  // * Revisa cual es el tema seleccionado actual
  checkCurrentTheme() {
    this.links.forEach(elem => {

      //Remover la clase working
      elem.classList.remove('working');

      // Obtener el data-theme para comparar con el tema actual
      const btnTheme = elem.getAttribute('data-theme');

      // Obtener el tema actual
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      // Obtener el tema actual del localStorage
      const currentTheme = this.themeElement?.getAttribute('href'); // Add null check

      // Comparar el tema actual con el tema del boton
      if (btnThemeUrl === currentTheme) {
        // Si es el mismo tema, agregar la clase working
        elem.classList.add('working');
      }
    });
  }

}
