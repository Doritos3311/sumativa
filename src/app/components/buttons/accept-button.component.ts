import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accept-button',
  standalone: true,
  template: `<button (click)="handleClick()">Aceptar</button>`,
  styles: [`button { background-color: green; color: white; }`]
})
export class AcceptButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
  }
}