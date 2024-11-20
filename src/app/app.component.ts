import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel
import { PrimaryButtonComponent } from './components/buttons/primary-button.component';
import { SecondaryButtonComponent } from './components/buttons/secondary-button.component';
import { AcceptButtonComponent } from './components/buttons/accept-button/accept-button.component';
import { CancelButtonComponent } from './components/buttons/cancel-button/cancel-button.component';
import { DarkModeButtonComponent } from './components/buttons/dark-mode-button.component';
import { PasswordInputComponent } from './components/inputs/password-input.component';
import { EmailInputComponent } from './components/inputs/email-input.component';
import { TextInputComponent } from './components/inputs/text-input.component';
import { ViewerComponent } from './components/viewer/viewer.component';

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
  template: `
    <h1>Galería de Componentes</h1>
    <app-password-input (passwordChange)="onPasswordChange($event)"></app-password-input>
    <app-email-input (emailChange)="onEmailChange($event)"></app-email-input>
    <app-text-input (textChange)="onTextChange($event)"></app-text-input>

    <app-primary-button (buttonClicked)="onButtonClick('primary')"></app-primary-button>
    <app-secondary-button (buttonClicked)="onButtonClick('secondary')"></app-secondary-button>
    <app-accept-button (buttonClicked)="onButtonClick('accept')"></app-accept-button>
    <app-cancel-button (buttonClicked)="onButtonClick('cancel')"></app-cancel-button>
    <app-dark-mode-button (modeChanged)="toggleDarkMode()"></app-dark-mode-button>

    <app-viewer [password]="password" [email]="email" [text]="text"></app-viewer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  password: string = '';
  email: string = '';
  text: string = '';

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
    console.log("Modo oscuro activado!");
  }
}