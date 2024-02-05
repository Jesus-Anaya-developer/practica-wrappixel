import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    // Se llama a la funcion checkCurrentTheme del servicio para que se ejecute al cargar la pagina
    this.settingsService.checkCurrentTheme();
  }

  // * Se agrega la funcion changeTheme para que sea accesible desde el html
  changeTheme(theme: string) {
    // Se llama a la funcion changeTheme del servicio para cambiar el tema
    this.settingsService.changeTheme(theme);
  }


}
