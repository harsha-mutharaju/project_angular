import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-httpdemo1',
  imports: [],
  templateUrl: './httpdemo1.component.html',
  styleUrl: './httpdemo1.component.css'
})
export class Httpdemo1Component {

  user_url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient : HttpClient){
    
  }

  ngOnInit(){
      this.fetchUserData_angular();
      //this.fetchUserData_javascript();
    }

    fetchUserData_angular(){ // httpClient.get() returns observable
      this.httpClient.get(this.user_url).subscribe(response => {
        console.log(response);
      })
    }
     fetchUserData_javascript(){ // fetch returns promise
      fetch(this.user_url).then(response=> {
        response.json().then(finalResponse => {
          console.log(finalResponse);
        })
      })

        
      }

}
