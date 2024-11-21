import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accept-button',
  standalone: true,
  templateUrl: './accept-button.component.html',
  styleUrls: ['./accept-button.component.css']
})
export class AcceptButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
    this.animateSquare();
  }

  animateSquare() {
    const square = document.getElementById('square'); // Asegúrate de tener un elemento con este ID en tu HTML
    if (square) {
      square.classList.add('animate'); // Agrega la clase para iniciar la animación
      setTimeout(() => {
        square.classList.remove('animate'); // Remueve la clase después de la animación
      }, 1000); // Duración de la animación en milisegundos
    }
  }
}