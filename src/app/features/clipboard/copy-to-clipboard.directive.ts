import { Directive, HostListener, inject, input, output } from '@angular/core';
import { ClipboardService } from './clipboard.service';

@Directive({
  selector: 'button[appCopyToClipboard]',
  standalone: true
})
export class CopyToClipboardDirective {
  valueToCopy = input.required<string>();
  copied = output<string>();
  clipboardService = inject(ClipboardService);

  @HostListener('click')
  onClick() {
    this.clipboardService.copyString(this.valueToCopy());
    this.copied.emit(this.valueToCopy());
  }
}
