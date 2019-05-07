import { Component, OnInit, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { Observable } from 'rxjs';
import { totalUserAmount } from '../reducers/user.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalUserCount$: Observable<number>;

  @HostListener('click', ['$event'])
  public myClick(event) {
    console.log('click header', event);
  }

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.totalUserCount$ = this.store.pipe(select(totalUserAmount));

    // this.totalUserCount$ = this.store.select(totalUserAmount);

  }

}
