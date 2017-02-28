import { Component, OnInit } from '@angular/core';
// import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-ch1',
  templateUrl: './ch1.component.html',
  styleUrls: ['./ch1.component.scss']
})
export class Ch1Component implements OnInit {

  constructor() { }

  ngOnInit() {



  }

}




// const a = Rx.Observable.interval(1000).take(5).map(function(i) {
// return 'A' + i;
// });
// const b = Rx.Observable.interval(2000).take(5).map(function(i) {
// return 'B' + i;
// });
// Rx.Observable.merge(a, b).subscribe(function(x) {
// console.log(x);
// });
//Create an observable that emits a value every 500ms
//const myInterval = Rx.Observable.interval(500);
// //After 2 seconds have passed, emit buffered values as an array
// const bufferTime = myInterval.bufferTime(2000);
// //Print values to console
// //ex. output [0,1,2]...[3,4,5,6]
// const subscribe = bufferTime.subscribe(val => console.log('Buffered with Time:', val));



// const bufferTimeTwo = myInterval.bufferTime(2000,1000);
// //Print values to console
// const secondSubscribe = bufferTimeTwo.subscribe(val => console.log('Start Buffer Every 1s:', val));

// //emit value every 1 second
// const oneSecondInterval = Rx.Observable.interval(1000);
// //return an observable that emits value every 5 seconds
// const fiveSecondInterval = () => Rx.Observable.interval(5000);
// //every five seconds, emit buffered values
// const bufferWhenExample = oneSecondInterval.bufferWhen(fiveSecondInterval);
// //log values
// //ex. output: [0,1,2,3]...[4,5,6,7,8]
// const subscribe = bufferWhenExample.subscribe(val => console.log('Emitted Buffer: ', val));











