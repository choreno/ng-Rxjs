import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app works!';

  everyResult=''; 
  exhaustResult=''; 
  expandResult =''; 
  
  isFind = false; 
  findResult:string ; 

  ngOnInit() {
    //Every    
    Observable.of(1,2,3,4,5,6)
    .every(x => x < 7)
    .subscribe(x => this.everyResult = x.toString());

    //Exhaust
    const click = Observable.fromEvent(document, 'click');
    const highOrder = click.map(x => Observable.interval(1000).take(4));
    const result = highOrder.exhaust();
    result.subscribe(x => this.exhaustResult += x.toString());

    //Expand
    const click2 = Observable.fromEvent(document,'click');
    const powofTwo = click2
    .mapTo(1)
    .expand(x => Observable.of(2*x).delay(500))
    .take(10);

    powofTwo.subscribe(x => this.expandResult  += `${x}-`);


    //Find -- find a first value to meet condition.
    
    Observable.of(1,2,3,4,5,6,7)
    .find(x => x%7 == 0)
    .subscribe(x => this.findResult += `${x} `);
    this.isFind = true; 


  }



}




// RXJS Tutorials


// 1. Works!
//  import {Observable} from 'rxjs/Observable';
//  import 'rxjs/add/operator/map';

//   var t = console.log('x');

// ------------------



// // 2. Import All Rxjs
// import * as Rx from 'rxjs/Rx';

// // 1. Map & Share

// const obs = Rx.Observable
//   .interval(500)
//   .take(5)
//   .do(x => console.log(x))
//   .share();



// obs.subscribe(x => console.log('obs1-' + x));
// obs.subscribe(x => console.log('obs2-' + x));


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
















