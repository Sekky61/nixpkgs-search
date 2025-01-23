import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root' // means "Singleton"
})
export class ClipboardService {
  private copiedValue = signal<string | null>(null);

  copyString(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      this.copiedValue.set(value);
    });
  }
}
