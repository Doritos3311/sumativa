import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.css']
})
export class SecondaryButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
  }
}