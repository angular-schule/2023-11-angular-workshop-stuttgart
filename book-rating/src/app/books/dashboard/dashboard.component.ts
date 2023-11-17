import { Component } from '@angular/core';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  books: Book[] = [
    {
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    }, {
      isbn: '111',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 3
    }, {
      isbn: '222',
      title: 'jQuery',
      description: 'Total veraltetes Buch',
      rating: 1
    },
  ];

  doRateUp(book: Book) {
    console.log(book);
  }

  doRateDown(book: Book) {
    console.log(book);
  }

}
