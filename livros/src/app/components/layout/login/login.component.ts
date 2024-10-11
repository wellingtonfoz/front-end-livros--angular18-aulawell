import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Login } from '../../../models/login';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login: Login = new Login();

  router = inject(Router); //equivalente ao @Autowired.... traz uma instância única do roteador para o componente

  autenticar() {
    if (this.login.username == 'admin' && this.login.senha == 'admin') {
      Swal.fire({
        title: 'Good job!',
        text: 'Logado com sucesso!',
        icon: 'success',
      });

      this.router.navigate(['admin/dashboard']);
    } else
      Swal.fire({
        title: 'Error!',
        text: 'Usuário ou senha incorretos',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
  }
}
