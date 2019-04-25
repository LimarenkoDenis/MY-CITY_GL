import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <h1>Secondary 1 Component</h1>
  `
})
export class Secondary1Component implements OnInit {
  constructor(private a: ActivatedRoute) {}

  ngOnInit() {
  }
}
