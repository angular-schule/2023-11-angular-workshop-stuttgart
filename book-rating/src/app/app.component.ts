import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';
import { BookActions } from './books/store/book.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Book Rating (${ environment.stage })`;

  constructor(store: Store) {
    store.dispatch(BookActions.loadBooks())
  }
}
