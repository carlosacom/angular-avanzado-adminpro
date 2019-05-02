import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  public percentage1: number;
  public percentage2: number;
  constructor() {
    this.percentage1 = 20;
    this.percentage2 = 30;
  }

  ngOnInit() {
  }
}
