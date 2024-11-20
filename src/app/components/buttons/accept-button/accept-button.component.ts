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
  }
}