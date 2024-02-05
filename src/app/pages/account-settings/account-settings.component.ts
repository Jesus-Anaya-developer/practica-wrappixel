import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``
})
export class AccountSettingsComponent implements OnInit {

  //Se saca de la funcion changeTheme para que sea accesible desde el html y no salte al DOM
  public themeElement = document.querySelector('#theme');
  public links: HTMLElement[] = []; // Initialize the "links" property

  ngOnInit(): void {
    //Al iniciar el componente, se ejecuta las siguientes funciones
    this.links = Array.from(document.querySelectorAll('.selector'));
    this.checkCurrentTheme();
  }

  /**
   * Changes the theme of the application.
   *
   * @param theme - The name of the theme to apply.
   */
  changeTheme(theme: string) {
    // If the theme exists, change the href attribute to the new theme.
    if (this.themeElement) {
      this.themeElement.setAttribute('href', `./assets/css/colors/${theme}.css`);
      // Save the theme in the local storage.
      localStorage.setItem('theme', `./assets/css/colors/${theme}.css`);
    }

    this.checkCurrentTheme();
  }

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
