import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NoWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: string } => {
    const isWhiteSpaceBeforeAndAfter: boolean = control.value && control.value.trim();
    return isWhiteSpaceBeforeAndAfter ? null : { whitespace: 'value is only whitespace' };
  };
}
