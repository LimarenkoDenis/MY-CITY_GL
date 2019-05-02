import { LoadUsers, LoadUsersSuccess } from './../actions/user.actions';
import { State } from './../reducers';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public isLoading$: Observable<any>;
  public users$: Observable<any>;

  public user = {
    name: 'Dan',
    status: 'active'
  };

  public user2 = {
    name: 'Dan',
    status: 'offline'
  };

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.users$ = this.store.select('user', 'data');
    this.isLoading$ = this.store.select('user', 'isLoading');
    this.store.dispatch(new LoadUsers());



    // setTimeout(() => {
    //   this.store.dispatch(new LoadUsersSuccess([ {name: 'New user'} ]));
    // }, 3000)

    this.store.subscribe((data) => {
      console.log(data);

    });
  }

}
