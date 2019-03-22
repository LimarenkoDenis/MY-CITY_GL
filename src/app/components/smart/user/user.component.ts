import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../interfaces/user.interface';
import mockUserInfo from '../../../mock/user.mock.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    public userInfo: IUser;
    constructor() { }

    ngOnInit() {
        this.userInfo = mockUserInfo;
    }
}
