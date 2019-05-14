import { Component, OnInit, Input } from '@angular/core';
import { IPlace } from '../interfaces/place.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardState', [
      state('default', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('liked', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(2)'
      })),
      transition('default => liked', animate('100ms ease-in')),
      transition('liked => default', animate('100ms ease-out'))
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input()
  public place: IPlace;

  @Input()
  public even: boolean;

  public state = 'default';

  constructor() { }

  ngOnInit() {

  }

  getClass() {
    return 'myClass';
  }

  public toggleLikedState() {
    this.state = this.state === 'liked' ? 'default' : 'liked';
  }
}
