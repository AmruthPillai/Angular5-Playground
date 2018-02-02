import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public name = 'Amruth Pillai';
  public greeting = '';

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.greeting = 'Welcome, ' + this.name + '!';
    console.log(event);
  }

}
