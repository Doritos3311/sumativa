import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  standalone: true,
  template: `
    <input type="text" (input)="onInput($event)" placeholder="Ingrese su texto">
  `,
  styles: [`input { margin: 8px 0; }`]
})
export class TextInputComponent {
  @Output() textChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement; // Asegúrate de que el tipo sea HTMLInputElement
    this.textChange.emit(input.value); // Emitir el valor del input
  }
}