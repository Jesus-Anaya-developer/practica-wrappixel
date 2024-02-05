import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// * Se importa la función customInitFunction para que no marque error
declare function customInitFunction(): any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit {



  constructor(private settingsServices: SettingsService) { }

  ngOnInit() {
    customInitFunction();
  }

}
