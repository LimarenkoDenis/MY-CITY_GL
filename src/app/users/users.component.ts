import { LoadUsers } from './../actions/user.actions';
import { State } from './../reducers';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadNewUsers } from '../new-user.actions';
import { byId } from '../new-user.reducer';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public isLoading$: Observable<any>;
  public users$: Observable<any>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.users$ = this.store.select('users', 'data');
    this.isLoading$ = this.store.select('users', 'isLoading');
    this.store.dispatch(new LoadUsers());


    this.store.pipe(select(byId, { id:  1 }) ).subscribe(data => {
      console.log(data);
    })



    this.store.dispatch(new LoadNewUsers({ newUsers: [
      { id: 1, name: 'Ann', age: 22, isActive: false },
      { id: 2, name: 'Dan', age: 29, isActive: false },
      { id: 3, name: 'Dima', age: 12, isActive: true },
      { id: 4, name: 'Egor', age: 6, isActive: true },
      { id: 5, name: 'Andrew', age: 90, isActive: false },
      { id: 6, name: 'Igor', age: 10, isActive: false },
    ] } as any));

  }

}
