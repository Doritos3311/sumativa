import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/buttons/secondary-button/secondary-button.component';
import { AcceptButtonComponent } from './components/buttons/accept-button/accept-button.component';
import { CancelButtonComponent } from './components/buttons/cancel-button/cancel-button.component';
import { DarkModeButtonComponent } from './components/buttons/dark-mode-button/dark-mode-button.component';
import { PasswordInputComponent } from './components/inputs/password-input/password-input.component';
import { EmailInputComponent } from './components/inputs/email-input/email-input.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { ViewerComponent } from './components/viewer/viewer/viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    AcceptButtonComponent,
    CancelButtonComponent,
    DarkModeButtonComponent,
    PasswordInputComponent,
    EmailInputComponent,
    TextInputComponent,
    ViewerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  password: string = '';
  email: string = '';
  text: string = '';
  isDarkMode: boolean = false; // Variable para controlar el modo oscuro

  onPasswordChange(value: string) {
    this.password = value;
  }

  onEmailChange(value: string) {
    this.email = value;
  }

  onTextChange(value: string) {
    this.text = value;
  }

  onButtonClick(type: string) {
    console.log(`${type} button clicked!`);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode; // Cambia el estado del modo oscuro
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode'); // Agrega clase al body
      console.log("Modo oscuro activado!");
    } else {
      document.body.classList.remove('dark-mode'); // Remueve clase del body
      console.log("Modo oscuro desactivado!");
    }
  }
}
