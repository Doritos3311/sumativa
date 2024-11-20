import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  standalone: true,
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.css']
})
export class CancelButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
  }
}