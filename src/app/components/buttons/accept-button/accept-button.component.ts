import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accept-button',
  standalone: true,
  template: './accept-button.component.html',
  styles: ['./accept-button.component.css']
})
export class AcceptButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
  }
}