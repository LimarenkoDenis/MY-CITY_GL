import { NotesService } from './../notes-service';
import { switchMap, pluck } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  template: `
    <h1>Note Component with id: {{id}}</h1>
    <p>{{ (note | async)?.message }}</p>
  `
})
export class NoteComponent implements OnInit {
  id;
  note: Observable<{message: string}>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NotesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.noteid;

    this.activatedRoute.queryParams.subscribe(queryParams => console.log(queryParams));
    this.activatedRoute.params.subscribe(params => console.log(params));



    this.note = this.activatedRoute.params.pipe(
      pluck('noteid'),
      switchMap((noteid) => this.noteService.getNote(noteid))
    );


    // this.activatedRoute.data.subscribe(data => {
    //   console.log(data, 'Resolved data')
    // });
  }
}
