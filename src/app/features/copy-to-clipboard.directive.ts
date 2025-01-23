import { Directive, HostListener, inject, input } from '@angular/core';
import { ClipboardService } from './clipboard.service';

@Directive({
  selector: 'button[appCopyToClipboard]',
  standalone: true
})
export class CopyToClipboardDirective {
  valueToCopy = input.required<string>();
  clipboardService = inject(ClipboardService);

  @HostListener('click')
  onClick() {
    this.clipboardService.copyString(this.valueToCopy());
  }
}
