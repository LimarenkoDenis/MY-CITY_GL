import { IAttraction } from './../../../interfaces/attraction.interface';
import { Component, OnInit } from '@angular/core';
import mockData from '../../../mock/cards.mock.json';

@Component({
  selector: 'app-cards-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public data: IAttraction = null;

  ngOnInit() {
    this.data = mockData;

    setTimeout(() => {
      this.data.title = 'Gorkiy Park';
      console.log('parent component mutate data')
    }, 2000)
  }

  public buttonClicked(event): void {
  }
}
