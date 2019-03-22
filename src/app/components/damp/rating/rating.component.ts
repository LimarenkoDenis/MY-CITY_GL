import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit, OnChanges {
    @Input() public maxRating = 0;
    @Input() public rating = 0;

    @Output() public changeRating: EventEmitter<number> = new EventEmitter<number>();

    public elements: undefined[] = [];
    constructor() {
    }

    ngOnChanges(): void {
        // console.log(this.rating)
    }

    ngOnInit() {
        this.elements.length = this.maxRating;
    }

    public clickHandler(index: number): void {
        this.changeRating.emit(index);
    }
}


















