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
import { SquareComponent } from './components/square/square.component'; // Importar el nuevo componente

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
    SquareComponent, // Agregar el componente del cuadrado aquí
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  password: string = '';
  email: string = '';
  text: string = '';
  squareColor: string = 'black'; // Color inicial del cuadrado
  isDarkMode: boolean = false; // Variable para controlar el modo oscuro
  isCircle: boolean = false; // Variable para controlar la forma del cuadrado
  squarePosition: number = 0; // Variable para controlar la posición del cuadrado

  onPrimaryButtonClick() {
    this.squareColor = '#7C082D'; // Cambiar a color azul
  }

  onSecondaryButtonClick() {
    this.squareColor = '#0E636E'; // Cambiar a color rojo
  }

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

  // Método para manejar la animación del cuadrado
  moveAndResetSquare() {
    this.squarePosition += 690; // Mueve el cuadrado 50px a la derecha
    setTimeout(() => {
      this.squarePosition = 0; // Regresa a la posición inicial después de 500ms
    }, 1000); // Ajusta el tiempo según sea necesario
  }

  // Método para alternar la forma del cuadrado
  toggleShape() {
    this.isCircle = !this.isCircle; // Cambia la forma
  }
}
