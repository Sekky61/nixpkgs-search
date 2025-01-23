import { Component, computed, inject, input } from '@angular/core';
import { SearchResult } from '../../services/search.service';
import { CopyToClipboardDirective } from '../../features/clipboard/copy-to-clipboard.directive';
import { NotificationsService } from '../../features/notifications/notifications.service';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CopyToClipboardDirective],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  result = input.required<SearchResult>();
  nixSearchUrl = computed(() => `https://search.nixos.org/packages?channel=unstable&show=${this.result().name}&from=0&size=50&sort=relevance&type=packages`);

  notifications = inject(NotificationsService);

  sendCopiedNotif(value: string) {
    console.log('sending notif');
    this.notifications.pushNotification(`Copied package name ${value}`);
  }
}
