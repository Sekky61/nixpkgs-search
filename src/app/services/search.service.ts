import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  http = inject(HttpClient);
  apiUrl = 'https://search.devbox.sh/v2';
  private _results = signal([1, 2]);
  results = this._results.asReadonly();

  constructor() {
    console.log('http', this.http);
  }

  fetchSearch() {
    this.http.get(`${this.apiUrl}/search`).pipe(
      catchError(err => {
        console.error('api failed', err);
        return of([]);
      })
    );
  }
}
