import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, of } from 'rxjs';

interface SearchResponse {
  query: string;
  total_results: number;
  results: SearchResult[];
}

interface SearchResult {
  name: string;
  summary: string;
  last_updated: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  http = inject(HttpClient);
  private _results = signal<SearchResult[]>([]);
  results = this._results.asReadonly();

  fetchSearch(query: string) {
    console.log('call search');
    this.http
      .get<SearchResponse>(`/api/search`, { params: { q: query } })
      .pipe(
        catchError(err => {
          console.error('api failed', err);
          return of({
            query: '',
            total_results: '',
            results: [] as SearchResult[],
          });
        })
      )
      .subscribe(response => {
        this._results.set(response.results);
        console.log('search response', response);
      });
  }
}
