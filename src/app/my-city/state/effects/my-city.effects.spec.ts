import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MyCityEffects } from './my-city.effects';

describe('MyCityEffects', () => {
  let actions$: Observable<any>;
  let effects: MyCityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyCityEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(MyCityEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
