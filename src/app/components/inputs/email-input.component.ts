import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-input',
  standalone: true,
  template: `
    <input type="email" (input)="onInput($event)" placeholder="Ingrese su email">
  `,
  styles: [`input { margin: 8px 0; }`]
})
export class EmailInputComponent {
  @Output() emailChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement; // Asegúrate de que el tipo sea HTMLInputElement
    this.emailChange.emit(input.value); // Emitir el valor del input
  }
}