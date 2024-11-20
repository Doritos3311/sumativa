import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dark-mode-button',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode-button.component.html',
  styleUrl: './dark-mode-button.component.css'
})
export class DarkModeButtonComponent {
  @Output() modeChanged = new EventEmitter<void>();

  toggleMode() {
    this.modeChanged.emit();
  }
}
