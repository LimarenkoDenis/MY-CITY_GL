import { IFilter } from './../../interfaces/filter.elements.interface';
import { Component, OnInit } from '@angular/core';
import filtersAttractions from '../../mock/filters-elements.mock.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public attractionsFilters: IFilter[];
    public constructor() {
    }

    public ngOnInit(): void {
        this.attractionsFilters = filtersAttractions;
    }
}
