import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  standalone: true,
  template: `<button (click)="handleClick()">Cancelar</button>`,
  styles: [`button { background-color: red; color: white; }`]
})
export class CancelButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
  }
}