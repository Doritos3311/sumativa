import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

@Component({
  selector: 'app-square',
  standalone: true, // Asegúrate de que esto esté presente si usas componentes independientes
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() isCircle: boolean = false; // Variable para determinar si es círculo
  @Input() position: number = 0; // Posición del cuadrado
  @Input() color: string = 'black'; // Color del cuadrado

  get shapeClass() {
    return this.isCircle ? 'circle' : 'square '; // Determina la clase según la forma
  }
}