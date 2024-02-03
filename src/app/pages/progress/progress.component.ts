import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  progreso1: number = 20;
  progreso2: number = 30;

  get getprogreso1() {
    return `${this.progreso1}%`;
  }

  get getprogreso2() {
    return `${this.progreso2}%`;
  }
}
