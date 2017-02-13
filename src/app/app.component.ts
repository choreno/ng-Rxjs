import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app works!';
}

// RXJS Tutorials


// 1. Works!
//  import {Observable} from 'rxjs/Observable';
//  import 'rxjs/add/operator/map';

//   var t = console.log('x');

// ------------------



// 2. Import All Rxjs
import * as Rx from 'rxjs/Rx';

// 1. Map & Share

const obs = Rx.Observable
  .interval(500)
  .take(5)
  .do(x => console.log(x))
  .share();



obs.subscribe(x => console.log('obs1-' + x));
obs.subscribe(x => console.log('obs2-' + x));


// const obs = Rx.Observable.interval(100)
//   .take(5)
//   .map(x => {
//     x = x * 2;
//     console.log(x);
//   }
//   ).subscribe();


// 2. Reduce

// const obs2 = Rx.Observable.interval(500).take(5).do(i => console.log(i)) ;
// const reduced = obs2.reduce( (state, value) => state + value, 0) ;
// reduced.subscribe(x => console.log('total: ' + x));


// 3. Scan

// const obs3 =  Rx.Observable.interval(10).take(5);
// const scanObs = obs3.scan((state, value) => state + value, 0);
// scanObs.subscribe(total => console.log(total));
// scanObs.count().subscribe(total => console.log(`count: ${total}`));

























