import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  rateUp = new EventEmitter<Book>();

  @Output()
  rateDown = new EventEmitter<Book>();

  @Input({ required: true })
  book: Book | undefined; // oder Fragezeichen!

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }
}
