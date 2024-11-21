import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-cancel-button',
  standalone: true,
  imports: [CommonModule], // Asegúrate de agregar CommonModule aquí
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.css']
})
export class CancelButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();
  isCircle = false; // Variable para controlar la forma

  handleClick() {
    this.buttonClicked.emit();
    this.toggleShape();
  }

  toggleShape() {
    this.isCircle = !this.isCircle; // Cambia la forma
  }
}