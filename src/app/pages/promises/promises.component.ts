import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.count3().then(() => console.log('termino'))
    .catch( error => console.error('error en la promesa'));
  }

  ngOnInit() {
  }
  count3(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        let count = 0;
        let interval = setInterval(() => {
          count += 1;
          console.log(count);
          if (count === 3) {
            resolve(true);
            clearInterval(interval);
          }
        }, 1000); 
      } catch (error) {
        reject(false);
      }
    });
  }

}
