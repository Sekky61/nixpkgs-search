import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  http = inject(HttpClient);
  private _results = signal([1, 2]);
  results = this._results.asReadonly();

  constructor() { 
    console.log('http', this.http);
  }
}
