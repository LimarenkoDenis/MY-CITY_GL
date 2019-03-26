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


  @Input()
  appAcl;
  constructor() { }

  ngOnInit() {
    console.log('appAcl', this.appAcl);

  }

  getClass() {
    return 'myClass'
  }

}
