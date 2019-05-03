import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  public obs: Subscription;
  constructor(
  ) {
    this.obs = this.observable()
    .subscribe(
      data => console.log(data),
      error => console.error(error),
      () => console.log('el observador terminó')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('dejo la pagina');
    this.obs.unsubscribe();
  }
  observable(): Observable<any> {
    return new Observable( observer => {
      let count = 0;
      
      let interval = setInterval(() => {
        count += 1;
        const salida = {
          count
        };
        observer.next(salida);
        // if (count === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // } 
        // if (count === 2) {
        //   // clearInterval(interval);
        //   observer.error('auxilio');
        // }
      }, 1000);
    }).pipe(
      map( res => res['count'] ),
      filter( (data, index) => {
        // console.log('filter', data, index );
        return ((data % 2) === 1) ? true : false ;
      }),
    );
  }
}
