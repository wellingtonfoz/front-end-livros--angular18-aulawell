import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Livro } from '../../../models/livro';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LivrosService } from '../../../services/livros.service';

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
  //modoNovo: boolean = true;

  router = inject(Router);
  rotaAtivada = inject(ActivatedRoute);

  livrosService = inject(LivrosService);

  constructor(){
    let id = this.rotaAtivada.snapshot.params['id'];
    if(id > 0){
      //this.modoNovo = false; //
      this.tituloComponente = "Editar livro";   
      this.findById(id);
    }
  }


  findById(id: number){
    
    this.livrosService.findById(id).subscribe({
      next: liv => {
        this.livro = liv;
      },
      error: erro => {
        alert('Deu erro');
      }
    })

  }



  save(){

    this.livrosService.save(this.livro).subscribe({
      next: mensagem => {
        Swal.fire({
          title: mensagem,
          icon: "success"
        }).then(() => {
          this.router.navigate(['admin/livros']);
        });
      },
      error: erro => {
        alert('Deu erro');
      }
    });


  }

  update(){


    this.livrosService.update(this.livro).subscribe({
      next: mensagem =>{
        Swal.fire({
          title: mensagem,
          icon: "success"
        }).then(() => {
          this.router.navigate(['admin/livros']);
        });
      },
      error: erro =>{
        alert('Deu erro');
      }
    });
  }


}
