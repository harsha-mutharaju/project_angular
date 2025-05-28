import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, from, interval, map, Observable, range, take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observabledemo1',
  templateUrl: './observabledemo1.component.html',
  styleUrls: ['./observabledemo1.component.css'],
  imports:[CommonModule]
})
export class Observabledemo1Component implements OnInit {

  time$ = new Observable<string>(observer => {
   setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
});


  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.create_observable();
    this.fetchUsers();
    this.from_demo();
    this.interval_demo();
    this.range_demo();
  }

  create_observable() {
    let publisher1 = new Observable((producer) => {
      producer.next('AAA');
      producer.next('BBB');
      producer.next('CCC');
      producer.complete();
    });

    //       let subscriber1 = publisher1.subscribe((partialResponse)=>{
// console.log('partial response received' , partialResponse);
//       },
//     (error)=>{
//       console.log('something is wrong' , error);
//     },
//   ()=> {
// console.log('all data received');
//   })

    let subscriber1 = publisher1.subscribe({
      next: (partialResponse) => {
        console.log('partial response received', partialResponse);
      },
      error: (error) => {
        console.log('something is wrong', error);
      },
      complete: () => {
        console.log('all data received');
      }
    });
  }

  fetchUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (partialResponse) => {
        console.log('Partial response received', partialResponse);
      },
      error: (error) => {
        console.log('Something went wrong', error);
      },
      complete: () => {
        console.log('All Data Received');
      }
    });

    
  }
  from_demo(){
      let carsArr = ['Tata' , 'Maruti']
      let carsObservable = from(carsArr)

      carsObservable.subscribe((response)=> {
        console.log('response',response)
      });
    }

    numPublisher:any;
    interval_demo(){
      this.numPublisher = interval(1000);
      // this.numPublisher.subscribe((val:any)=>{
      //   console.log(val)
      // })



    }


    range_demo(){
      let publisher1to10 = range(1,10);
      publisher1to10.subscribe((val:any)=>console.log(val));

      let publisher1to5 = publisher1to10.pipe(take(5));
      publisher1to5.subscribe((val:any)=>console.log(val));

      let publisher1to5square = publisher1to5.pipe(map(ele=>ele*ele));
      publisher1to5square.subscribe((val:any)=>console.log(val));


      let publisher1to10even = publisher1to10.pipe(filter(ele=> ele%2 ==0));
      publisher1to10even.subscribe((val:any)=>console.log(val));


    }
}
