import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {

  @Input() title: string = 'Sin título';
  @Input() data: number[] = [];
  @Input() labels: string[] = [];

  // Doughnut
  public doughnutChartLabels: string[] = this.labels;

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data.join(',').split(',').map(Number),
        backgroundColor: [
          '#81F7F3',
          '#00FFFF',
          '#088A85',
        ]
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
