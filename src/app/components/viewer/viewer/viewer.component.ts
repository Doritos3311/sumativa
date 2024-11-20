import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  standalone: true, // Asegúrate de que esto esté presente
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() text: string = '';
}