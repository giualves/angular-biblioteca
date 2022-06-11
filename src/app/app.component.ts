import { Component } from '@angular/core';
import { Genero } from './models/genero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web';

  public generoParaExibir?: Genero;
  public exibeGenero(genero: Genero): void {
    this.generoParaExibir = genero;
  }
}
