import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, take, takeUntil, tap } from 'rxjs/operators';
import { Genero } from 'src/app/models/genero';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-lista-genero',
  templateUrl: './lista-genero.component.html',
  styleUrls: ['./lista-genero.component.css']
})
export class ListaGeneroComponent implements OnInit {

@Output()
public generoSelecionado: EventEmitter<Genero> = new EventEmitter()

public generos$: Observable<Genero[]> = 
  this.generoService.get().pipe(
    tap(generos => {
      console.log('Generos', generos);
    }),   
    catchError(err => {
      return this.generoService.get();
    }), 
  );

  constructor(  
    private generoService: GeneroService,
  ) { }

  ngOnInit(): void {

  }

  public selecionaLivro(genero: Genero) {
    console.log('Clicou na no livro', genero);
    this.generoSelecionado.emit(genero);
  }
}
