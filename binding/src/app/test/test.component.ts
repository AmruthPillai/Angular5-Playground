import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>
      Welcome, {{ name }}!
    </h1>

    <hr>

    <!-- <h2>{{ 2 + 2 }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.uppercase }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2>{{ siteUrl }}</h2> -->

    <!-- <input [disabled]=isDisabled type="text" value="Amruth Pillai" /> -->

    <h2 [class]="successClass">This is a Angular 5 app!</h2>
    <h2 [class.text-danger]="hasError">This is a Angular 5 app!</h2>
    <h2 [ngClass]="messageClasses">This is a Angular 5 app!</h2>

    <hr>

    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = 'Amruth Pillai';
  public siteUrl = window.location.href;
  public isDisabled = true;

  public successClass = 'text-success';

  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'font-italic': this.isSpecial
  };

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello, ' + this.name;
  }

}
