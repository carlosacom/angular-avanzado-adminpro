import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html'
})
export class IncrementatorComponent {
  @ViewChild('input') public input: ElementRef
  @Input('nombre') public text: string;
  @Input() public percentage: number;
  @Output('changes') public change: EventEmitter<number>;
  constructor() {
    this.percentage = 50;
    this.text = 'Leyenda';
    this.change = new EventEmitter();
  }
  changeValue(number: number) {
    if (this.percentage >= 100 && number > 0) {
      this.percentage = 100;
    } else if(this.percentage <= 0 && number < 0) {
      this.percentage = 0;
    } else {
      this.percentage += number;
    }
    this.change.emit(this.percentage);
    this.input.nativeElement.focus();
  }
  onChange (newValue: number) {
    if (newValue >= 100) {
      this.percentage = 100;
    } else if(newValue <= 0) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }
    this.input.nativeElement.value = this.percentage;
    this.change.emit(this.percentage);
  }
}
