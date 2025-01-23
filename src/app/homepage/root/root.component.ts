import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter, throttleTime } from 'rxjs';
import { SearchResultComponent } from '../search-result/search-result.component';

const THROTTLE_MS = 500;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, SearchResultComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css',
})
export class RootComponent {
  search = inject(SearchService);
  searchStringControl = new FormControl('');

  constructor() {
    // Send api requests on change, but throttled
    this.searchStringControl.valueChanges.pipe(
      throttleTime(THROTTLE_MS, undefined, {trailing: true}),
      filter((searchVal) => searchVal !== null && searchVal !== '')
    ).subscribe((newVal) => {
      console.log('change', newVal, this.searchStringControl.value);
      this.search.fetchSearch(newVal ?? ''); // null cannot happen though
    });
  }
}
