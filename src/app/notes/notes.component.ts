import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h1>Notes Component</h1>
  `
})
export class NotesComponent implements OnInit {

  constructor(private a: ActivatedRoute, private router: Router) {}

  ngOnInit() {  }
}
