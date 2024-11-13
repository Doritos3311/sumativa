import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dark-mode-button',
  standalone: true,
  template: `<button (click)="toggleMode()">Modo Oscuro</button>`,
  styles: [`button { background-color: black; color: white; }`]
})
export class DarkModeButtonComponent {
  @Output() modeChanged = new EventEmitter<void>();

  toggleMode() {
    this.modeChanged.emit();
  }
}