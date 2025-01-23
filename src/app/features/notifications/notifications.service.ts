import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Notification {
  type: 'info';
  id: number;
  message: string;
}

// aka Toast
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notifications$ = new Subject<Notification>();
  idCounter = 0;

  getNotifications(): Observable<Notification> {
    return this.notifications$.asObservable();
  }

  pushNotification(message: string) {
    this.notifications$.next({type: 'info', id: this.idCounter++, message});
  }
}
