import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  // ADD CLASS.
  @HostBinding('attr.class') cssClass = 'row';

  // ENTRY FOR EACH LINK.
  @Input() link : Link;

  constructor() {

  }
  
  ngOnInit(): void {
    console.log(this.link);
  }

}
