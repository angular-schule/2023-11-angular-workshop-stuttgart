import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { BookActions } from './book.actions';


@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return inject(Actions).pipe(

      ofType(BookActions.loadBooks),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => BookActions.loadBooksSuccess({ data })),
          catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });
}
