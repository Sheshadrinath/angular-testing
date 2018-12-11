import { Component, OnInit } from '@angular/core';
import { allUsers } from '../../data/data';
import { Observable, Subscriber, of, from, concat, fromEvent } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var fromEventButton = document.getElementById('fromEventButton');
    fromEvent(fromEventButton, 'click')
      .subscribe(event => {
        console.log(event);

        var weeklyPlan = document.getElementById('weeklyplan');
        for (let i = 0; i < allUsers.length; i++) {
          const element = allUsers[i];
          weeklyPlan.innerHTML += element.name + '<br/>';
        }

      });

    this.callObservableExample1();
    this.callObservableExample2();
    this.callObservableExample3();

    //Observables can be declared in below 3 ways.

    //var observable$ = new Observable(this.subscribe);
    //var observable$ = new Observable(subscribe => {
    var observable$ = Observable.create(subscribe => {

      if (document.title != 'Angular Jasmine Playground') {
        subscribe.error('Incorrect page title');
      }

      allUsers.forEach(user => {
        subscribe.next(user.name);
      });

      setTimeout(() => {
        subscribe.complete();
      }, 2000);

      return () => { console.log('Executing tear down') };
    });
    
    observable$.subscribe(user => console.log(user));   //Observable executed
  }

  //Another way of observable
  callObservableExample1() {
    var source1$ = of('hello', 'world', 1, true, allUsers[0].country);
    source1$.subscribe(data => { 
      setTimeout(() => {
        console.log(data)
      }, 500);
     });
  }

  callObservableExample2() {
    var source$ = from(allUsers);
    source$.subscribe(user => {
      setTimeout(() => {
        console.log(user)
      }, 500);
    });
  }

  callObservableExample3() {
    var source1$ = of('hello', 'world', 1, 0, true, allUsers[1].province);
    var source2$ = from(allUsers);

    concat(source1$, source2$)
      .subscribe(combine => { console.log(combine) });
  }

  subscribe(subscriber) {

    if (document.title != 'Angular Jasmine Playground') {
      subscriber.error('Incorrect page');
    }

    allUsers.forEach(user => {
      console.log(user);
    });

    setTimeout(() => {
      subscriber.complete();
    }, 2000);
  }
  
}
