import { Component } from '@angular/core';
import { Observable, Observer, fromEvent, Subject, AsyncSubject, BehaviorSubject, ReplaySubject, Subscription } from 'rxjs';
import { share, publish } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {



    // const myObservables = Observable.create((observer: Observer<string>) => {
    //   // console.log('Observable init');
    //   observer.next('Observable created****:');
    //   setTimeout(() => {
    //     observer.next('FIRST RESPONSE****:');
    //   }, 2000);

    //   setTimeout(() => {
    //     // observer.complete();
    //     observer.next('SECOND RESPONSE****:');
    //   }, 4000);

    //   // setTimeout(() => {
    //   //   observer.error('ERROR RESPONSE****:');
    //   //   observer.next('After error');
    //   // }, 5000);

    //   // setTimeout(() => {
    //   //   observer.complete();
    //   //   observer.next('After completed');
    //   // }, 6000);

    //   setTimeout(() => {
    //     observer.next('after unsubscribe****:');
    //   }, 11000);
    // }).pipe(
    //   // share()
    // );

    // const subscription: Subscription = myObservables.subscribe(
    //   {
    //     next: (response: string) => {
    //       console.log('RESPONSE: ', response);
    //       // addItem(`'RESPONSE------1: ', response`);
    //     },
    //     error: (error: string) => {
    //       console.error('FAILURE RESPONSE: ', error);
    //       // addItem(`'FAILURE RESPONSE-----1: ', response`);
    //     },
    //     complete: () => {
    //       console.log('COMPLETED');
    //       // addItem('COMPLETED-----1');
    //     }
    //   }
    // );

    // setTimeout(() => {
    //   console.log('ubsubscribed')
    //   subscription.unsubscribe();
    // }, 3000);

    // setTimeout(() => {
    //   const subscription2 = myObservables.subscribe(
    //     (response: string) => {
    //       console.log('RESPONSE2: ', response);
    //       // addItem(`'RESPONSE-----2: ', response`);
    //     },
    //     (error: string) => {
    //       console.error('FAILURE RESPONSE2: ', error);
    //       // addItem(`'FAILURE RESPONSE-----2: ', error`);
    //     },
    //     () => {
    //       console.log('COMPLETED2');
    //       // addItem('COMPLETED-----2');
    //     }
    //   );

    // //   // myObservables.connect();

    //   subscription.add(subscription2);
    // }, 3000);

    // setTimeout(() => {
    //   console.log('unsubscribe');
    //   subscription.unsubscribe();
    // }, 10000);





    // const source = fromEvent(document, 'click');
    // setTimeout(() => {
    //   const subscribe = source.subscribe(val => console.log(val));
    // }, 2000)












    // Subject:
    // const subject = new Subject();
    // subject.subscribe(x => console.log(x));
    // subject.next(1);    // в консоли: 1
    // subject.next(2);    // в консоли: 2
    // subject.subscribe(x => console.log(x));    // в консоли: 1
    // subject.next(3);
    // subject.complete();






    // AsyncSubject
    // const subject = new AsyncSubject();
    // subject.subscribe(x => console.log(x));
    // subject.next(1);
    // subject.next(2);
    // subject.complete(); // в консоли: 2







    // BehaviorSubject
    // const subject = new BehaviorSubject(0);
    // subject.subscribe(x => console.log(x)); // в консоли: 0
    // subject.next(1); // в консоли: 1
    // subject.next(2); // в консоли: 2
    // console.log(subject.getValue()) // в консоли: 2
    // subject.subscribe(x => console.log(x)); // в консоли: 2
    // subject.complete();






    // ReplaySubject
    const subject = new ReplaySubject(2);
    // subject.subscribe(x => console.log(x));
    subject.next(1); // в консоли: 1
    subject.next(2); // в консоли: 2
    subject.next(3); // в консоли: 2
    subject.next(4); // в консоли: 2
    // subject.subscribe(x => console.log(x));
    subject.complete();
  }
}



function addItem(val: any) {
  const node: HTMLElement = document.createElement('li');
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
