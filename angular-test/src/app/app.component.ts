import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  dukes= [{ name: "offline", age: 2}, { name: "cached", age: 3}];

  constructor(private http: Http) {

  }
  ngOnInit(){
	//some statement for debug demonstration. --by katrina
    let i:number=7;
    console.log(i+2);
    this.http.get("http://localhost:8080/dukes/resources/dukes/")
      .toPromise()
      .then(r => r.json()).then(r => this.dukes=r);
    //the other solution: 
      // .map(response => {
      //   return response.json()
      // })
      // .subscribe((items: any) => {
      //   console.log('items: ' + items);
      //   this.dukes = items;
      // }, error => console.error(error));
}
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
