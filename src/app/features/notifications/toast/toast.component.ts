import { Component, inject } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  notificationsService = inject(NotificationsService);
  notifications$ = toSignal(this.notificationsService.getNotifications());
}
