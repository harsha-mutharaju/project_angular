import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectdemo1',
  imports: [],
  templateUrl: './subjectdemo1.component.html',
  styleUrl: './subjectdemo1.component.css'
})
export class Subjectdemo1Component {
  ngOnInit() {
    // this.subject_demo();
    // this.behaviour_subject_demo();
    // this.replay_subject_demo();
    this.async_subject_demo();
  }
  subject_demo() {
    let publisher = new Subject();
    publisher.next('AAA');
    publisher.subscribe(val => console.log('Subscriber-1: ', val));
    publisher.next('BBB');
    publisher.subscribe(val => console.log('Subscriber-2: ', val));
    publisher.next('CCC');
  }
  behaviour_subject_demo() {
    let publisher = new BehaviorSubject('Default Value');
    publisher.next('AAA');
    publisher.subscribe(val => console.log('Subscriber-1: ', val));
    publisher.next('BBB');
    publisher.subscribe(val => console.log('Subscriber-2: ', val));
    publisher.next('CCC');
  }
  replay_subject_demo() {
    let publisher = new ReplaySubject();
    publisher.next('AAA');
    publisher.subscribe(val => console.log('Subscriber-1: ', val));
    publisher.next('BBB');
    publisher.subscribe(val => console.log('Subscriber-2: ', val));
    publisher.next('CCC');
  }
  async_subject_demo() {
    let publisher = new AsyncSubject();
    publisher.next('AAA');
    publisher.subscribe(val => console.log('Subscriber-1: ', val));
    publisher.next('BBB');
    publisher.subscribe(val => console.log('Subscriber-2: ', val));
    publisher.next('CCC');
    publisher.complete();
  }
}