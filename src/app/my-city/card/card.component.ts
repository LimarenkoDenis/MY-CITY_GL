import { Component, OnInit, Input } from '@angular/core';
import { IPlace } from '../interfaces/place.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public place: IPlace;

  @Input()
  public even: boolean;


  constructor() { }

  ngOnInit() {

  }

  getClass() {
    return 'myClass';
  }

}
