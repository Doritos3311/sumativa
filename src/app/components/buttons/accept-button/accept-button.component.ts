import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accept-button',
  standalone: true,
  imports: [],
  templateUrl: './accept-button.component.html',
  styleUrl: './accept-button.component.css'
})
export class AcceptButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
  }
}
