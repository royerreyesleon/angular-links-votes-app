import { Component } from '@angular/core';

import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-links-votes-app';

  // link : string[] = ['uno', 'dos', 'tres'];
  // link : string[];

  links : Link[];

  constructor(){
    this.links = [
      new Link('Angular', 'http://angular.io', 100),
      new Link('Angular 2', 'http://angular.io', 200),
      new Link('Angular 3', 'http://angular.io', 300),
    ];

    // console.log(this.links);
  }

  addLink(title : HTMLInputElement, link : HTMLInputElement){

    this.links.push(new Link(title.value, link.value));

    title.value = '';
    link.value  = '';

    title.focus();
    
    return false;

  }
}
