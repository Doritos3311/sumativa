import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dark-mode-button',
  standalone: true,
  templateUrl: './dark-mode-button.component.html',
  styleUrls: ['./dark-mode-button.component.css']
})
export class DarkModeButtonComponent {
  @Output() modeChanged = new EventEmitter<void>();

  toggleMode() {
    this.modeChanged.emit();
  }
}