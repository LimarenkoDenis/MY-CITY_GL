import { IFilter } from './../../../interfaces/filter.elements.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters-elements',
  templateUrl: './filters-elements.component.html',
  styleUrls: ['./filters-elements.component.css']
})
export class FilterElementsComponent implements OnInit {
    @Input() public filters: IFilter[] = [];
    @Output() public selectedFilter: EventEmitter<IFilter> = new EventEmitter<IFilter>();

    public constructor() { }

    public ngOnInit() {
    }

    public selectFilter(filter: IFilter) {
        this.selectedFilter.emit(filter);
    }
}
