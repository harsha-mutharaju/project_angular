import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-observabledemo3',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './observabledemo3.component.html',
  styleUrls: ['./observabledemo3.component.css'] // ✅ plural: styleUrls
})
export class Observabledemo3Component {

  searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }
  ngOnInit() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
        // this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`
          this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)
      ),
      map((response: any) =>
        response.count > 0 ? response.results : []
    ));


  }
}
