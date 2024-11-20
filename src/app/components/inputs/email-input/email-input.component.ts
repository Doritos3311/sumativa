import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule


@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent {
  @Output() emailChange = new EventEmitter<string>();
  isInvalid = false;

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.isInvalid = !emailPattern.test(input.value);
    if (!this.isInvalid) {
      this.emailChange.emit(input.value);
    }
  }
}