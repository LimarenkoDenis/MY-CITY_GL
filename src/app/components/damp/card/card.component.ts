import { RatingComponent } from './../rating/rating.component';
import { IAttraction } from './../../../interfaces/attraction.interface';
import {
  Output,
  Input,
  EventEmitter,
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  NgZone
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements DoCheck, OnChanges, OnInit,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() attraction: any = null;
  @Output() clickButton: EventEmitter<string> = new EventEmitter<string>();


  public prevTitle: string;
  public time: number;

  @ViewChildren(RatingComponent) RatingComponent: QueryList<RatingComponent>;

  public constructor(private cd: ChangeDetectorRef) {
      console.log(`constructor - data is ${this.attraction}`);
  }

  public ngOnChanges(values): void {
      console.log(`ngOnChanges - data is -`, values);
  }

  public ngOnInit(): void {
    // this.cd.checkNoChanges()
    // this.cd.detach();

    // setTimeout(() => {
    //   this.cd.reattach();
    // }, 5000);


    // this.cd.markForCheck();
    // this.cd.detectChanges();

    this.prevTitle = this.attraction.title;

    console.log(`ngOnInit  - data is`, this.attraction);
  }
  public ngDoCheck(): void {
    if (this.prevTitle !== this.attraction.title) {
      this.prevTitle = this.attraction.title;
      this.cd.markForCheck();
    }

      // console.log(`ngDoCheck -`, this.attraction);
  }
  public ngAfterContentInit(): void {
      console.log('ngAfterContentInit');
      console.log('ngAfterContentInit - RatingComponent', this.RatingComponent);
  }
  public ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
  }
  public ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
      console.log('ngAfterViewInit - RatingComponent', this.RatingComponent);
  }
  public ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
  }
  public ngOnDestroy(): void {
      console.log('ngOnDestroy');
  }




  public changeRating($event) {
    this.attraction.rating = $event;
  }

  public clickHandler($event): void {
    this.clickButton.emit($event);
  }
}







  //  constructor(private cd: ChangeDetectorRef, private zone: NgZone) {
  //   this.time = this.getDate();

    // this.zone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     this.time = this.getDate();
    //   }, 1);
    // });
  // }

  // public getDate(): number {
  //   return Date.now();
  // }