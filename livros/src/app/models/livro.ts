export class Livro {

    id!: number;
    titulo!: string;
    autor!: string;

    constructor(id: number, titulo: string, autor: string){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
    }
    
}
