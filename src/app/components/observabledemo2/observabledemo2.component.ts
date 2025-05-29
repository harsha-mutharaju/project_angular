import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { concatMap, exhaustMap, forkJoin, fromEvent, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observabledemo2',
  imports: [],
  templateUrl: './observabledemo2.component.html',
  styleUrl: './observabledemo2.component.css'
})
export class Observabledemo2Component {
  constructor(private httpClient : HttpClient){

  }

  ngOnInit(){
    this.forkjoin_demo();
    this.mergemap_demo();
    this.concatmap_demo();
  }

  forkjoin_demo(){
    const url1 = 'https://jsonplaceholder.typicode.com/users';
    const url2 = 'https://jsonplaceholder.typicode.com/users';
    const url3 = 'https://jsonplaceholder.typicode.com/users';

    let req1 = this.httpClient.get(url1);
    let req2 = this.httpClient.get(url2);
    let req3 = this.httpClient.get(url3);

    forkJoin([req1,req2,req3]).subscribe((responses) => {
      console.log(responses);
    }, (err)=> {
      console.log(err);
    })
  }


  mergemap_demo(){
    const userIdPublisher = of(1,2,3,4,5);

    userIdPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }


  concatmap_demo(){
     const userIdPublisher = of(1,2,3,4,5);

    userIdPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });

    
  }

  login(){
      console.log("login is invoked");

      this.httpClient.get('https://fakestoreapi.com/products')
  .subscribe(response => {
    console.log('login response', response);
  });

    }

    @ViewChild('loginBtn', { static: true }) loginBtn!: ElementRef;


ngAfterViewInit() {
  fromEvent(this.loginBtn.nativeElement, 'click').pipe(
    exhaustMap(() => 
      this.httpClient.get('https://fakestoreapi.com/products')
    )
  ).subscribe({
    next: (res) => console.log('Response:', res),
    error: (err) => console.error('Error:', err)
  });
}

}

