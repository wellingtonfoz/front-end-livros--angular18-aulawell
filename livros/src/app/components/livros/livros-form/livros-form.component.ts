import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Livro } from '../../../models/livro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livros-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './livros-form.component.html',
  styleUrl: './livros-form.component.scss'
})
export class LivrosFormComponent {

  livro: Livro = new Livro(0,'','');

  router = inject(Router);
  rotaAtivade = inject(ActivatedRoute);

  constructor(){
    let id = this.rotaAtivade.snapshot.params['id'];
    if(id > 0){
      this.findById(id);
    }
  }


  findById(id: number){
    //VAI PARA O BACK

    let aux = new Livro(4,'aaaa','bbbb');
    this.livro = aux;

  }



  save(){
    console.log(this.livro);

    // REQUISIÇÃO PRO BACK PARA SALVAR
    alert('Livro salvo com sucesso!');
    this.router.navigate(['admin/livros']);

  }


}
