import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent implements OnInit {
  @Input() public title: string;
  @Input('labels') public doughnutChartLabels: Label[];
  @Input('data') public doughnutChartData: number[];
  @Input('type') public doughnutChartType: ChartType;
  constructor() {
    this.title = 'grafico algo';
    this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    this.doughnutChartData = [350, 450, 100]
    this.doughnutChartType = 'doughnut';
  }

  ngOnInit() {
  }

}
