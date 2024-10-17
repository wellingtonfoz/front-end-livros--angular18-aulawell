import { Component, inject } from '@angular/core';
import { Livro } from '../../../models/livro';
import Swal from 'sweetalert2';
import { LivrosService } from '../../../services/livros.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livros-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './livros-list.component.html',
  styleUrl: './livros-list.component.scss'
})
export class LivrosListComponent {

  pesquisa: string = "";

  lista: Livro[] = [];

  livrosService = inject(LivrosService);

  constructor(){
    this.findAll();
  }

  findByTitulo(){
    this.livrosService.findByTitulo(this.pesquisa).subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro =>{
        alert('Deu erro');
      }
    })
  }

  findAll(){
  
   this.livrosService.findAll().subscribe({
      next: list =>{ //EQUIVALENTE AO TRY CONCLUÍDO NO BACK
        this.lista = list;
      },
      error: erro => { //EQUIVALENTE AO RETORNO DE ERRO DO BACK... CATCH OU EXCEPTION
        alert('Deu erro');
      }
    })

  }

  deleteById(livro: Livro){


    Swal.fire({
      title: "Tem certeza que deseja deletar o livro "+livro.titulo+"?",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {

        
        this.livrosService.delete(livro.id).subscribe({
          next: mensagem =>{
            Swal.fire(mensagem, "", "success");
            this.findAll();
          },
          error: erro => {
            alert('Deu erro');
          }
        })

      }
    });


  }

}
