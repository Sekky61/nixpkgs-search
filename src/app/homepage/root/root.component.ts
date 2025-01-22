import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css',
})
export class RootComponent {
  search = inject(SearchService);
  searchStringControl = new FormControl('');

  constructor() {
    // Send api requests on change, but throttled
    this.searchStringControl.valueChanges
      .pipe(throttleTime(300, undefined, { trailing: true }))
      .subscribe(newVal => {
        console.log('change', newVal, this.searchStringControl.value);
        this.search.fetchSearch(newVal ?? '');
      });
  }
}
