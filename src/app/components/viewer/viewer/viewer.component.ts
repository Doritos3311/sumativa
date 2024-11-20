import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  standalone: true, // Asegúrate de que esto esté presente
  template: `
    <div>
      <h3>Datos Ingresados:</h3>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Contraseña:</strong> {{ password }}</p>
      <p><strong>Texto:</strong> {{ text }}</p>
    </div>
  `,
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() text: string = '';
}