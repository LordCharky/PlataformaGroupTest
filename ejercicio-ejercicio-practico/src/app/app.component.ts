import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClienteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio-ejercicio-practico';
}
