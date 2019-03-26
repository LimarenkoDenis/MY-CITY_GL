import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public user = {
    name: 'Dan',
    status: 'active'
  };

  public user2 = {
    name: 'Dan',
    status: 'offline'
  };

  constructor() { }

  ngOnInit() {
  }

}
