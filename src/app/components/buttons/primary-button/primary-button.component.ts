import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
  }
}