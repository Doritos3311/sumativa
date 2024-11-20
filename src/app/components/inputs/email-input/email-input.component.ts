import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.css'
})
export class EmailInputComponent {
  @Output() emailChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement; // Asegúrate de que el tipo sea HTMLInputElement
    this.emailChange.emit(input.value); // Emitir el valor del input
  }
}
