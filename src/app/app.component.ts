import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app works!';
}

//RXJS Tutorials


//1 . Works!
//  import {Observable} from 'rxjs/Observable';
//  import 'rxjs/add/operator/map';

//   var t = console.log('x');

//------------------



//2. Import All Rxjs
import * as Rx from 'rxjs/Rx';
var t = Rx.Observable.of(1,2,3).map(x=>x+'!!!!');

var obs = Rx.Observable.interval(1000).take(5); 
console.log(obs); 


