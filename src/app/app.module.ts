import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaGeneroComponent } from './components/lista-genero/lista-genero.component';
import { LivroComponent } from './components/livro/livro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaGeneroComponent,
    LivroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
