import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent {
  @Output() passwordChange = new EventEmitter<string>();
  isInvalid = false;

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.isInvalid = input.value.length < 6;
    if (!this.isInvalid) {
      this.passwordChange.emit(input.value);
    }
  }
}