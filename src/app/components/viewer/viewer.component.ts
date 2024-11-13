import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  standalone: true,
  template: `
    <div>
      <h3>Datos Ingresados:</h3>
      <p><strong>Contraseña:</strong> {{ password }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Texto:</strong> {{ text }}</p>
    </div>
  `,
  styles: [`div { margin-top: 10px; }`]
})
export class ViewerComponent {
  @Input() password: string = '';
  @Input() email: string = '';
  @Input() text: string = '';
}