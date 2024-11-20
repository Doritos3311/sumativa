import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
  @Output() textChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement; // Asegúrate de que el tipo sea HTMLInputElement
    this.textChange.emit(input.value); // Emitir el valor del input
  }
}
