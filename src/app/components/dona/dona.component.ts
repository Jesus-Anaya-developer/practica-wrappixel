import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {

  @Input() title: string = 'Sin título';
  @Input() doughnutData: ChartData<'doughnut'> = {
    datasets: []
  };

  public doughnutLabels1: string[] = ['Motos', 'Coches', 'Camiones'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutLabels1,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#B45F04', '#F7C137', '#F7F7F7']
      }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}
