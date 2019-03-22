import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
    @Input() public initialValue = '';
    @Input() public elements: any = [];
    @Input() public filterProp = '';
    @Output() public selectElement: EventEmitter<any> = new EventEmitter<any>();

    public filteredElems: any;
    public filter: string;

    public constructor() { }

    public ngOnInit() {
    }

    public buttonClicked(event): void {
    }

    public inputValue(value: string): void {
        this.filterElements(value);
    }

    public selectElem(elem: any): void {

    }

    private filterElements(filter: string): void {
        this.filteredElems = this.elements.filter((el: any) => el[this.filterProp] && el[this.filterProp].includes(filter));
    }
}
