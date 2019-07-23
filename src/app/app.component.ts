import { Component } from '@angular/core';
import { Observable, Observer, fromEvent, Subject, AsyncSubject, BehaviorSubject, ReplaySubject, Subscription, timer, combineLatest, concat, of, forkJoin, interval, from, throwError, merge } from 'rxjs';
import { share, publish, take, delay, startWith, scan, withLatestFrom, map, catchError, mergeMap, retry, tap, mapTo, multicast, debounceTime, distinctUntilChanged, filter, takeUntil, bufferTime, concatMap, pluck, switchMap, every } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {


    // Combination
    // Conditional
    // Creation
    // Error Handling
    // Filtering
    // Multicasting
    // Transformation
    // Utility








    // Combination

    // combineAll
    // combineLatest :star:
    // concat :star:
    // concatAll
    // endWith
    // forkJoin
    // merge :star:
    // mergeAll
    // pairwise
    // race
    // startWith :star:
    // withLatestFrom :star:
    // zip









    // combineLatest



    // // timerOne emits first value at 1s, then once every 4s
    // const timerOne$ = timer(1000, 3000).pipe(
    //   tap(data => console.log('timer 1 - ' + data))
    // );
    // // timerTwo emits first value at 2s, then once every 4s
    // const timerTwo$ = timer(2000, 4000).pipe(
    //   tap(data => console.log('timer 2 - ' + data))
    // );
    // // timerThree emits first value at 3s, then once every 4s
    // const timerThree$ = timer(3000, 4000).pipe(
    //   tap(data => console.log('timer 3 - ' + data))
    // );

    // combineLatest(
    //   timerOne$,
    //   timerTwo$,
    //   timerThree$,
    //   (timerValOne, timerValTwo, timerValThree) => {
    //     return {timerValOne, timerValTwo, timerValThree};
    //   }
    // ).subscribe(console.log
    //   // ([timerValOne, timerValTwo, timerValThree]) => {
    //   //   console.log(
    //   //     `Timer One Latest: ${timerValOne},
    //   //   Timer Two Latest: ${timerValTwo},
    //   //   Timer Three Latest: ${timerValThree}`
    //   //   );
    //   // }
    // );




      // concat


    // concat(
    //   of(1, 2, 3),
    //   // subscribed after first completes
    //   of(4, 5, 6).pipe(
    //     delay(1000)
    //   ),
    //   // subscribed after second completes
    //   of(7, 8, 9)
    // ).subscribe(console.log);






    // forkJoin


    const myPromise = val =>
      new Promise(resolve =>
        setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
      );

  /*
    when all observables complete, give the last
    emitted value from each as an array
  */
    // const example = forkJoin(
    //   // emit 'Hello' immediately
    //   of('Hello'),
    //   // emit 'World' after 1 second
    //   of('World').pipe(delay(1000)),
    //   // emit 0 after 1 second
    //   interval(1000).pipe(
    //     // switchMap(data => throwError('error'))
    //     take(1)
    //   ),
    //   // emit 0...1 in 1 second interval
    //   interval(1000).pipe(take(7)),
    //   // promise that resolves to 'Promise Resolved' after 5 seconds
    //   myPromise('RESULT')
    // );
    // output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
    // const subscribe = example.subscribe(val => console.log(val));









    // startWith


    // // emit ('World!', 'Goodbye', 'World!')
    // const source = of('World!', 'Goodbye', 'World!');
    // // start with 'Hello', concat current string to previous
    // const example = source.pipe(
    //   startWith('Hello'),
    //   scan((acc, curr) => `${acc} ${curr}`)
    // );

    // const subscribe = example.subscribe(val => console.log(val));









    // withLatestFrom



    // // emit every 5s
    // const source = interval(1000);
    // // emit every 1s
    // const secondSource = interval(5000);
    // const example = source.pipe(
    //   withLatestFrom(secondSource),
    //   map(([first, second]) => {
    //     return `First Source (5s): ${first} Second Source (1s): ${second}`;
    //   })
    // );

    // const subscribe = example.subscribe(val => console.log(val));










    // Conditional


    // defaultIfEmpty
    // every
    // iif
    // sequenceequal





    // every


    // // emit 5 values
    // const allEvens = of(3, 4, 6, 8, 10);
    // const example = allEvens.pipe(
    //   // is every value even?
    //   every(val => val % 2 === 0)
    // );
    // // output: true
    // const subscribe = example.subscribe(val => console.log(val));










    // Creation Operators


    // ajax :star:
    // create
    // defer
    // empty
    // from :star:
    // fromEvent
    // generate
    // interval
    // of :star:
    // range
    // throw
    // timer







    // from

    // // emit array as a sequence of values
    // const arraySource = from([1, 2, 3, 4, 5]);
    // // output: 1,2,3,4,5
    // const subscribe = arraySource.subscribe(val => console.log(val));







    // fromEvent

    // // create observable that emits click events
    // const source = fromEvent(document, 'click');
    // // map to string with given event timestamp
    // const example = source.pipe(
    //   map(event => `Event time: ${event.timeStamp}`)
    // );
    // // output (example): 'Event time: 7276.390000000001'
    // const subscribe = example.subscribe(val => console.log(val));








    // of


    // emits any number of provided values in sequence
    // const source = of([1, 2, 3, 4, 5]);
    // // output: 1,2,3,4,5
    // const subscribe = source.subscribe(val => console.log(val));













    // Error Handling Operators



    // throwError / catchError :star:
    // retry
    // retryWhen






    // throwError / catchError :star:


    // const source = throwError('This is an error!');
    // // gracefully handle error, returning observable with error message
    // const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
    // // output: 'I caught: This is an error'
    // const subscribe = example.subscribe(val => console.log(val));











    // retry



    // // emit value every 1s
    // const source = interval(1000);
    // const example = source.pipe(
    //   mergeMap(val => {
    //     // throw error for demonstration
    //     if (val > 5) {
    //       return throwError('Error!');
    //     }
    //     return of(val);
    //   }),
    //   // retry 2 times on error
    //   retry(2)
    // );
    // const subscribe = example.subscribe({
    //   next: val => console.log(val),
    //   error: val => console.log(`${val}: Retried 2 times then quit!`)
    // });








    // Multicasting Operators



    // publish
    // multicast
    // share :star:
    // shareReplay :star:








    // Filtering Operators






    // audit
    // auditTime
    // debounce
    // debounceTime :star:
    // distinctUntilChanged :star:
    // distinctUntilKeyChanged
    // filter :star:
    // find
    // first
    // ignoreElements
    // last
    // sample
    // single
    // skip
    // skipUntil
    // skipWhile
    // take :star:
    // takeLast
    // takeUntil :star:
    // takeWhile
    // throttle
    // throttleTime







    // debounceTime


    // elem ref
    // const searchBox = document.getElementById('search');

    // // streams
    // const keyup$ = fromEvent(document, 'click');

    // // wait .5s between keyups to emit current value
    // keyup$
    //   .pipe(
    //     // map((i: any) => i.currentTarget.value),
    //     debounceTime(1000)
    //   )
    //   .subscribe(console.log);







    // distinctUntilChanged



    // only output distinct values, based on the last emitted value
    // const source$ = from([1, 1, 2, 2, 3, 3]);

    // source$
    //   .pipe(distinctUntilChanged())
    //   // output: 1,2,3
    //   .subscribe(console.log);








    // filter


    // emit (1,2,3,4,5)
    // const source = from([1, 2, 3, 4, 5]);
    // // filter out non-even numbers
    // const example = source.pipe(filter(num => num % 2 === 0));
    // // output: "Even number: 2", "Even number: 4"
    // const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));





    // take

    // // emit 1,2,3,4,5
    // const source = of(1, 2, 3, 4, 5);
    // // take the first emitted value then complete
    // const example = source.pipe(take(3));
    // // output: 1
    // const subscribe = example.subscribe(val => console.log(val));



    // takeUntil

    // emit value every 1s
    // const source = interval(1000);
    // // after 5 seconds, emit value
    // const timer$ = timer(5000);
    // // when timer emits after 5s, complete source
    // const example = source.pipe(takeUntil(timer$));
    // // output: 0,1,2,3
    // const subscribe = example.subscribe(val => console.log(val));










    // Transformation Operators

    // buffer
    // bufferCount
    // bufferTime :star:
    // bufferToggle
    // bufferWhen
    // concatMap :star:
    // concatMapTo
    // exhaustMap
    // expand
    // groupBy
    // map :star:
    // mapTo
    // mergeMap / flatMap :star:
    // mergeScan
    // partition
    // pluck
    // reduce
    // scan :star:
    // switchMap :star:
    // switchMapTo
    // toArray
    // window
    // windowCount
    // windowTime
    // windowToggle
    // windowWhen








    // bufferTime


    // // Create an observable that emits a value every 500ms
    // const source = interval(500);
    // // After 2 seconds have passed, emit buffered values as an array
    // const example = source.pipe(bufferTime(2000));
    // // Print values to console
    // // ex. output [0,1,2]...[3,4,5,6]
    // const subscribe = example.subscribe(val =>
    //   console.log('Buffered with Time:', val)
    // );







    // concatMap

    // emit delay value
    // const source = of(2000, 1000);
    // // map value from source into inner observable, when complete emit result and move to next
    // const example = source.pipe(
    //   concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    // );
    // // output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    // const subscribe = example.subscribe(val =>
    //   console.log(`With concatMap: ${val}`)
    // );

    // showing the difference between concatMap and mergeMap
    // const mergeMapExample = source
    //   .pipe(
    //     // just so we can log this after the first example has run
    //     delay(5000),
    //     mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    //   )
    //   .subscribe(val => console.log(`With mergeMap: ${val}`));








    // map


    // // emit (1,2,3,4,5)
    // const source = from([1, 2, 3, 4, 5]);
    // // add 10 to each value
    // const example = source.pipe(map(val => val + 10));
    // // output: 11,12,13,14,15
    // const subscribe = example.subscribe(val => console.log(val));




    // mergeMap


    // // emit 'Hello'
    // const source = of('Hello');
    // // map to inner observable and flatten
    // const example = source.pipe(mergeMap(val => of(`${val} World!`)));
    // // output: 'Hello World!'
    // const subscribe = example.subscribe(val => console.log(val));







    // pluck

    // const source = from([{ name: 'Joe', age: 30 }, { name: 'Sarah', age: 35 }]);
    // // grab names
    // const example = source.pipe(pluck('name'));
    // // output: "Joe", "Sarah"
    // const subscribe = example.subscribe(val => console.log(val));






    // scan


    // const source = of(1, 2, 3);
    // // basic scan example, sum over time starting with zero
    // const example = source.pipe(scan((acc, curr) => acc + curr, 0));
    // // log accumulated values
    // // output: 1,3,6
    // const subscribe = example.subscribe(val => console.log(val));




    // switchMap


    // fromEvent(document, 'click')
    //   .pipe(
    //     // restart counter on every click
    //     switchMap(() => interval(1000))
    //   ).subscribe(console.log);









    // Utility Operators

    // tap / do :star:
    // delay :star:
    // delayWhen
    // dematerialize
    // finalize / finally
    // let
    // repeat
    // timeInterval
    // timeout
    // timeoutWith
    // toPromise




    // tap

    // const source = of(1, 2, 3, 4, 5);
    // // transparently log values from source with 'tap'
    // const example = source.pipe(
    //   tap(val => console.log(`BEFORE MAP: ${val}`)),
    //   map(val => val + 10),
    //   tap(val => console.log(`AFTER MAP: ${val}`))
    // );

    // // 'tap' does not transform values
    // // output: 11...12...13...14...15
    // const subscribe = example.subscribe(val => console.log(val));




    // delay

    // emit one item
    const example = of(null);
    // delay output of each by an extra second
    const message = merge(
      example.pipe(mapTo('Hello')),
      example.pipe(
        mapTo('World!'),
        delay(1000)
      ),
      example.pipe(
        mapTo('Goodbye'),
        delay(2000)
      ),
      example.pipe(
        mapTo('World!'),
        delay(3000)
      )
    );
    // output: 'Hello'...'World!'...'Goodbye'...'World!'
    const subscribe = message.subscribe(val => console.log(val));













































































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






    // // ReplaySubject
    // const subject = new ReplaySubject(2);
    // // subject.subscribe(x => console.log(x));
    // subject.next(1); // в консоли: 1
    // subject.next(2); // в консоли: 2
    // subject.next(3); // в консоли: 2
    // subject.next(4); // в консоли: 2
    // // subject.subscribe(x => console.log(x));
    // subject.complete();
  }
}



// function addItem(val: any) {
//   const node: HTMLElement = document.createElement('li');
//   const textnode = document.createTextNode(val);
//   node.appendChild(textnode);
//   document.getElementById('output').appendChild(node);
// }
