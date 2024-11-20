import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css'
})
export class PasswordInputComponent {
  @Output() passwordChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement; // Asegúrate de que el tipo sea HTMLInputElement
    this.passwordChange.emit(input.value); // Emitir el valor del input
  }
}
