import { Component } from '@angular/core';
import { Livro } from '../../../models/livro';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livros-list',
  standalone: true,
  imports: [],
  templateUrl: './livros-list.component.html',
  styleUrl: './livros-list.component.scss'
})
export class LivrosListComponent {

  lista: Livro[] = [];

  constructor(){
    this.findAll();
  }

  findAll(){
    //DEPOIS... ISSO VAI CHAMAR UM LIVROS-SERVICE QEU VAI CHAMAR O BACK

    this.lista.push(new Livro(1,'AAA', 'Joãozinho'));
    this.lista.push(new Livro(2,'BBB', 'Joãozinho'));
    this.lista.push(new Livro(3,'CCC', 'Joãozinho'));
    this.lista.push(new Livro(4,'DDD', 'Joãozinho'));

  }

  deleteById(livro: Livro){


    Swal.fire({
      title: "Tem certeza que deseja deletar o livro "+livro.titulo+"?",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        let indice = this.lista.findIndex(x => {return x.id == livro.id});
        this.lista.splice(indice,1);
        Swal.fire("Deletado com sucesso!", "", "success");
      }
    });


  }

}
