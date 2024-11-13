import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  template: `<button (click)="handleClick()">Botón Secundario</button>`,
  styles: [`button { background-color: gray; color: white; }`]
})
export class SecondaryButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
  }
}