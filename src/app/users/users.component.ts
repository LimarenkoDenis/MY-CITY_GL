import { AddProducts } from './../products.actions';
import { activeUsers, selectedUser, totalUserAge, extendUsers } from './../reducers/user.reducer';
import { LoadUsers, AddUser, RemoveUser, UpdateUser } from './../actions/user.actions';
import { State } from './../reducers';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {
  public isLoading$: Observable<any>;
  public users$: Observable<any>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.users$ = this.store.select('user', 'data');
    this.isLoading$ = this.store.select('user', 'isLoading');
    this.store.dispatch(new LoadUsers());



    setTimeout(() => {
      this.store.dispatch(new AddProducts({ products: { id: '1' }}));
    }, 3000)

    this.store.pipe(select(activeUsers, { isActive: true })).subscribe(data => {
      console.log(data);

    })

    this.store.pipe(select(activeUsers, { isActive: false })).subscribe(data => {
      console.log('offlee', data);

    });


    this.store.pipe(select(selectedUser, { id: 1 })).subscribe(data => {
      console.log('selected user', data);

    });


    this.store.pipe(select(totalUserAge)).subscribe(data => {
      console.log('total age', data);

    });

    this.store.pipe(select(extendUsers)).subscribe(data => {
      console.log('extendUsers', data);

    });




  }

  addUser() {
    this.store.dispatch(new AddUser({ id: Math.random(), name: Math.random(), age: Math.random(), isActive: false }))
  }

  removeUser(id: number) {
    this.store.dispatch(new RemoveUser(id));
  }

  updateUser(id: number) {
    this.store.dispatch(new UpdateUser({id, userToUpdate: { name: Math.random()}}));
  }

}
