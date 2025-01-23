import { Component, computed, input } from '@angular/core';
import { SearchResult } from '../../services/search.service';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  result = input.required<SearchResult>();
  nixSearchUrl = computed(() => `https://search.nixos.org/packages?channel=unstable&show=${this.result().name}&from=0&size=50&sort=relevance&type=packages`);
}
