import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Livro } from '../../../models/livro';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livros-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './livros-form.component.html',
  styleUrl: './livros-form.component.scss'
})
export class LivrosFormComponent {

  tituloComponente: string = "Novo livro";

  livro: Livro = new Livro(0,'','');

  router = inject(Router);
  rotaAtivade = inject(ActivatedRoute);

  constructor(){
    let id = this.rotaAtivade.snapshot.params['id'];
    if(id > 0){
      this.tituloComponente = "Editar livro";   
      this.findById(id);
    }
  }


  findById(id: number){
    //VAI PARA O BACK

    let aux = new Livro(4,'aaaa','bbbb');
    this.livro = aux;

  }



  save(){
    
    Swal.fire({
      title: "Livro salvo com sucesso!",
      icon: "success"
    }).then(() => {
      this.router.navigate(['admin/livros']);
    });


  }


}
