import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  template: `<button (click)="handleClick()">Botón Primario</button>`,
  styles: [`button { background-color: blue; color: white; }`]
})
export class PrimaryButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
  }
}