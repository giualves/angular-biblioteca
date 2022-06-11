import { Livro } from "./livro";

export class Genero {

    constructor(
        public codigo: number,
        public nome: String,
        public livros: Livro[]
    )
        
    {
        
    }
}