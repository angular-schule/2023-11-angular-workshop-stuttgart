import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  @Input({ required: true })
  book: Book | undefined; // oder Fragezeichen!

  constructor() {
    console.log('Buch', this.book)
  }
}
