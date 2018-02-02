import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>
      Welcome, {{ name }}!
    </h1>

    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.uppercase }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2>{{ siteUrl }}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = 'Amruth Pillai';
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello, ' + this.name;
  }

}
