/* eslint-disable @ngrx/on-function-explicit-return-type */
import { createFeature, createReducer, on } from '@ngrx/store';
import { BookActions } from './book.actions';
import { Book } from '../shared/book';

export const bookFeatureKey = 'book';

export interface State {
  book: Book[];
  loading: boolean
}

export const initialState: State = {
  book: [],
  loading: false
};

export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => ({
    ...state,
    loading: true
  })),

  on(BookActions.loadBooksSuccess, (state, action) => ({
    ...state,
    loading: false,
    books: action.data
  })),


  on(BookActions.loadBooksFailure, (state) => ({
    ...state,
    loading: false,
    book: []
  })),
);

export const bookFeature = createFeature({
  name: bookFeatureKey,
  reducer,
});

