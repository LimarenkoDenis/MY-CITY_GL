import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { NoWhitespaceValidator } from './no-whitespace.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // form = new FormGroup({
  //   firstName: new FormControl('', [Validators.minLength(5), NoWhitespaceValidator()]),
  //   checkbox: new FormControl(false),
  // });
  // ngOnInit(): void {
  //   this.form.valueChanges.subscribe(data => {
  //     console.log(data)
  //   });


  //   this.getCheckbox.valueChanges.subscribe(checkboxValue => {
  //     if (checkboxValue) {
  //       this.form.addControl('subField', new FormControl('dsds'));
  //       this.isSubField.setValidators([Validators.minLength(10)]);
  //       this.form.updateValueAndValidity();
  //       this.isSubField.disable();
  //       return;
  //     }
  //     this.isSubField.setValidators(null);
  //     this.form.removeControl('subField');
  //     this.form.updateValueAndValidity();
  //   });
  // }

  // get getCheckbox(): AbstractControl {
  //   return this.form.get('checkbox');
  // }

  // get isSubField(): AbstractControl {
  //   return this.form.get('subField');
  // }






































  // form = new FormGroup({
  //   text: new FormControl('12345', [Validators.required, Validators.minLength(5)]),
  //   optionA: new FormControl(false),
  //   optionB: new FormControl(false),
  //   optionBExtra: new FormControl({ disabled: true, value: '' },
  //                  [Validators.required, Validators.minLength(5)])
  // });

  // ngOnInit(): void {
    // console.log(this.form)
    // this.form.valueChanges.subscribe(data => {
    //   console.log(data)
    // // });

    // this.optionB.valueChanges.subscribe(checked => {
    //   if (checked) {
    //     // const validators = [ Validators.required, Validators.minLength(5) ];
    //     // this.form.addControl('optionBExtra', new FormControl('', validators));
    //     this.optionBExtra.setValidators([Validators.required, Validators.minLength(5), NoWhitespaceValidator()]);
  //       this.optionBExtra.enable();
  //     } else {
  //       // this.form.removeControl('optionBExtra');
  //       this.optionBExtra.setValidators(null);
  //       this.optionBExtra.disable();
  //     }
  //     this.form.updateValueAndValidity();
  //   });
  // }

  // get optionB() {
  //   return this.form.get('optionB') as FormControl;
  // }

  // get optionBExtra() {
  //   return this.form.get('optionBExtra') as FormControl;
  // }

















  filterTypes = [
    'TRANSFER TM',
    'APP'
  ];

  apiTypes = [
    'Less Than',
    'Equals',
    'Greater Than'
  ];

  seedData = [
    { filterType: 'TRANSFER TM', apiType: 'Less Than', value: '100' },
    { filterType: 'TRANSFER TM' },
    { filterType: 'TRANSFER TM', apiType: 'Equals', value: '50' },
    { filterType: 'TRANSFER TM', apiType: 'Equals' },
    { filterType: 'TRANSFER TM', apiType: 'Greater Than', value: '150' },
    { filterType: 'APP', apiType: 'Less Than', value: '100' },
    { filterType: 'APP', apiType: 'Equals', value: '50' },
    { filterType: 'APP' },
    { filterType: 'APP', apiType: 'Greater Than' },
  ];

  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.fb.group({
      filters: this.fb.array([])
    });

    // Uncomment the line below If you want to seed the Form with some data
    this.seedFiltersFormArray();
  }

  seedFiltersFormArray() {
    this.seedData.forEach(seedDatum => {
      const formGroup = this.createFilterGroup();
      if (seedDatum.apiType) {
        formGroup.addControl('value', this.getFormControl());
      }
      formGroup.patchValue(seedDatum);
      this.filtersFormArray.push(formGroup);
    });
  }

  createFilterGroup() {
    return this.fb.group({
      filterType: [],
      apiType: []
    });
  }

  addFilterToFiltersFormArray() {
    this.filtersFormArray.push(this.createFilterGroup());
  }

  removeFilterFromFiltersFormArray(index) {
    this.filtersFormArray.removeAt(index);
  }

  selectedAPIChanged(i) {
    this.getFilterGroupAtIndex(i).addControl('value', this.getFormControl());
  }

  getFormControl() {
    return this.fb.control(null);
  }

  save() {
    console.log(this.dynamicForm.value);
  }

  get filtersFormArray() {
    return (this.dynamicForm.get('filters') as FormArray);
  }

  getFilterGroupAtIndex(index) {
    return (this.filtersFormArray.at(index) as FormGroup);
  }

}
