import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})

export class Grafica1Component {

  public doughnutLabels1: string[] = ['Pambazos', 'Tortas', 'Tacos'];

  doughnutData1: ChartData<'doughnut'> = {
    labels: this.doughnutLabels1,
    datasets: [
      {
        data: [50, 40, 10],
        backgroundColor: ['#0B2F3A', '#8A0829', '#F5ECCE']
      }
    ]
  };

  /*
  doughnutLabels2: string[] = ['Pambazos', 'Tortas', 'Tacos'];
  doughnutData2: number[] = [50, 40, 10];
  doughnutColors2: any[] = ['#0B2F3A', '#8A0829', '#F5ECCE'];

  doughnutLabels3: string[] = ['Xiaomi', 'Samsung', 'Motorola'];
  doughnutData3: number[] = [708, 204, 384];
  doughnutColors3: any[] = ['#2E9AFE', '#819FF7', '#0A0A2A'];

  doughnutLabels4: string[] = ['Celular', 'Laptop', 'Tablet'];
  doughnutData4: number[] = [4, 8, 5];
  doughnutColors4: any[] = ['#688A08', '#088A68', '#240B3B'];
  */
}
