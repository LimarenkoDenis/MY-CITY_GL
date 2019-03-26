import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from '../interfaces/place.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IPlace[], term: string, term2, term3): any {
    if (!term) {
      return value;
    }


    console.log(value, term, term2, term3);

    return value.filter((place: IPlace) => {
      return `${place.title.toLowerCase()}${place.description.toLowerCase()}`.includes(term.toLowerCase());
    });
  }

}
